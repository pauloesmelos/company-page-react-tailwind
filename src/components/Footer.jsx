import React from 'react';
import { TiSocialFacebookCircular, TiSocialLinkedin, TiSocialSkype, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="w-full grid sm:grid-cols-3 gap-8 py-16 px-10">
      <div>
        <h1 className="text-[#00df9a] font-bold text-3xl">COMPANY.</h1>
        <p className="text-white my-5 text-lg">
            <span className="text-[#00df9a]">&copy; 2023 / paulo eduardo.</span> Lorem ipsum dolor sit, amet consectetur 
            adipisicing numquam officiis iste obcaecati dignissimos placea.
        </p>
        <div className="flex justify-between sm:max-w-[80%]">
            <TiSocialLinkedin size={35} color="#fff" style={{cursor: "pointer"}} />
            <TiSocialFacebookCircular size={35} color="#fff" style={{cursor: "pointer"}} />
            <TiSocialSkype size={35} color="#fff" style={{cursor: "pointer"}} />
            <TiSocialTwitter size={35} color="#fff" style={{cursor: "pointer"}} />
            <TiSocialYoutube size={35} color="#fff" style={{cursor: "pointer"}} />
        </div>
      </div>
      <div className="text-white flex justify-between gap-5 sm:col-span-2">
        <div>
            <h6 className="text-xl text-gray-500">Solutions</h6>
            <ul>
                <li className="py-2 hover:text-[#00df9a]">Analytics</li>
                <li className="py-2 hover:text-[#00df9a]">Marketing</li>
                <li className="py-2 hover:text-[#00df9a]">Commerce</li>
                <li className="py-2 hover:text-[#00df9a]">Insights</li>
            </ul>
        </div>
        <div>
            <h6 className="text-xl text-gray-500">Support</h6>
            <ul>
                <li className="py-2 hover:text-[#00df9a]">Pricing</li>
                <li className="py-2 hover:text-[#00df9a]">Documentation</li>
                <li className="py-2 hover:text-[#00df9a]">Guides</li>
                <li className="py-2 hover:text-[#00df9a]">API Status</li>
            </ul>
        </div>
        <div>
            <h6 className="text-xl text-gray-500">Company</h6>
            <ul>
                <li className="py-2 hover:text-[#00df9a]">About</li>
                <li className="py-2 hover:text-[#00df9a]">Blog</li>
                <li className="py-2 hover:text-[#00df9a]">Jobs</li>
                <li className="py-2 hover:text-[#00df9a]">Press</li>
                <li className="py-2 hover:text-[#00df9a]">Careers</li>
            </ul>
        </div>
        <div>
            <h6 className="text-xl text-gray-500">Legal</h6>
            <ul>
                <li className="py-2 hover:text-[#00df9a]">Claim</li>
                <li className="py-2 hover:text-[#00df9a]">Policy</li>
                <li className="py-2 hover:text-[#00df9a]">Terms</li>
            </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;