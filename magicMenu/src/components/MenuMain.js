import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import RestaurantMenu from './RestaurantMenu';


class MenuMain extends Component {

  menuAppetizer() {
      return this.props.Appetizer;
  }

  menuEntree() {
    return this.props.Entrée;
  }

  menuAlacarte() {
    return this.props.Alacarte;
  }

  menuBeverages() {
    return this.props.Beverages;
  }

  menuDessert() {
    return this.props.Dessert;
  }

  menuSalad() {
    return this.props.Salad;
  }

  render() {
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="Appetizer">
            <RestaurantMenu key={this.menuAppetizer().name} menuItems={this.menuAppetizer()} />
          </Tab>
          <Tab heading="Salad">
            <RestaurantMenu key={this.menuSalad().name} menuItems={this.menuSalad()} />
          </Tab>
          <Tab heading="Entrée">
            <RestaurantMenu key={this.menuEntree().name} menuItems={this.menuEntree()} />
          </Tab>
          <Tab heading="Dessert">
            <RestaurantMenu key={this.menuDessert().name} menuItems={this.menuDessert()} />
          </Tab>
          <Tab heading="Beverages">
            <RestaurantMenu key={this.menuBeverages().name} menuItems={this.menuBeverages()} />
          </Tab>
          <Tab heading="À la carte">
            <RestaurantMenu key={this.menuAlacarte().name} menuItems={this.menuAlacarte()} />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default MenuMain;