import './RegisterButton.css'

function RegisterButton(props) {
    return (
        <>
        <div className='container__button'>
            <button className={`${props.class}`}>{props.text}</button>
        </div>
        </>
    )
}

export default RegisterButton;