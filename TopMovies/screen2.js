import React, { Component } from 'react';
import {Animated, StyleSheet, View, Text, Image, ImageBackground, ScrollView, SafeAreaView} from 'react-native';
import StarRating from 'react-native-star-rating';
import {Card, Icon} from 'native-base';
import subtitles from './data/subtitles';
import cast from './data/cast';

var types = ["Crime", "Drama", "Thriller"];

export default class screen2 extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      width: new Animated.Value(103.75),
      height: new Animated.Value(106.25),
      opacity: new Animated.Value(0)
    }
    Animated.timing(this.state.width, {
      duration: 700,
      toValue: 415,
      useNativeDriver: false
    }).start();
    Animated.timing(this.state.height, {
      duration: 700,
      toValue: 425,
      useNativeDriver: false
    }).start();
    Animated.timing(this.state.opacity, {
      duration: 700,
      toValue: 1,
      useNativeDriver: true
    }).start();
  }
  render() {
    return (
      <View>
        <Animated.Image style={{alignSelf: 'center', borderRadius: 15, width: this.state.width, height: this.state.height}} source={require('./images/joker2.jpg')}></Animated.Image>
        <Animated.View style={{opacity: this.state.opacity}}>
          <Card style={{marginTop: -85, alignSelf: 'center', height: 150, width: '92%', borderRadius: 15}}>
            <View style={{flexDirection: 'row', backgroundColor: '#F2F2F2', width: '100%', height: '40%', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
              <View style={{width: '35%', height: '100%'}}>
                <Text style={{marginLeft: 15, marginTop: 5, fontFamily: 'Avenir Next', fontSize: 26, fontWeight: 'bold', color: '#404040'}}>JOKER</Text>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={4}
                  fullStarColor={'#F19D25'}
                  starSize={15}
                  containerStyle={{marginLeft: 15, justifyContent: 'flex-start'}}
                  buttonStyle={{paddingRight: 4.25}}
                />
              </View>
              <View style={{justifyContent: 'center', width: '65%', height: '100%'}}>
                <Image style={{alignSelf: 'flex-end', marginRight: 10, width: 100, height: 50}} source={require('./images/imdb.png')}></Image>
              </View>
            </View>
            <View style={{height: '60%', flexDirection: 'row'}}>
            {
              Object.keys(subtitles).map((key, index) => (
                <View style={{alignSelf: 'center', width: subtitles[key].width}} key={index}>
                  <Text style={{fontFamily: 'Avenir Next', fontSize: 20, fontWeight: '700', alignSelf: 'center'}}>{subtitles[key].title}</Text>
                  <Text style={{marginTop: 10, color: '#404040', fontFamily: 'Arial', fontSize: 16, fontWeight: '400', alignSelf: 'center'}}>{subtitles[key].value}</Text>
                </View>
              ))
            }
            </View>
          </Card>
        </Animated.View>
        <View style={{margin: 20}}>
          <Text style={{fontFamily: 'Avenir Next', fontSize: 20, fontWeight: '600'}}>Plot Summary</Text>
          <Text style={{fontFamily: 'Arial', marginTop: 5, color: '#808080', fontWeight: '300', fontSize: 16}}>In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.</Text>
        </View>
        <View style={{flexDirection: 'row', marginLeft: 20, marginRight: 20}}>
        {
          types.map((key, index) => {
            return(
              <View key={key} style={{marginRight: 35, width: 100, height: 35, backgroundColor: '#F2F2F2', borderRadius: 15, justifyContent: 'center'}}>
                <Text style={{fontFamily: 'Arial', fontWeight: '400', fontSize: 18, alignSelf: 'center'}}>{key}</Text>
              </View>
            )
          })
        }
        </View>
        <View style={{marginTop: 10, marginLeft: 20, marginRight: 20}}>
          <Text style={{fontFamily: 'Avenir Next', fontSize: 20, fontWeight: '600'}}>Cast</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {
            Object.keys(cast).map((key, index) => (
              <View style={{marginRight: 15, width: 75, height: 115}} key={index}>
                <Image style={{borderRadius: 15, width: 75, height: 75}} source={cast[key].image}></Image>
                <Text style={{marginTop: 5, alignSelf: 'center'}}>{cast[key].name}</Text>
              </View>
            ))
          }
          </ScrollView>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({

});