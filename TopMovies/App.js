import React, { Component } from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, Image, ImageBackground} from 'react-native';
import {Card, Icon} from 'native-base';
import dates from './data/dates';
import movies from './data/movies';
import trailers from './data/trailers';

export default class App extends Component {
  render() {
    return (
        <SafeAreaView>
          <View style={{marginLeft: 20, marginRight: 20}}>
            <View style={{backgroundColor: 'rgba(242,242,242,0.45)', width: '100%', height: 45, borderRadius: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: '#d1d5dd', fontFamily: 'Avenir Next', fontSize: 18, marginLeft: 15, alignSelf: 'center'}}>Search</Text>
              <Icon type="MaterialIcons" name="search" style={{marginRight: 10, fontSize: 25, color: '#e81956', alignSelf: 'center'}}></Icon>
            </View>
            <Text style={{marginTop: 15, fontFamily: 'Avenir Next', fontSize: 46, fontWeight: '400'}}>Explore</Text>
            <Text style={{fontFamily: 'Avenir Next', fontSize: 46, fontWeight: '600'}}>Top Movies</Text>
            <ScrollView style={{marginTop: 10}} horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                Object.keys(dates).map((key, index) => (
                  <Card key={index} style={{marginRight: 10, backgroundColor: dates[key].color, width: 75, height: 85, borderRadius: 15, justifyContent: 'center'}}>
                    <Text style={{color: dates[key].text, fontFamily: 'Avenir Next', fontSize: 16, fontWeight: '300', alignSelf: 'center'}}>{dates[key].day}</Text>
                    <Text style={{color: dates[key].text, fontFamily: 'Avenir Next', fontSize: 22, fontWeight: '500', alignSelf: 'center'}}>{dates[key].num}</Text>
                  </Card>
                ))
              }
            </ScrollView>
            <ScrollView style={{marginTop: 15}} horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                Object.keys(movies).map((key, index) => (
                  <Image style={{width: 225, height: 350, borderRadius: 25, marginRight: 25}} source={movies[key].url}></Image>
                ))
              }
            </ScrollView>
            <Text style={{marginTop: 15, fontFamily: 'Avenir Next', fontSize: 24, fontWeight: '600'}}>Trailers</Text>
            <ScrollView style={{marginTop: 5}} horizontal={true} showsHorizontalScrollIndicator={false}>
              {
                Object.keys(trailers).map((key, index) => (
                  <ImageBackground style={{width: 150, height: 85, marginRight: 15}} imageStyle={{borderRadius: 15}} source={trailers[key].url}>

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