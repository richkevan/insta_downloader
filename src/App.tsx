import insta from './assets/2227.png';

function App() {

  return (
    <div className="flex flex-col pt-16 gap-8">
      <div className='flex h-64 aspect-square mx-auto'>
        <img src={insta} alt="insta" />
      </div>
      <div className='mx-auto'>
        <form>
          <input type='text' placeholder='Paste Instagram URL' />
        </form>
      </div>
    </div>
  )
}

export default App
