// Registering component in Target.js

AFRAME.registerComponent("target-coin", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      //id
      var id = `coin${i}`;

      //position variables
      var posX = Math.random() * 300 + (-100);      
      var posY = Math.random() * 2 + (-1);
      var posZ = Math.random() * 300 + -100;

      var position = { x: posX, y: posY, z: posZ };

      //call the function
      this.createCoins(id, position);
    }
  },

  createCoins: (id, position) => {
    //Get the island element
    var islandEl = document.querySelector("#island-model");

    //creating the coin model entity
    var coinEl = document.createElement("a-entity");

    //Setting multiple attributes
    coinEl.setAttribute("id", id);

    coinEl.setAttribute("position", position);
    coinEl.setAttribute("scale", { x: 500, y: 500, z: 500 });

    //set the gLTF model attribute
    coinEl.setAttribute("gltf-model", "./assets/lowpoly_gold_coin/scene.gltf");

    //set animation mixer of models with animation
    coinEl.setAttribute("animation-mixer", {});
    //set the static body of the physic system
    coinEl.setAttribute("static-body", {
      shape: "sphere",
      sphereRadius: 5,
    });

    coinEl.setAttribute("game", {
      elementId: `#${id}`,
    });
    
    //append the coin entity as the child of the island entity
    islandEl.appendChild(coinEl);
  },
});
