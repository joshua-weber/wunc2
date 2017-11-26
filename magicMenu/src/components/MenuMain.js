import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import RestaurantMenu from './RestaurantMenu';

class MenuMain extends Component {

  menuItems() {
      return this.props.items;
    }

  render() {
    console.log("THISTHIS", this.props.items)
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Appetizer">
            <View>
              <Text>No items at this time</Text>
            </View>
          </Tab>
          <Tab heading="Salad">
            <View>
              <Text>No items at this time</Text>
            </View>
          </Tab>
          <Tab heading="Entrée">
            <RestaurantMenu menuItems={this.menuItems()}/>  
          </Tab>
          <Tab heading="Dessert">
            <View>
              <Text>No items at this time</Text>
            </View>
          </Tab>
          <Tab heading="Beverages">
            <View>
              <Text>No items at this time</Text>
            </View> 
          </Tab>
          <Tab heading="À la carte">
            <View>
              <Text>No items at this time</Text>
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default MenuMain;