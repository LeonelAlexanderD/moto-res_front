import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import { styled } from "@mui/material/styles";
import ListItemLink from '../ListItemLink/ListItemLink' ;
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';


// const StyledListSubheader = styled(ListSubheader)({
//   display: "flex",
//   alignItems: "center",
//   height: "60px",
// });


const iconStyles = {
  marginRight: "10px",
  marginLeft: "10px",
  color: "#EC3E13",
  hover: "#EC3E13",
};


export const secondListItems = ({ rolName, open}) => (
    <ListItemLink
    to="/productos"
    icon={<InventoryIcon  style={iconStyles}/>}
    text={open ? "Inventario" : ""}
  />
);

export const firstListItems = ({ rolName, open }) => (    
    <ListItemLink
    to="/dashboard"
    icon={<DashboardIcon style={iconStyles}/>}
    text={open ? "Dashboard" : ""}
    open
  />
);

export const thirdListItems = ({ rolName, open }) => (    
    <ListItemLink
    to="/ventas"
    icon={<PointOfSaleIcon style={iconStyles}/>}
    text={open ? "Ventas" : ""}
  />
);

export const fourthListItems = ({ rolName, open }) => (    
    <ListItemLink
    to="/reportes"
    icon={<AssessmentIcon style={iconStyles}/>}
    text={open ? "Reportes" : ""}
  />
);