import React, { Component } from 'react';
import {TextInput, Animated, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, View, Text, Image, ImageBackground} from 'react-native';
import {Icon} from 'native-base';
import places from './data/places';

animatedValues = {
  animatedValue0: new Animated.Value(0),
  animatedValue1: new Animated.Value(150),
  animatedValue2: new Animated.Value(0),
  animatedValue3: new Animated.Value(0),
}

ogIconColors = {
  0: "#6295a4",
  1: "#E5A371",
  2: "#81bfce",
  3: "#e08a8a",
}

class DateView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
    }
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(nextProps.color != prevState.color)
    {
      return {color : nextProps.path};
    }
    else return null;
  }

  dateClicked(id) {
    this.props.action(id)
  }

  render(){
    return(
      <View>
        <Animated.View style={{marginTop: 15, marginRight: 23, backgroundColor: this.state.color, width: 75, height: 85, borderRadius: 15, justifyContent: 'center'}}>
          <TouchableOpacity onPress={() => {this.dateClicked(this.props.id)}}>
            <Icon type="MaterialIcons" name={this.props.icon} style={{color: this.props.iconColor, marginLeft: 2.5, fontSize: this.props.iconSize, alignSelf: 'center'}}></Icon>
          </TouchableOpacity>
        </Animated.View>
        <View style={{marginTop: 5, width: 75, height: 35, justifyContent: 'center'}}>
          <Animated.Text style={{fontFamily: 'Avenir Next', fontSize: this.props.fontSize, fontWeight: '500', alignSelf: 'center'}}>{this.props.title}</Animated.Text>
        </View>
      </View>
    )
  }
}

class DateViewController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      0: {
        icon: 'airplanemode-active',
        title: 'Flight',
        color: animatedValues["animatedValue" + 0].interpolate({
                inputRange: [0, 150],
                outputRange: ['rgb(242, 242, 242)', 'rgb(98, 149, 164)']
              }),
        iconColor: "#6295a4",
        iconSize: 40,
        fontSize: 18,
        active: false
      },
      1: {
        icon: 'directions-car',
        title: 'Car',
        color: animatedValues["animatedValue" + 1].interpolate({
                  inputRange: [0, 150],
                  outputRange: ['rgb(242, 242, 242)', 'rgb(229, 163, 113)']
                }),
        iconColor: "#FFFFFF",
        iconSize: 55,
        fontSize: 22,
        active: true
      },
      2: {
        icon: 'directions-boat',
        title: 'Cruise',
        color: animatedValues["animatedValue" + 2].interpolate({
          inputRange: [0, 150],
          outputRange: ['rgb(242, 242, 242)', 'rgb(129, 191, 206)']
        }),
        iconColor: "#81bfce",
        fontSize: 18,
        iconSize: 40,
        active: false
      },
      3: {
        icon: 'train',
        title: 'Train',
        color: animatedValues["animatedValue" + 3].interpolate({
          inputRange: [0, 150],
          outputRange: ['rgb(242, 242, 242)', 'rgb(224, 138, 138)']
        }),
        fontSize: 18,
        iconSize: 40,
        iconColor: "#e08a8a",
        active: false
      },
    }
    this.handler = this.handler.bind(this);
  }  

  handler(id) {
    Object.keys(this.state).map((key, index)=> {
      var date = {...this.state[key]};
      var isActive = date["active"];
      if (id == index && !isActive)
      {
        date["active"] = true;
        date["iconColor"] = "#FFFFFF";
        date["fontSize"] = 22;
        date["iconSize"] = 55;
        Animated.timing(animatedValues["animatedValue" + id], {
          toValue: 150,
          duration: 500,
          useNativeDriver: false
        }).start();
        this.setState({[id]: date});
      }
      else if (id == index && isActive)
      {
        // Don't do anything
      }
      else
      {
        date["active"] = false;
        date["iconColor"] = ogIconColors[index];
        date["fontSize"] = 18;
        date["iconSize"] = 40;
        // update color for rest of views
        Animated.timing(animatedValues["animatedValue" + index], {
          toValue: 0,
          duration: 500,
          useNativeDriver: false
        }).start();
        this.setState({[index]: date});
      }
    });
  }

  render(){
    let items = Object.keys(this.state).map((key, index) => {
      return(
        <DateView action={this.handler} icon={this.state[key].icon} iconSize={this.state[key].iconSize} title={this.state[key].title} iconColor={this.state[key].iconColor} fontSize={this.state[key].fontSize} color={this.state[key].color} key={key} id={index}> 
        </DateView>
      )
    });
    return(
      <View style={{flexDirection: 'row'}}>
        {items}
      </View>
    )
  }
}

export default class screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontSizeAnimated: 16
    }
  }

  animateSearch() {
    if (this.state.fontSizeAnimated === 16)
    {
      this.setState({fontSizeAnimated: 20})
    }
    else
    {
      this.setState({fontSizeAnimated: 16})
    }
  }

  render() {
    return (
        <SafeAreaView>
          <View style={{marginLeft: 20, marginRight: 20}}>
            <View onPress={this.animateTextInput} style={{backgroundColor: 'rgba(242,242,242,0.45)', width: '100%', height: 45, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextInput style={[{fontSize: this.state.fontSizeAnimated, color: '#d1d5dd', fontFamily: 'Avenir Next', marginLeft: 15, alignSelf: 'center'}]} placeholder="Search" onFocus={() => this.animateSearch()} onSubmitEditing={() => this.animateSearch()}></TextInput>
                <Icon type="MaterialIcons" name="search" style={{marginRight: 10, fontSize: 25, color: '#2A3E64', alignSelf: 'center'}}></Icon>
            </View>
            <Text style={{marginTop: 15, fontFamily: 'Avenir Next', fontSize: 46, fontWeight: '400', color: '#6295a4'}}>Discover</Text>
            <Text style={{fontFamily: 'Avenir Next', fontSize: 46, fontWeight: '600', color: '#2A3E64'}}>Destinations</Text>
            <DateViewController></DateViewController>
            <ImageBackground style={{marginTop: 20, width: '100%', height: 200, marginRight: 15}} imageStyle={{borderRadius: 15}} source={require('./images/sydney.jpg')}>
              <View style={{width: '100%', height: 200, justifyContent: 'flex-end'}}>
                <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginRight: 10}}>
                  <ImageBackground source={require('./images/face.png')} imageStyle={{borderRadius: 100}} style={{justifyContent: 'flex-end', borderRadius: 100, marginBottom: 10, width: 35, height: 35, backgroundColor: '#FFFFFF', borderColor: '#FFFFFF', borderWidth: 1}}>
                  </ImageBackground>
                  <View style={{justifyContent: 'center', marginBottom: 10, width: 35, height: 35, marginLeft: -5, backgroundColor: '#e58a90', borderRadius: 100, borderColor: '#FFFFFF', borderWidth: 1}}>
                    <Text style={{fontFamily: 'Avenir Next', fontWeight: '600', color: '#FFFFFF', alignSelf: 'center'}}>15+</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
            <Text style={{marginTop: 15, fontFamily: 'Avenir Next', fontSize: 24, fontWeight: '600', color: '#2A3E64'}}>Popular Places</Text>
            <ScrollView style={{marginTop: 5}} horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                Object.keys(places).map((key, index) => (
                  <ImageBackground key={index} style={{marginTop: 10, width: 150, height: 165, marginRight: 15}} imageStyle={{borderRadius: 15}} source={places[key].url}>
                  </ImageBackground>
                ))
              }
            </ScrollView>
          </View>
        </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({

});