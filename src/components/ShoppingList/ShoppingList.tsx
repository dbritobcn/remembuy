import React from "react";
import { ShoppingItem } from "../ShoppingItem/ShoppingItem";
import { List } from "./ShoppingList.styles";

interface Props {}

export const ShoppingList: React.FC<Props> = () => {
  return (
    <List>
      {["Plátanos", "Cerezas", "Café", "Salami"].map(
        (item: string, index: number) => {
          return (
            <li key={index}>
              <ShoppingItem title={item} />
            </li>
          );
        }
      )}
    </List>
  );
};
