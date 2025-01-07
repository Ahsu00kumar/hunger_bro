import React from "react";
import Header from './Header';
import Landing_section from './Landing_section';
import Product from './Product';
import Popular_menu from './Popular_menu';
import Landing_service from './Landing_service';
import Footer from './Footer';

function Home() {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <main>
                        <Header />
                        <Landing_section />
                        <Product />
                        <Popular_menu />
                        <Landing_service />
                        <Footer />
                    </main>
                </div>
            </div>
        </>
    )
}
export default Home;