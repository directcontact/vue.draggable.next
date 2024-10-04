function getRouteFromDirectory(ctx) {
  return Object.entries(ctx).map((key, value) => ({
    path: key[0],
    component: key[1],
  }));
}

const showDebug = import.meta.env.VUE_APP_SHOW_ALL_EXAMPLES === "true";
window.console.log(showDebug, import.meta.env.VUE_APP_FILTER_ROUTE);

function getRouteFilterFromConfiguration(configuration) {
  if (!configuration) {
    return () => true;
  }

  const routeFromConfiguration = configuration
    .split(",")
    .filter((value) => value !== "");
  if (routeFromConfiguration.length === 0) {
    return () => true;
  }

  window.console.log(
    `Using route filter VUE_APP_FILTER_ROUTE: "${configuration}"`
  );
  return (name) => routeFromConfiguration.includes(name);
}

const filterRoute = getRouteFilterFromConfiguration(
  import.meta.env.VUE_APP_FILTER_ROUTE
);

const routes = [
  ...getRouteFromDirectory(import.meta.glob("/components/*.vue")),
  ...(!showDebug
    ? []
    : getRouteFromDirectory(import.meta.glob("/debug-components/*.vue"))),
];

routes.forEach(
  (route) => (route.component.show = filterRoute(route.component.display))
);

const filteredRoutes = routes.filter((route) => route.component.show);

if (filteredRoutes.length === 0) {
  throw new Error(
    `No routes to match "${
      import.meta.env.VUE_APP_FILTER_ROUTE
    }". Available route: ${routes
      .map((route) => `"${route.component.display}"`)
      .join(", ")} .Please check env variable: VUE_APP_FILTER_ROUTE`
  );
}

const redirect = filteredRoutes.some((r) => r.path === "/simple")
  ? "/simple"
  : filteredRoutes[0].path;

const allRoutes = [
  ...filteredRoutes,
  { path: "/", redirect },
  { path: "/:pathMatch(.*)*", redirect },
];

export default allRoutes;
