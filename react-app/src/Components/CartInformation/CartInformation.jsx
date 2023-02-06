import './CartInformation.css'

function CartInformation() {
    return (
        <>
       <div className='cart__information'>
            <img src="../../../images/Manager.png" alt="" />
            <div className='cart__information-block'>
                <p className='cart__information-question'>У вас остались вопросы?</p>
                <p className='cart__information-text'>Позвоните менеджеру Константину <span className='red'>8-800-1000-936 </span> внутр. <span className='red'>135</span> или напишите ему в скайп (логин). Константин с удовольствием вам поможет.</p>
            </div>
        </div>       
        </>
    )
}

export default CartInformation;