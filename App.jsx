import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import LinearGradient from "react-native-linear-gradient"
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_MCI from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_Octicons from 'react-native-vector-icons/Octicons';
import Icon_FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

export default function App() {
  return (
    <View style={{ backgroundColor: 'black', flex:1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 15 }}>
        <Text style={{ color: 'white', fontSize: 23 }}>Instagram</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon_FontAwesome name="heart-o" size={24} color="white" style={{ marginRight: 15 }} />
          <Icon_MCI name="facebook-messenger" size={28} color="white" />
        </View>
      </View>
     <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
     <View style={{alignItems:'center'}}>
     <LinearGradient
      colors={['#F09433', '#E6683C', '#DC2743', '#CC2366', '#BC1888']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBorder}
    >
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={{ width: 70, height: 70, margin:-32, borderRadius:50, padding:17, borderWidth:2 }}
      />
      </LinearGradient>
      <Text style={{color:'white',fontSize:12}}>Your Story</Text>
     </View>
     <View style={{alignItems:'center'}}>
     <LinearGradient
      colors={['#F09433', '#E6683C', '#DC2743', '#CC2366', '#BC1888']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBorder}
    >
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={{ width: 70, height: 70, margin:-32, borderRadius:50, padding:17, borderWidth:2 }}
      />
      </LinearGradient>
      <Text style={{color:'white',fontSize:12}}>Piyush</Text>
     </View>
     <View style={{alignItems:'center'}}>
     <LinearGradient
      colors={['#F09433', '#E6683C', '#DC2743', '#CC2366', '#BC1888']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBorder}
    >
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={{ width: 70, height: 70, margin:-32, borderRadius:50, padding:17, borderWidth:2 }}
      />
      </LinearGradient>
      <Text style={{color:'white',fontSize:12}}>Piyush</Text>
     </View>
     <View style={{alignItems:'center'}}>
     <LinearGradient
      colors={['#F09433', '#E6683C', '#DC2743', '#CC2366', '#BC1888']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBorder}
    >
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={{ width: 70, height: 70, margin:-32, borderRadius:50, padding:17, borderWidth:2 }}
      />
      </LinearGradient>
      <Text style={{color:'white',fontSize:12}}>Piyush</Text>
     </View>
     <View style={{alignItems:'center'}}>
     <LinearGradient
      colors={['#F09433', '#E6683C', '#DC2743', '#CC2366', '#BC1888']}
      start={{ x: 0, y: 1 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradientBorder}
    >
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={{ width: 70, height: 70, margin:-32, borderRadius:50, padding:17, borderWidth:2 }}
      />
      </LinearGradient>
      <Text style={{color:'white',fontSize:12}}>Piyush</Text>
     </View>
     </ScrollView>
     <View style={{flex:19}}></View>
     <View style={{flexDirection:'row',justifyContent:'space-between',alignItems: 'center',paddingVertical:23,paddingHorizontal:23}}>
      <Icon_Entypo name="home" size={28} color="white" />
      <Icon_FontAwesome name="search" size={28} color="white" />
      <Icon_Octicons name="diff-added" size={28} color="white" />
      <Icon_FontAwesome6 name="clapperboard" size={28} color="white" />
      <Image
        source={{ uri: 'https://picsum.photos/200' }}
        style={{ width: 35, height: 35, borderRadius:50, padding:17, borderWidth:2 }}
      />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gradientBorder: {
    padding:34, // Adjust to control border thickness
    borderRadius: 50, // Ensure border follows rounded corners
    width:75,
    height:75,
    marginHorizontal:8
  },
});
