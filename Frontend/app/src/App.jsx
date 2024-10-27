import React from 'react';
import Slider from './Components/SlideBar/Main';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UserContext from './Components/Context/UserContext';
export default function App() {
  const notify = () => toast("This is a toast message!");

  return (
    <div>
     <UserContext>
     <Slider />
     <ToastContainer position="top-right" autoClose={5000} />
     </UserContext>
    
    </div>
  );
}
