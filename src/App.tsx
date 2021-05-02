import React from "react";
import { ShoppingList } from "./components/ShoppingList/ShoppingList";
import { GlobalStyles } from "./assets/styles/Global";
import { Container } from "./App.styles";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Container>
        <ShoppingList />
      </Container>
    </>
  );
}

export default App;
