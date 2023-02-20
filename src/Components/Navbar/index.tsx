import { useEffect, useState } from 'react'
import BlueButton from '../Common/BlueButton'
import styles from './index.module.scss'
import Logo from '/general/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
    const [width, setWidth] = useState<number | null>(null)

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('resize',(w) => setWidth(window.innerWidth))
    },[])

    console.log(width)
    if(width && width > 1200) {
        return  (
            <div className='flex items-center justify-between responsive-padding pt-6'>
                <div className='flex' id={styles.content_wrapper}>
                    <img src={Logo} className='pr-16' alt='Magic Editor Logo'/>
                    <span className='text-base pr-9 whitespace-nowrap'>About</span>
                    <span className='text-base pr-9 whitespace-nowrap'>How to</span>
                    <span className='text-base pr-9 whitespace-nowrap'>Features</span>
                    <span className='text-base pr-9 whitespace-nowrap'>Download</span>
                    <span className='text-base whitespace-nowrap'>Contact Us</span>
                </div>
                <BlueButton title='Get a demo'/>
            </div>
        )
    } else {
        return  (
            <div className='flex items-center justify-between responsive-padding pt-6'>
                <img src={Logo} className='pr-16' alt='Magic Editor Logo'/>
                <FontAwesomeIcon icon={faBars} className='h-6'/>
            </div>
        )
    }

}