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
        title:'Gato Siames',
        origen:'Estados Unidos',
        src:require('../images/siames.jpg'),
    },
    {
        id:'2',
        title:'Gato Persa',
        origen:'Iran',
        src:require('../images/Persa.jpg'),
    },
    {
        id:'3',
        title:'Gato kohana',
        origen:'Estados Unidos',
        src:require('../images/kohana.jpg'),
    },
    {
        id:'4',
        title:'Gato de Bengala',
        origen:'Estados Unidos',
        src:require('../images/bengali.jpg'),
    },
    {
        id:'5',
        title:'Fold Escocés',
        origen:'Asia',
        src:require('../images/ceilan.jpg'),
    }
];
export default function Cats()
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