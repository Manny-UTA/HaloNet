import json

# Fake FirstNet API details (not actually called)
FIRSTNET_API_URL = "https://mock-firstnet-api.com/location"
FIRSTNET_API_KEY = "fake-api-key-1234567890"

def lambda_handler(event, context):
    # Extract query parameters from API Gateway event
    params = event.get('queryStringParameters', {})
    user_id = params.get('user_id')

    # Validate user_id
    if not user_id:
        return {
            'statusCode': 400,
            'body': json.dumps({'error': 'Missing user_id'})
        }

    # Simulate a response as if it came from FirstNet
    location_data = {
        "latitude": 32.7767,
        "longitude": -96.7970,
        "city": "Dallas",
        "state": "TX",
        "status": "success"
    }

    # Return the simulated response
    return {
        'statusCode': 200,
        'body': json.dumps({
            'user_id': user_id,
            'location': location_data
        })
    }


#this script takes user_id, wraps in JSON payload, sends it to FirstNet API, returns the response
