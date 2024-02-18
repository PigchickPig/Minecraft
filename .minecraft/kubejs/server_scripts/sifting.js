// event.recipes.createsifterSifting(output[], input[]) Optional .waterlogged() .processingTime(int time)
// Basic Example event.recipes.createsifterSifting([Item.of('minecraft:clay').withChance(0.5).toJson(),Item.of('minecraft:redstone').withChance(0.1).toJson()], ['minecraft:sand','createsifter:string_mesh'])
// Waterlogged example event.recipes.createsifterSifting([Item.of('minecraft:clay').withChance(0.5).toJson()], ['minecraft:sand','createsifter:string_mesh']).waterlogged()
// Minimum Speed Example event.recipes.createsifterSifting([Item.of('minecraft:redstone_block').withChance(0.5),Item.of('minecraft:redstone').withChance(0.1)], ['minecraft:sand','createsifter:string_mesh']).minimumSpeed(64)

const Tiers = {
	Basic: 0,
	Andesite: 1,
	Manasteel: 2,
	Amethyst: 3
}

// BLACKSLIST ITEMS
const exclusionBlacklist = [
	'minecraft:iron_nugget'
]
var dust = 'ftbskies:dust'
var gravel = 'minecraft:gravel'
var sand = 'minecraft:sand'
var grass = 'minecraft:grass'
var nether = 'ftbskies:crushed_netherrack'
var end = 'ftbskies:crushed_end_stone'
var dirt = 'minecraft:dirt'
var shroom = 'minecraft:mycelium'
var soul = 'minecraft:soul_sand'
var diorite = 'ftbskies:diorite_chunk'
var tuff = 'ftbskies:tuff_chunk'
var andesite = 'ftbskies:andesite_chunk'
var leaves = 'minecraft:oak_leaves'

