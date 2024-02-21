import { register } from "@dom-builder/builder";
import React from "react";
import { ComponentType } from "react";

const registerMantine = (name: string, moduleName: string) => {
  register(
    name,
    React.lazy(() =>
      import("@mantine/core").then((module) => ({
        default: module[moduleName] as ComponentType<any>,
      }))
    ),
  );
};

// registerMantine("common-container", "Container");
// registerMantine("common-text", "Text");
// registerMantine("common-button", "Button");
// registerMantine("common-image", "Image");
// registerMantine("common-card", "Card");
// registerMantine("common-card-section", "Card.Section");
// registerMantine("common-group", "Group");

register(
  "common-card",
  React.lazy(() =>
    import("@mantine/core").then((module) => ({ default: module.Card }))
  ),
);
register(
  "common-card-section",
  React.lazy(() =>
    import("@mantine/core").then((module) => ({ default: module.Card.Section }))
  ),
);
register(
  "common-image",
  React.lazy(() =>
    import("@mantine/core").then((module) => ({ default: module.Image }))
  ),
);

register(
  "common-group",
  React.lazy(() =>
    import("@mantine/core").then((module) => ({ default: module.Group }))
  ),
);

register(
  "common-button",
  React.lazy(() =>
    import("@mantine/core").then((module) => ({ default: module.Button }))
  ),
);

register(
  "common-text",
  React.lazy(() =>
    import("@mantine/core").then((module) => ({ default: module.Text }))
  ),
);

register(
  "common-container",
  React.lazy(() =>
    import("@mantine/core").then((module) => ({ default: module.Container }))
  ),
);

register(
  "common-badge",
  React.lazy(() =>
    import("@mantine/core").then((module) => ({ default: module.Badge }))
  ),
);

register(
  "module-header-search",
  React.lazy(() => import("../components/HeaderSearch")),
);

register(
  "module-hero",
  React.lazy(() => import("../components/Hero")),
);

register(
  "module-footer",
  React.lazy(() => import("../components/Footer")),
);
