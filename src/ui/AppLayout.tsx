import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  height: 100vdh;
  background-image: linear-gradient(
    150deg,
    var(--color-grey-0) 30%,
    var(--color-brand-50)
  );
`;

const Main = styled.main`
  padding: 3rem;
  height: 100dvh;
  max-width: 120rem;
  margin: auto;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
