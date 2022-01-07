import { HomeIcon } from "@heroicons/react/solid"

function Story({ img, username, name }) {
    return (
        <div className="hover:scale-110 transition transform duration-200 ease-out">
            <HomeIcon className='h-14 w-14 rounded-full p-[1.5px] border-2'/>
            {/* <img className='h-14 w-14 rounded-full p-[1.5px] border-2 border-red-500' src={img} alt='story profile pic' /> */}
            <p className="text-xs w-14 truncate text-center">{name}</p>
        </div>
    )
}

export default Story
