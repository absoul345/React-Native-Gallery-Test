import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

import { TGallery, TPhotoSize } from '../../typings';

interface IProp extends TGallery {
  onPress: (full: string) => void;
}

export const RenderPropLayout: React.FC<IProp> = ({ title, urls, name, onPress }) => {
  const { thumb, full } = urls as TPhotoSize;

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => onPress(full)}>
        <Image source={{ uri: thumb }} style={styles.image} />
      </TouchableOpacity>
      <Text style={{ ...styles.text, marginBottom: moderateScale(5) }}>Title: {title}</Text>
      <Text style={styles.text}>Author: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { flexDirection: 'column', width: moderateScale(150) },
  image: { height: verticalScale(120), resizeMode: 'cover', marginBottom: moderateScale(5) },
  text: { color: 'black', fontSize: 14 },
});
