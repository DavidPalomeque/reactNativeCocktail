import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,ScrollView,View,Text,Image } from 'react-native';
import { SearchBar , Icon , Card , ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cocktailsActions from '../redux/actions/cocktails';

export default class CocktailsList extends Component {
    constructor(props){
      super(props);
      this.state = {
        view : "hola"
      }
    }
  
  
    render() {
      /*if (this.state.cocktails) {
        this.state.view = this.state.cocktails.map((cocktail, i) => {
          return (
            <ListItem style={{ margin: 10 }}
              key={i}
              title={cocktail.name}
              //avatar={{ uri: u.avatar }}
              roundAvatar
            />
          );
        }
        )
      } else {
        this.state.view = <View>
          <Icon name="arrow-up" type="font-awesome" size={70} color="white" />
          <Text style={styles.emptyList}> Let´s find a cocktail ! </Text>
        </View>
      }*/
  
      return (
        <View style={{ marginTop: 120 }}>
          
        </View>
      )
  
    }
  
  }

  const styles = StyleSheet.create({
    emptyList: {
      color: "white",
      fontSize: 60,
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: "cursive"
    }
  })