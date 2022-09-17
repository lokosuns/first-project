import React from "react";
import ReduxForm from "redux-form/lib/reduxForm";
import Field from "redux-form/lib/Field";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import styles from "./Login.module.css"

const Login = (props) => {
    const {login, isAuth} = props
    const onSubmit = (formData) => {
        console.log(formData)
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Navigate to={'/profile/25432'}/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const LoginForm = (props) => {
    const {handleSubmit, error} = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    placeholder={"Email"}
                    name={'email'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <Field
                    placeholder={"Password"}
                    name={'password'}
                    component={Input}
                    validate={[required]}
                    type={'password'}
                />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    name={'rememberMe'}
                    component={Input}
                />
            </div>
            <div>
                <button>Login</button>
            </div>
            {error && <div className={styles.formSummaryError}>
                {error}
            </div>}
        </form>
    )
}

const LoginReduxForm = ReduxForm({
    form: 'login'
})(LoginForm)

const mapStateToProps = ({auth}) => ({
    isAuth: auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)