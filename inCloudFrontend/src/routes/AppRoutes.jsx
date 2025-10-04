import { Route, Routes } from "react-router";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import CreateNew from "../pages/CreateNew"
import Drive from "../pages/Drive"
import Layout from "../components/Layout";
function AppRoutes() {
  console.log("everything is coming !");
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/layout" element={<Layout/>}/>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/upload" element={<CreateNew/>}></Route>
        <Route path="/Drive" element={<Drive/>}></Route>
        
      </Routes>
    </div>
  );
}
export default AppRoutes;
