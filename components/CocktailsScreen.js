import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,ScrollView,View,Text,Image } from 'react-native';
import SearchBarComponent from "./SearchBarComponent"
import CocktailsList from "./CocktailsList"

export default function CocktailsScreen ({Navigation}) /* ({navigation}) */ {

    return (
      <View style={{flex: 1 , backgroundColor: "#ee0979" }}>
        <ScrollView>
          <SearchBarComponent></SearchBarComponent>
          <CocktailsList></CocktailsList>
        </ScrollView>
      </View>
    );

}