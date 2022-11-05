import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image} from 'react-native';

const DATA = [
  {
  id: '1',
  title: 'Toyota',
  src:require('../cars/assets/toyota.jpg'),
  },
  {
  id: '2',
  title: 'Mazda',
  src:require('../cars/assets/mazda.jpg'),
  },
  {
  id: '3',
  title: 'Mitsubishi',

  src:require('../cars/assets/mitsubishi.jpeg'),
  },
  ];

  const Item = ({ title, img }) => (
    <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Image 
      style={styles.img}
      source = {img}
    />
    </View>
    );
   
    const textsaludo = () => {
    const renderItem = ({ item }) => (
    <Item title={item.title} img={item.src} />
    );
   
    return (
    <SafeAreaView style={styles.container}>
    <FlatList
    data={DATA}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    />
    </SafeAreaView>
    );
    }

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    padding: 45,
    marginTop: StatusBar.currentHeight || 0,
    },
    item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    alignItems:'center',
    },
    title: {
    fontSize: 32,
    },
    img:{
      width:200,
      height:125,
      borderWidth:2,
      borderColor:'#d35647',
      margin:8,
    },
    });    
export default textsaludo;
