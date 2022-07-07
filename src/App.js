import './App.css';
import { useState , useEffect} from 'react';
import Navbar from "../src/components/navbar/Navbar"
import LandingPage from './pages/landingPage/LandingPage';
import LandingNavBar from './components/landingPage/LandingNavbar';
import StudentPortal from './pages/studentPortal/StudentPortal';
import Login from './components/landingPage/Login';
import Assignment from './components/studentPortal/Assignment';
import Profile from './components/studentPortal/Profile';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from "./firebase"
import TeacherPortal from './pages/teacherPortal/TeacherPortal';
import Students from './components/teacherPortal/Students';
import Results from './components/teacherPortal/Results';
function App() {
  const [user,setUser]=useState({})
  useEffect(()=>{
    onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser)
    })
    console.log(user)
  })
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/studentDashboard" element={<StudentPortal user={user} />} >
          <Route path="profile" element={<Profile/>} />
          <Route path="assignment" element={<Assignment/>} />
        </Route>
        <Route path='/teacherDashboard' element={<TeacherPortal user={user} /> } >
          <Route path="result" element={<Results/>} />
          <Route path="student" element={<Students/>} />

        </Route>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
