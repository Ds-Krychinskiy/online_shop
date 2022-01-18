import { AdminPanelStyle } from "./style";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostProductToServer } from "../../../redux/reducers/PostProductReducer";

const AdminPanel = () => {
  const dispatch = useDispatch();
  const post_product = useSelector((state) => state.post_product);
  console.log(post_product)
  const {name, price, brand, img} = post_product;

  const addProduct = (name) => {
    dispatch(PostProductToServer({name}));
  };

  return (
    <AdminPanelStyle>
      <Input
        addProduct={addProduct}
        placeholder={"Введите название товара"}
        value={name}
      />
      <Input
        addProduct={addProduct}
        placeholder={"Введите цену товара"}
        value={price}

      />
      <Input
        addProduct={addProduct}
        placeholder={"Введите автора"}
        value={brand}

      />
      <Button />
    </AdminPanelStyle>
  );
};

export default AdminPanel;
