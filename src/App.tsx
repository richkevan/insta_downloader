import { FormEvent, FormEventHandler, useState } from 'react';
import insta from './assets/2227.png';
import {ReactComponent as Download} from './assets/download.svg'

function App() {
  const [src, setSrc] = useState("");
  const [media] = useState("img");

  const fetchImage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const entry = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(entry);
    const params = new URLSearchParams(data.url.toString());
    if (media === "img") {
    fetch(`https://instadownloadimage-mr2xxcosrq-uc.a.run.app/image?url=`+ params)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setSrc(data.src)
    })
  } 
  // else if (media === "video") {
  //   fetch(`https://instadownloadvideo-mr2xxcosrq-uc.a.run.app/video?url=`+ params)
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     setSrc(data.src)
  //   })
  // }
  };

  return (
    <div className="flex flex-col pt-16 gap-8">
      <div className='flex h-64 aspect-square mx-auto'>
        <img src={insta} alt="insta" />
      </div>
      {/* <div className='flex mx-auto rounded-full shadow-2xl w-1/3 bg-gradient-to-r from-[#0348dd] from-5% via-[#8142f5] via-30% to-[#ee4dd4] to-95% backdrop-blur-lg text-white font-semibold'>
        <div 
        className='flex-1 text-center  p-4 cursor-pointer' 
        onClick={() => {setMedia('video')}}>Video</div>
        <span className='border-2 border-black mx-4'></span>
        <div 
        className='flex-1 text-center  p-4 cursor-pointer'
        onClick={() => {setMedia('img')}}>
        Photo</div>
      </div> */}
      <div className='mx-auto rounded-full shadow-2xl p-4 w-1/3'>
        <form className='flex' onSubmit={fetchImage}>
          <input 
          type='text'
          name='url'
          placeholder='Paste Instagram URL' 
          className='flex-1  text-lg font-semibold focus:outline-0'/>
          <span className='border-2 border-black mx-4'></span>
          <button type='submit'><Download className=' w-8 h-8'/></button>
        </form>
      </div>
      <div className='h-96'>
        {src && media ?
        (media === "img" &&
        <img src={src} alt="insta" className='mx-auto h-full w-auto'/>) : (
        media === "video" &&
        <video src={src} className='mx-auto h-full w-auto'/>
        )}
      </div>
    </div>
  )
}

export default App
