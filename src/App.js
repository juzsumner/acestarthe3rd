import TwitchIcon from './assets/twitch.svg';
import TwitterIcon from './assets/twitter.svg';
import DiscordIcon from './assets/discord.svg';
import YoutubeIcon from './assets/youtube.svg';
import HeartIcon from './assets/heart.svg';

import './App.css';

function App() {
  return (
    <div className='min-w-screen min-h-screen bg-gradient-to-br from-[#0000ff] to-[#ff0080] via-[#a349a4] animate-gradient-x'>
      <div className='container max-w-md md:max-w-xl pt-10 px-5 py-24 mx-auto'>
        <div className='text-center mb-10'>
          <div className='aceimg w-60 h-60 border-2 border-white border-opacity-40 rounded-full mx-auto mb-5 shadow-lg'></div>
          <h1 className=' text-4xl font-medium text-center text-white mb-4 drop-shadow-lg'>AceStarThe3rd</h1>
        </div>
        
          <div className='p-2 w-full mx-auto'><a href="https://www.twitch.tv/acestarthe3rd">
            <div className='bg-gray-100 bg-opacity-10 hover:bg-opacity-40 border border-white border-opacity-50 rounded flex p-4 h-full items-center animate-shake hover:animate-none justify-center text-white'>
              <img className='h-5 w-5 mr-2 svg' src={TwitchIcon} alt='Twitch Icon'></img><span className=' font-extrabold text-xl '>Twitch</span>
            </div></a>
          </div>
        
        
          <div className='p-2 w-full mx-auto'><a href="https://twitter.com/acestarthe3rd">
            <div className='hover:bg-gray-100 hover:bg-opacity-40 rounded flex p-4 h-full items-center bg-transparent border-white border border-opacity-50 justify-center text-white'>
              <img className='h-5 w-5 mr-2 svg' src={TwitterIcon} alt='Twitter Icon'></img><span className='font-semibold'>Twitter</span>
            </div></a>
          </div>
        
          <div className='p-2 w-full mx-auto'><a href="https://discord.gg/WN4nbSK">
            <div className='hover:bg-gray-100 hover:bg-opacity-40 rounded flex p-4 h-full items-center bg-transparent border-white border border-opacity-50 justify-center'>
              <img className='h-5 w-5 mr-2 svg' src={DiscordIcon} alt='Discord Icon'></img><span className='font-semibold text-yellow-50'>Discord</span>
            </div></a>
          </div>
        
          <div className='p-2 w-full mx-auto'><a href="https://www.youtube.com/acestarthe3rd">
            <div className='hover:bg-gray-100 hover:bg-opacity-40 rounded flex p-4 h-full items-center bg-transparent border-white border border-opacity-50 justify-center'>
              <img className='h-5 w-5 mr-2 svg' src={YoutubeIcon} alt='YouTube Icon'></img><span className='font-semibold text-white'>YouTube</span>
            </div></a>
          </div>
        
          <div className='p-2 w-full mx-auto'><a href="https://www.amazon.com/hz/wishlist/ls/5IU6ATFR98GM?ref=wl_share&_encoding=UTF8&tag=acestarthe3rd-20&linkCode=ur2&linkId=b7c5208a07ceb515796bae0bce326cc8&camp=1789&creative=9325">
            <div className='hover:bg-gray-100 hover:bg-opacity-40 rounded flex p-4 h-full items-center bg-transparent border-white border border-opacity-50 justify-center'>
              <img className='h-5 w-5 mr-2 svg' src={HeartIcon} alt='Heart Icon'></img><span className='font-semibold text-white'>Amazon Wishlist</span>
            </div></a>
          </div>
      </div>
    </div>
  );
}

export default App;
