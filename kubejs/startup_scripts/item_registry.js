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
   e.create('tree_branch', 'sword').displayName("Tree Branch").attackDamageBaseline(2.0).maxDamage(4).unstackable().rarity('common').tooltip("Wooden branches such as this are pretty common, but it's urprisingly well-balanced. It doesn't do much damage but can serve as a weapon in a pinch.")
   e.create('traveller_sword', 'sword').displayName("Traveller's Sword").attackDamageBaseline(5.0).maxDamage(20).unstackable().rarity('common').tooltip("A very common sword often kept by travelers to fend off small beasts. It's fairly durable, but a bit unreliable against monsters.")
   e.create('soldier_broadsword','sword').displayName("Soldier's Broadsword").attackDamageBaseline(14.0).maxDamage(25).unstackable().rarity('common').tooltip("A Sword brandished by the soldiers who once protected Hyrule Castle. Its durable blade is well tuned for slaying monsters.")
   e.create('')






})
