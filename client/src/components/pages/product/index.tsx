import Card from "components/organism/card";
import { useEffect } from "react";
import { useTypedSelector } from "redux/hooks/useTypedSelector";

const Product = () => {
  const { oneDevice } = useTypedSelector((state) => state.oneDevice);
  useEffect(() => {}, []);
  console.log(oneDevice);
  return (
    <div>
      {oneDevice.map((el) => {
        <Card
          key={el.id}
          name={el.name}
          price={el.price}
          rating={el.rating}
          variant={"base"}
        />;
      })}
    </div>
  );
};

export default Product;
