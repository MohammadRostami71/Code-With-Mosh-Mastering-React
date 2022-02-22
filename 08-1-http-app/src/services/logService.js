import * as Sentry from "@sentry/react";
import {BrowserTracing} from "@sentry/tracing";
import Raven from "raven-js";

function init() {
    Sentry.init({
        dsn: "https://1baaf18d834f4188911c35a9544161c9@o1150902.ingest.sentry.io/6225816",
        integrations: [new BrowserTracing()],

        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
}

function log(error) {
    Raven.captureException(error)
}

export default {
    init,
    log
};