import json
import boto3 #AWS SDK will not be an error in aws console


#AWS clients
dynamodb = boto3.resource('dynamodb') #so you can interact with tables in DynamoDB
sns = boto3.client('sns') #send messages using AWS SNS

#table name and SNS topic ARN from DynamoDB
TABLE_NAME = 'SOSAlerts' #name the DyanmoDB table this
SNS_TOPIC_ARN = '' #add arn here


def lambda_handler(event, context): #event: input data context: function name
    try:
    body = json.loads(event['body']) #EXTRACT POST data
    user_id = body['user_id']          # Extracts user ID from the incoming data
    location = body['location']        # Extracts location info

    if not user_id or not location:
        return{
            'statusCode': 400,
            'body': json.dumps({'error': 'Missing user_id or location'})
        }
    
    # Save to database DynamoDB     
    table = dynamodb.Table(TABLE_NAME) #connects to DynamoDB table
    table.put_item(item={ #save these to DynamoDB table
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

#POST /sos - recieves alert, saves to DB, sends message


#need to connect FirstNet use requests.post() or requests.get() to call their API
