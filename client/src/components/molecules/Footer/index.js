import React from 'react'
import { ICDiscord, ICFacebook, ICGithub, ICInstagram, ICTelegram, ICTwitter, LogoTopia } from '../../../assets'
import './footer.scss';

const Icon = ({img}) => {
    return (
        <div className='icon-wrapper'>
            <img className="icon-medsos" src={img} alt='icon'/>
        </div>
    )
}
const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div>
                    <img className='logo' src={LogoTopia} alt="logo-topia" width={30} height={30}/>
                    <p>Coding Topia</p> 
                </div>
                <div className='social-wrapper'>
                    <Icon img={ICFacebook}/>
                    <Icon img={ICTwitter}/>
                    <Icon img={ICInstagram}/>
                    <Icon img={ICTelegram}/>
                    <Icon img={ICDiscord}/>
                    <Icon img={ICGithub}/>
                </div>
            </div>
            <div className='copyright'>
                <p>Copyright © 2021</p>
            </div>
        </div>
    )
}

export default Footer
