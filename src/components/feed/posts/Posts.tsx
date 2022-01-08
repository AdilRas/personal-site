import { useEffect, useState } from 'react';
import jobPosts from '../../../data/Experience/JobData.json';
import Post from './Post';
import { JobPost, Post as PostData } from '../../../models/feed/posts/Post';

const Posts = ({ category }: { category: string }) => {

    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            switch (category.trim().toLowerCase()) {
                case 'experience':
                    const posts: PostData[] = jobPosts.map(
                        post => new JobPost(post).toPost()
                    );
                    setPosts(posts);
                    break;
                default:
                    break;
            }
        }, 
        [category]
    );

    return (
        <div>
            {
                posts.map(post => <Post post={post} />)
            }
        </div>
    );
}

export default Posts;
