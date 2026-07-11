import { Router } from 'express';
import bcrypt from 'bcrypt';
import { pool } from '../db.ts';

const router = Router();

router.post('/signup', async (req, res) => {
  const { first_name, last_name, email, username, password } = req.body;

  // Basic validation
  if (!first_name || !last_name || !email || !username || !password) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    // Hash the password before storing it — never store plain text
    const password_hash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (first_name, last_name, email, username, password)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING id, first_name, last_name, email, username`,
      [first_name, last_name, email, username, password_hash]
    );

    res.status(201).json({ user: result.rows[0] });
  } catch (err: any) {
    if (err.code === '23505') {
      // unique_violation — email already exists
      return res.status(409).json({ error: 'Email already in use' });
    }
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

export default router;

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Missing username or password' });
  }

  try {
    const result = await pool.query(
      `SELECT email, username, password
       FROM users
       WHERE username = $1`,
      [username]
    );
    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const user = result.rows[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.status(200).json({ user: { email: user.email, username: user.username } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});