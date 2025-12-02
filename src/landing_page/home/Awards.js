import React from 'react';

function Awards() {
    return ( 
     
            <div className='container'>
                <div className='row'>
                    <div className='col-6 mt-5 p-5'>
                         <img src='media/images/largestBroker.svg' />
                    </div>
                    <div className='col-6 mt-5 p-5'>
                        <h1 className='mt-5'>Largest stock broker in India</h1>
                        <p className='mb-5'>2+ millon Zerodha clients contibutes to over 15% of the retail order volumes in India daily by investing and trading In:</p>
                        <div className='row'>
                            <div className='col-6 ' >
                                <ul>
                                    <li className='mb-2'>Future and Options</li>
                                    <li className='mb-2'>Commidity derivatvies</li>
                                    <li className='mb-2'>Currency derivatvies</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                 <ul>
                                    <li className='mb-2'>Stocks & IPO's</li>
                                    <li className='mb-2'>Direct mutual funds</li>
                                    <li className='mb-2'>Bonds and Govt. Securties</li>
                                </ul>
                            </div>
                            <img src='media/images/presslogos.png' style={{width:"90%"}} />
                        </div>
                    </div>
                </div>
            </div>
        
     );
}

export default Awards;