import './Header.css';
import { ReactComponent as Logo } from './LogoHeader.svg';

function Header(props) {
    return (
        <>
            <div className='container__header-background'>
                <div className='container'>
                    <div className='header__container'>       
                        <div className='header__logo'><Logo/></div>
                        <h1 className={`${props.class}`}>{props.text}</h1>
                    </div>  
                </div>
            </div> 
        </>
    )
}

export default Header;