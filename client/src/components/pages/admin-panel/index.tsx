import Button from "components/atoms/button";
import Input from "components/atoms/input";
import ModalsBrand from "components/organism/modals/CreateBrand";
import ModalsDevice from "components/organism/modals/CreateDevice";
import ModalsType from "components/organism/modals/CreateType";
import { useState } from "react";
import Typography from "../../atoms/typography";
import { AdminPanelStyle } from "./style";

const AdminPanel: React.FC = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <AdminPanelStyle>
      <Typography variant={"h1"} children={"Панель администратора"} />
      <Button
        label={"Добавить тип"}
        variant={"search"}
        onClick={() => setTypeVisible(true)}
      />
      <Button
        label={"Добавить бренд"}
        variant={"search"}
        onClick={() => setBrandVisible(true)}
      />
      <Button
        label={"Добавить устройство"}
        variant={"search"}
        onClick={() => setDeviceVisible(true)}
      />
      <ModalsBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <ModalsType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <ModalsDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </AdminPanelStyle>
  );
};

export default AdminPanel;
