import styled from "styled-components";

const ItemCard = styled.button`
  border: 2px solid #e7e7e7;
  padding: 0.5rem;
  border-radius: 4px;
  margin: auto;
  &:hover {
    cursor: pointer;
  }
`;

const Img = styled.img`
  max-height: auto;
  max-width: 100%;
`;

function IceCreamItem({ productType, price, img, alt, onClick }) {
  return (
    <div>
      <ItemCard onClick={onClick}>
        <div>{productType}</div>
        <Img src={img} alt={alt} />
        <div>{price}</div>
      </ItemCard>
    </div>
  );
}

export default IceCreamItem;
