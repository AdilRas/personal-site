import { useEffect, useState } from 'react';
import Story from './Story';

function Stories() {

    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        // Generate data
        const suggestions = [{
            id: 'home-pg',
            username: 'home.pg',
            name: 'Home'
        }];

        setSuggestions(suggestions);
    }, []);

    return (
        <div className='bg-white mt-8 border-gray-200 border rounded-sm px-6'>
            <div className='font-light text-xl pt-3'>Navigation</div>
            <div className='flex space-x-2 py-3 pl-1 overflow-x-scroll overflow-y-hidden scrollbar-thin   hover:scrollbar-thumb-gray-300'>
                {
                    suggestions.map(profile => 
                        <Story 
                            key={profile.id} 
                            img={'https://www.jennstrends.com/wp-content/uploads/2013/10/bad-profile-pic-2-768x768.jpeg'}
                            username={profile.username} 
                            name={profile.name} 
                        />
                    )
                }
            </div>
        </div>
    );
}

export default Stories;
