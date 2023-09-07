import { styled } from 'styled-components';

export const Wrap = styled.div`
  width: 20%;
  padding: 40px 20px;
  border-right: 3px solid #4d85f4;
`;

export const BioStyle = styled.ul`
  li {
    font-size: 0.8rem;
  }
  margin-bottom: 5rem;
`;

export const MenuStyle = styled.div`
  section {
    min-height: 45rem;
    background-color: #dfeaff;
    box-shadow: 0px -2px 3px 0px #dfeaf2ad;
  }
`;

export const Comment = styled.div`
  font-family: 'Saira';
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
`;

export const Title = styled(Comment)`
  letter-spacing: -0.1rem;
  color: #19459c;
  font-family: Titan One;
  font-size: 1.6rem;
  font-weight: 900;
`;

export const SvgStyle = styled.div`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  * {
    width: 100% !important;
    height: 100% !important;
  }
`;
export const UlStyle = styled.ul`
  margin-top: 3rem;
  padding: 0.8rem;
  min-height: 28rem;
  li {
    position: relative;
    padding-left: 10px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    ::before {
      position: absolute;
      content: '';
      left: 0;
      top: 6px;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: #000;
    }
    span {
      float: right;
      font-family: Anaheim;
    }
  }
`;
