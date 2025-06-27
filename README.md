# 🍛 Totot Ethiopian Restaurant Website

A modern, elegant, and culturally rich website designed for **Totot Ethiopian Restaurant**. This project aims to create an immersive digital experience that reflects the warmth of Ethiopian hospitality and the richness of its cuisine.

### 🚀 **https://tototrestaurant.netlify.app/** - Live Site link

## 📖 Project Overview

This project is a complete front-end implementation of a website for a traditional Ethiopian restaurant. The core goal was to blend authentic cultural elements with a clean, modern, and elegant user interface. The website serves as a digital storefront, inviting users to explore the menu, learn the restaurant's story, and engage directly through a feedback form and an AI-powered chatbot.

## ✨ Key Features

-   ✅ **Fully Responsive Design:** A seamless experience across desktop, tablet, and mobile devices.
-   ✅ **Elegant & Modern UI:** A visually appealing design that combines traditional Ethiopian aesthetics with modern design principles.
-   ✅ **Interactive Menu:** A full menu organized into categories, displayed in a responsive grid with high-quality images and descriptions for each dish.
-   ✅ **AI-Powered Chatbot:** An integrated "Ask the Chef" chatbot to answer user questions about dishes, ingredients, and reservations in real-time.
-   ✅ **Light/Dark Mode Toggle:** A user-friendly toggle to switch between light and dark themes for comfortable viewing.
-   ✅ **Compelling "Our Story" Section:** A dedicated page to share the restaurant's history and passion.
-   ✅ **Integrated Feedback Form:** A user-friendly form for customers to leave feedback or make inquiries.
-   ✅ **Comprehensive Footer:** Includes all essential information: navigation, contact details, business hours, social media links, and an embedded map.

## 🛠️ Tech Stack

This project was built using a modern front-end stack:

-   **HTML5:** For the semantic structure and content of the pages.
-   **Tailwind CSS:** A utility-first CSS framework for rapid and custom styling.
-   **JavaScript:** For all client-side interactivity, including the chatbot, form validation, and theme toggling.
-   **Gemini AI and Python:** Used to power the "Ask the Chef" chatbot functionality
-   **Git & GitHub:** For version control and collaborative development.

## ⚙️ How to Run Locally

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository:**
    git clone https://github.com/Boaz-marube/Totot-Restaurant.git
2.  **Navigate to the project directory:**
    cd totot-restaurant
3.  **Install dependencies (if any):**
    npm install
    npm run tailwindcss
4.  ## Chatbot Backend (located in chatbot_backend/)
    This is the FastAPI backend for the Totot Traditional Restaurant chatbot, powered by Google Gemini. It provides information about the restaurant's menu, hours, location, booking, and more, all in a warm and hospitable brand voice.

        ### Setup

        1.  *Clone the repository:*(Skip this step if you've already cloned)
            bash
            https://github.com/Boaz-marube/Totot-Restaurant.git
            cd Totot-restaurant
            

        2.  *Navigate to the backend directory:*
            bash
            cd chatbot_backend
            

        3.  *Create a .env file:*
            In the chatbot_backend/ directory, create a file named .env and add your Google Gemini API key:
            
            GEMINI_API_KEY="YOUR_GOOGLE_GEMINI_API_KEY_HERE"
            
            *Important:* Replace YOUR_GOOGLE_GEMINI_API_KEY_HERE with your actual key. This file is excluded from version control by .gitignore.

        4.  *Install Dependencies (Local Virtual Environment - for local development without Docker):*
            bash
            python -m venv venv
            source venv/bin/activate  # On Windows: `venv\Scripts\activate`
            pip install -r requirements.txt
            

        5.  *Run Locally (without Docker):*
            First, activate your virtual environment (see step 4).
            bash
            uvicorn main:app --reload --host 0.0.0.0 --port 8000
            
            The API will be available at http://localhost:8000. Access http://localhost:8000/docs for interactive API documentation.

        ### Docker

        To build the Docker image for the chatbot backend:
        (Ensure you are in the chatbot_backend/ directory)
        ```bash
        docker build -t totot-chatbot-backend .
        [8:39 PM, 6/27/2025] +254 111 801617: To run the Docker container locally:
        (Ensure you are in the chatbot_backend/ directory)
        docker run -p 8000:80 --env-file ./.env totot-chatbot-backend

        * -p 8000:80: Maps port 8000 on your local machine to port 80 inside the Docker container.
        * --env-file ./.env: Securely passes your .env file's environment variables into the container.
        Once the container is running, the API will be available at http://localhost:8000.
        API Endpoints
        * GET /: Health check endpoint. Returns a welcome message.
        * POST /chat: Main chatbot endpoint.
            * Request Body: {"question": "string"}
            * Response Body: {"answer": "string"}
5.  **Open `index.html` in your browser:**
    You can open the file directly or use a live server extension in your code editor (like Live Server for VS Code) for the best experience.

## 👥 Contributors

This project was a collaborative effort by a dedicated team of four. We collaborated on resolving merge conflicts, conducting peer reviews, and testing the final product together.

| Name                | Role                                  
| ------------------- | ------------------------------------- | 
| **Saba Haddis**    | **UI/UX Design**       |
| **Boaz Marube**     | **Full Stack dev**     |
| **Bereket Eshete**  | **Full Stack dev** |
| **Ushindi Sidi** | **AI Integration & QA Testing**       |
