import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "components/atoms/button";
import Input from "components/atoms/input";

interface ModalsTypeProps {
  show: boolean;
  onHide: () => void;
}

const ModalsType: React.FC<ModalsTypeProps> = ({ show, onHide }) => {
  return (
    <div>
      <Dialog open={show} onClose={onHide}>
        <DialogContent>
          <DialogContentText>
            Добавить тип.
            <Input
              variant={"registration"}
              type={"text"}
              onChange={(e) => console.log(e)}
            ></Input>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant={"search"}
            label={"Закрыть"}
            onClick={onHide}
          ></Button>
          <Button
            variant={"search"}
            label={"Добавить"}
            onClick={() => console.log("kek")}
          ></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ModalsType;
