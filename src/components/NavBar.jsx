import React from 'react';

const NavBar = () => {
  return (
    <header className="p-3">
        <nav>
            <div>
                <h1 className="text-[#00df9a] font-bold">COMPANY.</h1>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>Company</li>
                    <li>Resources</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar;