# Mock Safety API service created with Claude
# Emulates what FirstNet does but for basic usage with HaloNet

import random
import uuid
from datetime import datetime

# Storage of identifiers for mock alerts
ACTIVE_INCIDENTS = {}
MOCK_RESPONDERS = [
    {"id": "POLICE_001", "type": "police", "eta": 5},
    {"id": "FIRE_001", "type": "fire", "eta": 7},
    {"id": "EMS_001", "type": "ems", "eta": 3}
]

# Simulating emergency dispatch and incident status report 
def dispatch_emergency(user_id, location, threat_level, emergency_type, api_key):
    """Simulate mock emergency dispatch"""
    if api_key != "MOCK_SAFETY_API_KEY":
        raise {"error": "Invalid API Key"}

    incident_id = str(uuid.uuid4())

    # Random responders are picked by threat level
    num_responders = 1 if threat_level == "low" else 2 if threat_level == "medium" else 3
    assigned_responders = random.sample(MOCK_RESPONDERS, min(num_responders, len(MOCK_RESPONDERS)))

    incident = {
        "incident_id": incident_id,
        "status": "dispatched",
        "responders": [r["id"] for r in assigned_responders],
        "eta_minutes": min(r["eta"] for r in assigned_responders),
        "timestamp": datetime.utcnow().isoformat(),
    }

    ACTIVE_INCIDENTS[incident_id] = incident
    return incident

def get_incident_status(incident_id, api_key):
    """Incident status retrieval"""
    if api_key != "MOCK_SAFETY_API_KEY":
        return {"error": "Invalid API Key"}
    return ACTIVE_INCIDENTS.get(incident_id, {"error": "Incident not found"})
