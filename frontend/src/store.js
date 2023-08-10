import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userAuthApi } from './services/userAuthApi';
import authReducer from './features/authSlice';
import userReducer from './features/userSlice';
import rootReducer from './reducers'; // Import your rootReducer from the other store

// Combine reducers from both stores
const combinedReducers = {
  [userAuthApi.reducerPath]: userAuthApi.reducer, 
  auth: authReducer, //authSlice
  user: userReducer, //userSlice
  ...rootReducer, // Spread the rootReducer from the other store assuming there is other store
};

// Create the store
export const store = configureStore({
  reducer: combinedReducers,   //reducers is set to combinedReducers
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAuthApi.middleware), //add middleware configuration to default middleware
});

// ensuring pending and completed api requests are managed properly
setupListeners(store.dispatch);
