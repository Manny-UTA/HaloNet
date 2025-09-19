# HaloNet

# 🚨 HaloNet  

**A Secure Women’s Safety Application with Real-Time Threat Detection**  
Built at the **SMU Hackathon 2025**, sponsored by AWS, AT&T, and Deloitte.  

---

## 🌟 Overview  
HaloNet is a mobile-first web application designed to enhance **women’s safety and community well-being**.  
The app leverages **FirstNet’s public safety network**, AI-driven threat detection, and real-time routing to keep users safe, while giving first responders accurate and timely data.  

Our solution empowers women with a **trusted safety companion** while supporting first responders with actionable intelligence.  

---

## 🔑 Key Features  
- **Real-Time Threat Detection**  
  AI models monitor movement and location data to identify unsafe zones and trigger alerts.  

- **Safer Route Recommendations**  
  Suggests safer navigation paths using crime statistics + FirstNet updates, with reroute if danger detected.  

- **Emergency SOS Alerts**  
  Voice, gesture, or button-triggered alerts that notify trusted contacts and emergency services instantly.  

- **Responder Dashboard**  
  A live map view (powered by AWS + FirstNet APIs) showing alerts, routes, and user locations in real-time.  

- **Secure Identity Verification**  
  ID-based onboarding with encrypted data storage to ensure platform exclusivity and safety.  

---

## 🛠️ Tech Stack  

**Front End:**  
- React, Next.js, Tailwind CSS  
- Mapbox / Google Maps API  
- Vercel (deployment)  

**Back End:**

HaloNet/
│── README.md
│── docs/
│    ├── team_notes.md
│    ├── tech_stack.md
│    └── sponsor_notes.md
│
│── webapp/             # React front end
│    ├── public/
│    ├── src/
│    │    ├── components/
│    │    │    ├── Navbar.jsx
│    │    │    ├── SOSButton.jsx
│    │    │    ├── MapView.jsx
│    │    │    └── AlertCard.jsx
│    │    ├── pages/
│    │    │    ├── Home.jsx
│    │    │    ├── Dashboard.jsx
│    │    │    └── VerifyID.jsx
│    │    ├── App.jsx
│    │    └── index.js
│    └── package.json
│
│── backend/            # Python + AWS
│    ├── app/
│    │    ├── __init__.py
│    │    ├── routes.py
│    │    ├── models.py
│    │    └── services/
│    │         ├── firstnet_api.py
│    │         ├── gpt_agent.py
│    │         └── crime_data.py
│    ├── requirements.txt
│    └── server.py
│
│── aws/                # Infra / cloud configs
│    ├── lambda/        # serverless functions
│    │    └── sos_handler.py
│    ├── dynamodb_schema.json
│    ├── cloudformation.yaml
│    └──
