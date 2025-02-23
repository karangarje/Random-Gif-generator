import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {
  const [gif, setGif] =useState('');
  const [loading , setLoading] = useState('false');
  
  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    console.log(data);
    const imageSource = data.data.images.downsized_large.url;
    setGif(imageSource);
    setLoading(false);
    
  }

  useEffect ( () => {
    fetchData();
  },[] )

  function clickHandler(){
    fetchData();
  }
  return (
    <div className='lg:w-1/2 w-full bg-green-500 rounded-xl border border-black
        flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-xl md:text-2xl underline uppercase font-bold'> A Random Gif</h1>
      {
        loading ? (<spinner/>) : (<img src = {gif} width="450"/>)
      }
      <button onClick={clickHandler}
      className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium tracking-wide">
        Generate
      </button>
      
    </div>
  )
}

export default Random;








// import React, { useState } from 'react'
// import axios from 'axios';
// import { useEffect } from 'react';
// import Spinner from './Spinner';
// import useGif from '../hooks/useGif';


// const Random = () => {


//   const {gif, loading, fetchData} = useGif();


//   return (
//     <div className='lg:w-1/2 w-full bg-green-500 rounded-xl border border-black
//     flex flex-col items-center gap-y-5 mt-[15px]'>

//       <h1 className='mt-[15px] text-xl md:text-2xl underline uppercase font-bold'> A Random Gif</h1>

//     {
//         loading ? (<Spinner/>) : (<img src= {gif} width="450"  alt='gif'/>)
//     }

      

//       <button onClick={() => fetchData()}
//       className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px] uppercase  font-medium tracking-wide">

//        Generate

//       </button>

//     </div>
//   )
// }

// export default Random
