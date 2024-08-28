import React from "react";
import { Outlet } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";

const AdminLayout = () => {

    return (
        <>
            <Header />
            <div className="container">
                <main>
                    <Outlet />
                </main>
            </div>
            <Footer />
        </>  
    );
}
export default AdminLayout;