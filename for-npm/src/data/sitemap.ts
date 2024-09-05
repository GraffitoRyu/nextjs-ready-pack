const admin = [
  { key: "admin/main", name: "관리자", url: "/admin" },
  { key: "admin/dashboard", name: "서비스현황", url: "/admin/dashboard" },
];

const service = [
  { key: "service/login", name: "로그인", url: "/login" },
  { key: "service/join", name: "회원가입", url: "/join" },
];

const sitemap = { admin, service };

export default sitemap;
