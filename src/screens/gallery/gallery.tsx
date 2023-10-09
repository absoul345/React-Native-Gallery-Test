import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

import { Layout } from '../../components/templates';
import { RenderPropLayout } from '../../components/templates';
import { useStateGallery } from './gallery.state';

export const GalleryScreen = () => {
  const { galleryData, onPressImage } = useStateGallery();

  return (
    <Layout withBottomMargin>
      <FlatList
        data={galleryData}
        renderItem={({ item }) => (
          <RenderPropLayout title={item.title} urls={item.urls} name={item.name} onPress={onPressImage} />
        )}
        numColumns={2}
        keyExtractor={item => String(item.id)}
        showsHorizontalScrollIndicator={false}
        columnWrapperStyle={styles.columnWrapperStyles}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  columnWrapperStyles: {
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(20),
    marginVertical: moderateScale(10),
  },
});
