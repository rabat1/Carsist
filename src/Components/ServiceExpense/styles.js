import { StyleSheet } from "react-native"
import Colors from "../../Utils/Colors"

export default StyleSheet.create({
    item:{
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:7,
        alignItems:'center',
        justifyContent:'space-between',
       
    },
    itemContainer:{
        paddingHorizontal:10,
    },
    name:{
        fontSize:16,
     
    },
    itemSeperator:{
        height:0.5,
        opacity:0.7,
        backgroundColor:Colors.grey,
        width:'95%',
        alignSelf:'center'
    },
    serviceName:{
        color:'black',
        fontSize:16,
        
        //alignSelf:'center'
    }
})