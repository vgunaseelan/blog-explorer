import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './components/layout/AdminLayout/Index';
import Dashboard from './components/front/Dashboard';
import Login from './components/layout/AuthLayout/Login';
import Blogs from './components/front/Blogs';
import BlogDetails from './components/front/BlogDetails';
import ProtectedRoute from './components/utils/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route element={<ProtectedRoute redirectTo={"/login"} />}>
          <Route element={<AdminLayout />} >
            <Route path="/" element={<Dashboard />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
