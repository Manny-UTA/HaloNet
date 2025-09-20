import json
#GET /location

FIRSTNET_API_URL = "https://mock-firstnet-api.com/location"  # Replace with actual endpoint
FIRSTNET_API_KEY = "fake-api-key-1234567890"  # Store securely in AWS Secrets Manager

def lambda_handler(event, context): #event input from API Gateway, SNS #context is metadata about lambda (requestID)
    params = event.get('queryStringParameters', {}) #extracts URL query string params
    user_id = params.get('user_id') #looks for user id

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
