import { createSlice } from '@reduxjs/toolkit';

import { fetchGalleryCollection } from './gallery.operations';

import { initialGalleryState } from './gallery.constants';

const gallerySlice = createSlice({
  name: 'gallary',
  initialState: initialGalleryState,
  reducers: {},
  extraReducers: builder => {
    ////Get user via asyncThunk
    builder
      .addCase(fetchGalleryCollection.fulfilled, (state, { payload }) => {
        state.gallery = payload;

        state.isLoading && (state.isLoading = false);
      })
      .addCase(fetchGalleryCollection.pending, (state, _) => {
        state.isLoading = true;
      })
      .addCase(fetchGalleryCollection.rejected, (state, action) => {
        state.error = action.error.message;

        state.isLoading && (state.isLoading = false);
      });
  },
});

export const galleryReducer = gallerySlice.reducer;
