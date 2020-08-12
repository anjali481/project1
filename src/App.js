import React from 'react';

import {    
	BrowserRouter,
	Switch,
	Route,
	Link,
	useParams
  } from "react-router-dom";
import  Page from './Page'

class App extends React.Component{
  render() {
	return (
	  <BrowserRouter>
	  <div className="App">
		  <Route exact path="/:page_id" component={Page}/>

		  </div>
		  </BrowserRouter>
	);
  }
}

export default App;
