import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar, Button } from "react-native";
import Colors from './src/utils/Colors';
import Form from './src/components/Form';
import Footer from "./src/components/Footer";
import Result from "./src/components/Results";

export default function App(){
  const [name, setName] = useState(null);
  const [sneto, setSN] = useState(null);
  const [total, setTotal] = useState(null);
 const [errorMessage, setErrorMessage] = useState('');

 useEffect(() => {
  if (name && sneto) calculate();
  else reset();
  }, [name,sneto]);
  const calculate = () => {
  reset();
  if (!name) {
    setErrorMessage('Debes ingresar su nombre');
    } else if (!sneto) {
    setErrorMessage('Debes ingresar tu salario neto');
    } else {
    const isss = sneto * 0.03;
    const afp = sneto * 0.04;
    const renta = sneto * 0.05;
    const desc = isss + afp + renta;
    setTotal({
    isssDesc: isss.toFixed(2).replace('.', ','),
    afpDesc: afp.toFixed(2).replace('.', ','),
    rentaDesc: renta.toFixed(2).replace('.', ','),
    totalDesc: desc.toFixed(2).replace('.', ','),
    totalPayable: (sneto - desc).toFixed(2).replace('.', ','),
    });
    }
    };
    const reset = () => {
    setErrorMessage('');
    setTotal(null);
    };
return(
 <>
   <StatusBar barStyle="light-content" />
 <SafeAreaView style={styles.safeArea}>
 <View style={styles.background} />
 <Text style={styles.titleApp}>Calculadora de Salario Neto</Text>
     <Form 
      setName={setName}
      setSN={setSN}
    />
 </SafeAreaView>
<Result 
  name={name}
  sneto={sneto}
  total={total}
  errorMessage={errorMessage}
/>

<Footer calculate={calculate} />
 </>
);
}

const styles = StyleSheet.create({
  safeArea: {
  height: 290,
  alignItems: 'center',
  flexDirection:'column'
  },
  background: {
  backgroundColor: Colors.PRIMARY_COLOR,
  height: 265,
  width: '100%',
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  position: 'absolute',
  zIndex: -1,
  },
  titleApp: {
  fontSize: 25,
  fontWeight: 'bold',
  color: '#fff',
  marginTop: 15,
  },
 });
