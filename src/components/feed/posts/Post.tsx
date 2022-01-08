import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { MouseEvent, useState } from 'react';
import { Post as PostData } from '../../../models/feed/posts/Post';

const Post = ({ post } : {post : PostData}) => {

    const [comment, setComment] = useState("");
    const sendComment = (e: MouseEvent) => {
        e.preventDefault();
        setComment("");
        alert("Sign in as Admin to submit comments...");
    }

    return (
        <div className='bg-white my-7 border rounded-sm'>

            {/* USER photo - {username _ location} - options dots */}
            <div className='flex items-center p-5'>
                <img src={post.postHeader.logoSrc} className="w-12 h-12 rounded-full object-contain border p-1 mr-3" />
                <p className='flex-1 font-semibold'>{post.postHeader.name}</p>
                <DotsHorizontalIcon className='h-5' />
            </div>

            {/* actual post */}
            <img src={post.contentImgSrc} className='object-cover w-full' />
            <div>

            </div>
            {/* actions (like, comment, share) - bookmark*/}
            <div className='flex justify-between px-4 pt-4'>
                <div className='flex space-x-4'>
                    <HeartIcon className='post-btn' />
                    <ChatIcon className='post-btn' />
                    <PaperAirplaneIcon className='post-btn' />
                </div>
                <BookmarkIcon className='post-btn' />
            </div>

            {/* Caption */}
            <p className='p-5 truncate'>
                <span className='font-semibold mr-1'>{post.nameForCaption}</span>
                {post.captionText}
            </p>

            {/* Comments */}
            {(post.comments && post.comments.length > 0 && (
                <div className='ml-5 h-36 overflow-y-scroll hover:scrollbar-thumb-gray-300 scrollbar-thin'>
                    {post.comments.map(comment => (
                        <div key={(Math.random() + 1).toString(36).substring(7)} className='flex items-start space-x-2 mb-3'>
                            {/* <img className='h-8 rounded-full' src={comment.userimg} alt="" /> */}s
                            <div className='flex'>
                                <p className='leading-5'>{comment}</p>
                            </div>
                        </div>
                    )
                    )}
                </div>
            )) || <p className='ml-5 mb-5 text-gray-400'>No comments...</p>}

            {/* Input Box */}
            <form action="" onClick={(e) => { e.preventDefault(); }} className='flex items-center px-4 pb-4'>
                <EmojiHappyIcon className='h-7' />
                <input
                    type="text"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    className='border-none flex-1 focus:ring-0 outline-none'
                    onClick={sendComment}
                    placeholder='Add a comment...' />
                <button type='submit' disabled={!comment.trim()} className='text-blue-400 font-semibold'>Post</button>
            </form>
        </div>
    )
}

export default Post
