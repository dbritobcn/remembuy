import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ShoppingItem } from "./ShoppingItem";
import { Product } from "../../models/Product.interface";

const item: Product = {
  id: "1",
  title: "Bananas",
  done: false,
};

test("Renders without crashing", () => {
  const component = render(
    <div>
      <ShoppingItem item={item} />
    </div>
  );
  component.getByText("Bananas");
});
