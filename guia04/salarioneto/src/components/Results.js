import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
export default function Result(props) {
 
const {name,sneto, total, errorMessage} = props;

return (
    <View style={styles.content}>
    {total && (
        <View style={styles.boxResult}>
 <Text style={styles.title}>RESUMEN</Text>
 <DataResult style={styles.results} title="Nombre:" value={`${name} `} />
 <View style={styles.Topinicio}>
 <DataResult style={styles.results} title="Salario Base:" value={`${sneto} $`} />
 </View>

 <DataResult style={styles.results}
 title="Descuento ISSS (3%):"
 value={`${total.isssDesc} $`}
 />
  <DataResult style={styles.results}
 title="Descuento AFP (4%):"
 value={`${total.afpDesc} $`}
 />
   <DataResult style={styles.results}
 title="Renta (5%):"
 value={`${total.rentaDesc} $`}
 />
   <DataResult style={styles.results}
 title="Descuento Total:"
 value={`${total.totalDesc} $`}
 />
<View style={styles.totalfinal}>
<DataResult style={styles.results}
 title="Salario Neto:"
 value={`${total.totalPayable} $`}
 />
</View>

 </View>
 )}
 <View>
 <Text style={styles.error}>{errorMessage}</Text>
 </View>
 </View>
 );
}
function DataResult(props) {
 const {title, value} = props;
 return (
 <View style={styles.value}>
 <Text>{title}</Text>
 <Text>{value}</Text>
 </View>
 );
}
const styles = StyleSheet.create({
 content: {
 marginHorizontal: 40,
 },
 boxResult: {
 padding: 30,
 },
 title: {
 fontSize: 25,
 textAlign: 'center',
 fontWeight: 'bold',
 marginBottom: 20,
 },
 value: {
 flexDirection: 'row',
 justifyContent: 'space-between',
 marginBottom: 20,
 },
 error: {
 textAlign: 'center',
 color: '#9b2226',
 fontWeight: 'bold',
 fontSize: 20,
 },results:
 {
    fontSize:20
 }
 ,totalfinal:
 {
    borderTopColor:'#000000',
    borderTopWidth:2,
    paddingTop:8
 }
 ,Topinicio:{
  borderTopColor:'#000000',
  borderBottomWidth:2,
  marginBottom:10
 }
});
