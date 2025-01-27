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
   e.create('master_sword', 'sword').attackDamageBaseline(30.0).maxDamage(20).displayName("Master Sword").glowing(true).unstackable().rarity(rare).tooltip("The Legendary sword that seals the darkness. It's blade gleams with a sacred luster that can oppose the Calamity. Only a hero chosen by the sword itself may wield it.")
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







   e.create('', 'sword').displayName("").attackDamageBaseline().maxDamage().unstackable().rarity('common').tooltip("")
   



})
//food


StartupEvents.registry('item', event => {
	event.create('softener').displayName(Softener).attackDamageBaseline(20).maxDamage(1).food(food => {
		food
    		.hunger(-3)
    		.saturation(-8)
      		.effect('nausea', 600, 0, 1)
      		.removeEffect('regeneration')
      		.alwaysEdible()//Like golden apples
	})
  }