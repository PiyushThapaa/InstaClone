import { View, Image } from 'react-native'
import React from 'react'
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_Octicons from 'react-native-vector-icons/Octicons';
import Icon_FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Footer = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 23 }}>
        <Icon_Entypo name="home" size={28} color="white" />
        <Icon_FontAwesome name="search" size={28} color="white" />
        <Icon_Octicons name="diff-added" size={28} color="white" />
        <Icon_FontAwesome6 name="clapperboard" size={28} color="white" />
        <Image
          source={{ uri: 'https://picsum.photos/200' }}
          style={{ width: 35, height: 35, borderRadius: 50, padding: 17, borderWidth: 2 }}
        />
      </View>
  )
}

export default Footer