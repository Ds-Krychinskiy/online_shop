import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "components/atoms/button";
import Input from "components/atoms/input";
import DropDownList from "components/molecule/drop_down_list";
import { ListType } from "lists";
import { useState } from "react";

interface ModalsDeviceProps {
  show: boolean;
  onHide: () => void;
}

interface InfoProps {
  title: string;
  description: string;
  number: number;
}

const ModalsDevice: React.FC<ModalsDeviceProps> = ({ show, onHide }) => {
  const [info, setInfo] = useState<InfoProps[]>([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => {
    setInfo(info.filter((el) => el.number !== number));
  };
  return (
    <>
      <Dialog open={show} onClose={onHide}>
        <DialogContent
          sx={{
            display: "flex",
            justifyContent: "center",
            height: "1000px",
            width: "1000px",
          }}
        >
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
          <Input
            variant="registration"
            type="number"
            onChange={() => console.log("первый инпут")}
          ></Input>
          <Input
            variant="registration"
            type="number"
            onChange={() => console.log("второй инпут")}
          ></Input>
          <Input
            variant="registration"
            type="file"
            onChange={() => console.log("инпут")}
          ></Input>
          <Button
            label={"Добавить "}
            variant="add_basket"
            onClick={() => addInfo()}
          />
          {info.map((el) => {
            <div>
              <Input
                variant="registration"
                type="text"
                onChange={() => console.log()}
              ></Input>
              <Input
                variant="registration"
                type="text"
                onChange={() => console.log()}
              ></Input>
              <Button
                label={"Удалить"}
                variant="registration"
                onClick={() => removeInfo(el.number)}
              ></Button>
            </div>;
          })}
        </DialogActions>
      </Dialog>
    </>
  );
};
export default ModalsDevice;
