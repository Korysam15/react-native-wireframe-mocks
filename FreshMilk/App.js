import React from 'react';
import {Animated, SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {Card, Icon} from 'native-base';
import Carousel from 'react-native-snap-carousel';
console.disableYellowBox = true;
// COLORS
// #B8B8B8, #CFCFCF, #040404, #929292, #68686

export default class App extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
        activeIndex:0,
        carouselItems: [
        {
            title:"Item 1",
            text: "Text 1",
        },
        {
            title:"Item 2",
            text: "Text 2",
        },
        {
            title:"Item 3",
            text: "Text 3",
        },
        {
            title:"Item 4",
            text: "Text 4",
        },
        {
            title:"Item 5",
            text: "Text 5",
        },
      ]
    }
  }

  _renderItem({item,index}){
    return (
      <Card style={{height: 400, borderRadius: 25}}>

      </Card>
    )
  }

  render() {
    return(
      <SafeAreaView style={{backgroundColor: 'black'}}>
        <View style={{flexDirection: 'row'}}>
          <View style={{width: '33.33%', height: 50, justifyContent: 'center'}}>
            <Icon type="MaterialIcons" name="dehaze" style={{fontSize: 28, alignSelf: 'center', color: '#505050'}}></Icon>
          </View>
          <View style={{justifyContent: 'center', width: '33.33%', height: 50}}>
            <Text style={{fontFamily: 'Arial Hebrew', fontWeight: '500', color: '#686868', fontSize: 16, alignSelf: 'center'}}>Fresh Milk</Text>
          </View>
          <View style={{width: '33.33%', height: 50, justifyContent: 'center'}}>
            <Icon type="MaterialIcons" name="search" style={{fontSize: 28, alignSelf: 'center', color: '#505050'}}></Icon>
          </View>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black'}}>
          <Text style={{fontFamily: 'Milk&Honey', alignSelf: 'center', fontWeight: 'bold', fontSize: 50}}>Brent</Text>
        </View>
        <View style={{marginTop: 125, width: '100%', height: '62%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'black'}}>
            <View style={{justifyContent: 'center', marginLeft: 15}}>
              <Text style={{color: '#FFFFFF', fontFamily: 'Avenir Next', fontWeight: '600', fontSize: 22}}>Featured</Text>
            </View>
            <View style={{justifyContent: 'center', marginRight: 20}}>
              <Text style={{color: '#FFFFFF', fontFamily: 'Avenir Next', fontWeight: '600', fontSize: 16}}>All</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <View style={{justifyContent: 'center', marginLeft: 15, borderColor: '#929292', borderWidth: 1, borderColor: '#CFCFCF', borderRadius: 5, width: 160, height: 25}}>
              <Text style={{color: '#929292', alignSelf: 'center', fontFamily: 'Avenir Next', fontWeight: '400', fontSize: 14}}>Recommended for you</Text>
              </View>
              <View style={{justifyContent: 'center', marginLeft: 10, borderColor: '#929292', borderWidth: 1, borderColor: '#CFCFCF', borderRadius: 5, width: 95, height: 25}}>
                <Text style={{color: '#929292', alignSelf: 'center', fontFamily: 'Avenir Next', fontWeight: '400', fontSize: 14}}>Most popular</Text>
              </View>
            </View>
              <Carousel
                containerCustomStyle={{alignSelf: 'center'}}
                contentContainerCustomStyle={{alignItems: 'center'}}
                layout={"default"}
                ref={ref => this.carousel = ref}
                data={this.state.carouselItems}
                sliderWidth={400}
                itemWidth={300}
                firstItem={1}
                renderItem={this._renderItem}
                onSnapToItem = { index => this.setState({activeIndex:index}) } />
        </View>
        <View style={{flexDirection: 'row', width: '100%', height: '8%', backgroundColor: 'black'}}>
          <View style={{justifyContent: 'center', width: '33.33%', height: '100%'}}>
            <Image source={require('./images/cow.png')} style={{alignSelf: 'center', width: 32, height: 32}} resizeMode="contain"></Image>
          </View>
          <View style={{justifyContent: 'center', width: '33.33%', height: '100%'}}>
            <Icon type="FontAwesome5" name="shopping-bag" style={{fontSize: 28, alignSelf: 'center', color: '#CFCFCF'}}></Icon>
          </View>
          <View style={{justifyContent: 'center', width: '33.33%', height: '100%'}}>
            <Icon type="FontAwesome" name="bookmark" style={{fontSize: 28, alignSelf: 'center', color: '#CFCFCF'}}></Icon>
          </View>
        </View>
      </SafeAreaView>
    ) 
  }
}

const styles = StyleSheet.create({
});