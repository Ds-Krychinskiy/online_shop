import { AdminPanelStyle } from "./style";
import Input from "../../atoms/input";
import Button from "../../atoms/button";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToServer } from "../../../redux/reducers/adminPanelReducer";
import axios from 'axios';

const AdminPanel = () => {
  const dispatch = useDispatch();
  const post_product = useSelector((state) => state.post_product);
  const { name, price, brand, publisher, img } = post_product;

  const addProduct = (value, valueName) => {
    dispatch(addProductToServer({valueName, value}));
  };
  console.log(post_product)
  const kek = () => {
    axios.post(`https://jsonplaceholder.typicode.com/users`, { post_product })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }
  return (
    <AdminPanelStyle>
      <Input
        addProduct={(value)=> addProduct(value, "name")}
        placeholder={"Введите название товара"}
        value={name}
      />
      <Input
        addProduct={(value)=> addProduct(value, "price")}
        placeholder={"Введите цену товара"}
        value={price}
      />
      <Input
        addProduct={(value)=> addProduct(value, "brand")}
        placeholder={"Введите автора"}
        value={brand}
      />
      <Input addProduct={(value)=> addProduct(value, "publisher")} value={publisher} placeholder={"Введите издателя"} />
      <Input
        type={"file"}
        addProduct={addProduct}
        placeholder={"Добавить изображение товара"}
      />

      <Button onClick={() => kek()}/>
    </AdminPanelStyle>
  );
};

export default AdminPanel;
