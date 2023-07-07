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

```js
{
  "scripts": {
    "dev": "vite", // 개발 서버를 실행합니다. (`vite dev` 또는 `vite serve`로도 시작이 가능)
    "build": "vite build", // 배포용 빌드 작업을 수행
    "preview": "vite preview" // 로컬에서 배포용 빌드에 대한 프리뷰 서버를 실행
  }
}
```
