import React, { useState } from "react";
// import * as React from 'react';
import { Box, Button, Grid, Slider } from '@mui/material/';
// import Slider from '@mui/material/Slider';
// import Box from '@mui/joy/Box';
// import Slider from '@mui/joy/Slider';


// function valueText(value) {
//     return `${value}°C`;
// }

export default function BmiCalculator() {

    const [weight, setWeight] = useState(1);
    const [height, setHeight] = useState(1);
    const [bmi, setBmi] = useState(1);

    const weightHandler = (event) => {
        const WEIGHT = Number(event.target.value);
        setWeight(WEIGHT);
        const HEIGHT = height / 100;
        const BMI = WEIGHT / (HEIGHT * HEIGHT);
        setBmi(BMI);
    }
    const heightHandler = (event) => {
        const HEIGHT = Number(event.target.value);
        setHeight(HEIGHT);
        const HEIGH = height / 100;
        const BMI = HEIGHT / (HEIGH * HEIGH);
        setBmi(BMI);
    }

    return (
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>

            <Box sx={{ width: 300, justifyContent: "center" }} >Weight (kgs):
                <Slider
                    aria-label="Custom marks"
                    defaultValue={20}
                    min={20}
                    max={150}
                    valueLabelDisplay="auto"

                    onChange={weightHandler}
                />

                <Slider
                    aria-label="Custom marks"
                    defaultValue={20}

                    min={50}
                    max={200}
                    valueLabelDisplay="auto"
                    onChange={heightHandler}

                />

                <Button sx={{ background: "blue", color: "white", padding: "10px", borderRadius: '5px' }}>{bmi}</Button>
            </Box>
        </Grid>

    );
}

