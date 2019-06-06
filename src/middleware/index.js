import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { applyMiddleware } from "redux";

export default applyMiddleware(thunk, createLogger({ collapsed: true }));
