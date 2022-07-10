import 
{
  RemoveIceCreamButton,
  Img,
  PriceAmount,
  Price,
  ItemName,
  ItemCart,
  CartSection,
  InfoWrap,
  CartButtonSection,
} from "./CartElements"
import { useDispatch } from "react-redux";
import {removeIceCream} from "../../store"




function CartItems({ productType, price, img, alt, amount, item }) {
  const dispatch = useDispatch()

  const handleClick=()=>{
    console.log("handleclick item",item,removeIceCream);
    dispatch(removeIceCream(item))
    // console.log(item);
  }


  const totalPrice = price * amount;
  return (
    <ItemCart>
      <InfoWrap>
        <CartSection>
          <CartButtonSection>
            <RemoveIceCreamButton onClick={handleClick}>
              X
            </RemoveIceCreamButton>
          </CartButtonSection>
          <ItemName>{productType}</ItemName>
          <Img src={img} alt={alt} />
          <Price>{`${amount} x $${price}`}</Price>
          <PriceAmount>{`${totalPrice} $`}</PriceAmount>
        </CartSection>
      </InfoWrap>
    </ItemCart>
  );
}

export default CartItems;
