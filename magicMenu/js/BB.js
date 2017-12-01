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
     
          <Viro3DObject
            source={require('./res/banana/Banana.vrx')}
            resources={[require('./res/banana/Banana.jpg')]}
            position={[0, -0.2, 0]}
            rotation={[-100, 75, 8]}
            scale={[.001, .001, .001]}
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

