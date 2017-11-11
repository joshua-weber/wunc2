'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroMaterials,
  ViroBox,
  Viro3DObject,
  ViroAmbientLight,
  ViroSpotLight,
  ViroARPlaneSelector,
  ViroNode,
  ViroAnimations,
} from 'react-viro';

var HelloWorldSceneAR = React.createClass({
  getInitialState() {
    return {
      text : "Initializing AR..."
    };
  },
  render: function() {
    return (
      <ViroARScene onTrackingInitialized={()=>{this.setState({text : "Hello World!"})}}>

        <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />

        <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["grid"]}/>
        
        <ViroAmbientLight color={"#aaaaaa"} />

        <ViroSpotLight
          innerAngle={5}
          outerAngle={90}
          direction={[0,-1,-.2]}
          position={[0, 3, 1]}
          color="#ffffff"
          castsShadow={true} />

          <Viro3DObject
            source={require('./res/chicken/chicken.vrx')}
            resources={[require('./res/chicken/chicken_diffuse.jpg'),
                        require('./res/chicken/chicken_normals.jpg'),
                        require('./res/chicken/chicken_specular.jpg'),
                        require('./res/chicken/chicken_gloss.jpg')]}
            position={[0, .5, -.1]}
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

ViroMaterials.createMaterials({
  grid: {
    diffuseTexture: require('./res/grid_bg.jpg'),
  },
  btn: {
    diffuseTexture: require('./res/nav_3D/btn_black.png'),
  }
});



module.exports = HelloWorldSceneAR;