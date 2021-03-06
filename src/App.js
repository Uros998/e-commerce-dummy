import React from 'react';
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import {Route, Routes} from "react-router-dom";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {

    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user});
            console.log(user,"p");
        })
    }

    // componentWillUnmount() {
    //     // this.unsubscribeFromAuth();
    // }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Routes>
                    <Route exact path="/" element={<HomePage/>}/>
                    <Route path='/shop' element={<ShopPage/>}/>
                    <Route path='/sign-in' element={<SignInAndSignUpPage/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;
