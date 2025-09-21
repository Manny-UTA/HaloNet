# To handle routing services for the Flask application
from flask import jsonify, request, Blueprint
from services.dynamodb import save_alert, get_alert, query_alerts_by_user, list_all_alerts, resolve_alert
from services.gpt_ai import analyze_safety_data, suggest_safety_measures, summarize_incident_report, generate_safety_tips
# Still working on this 

from services.mock_api import dispatch_emergency, get_incident_status

main_bp = Blueprint("main", __name__)

@main_bp.route("/alert", methods=["POST"])
def handle_alert():
    """Endpoint for a user to send an alert"""

    data = request.json
    user_id = data.get('user_id')
    location = data.get('location')
    sensory_data = data.get('sensory_data')

    # GPT integration determines threat level from sensory data
    threat_level = analyze_safety_data(sensory_data, app.config['CHATGPT_API_KEY'])

    # DynamoDB saves, gets, queries, lists, and resolves alerts
    response = save_alert(user_id, location, threat_level)
    
    # If there is a high threat, dispatch to emergency services (FirstNet mock API)
    emergency_response = None
    if threat_level == "high":
        emergency_response = dispatch_emergency(
            user_id, location, threat_level, "general",
            app.config['MOCK_SAFETY_API_KEY']
        )

    # 201 = created
    return jsonify({
        "message": "Alert saved", 
        "alert_id": response['ResponseMetadata']['RequestId'],
        "emergency_dispatched": emergency_response is not None,
        "incident_id": emergency_response.get('incident_id') if emergency_response else None
    }), 201

# 200 = success
# 404 = not found
@main_bp.route("/alert/<alert_id>", methods=["GET"])
def get_alert_endpoint(alert_id):
    """Endpoint to retrieve a specific alert by its ID"""
    alert = get_alert(alert_id)
    if alert:
        return jsonify(alert), 200
    else:
        return jsonify({"error": "Alert not found"}), 404

@main_bp.route("/alerts/user/<user_id>", methods=["GET"])
def get_user_alerts(user_id):
    """Endpoint to query alerts by user ID"""
    alerts = query_alerts_by_user(user_id)
    return jsonify(alerts), 200

@main_bp.route("/alerts", methods=["GET"])
def get_all_alerts():
    """Endpoint to list all alerts (admin use)"""
    alerts = list_all_alerts()
    return jsonify(alerts), 200

@main_bp.route("/alert/<alert_id>/resolve", methods=["POST"])
def resolve_alert_endpoint(alert_id):
    """Endpoint to mark an alert as resolved"""
    response = resolve_alert(alert_id)
    return jsonify({"message": "Alert resolved", "updated_attributes": response['Attributes']}), 200

@main_bp.route("/safety-tips", methods=["GET"])
def get_safety_tips():
    """Endpoint to get general safety tips"""
    tips = generate_safety_tips(app.config['CHATGPT_API_KEY'])
    return jsonify({"safety_tips": tips}), 200

@main_bp.route("/emergency-dispatch", methods=["POST"])
def emergency_dispatch_endpoint():
    """Endpoint to dispatch emergency through mock FirstNet API"""
    data = request.json
    result = dispatch_emergency(
        user_id = data.get('user_id'),
        location = data.get('location'),
        threat_level= data.get('threat_level'),
        emergency_type = data.get('emergency_type', 'general'),
        api_key = app.config['MOCK_SAFETY_API_KEY']
    )
    return jsonify(result), 201

@main_bp.route("/incident/<incident_id>/status", methods=["GET"])
def get_incident_status_endpoint(incident_id):
    """Endpoint to check incident status"""
    result = get_incident_status(incident_id, app.config['MOCK_SAFETY_API_KEY'])
    if "error" in result:
        return jsonify(result), 404
    return jsonify(result), 200

# Initialize routes
def init_routes(app):
    app.register_blueprint(main_bp)
