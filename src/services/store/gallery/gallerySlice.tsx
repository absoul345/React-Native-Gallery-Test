import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchGalleryCollection } from './gallery.operations';

import { initialGalleryState } from './gallery.constants';

import { TGallery } from '../../../typings';

export const gallerySlice = createSlice({
  name: 'gallary',
  initialState: initialGalleryState,
  reducers: {},
  extraReducers: builder => {
    ////Get user via asyncThunk
    builder
      .addCase(fetchGalleryCollection.fulfilled, (state, { payload }: PayloadAction<TGallery[]>) => {
        state.gallery = payload;

        if (state.isLoading) {
          state.isLoading = false;
        }
      })
      .addCase(fetchGalleryCollection.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchGalleryCollection.rejected, (state, action) => {
        state.error = action.error.message;

        if (state.isLoading) {
          state.isLoading = false;
        }
      });
  },
});
