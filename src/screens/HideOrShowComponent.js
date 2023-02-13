import React, {useState} from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';

const HideOrShowComponent = () => {
  const [shouldShow, setShouldShow] = useState(true);

  return (
    <>
      {shouldShow ? (
        <Image
          source={{
            uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
          }}
          style={{width: 250, height: 250}}
        />
      ) : null}
      <Button
        title="Hide/Show Component"
        onPress={() => setShouldShow(!shouldShow)}
      />
    </>
  );
};

export default HideOrShowComponent;
