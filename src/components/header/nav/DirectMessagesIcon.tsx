import { PaperAirplaneIcon } from '@heroicons/react/outline';

function NotificationsLabel(props) {
    return (
        <div>
            <div className='absolute -top-1 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>{props.notifCount}</div>
        </div>
    );
}

function DirectMessagesIcon() {
    return (
        <div>
            <div className='relative nav-btn'>
                <PaperAirplaneIcon className='nav-btn rotate-45' />
                <NotificationsLabel notifCount={3} />
            </div>
        </div>
    );
}

export default DirectMessagesIcon;