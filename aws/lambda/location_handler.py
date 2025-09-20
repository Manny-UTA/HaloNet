import json
import requests  # need to figure this out - not included by default in AWS Lambada
#GET /location

FIRSTNET_API_URL = "https://api.firstnet.com/location"  # Replace with actual endpoint
FIRSTNET_API_KEY = "your-api-key"  # Store securely in AWS Secrets Manager

def lambda_handler(event, context): #event input from API Gateway, SNS #context is metadata about lambda (requestID)
    params = event.get('queryStringParameters', {}) #extracts URL query string params
    user_id = params.get('user_id') #looks for user id

    if not user_id:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Missing user_id'})
        }

    try:
        # Call FirstNet location API
        headers = {
            "Authorization": f"Bearer {FIRSTNET_API_KEY}", #passes API key as bearer token
            "Content-Type": "application/json" #tells API we are sending json
        }
        #request payload
        payload = {
            "user_id": user_id
        }
#payload is variable holding data
# "user_id" key API expects 
#user_id is variable from params.get('user_id')

#sending POST request to FirstNet API with headers and JSON body
        response = requests.post(FIRSTNET_API_URL, headers=headers, json=payload)

        if response.status_code != 200:
            return {
                'statusCode': response.status_code,
                'body': json.dumps({'error': 'Failed to retrieve location from FirstNet'})
            }

        location_data = response.json()  #converts response JSON from API into python dictionary

        return {
            'statusCode': 200,
            'body': json.dumps({'user_id': user_id, 'location': location_data})
        }

    except Exception as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': 'Internal server error'})
        }

#this script takes user_id, wraps in JSON payload, sends it to FirstNet API, returns the response
