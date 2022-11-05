import React, {useState, useEffect} from "react";
import { StyleSheet, View, Text, Image, Animated } from 'react-native';
import { Card } from 'react-native-elements';



const Pais = ({ resultado, busqueda }) => {
const [info,setinfo]=useState([]);
const [nombre,setnombre]=useState();
const [capital,setcapital]=useState();
const [region,setregion]=useState();
const [lengua,setlengua]=useState([]);
const[superficie, setSuperficie]=useState([]);
const[unidad, setUnidad]=useState([]);
const {pais}  = busqueda;
useEffect(() => {
setinfo(resultado);
lengua.length =0;
Object.values(info).map(e => {
setnombre(e.nome.abreviado);
setcapital(e.governo.capital.nome);
setregion(e.localizacao.regiao.nome);
setUnidad(e.area.unidade.símbolo);
setSuperficie(e.area.total);

Object.values(e.linguas).map(l=>{
    lengua.push(l.nome)
    })
    }
    );
    });
    return (
    <Card >
    <Card.Title>{nombre}</Card.Title>
    <Card.Divider />
    <View style={{ justifyContent: 'center' }}>
    <Text>Capital: {capital}</Text>
    <Text>Region: {region}</Text>
    <Text>Lengua: {lengua.toString()}</Text>
    <Text>Área de superficie (km2) : { superficie!=''? superficie :''}</Text>
    <Text>Área de superficie (m2) : { superficie!=''? superficie*1000 :''}</Text>
    {/* <Image style={styles.Imgs} source={{uri:src}} /> */}
    <View style={styles.containerImg} >
    <Image 
        style={styles.Imgs}
        source={{uri:`https://countriesapp-guide08.000webhostapp.com/images/${pais}.png`}}
    />
    </View>
    </View>
    </Card>
    );
};
    
export default Pais;
    
const styles= StyleSheet.create({
    Imgs:{
        marginVertical:3,
        width:200,
        height:110
    },
    containerImg:{
        marginTop:4,
        alignContent:'center',
        alignItems:'center'
    },
})