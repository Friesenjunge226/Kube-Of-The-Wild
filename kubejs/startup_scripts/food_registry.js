//priority: 1

StartupEvents.registry('item', event => {
	//custom
  event.create('softener').displayName("Softener").maxDamage(1).tooltip("This is your fault, Emil").food(food => {food.hunger(0).saturation(-8).effect('nausea', 600, 0, 1).removeEffect('regeneration').alwaysEdible()})
  //fruit
  event.create('apple').displayName("Apple").tooltip("A common fruit found on trees all around Hyrule. Eat it fresh, or cook it to increase its effect.").food(food => {food.hunger().saturation()})
  event.create('palm_fruit').displayName("Palm Fruit").tooltip("Fruit from palm trees that grow near the ocean. It doesn't offer any special effects but will increase your heart recovery when used as an ingredient.").food(food => {food.hunger(1).saturation(0)})
  event.create('wildberry').displayName("Wildberry").tooltip("A fruit that grows in cold, snowy regions known for its tangy, sweet flavor. It doesn't offer any special effects, but it's a popular cooking ingredient").food(food => {food.hunger(2).saturation(0)})
  event.create('durian').displayName("Hearty Durian").tooltip("This fruit's odor earned it the nickname 'king of fruits'. It offers immense restorative power; dishes cooked with it will temporarily increase your maximum hearts.").food(food => {food.hunger(1).saturation(0)})
  event.create('melon').displayName("Hydromelon").tooltip("This resilient fruit can flourish even in the heat of the desert. The hydrating liquid inside provides a cooling effect that, when cooked, increases your heat resistance.").food(food => {food.hunger(6).saturation(2)})
  event.create('pepper').displayName("Spicy Pepper").tooltip("This pepper is exploding with spice. Cook with it to create dishes that will raise your body temperature and help you withstand the cold.").food(food => {food.hunger(1).saturation(0)})
  event.create('voltfruit').displayName("Voltfruit").tooltip("Cacti found in the Gerudo Desert bear this sweet fruit. It's naturally insulated, so when cooked into a dish, it provides resistance against electricity.").food(food => {food.hunger(1).saturation(0)})
  event.create('lotus_seeds').displayName("Fleet-Lotus Seeds").tooltip("The plant that bears these seeds grows near deep water. The roots draw nutrients from the water, which boosts your movement speed when the seeds are cooked into a dish.").food(food => {food.hunger(1).saturation(0)})
  event.create('bananas').displayName("Mighty Bananas").tooltip("This fruit grows mainly in tropical forests of the Faron region. When it's used as an ingredient, the resulting dish will temporarily increase your attack power.").food(food => {food.hunger(1).saturation(0)})
  //nut
  event.create('acorn').displayName("Acorn").tooltip("This fruit grows mainly in tropical forests of the Faron region. When it's used as an ingredient, the resulting dish will temporarily increase your attack power.").food(food => {food.hunger(1).saturation(0)})
  event.create('tree_nut').displayName("Chickaloo Tree Nut").tooltip("Small birds love this nut. You can eat it raw for a minor effect, but it can also be added as a spice to other recipes.").food(food => {food.hunger(1).saturation(0)})
  //mushrooms
  event.create('hylian_shroom').displayName("Hylian Shroom").tooltip("A common mushroom found near trees around Hyrule. Eat it to restore half a heart.").food(food => {food.hunger(1).saturation(0)})
  event.create('endura_shroom').displayName("Endura Shroom").tooltip("A rare yellowish-orange mushroom. Cook it before eating to temporarily increase your stamina limit.").food(food => {food.hunger(2).saturation(0)})
  event.create('stamella').displayName("Stamella Shroom").tooltip("A green mushroom that grows near trees in the forest. It's chock-full of natural energy. Cook it to release its stamina-restoration properties.").food(food => {food.hunger(2).saturation()})
  event.create('truffel').displayName("Hearty Truffel").tooltip("This rare mushroom has a rich scent. Cook it before eating to temporarily increase your maximum hearts.").rarity("uncommon").food(food => {food.hunger(4).saturation(1)})
  event.create('big_truffel').displayName("Big Hearty Truffel").tooltip("Years of going unpicked have allowed this hearty truffle to grow quite large. It's chock-full of nutrients. When cooked into a dish, it temporarily increases your maximum hearts.").rarity("uncommon").food(food => {food.hunger(6).saturation(2)})
  event.create('chill_shroom').displayName("Chillshroom").tooltip("Often found at the base of pine trees in cold climates, these mushrooms are cool to the touch and can be used to cook dishes that allow you to stay cool even in arid regions.").food(food => {food.hunger(1).saturation(0)})
  event.create('sunshroom').displayName("Sunshroom").tooltip("A bright red mushroom that grows in hot climates. Imbued with the power of heat, they can be used to cook dishes that will allow you to endure the bitter cold.").food(food => {food.hunger(1).saturation(0)})
  event.create('zapshroom').displayName("Zapshroom").tooltip("This mushroom grows wild in the Gerudo region. The cap is naturally insulated, so when used in cooking, it will offer protection against electricity.").food(food => {food.hunger(1).saturation(0)})
  event.create('rushroom').displayName("Rushroom").tooltip("A mushroom that can grow almost anywhere but prefers ceilings and sheer cliffs. Cook it before eating to temporarily increase your movement speed.").food(food => {food.hunger(1).saturation(0)})
  event.create('razorshroom').displayName("Razorshroom").tooltip("This mushroom is known for the natural slice in its cap. Eating it fosters your competitive spirit. Use it when cooking to prepare a dish that will increase your strength.").food(food => {food.hunger(1).saturation(0)})
  event.create('ironshroom').displayName("Ironshroom").tooltip("The cap of this mushroom is very hard. Use it when cooking to prepare a dish that increases your defense.").food(food => {food.hunger().saturation()})
  event.create('silent_shroom').displayName("Silent Shroom").tooltip("A strange mushroom that glows quietly in the forest at night. Cooking it into a dish unlocks the nutrients in its cap, resulting in a meal that will allow you to move stealthily.").food(food => {food.hunger(1).saturation(0)})
  //plant
  event.create('hyrule_herb').displayName("Hyrule Herb").tooltip("This healthy herb grows abundantly in the plains of Hyrule. Cook it before eating to increase the number of hearts it restores.").food(food => {food.hunger(2).saturation(0)})
  //vegetables
  event.create('hearty_radish').displayName("Hearty Radish").tooltip("A rare radish that grows best in sunny plains. Cook it before eating to temporarily increase your maximum hearts.").food(food => {food.hunger(5).saturation(1)})
  event.create('big_hearty_radish').displayName("Big Hearty Radish").tooltip("This hearty radish has grown much larger than the average radish. It's rich in analeptic compounds that, when cooked into a dish, temporarily increase your maximum hearts.").food(food => {food.hunger(8).saturation(3)})
  event.create('swift_carrot').displayName("Swift Carrot").tooltip("This carrot is cultivated extensively in Kakariko Village. It strengthens the legs and hips when cooked into a dish, which helps increase your movement speed.").food(food => {food.hunger(1).saturation(0)})
  event.create('endura_carrot').displayName("Endura Carrot").tooltip("Highly valued as a medicinal plant, this carrot contains large amounts of nourishing energy. When cooked into a dish, it boosts your stamina beyond its maximum limit.").food(food => {food.hunger(4).saturation(1)})
  event.create('pumpkin').displayName("Fortified Pumpkin").tooltip("An extremely tough pumpkin raised in village fields. When cooked, that toughness manifests itself by considerably upping defense.").food(food => {food.hunger(1).saturation(0)})
  //meats
  event.create('raw_meat').displayName("Raw Meat").tooltip("Meat obtained from animals in plains and forests. You can eat it raw, but cooking it will make it more delicious and nutritious.").food(food => {food.hunger(2).saturation(0)})
  event.create('raw_prime_meat').displayName("Raw Prime Meat").tooltip("A fresh, high-quality piece of animal meat. This stuff isn't easy to come by, so savor it. Cook it to recover more hearts.").food(food => {food.hunger(3).saturation(1)})
  event.create('raw_gourmet_meat').displayName("Raw Gourmet Meat").tooltip("This prized cut of meat is usually from a large animal. Any connoisseur would rank this tender, juicy cut of meat 'gourmet'. Expect an exquisite meal when cooking with this.").food(food => {food.hunger(6).saturation(2)})
  event.create('raw_bird_drumsick').displayName("Raw Bird Drumstick").tooltip("This meat is tougher and chewier than a standard steak. Tastes better cooked").food(food => {food.hunger(4).saturation(1)})
  event.create('raw bird_thigh').displayName("Raw Bird Thigh").tooltip("A high-quality piece of meat that's hard to come by. You can eat it raw, but cooking it first will recover more hearts.").food(food => {food.hunger(3).saturation(1)})
  event.create('raw_whole bird').displayName("Raw Whole Bird").tooltip("This prized meat can be obtained from certain birds. It gets full points for flavor, nutrition, and volume. It pairs perfectly with other ingredients or can be enjoyed alone.").food(food => {food.hunger(6).saturation(2)})
  //ingredients
  event.create('courser_bee_honey').displayName("Courser Bee Honey").tooltip("Honey straight from the hive is chock-full of nutrients. Cooking this into a meal unlocks the potential of these nutrients and provides a stamina-recovery effect.").food(food => {food.hunger(4).saturation(1)})
  event.create('rice').displayName("Hylian Rice").tooltip("This grain is a favorite among residents of Kakariko Village. It's grown in regions with a lot of water and is quite versatile. Used as an ingredient in things like risotto and rice balls.").food(food => {food.hunger(2).saturation(0)})
  event.create('bird_egg').displayName("Bird Egg").tooltip("A fresh bird egg necessary for making dishes such as omelets and crepes. You can snag them from birds' nests if you're sneaky. Nutritious and delicious, perfect.").food(food => {food.hunger(2).saturation(0)})
  event.create('wheat').displayName("Tabantha Wheat").tooltip("This grain is cultivated extensively on the Tabantha Plains. It's ground finely with a millstone to be used in cooking. Use it to make things such as stews and breads.").food(food => {food.hunger(2).saturation(0)}
  event.create('milk').displayName("Fresh Milk").tooltip("This fresh milk comes from Hateno cows and white goats kept in the village. It's delicious on its own but can also be used as an ingredient in soups and stews.").food(food => {food.hunger(1).saturation(0)}
  event.create('hyrule_bass').displayName("Hyrule Bass").tooltip("An ordinary fish that can be found all over Hyrule. Can be eaten raw, but cooking it amplifies its healing benefits.").food(food => {food.hunger(2).saturation(0)}
  event.create('staminoka_bass').displayName("Staminoka Bass").tooltip("This Hyrule bass got to be the biggest fish by never getting caught (until now). Its long life results in a cooked dish that will restore a lot of stamina.").food(food => {food.hunger(2).saturation(0)}
  event.create('hearty_bass').displayName("Hearty Bass").tooltip("This large fish lives near the shoreline. Its sizable body can restore a lot of nutrient. When cooked into a dish, it will temporarily increase your maximum hearts.").food(food => {food.hunger(4).saturation(2)}
  event.create('chillfin_trout').displayName("Chillfin Trout").tooltip("This blue trout prefers cold bodies of water. Its skin contains enzymes that keep its body cool, and when cooked into a dish, it will temporarily boost your heat resistance.").food(food => {food.hunger(2).saturation(0)}
  event.create('voltfin_trout').displayName("Voltfin Trout").tooltip("This trout makes its home in the freshwater lakes. Its scales have an insulating compound that, when cooked into a dish, offers resistance to electricity.").food(food => {food.hunger(2).saturation(0)}
  event.create('sizzlefin_trout').displayName("Sizzlefin Trout").tooltip("This red trout prefers warm bodies of water. It has a special organ specifically for storing heat. When cooked into a dish, it temporarily boosts your resistance to the cold.").food(food => {food.hunger(2).saturation(0)}
  event.create('steathfin_trout').displayName("Stealthfin Trout").tooltip("Consuming the bioluminescent compound that makes this fish glow in the dark will increase concentration. Dishes cooked with it will suppress noise when consumed.").food(food => {food.hunger(2).saturation(0)}
  event.create('hearty_salmon').displayName("Hearty Salmon").tooltip("This fish makes its home in cold water, giving it extra layers of fat. It temporarily increases your maximum hearts when used in cooking.").food(food => {food.hunger(8).saturation(4)}
  event.create('mighty_carp').displayName("Mighty Carp").tooltip("This freshwater fish lives alongside its less mighty carp ilk. A compound in its liver promotes muscle growth. Dishes cooked with it will temporarily increase your attack power.").food(food => {food.hunger(2).saturation(0)}
  event.create('armored_carp').displayName("Armored Carp").tooltip("Calcium deposits in the scales of this ancient fish make them as hard as armor. Cooking it into a dish will fortify your bones, temporarily increasing your defense.").food(food => {food.hunger(2).saturation(0)}
  event.create('sanke_carp').displayName("Sanke Carp").tooltip("This wild armored carp has been bred into a prizewinning fish. Its beautifully colored markings do not occur in nature. It offers no special effects when cooked.").food(food => {food.hunger(2).saturation(0)}
  event.create('mighty_porgy').displayName("Mighty Porgy").tooltip("This ocean-dwelling fish comes with one rude attitude. The compounds in its flesh elevate your competitive spirit when it's cooked into a dish, thus increasing your attack power.").food(food => {food.hunger(2).saturation(0)}
  event.create('armored_porgy').displayName("Armored Porgy").tooltip("This porgy's body is covered in armor-hard scales. The compounds in its scales, when cooked into a dish, fortify your bones and temporarily boost your defense.").food(food => {food.hunger(2).saturation(0)}
  //snails																										     
  event.create('sneaky_river_snail').displayName("Sneaky River Snail").tooltip("This large, glow-in-the-dark snail lives in fresh water. When cooked into a dish, it heightens your senses so you can move about silently.").food(food => {food.hunger(2).saturation(0)}
  event.create('hearty_blueshell_snail').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}
  event.create('').displayName("").tooltip("").food(food => {food.hunger(2).saturation(0)}

  //crabs

  //insects

  //frogs

  //monster parts

  //dragon pars

  //ores

  //other
  event.create('fairy').displayName("Fairy").tooltip("This fairy will fly from your pouch and heal all your wounds the moment you lose your last heart. It's easily mistaken for a firefly at first, but it glows in the daylight as well as night.").food(food => {food.hunger(0).saturation(20)}).maxStackSize(999)
  event.create('flint').displayName("Flint").tooltip("Strike it with a metallic weapon to generate a spark. The portable fire starter breaks after one use, but it can create a long-lasting flame if you use it near firewood.").maxStackSize(999)
  event.create('wood').displayName("Wood").tooltip("A portable bundle of wood. You can use this to make a campfire if you have something to light it.").maxStackSize(999)
  })
