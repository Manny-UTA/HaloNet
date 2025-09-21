import os
from dotenv import load_dotenv
from flask import Flask
from flask_cors import CORS
from app.routes import main_bp

load_dotenv()

# Creating the Flask instance
app = Flask(__name__)

# Environment variables are configure against the app
app.config['MOCK_SAFETY_API_KEY'] = os.getenv("MOCK_SAFETY_API_KEY")
app.config['CHATGPT_API_KEY'] = os.getenv("CHATGPT_API_KEY")
app.config['AWS_ACCESS_KEY'] = os.getenv("AWS_ACCESS_KEY")
app.config['AWS_SECRET_KEY'] = os.getenv("AWS_SECRET_KEY")  

# CORS = Cross-Origin Resource Sharing
# Backend can accessed from frontend with different origins
CORS(app)

app.register_blueprint(main_bp)

# Flask app is run via this port
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)