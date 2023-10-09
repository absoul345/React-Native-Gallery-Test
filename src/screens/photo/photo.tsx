import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { Layout } from '../../components/templates';

type TNavParams = { image: string };

export const PhotoScreen = () => {
  const { params } = useRoute();
  const { image } = params as TNavParams;

  return (
    <Layout>
      <Image source={{ uri: image }} style={styles.image} />
    </Layout>
  );
};

const styles = StyleSheet.create({ image: { width: '100%', height: '100%', resizeMode: 'cover' } });
