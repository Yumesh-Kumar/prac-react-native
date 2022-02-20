import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  FlatList,
  Dimensions,
} from "react-native";

const { width: screenWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    width: screenWidth - 20,
    height: 150,
    borderRadius: 5,
    margin: 6,
   justifyContent:'center',
   marginBottom:Platform.select({ ios: 0, android: 1 }),
  },
  title: {
    fontSize: 32,
  },
});

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function Carousel() {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  const renderItem = ({ item }) => <Item title={item.title} />;
  return (
    <>
      <View style={{ flex: 1, paddingTop: 30 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
        />
      </View>
    </>
  );
}

export default Carousel;
