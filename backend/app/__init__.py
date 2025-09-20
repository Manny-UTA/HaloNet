import os 
from dotenv import load_dotenv

# Load in each of the API keys from the .env file

load_dotenv()

MOCK_SAFETY_API_KEY = os.getenv("MOCK_SAFETY_API_KEY")
CHATGPT_API_KEY = os.getenv("CHATGPT_API_KEY")
AWS_ACCESS_KEY = os.getenv("AWS_ACCESS_KEY")
AWS_SECRET_KEY = os.getenv("AWS_SECRET_KEY")