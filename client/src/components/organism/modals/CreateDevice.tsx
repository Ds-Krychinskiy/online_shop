import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DropDownList from "components/molecule/drop_down_list";
import { ListType } from "lists";

interface ModalsDeviceProps {
  show: boolean;
  onHide: () => void;
}

const ModalsDevice: React.FC<ModalsDeviceProps> = ({ show, onHide }) => {
  return (
    <>
      <Dialog open={show} onClose={onHide}>
        <DialogContent>
          <DialogContentText>Добавить устройство.</DialogContentText>
        </DialogContent>
        <DialogActions>
          <DropDownList
            name={"Добавить тип"}
            listBrand={ListType}
            variant={"admin-panel"}
          ></DropDownList>
          <DropDownList
            name={"Добавить бренд"}
            listBrand={ListType}
            variant={"admin-panel"}
          ></DropDownList>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default ModalsDevice;
