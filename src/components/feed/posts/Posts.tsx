import { useEffect, useState } from 'react';
import jobPosts from '../../../data/Experience/JobData.json';
import servicePosts from '../../../data/Service/ServiceData.json';

import Post from './Post';
import { JobPost, Post as PostData, ServicePost } from '../../../models/feed/posts/Post';

const Posts = ({ category }: { category: string }) => {

    const [posts, setPosts] = useState([]);

    useEffect(
        () => {
            let posts: PostData[] = [];
            switch (category.trim().toLowerCase()) {
                case 'experience':
                    posts = jobPosts.map(
                        post => new JobPost(post).toPost()
                    );
                    setPosts(posts);
                    break;
                case 'service':
                    posts = servicePosts.map(
                        post => new ServicePost(post).toPost()
                    );
                    setPosts(posts);
                    break;
                case 'home':
                default:
                    setPosts([]);
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
