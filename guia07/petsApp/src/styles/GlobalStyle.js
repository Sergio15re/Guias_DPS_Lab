import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
    titulo:{
      fontSize:16,
      fontWeight:'bold'
    },
    contenedor:{
        flex:1,
        marginTop:20,
        marginHorizontal:'3.5%',
        flexDirection:'column',
    },
    Imgs:{
        width:60,
        height:60,
        borderRadius:30
    },
    Subcontainer:{
        marginVertical:6,
        flex:1,
        flexDirection:'row'
    },
    ImageContainer:{
        flex:1
    },
    TextContaner:{
        flex:4
    }
});

export default globalStyles