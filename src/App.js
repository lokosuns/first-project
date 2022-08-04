import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <NavbarContainer />
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/dialogs/*'} element={
                            <DialogsContainer
                            />
                        }/>
                        <Route path={'/profile'} element={
                            <Profile
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
