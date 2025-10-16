import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import { styled } from "@mui/material/styles";
import ListItemLink from '../ListItemLink/ListItemLink' ;
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from "@mui/icons-material/People";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const StyledListSubheader = styled(ListSubheader)({
  display: "flex",
  alignItems: "center",
  height: "60px",
});


const iconStyles = {
  marginRight: "32px",
  color: "#0645ccff",
};


export const firstListItems = ({ rolName }) => (
    <React.Fragment>
      <StyledListSubheader component="div">
        <PeopleIcon style={iconStyles} />        
        <ListItemLink to="productos" text="Productos"/>
      </StyledListSubheader>
    </React.Fragment>
);

export const secondListItems = ({ rolName }) => (
    <React.Fragment>
      <StyledListSubheader component="div">
        <AppRegistrationIcon style={iconStyles} />
        <ListItemLink to="aplicativos" text="Aplicativos" />
      </StyledListSubheader>
    </React.Fragment>
);

export const thirdListItems = ({ rolName }) => (
    <React.Fragment>
      <StyledListSubheader component="div">
      <SecurityIcon style={iconStyles} />      
        <ListItemLink to="roles" text="Roles" />
      </StyledListSubheader>      
    </React.Fragment>
);

export const fourthListItems = ({ rolName }) => (
    <React.Fragment>
      <StyledListSubheader component="div">
         <LockOpenIcon style={iconStyles} />   
        <ListItemLink to="permisos" text="Permisos" />
      </StyledListSubheader>      
    </React.Fragment>
);