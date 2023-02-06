import './Main.css'
import Cart from '../Carts/Carts';
import { ReactComponent as SvgOne } from './Vector1.svg'
import { ReactComponent as SvgToo } from './Vector2.svg';
import { ReactComponent as SvgThree } from './Vector3.svg';
import Button from '../Button/Button';
import User from '../User/User';
import CartPrice from '../CartPrice/CartPrice';
import { ReactComponent as Rent } from './rent.svg';
import { ReactComponent as Box } from './box.svg';
import RegisterButton from '../RegisterButton/RegisterButton'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CartInformation from '../CartInformation/CartInformation';




function Main() {
    return (
        <>
        
        <Header class={'header__text-main'} text='Привет, будущий партнер!'/>
        <div className='main__container'>
            <div className='main__teaxt-container'>
                <p className='main__text'>Мы — платформа «Клиентская база» для разработки персональных CRM-систем для<br />компаний со сложной бизнес-логикой. Когда бизнесу нужны сложные вычисления и <br />нестандартные решения, разработчики используют наш продукт. Вот тут <a className='main__link' href="#">наш сайт</a>, а <br />здесь <a className='main__link' href="#">видео обзор настроек</a>.</p>
            </div>
            <div className='main__table-container'>
                <img className='main__table' src="../../images/Group.png" alt="" />
            </div>
            <p className='main__text'>Знаем, вы уже внедряете CRM-системы. Это отлично, мы альтруисты — хотим, чтобы<br />каждый бизнес нашел свою идеальную CRM. Поэтому, предлагаем вам включить нашу <br />CRM в стек ваших решений и заработать на нашем продукте. Тем более, он поможет<br />расширить ваши возможности. А вот каким образом, рассказываем дальше. </p>
            <h2 className='main__subtitle'>Чем мы круты?</h2>
            <p className='main__text'>Настройки «Клиентской базы» помогают перенести и автоматизировать любые <br />бизнес-процессы клиентов. Попался заказчик со сложным запросом, — предложите <br />ему простое решение оптимальное по цене и срокам.</p>
           <div className='main__carts'>
                <Cart svg={<SvgOne />}  text ='Самое гибкое решение на российском рынке'/>
                <Cart svg={<SvgToo />} text='Более внедрений по России и зарубежью' />
                <Cart svg={<SvgThree />} text='Средняя прибыль партнера за внедрение 100 000 руб.'/>
            </div>
            <p className='main__text'>«Клиентская база» имеет самый гибкие настройки для разработчиков на российском <br />рынке: режим конструктора для бизнесменов, и режим эксперт для разработчиков. На <br />конструкторе можно собрать любые таблицы, отчеты, вычисления и доп.действия, а в <br />режиме эксперт — делать вставки с самописным кодом на PHP/Mysql. </p>
            <p className='main__text text'>Если вы занимаетесь описанием бизнес-процессов и не любите программировать — <br />работайте на конструкторе. Например, с помощью конструктора отчетов мы <br /> <a className='main__link' href="#">автоматизировали работу руководителя</a>отдела продаж. </p>
            <p className='main__text text-center'>Иногда лучше один раз увидеть, чем тысячу раз прочитать.<br /> Поэтому, посмотрите как все устроено.</p>
            <div className='main__button'>
                <Button text='Подробный обзор программы'/>
                <Button  text='Общий обзор настроек'/>
            </div>
            <h2 className='main__subtitle'>Кто наши клиенты?</h2>
            <p className='main__text'>Малый и средний бизнес со сложной логикой. Готовые CRM им не подходят, на свои с <br />нуля не хватает бюджета. Они<a className='main__link' href=""> выбирают «Клиентскую базу» не за красивый интерфейс</a>, <br />а за содержание и возможности. </p>
            <div className='main__userOne'>
                <User src={<img src="../../../images/Intersect1.png" alt="" />} name='Антон Кравченко' information='Партнер КБ с 2015 года' text='Нравится, что можно посмотреть какие коды привязаны к полю, что его можно переписать. Например, если я ошибся в коде — могу зайти, глянуть через логи в каком поле косяк и запросто устранить ошибку. '/>
            </div>
            <p className='main__text'>Чтобы реализовать их гениальную логику, не нужно перерабатывать ядро или много <br />программировать. Плюс, им не всегда нужна CRM. </p>
            <div className='main__userTwo'>
                <User  src={<img src="../../../images/Intersect2.png" alt="" />} name='Алмаз Латипов' information='Партнер КБ с 2016 года' text='Многим нужны программы по учету. Системы как AmoCRM или Bitrix24 подходят под учет продаж, а для настройки ERP-систем — нет. Поэтому я рассматриваю «Клиентскую базу» еще и как программу по настройке ERP.'/>
            </div>
            <h2 className='main__subtitle'>Что мы предлагаем?</h2>
            <p className='main__text'>Зарабатывать на нашем продукте: внедрять CRM «Клиентскую базу», вести <br />техподдержку клиента и вносить доработки по улучшению бизнес-процессов. Еще вы <br />можете разрабатывать свои интеграции и решения, а продвигать их через на наш <br />сайт. Например, интеграция с WhatsApp и Speech Analytics  — разработки нашего <br />партнера.  </p>
            <div className='main__cartList'>
                <p className='main__cart-text'>Средний чек наших партнеров <br />за внедрение CRM «Клиентской <br />базы» под ключ — 100 тысяч<br />рублей. На доработках и <br />поддержке за год с одного <br />клиента заработали до <br />миллиона рублей прибыли. </p>
                <div className='main__cartList-container'>
                    <p className='main__cartList-text'>Наши официальные партнеры так же зарабатывают дополнительно:</p>
                    <div className='main__cartList-interest'>
                        <div className='main__cartList-salary'>
                            <img className='main__cartList-img' src="../../../images/Ellipse.png" alt="" />
                            <p className='main__cartList-additional'><span className='main__cartList-color'>30%</span>с первой покупки лицензии</p>
                        </div>
                        <div className='main__cartList-salary'>
                            <img className='main__cartList-img' src="../../../images/Ellipse.png" alt="" />
                            <p className='main__cartList-additional'><span className='main__cartList-color'>20%</span>с последующих покупок </p>
                        </div>
                        <div className='main__cartList-salary'>
                            <img className='main__cartList-img' src="../../../images/Ellipse.png" alt="" />
                            <p className='main__cartList-additional'><span className='main__cartList-color'>10%</span> с продления обновлений и апгрейда лицензий </p>
                        </div>

                    </div>
                </div>
            </div>
            <p className='main__text'>«Клиентская база» бывает двух типов:<a className='main__link' href="#">коробочная лицензия</a> с разовой оплатой от 13 500 до 126 000 рублей и <a className='main__link' href="#">SAAS-аккаунт</a>с ежемесячной оплатой от 300 до 12 000 рублей. Официальные партнеры получают 7% скидку на покупку лицензии — оплачивайте покупки клиентов сами, и получайте еще больше прибыли.  </p>
            <div className='main__cartPrice'>
                <CartPrice src={<Rent/>} subtitle='SAAS-аккаунт' text='от 300 до 12 000 рублей в месяц'/>
                <CartPrice src={<Box/>} subtitle='Коробочная лицензия' text='от 13 500 до 126 000 рублей'/>
            </div>
            <p className='main__text indent'>Чтобы <a className='main__link' href="#">стать партнером</a>«Клиентской программы», нужно только зарегистрироваться в <a className='main__link' href="#">реферальной программе</a>. Если хотите изучить программу подробно, пройдите курс «Конфигуратор». У нас есть <a className='main__link' href="#">документация</a>, где мы подробно рассказали о каждом конструкторе и настройках. </p>
            <p className='main__text'>После регистрации у вас будет персональный менеджер, который всегда оперативно поможет и подскажет решение по любому вопросу.</p>
            <h2 className='main__subtitle'>В чем подвох?</h2>
            <p className='main__text indent'>Его нет. Вы устанавливаете свои цены за внедрение, доработки и интеграции, забираете всю прибыль себе. Не скрываем, заинтересованность у нас есть — хотим, чтобы как можно больше бизнесменов внедряли себе нашу CRM. А без вашей помощи мы не справимся.  </p>
            <p className='main__text'>Прикрепили коммерческое предложение, в нем рассказали больше о работе по реферальной программе. Будут вопросы — пишите — поможем разобраться. </p>
            <RegisterButton class={'button__main'} text='Стать партнером'/>
            {/* <div className='main__information'>
                <img src="../../../images/Manager.png" alt="" />
                <div className='main__information-block'>
                    <p className='main__information-question'>У вас остались вопросы?</p>
                    <p className='main__information-text'>Позвоните менеджеру Константину 8-800-1000-936 внутр. 135 или напишите ему в скайп (логин). Константин с удовольствием вам поможет.</p>
                </div>
            </div> */}
        </div>
        <Footer class={'footer__icons-main'} footer={<CartInformation/>}/>
        </>
    )
}


export default Main;