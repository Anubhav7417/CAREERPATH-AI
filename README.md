# CareerPath AI

**CareerPath AI** is an intelligent career guidance platform that uses Google's Gemini AI to provide personalized career recommendations based on your skills, interests, and goals, persisting recommendations securely in a Turso cloud database.

---

## Features

- 🤖 **AI-Powered Recommendations** — Get career suggestions powered by Google Gemini AI.
- 💾 **Data Persistence** — Logs recommendations and profiles securely in a Turso cloud database.
- 🎯 **Personalized Matching** — 3 tailored career paths with match percentages.
- 📊 **Skill Gap Analysis** — Identify missing skills and get learning recommendations.
- 📅 **Learning Roadmap** — 12-week structured plan with curated resources.
- 🌙 **Dark Mode** — Comfortable viewing in any lighting condition.
- 📱 **Responsive Design** — Works on desktop, tablet, and mobile.
- 📤 **Export & Share** — Export results as PDF or share with others.
- 🛡️ **Enterprise Security** — Built-in security headers, input sanitization, API key protection, and request constraints.

---

## Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+), Tailwind CSS, Chart.js, Font Awesome, jsPDF
- **Backend:** Express.js, Node.js (with Vercel Serverless compatibility)
- **Database:** Turso (libSQL Cloud Database)
- **AI:** Google Gemini (Generative Language API)

---

## File Structure

```
careerpath-ai/
├── index.html                # Main application dashboard
├── style.css                 # Custom styling and animations
├── script.js                 # Frontend application logic
├── server.js                 # Express server wrapper (Render/Production)
├── api/
│   ├── db.js                 # Turso connection client and schema setup
│   └── getCareerAdvice.js    # Gemini API caller & secure validation handler
├── .env.example              # Template environment configuration
├── package.json              # Project scripts and dependencies
└── README.md                 # Project documentation
```

---

## Environment Variables

Create a `.env` file in the project root and add the following keys:

```text
# Gemini API key from Google AI Studio
GEMINI_API_KEY=your_gemini_api_key_here

# Turso Cloud Database Credentials
TURSO_DATABASE_URL=libsql://your-database-name.turso.io
TURSO_AUTH_TOKEN=your_auth_jwt_token_here
```

---

## Local Development

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd careerpath-ai
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   - Copy `.env.example` to `.env`.
   - Update the values with your Gemini API key and Turso Database credentials.

4. **Run the local server**

   ```bash
   npm run dev
   ```

   Visit `http://localhost:3000` to test the application locally.

---

## Security Features Implemented

The application implements modern API security standards to prevent leakage and attack vectors:
- **API Key Protection**: The Gemini API key is stored securely on the server and transmitted via the `x-goog-api-key` header instead of URL query strings to prevent logs exposure.
- **Input Sanitization**: Cleanses all fields in user profiles to strip HTML tags (XSS protection) and control characters.
- **Request Constraints**: Rejects non-POST methods, non-JSON content types, and limits payload size to 20KB to mitigate Denial of Service (DoS) attacks.
- **Security Headers**: Standard secure response headers are injected into API responses (`X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`, and `Content-Security-Policy`).
- **Graceful Fallbacks**: If the Gemini API or Turso Database is unavailable, the application logs the events and falls back to local expert static analysis to ensure uninterrupted uptime.

---

## Deployment Guides

### 1. Deploying to Render (Recommended)
1. Commit and push the repository to GitHub.
2. Go to [Render Dashboard](https://dashboard.render.com/) and create a **New Web Service**.
3. Link your **CAREERPATH-AI** repository.
4. Set the following parameters:
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click **Advanced** and add your `GEMINI_API_KEY`, `TURSO_DATABASE_URL`, and `TURSO_AUTH_TOKEN` environment variables.
6. Click **Create Web Service**.

### 2. Deploying to Vercel
Since the api handlers are situated inside the `api` folder, the codebase is fully compatible with Vercel serverless functions:
1. Connect your repository to **Vercel** (https://vercel.com).
2. Add the environment variables (`GEMINI_API_KEY`, `TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN`) in the project settings.
3. Deploy. Vercel will build the frontend assets statically and run the handlers as serverless functions.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
