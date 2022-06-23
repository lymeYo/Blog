import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import thunkMiddleware from "redux-thunk";
import postsReducer from "./reducers/posts/postsReducers";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
   posts: postsReducer,
})

const composeEnhancer = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunkMiddleware, sagaMiddleware)))

sagaMiddleware.run(rootSaga)

export default store