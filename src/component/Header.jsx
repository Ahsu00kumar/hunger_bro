import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        alert("clicked !!");
    };

    return (
        <>
            <header className="w-full py-9">
                <div className="lg:container lg:mx-auto px-2 lg:px-3 relative">
                    <div className="flex items-center justify-between">

                        <div className="uppercase font-bold text-2xl flex items-center">
                            <div className="lg:hidden pe-3 lg:pe-0" onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                                </svg>
                            </div>
                            <Link to='/'>
                                <div>
                                    <span className="text-amber-400">hunger</span>
                                    <span className="text-slate-950">-</span>
                                    <span className="text-red-500">bro</span>
                                </div>
                            </Link>
                        </div>

                        {/* ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} */}
                        {/* overflow-hidden lg:overflow-visible h-0 lg:h-full */}

                        {/* <div className={`${isMenuOpen ? "capitalize font-medium items-center w-full lg:w-auto absolute lg:relative top-14 lg:top-0" : ""} `} id="menu"> */}
                        {/* <ul className={` ${isMenuOpen ? "items-center justify-between gap-x-8 full flex flex-col lg:flex lg:flex-row lg:max-lg:flex-col bg-yellow-500 lg:bg-white" : "md:hidden"}`}> */}

                        <div className="capitalize font-medium items-center w-full lg:w-auto absolute lg:relative top-14 lg:top-0" id="menu">
                            <ul className="items-center justify-between gap-x-8 full flex flex-col lg:flex lg:flex-row lg:max-lg:flex-col">
                                <li className="py-3 lg:py-0 border-b border-slate-100 w-full text-center lg:w-auto lg:border-0">
                                   <NavLink to="/">Home</NavLink>
                                </li>
                                <li className="py-3 lg:py-0 border-b border-slate-100 w-full text-center lg:w-auto lg:border-0">
                                    <NavLink to="/About">About Us</NavLink>
                                </li>
                                <li className="py-3 lg:py-0 border-b border-slate-100 w-full text-center lg:w-auto lg:border-0">
                                    <NavLink to="/OurSpecial">Our Special</NavLink>
                                </li>
                                <li className="py-3 lg:py-0 border-b border-slate-100 w-full text-center lg:w-auto lg:border-0">
                                    <NavLink to="/Services">Services</NavLink>
                                </li>
                                <li className="py-3 lg:py-0 border-b border-slate-100 w-full text-center lg:w-auto lg:border-0">
                                    <NavLink to="/Contact">Contact</NavLink>
                                </li>
                            </ul>
                        </div>



                        <div className="uppercase font-bold text-2xl">
                            <div>
                                <ul className="flex items-center gap-3">
                                    <li>
                                        <svg width="20" height="20" viewBox="0 0 26 26"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.9186 5.59277C10.0977 5.59277 9.44092 6.24437 9.44092 7.05887C9.44092 7.87336 10.0977 8.52496 10.9186 8.52496C12.2048 8.52496 13.272 9.5838 13.272 10.8598C13.272 11.6743 13.9287 12.3259 14.7497 12.3259C15.5706 12.3259 16.2274 11.6743 16.2274 10.8598C16.2274 7.95481 13.8466 5.59277 10.9186 5.59277Z" fill="black" />
                                            <path d="M25.5313 23.0231L19.7026 17.2673C21.0435 15.4754 21.8371 13.2491 21.8371 10.8328C21.8371 4.85982 16.9388 0 10.9185 0C4.89829 0 0 4.85982 0 10.8328C0 16.8058 4.89829 21.6656 10.9185 21.6656C13.354 21.6656 15.5705 20.8782 17.404 19.5479L23.2053 25.3037C23.5337 25.6295 23.9442 25.7652 24.3546 25.7652C24.7651 25.7652 25.2029 25.6023 25.504 25.3037C26.1607 24.6792 26.1607 23.6475 25.5313 23.0231ZM3.25641 10.8328C3.25641 6.65172 6.70437 3.23083 10.9185 3.23083C15.1327 3.23083 18.5807 6.65172 18.5807 10.8328C18.5807 15.0139 15.1327 18.4348 10.9185 18.4348C6.70437 18.4348 3.25641 15.041 3.25641 10.8328Z" fill="black" />
                                        </svg>
                                    </li>

                                    <li className="relative">
                                        <svg width="27" height="26" viewBox="0 0 31 30"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11 20.92H19C19.2652 20.92 19.5196 20.8146 19.7071 20.6271C19.8946 20.4396 20 20.1852 20 19.92C20 19.6548 19.8946 19.4004 19.7071 19.2129C19.5196 19.0253 19.2652 18.92 19 18.92H11C10.7348 18.92 10.4804 19.0253 10.2929 19.2129C10.1054 19.4004 10 19.6548 10 19.92C10 20.1852 10.1054 20.4396 10.2929 20.6271C10.4804 20.8146 10.7348 20.92 11 20.92Z" fill="black" />
                                            <path d="M20 24.08C20 23.8148 19.8946 23.5604 19.7071 23.3729C19.5196 23.1853 19.2652 23.08 19 23.08H11C10.7348 23.08 10.4804 23.1853 10.2929 23.3729C10.1054 23.5604 10 23.8148 10 24.08C10 24.3452 10.1054 24.5996 10.2929 24.7871C10.4804 24.9746 10.7348 25.08 11 25.08H19C19.2652 25.08 19.5196 24.9746 19.7071 24.7871C19.8946 24.5996 20 24.3452 20 24.08Z" fill="black" />
                                            <path d="M3.07011 16.88L5.00011 26.22C5.16796 27.0353 5.61165 27.7678 6.25644 28.2942C6.90123 28.8206 7.70773 29.1087 8.54011 29.11H12.1401C12.4053 29.11 12.6597 29.0046 12.8472 28.8171C13.0348 28.6296 13.1401 28.3752 13.1401 28.11C13.1401 27.8448 13.0348 27.5904 12.8472 27.4029C12.6597 27.2153 12.4053 27.11 12.1401 27.11H8.51011C8.13879 27.1086 7.77922 26.9797 7.49159 26.7449C7.20397 26.51 7.00574 26.1835 6.93011 25.82L5.11011 16.89H25.1101L23.3001 25.82C23.2224 26.1843 23.0222 26.5111 22.7329 26.7458C22.4436 26.9805 22.0826 27.109 21.7101 27.11H21.0001C20.7349 27.11 20.4805 27.2153 20.293 27.4029C20.1055 27.5904 20.0001 27.8448 20.0001 28.11C20.0001 28.3752 20.1055 28.6296 20.293 28.8171C20.4805 29.0046 20.7349 29.11 21.0001 29.11H21.7101C22.5425 29.1087 23.349 28.8206 23.9938 28.2942C24.6386 27.7678 25.0823 27.0353 25.2501 26.22L27.1701 16.86C27.9658 16.8229 28.7141 16.4712 29.2504 15.8823C29.7868 15.2934 30.0672 14.5156 30.0301 13.72C29.993 12.9243 29.6413 12.176 29.0524 11.6397C28.4636 11.1033 27.6858 10.8229 26.8901 10.86H21.1101V6.85999C21.1101 5.26869 20.478 3.74256 19.3527 2.61734C18.2275 1.49213 16.7014 0.859985 15.1101 0.859985C13.5188 0.859985 11.9927 1.49213 10.8675 2.61734C9.74225 3.74256 9.11011 5.26869 9.11011 6.85999V10.86H3.11011C2.31446 10.86 1.5514 11.1761 0.988787 11.7387C0.426178 12.3013 0.110107 13.0643 0.110107 13.86C0.110107 14.6556 0.426178 15.4187 0.988787 15.9813C1.5514 16.5439 2.31446 16.86 3.11011 16.86L3.07011 16.88ZM11.0701 6.87999C11.0701 5.81912 11.4915 4.8017 12.2417 4.05156C12.9918 3.30141 14.0092 2.87999 15.0701 2.87999C16.131 2.87999 17.1484 3.30141 17.8985 4.05156C18.6487 4.8017 19.0701 5.81912 19.0701 6.87999V10.88H11.0701V6.87999ZM3.07011 12.88H26.8901C27.1553 12.88 27.4097 12.9853 27.5972 13.1729C27.7847 13.3604 27.8901 13.6148 27.8901 13.88C27.8901 14.1452 27.7847 14.3996 27.5972 14.5871C27.4097 14.7746 27.1553 14.88 26.8901 14.88H3.11011C2.84489 14.88 2.59054 14.7746 2.403 14.5871C2.21546 14.3996 2.11011 14.1452 2.11011 13.88C2.11011 13.6148 2.21546 13.3604 2.403 13.1729C2.59054 12.9853 2.84489 12.88 3.11011 12.88H3.07011Z" fill="black" />
                                        </svg>
                                        <p className="absolute top-0 right-0 shadow-indigo-500/40 max-w-3 max-h-3 min-w-3 min-h-3 bg-orange-600 rounded-full"></p>
                                    </li>
                                    <li>
                                        <svg width="24" height="24" viewBox="0 0 28 28"  xmlns="http://www.w3.org/2000/svg">
                                            <path d="M28 14C28 16.2687 27.4687 18.3938 26.5067 20.2892C25.2287 18.3221 23.4626 16.6851 21.3662 15.5221C21.9405 14.4164 22.2564 13.1672 22.2564 11.8462C22.2564 7.29436 18.5518 3.58974 14 3.58974C9.4482 3.58974 5.74359 7.29436 5.74359 11.8462C5.74359 13.1672 6.05949 14.4164 6.63385 15.5221C4.53744 16.6851 2.77128 18.3221 1.49333 20.2892C0.531282 18.3938 0 16.2687 0 14C0 6.27487 6.27487 0 14 0C21.7251 0 28 6.27487 28 14ZM14 17.9487C17.3643 17.9487 20.1026 15.2105 20.1026 11.8462C20.1026 8.48185 17.3643 5.74359 14 5.74359C10.6357 5.74359 7.89744 8.48185 7.89744 11.8462C7.89744 15.2105 10.6357 17.9487 14 17.9487ZM20.1456 17.3313C18.6523 19.0256 16.441 20.1026 14 20.1026C11.559 20.1026 9.34769 19.0256 7.85436 17.3313C5.67179 18.4656 3.89128 20.2318 2.75692 22.3426C5.31282 25.7744 9.40513 28 14 28C18.5949 28 22.6872 25.7744 25.2431 22.3426C24.1087 20.2318 22.3282 18.4656 20.1456 17.3313Z" fill="black" />
                                        </svg>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;




