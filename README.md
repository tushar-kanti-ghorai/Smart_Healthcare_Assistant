🚑 Smart Healthcare Assistant

An AI-powered full-stack healthcare platform built with React, Node.js, and Python (FastAPI) that enables patients to book appointments, upload medical images for AI-based analysis, and interact with doctors and admins via separate dashboards.

🚀 Features

🔐 Role-Based Access – Separate dashboards for Admin, Doctor, and Patient with secure JWT authentication

🧠 AI Symptom Checker – Upload an image + query for disease prediction using GROQ Vision LLaMA models via FastAPI microservice

🗞️ Appointment Booking System – Patients can book/cancel appointments with real-time email notifications

💳 Razorpay Integration – Secure online payments for appointments

☁️ Cloudinary Integration – Upload and manage profile pictures and medical documents securely

🔄 Password Recovery – Forgot/reset password via email OTP link

📊 Admin Panel – Manage doctors, appointments, and user accounts

👨‍⚕️ Doctor Panel – View appointments and manage availability

🧑‍💻 Patient Panel – View profile, book appointments, and upload images for AI analysis

🛠️ Technologies Used

Frontend: ReactJS, Tailwind CSSBackend: Node.js (Express), FastAPI (Python)Database: MongoDBAI Integration: OpenAI Vision (GROQ), Python (Pillow, base64)Cloud Services: Cloudinary, Nodemailer, RazorpayTools: Git, GitHub, Postman, dotenv

📁 Project Structure

/client       => React Frontend  
/server       => Node.js Backend (Express API)  
/ai-service   => Python FastAPI Microservice (Image Analysis)  

📸 Demo Screenshots (optional)

You can add images here like:



📌 How to Run Locally

# Clone the repository
git clone https://github.com/your-username/smart-healthcare-assistant.git

# Install client dependencies
cd client
npm install
npm start

# Install server dependencies
cd ../server
npm install
npm run dev

# Run AI FastAPI service
cd ../ai-service
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

🧑‍💼 Developed By

Tushar Kanti Ghorai

📧 tusharkantighorai643@gmail.com

🔗 LinkedIn

🐙 GitHub

