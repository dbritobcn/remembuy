import React from "react";
import { Title, Item } from "./ShoppingItem.styles";
import { todosRef } from "../../FirebaseSetup";

export const ShoppingItem = (props: any) => {
  const { item } = props;

  const updateItem = () => {
    todosRef
      .child(item.id)
      .set({ ...item, done: item.done !== undefined ? !item.done : true });
  };

  const deleteItem = () => {
    todosRef.child(item.id).remove();
  };

  return (
    <Item>
      <Title>{item.title}</Title>
    </Item>
  );
};
