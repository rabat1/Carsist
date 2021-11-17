import React from 'react'
import { View, Text,TouchableOpacity,Image,FlatList } from 'react-native'
import Colors from '../../Utils/Colors'
import Icon from '../../Utils/Icon';
import styles from './styles';
const index = ({data}) => {

    const ListEmptyComponent=()=>{
        return(
        <View style={{ paddingVertical:50, alignSelf:'center'}}>
            {/* <Message message="No Contacts to show" danger /> */}
            <Text>No Expenses to show</Text>
        </View>
        )
    };

    const renderItem = ({item}) =>{
        console.log(item);
        const {service_name,cost,date,mechanic_name,image_url} = item;

        return(
        <TouchableOpacity style={styles.itemContainer} onPress={()=>{
          //  navigate(CONTACT_DETAIL, {item});
        }}>
            <Text style={styles.serviceName}>{service_name}</Text>

         <View style={styles.item}>
            
        <Image
         style={{width:65, height:70,borderRadius:10}}
         source={{uri:image_url}}/>
    
         <View style={{borderLeftWidth:0.3,borderLeftColor:'grey', paddingLeft:20}} >
                <Text style={styles.name}>{`Date: ${date}`} </Text>
                <Text style={styles.name}>{`Mechanic: ${mechanic_name}`}</Text>
                <Text style={styles.name}>{`Cost: ${cost}`}</Text>
                <Text style={styles.name}>{`Odometer: ${cost}`}</Text>
    
        </View>
        <Icon name='right' type='ant' size={17} color={'black'} />
         </View>
       
  </TouchableOpacity>)
    }
   




    return (
        <View style={{marginTop:30}}>
            
            <FlatList
            keyExtractor={(item)=>String(item.cost)} 
            data={data} 
            renderItem={renderItem}
            ItemSeparatorComponent={()=>
            (
            <View style={styles.itemSeperator}></View>
            )}
            ListEmptyComponent={ListEmptyComponent}
            ListFooterComponent={<View style={{height:200}}></View>}
            />


        </View>
    )
}

export default index;
