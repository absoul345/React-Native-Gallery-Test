import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import reactotron from '../../../reactron-config';
import { galleryReducer } from './gallery';

import { RootState } from './services.types';

export const store = configureStore({
  reducer: { galleryPhotos: galleryReducer },
  enhancers: [reactotron.createEnhancer!()],
});

export type TStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default { store };
