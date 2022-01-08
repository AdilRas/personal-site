const MiniProfile = () => {
    return (
        <div className="flex items-center justify-between mt-14 ml-10">
            <img
                className="rounded-full border p=[2px] w-16 h-16" 
                src="adil-new.jpg" 
                alt="" />
            <div className="flex-1 mx-4">
                <h2>Adil Rasiyani</h2>
                <h3>B.S. Computer Science, May 2023</h3>
            </div>
            <button className="text-blue-400 text-sm font-semibold">Contact Me</button>
        </div>
    )
}

export default MiniProfile
