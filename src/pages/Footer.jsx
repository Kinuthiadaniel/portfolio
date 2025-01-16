import React from 'react'
import Avatar from '@mui/material/Avatar';
function Footer() {
    return (

        <div className='mt-16 text-gray-200'>
           
            <div className="flex justify-center">
                <a href="https://www.linkedin.com/in/daniel-kinuthia-274ba629b/" className="mr-2" rel='noreferrer' target="_blank">   <Avatar
                    src="https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png"
                    alt="LinkedIn Profile"
                    sx={{ width: 40, height: 40 }} /> LinkedIn</a>
                <a href="https://github.com/Kinuthiadaniel" className="mr-2" rel='noreferrer' target="_blank">   <Avatar
                    src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                    alt="Github Profile"
                    sx={{ width: 40, height: 40}} 
                    
                     /> Github</a>
                     
            </div>
            <div className="flex justify-center">
                <p className='my-2'>
                    &copy; Daniel Kinuthia  2025.  All rights reserved
                </p>
            </div>
        </div>
    )
}
export default Footer