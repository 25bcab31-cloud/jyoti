import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = request.body;

  try {
    // This inserts the data into the table you just created
    await sql`
      INSERT INTO messages (name, email, message)
      VALUES (${name}, ${email}, ${message});
    `;
    return response.status(200).json({ success: true });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
}
