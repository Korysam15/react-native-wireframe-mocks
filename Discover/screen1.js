import React, { Component } from 'react';
import StarRating from 'react-native-star-rating';
import {TextInput, Animated, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView, View, Text, Image, ImageBackground} from 'react-native';

export default class screen1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedMargin: new Animated.Value(0),
      animatedOpacity: new Animated.Value(0),
      animatedMarginBottom: new Animated.Value(450),
      opacity: 0
    }
    Animated.parallel([
      Animated.timing(this.state.animatedMargin, {
        toValue: 150,
        duration: 700,
        useNativeDriver: false
      }),
      Animated.timing(this.state.animatedOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
      }),
      Animated.timing(this.state.animatedMarginBottom, {
        toValue: 350,
        duration: 700,
        useNativeDriver: false
      })
    ]).start();
  }

  componentDidMount() {
    const self = this;
    setTimeout(function(){
      self.setState({opacity: 1/7});
    }, 150);
    setTimeout(function(){
      self.setState({opacity: 2/7});
    }, 350);
    setTimeout(function(){
      self.setState({opacity: 3/7});
    }, 360);
    setTimeout(function(){
      self.setState({opacity: 4/7});
    }, 400);
    setTimeout(function(){
      self.setState({opacity: 5/7});
    }, 500);
    setTimeout(function(){
      self.setState({opacity: 6/7});
    }, 600);
    setTimeout(function(){
      self.setState({opacity: 7/7});
    }, 700);
  }


  render() {
    return (
      <View style={{height: '100%', width: '100%', borderWidth: 1, borderColor: 'black'}}>
        <ImageBackground style={{width: '100%', height: '100%'}} source={require('./images/mountain.jpg')}>
          <View style={{height: '35%', marginLeft: 10, marginRight: 10}}>
          <Animated.Text style={[styles.title, {opacity: this.state.animatedOpacity, marginTop: this.state.animatedMargin}]}>DISCOVER</Animated.Text>
          </View>
          <View style={{marginLeft: 18, marginRight: 18}}>
            <Animated.Text style={[styles.white, {opacity: this.state.animatedOpacity, marginTop: this.state.animatedMarginBottom,fontSize: 28, fontWeight: 'bold'}]}>Skykomish, Washington</Animated.Text>
            <Animated.Text style={[styles.white, {opacity: this.state.animatedOpacity, marginTop: 2.5, fontSize: 24, fontWeight: '500'}]}>USA</Animated.Text>
            <StarRating
              disabled={true}
              maxStars={5}
              rating={4}
              fullStarColor={'#f0be2d'}
              starSize={15}
              containerStyle={{opacity: this.state.opacity, marginTop: 5, justifyContent: 'flex-start'}}
              buttonStyle={{paddingRight: 4.25}}
            />
            <Animated.Text style={[styles.white, {opacity: this.state.animatedOpacity, marginTop: 5, fontSize: 16}]}>Located in the Mount Baker-Snoqualmie National Forest, 49 miles east of Evertt, Washington, on the South Fork of the Skykomish River.</Animated.Text>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  white: {
    color: '#FFFFFF'
  },
  title: {
    fontSize: 70,
    alignSelf: 'center',
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    color: '#FFFFFF'
  }
});