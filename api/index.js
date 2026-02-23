import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Resend } from 'resend';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;
const resendApiKey = process.env.RESEND_API_KEY ? process.env.RESEND_API_KEY.trim() : '';
const resend = new Resend(resendApiKey);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/send', async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // The "To" address where the portfolio owner receives the inquiry
        // For Resend free tier without a verified domain, you can only send TO your registered email.
        const toEmail = 'christiananietie10@gmail.com';

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: toEmail,
            subject: `New Portfolio Inquiry from ${name}`,
            html: `
                <h3>New message from your portfolio website:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Reply-To Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
            replyTo: email
        });

        res.status(200).json(data);
    } catch (error) {
        console.error('Resend API Error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

if (process.env.NODE_ENV !== 'production') {
    app.listen(port, () => {
        console.log(`Express server running locally on port ${port}`);
    });
}

export default app;
