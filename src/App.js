import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar state={props.state.sidebarPage}/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path={'/dialogs/*'} element={
                            <Dialogs
                                store={props.store}
                                // messagePage={props.state.messagePage}
                                // dispatch={props.dispatch}
                                // newMessageText={props.newMessageText}
                            />
                        }/>
                        <Route path={'/profile'} element={
                            <Profile
                                profilePage={props.state.profilePage}
                                dispatch={props.dispatch}
                            />
                        }/>
                        <Route path={'/'} element={
                            <Profile
                                profilePage={props.state.profilePage}
                                dispatch={props.dispatch}
                            />
                        }/>
                        <Route path={'/news'} element={<News/>}/>
                        <Route path={'/music'} element={<Music/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
