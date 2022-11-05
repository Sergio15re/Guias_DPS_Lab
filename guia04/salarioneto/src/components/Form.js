import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import Colors from '../utils/Colors';


export default function Form(props) {
    const {setName, setSN} = props;
    return (
    <View style={styles.viewForm}>
    <View style={styles.viewInputs}>
    <TextInput
    placeholder="Nombre"
    keyboardType="default"
    style={styles.input}
    onChange={(e) => setName(e.nativeEvent.text)}
    />
    <TextInput
    placeholder="Salario Base"
    keyboardType="numeric"
    style={[styles.input, styles.inputPercentage]}
    onChange={(e) => setSN(e.nativeEvent.text)}
    />
    </View>
    
 </View>
 );
}

const styles = StyleSheet.create({
    viewForm: {
    position: 'absolute',
    bottom: 0,
    width: '85%',
    paddingHorizontal: 50,
    backgroundColor: Colors.PRIMARY_COLOR_DARk,
    borderRadius: 30,
    height: 180,
    justifyContent: 'center',
    margin:15,
    },
    viewInputs: {
    flexDirection:'column'
    },
    input: {
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.PRIMARY_COLOR,
    borderRadius: 5,
    width: '100%',
    marginRight: 5,
    marginBottom: 10,
    color: '#000',
    paddingHorizontal: 20,
    },
    inputPercentage: {
    width: '100%',
    },
   });