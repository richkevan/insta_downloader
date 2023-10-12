import insta from './assets/2227.png';
import {ReactComponent as Download} from './assets/download.svg'

function App() {

  return (
    <div className="flex flex-col pt-16 gap-8">
      <div className='flex h-64 aspect-square mx-auto'>
        <img src={insta} alt="insta" />
      </div>
      <div className='mx-auto rounded-full shadow-2xl p-4 w-1/3'>
        <form className='flex'>
          <input 
          type='text' 
          placeholder='Paste Instagram URL' 
          className='flex-1  text-lg font-semibold focus:outline-0'/>
          <span className='border-2 border-black mx-4'></span>
          <button type='submit'><Download className=' w-8 h-8'/></button>
        </form>
      </div>
    </div>
  )
}

export default App
