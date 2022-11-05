import React, { useState } from 'react';
import {View, StyleSheet,Image, ScrollView, Text, Modal, Button, TouchableHighlight} from 'react-native';
const App = () =>{
    const[modalVisibleplaya, setModalVisibleplaya] = useState(false);
    const[modalVisiblepupusas, setModalVisiblepupusas] = useState(false);
    const[modelVisiblesanandres, setModalVisiblesanandres] = useState(false);
 return(
 <>
 <ScrollView>
 <Modal transparent={true} animationType="slide" visible={modalVisibleplaya} onRequestClose={()=>{
    alert('Modal has been closed.')
 }}>
    <View style={styles.vistaModal}>
        <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Ir a la playa</Text>
            <Text  style={styles.textoContenido}>El Salvador cuenta con hermosa playas a nivel de Centroamérica</Text>
            <Button title='Cerrar' onPress={()=>{ setModalVisibleplaya(!modalVisibleplaya)}}></Button>
        </View>
    </View>
 </Modal>
 <Modal transparent={true} animationType="slide" visible={modalVisiblepupusas} onRequestClose={()=>{
    alert('Modal has been closed.')
 }}>
    <View style={styles.vistaModal}>
        <View style={styles.Modal}>
            <Text style={styles.subtitulo}>El Salvador y sus pupusas</Text>
            <Text style={styles.textoContenido}>El Salvador cuenta con su platillo principal la pupusas, con variedades de rellenos, como los siguientes: Queso, Frijol con Queso, Chicharrón,
            Camarón, Ajo, Pollo, etc.</Text>
            <Button title='Cerrar' onPress={()=>{ setModalVisiblepupusas(!modalVisiblepupusas)}}></Button>
        </View>
    </View>
 </Modal>
 <Modal transparent={true} animationType="slide" visible={modelVisiblesanandres} onRequestClose={()=>{
    alert('Modal has been closed.')
 }}>
    <View style={styles.vistaModal}>
        <View style={styles.Modal}>
            <Text style={styles.subtitulo}>El Salvador y el turísmo</Text>
            <Text style={styles.textoContenido}>El Salvador y San Andres</Text>
            <Button title='Cerrar' onPress={()=>{ setModalVisiblesanandres(!modelVisiblesanandres)}}></Button>
        </View>
    </View>
 </Modal>
 <View style={{flexDirection:'row'}} >
 <Image
 style={styles.banner}
 source={require('./src/img/bg.jpg')} />
 </View>
<View style={styles.contenedor}>
<Text style={styles.titulo}> Que hacer en El Salvador</Text>
    <ScrollView horizontal>
    <View>
    <TouchableHighlight onPress={()=>{setModalVisibleplaya(!modalVisibleplaya)}}>
    <Image
            style={styles.ciudad}
            source={require('./src/img/a3.jpg')}
        />
    </TouchableHighlight>
    </View>
    <View>
        <Image
            style={styles.ciudad}
            source={require('./src/img/a2.jpg')}
        />
    </View>
    <View>
        <Image
            style={styles.ciudad}
            source={require('./src/img/a1.jpg')}
        />
    </View>
    <View>
        <Image
            style={styles.ciudad}
            source={require('./src/img/a4.jpg')}
        />
    </View>
    <View>
        <Image
            style={styles.ciudad}
            source={require('./src/img/a5.jpg')}
        />
    </View>
    </ScrollView>

    <Text style={styles.titulo}>Platillos Salvadoreños</Text>
    <View>
    <View>
    <TouchableHighlight onPress={()=>{setModalVisiblepupusas(!modalVisiblepupusas)}}>
    <Image
            style={styles.mejores}
            source={require('./src/img/c1.jpg')}
        />
    </TouchableHighlight>

    </View>
    <View>
        <Image
            style={styles.mejores}
            source={require('./src/img/c2.jpg')}
        />
    </View>
    <View>
        <Image
            style={styles.mejores}
            source={require('./src/img/c3.jpg')}
        />
    </View>

    </View>

    <Text style={styles.titulo}>Rutas Turísticas</Text>
    <View style={styles.listado}>
    <View style={styles.listaItem}>
    <TouchableHighlight onPress={()=>{setModalVisiblesanandres(!modelVisiblesanandres)}}>
    <Image
            style={styles.mejores}
            source={require('./src/img/r2.jpg')}
        />
    </TouchableHighlight>

    </View>
    <View style={styles.listaItem}>
        <Image
            style={styles.mejores}
            source={require('./src/img/r1.png')}
        />
    </View>
    <View style={styles.listaItem}>
        <Image
            style={styles.mejores}
            source={require('./src/img/r3.jpg')}
        />
    </View>
    <View style={styles.listaItem}>
        <Image
            style={styles.mejores}
            source={require('./src/img/r4.jpg')}
        />
    </View>
    </View>
</View>
</ScrollView>
</>
 );
};
const styles = StyleSheet.create({
banner:{
 height:250,
 flex:1
},
vistaModal:{
    backgroundColor:'#000000aa',
    flex:1,
},
textoContenido:{
    marginVertical:10,
    justifyContent:'center',
},
Modal:{
    backgroundColor:'#fff',
    margin:50,
    padding:40,
    borderRadius:10,
    flex:1,
},
subtitulo:{
    fontWeight:'bold',
    fontSize:14,
    justifyContent:'center',
    marginVertical:10
},
listaItem:{
flexBasis:'49%'
},
listado:{
flexDirection:'row',
flexWrap:'wrap',
justifyContent:'space-between'
},
mejores:{
width:'100%',
height:200,
marginVertical:5
},
titulo:{
fontWeight:'bold',
fontSize:24,
marginVertical:10
},
contenedor:{
marginHorizontal:10
},
ciudad:{
    width:250,
    height:300,
    marginRight:10
}
});
export default App;