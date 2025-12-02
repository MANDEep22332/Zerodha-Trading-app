import React from 'react';

function RIght({imageUrl, productName, productDesciption, link}) {
     return( <div className='container'>
        <div className='row mt-5'>
            <div className=' col-4 mt-5 ms-5 p-5'>
                <h1 className='fs-3 mt-5'>{productName}</h1>
                <p className='mt-4'>{productDesciption}</p>
                <a href='#'>{link}</a>
            </div>
            
            <div className='col-7 ms-5'>
                <img className='ms-5' style={{width:"90%"}} src={imageUrl} />
            </div>
        </div>
    </div>);
}

export default RIght;
//image

