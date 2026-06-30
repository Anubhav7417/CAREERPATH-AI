import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import handler from './api/getCareerAdvice.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Body parser middleware
app.use(express.json());

// Serve static frontend files directly from root directory
app.use(express.static(__dirname));

// API handler route wrapping
app.post('/api/getCareerAdvice', async (req, res) => {
    // Vercel serverless function expects a handler(req, res) signature.
    // Express res object matches Vercel response API (res.status, res.json, res.setHeader).
    // We add setHeader compatibility layer if needed (it matches Express res.setHeader).
    try {
        await handler(req, res);
    } catch (error) {
        console.error('API execution failed:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Serve index.html for all other routes to support client-side routing if any
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`Server running successfully on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
    console.log(`=========================================`);
});
