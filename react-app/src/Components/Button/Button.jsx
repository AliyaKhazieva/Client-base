import './Button.css';

function Button({text, block = false }) {
    return (
        <>
            <button className={'btn' + (block ? ' btn-block' : '')}>{text}</button>
        </>
    )

}

export default Button;