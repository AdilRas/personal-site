import { BookmarkIcon, ChatIcon, DotsHorizontalIcon, EmojiHappyIcon, HeartIcon, PaperAirplaneIcon } from '@heroicons/react/outline';
import { MouseEvent, useState } from 'react';
import { Post as PostData } from '../../../models/feed/posts/Post';
import Hashtag from './Hashtag';


const Post = ({ post } : {post : PostData}) => {

    const [comment, setComment] = useState("");
    const sendComment = (e: MouseEvent) => {
        e.preventDefault();
        setComment("");
        alert("Sign in as Admin to submit comments...");
    }

    const [isHover, setHover] = useState(false);

    return (
        <div className='bg-white my-7 border rounded-sm'>

            {/* USER photo - {username _ location} - options dots */}
            <div className='flex items-center px-5 py-3 w-full'>

                {/* Post author image */}
                <img src={post.postHeader.logoSrc} className="w-12 h-12 rounded-full object-contain border p-1 mr-3" />

                {/* Title, subtitle, date */}
                <div className='flex justify-between flex-wrap items-center w-full'>
                    {/* Title & Subtitle */}
                    <div>
                        <p className='font-semibold text-lg leading-none lg:leading-7'>
                            {post.postHeader.title}
                        </p>
                        <p className=''>
                            {post.postHeader.subtitle}
                        </p>
                    </div>

                    {/* Date */}
                    <p className='leading-none text-gray-500'>{post.postHeader.date}</p>
                </div>
            </div>

            {/* actual post */}
            <div className='relative' onMouseEnter={() => {setHover(true);}} onMouseLeave={() => {setHover(false);}}>
                <img src={post.contentImgSrc} className='object-cover w-full' />
                {
                    isHover && post.helpLink && 
                    <div className='absolute bottom-0 w-full bg-opacity-50 bg-black text-white'>
                        <a className='underline px-2' href={post.helpLink.link} target='_blank'>
                            {`${post.helpLink.text} »`}
                        </a>
                    </div>
                }
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
            <div className='flex flex-col justify-center pt-4 pb-2 pl-5'>
                <p className='flex flex-wrap'>
                    <span className='font-semibold mr-1'>{post.nameForCaption}</span>
                    {post.captionText}
                </p>
                <div className='flex flex-wrap'>
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
