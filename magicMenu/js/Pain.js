'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  Viro3DObject,
  Viro360Image,
  ViroAmbientLight,
  ViroARPlaneSelector
} from 'react-viro';

var HelloWorldSceneAR = React.createClass({
  getInitialState() {
    return {
      text : "Initializing AR..."
    };
  },
  render: function() {
    return (
      <ViroARScene onTrackingInitialized={()=>{this.setState({text : " "})}}>
        <ViroText text={this.state.text} scale={[.3, .3, .3]} position={[0, 0, -1]} />

        <ViroAmbientLight
          color="#ffffff"
       />
      <ViroARPlaneSelector minHeight={.1} minWidth={.1}>
          <Viro3DObject
          source={require('./res/Pain/Pain.vrx')}
          resources={[require('./res/Pain/cgaxis_models_08_07_01.jpg')]}
          position={[0, -0.1, -.1]}
          rotation={[100, 20, -185]}
          scale={[.1, .1, .1]}
         
          type="VRX" />

        </ViroARPlaneSelector>
    

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

