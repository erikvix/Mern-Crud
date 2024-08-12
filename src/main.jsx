import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";
import { initMirage } from "@/utils/mirage";
import netlifyIdentity from "netlify-identity-widget";
import * as Sentry from "@sentry/react";

import "boxicons";
import "./index.css";
netlifyIdentity.init();

initMirage();

Sentry.init({
  dsn: "https://efd77908490027db97f2b5f163457c39@o4507685567463424.ingest.us.sentry.io/4507764216102912",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.browserProfilingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  profilesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
