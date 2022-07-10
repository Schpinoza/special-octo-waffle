import { useEffect, useState } from "react";
import Card from "../UI/Card";
import Data from "./Data";
import IceCreamItem from "./IceCreamItem/IceCreamItem";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addIceCream } from "../../store";
const Container = styled.div`
  margin: 2rem auto;
  padding: 10px;
`;
function AvilableIceCream() {
    const dispatch = useDispatch()
  const [iceCream, setIceCream] = useState([]);

  useEffect(() => {
    setIceCream(Data);
  }, []);

  const handleSubmit = (product) => {
    dispatch(addIceCream(product))
  };

  return (
    <Container>
      <Card>
        {iceCream.map((product) => {
          return (
            <IceCreamItem
              onClick={() => {
                handleSubmit(product);
              }}
              id={product.id}
              key={product.id}
              productType={product.productType}
              img={product.img}
              price={product.price}
            />
          );
        })}
      </Card>
    </Container>
  );
}

export default AvilableIceCream;
