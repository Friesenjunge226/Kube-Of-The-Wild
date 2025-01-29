ItemEvents.toolTierRegistry(event => {
  event.add('Admin', tier => {
    tier.uses = 99999
    tier.speed = 0.1
    tier.attackDamageBonus = 99999.0
    tier.level = 99999
    tier.enchantmentValue = 0
    tier.repairIngredient = 'minecraft:air'
  })
})

ItemEvents.armorTierRegistry(event => {
  event.add('Admin', tier => {
    tier.durabilityMultiplier = 99999 // Each slot will be multiplied with [13, 15, 16, 11]
    tier.slotProtections = [999, 999, 999, 999] // Slot indicies are [FEET, LEGS, BODY, HEAD] 
    tier.enchantmentValue = 99999
    tier.equipSound = 'minecraft:item.armor.equip_nerherite'
    tier.repairIngredient = 'minecraft:air'
    tier.toughness = 99999.0 // diamond has 2.0, netherite 3.0
    tier.knockbackResistance = 99999.0
  })
})


StartupEvents.registry('item', e => {
  //Admin tools
   e.create('ban_hammer').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
   e.create('admin_sword', 'sword').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
   e.create('admin_axe', 'axe').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
   e.create('admin_pickaxe', 'pickaxe').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
   e.create('admin_shovel', 'shovel').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
   e.create('admin_hoe', 'hoe').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
  //admin armor
   e.create('admin_helmet', 'helmet').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
   e.create('admin_chestplate', 'chestplate').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
   e.create('admin_leggings', 'leggings').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
   e.create('admin_boots', 'boots').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
  //comunity weapons
   e.create('master_sword', 'sword').attackDamageBaseline(30.0).maxDamage(20).displayName("Master Sword").glowing(true).unstackable().rarity('rare').tooltip("The Legendary sword that seals the darkness. It's blade gleams with a sacred luster that can oppose the Calamity. Only a hero chosen by the sword itself may wield it.")
   e.create('tree_sword', 'sword').displayName("Tree Branch").attackDamageBaseline(2.0).maxDamage(4).unstackable().rarity('common').tooltip("Wooden branches such as this are pretty common, but it's urprisingly well-balanced. It doesn't do much damage but can serve as a weapon in a pinch.")
   e.create('traveller_sword', 'sword').displayName("Traveller's Sword").attackDamageBaseline(5.0).maxDamage(20).unstackable().rarity('common').tooltip("A very common sword often kept by travelers to fend off small beasts. It's fairly durable, but a bit unreliable against monsters.")
   e.create('soldier_bsword','sword').displayName("Soldier's Broadsword").attackDamageBaseline(14.0).maxDamage(25).unstackable().rarity('common').tooltip("A Sword brandished by the soldiers who once protected Hyrule Castle. Its durable blade is well tuned for slaying monsters.")
   e.create('knights_bsword', 'sword').displayName("Knight's Broadsword").attackDamageBaseline(26.0).maxDamage(27).unstackable().rarity('common').tooltip("Knights of Hyrule once carried this sword. These days it's the weapon of choice for seasoned adventurers thanks to its ease of use and high attack power.")
   e.create('royal_bsword', 'sword').displayName("Royal Broadsword").attackDamageBaseline(36.0).maxDamage(36).unstackable().rarity('uncommon').tooltip("	The Hyrulean royal family would award this sword to knights who achieved remarkable feats. A sword that balances strength and beauty as elegantly as this one is a rare find.")
   e.create('forest_dweller_sword', 'sword').displayName("Forest Dweller's Sword").attackDamageBaseline(22).maxDamage(27).unstackable().rarity('uncommon').tooltip("Koroks made this sword for Hylians. It's made of wood, so it isn't the best choice for head-on attacks. Its original intent was likely clearing vines to forge paths through forests.")
   e.create('zora_sword', 'sword').displayName("Zora sword").attackDamageBaseline(15.0).maxDamage(27).unstackable().rarity('common').tooltip("The ornamentation that adorns this blade is a traditional Zora design. It's forged from a very durable and rust-proof metal.")
   e.create('feathered_sword', 'sword').displayName("Feathered Edge").attackDamageBaseline(15.0).maxDamage(27).unstackable().rarity('common').tooltip("Rito craftsmen forged this lightweight, double-edge sword so Rito warriors could soar into battle unhindered by its weight.")
   e.create('gerudo_sword', 'sword').displayName("Gerudo Scimitar").attackDamageBaseline(16.0).maxDamage(23).unstackable().rarity('common').tooltip("This common sword is often carried by Gerudo women for self-defense. Its short, curved blade is easily recognized.")
   e.create('moonlight_sword', 'sword').displayName("Moonlight Scimitar").attackDamageBaseline(25.0).maxDamage(32).unstackable().rarity('common').tooltip("Delicate Gerudo carvings decorate this curved sword. The engraved blade is extremely sharp. Apparently it once served ceremonial purposes in festivals.")
   e.create('seven_sword', 'sword').displayName("Scimitar of the Seven").attackDamageBaseline(32.0).maxDamage(60).unstackable().rarity('common').tooltip("A famous sword once beloved by the Gerudo Champion Urbosa. It is said that when Urbosa swung this sword in battle, her movements resembled a beautiful dance.")
   e.create('eightfold_sword', 'sword').displayName("Eightfold Blade").attackDamageBaseline(15.0).maxDamage(26).unstackable().rarity('common').tooltip("A single-edged sword traditional to the Sheikah tribe. Forged using ancient technology it just may be among the sharpest conventional weapons ever made.")
   e.create('ancient_ssword', 'sword').displayName("Ancient Short Sword").attackDamageBaseline(40.0).maxDamage(54).unstackable().rarity('common').tooltip("The blade of this sword was made using an ancient power lost to this modern age. Its blade appears only when drawn, and its cutting power surpasses metal swords.")
   e.create('rusty_bsword', 'sword').displayName("Rusty Broadsword").attackDamageBaseline(6.0).maxDamage(8).unstackable().rarity('common').tooltip("A rusty sword used ages ago by a skilled swordsman. It can do some damage in the right hands but also breaks quickly.")
   e.create('guard_sword', 'sword').displayName("Royal Guard's Sword").attackDamageBaseline(48.0).maxDamage(14).unstackable().rarity('common').tooltip("A Sheikah-made replica of the sword that seals the darkness. It was made with ancient technology to oppose the Great Calamity, but its low durability made it inefficient.")
   e.create('flame_sword', 'sword').displayName("Flameblade").attackDamageBaseline(24.0).maxDamage(36).unstackable().rarity('common').tooltip("This magical sword was forged in the lava of Death Mountain. It leaves white-hot flames in its wake when the blade glows red.")
   e.create('frost_sword', 'sword').displayName("Frostblade").attackDamageBaseline(20.0).maxDamage(30).unstackable().rarity('common').tooltip("A magical sword forged in the frigid mountains of the Hebra region. When the blade glows blue, enemies struck by it will become frozen.")
   e.create('thunder_sword', 'sword').displayName("Thunderblade").attackDamageBaseline(22.0).maxDamage(36).unstackable().rarity('common').tooltip("A magical sword forged and refined by lightning from the Hyrule Hills. When the blade shines with a golden light, it will electrocute enemies struck by it.")
   e.create('goddess_sword', 'sword').displayName("Goddess Sword").attackDamageBaseline(28.0).maxDamage(45).unstackable().rarity('rare').tooltip("A sword said to have once belonged to a hero from the sky. Its blade houses the fire of the Goddess. When wielded, a strange yet heavenly breeze kicks up around you.")
   e.create('8bit_sword', 'sword').displayName("Sword").attackDamageBaseline(22.0).maxDamage(27).unstackable().rarity('rare').tooltip("A sword once wielded by a hero in an ancient age. When grasped, a strange sense of nostalgia washes over you. Take it when going alone would otherwise be dangerous.")
   e.create('boko_sword', 'sword').displayName("Boko Club").attackDamageBaseline(4.0).maxDamage(8).unstackable().rarity('common').tooltip("A crude Bokoblin club made to clobber small prey. It's essentially a stick, so its durability is low.")
   e.create('spiked_boko_sword', 'sword').displayName("Spiked Boko Club").attackDamageBaseline(12.0).maxDamage(14).unstackable().rarity('common').tooltip("A reinforced Bokoblin club made to maximize damage. The sharpened bones jabbed into it make it a brutal weapon")
   e.create('bone_boko_sword', 'sword').displayName("Dragonbone Boko Club").attackDamageBaseline(24.0).maxDamage(18).unstackable().rarity('common').tooltip("This Bokoblin club has been reinforced with fossilized bones to maximize clobbering potential. Only the brawniest of Bokoblins can manage its immense weight.")
   e.create('guardian_sword', 'sword').displayName("Guardian Sword").attackDamageBaseline(20.0).maxDamage(17).unstackable().rarity('common').tooltip("A sword often wielded by Guardian Scouts. Its blue energy blade is a product of ancient technology. It's not very durable.")
   e.create('guardian_sword+', 'sword').displayName("Guardian Sword+").attackDamageBaseline(30.0).maxDamage(26).unstackable().rarity('common').tooltip("This Guardian sword has enhanced power over the standard model. Its cutting capabilities are improved, and its durability has seen a slight uptick.")
   e.create('guardian_sword++', 'sword').displayName("Guardian Sword++").attackDamageBaseline(40.0).maxDamage(32).unstackable().rarity('common').tooltip("The abilities of this Guardian sword have been boosted to the maximum, as evidenced by its increase in size. It slices through armor like a hot knife through butter!")
   e.create('lynel_sword', 'sword').displayName("Lynel Sword").attackDamageBaseline(24.0).maxDamage(26).unstackable().rarity('common').tooltip("This Lynel-made sword was designed with smashing in mind rather than slicing. It's on the heavy side compared to what Hylians are used to, but it's very strong.")
   e.create('mighty_lynel_sword', 'sword').displayName("Mighty Lynel Sword").attackDamageBaseline(36.0).maxDamage(32).unstackable().rarity('common').tooltip("This Lynel-made sword boasts more blades and more attack power. A skilled Lynel can draw this sword simply in passing and still cut a foe in two.")
   e.create('savage_lynel_sword', 'sword').displayName("Savage Lynel Sword").attackDamageBaseline(58.0).maxDamage(41).unstackable().rarity('common').tooltip("A brutal sword carried by white-haired Lynels. The savage blades are strong enough to cut down any foe, no matter how strong.")
   e.create('vicious_sword', 'sword').displayName("Vicious Sickle").attackDamageBaseline(16.0).maxDamage(14).unstackable().rarity('common').tooltip("A grim weapon favored by the Yiga. The half-moon shape of the blade allows for the rapid delivery of fatal wounds and serves as a symbol of their terror. Its durability is low.")
   e.create('demon_sword', 'sword').displayName("Demon Carver").attackDamageBaseline(40.0).maxDamage(25).unstackable().rarity('common').tooltip("This lethal weapon is forged by the Yiga. Its unique shape facilitates the sound dispatching of any target and strikes fear into the hearts of all who see it.")
   e.create('boko_arm_sword', 'sword').displayName("Bokoblin Arm").attackDamageBaseline(5.0).maxDamage(5).unstackable().rarity('common').tooltip("A skeletal arm that keeps moving even after it's severed from its body. It's kind of gross to strap it to your back, but it'll do in a pinch. It's old and fragile, so it's quick to break.")
   e.create('liza_arm_sword', 'sword').displayName("Lizalfos Arm").attackDamageBaseline(12.0).maxDamage(8).unstackable().rarity('common').tooltip("The arm of a Stalizalfos that continues to struggle even in death. It can be used as a weapon, but it's very brittle. You can feel it wiggling when you strap it to your back...")
   e.create('farm_hoe', 'sword').displayName("Farming Hoe").attackDamageBaseline(16.0).maxDamage(6).unstackable().rarity('common').tooltip("A farming tool primarily used for tilling fields. Its fine craftsmanship is sturdy enough to withstand backbreaking fieldwork, but its battle applications are untested.")
   e.create('oar', 'sword').displayName("Boat Oar").attackDamageBaseline(14.0).maxDamage(8).unstackable().rarity('common').tooltip("Made for paddling boats, but it was made sturdy enough to fight strong currents. Maybe it's useful for self-defense in a pinch.")
   e.create('woodcutters_axe', 'axe').displayName("Woodcutter's Axe").attackDamageBaseline(3.0).maxDamage(47).unstackable().rarity('common').tooltip("A woodcutter's tool of choice for felling trees. Its formidable weight and uneven balancing make it a slow, inefficient weapon.")
   e.create('double_axe', 'axe').displayName("Double Axe").attackDamageBaseline(18.0).maxDamage(52).unstackable().rarity('common').tooltip("This double-sided axe was designed with fighting in mind. It's a bit unwieldy, so it requires a well-practiced technique to use efficiently.")
   e.create('iron_sledgehammer', 'sword').displayName("Iron Sledgehammer").attackDamageBaseline(12.0).maxDamage(40).unstackable().rarity('common').tooltip("This large iron sledgehammer was originally used for mining, but it works reasonably well as a weapon too.")
   e.create('traveller_csword', 'sword').displayName("Traveller's Claymore").attackDamageBaseline(10.0).maxDamage(20).unstackable().rarity('common').tooltip("A basic two-handed sword often wielded by aspiring adventurers. Its immense weight can knock enemies' shields right out of their hands.")
   e.create('soldier_csword', 'sword').displayName("Soldier's Claymore").attackDamageBaseline(20.0).maxDamage(25).unstackable().rarity('common').tooltip("A two-handed sword designed for combat. It's heavy and hard to use but has decent build quality and durability.")
   e.create('knight_csword', 'sword').displayName("Knight's Claymore").attackDamageBaseline(38.0).maxDamage(30).unstackable().rarity('common').tooltip("Only the most confident of Hyrule Castle's knights carried this two-handed sword. Its cutting edge is finely honed.")
   e.create('royal_csword', 'sword').displayName("Royal Claymore").attackDamageBaseline(52.0).maxDamage(40).unstackable().rarity('common').tooltip("A two-handed sword issued to the Hyrulean royal family's immediate guard detail. Its powerful strikes are said to crush an opponent's body and resolve alike.")
   e.create('silver_lsword', 'sword').displayName("Silver Longsword").attackDamageBaseline(22.0).maxDamage(30).unstackable().rarity('common').tooltip("Although the Zora prefer spears to swords, they made this two-handed weapon using a special metal. It found popularity among Hylians for its unique design.")
   e.create('cobble_crusher', 'sword').displayName("Cobble Crusher").attackDamageBaseline(15.0).maxDamage(30).unstackable().rarity('common').tooltip("A Goron-made two-handed weapon. It's made from thick, hard metal and has no cutting edge, so it relies on its sheer weight to crush all opponents.")
   e.create('stone_smasher', 'sword').displayName("Stone Smasher").attackDamageBaseline(42.0).maxDamage(40).unstackable().rarity('common').tooltip("A two-handed weapon forged from a rare metal mined in Goron City. Its center of gravity is at its tip, so it uses centrifugal force and its sheer weight to smash opponents flat.")
   e.create('boulder_breaker', 'sword').displayName("Boulder Breaker").attackDamageBaseline(60.0).maxDamage(60).unstackable().rarity('common').tooltip("This two-handed weapon was once wielded by the Goron Champion Daruk. Daruk made swinging it around look easy, but a Hylian would need an immense amount of strength.")
   e.create('golden_csword', 'sword').displayName("Golden Claymore").attackDamageBaseline(28.0).maxDamage(30).unstackable().rarity('common').tooltip("Only the most talented Gerudo sword fighters carry this two-handed sword. It's actually much lighter than it appears and is surprisingly easy to wield.")
   e.create('eight_lsword', 'sword').displayName("Eightfold Longblade").attackDamageBaseline(32.0).maxDamage(25).unstackable().rarity('common').tooltip("A single-edged sword seldom seen in Hyrule. This weapon is passed down through the Sheikah tribe and has an astonishingly sharp edge ideal for slicing.")
   e.create('duality_sword', 'sword').displayName("Edge of Duality").attackDamageBaseline(50.0).maxDamage(35).unstackable().rarity('common').tooltip("A curious double-edged sword crafted using Sheikah technology. It was originally made for Hyrulean knights unfamiliar with single-edged blades.")
   e.create('ancient_bladesaw', 'sword').displayName("Ancient Bladesaw").attackDamageBaseline(55.0).maxDamage(50).unstackable().rarity('common').tooltip("This two-handed sword was forged using ancient Sheikah technology. Its unique rotating blades give it impressive cutting power that will slice enemies to shreds.")
   e.create('rusty_csword', 'sword').displayName("Rusty Claymore").attackDamageBaseline(12.0).maxDamage(10).unstackable().rarity('common').tooltip("A two-handed sword not properly cared for. Although it can be used as a weapon, its durability is very low. Don't expect it to last for more than a few strikes.")
   e.create('royalg_csword', 'sword').displayName("Royal Guard's Claymore").attackDamageBaseline(72.0).maxDamage(15).unstackable().rarity('common').tooltip("The Sheikah used the very essence of ancient technology to forge this greatsword. It was designed to oppose the Calamity, but its low durability made it impractical in battle.")
   e.create('gflameblade', 'sword').displayName("Great Flameblade").attackDamageBaseline(34.0).maxDamage(50).unstackable().rarity('common').tooltip("This magic-infused greatsword was forged in the fires of Death Mountain by Goron smiths in an ancient age. Attack when the blade glows red to expel flames.")
   e.create('gfrostblade', 'sword').displayName("Great Frostblade").attackDamageBaseline(30.0).maxDamage(40).unstackable().rarity('common').tooltip("This magic-infused greatsword was forged by smelting ore found in the Hebra Mountains' permafrost. Attack when the blade glows blue to expel freezing air.")
   e.create('gthunderblade', 'sword').displayName("Great Thunderblade").attackDamageBaseline(32.0).maxDamage(50).unstackable().rarity('common').tooltip("This magic-infused greatsword was forged by the Hyrulean royal family using lightning from the Hyrule Hills. Attack when the blade glows golden to expel lightning.")
   e.create('six_sword', 'sword').displayName("Sword of the Six Sages").attackDamageBaseline(48.0).maxDamage(50).unstackable().rarity('rare').tooltip("The Six Sages are said to have forged this longsword to seal a demon king in the world where the hero fought against the beasts of twilight. The blade shines with a holy luster.")
   e.create('biggoron_sword', 'sword').displayName("Biggoron's Sword").attackDamageBaseline(50.0).maxDamage(60).unstackable().rarity('rare').tooltip("A legendary greatsword forged by a Goron craftsman for a hero who traveled through time. The exceptionally sharp cutting edge is a testament to the craftsman's mastery.")
   e.create('fierce_deity_sword', 'sword').displayName("Fierce Deiety Sword").attackDamageBaseline(60.0).maxDamage(35).unstackable().rarity('rare').tooltip("A peculiar greatsword allegedly used by a hero from a world in which the moon threatened to fall. It slashes wildly in battle as if possessed by a fierce deity.")
   e.create('boko_bat', 'sword').displayName("Boko Bat").attackDamageBaseline(6.0).maxDamage(12).unstackable().rarity('common').tooltip("A clunky club made by a Bokoblin. If you swing it at an enemy's shield, it may be able to knock the shield out of your foe's hand.")
   e.create('sboko_bat', 'sword').displayName("Spiked Boko Bat").attackDamageBaseline(18.0).maxDamage(12).unstackable().rarity('common').tooltip("After much consideration by Bokoblins on how to improve the Boko bat, they simply attached sharp spikes to it. A skilled fighter can cause immense damage with this.")
   e.create('dbone_boko_bat', 'sword').displayName("Dragonbone Boko Bat").attackDamageBaseline(36.0).maxDamage(16).unstackable().rarity('common').tooltip("Used by only the toughest Bokoblin warriors, this Boko bat has been fortified by fossilized bone. It boasts a high durability and is strong enough to beat down powerful foes.")
   e.create('mob_club', 'sword').displayName("Moblin Club").attackDamageBaseline(9.0).maxDamage(12).unstackable().rarity('common').tooltip("A crudely fashioned club favored by Moblins. It's carved from a sturdy tree but is sloppily made, so it breaks easily.")
   e.create('smob_club', 'sword').displayName("Spiked Moblin Club").attackDamageBaseline(27.0).maxDamage(18).unstackable().rarity('common').tooltip("Animal bone has been affixed to this Moblin club to greatly improve its damage.")
   e.create('dbone_mob_club', 'sword').displayName("Dragonbone Moblin Club").attackDamageBaseline(45.0).maxDamage(24).unstackable().rarity('common').tooltip("The bone of an ancient beast has been affixed to this Moblin club, further increasing its damage. Moblins carrying these in battle are particularly dangerous.")





   e.create('', 'sword').displayName("").attackDamageBaseline(.0).maxDamage().unstackable().rarity('common').tooltip("")
   



})

//food
StartupEvents.registry('item', event => {
	event.create('softener').displayName("Softener").attackDamageBaseline(20).maxDamage(1).tooltip("This is your fault, Emil").food(food => {food.hunger(-3).saturation(-8).effect('nausea', 600, 0, 1).removeEffect('regeneration').alwaysEdible()})



  })