import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import RestaurantsList from './RestaurantsList';
import Favorites from './Favorites';
import Map from './Map';

class RestaurantMain extends Component {
  render() {
    return (
      <Container style={styles.tabsContainer}>
        {/* <Header hasTabs/> */}
        <Tabs renderTabBar={()=> <ScrollableTab 
          activeTextColor={{backgroundColor: "red"}}
          backgroundColor="rgba(0,0,0,.03)"
          // inactiveTextColor="red"
          underlineStyle={{backgroundColor: '#179fd2'}}
          tabStyle={{margin: 90}}
          activeTabStyle={{backgroundColor: '#179fd2'}}
          />}
        >
          <Tab style={styles.tabs} heading="List">
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

const styles = {
	tabsMain: {
    backgroundColor: 'white'
  },
  tabsContainer: {
    margin: 0,
    padding: 0,
    backgroundColor: 'white'
  },
  tabs: {
    backgroundColor: 'white'
  }
}

export default RestaurantMain;