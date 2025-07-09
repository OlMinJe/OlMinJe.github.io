import food from 'app/asset/image/food.png';
import profile from 'app/asset/image/wizarding-world-portrait.png';

const Main = () => {
  return (
    <div style={styles.container}>
      <header>
        <h1>구름 미션(25/07/09)</h1>
      </header>

      <main>
        {/* 1️⃣ 프로필 */}
        <section>
          <h2>1️⃣ 나만의 프로필 페이지</h2>
          <p>
            안녕하세요! 저는 <b>이민제 입니다!</b>
          </p>
          <img src={profile} alt="캐릭터 이미지" width="200" style={styles.image} />
          <h3>제가 좋아하는 것을 소개합니다!</h3>
          <ul>
            <li>⚾️ 야구보기</li>
            <li>🏸 배드민턴</li>
            <li>🔑 API 연결 한 번에 성공하기</li>
          </ul>
          <p>
            📨 연락:{' '}
            <a href="mailto:ol.minje@gmail.com" style={styles.link}>
              ol.minje@gmail.com
            </a>
          </p>
        </section>

        {/* 2️⃣ 음식 레시피 */}
        <section>
          <h2>2️⃣ 내가 좋아하는 음식 레시피</h2>
          <h3>🍜 연어덮밥 레시피</h3>
          <img src={food} alt="연어덮밥 이미지" style={styles.image} />
          <p>주 3회는 기본으로 먹는 연어 덮밥!!</p>
          <h3>만드는 방법</h3>
          <ol>
            <li>트레이더스에 가서 연어를 구매한다.</li>
            <li>양파는 얇게 채 썰고 물에 담가 매운맛을 제거한다.</li>
            <li>간장, 맛술, 설탕을 섞어 만든 소스를 뿌리거나, 와사비 간장을 곁들인다.</li>
          </ol>
        </section>

        {/* 3️⃣ 음식 테이블 */}
        <section>
          <h2>3️⃣ 음식 테이블</h2>
          <table style={styles.table}>
            <thead style={{ backgroundColor: '#f0f0f0' }}>
              <tr>
                <th rowSpan="2">음식</th>
                <th colSpan="2">정보</th>
                <th rowSpan="2">평점</th>
                <th rowSpan="2">추천 링크</th>
              </tr>
              <tr>
                <th colSpan="2" style={{ color: 'red' }}>
                  **객관적인 평가 기준
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>연어덮밥</td>
                <td colSpan="2">신선한 연어에 맛난 하이볼!</td>
                <td>★☆☆</td>
                <td>
                  <a href="https://naver.me/xP8mhUxP" style={styles.link}>
                    이자카야 우규
                  </a>
                </td>
              </tr>
              <tr>
                <td>육회덮밥</td>
                <td colSpan="2">냄새 없는 맛난 육회!</td>
                <td>★★☆</td>
                <td>
                  <a href="https://naver.me/xP8mhUxP" style={styles.link}>
                    이자카야 우규
                  </a>
                </td>
              </tr>
              <tr>
                <td>샤브샤브</td>
                <td colSpan="2">무한리필 만세</td>
                <td>★★★</td>
                <td>
                  <a href="https://naver.me/xXwqLF2G" style={styles.link}>
                    사브올데이
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#f9fafb',
    color: '#111827',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: `'Noto Sans KR', sans-serif`,
  },
  image: {
    display: 'block',
    margin: '16px 0',
    borderRadius: '8px',
  },
  link: {
    color: '#1d4ed8',
    textDecoration: 'none',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  thtd: {
    border: '1px solid #aaa',
    padding: '12px',
    textAlign: 'center',
  },
};

export default Main;
