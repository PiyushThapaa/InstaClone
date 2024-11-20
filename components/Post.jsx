import { View, Text, Image } from 'react-native'
import React from 'react'
import Icon_Entypo from 'react-native-vector-icons/Entypo';
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_Feather from 'react-native-vector-icons/Feather';

const Post = ({profileUri,name,postUri,likes,comments,shares}) => {
  return (
    <View>
            <View style={{ flexDirection: 'row', padding: 1, justifyContent: 'space-between', alignItems: 'center', marginRight: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 13, paddingHorizontal: 13 }}>
                <Image
                  source={{ uri: profileUri }}
                  style={{ width: 28, height: 28, borderRadius: 50, marginRight: 12 }}
                />
                <Text style={{ color: 'white' }}>{name}</Text>
              </View>
              <Icon_Entypo name="dots-three-vertical" size={16} color="white" />
            </View>
            <Image
              source={{ uri: postUri }}
              style={{ width: 400, height: 400 }}
            />
            <View style={{ flexDirection: 'row', padding: 1, justifyContent: 'space-between', alignItems: 'center', paddingRight: 18 }}>
              <View style={{ flexDirection: 'row' }}>
                <View style={{ flexDirection: 'row', padding: 12 }}>
                  <Icon_FontAwesome name="heart-o" size={22} color="white" style={{ marginRight: 3 }} />
                  <Text style={{ color: 'white' }}>{likes}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 12, paddingRight: 12 }}>
                  <Icon_FontAwesome name="comment-o" size={22} color="white" style={{ marginRight: 3 }} />
                  <Text style={{ color: 'white' }}>{comments}</Text>
                </View>
                <View style={{ flexDirection: 'row', paddingVertical: 12 }}>
                  <Icon_Feather name="send" size={22} color="white" style={{ marginRight: 3 }} />
                  <Text style={{ color: 'white' }}>{shares}</Text>
                </View>
              </View>
              <Icon_FontAwesome name="bookmark-o" size={22} color="white" style={{ marginRight: 3 }} />
            </View>
          </View>
  )
}

export default Post