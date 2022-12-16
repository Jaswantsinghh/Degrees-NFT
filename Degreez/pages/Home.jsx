import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Box, Stack, Typography } from "@mui/material";
import generatePDF from "../src/generatePdf";

function Home() {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [degree, setDegree] = useState("");
  const [course, setCourse] = useState("");
  const [grade, setGrade] = useState("");

  const handleClick = () => {
    const data = { name, fatherName, branch, year, degree, course, grade };
    if (name.trim() !== "") {
      generatePDF(data);
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
          <TextField
            id="standard-basic"
            label="Father Name"
            variant="standard"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
          />
        </Stack>
        <Stack>
          <TextField
            id="standard-basic"
            label="Branch"
            variant="standard"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Year Of Completion"
            variant="standard"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Degree"
            variant="standard"
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Course"
            variant="standard"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Grade"
            variant="standard"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </Stack>
        <Button variant="contained" onClick={handleClick}>
          Generate Certificate
        </Button>
      </Stack>
    </Box>
  );
}

export default Home;
