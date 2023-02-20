import styles from './index.module.scss'
import firstIllustration from '/powerful/firstIllustration.png'
import secondIllustration from '/powerful/secondIllustration.png'
import light from '/general/light.png'
import features from '/powerful/features.png'
import finish from '/powerful/finish.png'
import formats from '/powerful/formats.png'
import personalize from '/powerful/finish.png'
import circle from '/powerful/circle.png'
import app_store from '/general/app_store.png'
import google_play from '/general/google_play.png'
export default function Powerful() {
    return (
        <>
            <div id={styles.wrapper}>
                <div className='flex responsive-padding pt-64 pb-64' id={styles.powerful_wrapper}>
                    <div className='pl-12 relative'>
                        <img src={light} id={styles.light} className='absolute'/>
                        <h1 className='font-semibold text-6xl max-w-xl leading-tight'>
                            The best editor with  <span className='text-green'>powerful editing tools</span>
                        </h1>
                        <div className='pt-12 max-w-md'>
                            <img src={features}/>
                            <h4 className='font-semibold text-2xl pt-8'>Features you need</h4>
                            <p className='text-[#898694] text-sm pt-3'>Upload and manage your media clips, drag and drop them on a timeline, and easily trim, split, and resize clips, all within one editor.</p>
                        </div>
                        <div className='pt-12 max-w-md'>
                            <img src={finish}/>
                            <h4 className='font-semibold text-2xl pt-8'>Finish with music and audio</h4>
                            <p className='text-[#898694] text-sm pt-3'>Polish your video with audio magic by adding tracks, sound effects, voice-overs, narration options, and music to the video.</p>
                        </div>
                    </div>
                    <img className='pt-12' src={firstIllustration}/>
                </div>
                <div className='flex responsive-padding pb-64' id={styles.create_wrapper}>
                    <img className='pt-12' src={secondIllustration}/>
                    <div className='pl-12 relative'>
                        <img src={light} id={styles.light} className='absolute'/>
                        <h1 className='font-semibold text-6xl max-w-lg leading-tight'>
                        <span className='text-green'>Create </span>any type 
                            of video
                        </h1>
                        <div className='pt-12 max-w-md'>
                            <img src={formats}/>
                            <h4 className='font-semibold text-2xl pt-8'>Formats to suit any video</h4>
                            <p className='text-[#898694] text-sm pt-3'>Feel professional with pre-sized formats for YouTube intros, social media videos, and advertisements. Get confident with thousands of customizable templates.</p>
                        </div>
                        <div className='pt-12 max-w-md'>
                            <img src={personalize}/>
                            <h4 className='font-semibold text-2xl pt-8'>Personalize with our media library</h4>
                            <p className='text-[#898694] text-sm pt-3'>Add those finishing touches, with a huge media content library including watermark-free stock footage, clips, effects, music, graphics, and stickers.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative h-[1200px]' id={styles.circle_container}>
                <div className='absolute' id={styles.circle_content}>
                    <h3 className='font-bold text-7xl text-center'>Edit with<br /> <span className='text-green'>lightspeed</span></h3>
                    <p className='text-sm text-center max-w-xl pt-6'>Engage and inspire with a video that stands out. Create on the go using magic editor’s free video editor, download the power on apple store and google play.</p>
                    <div className='flex justify-center pt-12'>
                        <img src={app_store} className='mr-8'/>
                        <img src={google_play}/>
                    </div>
                </div>
            </div>
        </>
    )
}