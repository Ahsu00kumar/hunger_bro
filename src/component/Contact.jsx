import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <div className="flex-grow">
                    <main>
                        <Header />

                        <Footer />
                    </main>
                </div>
            </div>
        </>
    )
}

export default Contact
