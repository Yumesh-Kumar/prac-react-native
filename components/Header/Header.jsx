import React from "react";
import { StyleSheet, View, Text, Platform } from "react-native";
import  {AntDesign,FontAwesome5,Ionicons} from '@expo/vector-icons';

function Header() {
  const styles = StyleSheet.create({
    header: {
      top: 0,
      position: "absolute",
      width: "100%",
      backgroundColor: "#5dbcf7",
      height: 80,
      marginTop: 0,
      borderBottomWidth: 2,
      borderBottomColor: "black",
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
     

    },
    logoName: {
      color: "white",
      fontWeight: "bold",
      top: 30,
      left:-20,
      fontSize: 25,
    },
  });
  return (
    <>
  <View style={styles.header}>
    <View >
        <Text style={styles.logoName}> cgjobschool</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',top:30,marginVertical:5,}}>
      
      <View style={{}} >
      <AntDesign name="bells" size={28} color="white" />
      </View>
      <View style={{marginLeft:15}}>
      <FontAwesome5 name="user-graduate" size={28} color="white" />
               </View>
      </View>
  </View>
      
    </>
  );
}

export default Header;
