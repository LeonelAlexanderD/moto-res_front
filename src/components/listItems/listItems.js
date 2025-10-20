import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import { styled } from "@mui/material/styles";
import ListItemLink from '../ListItemLink/ListItemLink' ;
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import InventoryIcon from '@mui/icons-material/Inventory';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';


const StyledListSubheader = styled(ListSubheader)({
  display: "flex",
  alignItems: "center",
  height: "60px",
});


const iconStyles = {
  marginRight: "32px",
  color: "#EC3E13",
  hover: "#EC3E13",
};


export const secondListItems = ({ rolName }) => (
    <React.Fragment>
      <StyledListSubheader component="div">
        <InventoryIcon style={iconStyles} />        
        <ListItemLink to="productos" text="Inventario"/>
      </StyledListSubheader>
    </React.Fragment>
);

export const firstListItems = ({ rolName }) => (
    <React.Fragment>
      <StyledListSubheader component="div">
        <DashboardIcon style={iconStyles} />
        <ListItemLink to="dashboard" text="Dashboard" />
      </StyledListSubheader>
    </React.Fragment>
);

export const thirdListItems = ({ rolName }) => (
    <React.Fragment>
      <StyledListSubheader component="div">
      <PointOfSaleIcon style={iconStyles} />      
        <ListItemLink to="ventas" text="Ventas" />
      </StyledListSubheader>      
    </React.Fragment>
);

export const fourthListItems = ({ rolName }) => (
    <React.Fragment>
      <StyledListSubheader component="div">
         <AssessmentIcon style={iconStyles} />   
        <ListItemLink to="reportes" text="Reportes" />
      </StyledListSubheader>      
    </React.Fragment>
);