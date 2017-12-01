'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  Viro3DObject,
  Viro360Image,
  ViroAmbientLight,
  ViroARPlaneSelector,
  ViroMaterials,
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
        <ViroText text={this.state.text} scale={[.7, .7, .7]} position={[0, 0, -1]} />

        <ViroAmbientLight color={"#ffffff"}/>
      <ViroARPlaneSelector minHeight={.1} minWidth={.1}>
         <Viro3DObject
    source={require("./res/pizza/WC_Pizza.obj")}
        resources={[require('./res/pizza/WC_Pizza.mtl'),
                    
                    require('./res/pizza/WC_Pizza_BM.jpg'),
                    require('./res/pizza/WC_Pizza_DM.jpg'),
                    require('./res/pizza/WC_Pizza_RM.jpg'),
                    
                    require('./res/pizza/WC_Pizza_Slice_1_BM.jpg'),
                    require('./res/pizza/WC_Pizza_Slice_1_Displace.jpg'),
                    
                    require('./res/pizza/WC_Pizza_Slice_2_BM.jpg'),
                    require('./res/pizza/WC_Pizza_Slice_2_Displace.jpg'),
                    require('./res/pizza/WC_Pizza_Slice_2_RM.jpg'),
                  
                    require('./res/pizza/WC_Wood_BM.jpg'),
                    require('./res/pizza/WC_Wood_RM.jpg')]}
    highAccuracyGaze={true}
position={[0, -0.1, 0]}
    scale={[.05, .05, .05]}
    rotation={[0, 0, 0]}
    materials={["wood", "pizza", "slice", "slice2"]}
    type="OBJ"/>

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

ViroMaterials.createMaterials({
  pizza: {
    shininess: 2.0,
    lightingModel: "Lambert",
    diffuseTexture: require('./res/pizza/WC_Pizza.jpg'),
  },
    slice: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture: require('./res/pizza/WC_Pizza_Slice_1.jpg'),
  },
     slice2: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture: require('./res/pizza/WC_Pizza_Slice_2.jpg'),
  },

  wood: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture: require('./res/pizza/WC_Wood.jpg'),
  },
});

module.exports = HelloWorldSceneAR;

