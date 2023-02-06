import './PerconalPage.css';
import Header from '../Header/Header';
import RegisterButton from '../RegisterButton/RegisterButton';
import Footer from '../Footer/Footer';
import CartInformationSecond from '../CartInformationSecond/CartInformationSecond';

function PerconalPage() {
    return (
        <>
        <Header class={'header__text-perconalPage'} text='Привет, Ксения!'/>
        <div className='main__container'>
            <p className='main__text'>Спасибо, что выбрали компанию <a className='main__link' href=""> «Клиентская База»</a> в качестве партнера для сотрудничества. Мы формируем сплоченное комьюнити, и вы тот, кого нам так не хватало :)</p>
            <RegisterButton class='button__perconalPage' text='Войти в личный кабинет'/>
            <p className='main__text'>Войти в личный кабинет в партнерской программе можно по этой ссылке:<a className='main__link' href="https://invite.clientbase.ru/"> https://invite.clientbase.ru/</a></p>
            <div className='main__personalData'>
                <p className='main__data'><span className='main__color'>Ваш логин:</span> loginloginlogin</p>
                <p className='main__data'><span className='main__color'>Ваш пароль:</span> passwordpassword</p>
            </div>
            <p className='main__text' >Всю полезную информацию для продуктивного старта добавили в ваш личный кабинет. Тем не менее, в следующих письмах мы подробно расскажем про:</p>
            <div className='perconalPage__information'>
                <div className='perconalPage__block'>
                    <img className='perconalPage__img' src="../../../images/Ellipse.png" alt="" />
                    <p className='perconalPage__text'>Как работать в личном кабинете;</p>
                </div>
                <div className='perconalPage__block'>
                    <img className='perconalPage__img' src="../../../images/Ellipse.png" alt="" />
                    <p className='perconalPage__text'>Как работать по партнерской программе;</p>
                </div>
                <div className='perconalPage__block'>
                    <img className='perconalPage__img' src="../../../images/Ellipse.png" alt="" />
                    <p className='perconalPage__text'>Как получить первое вознаграждение;</p>
                </div>
                <div className='perconalPage__block'>
                    <img className='perconalPage__img' src="../../../images/Ellipse.png" alt="" />
                    <p className='perconalPage__text'>Как пройти курсы, чтобы лучше разбираться в «Клиентской Базе»;</p>
                </div>
                <div className='perconalPage__block'>
                    <img className='perconalPage__img' src="../../../images/Ellipse.png" alt="" />
                    <p className='perconalPage__text'>Где почитать новости программы;</p>
                </div>
            </div>
        </div>
        <Footer class={'footer__icons-PerconalPage '} footer={< CartInformationSecond/>}/>
        </>
    )
}
export default PerconalPage;