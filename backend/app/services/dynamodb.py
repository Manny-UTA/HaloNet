# DynamoDB service to save and retrieve SOS alerts

import boto3 
import uuid 
from datetime import datetime 
 

# Boto 3 library allows for put, get and query items from table
# Create the resource and table objects
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
table = dynamodb.Table('sos_alerts')

# General database functions

def save_alert(user_id, location, threat_level):
    """New alert is saved to DynamoDB table"""
    timestamp = datetime.utcnow().isoformat()
    response = table.put_item(
        Item={
            'alert_id': str(uuid.uuid4()), # A unique identifier for each alert
            'user_id': user_id,
            'timestamp': timestamp,
            'location': location,
            'threat_level': threat_level
        }
    )
    return response

def get_alert(alert_id):
    """Retrieve a specific alert by its ID"""
    response = table.get_item(
        Key={
            'alert_id': alert_id
        }
    )
    return response.get('Item', None)

def query_alerts_by_user(user_id):
    """Query alerts by user ID"""
    response = table.query(
        IndexName='user_id-index', 
        KeyConditionExpression=boto3.dynamodb.conditions.Key('user_id').eq(user_id)
    )
    return response.get('Items', [])

def list_all_alerts():
    """List all alerts in the table (for admin use)"""
    response = table.scan()
    return response.get('Items', [])

def resolve_alert(alert_id):
    """Mark an alert as resolved"""
    response = table.update_item(
        Key={
            'alert_id': alert_id
        },
        UpdateExpression="set resolved = :r",
        ExpressionAttributeValues={
            ':r': True
        },
        ReturnValues="UPDATED_NEW"
    )
    return response