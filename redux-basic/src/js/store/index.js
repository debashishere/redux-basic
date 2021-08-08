import { createStore } from "redux";
import rootReducer from "../reducers/index";

const store = createStore(rootReducer);
store.subscribe(() => console.log('Look ma, Redux!!'));

export default store;