import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
function Login(){
    let secrets = window.secrets;
    let pw = "degreez";
    const [inputShares, setInputShares] = useState([]);
    const navigate = useNavigate();
    const onInputFill = (e) => {
        e.preventDefault();
        setInputShares((prev) => [...prev, e.target.value]);
    }
    const onButtonClick = (e) => {
        e.preventDefault();
        let comb = secrets.combine(inputShares.slice(0, 3));
        comb = secrets.hex2str(comb);
        console.log(comb);
        if(comb === pw) {
            navigate('/home');
        } else {
            alert("Invalid Keys");
        }
    }
    useEffect(() => {
        let pwHex = secrets.str2hex(pw);
        let shares = secrets.share(pwHex, 5, 3);
        console.log(shares);
    }, []);
    return(
        <>
        <div>
            <h1>Degreez</h1>
        <Box sx={{ flexDirection: 'column' }}>
            <h3>Login via keys</h3>
            <TextField label="Enter Key 1" type="text" key="1" onChange={onInputFill} margin="dense"/>
            <TextField label="Enter Key 2" type="text" key="2" onChange={onInputFill} margin="dense"/>
            <TextField label="Enter Key 3"type="text" key="3" onChange={onInputFill} margin="dense"/>
        </Box>
        <Button variant="contained" onClick={onButtonClick}>Submit</Button>
        </div>
        </>
    );
}

export default Login;