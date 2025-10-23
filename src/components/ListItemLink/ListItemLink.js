import React from 'react';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import {ListItem, ListItemIcon, ListItemText, ListItemButton} from '@mui/material';
import {
  useMatch,
  useResolvedPath,
  Link as RouterLink,
} from 'react-router-dom';

export default function ListItemLink({ icon, text, to, open }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
      }),
    [to]
  );

  return (
    // <li >
    //   <ListItem button component={renderLink} >
    //     {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
    //     <ListItemText primary={text}/>
    //   </ListItem>
    // </li>
    <ListItem disablePadding sx={{ display: "block" }}>
      <ListItemButton
        component={renderLink}
        selected={!!match}
        sx={{
          minHeight: 48,
          justifyContent: text ? "initial" : "center",
          // px: 2.5,
          px: !open ? 3 : 0, //  sin padding lateral cuando está cerrado
          mx: open ? 0 : "auto", //  centra visualmente el hover al cerrar
          borderRadius: 2, // opcional, mejora estética
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: text ? 2 : "auto",
            justifyContent: "center",
            
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText
          primary={text}
          sx={{
            opacity: text ? 1 : 0,
          }}
        />
      </ListItemButton>
    </ListItem>
  );
}
