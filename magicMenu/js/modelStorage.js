//chicken start
            <Viro3DObject
            source={require('./res/chicken/chicken.vrx')}
            materials={["chicken_diffuse", "chicken_normals", "chicken_specular", "chicken_gloss"]}
            position={[0, -0.1, 0]}
            scale={[-0.01, -.01, -.01]}
            
            type="VRX" />
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
//chicken end
//banana start
            <Viro3DObject
            source={require('./res/banana/Banana.vrx')}
            resources={[require('./res/banana/Banana.jpg')]}
            position={[0, -0.1, 0]}
            rotation={[-100, 75, 8]}
            scale={[.001, .001, .001]}
            type="VRX" />
//banana end            
//bread start
             <Viro3DObject
            source={require('./res/Pain/Pain.vrx')}
            resources={[require('./res/Pain/cgaxis_models_08_07_01.jpg')]}
            position={[0, -0.1, 0]}
            rotation={[100, 20, -185]}
            scale={[.1, .1, .1]}
           
            type="VRX" />
//bread end
//pizza start
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

//pizza end
//burger start
        <Viro3DObject
   source={require('./res/burger/BurgerOnly.obj')}
    position={[0, -0.1, 0]}
    materials={["bread3","bread", "bread4","bread3","bread2",   "salad", "cucm3", "cucm2", "cucm","tomato" ]}
    scale={[.02, .02, .02]}
    rotation={[0, 0, 0]}
    type="OBJ"/>
    ViroMaterials.createMaterials({
  bread: {
    shininess: 2.0,
    lightingModel: "Lambert",
    diffuseTexture: require('./res/burger/Bread_Displ.jpg'),
  },
    bread2: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture: require('./res/burger/breadFolds_Displ.png'),
  },
    bread3: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture: require('./res/burger/Bread_BaseColor.png'),
  },
    bread4: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture:  require('./res/burger/Bread_Mask.png')
  },
    salad: {
    shininess: 2.0,
    lightingModel: "Lambert",
    diffuseTexture: require('./res/burger/salad_Displ.jpg'),
  },
      salad: {
    shininess: 2.0,
    lightingModel: "Lambert",
    diffuseTexture: require('./res/burger/salad_Displ.jpg'),
  },
      cucm: {
    shininess: 2.0,
    lightingModel: "Lambert",
    diffuseTexture: require('./res/burger/Cocumber_Col2.jpg'),
  },
        cucm2: {
    shininess: 2.0,
    lightingModel: "Lambert",
    diffuseTexture:  require('./res/burger/Cucumber_Col3.jpg'),
  },
    cucm3: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture:   require('./res/burger/Cocumber_Col.png'),
  },
        tomato: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture: require('./res/burger/tomato_Col_Displ.jpg'),
  },
});
//burger end

//strawberry broken
           <Viro3DObject
   source={require('./res/strawberry/Strawberriespie.vrx')}
    resources={[require('./res/strawberry/Strawberriespie.mtl'),
                    require('./res/strawberry/FoodVarious0004_L_COLOR_COLOR.png'),
                    require('./res/strawberry/FoodVarious0004_L_COLOR_DISP.png'),
                    require('./res/strawberry/FoodVarious0004_L_COLOR_NRM.png'),
                    require('./res/strawberry/FoodVarious0004_L_COLOR_SPEC.png'),
                    require('./res/strawberry/ooc.png')
                    ]}
    position={[0, -0.1, 0]}
    materials={[]}
    scale={[.02, .02, .02]}
    rotation={[0, 0, 0]}
    type="VRX"/>
    //strawberry end
//cake start
        <Viro3DObject
            source={require('./res/cake/ChocolateCake.obj')}
            resources={[require('./res/cake/ChocolateCake.mtl'),
                        require('./res/cake/cake_texture_by_xnickixstockxbump1.jpg')
                       ]}
            materials={["cake", "plate","plate"]}
            position={[0, -0.1, 0]}
            scale={[.01, .01, .01]}
           
        type="OBJ" />


    ViroMaterials.createMaterials({
  cake: {
    shininess: 2.0,
    lightingModel: "Lambert",
    diffuseTexture: require('./res/cake/cake_texture_by_xnickixstockx.jpg'),
  },
    plate: {
    shininess: 2.0,
    lightingModel: "Constant",
    diffuseTexture:  require('./res/cake/Marble_ish_by_Iadinea.jpg')
  },
});
//cake end

               

//plane selector code
               <ViroARPlaneSelector minHeight={.1} minWidth={.1}>


               </ViroARPlaneSelector>