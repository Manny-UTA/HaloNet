from flask import jsonify, request, Blueprint
from services.dynamodb import save_alert, get_alert, query_alerts_by_user, list_all_alerts, resolve_alert
from services.gpt_ai import analyze_safety_data, suggest_safety_measures, summarize_incident_report, generate_safety_tips
# Still working on this 
from services.mock_api import 

main_bp = Blueprint("main", __name__)

@main_bp.route("/alert", methods=["POST"])
def handle_alert():
    """Endpoint for a user to send an alert"""
    data = request.json
    user_id = data.get('user_id')
    location = data.get('location')
    sensory_data = data.get('sensory_data')

    # GPT integration determines threat level from sensory data
    threat_level = analyze_safety_data(sensory_data)

    # DynamoDB saves, gets, queries, lists, and resolves alerts
    response = save_alert(user_id, location, threat_level)
    
    return jsonify({"message": "Alert saved", "alert_id": response['ResponseMetadata']['RequestId']}), 201