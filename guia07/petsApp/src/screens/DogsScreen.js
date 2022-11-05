import React from "react";
import { View, Text, FlatList, ScrollView, Image } from "react-native";
import globalStyles from "../styles/GlobalStyle";
const Item = ({ title, origen, img }) => (
    <View style={globalStyles.Subcontainer} >
      <View style={globalStyles.ImageContainer}>
      <Image style={globalStyles.Imgs} source={img}/>
      </View>
      <View style={globalStyles.TextContaner}>
      <Text style={globalStyles.titulo} >{title}</Text>
      <Text>{origen}</Text>
      </View>
    </View>
  );
  const DATA = [
    {
        id:'1',
        title:'Schnauzer miniatura',
        origen:'Alemania',
        src:require('../images/Schnauzes.jpg'),
    },
    {
        id:'2',
        title:'Cocker spaniel inglés',
        origen:'Austria',
        src:require('../images/cocker.jpg'),
    },
    {
        id:'3',
        title:'Pastor Alemán',
        origen:'Alemania',
        src:require('../images/Aleman.jpg'),
    },
    {
        id:'4',
        title:'Beagle',
        origen:'Reino Unido',
        src:require('../images/Beagle.jpg'),
    },
    {
        id:'5',
        title:'American Buldog',
        origen:'Estados Unidos',
        src:require('../images/Buldog.jpg'),
    }
];
export default function Dogs()
{
    const renderItem = ({ item }) => (
        <Item title={item.title} origen={item.origen} img={item.src} />
      );
    
        return(
          <View style={globalStyles.contenedor}>
    <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
          </View>  
        );
};