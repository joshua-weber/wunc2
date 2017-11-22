            <Viro3DObject
            source={require('./res/chicken/chicken.vrx')}
            resources={[require('./res/chicken/chicken_diffuse.jpg'),
                        require('./res/chicken/chicken_normals.jpg'),
                        require('./res/chicken/chicken_specular.jpg'),
                        require('./res/chicken/chicken_gloss.jpg')]}
            position={[0, -.7, -.7]}
            scale={[-0.01, -.01, -.01]}
            
            type="VRX" />

            <Viro3DObject
            source={require('./res/banana/Banana.vrx')}
            resources={[require('./res/banana/Banana.jpg')]}
            position={[-.4, -.6, -.5]}
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
    source={require("./res/pizza/WC_Pizza.vrx")}
    highAccuracyGaze={true}
    position={[0, 0, 0]}
    scale={[.01, .01, .01]}
    rotation={[0, 0, 0]}
    type="VRX"/>
    
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
  
    position={[0, 0, 0]}
    scale={[.0002, .0002, .0002]}
    rotation={[0, 0, 0]}
    type="VRX"/>


               <ViroARPlaneSelector minHeight={.1} minWidth={.1}>


               </ViroARPlaneSelector>