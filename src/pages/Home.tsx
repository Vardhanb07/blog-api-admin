import { useReducer } from "react";
import Posts from "../components/Posts";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Drafts from "../components/Drafts";
import type { HomePropTypes, stateType, actionType } from "../utils/types";

function reducer(state: stateType, action: actionType): stateType {
  if (action.type === "posts") {
    return {
      showPublished: true,
    };
  }
  return {
    showPublished: false,
  };
}

export default function Home({ setToken }: HomePropTypes) {
  const [state, dispatch] = useReducer(reducer, {
    showPublished: false,
  });

  return (
    <div className="flex flex-col h-screen font-jbmono">
      <Navbar setToken={setToken} />
      <hr />
      <div className="flex-8 flex flex-row">
        <Sidebar dispatch={dispatch} />
        {state.showPublished && <Posts />}
        {!state.showPublished && <Drafts />}
      </div>
    </div>
  );
}
