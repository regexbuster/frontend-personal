import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema(
    {
        title: { type: String },
        description: { type: String },
        content: { type: String },
    },
    { timestamps: true }
);

const BlogPost =
    mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);

export default BlogPost;
