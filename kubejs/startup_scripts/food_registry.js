//priority: 1

StartupEvents.registry('item', event => {
	event.create('softener').displayName("Softener").maxDamage(1).tooltip("This is your fault, Emil").food(food => {food.hunger(-3).saturation(-8).effect('nausea', 600, 0, 1).removeEffect('regeneration').alwaysEdible()})
    event.create('').displayName("").tooltip("").food(food => {food.hunger().saturation()})
    event.create('').displayName("").tooltip("").food(food => {food.hunger().saturation()})

  })
