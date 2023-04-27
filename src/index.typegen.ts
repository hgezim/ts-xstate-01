// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    delays: never;
    guards: never;
    services: "anotherMachine";
  };
  eventsCausingActions: {};
  eventsCausingDelays: {};
  eventsCausingGuards: {};
  eventsCausingServices: {
    anotherMachine: never;
  };
  matchesStates:
    | "active"
    | "authenticated"
    | "authenticated.generatingImage"
    | "inactive"
    | { authenticated?: "generatingImage" };
  tags: never;
}
