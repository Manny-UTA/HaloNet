# ChatGPT service integration
from openai import OpenAI 

# User can interact with these AI functions for enhanced safety features

def generate_response(prompt, api_key):
    """Generate a response from ChatGPT based on the given prompt"""
    # Set the OpenAI API key
    client = OpenAI(api_key=api_key)
    response = client.chat.completions.create(
        engine="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are a professional safety assistant for the HaloNet application. Provide brief and detailed responses that are helpful and accurate in advice especially for emergency situations"},
            {"role": "user", "content": prompt}
        ],
        max_tokens=150
    )
    return response.choices[0].message['content'].strip()

def analyze_safety_data(data, api_key):
    """Analyze safety data and provide insights"""
    prompt = f"Analyze the following safety data and provide a threat level whether low, medium, or high based on the situation:\n{data}"
    return generate_response(prompt, api_key)

def suggest_safety_measures(threat_level, api_key):
    """Suggest safety measures based on threat level"""
    prompt = f"Based on a threat level of {threat_level}, suggest appropriate safety measures."
    return generate_response(prompt, api_key)

def summarize_incident_report(report, api_key):
    """Summarize an incident report"""
    prompt = f"Summarize the following incident report:\n{report}"
    return generate_response(prompt, api_key)

def generate_safety_tips(api_key):
    """Generate general safety tips"""
    prompt = "Provide a list of general safety tips for personal security especially for women."
    return generate_response(prompt, api_key)
