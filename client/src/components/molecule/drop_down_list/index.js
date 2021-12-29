import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Typography from "../../atoms/typography";

const DropDownList = ({ label, list }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton onClick={handleClick}>
          <Typography>
            <ListItemText primary={label} />
          </Typography>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {list.map((el) => (
            <Typography key={el.key}>{el.label}</Typography>
          ))}
        </Collapse>
      </List>
    </>
  );
};

export default DropDownList;
