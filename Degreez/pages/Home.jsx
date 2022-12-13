import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function Home() {
    return(
        <>
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField id="standard-basic" label="Course" variant="standard" />
            <br />
            <TextField id="standard-basic" label="Grade" variant="standard" />
            <TextField id="standard-basic" label="Date" variant="standard" />
            <br />
            <Button variant="contained">Generate Certificate</Button>
        </>
    );
}

export default Home;