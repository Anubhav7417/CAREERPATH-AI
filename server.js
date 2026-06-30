import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import helmet from 'helmet';
import cors from 'cors';
import handler from './api/getCareerAdvice.js';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. Disable the x-powered-by header signature to mitigate information disclosure
app.disable('x-powered-by');

// 2. Reject HTTP TRACE/TRACK methods
app.use((req, res, next) => {
    const forbiddenMethods = ['TRACE', 'TRACK'];
    if (forbiddenMethods.includes(req.method.toUpperCase())) {
        return res.status(405).send('Method Not Allowed');
    }
    next();
});

// 3. Configure CORS policy
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// 4. Configure Helmet with strict, scan-compliant policies
app.use(helmet({
    // Strict-Transport-Security (HSTS): 1 year max-age, includes subdomains, preload enabled
    strictTransportSecurity: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    },
    // Content-Security-Policy: Safe defaults allowing our standard UI CDNs and Tailwind compilation
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: [
                "'self'", 
                "'unsafe-inline'", 
                "'unsafe-eval'", 
                "https://cdn.tailwindcss.com", 
                "https://cdn.jsdelivr.net", 
                "https://cdnjs.cloudflare.com"
            ],
            styleSrc: [
                "'self'", 
                "'unsafe-inline'", 
                "https://cdnjs.cloudflare.com", 
                "https://fonts.googleapis.com"
            ],
            fontSrc: [
                "'self'", 
                "https://cdnjs.cloudflare.com", 
                "https://fonts.gstatic.com"
            ],
            imgSrc: [
                "'self'", 
                "data:", 
                "blob:"
            ],
            connectSrc: ["'self'"],
            frameAncestors: ["'none'"],
            objectSrc: ["'none'"],
            upgradeInsecureRequests: []
        }
    },
    // Clickjacking protection
    frameguard: {
        action: 'deny'
    },
    // MIME sniffing mitigation
    noSniff: true,
    // Referrer policy setup
    referrerPolicy: {
        policy: 'strict-origin-when-cross-origin'
    },
    // Cross-Origin security policies
    crossOriginEmbedderPolicy: false,
    crossOriginOpenerPolicy: { policy: 'same-origin' },
    crossOriginResourcePolicy: { policy: 'cross-origin' }
}));

// 5. Add custom Permissions-Policy header to restrict sensitive browser APIs
app.use((req, res, next) => {
    res.setHeader('Permissions-Policy', 'geolocation=(), camera=(), microphone=(), interest-cohort=()');
    next();
});

// Body parser middleware
app.use(express.json());

// Serve static frontend files directly from root directory
app.use(express.static(__dirname));

// API handler route wrapping
app.post('/api/getCareerAdvice', async (req, res) => {
    try {
        await handler(req, res);
    } catch (error) {
        console.error('API execution failed:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Serve index.html for all other routes to support client-side routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`Server running successfully on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
    console.log(`=========================================`);
});
