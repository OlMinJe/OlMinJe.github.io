import * as SideMenuStyled from 'app/style/SideMenuStyled';

export const Bio = () => {
  return (
    <>
      <SideMenuStyled.BioStyle>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
            <path
              d="M9.38344 0.109619C14.1834 0.109619 16.3834 2.44295 16.8834 3.60962C18.8835 0.009619 23.7168 -0.223714 25.8834 0.109619C28.2168 0.442952 33.0834 2.50962 33.8834 8.10962C34.6834 13.7096 29.5501 19.443 26.8834 21.6096V25.6096C26.8834 25.6096 27.3834 29.6096 24.8834 29.6096C22.3834 29.6096 22.7168 25.7763 22.8834 24.6096L16.8834 29.1096L13.3834 26.1096V31.6096C13.3834 31.6096 13.3834 33.1096 11.8834 33.1096C10.3834 33.1096 10.3834 31.6096 10.3834 31.6096V26.6096V24.1096L7.88342 22.1096V26.1096C7.88342 26.1096 7.88342 28.6096 6.38342 28.6096C4.38342 28.6096 4.38342 27.6096 4.38342 26.1096V20.1096C4.38342 20.1096 2.48344 18.6096 0.883443 14.6096C-0.716557 10.6096 0.216776 6.60962 0.883443 5.10962C1.71678 3.44295 4.58344 0.109619 9.38344 0.109619Z"
              fill="#4D85F4"
            />
          </svg>
        </li>
        <li>얼렁뚱땅 돌아가는 블로그. 잘못된 부분이나 수정했으면 하는 부분 등 댓글로 남겨주신다면 감사하겠습니다.</li>
        <li style={{ fontSize: '1.0rem', fontWeight: 700, float: 'right' }}>- MINJE -</li>
      </SideMenuStyled.BioStyle>
    </>
  );
};

export const Menu = () => {
  return (
    <>
      <SideMenuStyled.MenuStyle>
        <SideMenuStyled.Title>MENU</SideMenuStyled.Title>
        <section>
          <SideMenuStyled.SvgStyle>
            <svg xmlns="http://www.w3.org/2000/svg" height="96" fill="none" viewBox="0 0 231 96">
              <path
                d="M20.682 53.9057C-1.09965 54.3087 0.00947504 0 0.00947504 0H230.935C230.935 0 232.448 38.7919 220.851 38.7919C207.238 38.7919 215.305 16.6251 203.708 16.6251C192.111 16.6251 203.708 56.4246 189.59 56.4246C175.893 56.4246 190.413 11.5342 171.943 16.6251C157.321 20.6555 196.649 80.0103 168.918 94.7128C144.212 107.811 154.296 16.6251 133.624 16.6251C112.951 17.1289 129.086 77.0801 105.388 77.0801C89.2539 77.0801 110.603 10.787 96.3126 15.1137C79.674 20.1517 92.0234 59.3575 74.6319 57.4322C61.1154 55.9359 71.1683 25.8098 62.0268 28.7161C50.9343 32.2427 57.9931 88.6673 43.3712 73.0498C28.7493 57.4322 55.9763 20.3224 34.2955 20.3224C12.6147 20.3224 47.909 53.4019 20.682 53.9057Z"
                fill="white"
              />
            </svg>
          </SideMenuStyled.SvgStyle>
          <SideMenuStyled.Comment>원하시는 메뉴를 선택해주세요!</SideMenuStyled.Comment>
          <SideMenuStyled.UlStyle>
            <li>
              Javascript <span>total $0</span>
            </li>
          </SideMenuStyled.UlStyle>
          <SideMenuStyled.Comment>Comming Soon...</SideMenuStyled.Comment>
        </section>
      </SideMenuStyled.MenuStyle>
    </>
  );
};

const SideMenu = () => {
  return (
    <>
      <SideMenuStyled.Wrap>
        <Bio />
        <Menu />
      </SideMenuStyled.Wrap>
    </>
  );
};

export default SideMenu;
