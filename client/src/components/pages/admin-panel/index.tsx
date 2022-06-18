import Button from "components/atoms/button";

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
        variant={"basic"}
        onClick={() => setTypeVisible(true)}
      />
      <Button
        label={"Добавить бренд"}
        variant={"basic"}
        onClick={() => setBrandVisible(true)}
      />
      <Button
        label={"Добавить устройство"}
        variant={"basic"}
        onClick={() => setDeviceVisible(true)}
      />
    </AdminPanelStyle>
  );
};

export default AdminPanel;
