import { Actor, HttpAgent } from "@dfinity/agent";
import {
  idlFactory as playground_idl,
  canisterId as playground_id,
} from "dfx-generated/playground";
import {
  idlFactory as assistant_idl,
  canisterId as assistant_id,
} from "dfx-generated/assistant";
import {
  idlFactory as blog_idl,
  canisterId as blog_id,
} from "dfx-generated/blog";

// Get environment from Vite env object
const ENV = import.meta.env.MODE;

// //If is prod get the window location at port 8000 otherwise is local
const agentOptions = {
  host:
    ENV === "production"
      ? `${window.location.protocol}${window.location.host}`
      : "http://localhost:8000",
};
// const agentOptions = {
//   host: "http://localhost:8000",
// };

const agent = new HttpAgent(agentOptions);
const playground = Actor.createActor(playground_idl, {
  agent,
  canisterId: playground_id,
});
const assistant = Actor.createActor(assistant_idl, {
  agent,
  canisterId: assistant_id,
});
const blog = Actor.createActor(blog_idl, {
  agent,
  canisterId: blog_id,
});
export { playground, assistant, blog };
