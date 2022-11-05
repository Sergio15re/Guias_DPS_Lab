import { RefreshControlBase } from "react-native";
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Colors from "../utils/Colors";

export default function Footer(props) {
    const {calculate} = props;
    return (
    <View style={styles.viewFooter}>
    <TouchableOpacity style={styles.button} onPress={calculate}>
    <Text style={styles.text}>CALCULAR</Text>
    </TouchableOpacity>
    </View>
    );
   }

   const styles = StyleSheet.create({
    viewFooter: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: Colors.PRIMARY_COLOR,
    height: 70,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    },
    button: {
        backgroundColor: Colors.PRIMARY_COLOR_DARk,
        padding: 16,
        borderRadius: 20,
        width: '75%',
        },
        text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#003049',
        textAlign: 'center',
        },
       });