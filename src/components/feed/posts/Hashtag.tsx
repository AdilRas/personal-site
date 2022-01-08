const Hashtag = ({text} : {text: string}) => {
    return (
        <div className=' text-[rgb(6,69,173)] pr-1'>
            {`#${text.toLowerCase().replaceAll(' ', '_')}`}
        </div>
    );
}

export default Hashtag;
