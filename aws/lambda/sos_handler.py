import json

def lambda_handler(event, context):
    # Example AWS Lambda for SOS handling
    print("Received SOS Event:", event)
    return {
        "statusCode": 200,
        "body": json.dumps({"message": "SOS alert processed"})
    }
