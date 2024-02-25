import React, { useState, useEffect } from "react";
import "./LiveSearch.css"
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation, useSearchParams } from "react-router-dom";
import { Divider, IconButton, Paper } from "@mui/material";


const LiveSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [paramsSearch, setParamsSearch] = useSearchParams();
  const location = useLocation();
console.log(searchValue);
  useEffect(() => {
    if (location.pathname === "/list") {
      setParamsSearch({
        price_gte: +paramsSearch.get("price_gte"),
        price_lte: +paramsSearch.get("price_lte"),
        q: searchValue,
      });
  
    }
  }, [searchValue]);


  return (

    <Paper 
    className="liveSearch"
      component="form"
      sx={{ p: '2px 4px',m:"0 auto", display: 'flex', alignItems: 'center', width: 400 }}
    >
      <InputBase
      type="search"
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}

      />
      
    </Paper>
  

      // />

  );
};

export default LiveSearch;
