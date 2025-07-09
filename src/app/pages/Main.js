import food from 'app/asset/image/food.png';
import profile from 'app/asset/image/wizarding-world-portrait.png';

const Main = () => {
  return (
    <main>
      <h1>구름 미션(25/07/09)</h1>
      <div>
        <h2>1️⃣ 나만의 프로필 페이지</h2>
        <p>
          안녕하세요! 저는 <b>이민제 입니다!</b>
        </p>
        <img src={profile} alt="캐릭터 이미지" width="200" />
        <p>프론트엔드 개발자를 꿈꾸며 공부 중입니다!</p>

        <h3>제가 좋아하는 것을 소개합니다!</h3>
        <ul>
          <li>⚾️ 야구보기</li>
          <li>🏸 배드민턴</li>
          <li>🔑 API 연결 한 번에 성공하기</li>
        </ul>
        <p>
          📨 연락: <a href="mailto:ol.minje@gmail.com">ol.minje@gmail.com</a>
        </p>
      </div>
      <br />
      <div>
        <h2>2️⃣ 내가 좋아하는 음식 레시피</h2>
        <h3>🍜 연어덮밥 레시피</h3>
        <img src={food} alt="연어덮밥 이미지" />

        <p>주 3회는 기본으로 먹는 연어 덮밥!!</p>

        <h3>만드는 방법</h3>
        <ol>
          <li>1. 트레이더스에 가서 연어를 구매한다.</li>
          <li>2. 연어회(사시미용)를 얇게 썬다.</li>
          <li>3. 양파는 얇게 채 썰고 물에 담가 매운맛을 제거한다.</li>
          <li>4. 밥 위에 연어, 양파, 아보카도, 날치알 등을 올린다.</li>
          <li>5 .간장, 맛술, 설탕을 섞어 만든 소스를 뿌리거나, 와사비 간장을 곁들인다.</li>
        </ol>
      </div>
      <div>
        <h2>3️⃣ 음식 테이블</h2>
        <table>
          <thead>
            <tr>
              <th rowSpan="2">음식</th>
              <th colspan="2">정보</th>
              <th rowSpan="2">평점</th>
              <th rowSpan="2">추천 링크</th>
            </tr>
            <tr>
              <th>**객관적인 평가 기준</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>연어덮밥</td>
              <td colspan="2">신선한 연어를 얹은 간편한 일식 한 그릇</td>
              <td>★☆☆</td>
              <td>
                <a href="https://www.naver.com">가게명</a>
              </td>
            </tr>
            <tr>
              <td>육회덮밥</td>
              <td colspan="2">달달하고 고소한 양념육회를 밥 위에 올린 요리</td>
              <td>★★☆</td>
              <td>
                <a href="https://www.naver.com">가게명</a>
              </td>
            </tr>
            <tr>
              <td>샤브샤브</td>
              <td colspan="2">고기와 채소를 국물에 살짝 익혀 먹는 따뜻한 전골 요리</td>
              <td>★★★</td>
              <td>
                <a href="https://www.naver.com">가게명</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Main;
