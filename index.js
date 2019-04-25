import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar

} from 'react-native';
import{Actions} from 'react-native-router-flux';
var width = Dimensions.get('window').width
export default class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.timeoutHandle = setTimeout(()=>{
   Actions.child();
    }, 2000);
}

componentWillUnmount(){
  clearTimeout(this.timeoutHandle); 
}



  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <StatusBar
              backgroundColor="#1c1c5f"
              barStyle="light-content"
            />
          </View>
          <View style={styles.box}>
           <TouchableOpacity onPress={() => { Actions.child(); }}>
            <Image style={styles.image} source={require('https://github.com/chanchal120793/Railplanners/blob/master/on.jpg')} />
            </TouchableOpacity>
          </View>
          <Text style={styles.wel}>Welcome to RailPlanner</Text>
         
        </ScrollView>
       
      </View>
    );


  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height:600,
    width:400

  },
  box: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {

    width: 400,
    height: 550,

  },
  wel: {
    fontSize: 20,
    paddingTop: 13,
    paddingHorizontal: 50,
    fontWeight: 'bold',
    color:'#1c1c5f'
  


  }
});
