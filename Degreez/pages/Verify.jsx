import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Stack, Typography } from "@mui/material";
import generatePDF from "../src/generatePdf";

function Verify() {
  const [link, setLink] = useState("");
  const handleClick = () => {
    if (link.trim() !== "") {
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
            Verify Certificate
          </Typography>
          <Typography variant="body2" color="primary">
            Fill the token and check the validity
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
        </Stack>
        <Button variant="contained" onClick={handleClick}>
          Validate Certificate
        </Button>
      </Stack>
    </Box>
  );
}

export default Verify;
