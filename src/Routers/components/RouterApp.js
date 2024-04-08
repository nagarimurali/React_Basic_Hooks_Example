import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
// import About from './About';
import Contact from './Contact';
import NotFond from './NotFond';
import Success from './Success';
import Project from './Project';
import NewProject from './NewProject';
import FetureProject from './FetureProject';
import User from './DynamicRouter/User';
import UserDetails from './DynamicRouter/UserDetails';
import { AuthContextProvider } from './AuthFile/auth';
import Loing from './AuthFile/Loing';
import Logout from './AuthFile/LogOut';
import PrivateRoute from './AuthFile/PrivateRoute';
const LazyAbout = React.lazy(() => import('./About'))


const RouterApp = () => {
    return (
        <AuthContextProvider>
            <Navbar />
            <Routes>

                <Route path='/' element={<Home />} />
                <Route path='/about' element={
                    <React.Suspense fallback='Loading..'>
                        <LazyAbout />
                    </React.Suspense>
                } />
                <Route path='/contact' element={<Contact />} />
                <Route path='/success' element={<Success />} />
                <Route path='/project' element={<Project />}>
                    <Route index element={<FetureProject />} />
                    <Route path='feture' element={<FetureProject />} />
                    <Route path='new' element={<NewProject />} />
                </Route>
                <Route path='/users' element={
                    <PrivateRoute>
                        <User />
                    </PrivateRoute>

                } />
                <Route path='/users/:userId' element={<UserDetails />} />
                <Route path='/login' element={<Loing />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='*' element={<NotFond />} />
            </Routes>

        </AuthContextProvider>
    )
}

export default RouterApp
