import React from "react";
import { Title, Item } from "./ShoppingItem.styles";

interface Props {
  title: string;
}

export const ShoppingItem: React.FC<Props> = ({ title }) => {
  return (
    <Item>
      <Title>{title}</Title>
    </Item>
  );
};
