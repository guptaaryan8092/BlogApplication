import Post from "../model/post.js"

export const createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        post.save();

        response.status(200).json('Post saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}

export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
        // if(username) 
        //     let posts = await Post.find({});
        if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({});
            
        return response.status(200).json(posts);
    } catch (error) {
        return response.status(500).json({ msg: error.message });
    }
}

export const getPost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        response.status(200).json(post);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}