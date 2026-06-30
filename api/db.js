import { createClient } from '@libsql/client';
import dotenv from 'dotenv';

dotenv.config();

export let libsqlClient = null;
export const useTurso = !!(process.env.TURSO_DATABASE_URL && process.env.TURSO_AUTH_TOKEN);

if (useTurso) {
    console.log('Connecting to Turso online database for CareerPath AI...');
    libsqlClient = createClient({
        url: process.env.TURSO_DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN
    });
} else {
    console.warn('TURSO_DATABASE_URL and TURSO_AUTH_TOKEN are not configured. Data persistence is disabled.');
}

export const initDb = async () => {
    if (!libsqlClient) return;
    try {
        await libsqlClient.execute(`
            CREATE TABLE IF NOT EXISTS career_recommendations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                skills TEXT NOT NULL,
                experience TEXT,
                employment_status TEXT,
                interests TEXT,
                goals TEXT NOT NULL,
                constraints TEXT,
                salary_range TEXT,
                recommendations TEXT,
                created_at DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        `);
        console.log('Turso database schema initialized successfully.');
    } catch (error) {
        console.error('Failed to initialize database schema:', error);
        throw error;
    }
};

export const insertRecommendation = async (userData, recommendations) => {
    if (!libsqlClient) return null;
    try {
        const sql = `
            INSERT INTO career_recommendations (
                name, email, skills, experience, employment_status, 
                interests, goals, constraints, salary_range, recommendations
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
        const params = [
            userData.name || '',
            userData.email || '',
            userData.skills || '',
            userData.experience || '',
            userData.employmentStatus || '',
            JSON.stringify(userData.interests || []),
            userData.goals || '',
            userData.constraints || '',
            userData.salaryRange || '',
            JSON.stringify(recommendations || [])
        ];
        return await libsqlClient.execute({ sql, args: params });
    } catch (error) {
        console.error('Failed to insert career recommendation into Turso:', error);
        throw error;
    }
};
