import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';

const Story = ({name,uri}) => {
  return (
    <View style={{alignItems:'center'}}>
    <LinearGradient
     colors={['#F09433', '#E6683C', '#DC2743', '#CC2366', '#BC1888']}
     start={{ x: 0, y: 1 }}
     end={{ x: 1, y: 0 }}
     style={styles.gradientBorder}
   >
     <Image
       source={{ uri: uri }}
       style={{ width: 70, height: 70, margin:-32, borderRadius:50, padding:17, borderWidth:2 }}
     />
     </LinearGradient>
     <Text style={{color:'white',fontSize:12}}>{name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    gradientBorder: {
      padding:34,
      borderRadius: 50,
      width:75,
      height:75,
      marginHorizontal:8
    },
  });

export default Story