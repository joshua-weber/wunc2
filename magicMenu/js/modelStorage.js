  <Viro3DObject
            source={require('./res/chicken/chicken.vrx')}
            resources={[require('./res/chicken/chicken_diffuse.jpg'),
                        require('./res/chicken/chicken_normals.jpg'),
                        require('./res/chicken/chicken_specular.jpg'),
                        require('./res/chicken/chicken_gloss.jpg')]}
            position={[0, -0.1, 0]}
            scale={[-0.01, -.01, -.01]}
            
            type="VRX" />

            <Viro3DObject
            source={require('./res/banana/Banana.vrx')}
            resources={[require('./res/banana/Banana.jpg')]}
            position={[0, -0.1, 0]}
            rotation={[-100, 75, 8]}
            scale={[.001, .001, .001]}
            type="VRX" />

             <Viro3DObject
            source={require('./res/Pain/Pain.vrx')}
            resources={[require('./res/Pain/cgaxis_models_08_07_01.jpg')]}
            position={[0, -0.1, 0]}
            rotation={[100, 20, -185]}
            scale={[.1, .1, .1]}
           
            type="VRX" />

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
    scale={[.01, .01, .01]}
    rotation={[0, 0, 0]}
    materials={["wood", "pizza", "slice", "slice2"]}
    type="OBJ"/>
  
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



    
        <Viro3DObject
   source={require('./res/burger/burger.vrx')}
          resources={[require('./res/burger/bread Folds_Displ.png'),
                      require('./res/burger/Bread_Base Color.png'),
                      require('./res/burger/Bread_Displ.jpg'),
                      require('./res/burger/Bread_Mask.png'),
                      require('./res/burger/Cocumber_Col.png'),
                      require('./res/burger/Cocumber_Col2.jpg'),
                      require('./res/burger/Cucumber_Col3.jpg'),
                      require('./res/burger/salad_Displ.jpg'),
                      require('./res/burger/tomato_Col_Displ.jpg')]}
    position={[0, -0.1, 0]}
    scale={[.0002, .0002, .0002]}
    rotation={[0, 0, 0]}
    type="VRX"/>


               <ViroARPlaneSelector minHeight={.1} minWidth={.1}>


               </ViroARPlaneSelector>