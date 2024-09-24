#  🐜 미술품 거래 플랫폼 (ArtAnt)

 > - Artant는 사용자가 예술 작품을 발견하고, 감상하고, 판매할 수 있는 플랫폼입니다. Artant는 다양한 예술 작품을 쉽게 탐색하고, 예술에 대한 깊이 있는 경험을 선사하는 것을 목표로 합니다.
이 레포지토리는 미술품 거래 C2C 플랫폼 Artant의 MVP 프론트엔드로, 웹 사이트의 기본 흐름과 사용자 경험을 중점으로 구현되었으며 결제나 휴대폰 인증 같은 세부 기능은 포함되지 않았습니다.
#### 홈 페이지

* **홈 화면**
> - 상단 배너에서 유명한 갤러리들을 확인할 수 있습니다.
>  - 신상품, 추천 작품, 뉴스 이벤트 및 카데고리를 확인할 수 있습니다.
>  - 카테고리 별로 정리된 작품들을 확인할 수 있으며, 검색 기능 및 필터 기능을 통해 원하는 작품을 선별할 수 있습니다.

<table>
  <tr>
    <td valign="top"><img width="400" alt="api" src="https://github.com/user-attachments/assets/9fdbcf5f-4630-4deb-9eb5-e0131790cfce"></td>
    <td valign="top"><img width="400" alt="api" src="https://github.com/user-attachments/assets/82577d22-4663-42f6-ae6e-b0ea8d79e9a7"> </td>
    <td valign="top"><img width="200" alt="api" src="https://github.com/user-attachments/assets/c8bc5d8a-cc28-4822-9dd1-1d9fe54ea760"></td>
  </tr>
</table>

* **로그인/회원가입**
 > - 기본적인 로그인 및 회원가입을 할 수 있습니다.
>  - 카카오 로그인을 통해 간편 로그인 및 회원가입을 할 수 있으며, 구글과 네이버 로그인은 미구현 상태입니다.
<table>
  <tr>
    <td valign="top"><img width="400" alt="api" src="https://github.com/user-attachments/assets/e49430c0-8326-45a7-b19c-71bc241c324a"></td>
    <td valign="top"><img width="600" alt="api" src="https://github.com/user-attachments/assets/7cf840c2-2bdf-4489-bc56-404c33d56726"></td>
  </tr>
</table>

* **아이디/비밀번호 찾기**
> - 아이디/비밀번호 찾기 화면입니다.
> - 이메일을 통해 비밀번호를 변경할 수 있으며, AWS SES 서비스를 활용해 구현했습니다.
> - 휴대폰 인증 기능은 구현하지 않았습니다.
<table>
  <tr>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/aa41802e-f692-481c-ad6d-efe3d78ff0b2"></td>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/0c83478c-e544-4f5e-8204-84364479be42"></td>
  </tr>
</table>

* **작품 및 갤러리 화면**
> - 아이디/비밀번호 찾기 화면입니다.
> - 이메일을 통해 비밀번호를 변경할 수 있으며, AWS SES 서비스를 활용해 구현했습니다.
> - 휴대폰 인증 기능은 구현하지 않았습니다.
<table>
  <tr>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/0d300ad7-c587-4487-8a75-4ae9ced60eeb"></td>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/6f5cc509-1ea8-4db4-914f-9f5f88c32f5e"></td>
  </tr>
</table>

* **프로필 화면**

<table>
  <tr>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/40f0163d-9eea-48a4-a6ec-b3a8ec057101"></td>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/00e9784e-5dc1-4b31-a678-ab15feee34fb"></td>
  </tr>
</table>

* **갤러리 개설 및 작품 등록 화면**

<table>
  <tr>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/9ef23e35-ac21-427f-849c-3c87b0351b95"></td>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/4bdf8d59-21c2-4308-b628-9046dc201f05"></td>
  </tr>
</table>
<table>
  <tr>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/9ec0b0e3-e5d4-4d01-b547-7b402fe2a718"></td>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/1a4f128d-dc0b-430e-b715-6cbaf443cfae"></td>
  </tr>
</table>

* **장바구니 화면**

<table>
  <tr>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/06d9f834-b421-49f7-9bef-6dd103143b25"></td>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/2358dda4-1ef6-4049-bc1a-8e2dee50f333"></td>
  </tr>
</table>

#### 판매자 페이지

* **판매자 화면**

<table>
  <tr>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/5a5f428a-f2e8-466b-a01b-e508cefd65bd"></td>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/1a31a20c-8c5b-48aa-a71d-8affdc5eb947"></td>
  </tr>
</table>

  <table>
  <tr>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/6a100da1-3a2c-43af-a9a6-87a8da3edc5c"></td>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/ad415fd8-8387-463c-bb35-09b11ee0ca5a"></td>
  </tr>
</table>

  <table>
  <tr>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/7b84bf10-ae42-480f-ac9d-8e6a6ccc5a1d"></td>
    <td valign="top"><img width="500" alt="api" src="https://github.com/user-attachments/assets/c115ee77-aa8b-4c05-9206-e87897bf3c32"></td>
  </tr>
</table>


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
