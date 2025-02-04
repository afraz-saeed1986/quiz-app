'use client';


export default function Error({error, reset}){
console.log(`The Error:`, error);

  return (
    <html>
        <body>
            <div className='container'>
                <h2>مشکلی پیش آمده...</h2>
                <h3>در لایوت اصلی</h3>
                <button onClick={() => reset()}>دوباره تلاش کنید</button>
            </div>
        </body>
    </html>
  );
}