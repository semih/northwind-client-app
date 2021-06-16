import React, { useState } from "react";
import { Menu, Container } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { useHistory } from "react-router-dom";

export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history = useHistory();
  function handleSignedOut() {
    setIsAuthenticated(false);
    history.push("/");
  }

  function handleSignedIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted>
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignedOut} />
            ) : (
              <SignedOut signIn={handleSignedIn} />
            )}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
