import {
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from "@mui/material";
import React from "react";
import "./Filter.css"
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import HomeIcon from "@mui/icons-material/Home";
import PowerIcon from "@mui/icons-material/Power";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import LiveSearch from "../LiveSearch/LiveSearch";
import { red } from '@mui/material/colors';

const Filter = ({ category, setCategory, price, setPrice }) => {
  return (

    <FormControl className="filter">
     <Typography variant="h6">
         По Категориям
      </Typography>
      <RadioGroup
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="all"
        name="radio-buttons-group"
        value={category}
        onChange={e => setCategory(e.target.value)}>
        <FormControlLabel
          value="all"
          label={<DensitySmallIcon />}
          control={<Radio  sx={{
            color: red[800],
            '&.Mui-checked': {
              color: red[600],
            },
          }}/>}
        />
        <FormControlLabel
          value="car"
          label={<DirectionsCarIcon />}
          control={<Radio  sx={{
            color: red[800],
            '&.Mui-checked': {
              color: red[600],
            },
          }}/>}
        />
        <FormControlLabel
          value="home"
          label={<HomeIcon />}
          control={<Radio  sx={{
            color: red[800],
            '&.Mui-checked': {
              color: red[600],
            },
          }}/>}
        />
        <FormControlLabel
          value="elecrtonic"
          label={<PowerIcon />}
          control={<Radio  sx={{
            color: red[800],
            '&.Mui-checked': {
              color: red[600],
            },
          }}/>}
        />
      </RadioGroup>
      {/* <LiveSearch /> */}
      <br />
      <Typography  variant="h6">
        По ценам
      </Typography>
      <Slider
        className="slider"
        getAriaLabel={() => "Temperature range"}
        value={price}
        onChange={e => setPrice(e.target.value)}
        valueLabelDisplay="auto"
        min={0}
        max={100000}
      />
    </FormControl>
  );
};

export default Filter;
