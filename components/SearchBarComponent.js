import React, { Component } from 'react';
import { SafeAreaView,StyleSheet,ScrollView,View,Text,Image } from 'react-native';
import { SearchBar , Icon , Card , ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cocktailsActions from '../redux/actions/cocktails';

export default class SearchBarComponent extends Component {
    constructor(props){
      super(props);
      this.state = {
        name : ""
      }
      
    }
  
    handleName = (name) => {
      this.setState({name}) // set name state
      name.length >= 3      // if user wrote 3 or more characters
      ? console.log(cocktailsActions.fetchCocktails(this.state.name))
      : console.log("Less than 3")
    }
  
      render(){
        return (
          <SafeAreaView>
            <SearchBar placeholder="Search" round clearIcon={{size:30}} searchIcon={{size:30}} 
            containerStyle={{ backgroundColor: "white" }} inputContainerStyle={{ backgroundColor: "white" }} inputStyle={{ color: "black" }}
            value={this.state.name} onChangeText={name => this.handleName(name)} />
          </SafeAreaView>
        )
      }
  
  }