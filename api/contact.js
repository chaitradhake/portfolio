// api/contact.js
require('dotenv').config();
// We use the global fetch API (supported natively in Node.js 18+ runtimes on Vercel)
module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Validate the incoming request fields
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

    // Return a 500 error if Vercel serverless environment variables are not configured
    if (!BOT_TOKEN || !CHAT_ID) {
      console.error('Missing TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID environment variables.');
      return res.status(500).json({ success: false, error: 'Server configuration error' });
    }

    // Prepare the Markdown formatted text for Telegram
    const text = `📬 *New Portfolio Message*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n💬 *Message:* ${message}`;

    const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

    const telegramResponse = await fetch(telegramUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'Markdown',
      }),
    });

    if (telegramResponse.ok) {
      return res.status(200).json({ success: true });
    } else {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error response:', errorData);
      return res.status(500).json({ success: false, error: 'Failed to send message via Telegram' });
    }
  } catch (error) {
    console.error('Serverless function error:', error);
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
