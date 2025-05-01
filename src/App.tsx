
import {BrowserRouter,Route,Routes} from "react-router";
import Layout from './features/layout/Layout';
import DashBoard from "./features/dashboard/DashBoard";
import DepartmentUnitsPage from "./features/departmentunits/DepartmentUnitsPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<DashBoard/>}/>
          <Route path="/DepartmentUnits" element={<DepartmentUnitsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
