// import React from 'react'
import * as React from 'react';
import {
    Box,
    Button,
    FormControl,
    Grid,
    Input,
    InputLabel,
    Paper,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Table,
    TableRow,
} from "@mui/material";
export default function Censusfunction() {
    const [name, setName] = React.useState("");
    const [dob, setDob] = React.useState("");
    const [id, setId] = React.useState("");
    const [list, setList] = React.useState([]);

    const submit = () => {
        const Details = { name, dob, id };
        setList([...list, Details])


    }
    return (
        <Box
            sx={{ display: `flex`, flexDirection: `column`, alignItems: `center` }}
        >
            <Box
                sx={{
                    margin: "20px",
                    padding: `50px`,
                    "& > :not(style)": { m: 1 },
                    background: `#F6F6F6`,
                    maxWidth: 250,
                }}
            >

                <h3>REGISTRATION FORM</h3>
                <Grid container>
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="my-input">Name</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby="my-helper-text"
                                style={{ backgroundColor: "white" }}
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="my-input">DOB</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby="my-helper-text"
                                style={{ backgroundColor: "white" }}
                                onChange={(event) =>
                                    setDob(event.target.value)
                                }
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <FormControl>
                            <InputLabel htmlFor="my-input">ID</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby="my-helper-text"
                                style={{ backgroundColor: "white" }}
                                onChange={(event) =>
                                    setId(event.target.value)
                                }
                            />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Button variant="contained" onClick={submit}>
                            SUBMIT
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <TableContainer component={Paper}>
                    <Table
                        sx={{ minWidth: 925, background: `white` }}
                        size="small"
                        aria-label="a dense table"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell> NAME</TableCell>
                                <TableCell>DOB</TableCell>
                                <TableCell>ID</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {list.map(({ name, dob, id }, i) => (
                                <TableRow key={id + i}>
                                    <TableCell>{name}</TableCell>

                                    <TableCell>{dob}</TableCell>
                                    <TableCell>{id}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );


};