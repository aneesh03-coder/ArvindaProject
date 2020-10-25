import { applyMiddleware, configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import userSaga from '../sagas/userSaga';
import courseReducer from '../reducers/courseSlice';
import commentReducer from '../reducers/commentSlice';

import createSagaMiddleware from 'redux-saga';

 const sagaMiddleware = createSagaMiddleware();
  const store =configureStore({
  reducer: {
    user: userReducer,
    course: courseReducer,
    comments:commentReducer,
  },
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
  
})

userSaga(sagaMiddleware)

export default store;