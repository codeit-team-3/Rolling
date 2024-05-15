## ✏️  Rolling 

- 배포 URL : https://rolling03.netlify.app/

<br>

## 프로젝트 소개

간편하게 이용 가능한 롤링페이퍼 서비스입니다.

회원가입 없이 간편하게 롤링페이퍼를 생성할 수 있습니다. 생성한 롤링페이퍼는 URL이나 카카오톡을 통해 공유할 수 있습니다.

롤링페이퍼에서 다양한 이모지로 감정을 표현할 수 있고, 메세지 생성(+) 버튼을 통해 다양한 프로필 이미지와 이름으로 메세지를 남길 수 있습니다.


직접 이야기하지 못했던 속마음을 서로에게 전하면서, 서로가 더 솔직해지고 가까워질 수 있습니다.


리스트 페이지에서 다양한 유저들의 페이지를 리액션 수와 최신순으로 나눠 볼 수 있는 기능을 제공합니다.


<br>

## 팀원 구성

<div align="center">

## Team 3
|<img src="https://avatars.githubusercontent.com/u/80903685?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/113002590?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/154623483?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/162130792?v=4" width="150" height="150"/>|<img src="https://avatars.githubusercontent.com/u/141720486?v=4" width="150" height="150"/>|
|:-:|:-:|:-:|:-:|:-:|
|강은우<br/>[@euoonw](https://github.com/euoonw)|문주영<br/>[@MJY1993](https://github.com/MJY1993)|Jeongmin<br/>[@oris8](https://github.com/oris8)|Park-Jingyeong<br/>[@Park-Jingyeong](https://github.com/Park-Jingyeong)|유성진<br/>[@yubugi](https://github.com/yubugi)|

</div>

<br>

## 1. 개발 환경


- 빌드 빛 개발도구
    - **Vite**: Vite를 사용하여 빠른 빌드 최적화가 가능하도록 했습니다.
    - **ESLint**: 코드 품질과 일관성을 유지하기 위해 ESLint를 사용했습니다.
    - **Prettier**: 코드 포매팅 도구인 Prettier를 사용하여 코드 스타일을 일관되게 유지했습니다.
    - **Husky**: Git 훅을 쉽게 관리할 수 있도록 Husky를 사용합니다. 이를 통해 커밋 전에 린트,포맷팅 체크를 하고 커밋메세지가 규칙에 맞는지 검사 후, 브랜치의 이슈번호를 자동으로 할당해주었습니다.
- 라이브러리
    - **Axios**: HTTP 클라이언트 라이브러리인 Axios를 통해 백엔드 서비스와의 네트워크 통신을 처리했습니다.
    - **Emoji-picker-react**: 리액트 환경에서 이모지 선택 기능을 제공하는 라이브러리입니다.
    - **React Quill**: 리치 텍스트 에디터를 웹 애플리케이션에 쉽게 통합할 수 있게 해주는 React Quill을 사용했습니다.
    - **Swiper**: 강력한 슬라이더 구현을 위해 Swiper 라이브러리를 사용했습니다.
- 문서화 
	- Git wiki와 노션을 활용해 팀 규칙을 정리했습니다.

<br>
<br>


## 2. 채택한 개발 기술과 브랜치 전략

- react와 module.css 사용
	- 팀원들 모두에게 익숙한 css 방식을 사용해 기술공부시간을 줄여 빠르게 개발이 가능했습니다.
- github flow 사용
	- 배포브랜치인 main branch에서 개발 브랜치인 develop브랜치 생성 후 개별 기능 개발 브랜치를 만들어 사용했습니다.

<br>
<br>

## 3. 프로젝트 구조

```
├── README.md
├── .eslintrc.js
├── .gitignore
├── .husky
├── .prettierrc.json
├── package-lock.json
├── package.json
│
├── public
└── src
     ├── App.jsx
     ├── AppRouter.jsx
     ├── main.jsx
     ├── apis
     │     └── api.js
     ├── asset
     │     ├── fonts
     │     └── icon, image 파일들 ...
     │          .
     │          .
     │          .
     ├── components
     │     ├── AppLayout
     │     │      └── AppLayout.jsx
     │     ├── ArrowButton/
     │     └── Badge/
     │            .
     │            .
     │            .
     ├── hooks
     │     ├── useRequest.js
     │     └── useWindowSize.js
     ├── pages
     │     ├── PostId_PostIdEdit
     │     │     ├── PoistId.jsx
     │     │     ├── PoistId.module.css
     │     │     └── PostIdEdit.jsx
     │     ├── PostIDMessage
     │     │     ├── PostIDMessage.jsx
     │     │     ├── PostIDMessage.module.css
     │     │     ├── ProfileInput.jsx
     │     │     └── ProfileInput.module.css
     │     ├── HomePage.jsx
     │     ├── HomePage.module.css
     │     ├── List.jsx
     │     ├── List.module.css
     │     ├── NotFoundPage.jsx
     │     ├── Post.jsx
     │     └── Post.module.css
     ├── styles
     │     ├── colors.css
     │     ├── icons.css
     │     └── reset.css
     └── utls
           ├── formatDataString.js
           └── stripHtml.js

```

<br>

## 4. 역할 

- 강은우
    - 공동컴포넌트제작: 모달, 카드, 옵션
    - `post/{id}`, `post/{id}/edit` 페이지 제작

- 문주영
    - 공동컴포넌트 제작 : 텍스트 에디터, 카드리스트, 컬러 css 변수설정
    - `/list` 리스트 페이지 제작

- 박진경
    - 공통 컴포넌트 제작: Input 컴포넌트, Dropdown 컴포넌트
    - 홈 (메인, `/`) 페이지 제작
    
- 유성진
    - 기본 폰트설정
    - 공통컴포넌트 제작: 뱃지, 토스트, 토글버튼
    - `post` 페이지 제작

- 이정민
    - 공통 컴포넌트 제작: 뱃지 이모지, 버튼, 글로벌 헤더, 서비스헤더
    - 프로젝트 초기 세팅, api, router설정, 폰트 최적화, 배포, 리드미 작성
    -  `post/{id}/message` 페이지 제작



<br>

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-04-30 ~ 2024-05-15
- 공통 컴포넌트 구현 : 2024-04-30 ~ 2024-05-05
- 페이지 구현 : 2022-05-05 ~ 2024-05-15

<br>

### 작업 관리

매일 아침 데일리스크럼을 통해 팀원들의 현재 작업상황을 파악했습니다.<br>

매일 13시 ~ 15시 동안 게더타운에서 코어타임을 가져 빠르게 개발이 진행되도록하였습니다.<br>

퇴근스레드를 통해 퇴근전에도 각자의 작업상황을 공유했습니다.<br>

지라를 통한 이슈 관리를 통해 작업들을 체계적으로 관리했습니다.<br>

<br>

## 6. 신경 쓴 부분

서브셋폰트와 woff2, woff 파일, display속성을 이용해 폰트 최적화에 신경썼습니다.

사용자들이 편리하게 서비스를 이용할 수 있도록 반응형과 기본값 설정등에 유의해서 제작했습니다

<br>

## 7. 페이지별 기능


### 메인 페이지 (/, 진경)


- 롤링 로고를 클릭하면 메인 페이지로 연결됩니다.
- 롤링 페이퍼 만들기 버튼을 클릭하면 post 페이지로 이동합니다.
- 두 개의 배너에서 롤링 서비스의 기능을 소개합니다.
- 반응형 웹 디자인으로 태블릿과 모바일에서 화면 내 버튼, 배너 등 크기가 조절됩니다.
<br>

### 리스트 페이지 (list, 주영)

- 롤링페이퍼 카드를 slide show 형식으로 보여줍니다.
- Swiper 라이브러리를 사용했습니다.


<br>

### 롤링페이퍼 생성하기 페이지 (post, 성진)


- 받는 사람의 이름을 선택하면 버튼이 활성화가 되고 입력하지 않고 다른 화면을 클릭 하면 "값을 입력해 주세요." 라는 에러 메세지가 나옵니다.
- 배경 화면을 컬러, 이미지로 나누어 선택할 수 있고 기본 값은 컬러의 beige 입니다.
- 받을 사람의 이름과 배경을 선택하고 생성하기 버튼을 누르면 롤링페이퍼가 생성됩니다.
- 롤링페이퍼가 생성되면 post/id페이지로 이동합니다.

<br>

#### 롤링페이퍼 페이지 (post/{id}, 은우)

- 특정 롤링페이퍼의 받은 메시지들을 카드 형태로 보여줍니다. 이 페이지를 통해 메시지를 추가, 조회 및 관리할 수 있습니다.
    
    1. **메시지 상세 보기**: 메시지 카드를 클릭하면 모달 창을 통해 메시지의 자세한 내용을 볼 수 있습니다.
    2. **메시지 추가 및 수정**: 메시지를 추가하거나 기존 메시지를 수정할 수 있는 페이지로의 네비게이션 기능을 제공합니다.
    
<br>
<br>

**메시지 로딩**: 초기 데이터 로딩과 더 많은 메시지를 불러오기 위한 비동기 통신을 사용합니다.
    
1. **초기화**: 사용자가 페이지를 처음 방문하면, **`useEffect`** 훅이 실행되어 초기 데이터 로딩 함수 **`fetchInitialData`**를 호출합니다.
2. **API 요청**: **`fetchInitialData`** 함수에서는 **`useRequest`** 커스텀 훅을 사용하여 **`/recipients/${id}/messages/`** 엔드포인트로 GET 요청을 보냅니다. 이 요청은 해당 롤링페이퍼의 초기 메시지 목록을 서버로부터 가져옵니다.
3. **상태 업데이트**: 요청이 성공하면 응답 데이터를 사용하여 메시지 목록(**`messages`**) 상태를 업데이트하고, 추가 메시지 로딩을 위한 다음 페이지 URL(**`nextPageUrl`**)을 저장합니다. 요청이 실패하면 에러 메시지를 상태에 저장합니다.

**무한 스크롤**: 사용자가 스크롤을 내릴 때 추가 메시지를 자동으로 불러오는 기능을 구현합니다.
 
1. **스크롤 감지**: 사용자가 페이지 하단에 도달하는 것을 감지하기 위해 **`handleScroll`** 함수가 스크롤 이벤트에 바인딩되어 있습니다.
2. **조건 검사**: **`handleScroll`** 함수 내에서, 현재 로딩 중이 아니고 **`nextPageUrl`**이 존재할 경우에만 추가 데이터 요청을 진행합니다.
3. **비동기 요청**: 위 조건이 충족되면 **`fetchMessages`** 함수를 호출하여 **`nextPageUrl`**을 통해 다음 페이지의 메시지를 로드합니다.
4. **상태 업데이트**: 추가 메시지 데이터가 성공적으로 로드되면, 기존 메시지 목록에 새로운 메시지를 추가하고, 새로운 **`nextPageUrl`**을 업데이트합니다. 실패 시 에러 처리를 수행합니다.

**상태 업데이트와 즉각적인 UI 반영**: 상태가 업데이트될 때마다 React는 컴포넌트를 다시 렌더링합니다. <br>
예를 들어, **`setMessages`**를 호출하면 메시지 목록 상태가 업데이트되고, <br>
이에 따라 메시지 카드 목록을 표시하는 부분이 새로운 상태로 다시 렌더링됩니다. <br>
이러한 방식으로 상태 변경이 사용자 인터페이스에 즉시 반영됩니다.



#### 유저 페이지 헤더 (롤링페이퍼 페이지 내부 컴포넌트, 정민)

- api호출을 통해 상위 3개 이모지와 나머지 이모지를 받아옵니다
- 상위에서 메세지 작성한 사람들의 데이터를 내려받아, 최근 3명 작성자의 프로필 이미지와 나머지 사람의 수를 표시합니다.
- 이모지피커와 이모지 더보기란은 모바일화면과 데스크탑화면을 분리해 반응형으로 구현했습니다.
- 현재 url을 받아와서 클립보드에 복사하거나 카카오톡으로 공유할 수 있습니다.
- 클립보드 복사시에 복사가 완료되었다는 알림창을 띄워주고 자동으로 사라지게 만들어 복사되었다는 것을 유저가 확실하게 알 수 있도록 만들었습니다.
- 카카오톡 공유시에 템플릿을 설정해주어서 어떤 서비스인지 표시하면서 자세한 메세지를 보낼 수 있습니다.

<br>

#### 롤링페이퍼 편집 페이지 (post/{id}/edit, 은우)

- 롤링페이퍼 페이지에 올라온 메시지들을 삭제하거나, 롤링페이퍼 페이지 자체를 삭제할 수 있도록 하는 기능을 제공합니다.  
- 메시지를 삭제하거나, 페이지를 삭제할 수 있습니다. '돌아가기' 버튼을 통해 이전 페이지로 돌아갈 수 있습니다.
    
    1. **메시지 삭제**: 각 메시지 옆에 삭제 버튼을 제공하여, 해당 메시지를 데이터베이스에서 삭제할 수 있습니다.
    2. **페이지 삭제**: 페이지 전체를 삭제할 수 있는 기능을 제공하며, 삭제 전 사용자에게 삭제 확인 다이얼로그를 통해 한번 더 확인을 요청합니다.
    3. **네비게이션**: 사용자가 이전 페이지로 돌아갈 수 있는 버튼을 제공합니다.
<br>

#### 메세지 생성하기 페이지 (post/{id}/message, 정민)

- 관계와 폰트값은 기본 값을 설정해주었습니다.
- 폼이 전부 채워지지 않으면 버튼이 비활성화되었다가 폼이 채워졌을때 활성화됩니다.
- 폰트 선택에 따라 텍스트 에디터에서 폰트가 적용되어 바로 확인이 가능합니다.
- 프로필 이미지는 이미 존재하는 이미지에서 선택하거나 자신이 가지고 있는 파일을 업로드 할 수 있습니다.
- 메세지 생성하기 버튼을 누르면 post 메서드를 통해 api 서버에 메세지 데이터를 생성하고 유저페이지로 이동합니다.
<br>
<br>



## 8. 개선 목표


- 슬라이드의 네비게이션 역할을 하는 버튼 컴포넌트 커스터마이징
- 코드 리팩토링

<br>
<br>

## 9. 프로젝트 후기


### 3팀

데드라인을 준수해서 비교적 넉넉한 리팩토링 기간을 가질 수 있었습니다.

새로운 협업툴을 적극적으로 사용할 수 있어서 좋았습니다.

피드백 수용이 적극적이었습니다.

서로 도와가면서 협업을 진행했습니다.

3팀만의 특색을 반영한 요소들을 추가하려고 했지만 하지 못해서 아쉬웠습니다.

아직 익숙하지 않은 github를 통해 자료를 업로드 하고 받아오는 과정이 조금 어려웠지만 팀원들과 협업을 하면서 실력이 많이 향상되었다고 느꼈고 좋았습니다.

협업에 대한 전반적인 흐름을 느껴볼 수 있어서 좋았습니다.


<br>

### 주영

맡은 컴포넌트 및 페이지 제작에 어려움이 있어서 다른 분들의 작업내용에 대하여 충분한 관심과 검토를 못했습니다.

<br>

### 성진

아직 익숙하지 않은 github를 통해 자료를 업로드 하고 받아오는 과정이 조금 어려웠지만
 
팀원들과 협엽을 하면서 실력이 많이 향샹되었다고 느꼈고 좋았습니다.

<br>

### 정민

깃을 통한 협업를 경험해보면서 협업할때 소통과 이슈관리의 중요성에 대해 더욱 깨닫게 되었습니다. 

작업과정에서 특히 공통컴포넌트를 제작할때, 다른 사람들이 더 쉽게 사용할 수 있도록 코드를 간결하고 유연하게 짜려고 노력했습니다. 

코드리뷰를 통해 코드에 대한 서로의 생각을 공유하고 수용하는 태도를 기를 수 있었습니다.

다양한 기능추가나 디자인변경을 해보려고 이야기를 나눠봤지만 시간적이유로 진행하지 못했던 점이 아쉽습니다!!!!!

프로젝트 이후에도 시간을 내서 리팩토링을 진행해나가면 좋을 것 같아요오


