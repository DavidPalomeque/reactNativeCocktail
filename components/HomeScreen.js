import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,ScrollView,View,Text,Image } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function HomeScreen ({navigation}) {

    return (
      <View style={styles.HomeScreen}>
        <View style={{ flex: 1, justifyContent: 'center', marginBottom: 100 }}>
          <Image source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/51ZJ+xS2TWL.png" }}
          style={{ height: 140, width: 140, marginHorizontal: 80 }} />
          <Text style={styles.HomeScreenTitle}> COCKTAIL FINDER </Text>
          <TouchableHighlight underlayColor="white" onPress={() => navigation.navigate("Cocktails")}
          style={styles.HomeScreenButton}>
            <Text style={styles.HomeScreenButtonText}> Search your favorite cocktail </Text>
          </TouchableHighlight>
        </View>
      </View>
    );

}

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#ee0979"
  },
  HomeScreenTitle: {
    color: "white",
    textAlign: "center",
    fontSize: 27,
    fontWeight: "bold",
    fontStyle: "normal",
    marginBottom: 15
  },
  HomeScreenButton: {
    backgroundColor: "#e1e4e6",
    justifyContent: "center",
    height: 50,
    width: 300,
    borderRadius: 50
  },
  HomeScreenButtonText: {
    color: "#747577",
    textAlign: "center",
    fontSize: 17
  }
})
  