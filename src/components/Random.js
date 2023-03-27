import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
// import { useEffect } from 'react';
// import Spinner from './Spinner';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY; //env file me likhe hue chijo ko acces krne ke liye process.env.


const Random = () => {
    const[gif,setGif]=useState('');
    const[loading,setLoading]=useState('false');

    async function fetchdata(){
        setLoading(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}=await axios.get(url);
        const imageSource=data.data.images.downsized_large.url;

        // console.log(imageSource);
        setGif(imageSource);
        setLoading(false);
    }


    useEffect ( ()=>{
        fetchdata();
    },[])

    function clickHandler(){
        fetchdata();
    }
  return (
    <div className='w-1/2  bg-green-200 mt-[91px] rounded-lg flex flex-col items-center gap-y-5 border border-black'>
      <h1 className='text-2xl mt-[15px] underline uppercase font-bold'>Random Gif</h1>

      {
        loading? (<Spinner/>):(<img src={gif}  width="450px"/>)
      }  
      
      
      <button onClick={clickHandler} 
      className="w-10/12 bg-white py-2 rounded-lg mb-[15px] ">
        Generate
      </button>
    </div>
  )
}

export default Random
