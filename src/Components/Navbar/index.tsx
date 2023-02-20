import BlueButton from '../Common/BlueButton'
import styles from './index.module.scss'
import Logo from '/general/logo.svg'

export default function Navbar() {
    return  (
    <div className='flex items-center justify-between responsive-padding pt-6'>
            <div className='flex'>
                <img src={Logo} className='pr-20' alt='Magic Editor Logo'/>
                    <span className='pr-10'>About</span>
                    <span className='pr-10'>How to</span>
                    <span className='pr-10'>Features</span>
                    <span className='pr-10'>Download</span>
                    <span>Contact Us</span>
            </div>
            <BlueButton title='Get a demo'/>
        </div>
    )
}