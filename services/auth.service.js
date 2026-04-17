
import pool from '../config/db.js';
import bcrypt from 'bcrypt';
import generateToken from '../Utils/generateToken.js';


//register function
export const register = async ({ username, email, password }) => {
    const checkUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (checkUser.rows.length > 0) {
        throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await pool.query(
        'INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *',
        [username, email, hashedPassword]
    );

    return user.rows[0];
};



//Login function
export const login = async ({ email, password }) => {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (!result.rows.length) throw new Error('user not found');
    const user = result.rows[0];

     
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    return generateToken( user);
};

