import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Typography from "../../atoms/typography";
import LinkPrototype from "../../atoms/link";
import { DropDownListWrapper } from "./style";
import { IListProps } from "../../../lists";

interface IDropDownListProps {
  label: string;
  list: IListProps[];
}
const DropDownList: React.FC<IDropDownListProps> = ({ label, list }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton onMouseMove={handleClick}>
          <Typography variant={"link"}>
            <ListItemText primary={label} />
          </Typography>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <DropDownListWrapper>
            {list.map((el) => (
              <LinkPrototype
                variant={"drop-list"}
                way={el.way}
                key={el.key}
                label={el.label}
              />
            ))}
          </DropDownListWrapper>
        </Collapse>
      </List>
    </>
  );
};

export default DropDownList;
