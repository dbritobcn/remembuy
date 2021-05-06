import React, { useEffect, useState } from "react";
import { ShoppingItem } from "../ShoppingItem/ShoppingItem";
import { ShoppingListProps } from "./ShoppingList.props";
import { List } from "./ShoppingList.styles";
import { Product } from "../../models/Product.interface";
import { todosRef } from "../../FirebaseSetup";

export const ShoppingList: React.FC<ShoppingListProps> = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    todosRef.on("value", (snapshot) => {
      let items = snapshot.val();
      let newState: Product[] = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          done: items[item].done,
        });
      }
      setProducts(newState);
    });
  }, []);

  return (
    <>
      <List>
        {products.map((item: Product) => {
          return (
            <li key={item.id}>
              <ShoppingItem item={item} />
            </li>
          );
        })}
      </List>
    </>
  );
};
