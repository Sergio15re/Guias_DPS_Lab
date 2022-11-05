import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const DATA = [
  {
  id: '1',
  title: 'Elote Loco',
  description: 'Se cocinan los elotes en agua hasta que los granos estén blandos; se les debe insertar un palillo a lo largo de la mazorca para sostenerla fácilmente. Al estar listos, se bañan con salsa mayonesa, se les agrega un poco de mostaza, unas líneas de salsa de tomate y finalmente, otras de salsa negra. Para culminar, el elote se espolvorea con queso rallado.',
  src:require('../comidas-tipicas-sv/assets/eloteloco.jpg'),
  },
  {
  id: '2',
  title: 'Pupusas',
  description: 'Son como tortillas parecidas a las gorditas mexicanas pero más gruesas y mas ricas, elaboradas tanto con maíz o arroz, ingredientes con los que se prepara la masa. Una vez cocidas, se abren y se rellenan con frijoles, chicharrón molido, queso, camarones o cualquier otro componente disponible',
  src:require('../comidas-tipicas-sv/assets/pupusas.webp'),
  },
  {
  id: '3',
  title: 'Riguas',
  description: 'Son tortas fritas hechas con masa de elotes condimentada y envueltas en hojas de elote o plátano. Se comen con queso y crema.',
  src:require('../comidas-tipicas-sv/assets/riguas.jpg'),
  },
  {
  id: '4',
  title: 'Atol de Elote',
  description: 'Se preparan a base de elotes, semillas de marañón, maíz tostado y piña. El más famoso de todos es el atol shuco, uno elaborado a partir de maíz fermentado, agua y alhuashte, polvo obtenido al moler las semillas de ayote',
  src:require('../comidas-tipicas-sv/assets/atolelote.jpg'),
  },
  {
  id:'5',
  title: 'Sopa  de Pata',
  description: 'Sopa cuyo ingrediente base son las extremidades de la vaca, a las que se les agregan verduras como plátano, repollo, yuca, pipianes, ejotes y güisquil. Al servirla se le añaden chiles jalapeños en pequeños trozos, cebolla y cilantro.  Unas gotas de limón les darán un sabor más exótico.',
  src:require('../comidas-tipicas-sv/assets/sopata.jpg'),
},
{
  id:'6',
  title:'Pasteles Fritos',
  description:'La base de los pasteles fritos es una masa preparada con maíz a la que se le colocan condimentos y achiote. Su forma es de media luna y se rellenan con carne, pollo o vegetales guisados. Se fríen en abundante aceite y se sirven acompañados de salsa de tomate natural y encurtido',
  src: require('../comidas-tipicas-sv/assets/pasteles.jpg'),
}
,{
  id:'7',
  title:'Empanadas',
  description:'Las empanadas se elaboran con una masa hecha a partir de un puré de plátanos maduros, con la que se hacen tortillas redondeadas y rellenas con frijoles molidos, que luego se fríen en abundante aceite. Al estar bien doraditas se espolvorean con azúcar o se comen como salen del sartén.',
  src: require('../comidas-tipicas-sv/assets/empanadas.jpg')
},
  ];

  const Item = ({title, description, img})=>(
    <Card style={styles.container}>
    <Card.Content style={styles.fila} >
    <View style={styles.containerImg}>
    <Card.Cover style={styles.image} source={img} />
    </View>
    <View >
    <Title style={styles.title} >{title} </Title>
    <Paragraph style={styles.contenido} >{description}
    </Paragraph>
    </View>
    </Card.Content>
    </Card>
  );

const  App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} description={item.description} img={item.src} />
    );
  return (
    <SafeAreaView style={styles.containerg}>
    <Text style={styles.titulo}>Comidas Típicas SV</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item=>item.id}
      />
      <View style={styles.footer}>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerg: {
    flex: 1,
    alignItems:'center',
    textAlign:'center',
    padding: 8,
    marginTop: StatusBar.currentHeight || 0,
    flexDirection:'column',
    backgroundColor:'#394DDD',
    },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical:5,
    borderRadius:20
  },
  fila:{
    flex:1,
    flexDirection:'row',
  },
  image:{
    marginHorizontal:5,
    width:80,
    height:85,
    borderRadius:5,
  },
  contenido:{
    width:220,
    fontSize:8.5,
    textAlign:'justify',
    fontWeight: 'bold',
    fontStyle:'italic'
  },
   title:{
    fontSize:16,
    fontWeight:'bold',
  },
  containerImg:{
    alignItems:'center',
    marginVertical:9,
    paddingVertical:30,
  },
  titulo:{
    fontSize:25,
    padding:20,
    fontWeight:'bold',
    color:'#FDFDFD',
    marginVertical:10,
  },
  footer:{
    color:'#FDFDFD',
  }
});

export default App;
