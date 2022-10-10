import "./App.css"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Menu from "./components/pages/Home/Menu";
import View from "./components/student/View";
import Edit from "./components/student/Edit";
import Images from "./components/Image";
import Auth from "./components/Auth/Auth";
import Signup from "./components/Auth/Signup";



function App() {
  return (

     <div className="App">
        <div className="blur" style={{top: '-18%', right: '0'}}></div>
        <div className="blur" style={{top: '36%', left: '-8rem'}}></div>
        
      <BrowserRouter>
        <Switch>
        {/* <Route exact path="/images" component={Images} /> */}
          <Route exact path="/" component={Menu} />
          <Route exact path="/login" component={Auth} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path="/home" component={Home} /> */}
          {/* <Route exact path="/view/:id" component={View} /> */}
          <Route exact path="/edit/:id" component={Edit} />

        </Switch>
      </BrowserRouter>
      </div>
   
  );
}

export default App;
