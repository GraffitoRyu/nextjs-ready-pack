# [Next.js Ready Pack] for npm

빠른 프로젝트 구축을 위한 사전설정 패키지입니다.

---

## 환경구성

프로젝트 환경으로 다음을 채택하였습니다.

### 코어

- React v18
- Next.js v14 (App Router)
- TypeScript

### 상태관리

- Jotai
- Tanstack Query (React Query) v5

### 스타일링

- SCSS
- styled-components v6
- Tailwind CSS
- simplebar-react
- pretendard

### 컨벤션

- ESLint v8
- Prettier

---

## 프로젝트 구조

개인적으로 자주 사용하는 패턴을 구조화하였습니다.
강제 사항은 아니며, 각 프로젝트에 맞게 커스텀하여 사용하면 됩니다.

```plaintext
/app
  /(main)
    /(admin)
    /(service)
    layout.tsx
    page.tsx
  /api
    /(backend)
    /(frontend)
  manifest.ts
  robots.ts
  sitemap.ts
/public
  /favicon
  /img
/src
  /components
    /root
      /lib
      /provider
  /hooks
  /jotai
  /styles
  /types
  /utils
  /data
    metadata.ts
    sitemap.ts
```
