import React, { useMemo } from 'react';
import Showcase from '@gorhom/showcase-template';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const data = [
  {
    name: 'Basic',
    slug: 'Basic',
  },
  {
    name: 'Modal',
    slug: 'Modal',
  },
  {
    name: 'Popover',
    slug: 'Popover',
  },
];

const RootScreen = () => {
  // hooks
  const { navigate } = useNavigation();
  const safeInsets = useSafeAreaInsets();

  // variables
  const author = useMemo(
    () => ({
      username: 'Bunyamin Mercan',
      url: 'https://github.com/bunyaminmrcn',
    }),
    []
  );

  // callbacks
  const handleOnPress = (slug: string) => navigate(slug);

  // renders
  return (
    <Showcase
      theme="light"
      version="0.2.0"
      name="Portal"
      description={"A simplified portal implementation for ⭕️ React Native ⭕️"}
      author={author}
      data={data}
      safeInsets={safeInsets}
      handleOnPress={handleOnPress}
    />
  );
};

export default RootScreen;
