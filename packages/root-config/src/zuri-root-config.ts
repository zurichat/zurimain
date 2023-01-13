import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructLayoutEngine,
  constructRoutes
} from "single-spa-layout";

const routes = constructRoutes(document.querySelector("#single-spa-layout"), {
  loaders: {
    core: "<h1>Loading core</h1>"
  },
  props: {},
  errors: {
    core: "<h1>Failed to load core</h1>"
  }
});

const applications = constructApplications({
  routes,
  loadApp: ({ name }) => System.import(name)
});

const layoutEngine = constructLayoutEngine({
  routes,
  applications,
  //   turn on once we setup the style guide and utilities
  active: false
});

applications.forEach(registerApplication);

(async () => {
  await System.import("@zuri/utilities");
  await System.import("@zuri/ui");

  layoutEngine.activate();
  start();
})();
