//priority: 1

StartupEvents.registry('item', event => {
	//custom
  event.create('softener').displayName("Softener").maxDamage(1).tooltip("This is your fault, Emil").food(food => {food.hunger(-3).saturation(-8).effect('nausea', 600, 0, 1).removeEffect('regeneration').alwaysEdible()})
  //fruit
  event.create('apple').displayName("Apple").tooltip("A common fruit found on trees all around Hyrule. Eat it fresh, or cook it to increase its effect.").food(food => {food.hunger().saturation()})
  event.create('palm_fruit').displayName("Palm Fruit").tooltip("Fruit from palm trees that grow near the ocean. It doesn't offer any special effects but will increase your heart recovery when used as an ingredient.").food(food => {food.hunger().saturation()})
  event.create('wildberry').displayName("Wildberry").tooltip("A fruit that grows in cold, snowy regions known for its tangy, sweet flavor. It doesn't offer any special effects, but it's a popular cooking ingredient").food(food => {food.hunger().saturation()})
  event.create('durian').displayName("Hearty Durian").tooltip("This fruit's odor earned it the nickname 'king of fruits'. It offers immense restorative power; dishes cooked with it will temporarily increase your maximum hearts.").food(food => {food.hunger().saturation()})
  event.create('melon').displayName("Hydromelon").tooltip("This resilient fruit can flourish even in the heat of the desert. The hydrating liquid inside provides a cooling effect that, when cooked, increases your heat resistance.").food(food => {food.hunger().saturation()})
  event.create('pepper').displayName("Spicy Pepper").tooltip("This pepper is exploding with spice. Cook with it to create dishes that will raise your body temperature and help you withstand the cold.").food(food => {food.hunger().saturation()})
  event.create('voltfruit').displayName("Voltfruit").tooltip("Cacti found in the Gerudo Desert bear this sweet fruit. It's naturally insulated, so when cooked into a dish, it provides resistance against electricity.").food(food => {food.hunger().saturation()})
  event.create('lotus_seeds').displayName("Fleet-Lotus Seeds").tooltip("The plant that bears these seeds grows near deep water. The roots draw nutrients from the water, which boosts your movement speed when the seeds are cooked into a dish.").food(food => {food.hunger().saturation()})
  event.create('bananas').displayName("Mighty Bananas").tooltip("This fruit grows mainly in tropical forests of the Faron region. When it's used as an ingredient, the resulting dish will temporarily increase your attack power.").food(food => {food.hunger().saturation()})
  //nut
  event.create('acorn').displayName("Acorn").tooltip("This fruit grows mainly in tropical forests of the Faron region. When it's used as an ingredient, the resulting dish will temporarily increase your attack power.").food(food => {food.hunger().saturation()})
  event.create('tree_nut').displayName("Chickaloo Tree Nut").tooltip("Small birds love this nut. You can eat it raw for a minor effect, but it can also be added as a spice to other recipes.").food(food => {food.hunger().saturation()})
  //mushrooms
  event.create('hylian_shroom').displayName("Hylian Shroom").tooltip("A common mushroom found near trees around Hyrule. Eat it to restore half a heart.").food(food => {food.hunger().saturation()})
  event.create('').displayName("").tooltip("").food(food => {food.hunger().saturation()})

  })
