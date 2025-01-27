import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag,setTag] = useState('');

  // const[gif,setGif] = useState('');
  // const[loading,setLoading] = useState('');

  // async function fetchData() {
  //   setLoading(true);
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   console.log(imageSource);
  //   setGif(imageSource);
  //   setLoading(false);
  // }

  // useEffect(() =>{
  //   fetchData();
  // },[])

  const {gif , loading , fetchData} = useGif(tag);

  function clickHandler()  {
   fetchData();
  }

  

  return (
    <div className='w-1/2 bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
      <h1 className='mt-[15px] text-2xl underline uppercase font-bold '>A Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="380px"/>)
      }

      <input
      onChange={(event) => setTag(event.target.value)}
      className='w-10/12 text-lg py-2 rounded-lg mb-[20px]'
      value={tag}
      />

      <button onClick={() => fetchData(tag)}
      className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]'>
        Generate
      </button>
    </div>
  )
}

export default Tag
