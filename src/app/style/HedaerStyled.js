import github from 'app/asset/image/github.svg';
import { styled } from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  padding: 0 20px;
  background-color: #eff4fd;
  border: 3px solid #4d85f4;
`;

export const LogoStyle = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 1em;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: normal;
  }
`;

export const MenuStyle = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 20%;
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    * {
      width: 60%;
    }
  }
`;

export const Github = styled.span`
  width: 30px !important;
  height: 30px;
  background: url(${github}) no-repeat;
  background-size: contain;
`;
