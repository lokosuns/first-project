import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <BrowserRouter>
                <div className={'app-wrapper'}>
                    <HeaderComponent/>
                    <NavbarContainer/>
                    <div className={'app-wrapper-content'}>
                        <Routes>
                            <Route path={'/dialogs/*'} element={
                                <DialogsContainer
                                />
                            }/>
                            <Route path={'/profile/:userId'} element={
                                <ProfileContainer
                                />
                            }/>
                            <Route path={'/news'} element={<News/>}/>
                            <Route path={'/music'} element={<Music/>}/>
                            <Route path={'/users'} element={<UsersContainer/>}/>
                            <Route path={'/login'} element={<Login/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeApp}),
)(App);
