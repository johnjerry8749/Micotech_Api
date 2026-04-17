import { getPosts, toggleLike, createPost } from "../services/post.service.js";

export const createNewPost = async (req, res, next) => {
    try {
        const post = await createPost(req.user.id, req.body);
        res.status(201).json(post);
    }catch (error) {
        next(error);
    }
};

export const getPost = async (req, res, next) => {
    try {
        const posts = await getPosts(req.query);
        res.json(posts);
    } catch (error) {
        next(error);
    }
}


export const togglepostLike = async (req, res, next) => {
    try {
        const result = await toggleLike(req.user.id, req.params.id);
        res.json(result);
    } catch (error) {
        next(error); 
    }
}