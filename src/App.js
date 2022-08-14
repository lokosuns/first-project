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


const App = (props) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderComponent/>
                <NavbarContainer />
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
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
