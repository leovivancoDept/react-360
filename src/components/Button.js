import React from 'react'

const button = (props) => {
    return (
        <div className="v360-menu-btns" onClick={props.clicked}>
            <i className={props.icon}></i>
        </div>
    )
}

export default button;