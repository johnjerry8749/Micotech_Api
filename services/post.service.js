import pool from "../config/db.js";
import { validatePost } from "../Utils/validation.js";


export const createPost = async (userId, data) => {
     validatePost(data)
    const result = await pool.query(
        'INSERT INTO posts (user_id, content, location) VALUES ($1, $2, $3) RETURNING *',
        [userId, data.content, data.location]
    );
    return result.rows[0];
};


export const getPosts = async ({ location, page = 1, limit = 10 }) => {
    const offset = (page - 1) * limit;

    let query = 'SELECT * FROM posts';
    const values = [];
    let index = 1;

    if (location) {
        query += ` WHERE location = $${index}`;
        values.push(location);
        index++;
    }

    query += ` LIMIT $${index}`;
    values.push(limit);
    index++;

    query += ` OFFSET $${index}`;
    values.push(offset);

    const result = await pool.query(query, values);
    return result.rows;
};


export const toggleLike = async (userId, postId) => {
    const checkLike = await pool.query(
        'SELECT * FROM likes WHERE user_id = $1 AND post_id = $2',
        [userId, postId]
    );

    if (checkLike.rows.length > 0) {
        await pool.query(
            'DELETE FROM likes WHERE user_id = $1 AND post_id = $2',
            [userId, postId]
        );
        return { message: 'Post unliked' };
    }else{
        await pool.query("INSERT INTO likes (user_id, post_id) VALUES ($1, $2)", [userId, postId]);
        return { message: 'Post liked' };
    }
};
