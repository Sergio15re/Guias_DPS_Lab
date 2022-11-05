import React,{useState, useEffect} from "react";
import { View, Text, StyleSheet, Alert, Image, FlatList } from "react-native";
import Formulario from "./components/Formulario";
import Pais from "./components/Pais";
// const IMS = [{
//   id:'sv',
//   src:'https://countriesapp-guide08.000webhostapp.com/images/sv.png'
// }]

export default function App() {
  const [busqueda, guardarbusqueda] = useState({
  pais: '',
  });

  // const srcFound = IMS.filter(item => item.id === busqueda)

  const [consultar, guardarconsultar] = useState(false);
  const [resultado, guardarresultado] = useState({});
  useEffect(() => {
  const { pais } = busqueda;
  const consultarPais = async () => {
  if (consultar) {
  const url =
  `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
  try {
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  guardarresultado(resultado)
  guardarconsultar(false);
  } catch (error) {
  mostrarAlerta();
  }
  }
  };

  consultarPais();
  },[consultar]);
  const mostrarAlerta = () => {
  Alert.alert('Error', 'No hay resultado intenta con otra ciudad o país'),
  [{ Text: 'Ok' }];
  };
  return (
  <View style={styles.app}>
  <View style={styles.contenido}>
  <Formulario
  busqueda={busqueda}
  guardarbusqueda={guardarbusqueda}
  guardarconsultar={guardarconsultar}
/>
<Pais resultado={resultado}
// src={JSON.stringify(srcFound)}
busqueda={busqueda}
 />

</View>
</View>
);
}

const styles = StyleSheet.create({
  app: {
  flex: 1,
  backgroundColor: '#2a9d8f',
  justifyContent: 'center',
  },
  contenido: {
  margin: '2.5%',
  },
  });
  