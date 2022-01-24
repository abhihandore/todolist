import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
    return (
        <div className={`${styles.field} ${!props.isValid && styles.invalid }`} >
            <label className="label" htmlFor={props.id}>{props.label}</label>
            <div className="control">
                <input id={props.id} type={props.type} className={`input-field ${props.className} `} value={props.value} name={props.name} onChange={props.onChange} />
            </div>
        </div>
        
    )
}
export default Input;