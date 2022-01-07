import { HomeIcon, MenuIcon, PlusCircleIcon, UserGroupIcon } from '@heroicons/react/outline';
import DirectMessagesIcon from './DirectMessagesIcon';

function Nav() {
    return (
        <div>
            <div className='flex items-center justify-end space-x-4'>
                <HomeIcon className='nav-btn' />
                <MenuIcon className='h-6 w-6 md:hidden cursor-pointer' />
                <DirectMessagesIcon />
                <PlusCircleIcon className='nav-btn' />
                <UserGroupIcon className='nav-btn' />

                <img
                    src='https://acelab.tamu.edu/wp-content/uploads/sites/23/2020/09/adil_rasiyani_pfp-scaled.jpg'
                    className='h-9 rounded-full cursor-pointer'
                />
            </div>
        </div>
    );
}

export default Nav;