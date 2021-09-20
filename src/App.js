import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
const App = (props)=>{
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header></Header>
        <main className='main'>
          <Route path="/dialogs" render={()=> <Dialogs data={props.state.dialogsData} dispatch={props.dispatch}></Dialogs>}/>
          <Route path="/profile" render={()=> <Profile data={props.state.profileData} dispatch={props.dispatch}></Profile>}/>
        </main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;