import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import RestaurantsList from './RestaurantsList';
import Favorites from './Favorites';
import Map from './Map';

class RestaurantMain extends Component {
  render() {
    return (
      <Container>
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="List">
            <RestaurantsList />
          </Tab>
          <Tab heading="Map">
            <Map />
          </Tab>
          <Tab heading="Favorites">
            <Favorites />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default RestaurantMain;