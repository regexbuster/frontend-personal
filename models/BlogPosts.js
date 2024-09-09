import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema(
    {
        title: { type: String },
        description: { type: String },
        content: { type: String },
    },
    { timestamps: true }
);

module.exports =
    mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
