import React from 'react';

import type {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';

type SomeProps = PropsWithChildren<{
  title: string;
}>;

// props with childern
export function PropsWC({children, title}: SomeProps): React.JSX.Element {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{children}</Text>
    </View>
  );
}
