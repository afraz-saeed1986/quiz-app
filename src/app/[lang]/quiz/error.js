'use client';
import {useEffect} from 'react';

export default function Error({error, reset}){
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className='container'>
        <div className='quiz-container'>
            <h2>مشکلی پیش آمده...</h2>
            <button onClick={() => reset()}>دوباره تلاش کنید</button>
        </div>
    </div>
  );
}