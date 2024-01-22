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
import { CustomerReducer } from './selectors/reducers/CustomerReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
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
    socket: SocketReducer,
    customer: CustomerReducer
	//form: reduxFormReducer,	
	
});

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['shopReducer'],
  //   whitelist: ['authReducer'],
};


const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
