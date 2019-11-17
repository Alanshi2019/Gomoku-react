import React, {Component} from 'react';
import Wuziqi from './contents/Wuziqi.js'
import Test from './contents/Test.js'
import { BrowserRouter, Route} from 'react-router-dom';

class App extends Component{
  render(){
    return (
    	<BrowserRouter>
      		 <Route path = '/' exact component = {Wuziqi} ></Route>
      		 <Route path = '/test' exact component = {Test} ></Route>
      	</BrowserRouter>
    );
  }
  
}

export default App;
