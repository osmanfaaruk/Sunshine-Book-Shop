import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Admin from "../Admin/Admin";
import ManageProduct from "../ManageProduct/ManageProduct";
import SideBar from "../SideBar/SideBar";

const AdminDashboard = () => {
    return (
       <Router>
           <div className="row">
               <Switch>
                    <div className="col-3">
                        <SideBar/>
                    </div>
               </Switch>
               <Switch>
                   <div className="col-9" >
                       <Route path="/dashboard/manageBooks">
                        <ManageProduct/>
                       </Route>
                       <Route path="/dashboard/admin">
                        <Admin/>
                       </Route>
                   </div>
               </Switch>
           </div>
       </Router>
    );
};

export default AdminDashboard;