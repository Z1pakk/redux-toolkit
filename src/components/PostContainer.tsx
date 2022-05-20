import React, { useEffect, useState } from 'react';
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";
import { IPost } from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit);
    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLimit(3);
    //     }, 3000)
    // }, [])

    const handleCreate = async () => {
        const title = prompt();
        await createPost({title, body: title} as IPost)
    }

    const handleRemove = async (post: IPost) => {
        await deletePost(post)
    }

    const handleUpdate = async (post: IPost) => {
        await updatePost(post)
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={() => refetch()}>REFETCH</button>
                <button onClick={handleCreate}>Add new post</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Unexpected error while loading the data</h1>}
                {posts && posts.map(post =>
                    <PostItem
                        key={post.id}
                        post={post}
                        remove={handleRemove}
                        update={handleUpdate}
                    />
                )}
            </div>
        </div>
    );
};

export default PostContainer;
