
import './App.css';
import Home from './pages/home/home';
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import { useState } from 'react';
import Explore from './pages/explore/explore';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import DetailsPage from './pages/detailsPage/detailsPage';
import SetupBussiness from './pages/setupBussiness/setupBussiness';


function App() {
  const [selectedItem, setselectedItem] = useState("Home")
  const navItems = [
    "Home","Explore","Setup My Business","About Us"
  ]
  const setNavitem = (item) => {
    console.log(selectedItem)
    setselectedItem(item)
  }
  console.log(selectedItem)

  return (
    <Router>
    <div className="App">
            <Navbar navItems={navItems} setNavitem={setNavitem} selectedItem={selectedItem} />

      <Routes>
        <Route path='/saloonwebsite-demo/' element={<Home />} ></Route>
        <Route path='/saloonwebsite-demo/home' element={<Home />} ></Route>
        <Route path='/saloonwebsite-demo/explore' element={ <Explore />} ></Route>
        <Route path='/saloonwebsite-demo/explore/:id' element={ <DetailsPage />} ></Route>
        <Route path='/saloonwebsite-demo/setupBusiness' element={ <SetupBussiness />} ></Route>
        
      </Routes>
     
     <Footer />
    </div>
    </Router>
  );
}


export default App;
