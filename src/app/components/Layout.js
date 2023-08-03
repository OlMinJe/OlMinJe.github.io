import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';
import Header from './Header';
import SideMenu from './SideMenu';

const Layout = () => {
  return (
    <>
      <Header />
      <Wrap>
        <SideMenu />
        <Container>
          <Outlet />
        </Container>
      </Wrap>
    </>
  );
};

const Wrap = styled.div`
  display: flex;
`;

const Container = styled.div`
  padding: 80px 0 0;
  min-height: 800px;
  background-color: #fff;
`;
export default Layout;
