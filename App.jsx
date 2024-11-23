import { View, ScrollView, FlatList } from 'react-native';
import React from 'react';
import Header from './components/Header';
import Story from './components/Story';
import Footer from './components/Footer';
import Post from './components/Post';

export default function App() {
  return (
    <View style={{ backgroundColor: 'black', flex: 1 }}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Story name={"Your Story"} uri={'https://picsum.photos/200'} />
          <Story name={"Piyush"} uri={'https://picsum.photos/id/10/200/300'} />
          <Story name={"Ayush"} uri={'https://picsum.photos/id/21/200/300'} />
          <Story name={"Priya"} uri={'https://picsum.photos/id/22/200/300'} />
          <Story name={"Aditya"} uri={'https://picsum.photos/id/25/200/300'} />
          <Story name={"Nehal"} uri={'https://picsum.photos/id/28/200/300'} />
        </ScrollView>
        <View style={{ flex: 2 }}>
          <Post profileUri={'https://picsum.photos/200'} name={"piyushthapaaa"} postUri={'https://picsum.photos/id/22/200/300'} likes={133} comments={23} shares={7} />
          <Post profileUri={'https://picsum.photos/200'} name={"krishnakumarr_12"} postUri={'https://picsum.photos/id/25/200/300'} likes={'3.3k'} comments={264} shares={34} />
          <Post profileUri={'https://picsum.photos/id/10/200/300'} name={"anil.jaiswal"} postUri={'https://picsum.photos/200'} likes={225} comments={23} shares={9} />
          <Post profileUri={'https://picsum.photos/200'} name={"piyushthapaaa"} postUri={'https://picsum.photos/id/28/200/300'} likes={'12K'} comments={239} shares={23} />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

