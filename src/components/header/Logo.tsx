const LogoLarge = () => {
    return (
        <div>
            <h1 className='text-2xl font-light'>Adil Rasiyani</h1>
        </div>
    );
};

const LogoSmall = () => {
    return (
        <div>
            <h1 className=' text-2xl font-light'>AR</h1>
        </div>
    );
};

function Logo() {

    return (
        <div >
            <div className='relative hidden md:inline-grid w-48 h-10'>
                <LogoLarge />
            </div>
            <div className='relative w-10 h-10 md:hidden flex-shrink-0'>
                <LogoSmall />
            </div>
        </div>
    )
}

export default Logo;