const siftingRecipes = [
    [dirt,'botania:grass_seeds',0.15,1,false],
    [dirt,'farmersdelight:cabbage_seeds',0.1,1,false],
    [dirt,'farmersdelight:tomato_seeds',0.1,1,false],
    [dirt,'ftbskies:mycelium_spores',0.1,1,false],
    [dirt,'minecraft:beetroot_seeds',0.35,1,false],		
    [dirt,'supplementaries:flax_seeds',0.05,0,false],
    [dirt,'minecraft:sweet_berries',0.2,1,false],
    [dirt,andesite,0.9,0,false],
    [dirt,diorite,0.9,0,false],
    [dirt,tuff,0.9,0,false],
    [dust,'ae2:certus_quartz_dust',0.35,2,false],
    [dust,'ae2:sky_dust',0.1,3,false],		
    [dust,'minecraft:blaze_powder',0.10,1,false],
    [dust,'minecraft:bone_meal',0.2,0,false],
    [dust,'minecraft:glowstone_dust',0.20,1,false],
    [dust,'minecraft:gunpowder',0.09,0,false],
    [dust,'minecraft:redstone',0.4,1,false],
    [dust,'thermal:apatite',0.2,0,false],		
    [dust,'thermal:cinnabar',0.2,2,false],
    [dust,'thermal:sulfur',0.2,1,false],
    [end,'minecraft:ender_pearl',0.3,2,false],		
    [end,'rftoolsbase:dimensionalshard',0.2,3,false],
    [grass,'hexerei:belladonna_flower',0.1,2,false],
    [grass,'hexerei:mandrake_flower',0.1,2,false],
    [grass,'hexerei:mugwort_bush',0.1,2,false],
    [grass,'hexerei:yellow_dock_bush',0.1,2,false],
    [grass, 'minecraft:red_tulip',0.3,0,false],
    [grass, 'minecraft:oxeye_daisy',0.3,0,false],
    [grass, 'minecraft:cornflower',0.3,0,false],
    [grass, 'minecraft:lily_of_the_valley',0.3,0,false],
    [grass, 'minecraft:allium',0.3,0,false],
    [grass, 'minecraft:azure_bluet',0.3,0,false],
    [grass, 'minecraft:blue_orchid',0.3,0,false],
    [grass, 'minecraft:poppy',0.3,0,false],
    [grass, 'minecraft:dandelion',0.3,0,false],
    [grass, 'minecraft:orange_tulip',0.3,0,false],
    [grass, 'minecraft:white_tulip',0.3,0,false],
    [grass, 'minecraft:pink_tulip',0.3,0,false],
    [gravel,'create:raw_zinc',0.3,1,false],
    [gravel,'mekanism:fluorite_gem',0.05,3,false],
    [gravel,'mekanism:raw_osmium',0.3,1,false],		
    [gravel,'mekanism:raw_uranium',0.2,3,false],
    [gravel,'minecraft:coal',0.30,1,false],
    [gravel,'minecraft:diamond',0.04,1,false],
    [gravel,'minecraft:emerald',0.03,1,false],
    [gravel,'minecraft:iron_nugget',0.4,0,false],
    [gravel,'minecraft:lapis_lazuli',0.2,1,false],
    [gravel,'minecraft:raw_copper',0.4,1,false],
    [gravel,'minecraft:raw_gold',0.4,1,false],
    [gravel,'minecraft:raw_iron',0.6,1,false],		
    [gravel,'tetra:geode',0.02,3,false],
    [gravel,'thermal:raw_lead',0.2,1,false],
    [gravel,'thermal:raw_nickel',0.2,1,false],		
    [gravel,'thermal:raw_silver',0.2,1,false],
    [gravel,'thermal:raw_tin',0.3,1,false],
    [leaves,'minecraft:apple',0.2,1,false],		
    [leaves,'minecraft:golden_apple',0.05,2,false],		
    [leaves,'minecraft:oak_sapling',0.2,0,false],		
    [leaves,'hexerei:mahogany_sapling',0.3,3,false],
    [leaves,'hexerei:willow_sapling',0.3,1,false],
    [leaves,'hexerei:witch_hazel_sapling',0.3,1,false],
    [leaves,'minecraft:flowering_azalea',0.15,1,false],
    [leaves,'minecraft:azalea',0.15,1,false],
    [leaves,'minecraft:spore_blossom',0.15,1,false],
    [nether,'ars_nouveau:red_archwood_sapling',0.2,2,false],
    [nether,'forcecraft:force_gem',0.2,2,false],
    [nether,'elementalcraft:inert_crystal',0.15,2,false],
    [nether,'ftbskies:crimson_nylium_spores',0.2,1,false],
    [nether,'ftbskies:warped_nylium_spores',0.2,1,false],		
    [nether,'minecraft:netherite_scrap',0.10,3,false],		
    [nether,'occultism:otherworld_sapling',0.1,1,false],		
    [nether,'occultism:raw_iesnium',0.15,1,false],		
    [sand,'minecraft:cocoa_beans',0.1,0,false],		
    [sand,'minecraft:bamboo',0.05,1,false],
    [sand,'minecraft:cactus',0.1,1,false],
    [sand,'minecraft:sugar_cane',0.3,0,false],
    [sand,'thermal:quartz_dust',0.1,1,false],		
    [sand,'mekanism:salt',0.4,1,true],
    [sand,'minecraft:slime_ball',0.1,1,true],	
    [sand,'minecraft:clay_ball',0.6,0,true],
    [sand,'minecraft:kelp',0.2,0,true],
    [sand,'minecraft:prismarine_crystals',0.02,2,true],		
    [sand,'minecraft:prismarine_shard',0.1,2,true],		
    [sand,'minecraft:sea_pickle',0.1,1,true],		
    [sand,'minecraft:seagrass',0.15,0,true],		
    [shroom,'minecraft:brown_mushroom',0.4,0,false],
    [shroom,'minecraft:red_mushroom',0.4,0,false],
    [soul,'minecraft:ghast_tear',0.02,3,false],
    [soul,'minecraft:nether_wart',0.1,1,false],
    [soul,'minecraft:quartz',0.8,1,false]
]
	
