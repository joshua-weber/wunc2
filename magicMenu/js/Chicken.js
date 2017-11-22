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
      <ViroARScene onTrackingInitialized={()=>{this.setState({text : "Chicken!"})}}>
        <Viro3DObject
            source={require('./res/chicken/chicken.vrx')}
            resources={[require('./res/chicken/chicken_diffuse.jpg'),
                        require('./res/chicken/chicken_normals.jpg'),
                        require('./res/chicken/chicken_specular.jpg'),
                        require('./res/chicken/chicken_gloss.jpg')]}
            position={[0, -.7, -.7]}
            scale={[-0.01, -.01, -.01]}
            
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

