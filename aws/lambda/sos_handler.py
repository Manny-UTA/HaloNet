import json
import boto3 # AWS SDK will not be an error in AWS console

# AWS clients
dynamodb = boto3.resource('dynamodb') # so you can interact with tables in DynamoDB
sns = boto3.client('sns') # send messages using AWS SNS

# table name and SNS topic ARN from DynamoDB
TABLE_NAME = 'SOSAlerts' # name the DynamoDB table
SNS_TOPIC_ARN = '' # add ARN here


def lambda_handler(event, context): # event: input data, context: function metadata
    try:
        # Extract POST data
        body = json.loads(event['body']) # load request body from event
        user_id = body.get('user_id')    # Extract user ID from the incoming data
        location = body.get('location')  # Extract location info

        # Validation check
        if not user_id or not location:
            return {
                'statusCode': 400,
                'body': json.dumps({'error': 'Missing user_id or location'})
            }

        # Save to DynamoDB table    
        table = dynamodb.Table(TABLE_NAME) # connects to DynamoDB table
        table.put_item(
            Item={ # NOTE: must use "Item" (capital I)
                'user_id': user_id,
                'location': location,
                'timestamp': context.aws_request_id # use AWS request ID as unique timestamp
            }
        )

        # Send alert via SNS - send SMS texts to phones (emergency contact)
        message = f"SOS received from {user_id} at {location}"
        sns.publish(
            TopicArn=SNS_TOPIC_ARN,
            Message=message,
            Subject='Emergency SOS Alert'
        )

        # Return success response
        return {
            'statusCode': 200,
            'body': json.dumps(message)
        }

    except Exception as e:
        # If something goes wrong, return error message
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
        }

# POST /sos - receives alert, saves to DB, sends message
# need to connect FirstNet -> use requests.post() or requests.get() to call their API

