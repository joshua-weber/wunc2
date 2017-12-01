'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  Viro3DObject,
  ViroMaterials,
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
        <ViroAmbientLight color={"#ffffff"}/>
        <ViroARPlaneSelector minHeight={.1} minWidth={.1}>
          <Viro3DObject
            source={require('./res/chicken/chicken.vrx')}
            materials={["chicken_diffuse", "chicken_normals", "chicken_specular", "chicken_gloss"]}
            position={[0, -0.1, 0]}
            scale={[-0.01, -.01, -.01]}
            type="VRX" />
        </ViroARPlaneSelector>
        

      </ViroARScene>
    );
  },
});

ViroMaterials.createMaterials({
  chicken_diffuse: {
    shininess: 2.0,
    lightingModel: "Lambert",
    diffuseTexture: require('./res/chicken/chicken_diffuse.jpg'),
  },
    chicken_normals: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture:  require('./res/chicken/chicken_normals.jpg'),
  },
     chicken_specular: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture: require('./res/chicken/chicken_specular.jpg'),
  },

  chicken_gloss: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture: require('./res/chicken/chicken_gloss.jpg'),
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

