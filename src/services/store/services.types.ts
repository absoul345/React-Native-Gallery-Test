import { TGalleryState } from './gallery/gallery.types';

export interface TParamsGalleryCollection {
  page: number;
  per_page: number;
}

export type KnownError = {
  message: string;
  description: string;
  code: number | undefined;
};

export type RootState = { galleryPhotos: TGalleryState };
