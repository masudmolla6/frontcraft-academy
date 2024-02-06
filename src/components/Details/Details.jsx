import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    console.log(details);
    const { topics_id,
        topics_name,
        topics_details,
        topics_about,
        price,
        picture,} = details;
    return (
      <div className='w-full flex justify-center items-center py-5'>
        <div className='w-6/12'>
          <h1 className='text-3xl text-center border-b mb-5 py-2'>{topics_name}</h1>
          <img src={picture} alt="" />
                <p className='mt-5'>{topics_about}</p>
                <p className='mt-5'>{topics_details}</p>
        </div>
      </div>
    );
};

export default Details;