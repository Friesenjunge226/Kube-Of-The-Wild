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
  //Admin tools and weapons
  e.create('Ban_Hammer').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
  e.create('Admin_Sword', 'sword').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
  e.create('Admin_Axe', 'axe').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
  e.create('Admin_Pickaxe', 'pickaxe').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
  e.create('Admin_Shovel', 'shovel').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
  e.create('Admin_Hoe', 'hoe').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
  //Admin Armor
  e.create('Admin_Helmet', 'helmet').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
  e.create('Admin_Chestplate', 'chestplate').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
  e.create('Admin_Leggings', 'leggings').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)
  e.create('Admin_Boots', 'boots').tier('Admin').unstackable().rarity('rare').tooltip(oooh. Shiny)

  //community weapons
  e.create('Master_Sword', 'sword').attackDamageBaseline(30.0).maxDamage(191).displayName("Master Sword").glowing(true).unstackable().rarity(rare)
  e.create('Travellers')
  //food

})
