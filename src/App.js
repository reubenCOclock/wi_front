import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";
import AdminLogin from "./components/AdminLogin";
import AdminPage from "./components/AdminPage";
import ModifyContact from "./components/ModifyContact";
import ModifyPrevious from "./components/ModifyPrevious";
function App() {
  return (
    <>
      
      
      <Router> 
      <Header/>
      <Switch>
           
           
           <Route path="/admin/login">
               <AdminLogin/>
           </Route> 

           <Route path="/admin/page">
               <AdminPage/>
           </Route>

           <Route path="/admin/modify/:id">
                <ModifyContact/>
           </Route>

           <Route path="/modify/previous">
               <ModifyPrevious/>
           </Route>

           <Route path="/">
                <Contact/>
           </Route> 

        </Switch>

      </Router>
        
      
    </>
  );
}

export default App;
