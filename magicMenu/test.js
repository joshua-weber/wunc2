const db = {
  restaurants: [
    {
      name: "Magic Menu",
      rating: 5,
      address: "67 Cold Brook Lane, Salt Lake City, UT",
      phone: "123-456-7890",
      menu: [
        {
          info: {
            item: "Pain",
            description:
              "Homemade dutch oven bread that has a crispy crust on the outside and soft airy bread on the inside!",
            price: 5.55,
            ingredients: [
              "white flour",
              "salt",
              "sugar",
              "butter",
              "yeast",
              "water"
            ]
          },
          viro: {
            source: "./res/Pain/Pain.vrx",
            resources: ["./res/Pain/cgaxis_models_08_07_01.jpg"],
            position: [0, -0.1, 0],
            rotation: [100, 20, -185],
            scale: [0.1, 0.1, 0.1]
          }
        },
        {
          info: {
            item: "Banana",
            description:
              "Even though this banana is rendered in AR, it tastes real.",
            price: 0.55,
            ingredients: ["banana"]
          },
          viro: {
            source: "./res/banana/Banana.vrx",
            resources: ["./res/banana/Banana.jpg"],
            position: [-0.4, -0.6, -0.5],
            rotation: [-100, 75, 8],
            scale: [0.001, 0.001, 0.001]
          }
        },
        {
          info: {
            item: "Fried Chicken",
            description:
              "Traditional southern fried chicken that is dusted in flour and fried until crispy, but this delicious variation uses a buttermilk bath for a tangy original twist.",
            price: 7.89,
            ingredients: [
              "chicken",
              "panko",
              "buttermilk",
              "salt",
              "pepper",
              "paprika",
              "eggs",
              "white pepper",
              "cayenne",
              "garlic powder",
              "onion powder",
              "flour",
              "poultry seasoning"
            ]
          },
          viro: {
            source: "./res/chicken/chicken.vrx",
            resources: [
              "./res/chicken/chicken_diffuse.jpg",
              "./res/chicken/chicken_normals.jpg",
              "./res/chicken/chicken_specular.jpg",
              "./res/chicken/chicken_gloss.jpg"
            ],
            position: [0, -0.7, -0.7],
            rotation: [0, 0, 0],
            scale: [-0.01, -0.01, -0.01]
          }
        }
      ]
    },
    {
      name: "Lorem Ipsum Restaurant",
      rating: 0,
      address: "18 Nonexistent Street, Salt Lake City, UT",
      phone: "385-385-33855"
    }
  ]
};

// Console Log Tests:
console.log("Restaurants/Lorem Ipsum");
console.log("Restaurant name: ", db.restaurants[1].name);
console.log("Restaurant rating: ", db.restaurants[1].rating);
console.log("Restaurant address: ", db.restaurants[1].address);
console.log("Restaurant phone: ", db.restaurants[1].phone);
console.log();

console.log("Restaurants/Magic Menu/Banana/Menu/Info");
console.log("Restaurant menu item: ", db.restaurants[0].menu[1].info.item);
console.log("Restaurant menu description: ", db.restaurants[0].menu[1].info.description);
console.log("Restaurant menu price: $", db.restaurants[0].menu[1].info.price);
console.log("Restaurant menu ingredients: ", db.restaurants[0].menu[1].info.ingredients[0]);
console.log();

console.log("Restaurants/Magic Menu/Fried Chicken/Viro");
console.log("Viro source: ", db.restaurants[0].menu[2].viro.source);
console.log("Viro resources: ", db.restaurants[0].menu[2].viro.resources);
console.log("Viro positions: ", db.restaurants[0].menu[2].viro.position);
console.log("Viro rotations: ", db.restaurants[0].menu[2].viro.rotation);
console.log("Viro scale: ", db.restaurants[0].menu[2].viro.scale);
