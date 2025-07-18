//priority: 1

  //flowers
  StartupEvents.registry('item', event => {
    //"food"
    event.create('cane_sugar').displayName("Cane Sugar").tooltip("When boiled with other ingredients, the cane breaks down into a sweet juice necessary for making cakes and other sweets. It's commonly found in ingredients stores.")
    event.create('goat_butter').displayName("Goat Butter").tooltip("Butter made from the milk of a domesticated white goat. In addition to being used in dishes like stews and meunière. It's often used when making cakes and other sweets.")
    event.create('goron_spice').displayName("Goron Spice").tooltip("Made from several types of spices, this secret Goron seasoning has been handed down for generations. An initial wave of spiciness paves the way for the sweetness.")
    event.create('monster_extract').displayName("Monster Extract").tooltip("A result of Kilton's research into monsters, this suspicious spice can be used to punch up dishes while cooking. Apparently it can be used to make a number of monstrous meals.")
    event.create('rock_salt').displayName("Rock Salt").tooltip("Crystallized salt from the ancient sea commonly used to season meals. Cannot be eaten in this form.")
    
    //flowers
    event.create('cool_safflina').displayName("Cool Safflina").tooltip("This medicinal plant grows in high elevations, such as mountains in the Hebra or Gerudo regions. When cooked into a dish, it will temporarily increase your heat resistance.")
    event.create('warm_safflina').displayName("Warm Safflina").tooltip("This medicinal plant grows in hot regions, such as the Gerudo Desert. It's warm to the touch and increases your cold resistance when cooked into a dish.")
    event.create('electric_safflina').displayName("Electric Safflina").tooltip("This medicinal plant grows abundantly in the Gerudo Desert. Its peculiar fibers conduct electricity, which will increase your electricity resistance when cooked into a dish.")
    event.create('swift_violet').displayName("Swift Violet").tooltip("This vitality-rich flower blooms mainly on cliffsides. When cooked into a dish, the nourishing compounds increase your movement speed.")
    event.create('thistle').displayName("Mighty Thistle").tooltip("This medicinal plant is known for its sharp thorns and for the fruit it bears. The fruit contains a compound that increases attack power when cooked into a dish.")
    event.create('armoranth').displayName("Armoranth").tooltip("This tough medicinal plant cannot be broken, but it can be cooked. Its durable yet flexible fibers raise your defense when cooked into a dish.")
    event.create('blue_nightshade').displayName("Blue Nightshade").tooltip("A plant that grows in quieter areas of Hyrule. At night, it gives off a soft glow. Cook with it to increase your stealth.")
    event.create('silent_princess').displayName("Silent Princess").tooltip("This lovely flower was said to have been a favorite of the princess of Hyrule. Once feared to have gone extinct, it's recently been spotted growing in the wild.")

    //insects
    event.create('winterwing_butterfly').displayName("Winterwing Butterfly").tooltip("The powdery scales of this butterfly's wings cool the air around it. Watching it flutter around snowflakes is a thing of beauty. Cook it with monster parts for a heat-resistant elixir.")
    event.create('summerwing_butterfly').displayName("Summerwing Butterfly").tooltip("A butterfly found in the woods and plains of warm regions. Its wings absorb the warmth of the sun. Cook it with monster parts to create an elixir that makes you feel warm and fuzzy.")
    event.create('thunderwing_butterfly').displayName("Thunderwing Butterfly").tooltip("This rare butterfly only shows itself when it rains. The organs in its body produce an insulating compound. When made into an elixir, it offers electrical resistance.")
    event.create('smotherwing_butterfly').displayName("Smotherwing Butterfly").tooltip("This rare butterfly lives in volcanic regions. Its body contains a heat-resistant liquid, which can be turned into a topical elixir that offers resistance to flames.")
    event.create('cold_darner').displayName("Cold Darner").tooltip("This dragonfly prefers the cool shade of trees to the warmth of the sun. Its wings disperse heat from its body, which can be cooked into a heat-resistant elixir.")
    event.create('warm_darner').displayName("Warm Darner").tooltip("This dragonfly has a special organ that causes it to sweat profusely. Cook it with monster parts for an elixir that will raise your core temperatures so you can resist the cold.")
    event.create('electric_darner').displayName("Electric Darner").tooltip("This rare dragonfly only appears in the rain. Its wings direct electricity away from its body. Cook it with monster parts for an electricity-resistant elixir.")
    event.create('bladed_rhino_beetle').displayName("Bladed Rhino Beetle").tooltip("This beetle's razor-sharp horns demand that you handle it with care. Boil the horns alongside monster parts to concoct an elixir that will raise your attack power.")
    event.create('rugged_rhino_beetle').displayName("Rugged Rhino Beetle").tooltip("This beetle's hard body resembles armor. When the shell is cooked with monster parts, the resulting elixir boosts your defense.")
    event.create('energetic_rhino_beetle').displayName("Energetic Rhino Beetle").tooltip("This valuable beetle can live up to ten years. When cooked with monster parts, its impressive vitality translates into an elixir that will greatly restore your stamina.")
    event.create('restless_cricket').displayName("Restless Cricket").tooltip("A very energetic cricket. Cook it with monster parts to create a stamina-recovery elixir.")
    event.create('sunset_firefly').displayName("Sunset Firefly").tooltip("These fireflies glow gently in the dark. When cooked with monster parts, the compound that causes it to glow results in an elixir that will allow you to move more quietly.")

    //frogs
    event.create('hot_footed_frog').displayName("Hot-Footed Frog").tooltip("A quick frog that can be found hopping around near water. Cook it with monster parts to draw out its speed-boost effect.")
    event.create('tireless_frog').displayName("Tireless Frog").tooltip("This rare frog only ventures out in the rain. When cooked with monster parts, the elixir it produces will temporarily increase your maximum stamina.")

    //lizards
    event.create('hightail_lizard').displayName("Hightail Lizard").tooltip("A lizard found throughout Hyrule. It's a bit slow to react at times, but if given a chance to escape, it will dart off quickly. Cook it with monster parts for a speed-boosting elixir.")
    event.create('hearty_lizard').displayName("Hearty Lizard").tooltip("This rare lizard lives deep in the forests. It feeds on high-nutrient foods, giving it great vitality. When used to make elixirs, they temporarily increase your maximum hearts.")
    event.create('fireproof_lizard').displayName("Fireproof Lizard").tooltip("This rare lizard can only be found in the Eldin region. Its scales have heat-resistant properties, so when cooked with monster parts, it produces a heat-resistant elixir.")
    
    //monster parts
    event.create("bokoblin_horn").displayName("Bokoblin Horn").tooltip("The severed horn of a Bokoblin, a creature often encountered on the plains of Hyrule. It isn't edible, but it can be tossed into a stew with some critters to make an elixir.")
    event.create("bokoblin_fang").displayName("Bokoblin Fang").tooltip("A tooth obtained from a Bokoblin. It's worn down and not very sharp, but it's still pretty hard. Cook it alongside a critter to make an elixir.")
    event.create("bokoblin_guts").displayName("Bokoblin Guts").tooltip("A rare material obtained by defeating a Bokoblin. It convulses on its own every now and then, which is really creepy, but perhaps it has a use.")
    event.create("moblin_horn").displayName("Moblin Horn").tooltip("This splendid horn once grew atop the head of a Moblin. It can't be used in normal food recipes, but it does have some use as an ingredient in making elixirs.")
    event.create("moblin_fang").displayName("Moblin Fang").tooltip("A sharp fang obtained from a Moblin. It's too hard to be reshaped into a tool, but it can be tossed into a stew with some critters to create elixirs.")
    event.create("moblin_guts").displayName("Moblin Guts").tooltip("This prized ingredient can be obtained from Moblins. Its odor is too pungent for normal food preparation, but stew it with some critters to make elixirs.")
    event.create("lizalfos_horn").displayName("Lizalfos Horn").tooltip("This winding horn once grew atop the head of a Lizalfos. It's too hard to use for cooking, but stores are willing to buy it from you. It can also be used to make elixirs.")
    event.create("lizalfos_talon").displayName("Lizalfos Talon").tooltip("This talon once grew from the elbow of a Lizalfos. You can stew it with critters to make elixirs, but it may have some other uses, as well.")
    event.create("lizalfos_tail").displayName("Lizalfos Tail").tooltip("The severed tail of a Lizalfos. It continues to wriggle even after being separated from its body. That kind of vitality makes it highly valued as an ingredient in elixirs.")
    event.create("icy_lizalfos_tail").displayName("Icy Lizalfos Tail").tooltip("The severed tail of an Ice-Breath Lizalfos. Its hard scales and flesh make it unsuitable for cooking, but it's perfect for making elixirs.")
    event.create("red_lizalfos_tail").displayName("Red Lizalfos Tail").tooltip("The severed tail of a Fire-Breath Lizalfos. Its flavor makes the flesh inedible, but toss it into a stew with some critters, and you'll have yourself a nice elixir.")
    event.create("yellow_lizalfos_tail").displayName("Yellow Lizalfos Tail").tooltip("The severed tail of an Electric Lizalfos. Its powerful stench makes it unappetizing and unfit for cooking, but it's highly valued as an ingredient for elixirs.")
    event.create("lynel_horn").displayName("Lynel Horn").tooltip("The Lynel this horn once grew upon surely misses it. It's exceptionally hard—so hard that most blades cannot scratch it. Throw it into a stew with critters to make elixirs.")
    event.create("lynel_hoof").displayName("Lynel Hoof").tooltip("This rare ingredient can be obtained only from a Lynel's foot. It's larger and heavier than a horse's hoof. It's useful for making elixirs but may have uses beyond that.")
    event.create("lynel_guts").displayName("Lynel Guts").tooltip("This highly sought-after ingredient can only be obtained from a Lynel. It pulses with the vitality of a Lynel, a strength that makes it invaluable as an ingredient for elixirs.")
    event.create("chuchu_jelly").displayName("Chuchu Jelly").tooltip("A gelatinous substance that came from a Chuchu. It's unusable in this state, but applying a bit of elemental stimulation will change its form.")
    event.create("white_chuchu_jelly").displayName("White Chuchu Jelly").tooltip("A jiggly substance that came from an Ice Chuchu. It's cool to the touch, and squeezing it seems to relieve stress. If struck, it will explode in a cold mist.")
    event.create("red_chuchu_jelly").displayName("Red Chuchu Jelly").tooltip("A jiggly substance that normally comes from a Fire Chuchu. It constantly gives off heat. If struck, it will explode in a ball of flame.")
    event.create("yellow_chuchu_jelly").displayName("Yellow Chuchu Jelly").tooltip("A jiggly substance that came from an Electric Chuchu. Electricity pulses through its gelatinous mass. If struck, it will explode in a burst of electric current.")
    event.create("keese_wing").displayName("Keese Wing").tooltip("The wing of a Keese. It's covered with very short, sharp fur. It's not much use by itself, but you can mix it with critters to make something useful.")
    event.create("ice_keese_wing").displayName("Ice Keese Wing").tooltip("A rare Ice Keese wing. Its frozen surface gleams attractively, but its usefulness isn't readily apparent.")
    event.create("fire_keese_wing").displayName("Fire Keese Wing").tooltip("A rare Fire Keese wing. There isn't enough Fire Keese attached to it to burn you, but it does have a slight warmth to it. It can be used as an ingredient for elixirs.")
    event.create("electric_keese_wing").displayName("Electric Keese Wing").tooltip("A rare Electric Keese wing. The part of the Electric Keese that produces electricity is not in its wings, so it won't shock you. Toss it in with some critters to make elixirs.")
    event.create("keese_eyeball").displayName("Keese Eyeball").tooltip("A rare material dropped by a defeated Keese. It's fun to look at, but it doesn't seem to have much use at first glance. But it must be good for something...")
    event.create("octorok_tentacle").displayName("Octorok Tentacle").tooltip("This can only be obtained from an Octorok-type enemy. It's too acidic for cooking, but it's highly valued as an ingredient for elixirs.")
    event.create("octorok_eyeball").displayName("Octorok Eyeball").tooltip("This can only be obtained from an Octorok-type enemy. You can sell it to a store, or you can make elixirs with it, but it may have other uses, as well.")
    event.create("octo_balloon").displayName("Octo Balloon").tooltip("This inflatable Octorok organ has a lot of lift, so attach it to items you want to see float. Hold it in your hands, and then place it on an object to attach it.")
    event.create("molduga_fin").displayName("Molduga Fin").tooltip("A sturdy fin obtained from a Molduga. It can be used to make elixirs, but there may be someone willing to trade for it.")
    event.create("molduga_guts").displayName("Molduga Guts").tooltip("A giant organ obtained from a Molduga. This invaluable ingredient is hard to come by, and its use is shrouded in mystery.")
    event.create("hinox_toenail").displayName("Hinox Toenail").tooltip("A nail obtained from a Hinox. It's as thick as a plate of armor and can be stewed with critters to make elixirs.")
    event.create("hinox_tooth").displayName("Hinox Tooth").tooltip("A tooth obtained from a Hinox. It's so large, it's hard to believe it's a real tooth. It can be used to make elixirs.")
    event.create("hinox_guts").displayName("Hinox Guts").tooltip("A giant, smelly Hinox organ of unknown function. Upon closer inspection, it appears to be quivering, It can be used to make an elixir, but some say it has other uses, as well.")

    //ancient materials
    event.create('screw').displayName("Ancient Screw").tooltip("A screw used in ancient machinery. It's made of an unknown material, and no matter how many times it's turned, its threads never seem to show signs of wear.")
    event.create('spring').displayName("Ancient Spring").tooltip("A spring used in ancient machinery. It is light and buoyant enough to float on water, and no matter how many times it's compressed, it never loses tension.")
    event.create('gear').displayName("Ancient Gear").tooltip("A gear used in ancient machinery. Despite being incredibly old, its build quality is leaps and bounds above anything built using current technology.")
    event.create('shaft').displayName("Ancient Shaft").tooltip("A machine part used in ancient machinery. It's incredibly sturdy, and it's not made of any recognizable material. It may come in handy someday.")
    event.create('core').displayName("Ancient Core").tooltip("This crystal was made using lost technology. At one time it was the power source for ancient machines. This item is very valuable to researchers.")
    event.create('gigant_core').displayName("Giant Ancient Core").tooltip("A giant energy crystal made using lost ancient technology. Cores this large are an extremely rare find. A researcher would probably know how to use this.")
    
    //dragon pars

    event.create("dinraals_scale").displayName("Dinraal's Scale").tooltip("This precious scale fell from the red spirit Dinraal. It emanates a great heat, You can use it in cooking, but eating it seems like a waste.")
    event.create("naydra_scale").displayName("Naydra's Scale").tooltip("This precious scale fell from the blue spirit Naydra. It contains a bitter cold within. You can use it in cooking, but just eating it seems like a waste.")
    event.create("farosh_scale").displayName("Farosh's Scale").tooltip("This precious scale fell from the golden spirit Farosh. It contains powerful electricity within. You can cook it, but eating it seems like a waste.")
    event.create("dinraals_claw").displayName("Dinraal's Claw").tooltip("This valuable claw was plucked from the red spirit Dinraal. It was extremely hot before it was removed. You could sell it to a store, but it must have some other use.")
    event.create("naydra_claw").displayName("Naydra's Claw").tooltip("This valuable claw was plucked from the blue spirit Naydra. It was freezing cold before it was removed. You could sell it, but there must be some other use for it.")
    event.create("farosh_claw").displayName("Farosh's Claw").tooltip("This claw was plucked from the golden spirit Farosh. Its electricity was expelled before it was removed, so it's safe to handle. A store will buy it, but it must have some other use.")
    event.create("shard_of_dinraals_fang").displayName("Shard of Dinraal's Fang").tooltip("This shard fell from the red spirit Dinraal's fang. It's exceptionally hard and therefore impossible to process, but apparently it can be used as a material for something.")
    event.create("shard_of_farosh_fang").displayName("Shard of Farosh's Fang").tooltip("This shard fell from the golden spirit Farosh's fang. It's so hard, hammers bounce right off it, so it's impossible to process. Yet rumors say it does have some use as a material.")
    event.create("shard_of_naydra_fang").displayName("Shard of Naydra's Fang").tooltip("This shard fell from the blue spirit Naydra's fang. It's much harder than any metal, so it's impossible to process. Yet rumors say it can be used as a material for something.")
    event.create("shard_of_dinraals_horn").displayName("Shard of Dinraal's Horn").tooltip("This shard chipped and fell off the red spirit Dinraal. Its horn is said to be the crystallized power of fire itself. It sells for a high price, but rumors say there's some other use for it.")
    event.create("shard_of_farosh_horn").displayName("Shard of Farosh's Horn").tooltip("This shard fell off the golden spirit Farosh. It's said the horn is the crystallized power of electricity itself. It sells for a lot, but there must be some other use for it.")
    event.create("shard_of_naydra_horn").displayName("Shard of Naydra's Horn").tooltip("This shard chipped and fell off the blue spirit Naydra. It's said the horn is the crystallized power of ice itself. It sells for quite a bit, but rumors say it has some other use.")


    //ores
    event.create('luminous_stone').displayName("Luminous Stone").tooltip("kubejs.item.luminous_stone.tooltip")
    /*event.create('').displayName("").tooltip("")
    event.create('').displayName("").tooltip("")
    event.create('').displayName("").tooltip("")
    event.create('').displayName("").tooltip("")
    event.create('').displayName("").tooltip("")
    event.create('').displayName("").tooltip("")
    event.create('').displayName("").tooltip("") */
    
    //other
    event.create('flint').displayName("Flint").tooltip("Strike it with a metallic weapon to generate a spark. The portable fire starter breaks after one use, but it can create a long-lasting flame if you use it near firewood.")
    event.create('wood').displayName("Wood").tooltip("A portable bundle of wood. You can use this to make a campfire if you have something to light it.")
  })
