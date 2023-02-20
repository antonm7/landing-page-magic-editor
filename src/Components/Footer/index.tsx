import styles from './index.module.scss';
import BlueButton from "../Common/BlueButton";
import phones from '/yellowBox/phones.png';
import logo from '/general/logo.svg';

export default function Footer() {
    return (
        <div className='responsive-padding' id={styles.wrapper}>
            <div className="overflow-hidden ">
                <div className="relative bg-[#E4FE7E] rounded-3xl pt-20 pb-24 px-20">
                    <div>
                        <h3 className="font-bold text-5xl text-[#1F1D25]">Get a free demo </h3>
                        <p className=" max-w-sm text-lg pt-6 pb-12 text-[#1F1D25]">Millions of new high-quality video and image optionsperfect for all your social mediaand marketing needs.</p>
                        <BlueButton title="Get a demo"/>
                    </div>
                    <img src={phones} className='absolute' id={styles.phones}/>
                </div>
            </div>
            <div className="pt-80 pb-12" id={styles.footer_wrapper}>
                <div className='flex justify-between items-start'>
                    <img src={logo}/>
                    <div className='flex w-full pl-40 justify-between flex-wrap'>
                        <div>
                            <h4 className='font-bold text-base'>Get Started</h4>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Create</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Templates</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Explore</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>iPhone</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Android</span>
                        </div>
                        <div>
                            <h4 className='font-bold text-base'>Get Started</h4>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Blog</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Facebook</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Instagram</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Twitter</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Youtube</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>LinkedIn</span>
                        </div>
                        <div>
                            <h4 className='font-bold text-base'>Help</h4>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Support</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>System Status</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Account</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Contact Us</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Accessibility</span>
                        </div>
                        <div>
                            <h4 className='font-bold text-base'>Inspiration</h4>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Tutorial video guide</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Video thumbnail guide</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Your complete guide to video</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>A complete guide to YouTube</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>How to make money on YouTube</span>
                            <span className='pt-6 text-base block text-[#E7E9ED]'>Green screen guide</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between pt-20'>
                    <p className='text-sm text-[#E7E9ED]'>Copyright © 2022 emote.agency</p>
                    <div className='flex'>
                        <p className='text-sm text-[#E7E9ED]'>
                            Privacy policy 
                        </p>
                        <p className='text-sm text-[#E7E9ED] px-10'>
                            Accessibility
                        </p>
                        <p className='text-sm text-[#E7E9ED]'>
                            Accessibility
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}