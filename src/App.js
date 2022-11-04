import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes, Route} from 'react-router';
import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';

function App() {
  return (
    <div>
      <Router>
         
          <HeaderComponent/>
            <div className="container">
              <Routes>
                <Route path ='/' element = {<ListEmployeeComponent/>}/>
                <Route path ='/employee' element={<ListEmployeeComponent/>}/>
                <Route path ='/add-employee' element={<CreateEmployeeComponent/>}/>
                <Route path ='/update-employee/:id' element={<UpdateEmployeeComponent/>}/>
                <Route path ='/view-employee/:id' element={<ViewEmployeeComponent/>}/>
              </Routes>
            </div>
          <FooterComponent/>
        
      </Router>
    </div>
  );
}

export default App;
