import { applyMiddleware, combineReducers, compose,createStore,} from 'redux';
import PostsReducer from './selectors/reducers/PostsReducer';
import thunk from 'redux-thunk';
import { AuthReducer } from './selectors/reducers/AuthReducer';
import todoReducers from './selectors/reducers/Reducers';
import { UserReducer } from './selectors/reducers/UserReducer';
import { MenuCategoryReducer } from './selectors/reducers/MenuCategoryReducer';
import { SocketReducer } from './selectors/reducers/socket-reducer';
//import { reducer as reduxFormReducer } from 'redux-form';
const middleware = applyMiddleware(thunk);

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    posts: PostsReducer,
    auth: AuthReducer,
		todoReducers,
    user: UserReducer,
    menu: MenuCategoryReducer,
    socket: SocketReducer
	//form: reduxFormReducer,	
	
});

//const store = createStore(rootReducers);

export const store = createStore(reducers,  composeEnhancers(middleware));
