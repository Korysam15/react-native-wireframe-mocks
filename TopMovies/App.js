import React, { Component } from 'react';
import {Animated, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, View, Text, Image, ImageBackground} from 'react-native';
import {Icon} from 'native-base';
import movies from './data/movies';
import trailers from './data/trailers';

animatedValues = {
  animatedValue0: new Animated.Value(0),
  animatedValue1: new Animated.Value(150),
  animatedValue2: new Animated.Value(0),
  animatedValue3: new Animated.Value(0),
  animatedValue4: new Animated.Value(0),
}

class DateView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
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
      <Animated.View style={{marginRight: 10, backgroundColor: this.state.color, width: 75, height: 85, borderRadius: 15, justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => {this.dateClicked(this.props.id)}}>
          <Text style={{color: this.props.textColor, fontFamily: 'Avenir Next', fontSize: 16, fontWeight: '300', alignSelf: 'center'}}>{this.props.day}</Text>
          <Text style={{color: this.props.textColor, fontFamily: 'Avenir Next', fontSize: 22, fontWeight: '500', alignSelf: 'center'}}>{this.props.date}</Text>
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

class DateViewController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      0: {
        day: 'Th',
        num: '15',
        color: animatedValues["animatedValue" + 0].interpolate({
                inputRange: [0, 150],
                outputRange: ['rgb(242, 242, 242)', 'rgb(232, 25, 86)']
              }),
        text: '#000000',
        active: false
      },
      1: {
        day: 'Fri',
        num: '16',
        color: animatedValues["animatedValue" + 1].interpolate({
                  inputRange: [0, 150],
                  outputRange: ['rgb(242, 242, 242)', 'rgb(232, 25, 86)']
                }),
        text: '#FFFFFF',
        active: true
      },
      2: {
        day: 'Sat',
        num: '17',
        color: animatedValues["animatedValue" + 2].interpolate({
          inputRange: [0, 150],
          outputRange: ['rgb(242, 242, 242)', 'rgb(232, 25, 86)']
        }),
        text: '#000000',
        active: false
      },
      3: {
        day: 'Sun',
        num: '18',
        color: animatedValues["animatedValue" + 3].interpolate({
          inputRange: [0, 150],
          outputRange: ['rgb(242, 242, 242)', 'rgb(232, 25, 86)']
        }),
        text: '#000000',
        active: false
      },
      4: {
        day: 'Mon',
        num: '19',
        color: animatedValues["animatedValue" + 4].interpolate({
          inputRange: [0, 150],
          outputRange: ['rgb(242, 242, 242)', 'rgb(232, 25, 86)']
        }),
        text: '#000000',
        active: false
      }
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
        date["text"] = "#FFFFFF";
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
        date["text"] = "#000000";
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
        <DateView action={this.handler} day={this.state[key].day} date={this.state[key].num} textColor={this.state[key].text} color={this.state[key].color} key={key} id={index}> 
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
  }

  render() {
    return (
        <SafeAreaView>
          <View style={{marginLeft: 20, marginRight: 20}}>
            <View onPress={this.animateTextInput} style={{backgroundColor: 'rgba(242,242,242,0.45)', width: '100%', height: 45, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Animated.Text style={[{color: '#d1d5dd', fontFamily: 'Avenir Next', marginLeft: 15, alignSelf: 'center'}]}>Search</Animated.Text>
                <Icon type="MaterialIcons" name="search" style={{marginRight: 10, fontSize: 25, color: '#e81956', alignSelf: 'center'}}></Icon>
            </View>
            <Text style={{marginTop: 15, fontFamily: 'Avenir Next', fontSize: 46, fontWeight: '400'}}>Explore</Text>
            <Text style={{fontFamily: 'Avenir Next', fontSize: 46, fontWeight: '600'}}>Top Movies</Text>
            <ScrollView style={{marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
              <DateViewController></DateViewController>
            </ScrollView>
            <ScrollView style={{marginTop: 15}} horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                Object.keys(movies).map((key, index) => (
                  <Image key={index} style={{width: 225, height: 350, borderRadius: 25, marginRight: 25}} source={movies[key].url}></Image>
                ))
              }
            </ScrollView>
            <Text style={{marginTop: 15, fontFamily: 'Avenir Next', fontSize: 24, fontWeight: '600'}}>Trailers</Text>
            <ScrollView style={{marginTop: 5}} horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                Object.keys(trailers).map((key, index) => (
                  <ImageBackground key={index} style={{width: 150, height: 85, marginRight: 15}} imageStyle={{borderRadius: 15}} source={trailers[key].url}>
                    <View style={{justifyContent: 'center', marginTop: 10, marginLeft: 10, width: 25, height: 25, backgroundColor: 'rgba(0,0,0,0.65)', borderRadius: 100}}>
                      <Icon type="MaterialIcons" name="play-circle-outline" style={{fontSize: 20, alignSelf: 'center', color: '#FFFFFF'}}></Icon>
                    </View>
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