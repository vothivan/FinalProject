import { logger } from 'ethers';
import {persistStore, persistReducer} from 'redux-persist';
import { applyMiddleware } from 'redux';
import storage from 'redux-persist/es/storage';
import thunk from 'redux-thunk';
import reducers from './reducer';
const persistConfig = {
    key: 'root',
    storage,
}
const rootReduces = persistReducer(persistConfig, reducers)
const configStore = () => {
    return {
        ...createStore(rootReduces, applyMiddleware(thunk, logger)),
    }
}
const store = configStore()
export const persistor =  persistStore(store);
export default store;