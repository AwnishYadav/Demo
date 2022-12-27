import { View, Text,TouchableOpacity, Image, Dimensions ,ScrollView} from 'react-native'
import { useContext, React,useEffect,useState } from 'react'
import { NewsContext } from './Context';
import YoutubePlayer from 'react-native-youtube-iframe';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

export default function Home({navigation}) {
    const {response,text,setText,setKey,key} = useContext(NewsContext)
    const storeData = async () => { 
     await AsyncStorage.getItem('contacts')
      .then((contacts) => {
        const c = contacts ? JSON.parse(contacts) : [];
        c.push(text);
        AsyncStorage.setItem('contacts', JSON.stringify(c));
    });
  }
    const renderItem = ({ item }) => {
      return (
        <YoutubePlayer
        height={250}
        width={400}
        videoId={item.id.videoId}
        play={false}
        volume={50}
        playbackRate={1}
        />
      );
    };
  return (
    <View style={{backgroundColor:'#dadada'}}>
    <View style={{ flexDirection: 'row',marginBottom:10 }}>
        <View style={{flex: 1,flexDirection:'row', padding:20}}>
        <TextInput
        style={{borderWidth:1,height:40,width:240, alignItem:'center',paddingLeft:10}}
        onChangeText={text => setText(text)}
        value={text}
        placeholder="Enter User Name"
      />  
        <TouchableOpacity onPress={() => {setKey(text);storeData(text)}} style={{height:40,backgroundColor:'#567896',justifyContent:'center',alignItem:'center',marginLeft:20,borderRadius:5,}}>
            <Text style={{alignItem:'center',fontWeight: 'bold',fontSize: 18,paddingHorizontal:20}}>Search</Text>
        </TouchableOpacity> 
        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <Image style={{width:30,height:30}}
                source={require('../Images/right_arrow.png')} />
        </TouchableOpacity>     */}
    </View>
    <FlatList
    data={response}
    renderItem={renderItem}
    keyExtractor={(item) => item.id.videoId}
    
    />
    </View>
  )
}