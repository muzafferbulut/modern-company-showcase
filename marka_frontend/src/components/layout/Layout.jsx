import React from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"

const Layout = ({children}) => {
    return (
        <div className="d-flex flex-column min-vh-100">

            <Header />

            {/* Sayfa içeriği burada gösterilecek */}
            <main className="flex-grow-1">
                {children}
            </main>

            <Footer />

        </div>
    )
}

export default Layout;