import json
import boto3 #AWS SDK will not be an error in aws console

#AWS clients
dynamodb = boto3.resource('dynamodb') #so you can interact with tables in DynamoDB
sns = boto3.client('sns') #send messages using AWS SNS

#table name and SNS topic ARN from DynamoDB
TABLE_NAME = 'SOSAlerts' #name the DyanmoDB table this
SNS_TOPIC_ARN = ''

def lambda_handler(event, context): #event: input data context: function name
    user_id = event['user_id']          # Extracts user ID from the incoming data
    location = event['location']        # Extracts location info

    # Save to database DynamoDB     
    table = dynamodb.Table(TABLE_NAME) #connects to DynamoDB table
    table.put_item(Item={ #save these to DynamoDB table
        'user_id': user_id,
        'location': location,
        'timestamp': context.aws_request_id # use AWS request ID
    })
    
     # Send alert via SNS - send SMS texts to phones (emergency contact)
    message = f"SOS received from {user_id} at {location}"
    sns.publish(
        TopicArn=SNS_TOPIC_ARN,
        Message=message,
        Subject='Emergency SOS Alert'
    )

    return {
        'statusCode': 200,
        'body': json.dumps(message)
    }
