## Vite

- 자바스크립트 빌드 툴
- 정적(Static) HTTP 서버와 비슷하게 "루트 디렉터리"라는 개념을 가짐
- CRA에 비해 프로젝트에 담긴 의존성 규모가 작아서 인스톨 시간에 대한 부담이 없음
- HMR 및 빌드 속도가 매우 빠름

### 초기 세팅

```
 $  yarn create vite
```

### vite 명령

```ts
{
  "scripts": {
    "dev": "vite", // 개발 서버를 실행합니다. (`vite dev` 또는 `vite serve`로도 시작이 가능)
    "build": "vite build", // 배포용 빌드 작업을 수행
    "preview": "vite preview" // 로컬에서 배포용 빌드에 대한 프리뷰 서버를 실행
  }
}
```
---
## React와 History API 사용하여 SPA Router 기능 구현하기

**해당 주소로 진입했을 때 아래 주소에 맞는 페이지가 렌더링 되어야 한다.**
- `/` → `root` 페이지
- `/about` → `about` 페이지
**Router, Route 컴포넌트를 구현해야 하며, 형태는 아래와 같아야 한다.**
```ts
ReactDOM.createRoot(container).render(
  <Router>
    <Route path="/" component={<Root />} />
    <Route path="/about" component={<About />} />
  </Router>
);
```

### routes/index.tsx의 Router 컴포넌트
```ts
  const renderComponentForCurrentUrl = () => {
    const childArray = React.Children.toArray(children);
    const matchingChild = childArray.find((child) => {
      if (!React.isValidElement(child)) {
        return false;
      }
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { path } = child.props;
      return path === currentUrl;
    });

    return matchingChild ? matchingChild : null;
  };
```
* useEffect로 처음에 렌더링될 때 해당 window.location.pathname를 담은 currentUrl와 child의 path를 비교하여 일치하는 child를 반환하는 함수를 사용하여 주소에 맞는 페이지가 렌더링되도록 구현하였습니다.


**2) 버튼을 클릭하면 해당 페이지로, 뒤로 가기 버튼을 눌렀을 때 이전 페이지로 이동해야 한다.**

```ts
  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentUrl(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);
```

**최소한의 push 기능을 가진 useRouter Hook을 작성한다.** 
```ts 
export const useRouter = () => {
  const push = (path: string) => {
    window.location.href = path;
  };
  return { push };
};

```

