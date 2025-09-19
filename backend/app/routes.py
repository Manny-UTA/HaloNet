from flask import jsonify, request, Blueprint

api = Blueprint("api", __name__)

def init_routes(app):
    app.register_blueprint(api, url_prefix="/api")

@api.route("/sos", methods=["POST"])
def sos_alert():
    data = request.json
    # TODO: hook to FirstNet + notify responders
    return jsonify({"status": "SOS alert received", "data": data})

@api.route("/safe-route", methods=["GET"])
def safe_route():
    # TODO: integrate Map API + crime data
    return jsonify({"route": "Mock safer route here"})
