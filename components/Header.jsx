import { View, Text } from 'react-native'
import React from 'react'
import Icon_FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon_MCI from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 15 }}>
            <Text style={{ color: 'white', fontSize: 23 , fontFamily:'BeautifulPeoplePersonalUse-dE0g' }}>Instagram</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon_FontAwesome name="heart-o" size={24} color="white" style={{ marginRight: 15 }} />
                <Icon_MCI name="facebook-messenger" size={28} color="white" />
            </View>
        </View>
    )
}

export default Header