import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { ShoppingItem } from "./ShoppingItem";

test("Renders without crashing", () => {
  const component = render(
    <div>
      <ShoppingItem title="Bananas" />
    </div>
  );
  component.getByText("Bananas");
});
