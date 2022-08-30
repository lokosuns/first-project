import React from "react";
import styles from "./FormControls.module.css"

const FormControl = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={hasError ? `${styles.formControl} ${styles.error}` : styles.formControl}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const {input, meta, ...rest} = props

    return <FormControl {...props}><textarea {...input} {...rest}/></FormControl>
}

export const Input = (props) => {

    const {input, meta, ...rest} = props

    return <FormControl {...props}><input {...input} {...rest}/></FormControl>
}