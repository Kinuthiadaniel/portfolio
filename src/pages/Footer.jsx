import React from 'react';
import Avatar from '@mui/material/Avatar';

function Footer() {
    return (
        <footer className=''>
        <div className=" w-full py-8 px-4 px-4 sm:px-6 lg:px-8 mt-4 text-gray-200  py-4">
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-4 space-y-4 sm:space-y-0">
                {/* LinkedIn */}
                <a 
                    href="https://www.linkedin.com/in/daniel-kinuthia-274ba629b/" 
                    className="flex items-center space-x-2 hover:text-blue-500 transition" 
                    rel="noreferrer" 
                    target="_blank"
                >
                    <Avatar
                        src="https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png"
                        alt="LinkedIn Profile"
                        sx={{ width: 40, height: 40 }}
                    />
                    <span>LinkedIn</span>
                </a>

                {/* Github */}
                <a 
                    href="https://github.com/Kinuthiadaniel" 
                    className="flex items-center space-x-2 hover:text-gray-400 transition" 
                    rel="noreferrer" 
                    target="_blank"
                >
                    <Avatar
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        alt="Github Profile"
                        sx={{ width: 40, height: 40 }}
                    />
                    <span>Github</span>
                </a>
            </div>

            {/* Copyright */}
            <div className="flex justify-center mt-4">
                <p className="text-center text-sm sm:text-base">
                &copy; {new Date().getFullYear()} Daniel Kinuthia. All rights reserved.
                </p>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
