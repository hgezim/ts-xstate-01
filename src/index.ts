import { createMachine, interpret } from "xstate";
import "./styles.css";
import { anotherMachine } from "./anotherMachine";

document.getElementById("app").innerHTML = `
<h1>XState TypeScript Example</h1>
<div>
  Open the <strong>Console</strong> to view the machine output.
</div>
`;

interface ToggleContext {
  count: number;
}

type ToggleEvent = {
  type: "TOGGLE";
};

// Edit your machine(s) here
const machine = createMachine({
  id: "machine",
  initial: "inactive",
  tsTypes: {} as import("./index.typegen").Typegen0,
  context: {
    count: 0
  },
  states: {
    inactive: {
      on: { TOGGLE: "active" }
    },
    active: {
      on: { TOGGLE: "inactive" }
    },
    authenticated: {
      // ...
      states: {
      generatingImage: {
        invoke: {
          id: "anotherMachine",
          src: anotherMachine,
          data: {
            finalResultSentToApi: false,
            retries: 0,
            error: undefined,
          },
        },
      },
    },
  }
}
});

// Edit your service(s) here
const service = interpret(machine).onTransition((state) => {
  console.log(state.value);
});

service.start();

service.send("TOGGLE");
service.send("TOGGLE");
