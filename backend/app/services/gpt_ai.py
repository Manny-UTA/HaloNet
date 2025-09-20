# ChatGPT service integration
import openai
from app import CHATGPT_API_KEY

# Set the OpenAI API key
openai.api_key = CHATGPT_API_KEY

# User can interact with these AI functions for enhanced safety features

def generate_response(prompt):
    """Generate a response from ChatGPT based on the given prompt"""
    response = openai.Completion.create(
        engine="gpt-3.5-turbo-instruct",
        prompt=prompt,
        max_tokens=150
    )
    return response.choices[0].text.strip()

def analyze_safety_data(data):
    """Analyze safety data and provide insights"""
    prompt = f"Analyze the following safety data and provide insights:\n{data}"
    return generate_response(prompt)

def suggest_safety_measures(threat_level):
    """Suggest safety measures based on threat level"""
    prompt = f"Based on a threat level of {threat_level}, suggest appropriate safety measures."
    return generate_response(prompt)

def summarize_incident_report(report):
    """Summarize an incident report"""
    prompt = f"Summarize the following incident report:\n{report}"
    return generate_response(prompt)

def generate_safety_tips():
    """Generate general safety tips"""
    prompt = "Provide a list of general safety tips for personal security."
    return generate_response(prompt)