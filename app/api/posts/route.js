import { NextResponse } from 'next/server';
import { dbConnect } from '@/utils/db.js';
import BlogPost from '@/models/BlogPosts.js';

export async function GET(req, res) {
    try {
        await dbConnect();
        const posts = await BlogPost.find({});
        return NextResponse.json({ posts }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({}, { status: 500 });
    }
}

export async function POST(req, res) {
    try {
        await dbConnect();
        let newPost = await req.json();
        await BlogPost.create(newPost);
        return NextResponse.json({ value: req.body }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({}, { status: 500 });
    }
}
