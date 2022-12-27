import { View, Text,TouchableOpacity,Image ,Dimensions} from 'react-native'
import {React,useEffect,useContext,useState} from 'react'
import {PieChart} from "react-native-chart-kit";
import { NewsContext } from './Context';
import axios from 'axios';

export default function Insights({navigation}) {
  const {loading,response} = useContext(NewsContext)
  const [page , setPage] = useState([])
  const [index , setIndex] = useState(false)
  const windowWidth = Dimensions.get('window').width;
  useEffect(()=>{
    if(response.length>0){
    getData();
  }
    },[index])

  useEffect(() => {
      setTimeout(() => {
        setIndex(true);
      }, 1000);
    }, []);

  const getData = async () => {
      for(let i=0;i<5;i++) {
        const arr = page
        setPage(arr)
        const res = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${response[i].id.videoId}&key=AIzaSyAeKi5xDy8EyDOcNDjOGTrzeqjDVeGKgR0`
        )
        if (res.data.items[0].statistics.likeCount){    
          arr.push(res.data.items[0].statistics.likeCount)   
          // setPage(arr1)
        }
      }
  }  
  return (
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('Search')} style={{marginBottom:100}}>
    <Image style={{
        transform: [
          { rotateX: "180deg" },
          { rotateZ: "180deg" }
        ],
        width:30,height:30
      }}
        source={require('../Images/right_arrow.png')} />
    </TouchableOpacity> 
    {page.length>4 ? 
    <PieChart
    data={[
      {
        name: (response[0].snippet.title).split(" ")[0] + " " + (response[0].snippet.title).split(" ")[1],
        population: Number(page[0]),
        color: 'rgba(131, 167, 234, 1)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: (response[1].snippet.title).split(" ")[0] + " " + (response[1].snippet.title).split(" ")[1],
        population: Number(page[1]),
        color: '#F00',
        legendFontColor: '#7F7F7F', 
        legendFontSize: 15,
      },
      {
        name: (response[2].snippet.title).split(" ")[0] + " " + (response[2].snippet.title).split(" ")[1],
        population: Number(page[2]),
        color: '#000',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: (response[3].snippet.title).split(" ")[0] + " " + (response[3].snippet.title).split(" ")[1],
        population: Number(page[3]),
        color: 'rgb(0, 0, 255)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
      {
        name: (response[4].snippet.title).split(" ")[0] + " " + (response[4].snippet.title).split(" ")[1],
        population: Number(page[4]),
        color: 'rgb(176, 0, 255)',
        legendFontColor: '#7F7F7F',
        legendFontSize: 15,
      },
    ]}
    width={windowWidth-10}
    height={200}
    chartConfig={{
      backgroundColor: '#1cc910',
      backgroundGradientFrom: '#eff3ff',
      backgroundGradientTo: '#efefef',
      decimalPlaces: 2,
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 16,
      },
    }}
    style={{
      marginVertical: 8,
      borderRadius: 16,
    }}
    accessor="population"
    backgroundColor="transparent"
    paddingLeft="0"
    absolute //for the absolute number remove if you want percentage
  /> : <PieChart
  data={[
    {
      name: (response[0].snippet.title).split(" ")[0] + " " + (response[0].snippet.title).split(" ")[1],
      population: 76567,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: (response[1].snippet.title).split(" ")[0] + " " + (response[1].snippet.title).split(" ")[1],
      population: 34567,
      color: '#F00',
      legendFontColor: '#7F7F7F', 
      legendFontSize: 15,
    },
    {
      name: (response[2].snippet.title).split(" ")[0] + " " + (response[2].snippet.title).split(" ")[1],
      population: 23456,
      color: '#000',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: (response[3].snippet.title).split(" ")[0] + " " + (response[3].snippet.title).split(" ")[1],
      population: 37897,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: (response[4].snippet.title).split(" ")[0] + " " + (response[4].snippet.title).split(" ")[1],
      population: 17387,
      color: 'rgb(176, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ]}
  width={windowWidth-10}
  height={200}
  chartConfig={{
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
  }}
  style={{
    marginVertical: 8,
    borderRadius: 16,
  }}
  accessor="population"
  backgroundColor="transparent"
  paddingLeft="0"
  absolute //for the absolute number remove if you want percentage
/> }
</View>
  )
}