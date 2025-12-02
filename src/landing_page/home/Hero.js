import React from 'react';


function Hero() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' className='mb-5' alt='Hero Image' />
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online platfrom to invest in stocks,derivatvies, mutual funds and more</p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"16%", margin:"0 auto"}}>Sign Up</button>
            </div>
        </div>
     );
}

export default Hero;