import React from 'react';
import { StyleSheet, View } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

interface LayoutProps {
  children: React.ReactNode;
  withTopMargin?: boolean;
  withBottomMargin?: boolean;
}

export const Layout = ({ children, withTopMargin = false, withBottomMargin = false }: LayoutProps) => {
  const marginTop = withTopMargin ? moderateScale(30) : 0;
  const marginBottom = withBottomMargin ? moderateScale(30) : 0;

  return <View style={{ ...styles.container, marginTop, marginBottom }}>{children}</View>;
};

const styles = StyleSheet.create({
  container: { flex: 1, width: '100%' },
});
