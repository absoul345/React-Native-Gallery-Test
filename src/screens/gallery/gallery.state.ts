import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAppDispatch, useAppSelector } from '../../services/store';
import { fetchGalleryCollection } from '../../services/store/gallery/gallery.operations';

import { NAV_PATH_NAMES } from '../../constants';

import { TNavPhotoProps } from './gallery.types';

export const useStateGallery = () => {
  const dispatch = useAppDispatch();
  const galleryData = useAppSelector(state => state.galleryPhotos.gallery);
  const { navigate } = useNavigation<TNavPhotoProps>();

  useEffect(() => {
    dispatch(fetchGalleryCollection({ page: 1, per_page: 10 }));
  }, []);

  const onPressImage = (full: string) => {
    navigate(NAV_PATH_NAMES.Photo, { image: full });
  };

  return { galleryData, onPressImage };
};
