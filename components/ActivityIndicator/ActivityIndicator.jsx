import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";


function CGJSActivityIndicator({loading}) {
 
 
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center"
      },
      horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
      }
    });


    return(
        <>
          <View style={[styles.container, styles.horizontal]}>
       
       
        <ActivityIndicator size="large" color="#61dafb" animating={loading} />
      </View>
        
        </>
    )
    
    
   
   
    
   
}

export default CGJSActivityIndicator