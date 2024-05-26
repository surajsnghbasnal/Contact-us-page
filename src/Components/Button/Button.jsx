import React from 'react'
import btnStyle from './btn.module.css'
const Button = ({ text, icon, onClick, isOutline }) => {
    return (
        <button onClick={onClick} href='#' className={`${btnStyle.btnBlue} ${isOutline && btnStyle.outlineBtn}  w-2/5 flex justify-center items-center gap-3`} >
            {icon}
            {text}
        </button>
    )
}

export default Button
