import { createRouter} from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import NotFound from "../src/NotFound";

export const router = createRouter({ 
  routeTree,
   defaultNotFoundComponent: NotFound,
   // Disable built-in scroll restoration
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}