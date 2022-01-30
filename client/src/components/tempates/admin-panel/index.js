import React from "react";
import Typography from "../../atoms/typography";
import Form from "../../organism/form/index";

const AdminPanel = () => {
  return (
    <>
      <Typography variant={"h1"}>Панель администратора</Typography>
      <Form variant={"admin-panel"}></Form>
    </>
  );
};

export default AdminPanel;
