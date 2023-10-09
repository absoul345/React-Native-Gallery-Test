import Config from 'react-native-config';
import axios from 'axios';

import { COLLECTION_PATH, UNSPLASH_BASE_URL } from '../../constants';

import { TGallery } from '../../typings';
import { TParamsGalleryCollection } from './services.types';

axios.defaults.baseURL = UNSPLASH_BASE_URL;

const instance = axios.create({
  baseURL: UNSPLASH_BASE_URL,
  timeout: 1000,
  headers: { Authorization: `Client-ID ${Config.ACCESS_KEY_UNSPLASH}` },
});

export const getGalleryCollection = async ({ page, per_page }: TParamsGalleryCollection) => {
  const response = await instance.get<TGallery[]>(`${COLLECTION_PATH}?page=${page}&per_page${per_page}`);

  return response;
};