ServerEvents.recipes(event => {
	let mesh
	// var xxxRecipes = [[Basic], [Andesite], [Manasteel], [Amethyst]]
	var dirtRecipes = [[],[],[],[]]
	var dustRecipes = [[],[],[],[]]
	var endRecipes = [[],[],[],[]]
	var gravelRecipes = [[],[],[],[]]
	var grassRecipes = [[],[],[],[]]
	var leavesRecipes = [[],[],[],[]]
	var netherRecipes = [[],[],[],[]]
	var sandRecipes = [[],[],[],[]]
	var shroomRecipes = [[],[],[],[]]
	var soulRecipes = [[],[],[],[]]
	var waterDirtRecipes = [[],[],[],[]]
	var waterDustRecipes = [[],[],[],[]]
	var waterEndRecipes = [[],[],[],[]]
	var waterGravelRecipes = [[],[],[],[]]
	var waterGrassRecipes = [[],[],[],[]]
	var waterLeavesRecipes = [[],[],[],[]]
	var waterNetherRecipes = [[],[],[],[]]
	var waterSandRecipes = [[],[],[],[]]
	var waterShroomRecipes = [[],[],[],[]]
	var waterSoulRecipes = [[],[],[],[]]
	siftingRecipes.forEach((recipeMap) => {
		let input = recipeMap[0]
		let output = recipeMap[1]
		let chance = recipeMap[2]
		let tier = recipeMap[3]
		let waterlogged = recipeMap[4]

		let json = Item.of(output).withChance(chance)
		switch(input){
			case dirt: {
				if(waterlogged) waterDirtRecipes[`${tier}`].push(json)
				else dirtRecipes[`${tier}`].push(json)
				break

			}
			case dust: {
				if(waterlogged) waterDustRecipes[`${tier}`].push(json)
				else dustRecipes[`${tier}`].push(json)
				break

			} case end: {
				if(waterlogged) waterEndRecipes[`${tier}`].push(json)
				else endRecipes[`${tier}`].push(json)
				break

			} case gravel: {
				if(waterlogged) waterGravelRecipes[`${tier}`].push(json)
				else gravelRecipes[`${tier}`].push(json)
				break

			} case grass: {
				if(waterlogged) waterGrassRecipes[`${tier}`].push(json)
				else grassRecipes[`${tier}`].push(json)
				break

			} case leaves: {
				if(waterlogged) waterLeavesRecipes[`${tier}`].push(json)
				else leavesRecipes[`${tier}`].push(json)
				break

			} case nether: {
				if(waterlogged) waterNetherRecipes[`${tier}`].push(json)
				else netherRecipes[`${tier}`].push(json)
				break

			} case sand: {
				if(waterlogged) waterSandRecipes[`${tier}`].push(json)
				else sandRecipes[`${tier}`].push(json)
				break

			} case shroom: {
				if(waterlogged) waterShroomRecipes[`${tier}`].push(json)
				else shroomRecipes[`${tier}`].push(json)
				break

			} case soul: {
				if(waterlogged) waterSoulRecipes[`${tier}`].push(json)
				else soulRecipes[`${tier}`].push(json)
				break

			}
		}
	})



	function getRecipes(material, recipesArray, waterlogged){
		for(let i = 0; i < recipesArray.length; i++) {
			let speed = 0
			switch(i)
			{
				case 0: mesh = 'createsifter:string_mesh'; break;
				case 1: {
					mesh = 'createsifter:andesite_mesh'
					speed = 0
					recipesArray[i-1].forEach(recipe =>{if(!checkExclusion(recipe)) recipesArray[i].push(recipe)})
					break
				}
				case 2: {
					mesh = 'ftbskies:mana_steel_mesh'
					speed = 0
					recipesArray[i-1].forEach(recipe =>{if(!checkExclusion(recipe)) recipesArray[i].push(recipe)})
					break
				}
				case 3: {
					mesh = 'ftbskies:amethyst_mesh'
					speed = 0
					recipesArray[i-1].forEach(recipe =>{if(!checkExclusion(recipe)) recipesArray[i].push(recipe)})
					break
				}
			}

			//console.log(`Mesh: ${mesh.split(':')[1]} | Material: ${material.split(':')[1]} | Waterlogged: ${waterlogged} | recipes: ${recipesArray[i]} `)
			if(recipesArray[i].length !== 0){
				if(waterlogged)	event.recipes.createsifterSifting(recipesArray[i], [material, mesh]).minimumSpeed(speed).waterlogged().id(`ftbskies:${material.split(':')[1]}_${mesh.split(':')[1]}_waterlogged`)
				else event.recipes.createsifterSifting(recipesArray[i], [material, mesh]).minimumSpeed(speed).id(`ftbskies:${material.split(':')[1]}_${mesh.split(':')[1]}`)

			}
		}
	}


	getRecipes(dirt, dirtRecipes, false)
	getRecipes(dust, dustRecipes, false)
	getRecipes(grass, grassRecipes, false)
	getRecipes(end, endRecipes, false)
	getRecipes(gravel, gravelRecipes, false)
	getRecipes(leaves, leavesRecipes, false)
	getRecipes(nether, netherRecipes, false)
	getRecipes(sand, sandRecipes, false)
	getRecipes(shroom, shroomRecipes, false)
	getRecipes(soul, soulRecipes, false)
	getRecipes(dirt, waterDirtRecipes, true)
	getRecipes(grass, waterGrassRecipes, true)
	getRecipes(dust, waterDustRecipes, true)
	getRecipes(end, waterEndRecipes, true)
	getRecipes(gravel, waterGravelRecipes, true)
	getRecipes(leaves, waterLeavesRecipes, true)
	getRecipes(nether, waterNetherRecipes, true)
	getRecipes(sand, waterSandRecipes, true)
	getRecipes(shroom, waterShroomRecipes, true)
	getRecipes(soul, waterSoulRecipes, true)
})



function checkExclusion(recipe) {
	if(exclusionBlacklist.includes(recipe.toString())) return true
	return false
}