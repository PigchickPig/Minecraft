const toolTips = [
	['forcecraft:force_shears','Capable of shearing most animals!'],
	['ftbskies:mycelium_spores','Right click onto dirt to transform into mycelium'],
	['ftbskies:warped_nylium_spores','Right click onto netherrack to transform into warped nylium'],
	['ftbskies:crimson_nylium_spores','Right click onto netherrack to transform into crimson nylium'],
	['ftbskies:eye_of_legend','Moves in the direction of the nearest Sky Village'],
	['ftbskies:eye_of_legend_end','Moves in the direction of the nearest End City'],
	['ftbskies:eye_of_legend_nether','Moves in the direction of the nearest Nether Sky Village'],
	['minecraft:end_portal_frame','Shift-Right click with an empty hand to pickup\nCannot be placed in the lobby or nether dimensions'],
	['minecraft:wither_rose','Can be bartered from piglins'],
	['minecraft:strider_spawn_egg','Can be bartered from piglins'],
	['nethersdelight:hoglin_hide','Can be bartered from piglins'],
	['create:blaze_cake','Can be bartered from piglins'],
	['productivebees:spawn_egg_nomad_bee','Can be bartered from piglins'],
	['nethersdelight:propelplant_cane','Can be bartered from piglins'],
	['wstweaks:fragment','Can be bartered from piglins'],
	['minecraft:blaze_rod','Can be bartered from piglins or traded from cleric villagers'],
	['minecraft:amethyst_shard','Can be bartered from piglins'],
	['minecraft:ender_pearl','Can be bartered from piglins'],
	['elementalcraft:springaline_shard','Can be bartered from piglins'],
	['tetra:thermal_cell','Can be bartered from piglins'],
	['autosmithingtable:auto_smithing_table','Do not use for backpack ugprading!	'],
	['minecraft:crying_obsidian','Can be bartered from piglins']

]

ItemEvents.tooltip(e => {

	let tooltipNBT = (itemNoNBT, itemWithNBT, theText) => {
		e.addAdvanced(itemNoNBT, (item, advanced, text) => {
			if (item.test(itemWithNBT)) {
				if (Array.isArray(theText)) {
					theText.forEach(function (line, index) {
						text.add(index + 1, line)
					})
				} else {
					text.add(1, theText)
				}
			}
		})
	}

	toolTips.forEach(tip => e.add(tip[0], Text.gold(tip[1])))



})
