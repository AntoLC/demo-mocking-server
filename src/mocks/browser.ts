import { setupWorker } from "msw";
import { handlersIMDB } from "./handlers";
// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlersIMDB.concat([]));
