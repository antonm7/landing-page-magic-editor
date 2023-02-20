import styles from './index.module.scss'
import appStore from '/general/app_store.png'
import googlePlay from '/general/google_play.png'
import phone from '/header/phone.png'
import effects from '/header/effects.png'
import youtube from '/header/youtube.png'
import tiktok from '/header/tiktok.png'
import timeline from '/header/timeline.png'
import light from '/general/light.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CountUp from 'react-countup'

export default function Header() {
    const youtubeRef = useRef(null)
    const effectsRef = useRef(null)
    const tiktokRef = useRef(null)
    const timelineRef = useRef(null)
    const companiesRef = useRef(null)
    const lightRef = useRef(null)

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
        gsap.fromTo(youtubeRef.current,{scale:0},{
            scale:1,duration: 0.4,delay:0.2
        })
        gsap.fromTo(effectsRef.current,{scale:0},{
            scale:1,duration: 0.4,delay:0.2
        })
        gsap.fromTo(tiktokRef.current,{scale:0},{
            scale:1,duration: 0.4,delay:0.2
        })
        gsap.fromTo(timelineRef.current,{scale:0},{
            scale:1,duration: 0.4,delay:0.2
        })
        gsap.fromTo(lightRef.current,{
            css:{
                left:'60%',
                top:'-5rem'
            }
        },{
            css:{
                left:'45%',
                top:'-3.5rem'
            },
            scrollTrigger:{
                trigger:lightRef.current,
                start:'-=600'
            }
        })
        gsap.to(companiesRef.current, {
            backgroundPositionX:'-1440px',
            repeat:-1,
            duration:15,
            yoyo:true
        })
    },[])

    return (
        <div id={styles.wrapper}>
            <div className="h-[700px] flex items-center responsive-padding justify-between" id={styles.header_wrapper}>
                <div className='w-2/4 pl-4 pt-28' id={styles.left}>
                    <h1 className='max-w-[550px] font-bold text-7xl'>
                        Turn your videos into <span className='text-green'>movie magic</span>
                    </h1>
                    <p className='max-w-[500px] pt-6'>Design your masterpiece from scratch or get help
                    shaping your story with the new Magic Editor and Storyboards on 
                    your phone.</p>
                    <div className="flex pt-10" id={styles.buttons_wrapper}>
                        <img src={appStore} className='mr-8' alt='download from app store'/>
                        <img src={googlePlay} alt='download from google play'/>
                    </div>
                </div>
                <div className='relative w-2/4 h-full flex justify-end pt-20 pr-20' id={styles.right}>
                    <img className='relative z-10' src={phone} id={styles.phone}/>
                    <img ref={effectsRef} className='absolute z-20' src={effects} id={styles.effects}/>
                    <img ref={tiktokRef} className='absolute z-20' src={tiktok} id={styles.tiktok}/>
                    <img ref={youtubeRef} className='absolute z-20' src={youtube} id={styles.youtube}/>
                    <img ref={timelineRef} className='absolute z-20' src={timeline} id={styles.timeline}/>
                </div>
            </div>
            <div id={styles.companies} ref={companiesRef}>
            </div>
            <div className='relative mt-60 responsive-padding'>
                <img src={light} ref={lightRef} className='absolute'/>
                <h1 className='text-6xl text-center leading-tight max-w-5xl m-auto' id={styles.buisnesses_title}>
                    Businesses are <span className='text-green font-semibold'>Adopting video</span> <br /> with astounding speed
                </h1>
                <p className='max-w-2xl m-auto text-center pt-6'>
                    The only end-to-end video marketing powered by A.I. A superhuman video editing team at your command. Business videos as powerful as a personal meeting, as scalable as digital marketing
                </p>
                <div className='flex justify-between pt-28' id={styles.box_wrapper}>
                    <div className='px-10 flex flex-col justify-center bg-darkBackground w-[372px] h-60 rounded-3xl'>
                        <h3 className='font-bold text-6xl'>
                            +<CountUp start={100} end={200} enableScrollSpy={true} duration={1.2}/>%
                        </h3>
                        <p className='pt-6'>
                            Brand awareness with Video marketing is better than TV
                        </p>
                    </div>
                    <div className='px-10 flex flex-col justify-center bg-darkBlue w-[372px] h-60 rounded-3xl'>
                    <h3 className='font-bold text-6xl'>
                            +<CountUp start={200} end={300} enableScrollSpy={true} duration={1.2}/>%
                        </h3>
                        <p className='pt-6'>
                        Lead generation with fastes Video content improves 
                        </p>
                    </div>
                    <div className='px-10 flex flex-col justify-center bg-darkBackground w-[372px] h-60 rounded-3xl'>
                    <h3 className='font-bold text-6xl'>
                            +<CountUp start={0} end={80} enableScrollSpy={true} duration={1.2}/>%
                        </h3>
                        <p className='pt-6'>
                        Video marketing improves conversions & close more sales
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}