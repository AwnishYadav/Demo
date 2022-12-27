import { View, Text,TouchableOpacity,Image,FlatList } from 'react-native'
import {React,useContext,useState,useEffect} from 'react'
import AsyncStorage from '@react-native-community/async-storage';
import { NewsContext } from './Context';

export default function SearchHistory({navigation}) {
  const {val} = useContext(NewsContext) 
  const [data, setData] = useState([]);
  useEffect(() => {
    const storeData = async () => { 
      AsyncStorage.getItem('contacts')
      .then((contacts) => {
        const c = contacts ? JSON.parse(contacts) : [];
        setData(c)
    });
  }
  storeData()
  })
  const renderItem = ({ item }) => {
    return (
      item && (
      <View style={{borderTopWidth:1,paddingHorizontal:20,borderColor:'#000',}}>
     <Text>{item}</Text>
     </View>
      )
    )
  };
  return (
    <View>
      <View style={{flexDirection:'row',marginBottom:20}}>
        <View style={{flex:1,padding:10}} >
          <Text style={{fontSize:20}}>Search History</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image style={{width:30,height:30}}
              source={require('../Images/right_arrow.png')} />
        </TouchableOpacity> 
      </View>    
      <FlatList
        data={data}
        renderItem={renderItem}
      />    
    </View>
  )
}