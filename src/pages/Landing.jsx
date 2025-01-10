
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Landing() {

    return (
        <div className="flex justify-center items-center h-screen text-white">
            <div >
                <h1 class="text-5xl">
                    Hello, I'm Daniel Kinuthia
                </h1>
                <p className="text-2xl text-white">
                    I am a motivated and dedicated
                    full-stack developer, passionate <br />about creating user-friendly software that are seamless, elagant and <br />functional to the end-users.
                    Let's collaborate to craft something <br />amazing together.
                </p>
                <div className='my-10 flex justify-center'>
                    <Stack spacing={2} direction="row">

                        <Button variant="contained" >View Projects</Button>
                        <Button variant="contained" className='mx-10'>About Me</Button>
                    </Stack>
                </div>

            </div>





        </div>
    )
}
export default Landing

