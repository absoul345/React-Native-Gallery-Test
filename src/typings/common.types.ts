export type TGallery = {
  id?: string | null;
  title?: string | null;
  name?: string | null;
  urls?: TPhotoSize | null;
};

export type TPhotoSize = { thumb: string; full: string };
