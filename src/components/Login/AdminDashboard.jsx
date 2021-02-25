import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FeedView from "../Admin/FeedView";
import MemberView from "../Admin/MemberView";
import LetterView from "../Admin/LetterView";
import Navbar from '../Styles/Navbar';
  
  export default function AdminDashboard() {

  
  return (
    <BrowserRouter>
        <Navbar/>
      <Switch>
        <Route path='/dashboard' exact component={FeedView} />
        <Route path='/members'  component={MemberView} />
        <Route path='/letters'  component={LetterView} />
      </Switch>
    </BrowserRouter>
  )
}
