import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Typography from "../../atoms/typography";
import LinkPrototype from "../link";
import { DropDownListWrapper } from "./style";
import { ListProps } from "redux/types/type";
import { useState } from "react";
import GanrePage from "components/pages/GanrePage";

interface IDropDownListProps {
  listBrand: ListProps[];
  name: string;
}
const DropDownList: React.FC<IDropDownListProps> = ({ listBrand, name }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton onClick={handleClick}>
          <Typography variant={"link"}>
            <ListItemText primary={name} />
          </Typography>
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <DropDownListWrapper>
            {listBrand.map((el) => (
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
