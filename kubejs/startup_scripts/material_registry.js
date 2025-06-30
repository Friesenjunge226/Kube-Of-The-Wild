//priority: 1

  //flowers
  StartupEvents.registry('item', event => {
    //"food"
    event.create('cane_sugar').displayName("Cane Sugar").tooltip("When boiled with other ingredients, the cane breaks down into a sweet juice necessary for making cakes and other sweets. It's commonly found in ingredients stores.")
    event.create('goat_butter').displayName("Goat Butter").tooltip("Butter made from the milk of a domesticated white goat. In addition to being used in dishes like stews and meunière. It's often used when making cakes and other sweets.")

    event.create('cool_safflina').displayName("Cool Safflina").tooltip("This medicinal plant grows in high elevations, such as mountains in the Hebra or Gerudo regions. When cooked into a dish, it will temporarily increase your heat resistance.")
    event.create('warm_safflina').displayName("Warm Safflina").tooltip("This medicinal plant grows in hot regions, such as the Gerudo Desert. It's warm to the touch and increases your cold resistance when cooked into a dish.")
    event.create('electric_safflina').displayName("Electric Safflina").tooltip("This medicinal plant grows abundantly in the Gerudo Desert. Its peculiar fibers conduct electricity, which will increase your electricity resistance when cooked into a dish.")
    event.create('swift_violet').displayName("Swift Violet").tooltip("This vitality-rich flower blooms mainly on cliffsides. When cooked into a dish, the nourishing compounds increase your movement speed.")
    event.create('thistle').displayName("Mighty Thistle").tooltip("This medicinal plant is known for its sharp thorns and for the fruit it bears. The fruit contains a compound that increases attack power when cooked into a dish.")
    event.create('armoranth').displayName("Armoranth").tooltip("This tough medicinal plant cannot be broken, but it can be cooked. Its durable yet flexible fibers raise your defense when cooked into a dish.")
    event.create('blue_nightshade').displayName("Blue Nightshade").tooltip("A plant that grows in quieter areas of Hyrule. At night, it gives off a soft glow. Cook with it to increase your stealth.")
    event.create('silent_princess').displayName("Silent Princess").tooltip("This lovely flower was said to have been a favorite of the princess of Hyrule. Once feared to have gone extinct, it's recently been spotted growing in the wild.")

  })