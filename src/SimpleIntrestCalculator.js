import React, { useState } from "react";

import { TextField, FormControl, InputLabel, Grid, Box, Button, Select, MenuItem, List, ListItem, ListItemText } from "@mui/material";

export default function IntrestCalc() {
    const [principal, setPrincipal] = useState(0);

    const [rate, setRate] = useState();
    const [time, setTime] = useState(5);
    const [interest, setInterest] = useState();
    const [totalamount, setTotalamount] = useState();
    const [timeFrame, setTimeFrame] = useState();

    const selectHandler = (event) => {
        setTimeFrame(event.target.value);
    };
    const calculatorHandler = () => {
        const currentTime = timeFrame === "year" ? time * 12 : time;
        const Interest = principal * rate * time;
        setInterest(Interest / 100);
        setTotalamount(principal + (Interest / 100));


    };


    return (
        <Grid container sx={{ textAlign: "center" }}>
            <Grid item xs={4}>

                <Box sx={{ padding: "20px", background: "white", borderRadius: "20px", width: "550px", height: "580px" }}>

                    <Grid container >

                        <Grid item xs={2}></Grid>
                        <Grid item xs={3} sx={{ border: "none" }}>
                            <FormControl>

                                <TextField type="number" id="my-input" style={{ backgroundColor: "white", border: "none" }} label="Principal($)"
                                    onChange={(event) => setPrincipal(Number(event.target.value))} />
                            </FormControl>
                            <br />
                            <FormControl style={{ marginTop: "30px" }}>

                                <TextField type="number" id="time" style={{ backgroundColor: "white", }}
                                    label="Time" onChange={(event) => setTime(Number(event.target.value))} />
                            </FormControl>
                        </Grid>

                        <Grid item xs={1}></Grid>
                        <Grid item xs={3}>
                            <FormControl >

                                <TextField type="number" id="rate" style={{ backgroundColor: "white", }} value={rate}
                                    label="Rate" onChange={(event) => setRate(Number(event.target.value))}
                                />
                            </FormControl>
                            <br />
                            <FormControl style={{ marginTop: "30px" }} variant="standard">
                                <InputLabel htmlFor="years" style={{}}>Years</InputLabel>

                                <Select label="years" onChange={selectHandler} value={timeFrame}>
                                    <MenuItem value={"year"}>year</MenuItem>
                                    <MenuItem value={"month"}>month</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                    <Button onClick={calculatorHandler} sx={{ border: "1px solid #01e26e", marginTop: "50px", textAlign: "center", background: "#01e26e", color: "white", }}>Calculate</Button>
                    <Grid container sx={{ background: "#72ffb4", marginTop: "100px" }}>
                        <List>
                            <ListItem>
                                <ListItemText id="principal-amount" primary="Principal Amount :" />
                                <p>{principal}</p>

                            </ListItem>
                            <ListItem>
                                <ListItemText id="total-interest" primary="Total interest :" />
                                <p>{interest}</p>

                            </ListItem>
                            <ListItem>
                                <ListItemText id="total-amount" primary="Total Amount :" />
                                <p>{totalamount}</p>

                            </ListItem>
                        </List>

                    </Grid>
                    {/* <h1>
            SIMPLE INTEREST CALCULATOR
        </h1> */}
                </Box>
            </Grid>


            {/* <Grid item xs={ }></Grid> */}


            <Grid item xs={8} sx={{marginTop:"100px"}}>

                <h1 style={{ fontSize: 60, marginLeft: "120px",fontFamily:"sans-serif" }}>
                    SIMPLE INTEREST
                </h1>
                <h1 style={{ fontSize: 75, color: "black", marginLeft: "90px",fontFamily:"sans-serif" }}>CALCULATOR</h1>
                <h1 style={{ fontSize: 45, border: "1px solid white", background: "white", color: "black", display: "inline", marginLeft: '100px',fontFamily:"sans-serif" }}>HTML,CSS &Javascript</h1>
            </Grid>
        </Grid>


    );
}