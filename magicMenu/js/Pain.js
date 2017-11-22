'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  Viro3DObject
} from 'react-viro';

var HelloWorldSceneAR = React.createClass({
  getInitialState() {
    return {
      text : "Initializing AR..."
    };
  },
  render: function() {
    return (
      <ViroARScene onTrackingInitialized={()=>{this.setState({text : "Pain!"})}}>
        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} />

        <Viro3DObject
            source={require('./res/Pain/plate.vrx')}
            position={[0, -0.1, 0]}
            rotation={[100, 20, -185]}
            scale={[.1, .1, .1]}
           
            type="VRX" />

      </ViroARScene>
    );
  },
});

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;

