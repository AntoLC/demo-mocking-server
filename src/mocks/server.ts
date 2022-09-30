import { setupServer } from "msw/node";
import { handlersIMDB } from "./handlers";
// This configures a Service Worker with the given request handlers.
export const server = setupServer(...handlersIMDB.concat([]));