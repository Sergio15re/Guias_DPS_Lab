import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput, Button, TouchableHighlight, Alert, ScrollView
} from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import shortid from 'shortid';
import Colors from './Colors';
import RNPickerSelect from 'react-native-picker-select';
const Formulario = ({citas, setCitas, guardarMostrarForm, guardarCitasStorage}) => {
//variables para el formulario
 const [cliente, guardarCliente] = useState('');
 const [personas, guardarPersonas] = useState('');
 const [telefono, guardarTelefono] = useState('');
 const [fecha, guardarFecha] = useState('');
 const [hora, guardarHora] = useState('');
//  const [sintomas, guardarSintomas] = useState('');
 const [seccion, setSeccion] = useState('');
 const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
 const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

 const showDatePicker = () => {
 setDatePickerVisibility(true);
 };
 const hideDatePicker = () => {
    setDatePickerVisibility(false);
    };
   
    const confirmarFecha = date => {
    const opciones = { year: 'numeric', month: 'long', day: "2-digit" };
    guardarFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
    };
    // Muestra u oculta el Time Picker
    const showTimePicker = () => {
    setTimePickerVisibility(true);
    };
    const hideTimePicker = () => {
    setTimePickerVisibility(false);
    };
    const confirmarHora = hora => {
    const opciones = { hour: 'numeric', minute: '2-digit', hour12: false};
    guardarHora(hora.toLocaleString('es-ES', opciones));
    hideTimePicker();
    };
    // Crear nueva cita
    const crearNuevaCita = () => {
    // Validar
    if(cliente.trim() === '' ||
    personas.trim() === '' ||
    telefono.trim() === '' ||
    fecha.trim() === '' ||
    hora.trim() === '' ||
    seccion.trim() == '')
    {
    // Falla la validación
    mostrarAlerta();
    return;
    }
    // Crear una nueva cita
    const cita = { cliente, personas, telefono, fecha, hora, seccion };
    cita.id = shortid.generate();
    // console.log(cita);
    // Agregar al state
    const citasNuevo = [...citas, cita];
    setCitas(citasNuevo);
    // Pasar las nuevas citas a storage
    guardarCitasStorage(JSON.stringify(citasNuevo));
    // Ocultar el formulario
    guardarMostrarForm(false);
    // Resetear el formulario
    guardarPersonas('');
    guardarCliente('');
    guardarHora('');
    guardarFecha('');
    guardarTelefono('');
    }
    // Muestra la alerta si falla la validación
    const mostrarAlerta = () => {
    Alert.alert(
    'Error', // Titulo
    'Todos los campos son obligatorios', // mensaje
    [{
    text: 'OK' // Arreglo de botones
    }]
    )
    }
    return (
        <>
        <ScrollView style={styles.formulario}>
        <View>
        <Text style={styles.label}>Cliente:</Text>
        <TextInput
        style={styles.input}
        onChangeText={ texto => guardarCliente(texto) }
        />
        </View>
        <View>
        <Text style={styles.label}>Cantidad de Personas:</Text>
        <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={ texto => guardarPersonas(texto) }
        />
        </View>
        <View>
        <Text style={styles.label}>Teléfono Contacto:</Text>
        <TextInput
        style={styles.input}
        onChangeText={ texto => guardarTelefono(texto) }
        keyboardType='numeric'
        />
        </View>
        <View>
        <Text style={styles.label}>Fecha:</Text>
        <Button title="Seleccionar Fecha" onPress={showDatePicker} />
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
       onConfirm={confirmarFecha}
        onCancel={hideDatePicker}
        locale='es_ES'
       headerTextIOS="Elige la fecha"
       cancelTextIOS="Cancelar"
       confirmTextIOS="Confirmar"
        />
        <Text>{fecha}</Text>
        </View>
 <View>
 <Text style={styles.label}>Hora:</Text>
 <Button title="Seleccionar Hora" onPress={showTimePicker} />
 <DateTimePickerModal
 isVisible={isTimePickerVisible}
 mode="time"
onConfirm={confirmarHora}
 onCancel={hideTimePicker}
 locale='es_ES'
headerTextIOS="Elige una Hora"
cancelTextIOS="Cancelar"
confirmTextIOS="Confirmar"
 />
 <Text>{hora}</Text>
 </View>
 <View>
 {/* <Text style={styles.label}>Síntomas:</Text>
 <TextInput
 multiline
style={styles.input}
 onChangeText={ texto => guardarSintomas(texto) }
 /> */}
  <Text style={styles.label}>Seccion:</Text>
 <RNPickerSelect
style={picketSelectStyles}
onValueChange={(value) => setSeccion(value)}
 placeholder={{
 label: 'Elige tu sección...',
 value: null,
 }}
 items={[
 {label: 'Fumadores', value: 'Fumadores'},
 {label: 'No Fumadores', value: 'No Fumadores'},
 ]}/>
 </View>
 <View>
 <TouchableHighlight onPress={ () => crearNuevaCita() }
style={styles.btnSubmit}>
 <Text style={styles.textoSubmit}>Agregar Reserva</Text>
 </TouchableHighlight>
 </View>
 </ScrollView>
 </>
 );
}
const styles = StyleSheet.create({
 formulario: {
 backgroundColor: '#b9faf8',
 paddingHorizontal: 20,
 paddingVertical: 10,
 flex: 1,
 borderRadius:25,
 },
 label: {
 fontWeight: 'bold',
 fontSize: 18,
 marginTop: 20
 },
 input: {
 marginTop: 10,
 height: 50,
 borderColor: '#e1e1e1',
 borderWidth: 1,
 borderStyle: 'solid'
 },
 btnSubmit: {
 padding: 10,
 backgroundColor:Colors.BUTTON_COLOR,
 marginVertical: 10
},
textoSubmit: {
color: '#FFF',
fontWeight: 'bold',
textAlign: 'center'
}
})

const picketSelectStyles = StyleSheet.create({
    inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
 paddingHorizontal: 10,
 borderWidth: 1,
 borderColor: 'grey',
 borderRadius: 4,
 color: 'black',
 paddingRight: 30,
 backgroundColor: '#fff',
 marginLeft: -5,
 marginRight: -5,
 },
 inputAndroid: {
 fontSize: 16,
 paddingHorizontal: 10,
 paddingVertical: 8,
 borderWidth: 0.5,
 borderColor: 'grey',
 borderRadius: 8,
 color: 'black',
 paddingRight: 30,
 },
});
export default Formulario;