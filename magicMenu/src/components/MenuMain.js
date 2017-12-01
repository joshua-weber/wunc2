/*
 * MenuMain.js
 *
 * Main navigation for menu options.
 * The component uses various functions to pull different
   props from the database and passes them into the appropiate
   tab sections
 */

// import packages
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';

// import component(s)
import RestaurantMenu from './RestaurantMenu';


class MenuMain extends Component {

  // grab and return appetizer props
  menuAppetizer() {
      return this.props.Appetizer;
  }

  // grab and return Entree props
  menuEntree() {
    return this.props.Entrée;
  }

  // grab and return A la carte props
  menuAlacarte() {
    return this.props.Alacarte;
  }

  // grab and return Beverages props
  menuBeverages() {
    return this.props.Beverages;
  }

  // grab and return Dessert props
  menuDessert() {
    return this.props.Dessert;
  }

  // grab and return Salad props
  menuSalad() {
    return this.props.Salad;
  }

  render() {
    return (
      <Container style={styles.tabs}>
        <Tabs  renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Entrée">
            <RestaurantMenu key={this.menuEntree().name} menuItems={this.menuEntree()} />
          </Tab>
          <Tab heading="Appetizer">
            <View>
              <Text>
                No models present for these items at this time. Sorry for the inconvenience.
              </Text>
            </View>
          </Tab>
          <Tab heading="Salad">
            <View>
              <Text>
                No models present for these items at this time. Sorry for the inconvenience.
              </Text>
            </View>
          </Tab>
          <Tab heading="Dessert">
            <View>
              <Text>
                No models present for these items at this time. Sorry for the inconvenience.
              </Text>
            </View>
          </Tab>
          <Tab heading="Beverages">
            <View>
              <Text>
                No models present for these items at this time. Sorry for the inconvenience.
              </Text>
            </View>
          </Tab>
          <Tab heading="À la carte">
            <View>
              <Text>
                No models present for these items at this time. Sorry for the inconvenience.
              </Text>
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = {
  tabs: {
    
  }
}

export default MenuMain;