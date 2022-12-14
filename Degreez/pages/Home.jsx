import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Stack, Typography } from "@mui/material";
import generatePDF from "../src/generatePdf";

function Home() {
  const [name, setName] = useState("");

  const handleClick = () => {
    if (name.trim() !== "") {
      generatePDF(name);
    } else {
      console.log("name not mentioned");
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "#eaeaea",
        padding: "40px",
        borderRadius: "10px",
        width: "100%",
      }}
    >
      <Stack spacing={4}>
        <Box textAlign={"left"}>
          <Typography variant="h4" color="initial">
            Details Form
          </Typography>
          <Typography variant="body2" color="primary">
            It will be shown on your generated certificate
          </Typography>
        </Box>
        <Stack>
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField id="standard-basic" label="Course" variant="standard" />
        </Stack>
        <Stack>
          <TextField id="standard-basic" label="Grade" variant="standard" />
          <TextField id="standard-basic" label="Date" variant="standard" />
        </Stack>
        <Button variant="contained" onClick={handleClick}>
          Generate Certificate
        </Button>
      </Stack>
    </Box>
  );
}

export default Home;
