import React from "react";
import styles from "./FormControls.module.css"

const FormControl = ({meta: {touched, error}, children}) => {

    const hasError = touched && error;

    return (
        <div className={hasError ? `${styles.formControl} ${styles.error}` : styles.formControl}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
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