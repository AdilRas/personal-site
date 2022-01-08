import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { MouseEvent, useState } from 'react';
import { Post as PostData } from '../../../models/feed/posts/Post';
import Posts from './Posts';

const Hashtag = ({text} : {text : string}) => {

    return (
        <div className=' text-[rgb(6,69,173)] pr-1'>
            {`#${text.toLowerCase()}`}
        </div>
    );

}

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
                <div className='flex-1'>
                    <p className='font-semibold text-xl'>{post.postHeader.title}</p>
                    <p className='text-lg'>{post.postHeader.subtitle}</p>
                </div>
                <p>{post.postHeader.date}</p>
                {/* <DotsHorizontalIcon className='h-5' /> */}
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
            <div className='flex flex-col justify-center py-5 pl-5 truncate'>
                <p className=''>
                    <span className='font-semibold mr-1'>{post.nameForCaption}</span>
                    {post.captionText}
                </p>
                <div className='flex'>
                    {
                        post.hashtags &&
                        post.hashtags.length > 0 &&
                        post.hashtags.map(hashtag => <Hashtag text={hashtag} />)
                    }
                </div>
            </div>

            {/* Comments */}
            {(post.comments && post.comments.length > 0 && (
                <div className='ml-5 pr-5 overflow-y-scroll max-h-36 hover:scrollbar-thumb-gray-300 scrollbar-thin'>
                    <ul className='list-disc list-inside'>
                        {post.comments.map(comment => (
                            <li key={(Math.random() + 1).toString(36).substring(7)}>
                                {comment}
                            </li>
                        )
                        )}
                    </ul>
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
