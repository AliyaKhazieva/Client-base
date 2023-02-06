import './CartPrice.css'

function CartPrice(props) {
    return (
        <>
        <div className='cartPrice'>
            <div className='cartPrice__svg'>{props.src}</div>
            <h2 className='cartPrice__subtitle'>{props.subtitle}</h2>
            <p className='cartPrice__text'>{props.text}</p>
        </div>
        </>
    )
}

export default CartPrice;