import styles from './index.module.scss'
import appStore from '/general/app_store.png'
import googlePlay from '/general/google_play.png'
import phone from '/header/phone.png'
import effects from '/header/effects.png'
import youtube from '/header/youtube.png'
import tiktok from '/header/tiktok.png'
import timeline from '/header/timeline.png'
import light from '/general/light.png'

export default function Header() {
    return (
        <div id={styles.wrapper}>
            <div className="relative h-[700px] flex items-center responsive-padding justify-between">
                <div className='w-2/4 pl-4 pt-10'>
                    <h1 className='max-w-[550px] font-bold text-7xl'>
                        Turn your videos into <span className='text-green'>movie magic</span>
                    </h1>
                    <p className='max-w-[500px] pt-6'>Design your masterpiece from scratch or get help
                    shaping your story with the new Magic Editor and Storyboards on 
                    your phone.</p>
                    <div className="flex pt-10">
                        <img src={appStore} className='mr-8' alt='download from app store'/>
                        <img src={googlePlay} alt='download from google play'/>
                    </div>
                </div>
                <div className='w-2/4 h-full mr-12 flex justify-end pt-20'>
                    <img className='relative z-10' src={phone} id={styles.phone}/>
                    <img className='absolute z-20' src={effects} id={styles.effects}/>
                    <img className='absolute z-20' src={tiktok} id={styles.tiktok}/>
                    <img className='absolute z-20' src={youtube} id={styles.youtube}/>
                    <img className='absolute z-20' src={timeline} id={styles.timeline}/>
                </div>
            </div>
            <div className='relative mt-60 responsive-padding'>
                <img src={light} id={styles.light} className='absolute'/>
                <h1 className='text-6xl text-center leading-tight max-w-5xl m-auto'>
                    Businesses are <span className='text-green font-semibold'>Adopting video</span> <br /> with astounding speed
                </h1>
                <p className='max-w-2xl m-auto text-center pt-6'>
                    The only end-to-end video marketing powered by A.I. A superhuman video editing team at your command. Business videos as powerful as a personal meeting, as scalable as digital marketing
                </p>
                <div className='flex justify-between pt-28'>
                    <div className='px-10 flex flex-col justify-center bg-darkBackground w-[372px] h-60 rounded-3xl'>
                        <h3 className='font-bold  text-6xl'>+200%</h3>
                        <p className='pt-6'>
                            Brand awareness with Video marketing is better than TV
                        </p>
                    </div>
                    <div className='px-10 flex flex-col justify-center bg-darkBlue w-[372px] h-60 rounded-3xl'>
                        <h3 className='font-bold  text-6xl'>+300%</h3>
                        <p className='pt-6'>
                        Lead generation with fastes Video content improves 
                        </p>
                    </div>
                    <div className='px-10 flex flex-col justify-center bg-darkBackground w-[372px] h-60 rounded-3xl'>
                        <h3 className='font-bold  text-6xl'>+80%</h3>
                        <p className='pt-6'>
                        Video marketing improves conversions & close more sales
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}