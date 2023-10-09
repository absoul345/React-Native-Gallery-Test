import { TGallery } from '../../../typings';

export type TGalleryState = {
  gallery: TGallery[] | null;
  isLoading: boolean;
  error: string | null | undefined;
};
