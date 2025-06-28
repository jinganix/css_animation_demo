import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("case1", "routes/case1.tsx"),
  route("case2", "routes/case2.tsx"),
  route("case3", "routes/case3.tsx"),
  route("case4", "routes/case4.tsx"),
  route("case5", "routes/case5.tsx"),
  route("case6", "routes/case6.tsx"),
  route("case7", "routes/case7.tsx"),
  route("case8", "routes/case8.tsx"),
  route("case9", "routes/case9.tsx"),
] satisfies RouteConfig;
