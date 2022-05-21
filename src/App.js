import React  from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './AllPages/About/About';
import Blog from './AllPages/Blog/Blog';
import CheckOut from './AllPages/CheckOut/CheckOut';
import CourseDetails from './AllPages/CourseDetails/CourseDetails';
import NotFound from './AllPages/NotFound/NotFound';
import Reviews from './AllPages/Reviews/Reviews';
import Services from './AllPages/Services/Services';
import './App.css';
import Login from './Login/Login/Login';
import UserProfile from './Login/Login/UserProfile/UserProfile';
import Register from './Login/Register/Register';
import RequireAuth from './Login/RequireAuth/RequireAuth';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import Home from './Shared/Home/Home';

function App() {
  return (
    <div>
        <Header></Header>
             <Routes>
               <Route path='/' element={<Home></Home>}></Route>
               <Route path='/home' element={<Home></Home>}></Route>
               <Route path='/services' element={<Services></Services>}></Route>
               <Route path='/reviews' element={<Reviews></Reviews>}></Route>
               <Route path='/login' element={<Login></Login>}></Route>
               <Route path='/register' element={<Register></Register>}></Route>
               <Route path='/service/:courseId' element={<CourseDetails></CourseDetails>}></Route>
               <Route path='/checkout' element={
                 <RequireAuth>
                   <CheckOut></CheckOut>
                 </RequireAuth>
               }></Route>
             <Route path='/userprofile' element={<UserProfile></UserProfile>}></Route>
             <Route path='/about' element={<About></About>}></Route>
             <Route path='/blog' element={<Blog></Blog>}></Route>
               <Route path='/*' element={<NotFound></NotFound>}></Route>
               
             </Routes>
             <Footer></Footer>
    </div>
  );
}

export default App;
