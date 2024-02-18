// priority: 99
JEIEvents.information(event => {

	const itemsAndPages = [
		['mekanism:jetpack_armored','Can be traded from Armorer villagers'],
		[['productivebees:sturdy_bee_cage','productivebees:spawn_egg_quarry_bee'],'Can be traded from Bee Keeper villagers.'],
		['ars_nouveau:source_berry','Can be traded from level two cleric villagers.'],
		[['botania:ender_air_bottle','minecraft:dragon_breath','minecraft:ender_pearl'],'Can be traded from level four Cleric Villagers.'],
		['cyclic:chorus_flight','Can be traded from level five Cleric Villagers.'],
		['ae2:certus_quartz_crystal','Can traded from a Fluix Researcher Villager.'],
		['ae2:sky_stone_block','Can traded from a level two Fluix Researcher Villager.'],
		[['elementalcraft:source','minecraft:totem_of_undying','minecraft:echo_shard'],'Can be traded from a Shady Wizard Villager.'],
		[['industrialforegoing:mob_imprisonment_tool','mekanism:atomic_disassembler'],'Can be traded from a Toolsmith Villager.'],
		['ftbskies:eye_of_legend_end','Automatically transforms when the Eye of Legend is in the End.'],
		['ftbskies:eye_of_legend_nether','Automatically transforms when the Eye of Legend is in the Nether.'],
		[['ftbskies:rock','ftbskies:soil'],'Sneak right-click a Grass block.'],
		['easy_villagers:villager','Sneak right-click a Villager with an empty hand.'],
		['tetra:hammer_base','Purchased from tier 5 Armorer villagers.'],
		['tetra:thermal_cell','Bartered from Piglins.'],
		['minecraft:pointed_dripstone','Purchased from tier 3 Mason Villagers.'],
		['industrialforegoing:mycelial_rocket','Takes firework Rockets as fuel. Only tier 1 and higher rockets will work not basic rockets. To craft higher tier rockets add more gunpowder to the crafting recipe. Up to 3 additional gunpowder + paper is supported with higher tier rockets lasting longer as fuel.']
	]

	for (let [item, info] of itemsAndPages) {
		event.addItem(item, info)
	}

})
