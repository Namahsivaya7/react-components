
// import React from "react";
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



export default class Census extends React.Component {
    constructor() {
        super();
        this.state = {
            details: [], name: "", dob: "", id: ""
        };
    }
    submit = (list) => {
        const newDetails = this.state.details;
        const { name, id, dob } = this.state;
        newDetails.push({ name, id, dob, });
        this.setState({ details: newDetails });
    };
    render() {
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
                                        this.setState({ name: event.target.value })
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
                                        this.setState({ dob: event.target.value })
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
                                        this.setState({ id: event.target.value })
                                    }
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item>
                            <Button variant="contained" onClick={this.submit}>
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
                                {this.state.details.map(({ name, dob, id }) => (
                                    <TableRow>
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
    }
}



