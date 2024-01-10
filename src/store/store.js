import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import PostsReducer from './selectors/reducers/PostsReducer';
import thunk from 'redux-thunk';
import { AuthReducer } from './selectors/reducers/AuthReducer';
import todoReducers from './selectors/reducers/Reducers';
import { UserReducer } from './selectors/reducers/UserReducer';
import { SocketReducer } from './selectors/reducers/socket-reducer';
import { MenuCategoryReducer, MenuReducer } from './selectors/reducers/MenuCategoryReducer';
import { CountryReducer } from './selectors/reducers/CountryReducer';
import { RestaurantReducer } from './selectors/reducers/RestaurantReducer';
//import { reducer as reduxFormReducer } from 'redux-form';
const middleware = applyMiddleware(thunk);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
    posts: PostsReducer,
    auth: AuthReducer,
		todoReducers,
    user: UserReducer,
    menuCategory: MenuCategoryReducer,
    menu: MenuReducer,
    country: CountryReducer,
    restaurant: RestaurantReducer,
    socket: SocketReducer
	//form: reduxFormReducer,	
	
});

//const store = createStore(rootReducers);

export const store = createStore(reducers, composeEnhancers(middleware));
