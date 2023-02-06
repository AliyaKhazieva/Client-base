import './Footer.css'
import { ReactComponent as VK } from './Vector1.svg';
import { ReactComponent as Facebook } from './Vector2.svg';
import { ReactComponent as Telegram } from './Vector3.svg';
import { ReactComponent as Youtube } from './Vector4.svg';
import { ReactComponent as Instagram } from './Vector5.svg';

function Footer(props) {
    return (
        <>
        <div className='footer'>
            <div className='main__container'>
                {props.footer}
                <div className={`${props.class}`}>
                    <VK />
                    <Facebook />
                    <Telegram />
                    <Youtube />
                    <Instagram />
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer;