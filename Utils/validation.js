export const validatePost = ({ content }) => {
  if (!content) {
    throw new AppError("Post content is required", 400);
  }
};