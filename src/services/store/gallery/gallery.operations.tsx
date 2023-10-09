import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { optimizeCollectionObjects } from './gallery.helpers';

import { getGalleryCollection } from '../services.api';

import { TGallery } from '../../../typings';
import { KnownError, TParamsGalleryCollection } from '../services.types';

export const fetchGalleryCollection = createAsyncThunk<
  TGallery[],
  TParamsGalleryCollection,
  { rejectValue: KnownError }
>('gallery/fetchGalleryCollection', async (galleryParams, { rejectWithValue }) => {
  try {
    const response = await getGalleryCollection(galleryParams);

    const opimizedCollection = optimizeCollectionObjects(response.data);

    return opimizedCollection;
  } catch (err) {
    const error: AxiosError<KnownError> = err as any;
    if (!error.response) {
      throw err;
    }
    return rejectWithValue(error.response.data);
  }
});
