// priority: 0
StartupEvents.registry('item', event => {
	event
		.create('ftbskies:amethyst_mesh','createsifter:mesh')
		.displayName('Amethyst Mesh')
		.parentModel("createsifter:block/meshes/mesh")
		.texture("mesh","ftbskies:item/amethyst_mesh")
		.texture("frame","block/stripped_oak_log")
		.texture("particle", "block/stripped_oak_log");

	event
		.create('ftbskies:mana_steel_mesh','createsifter:mesh')
		.displayName('Manasteel Mesh')
		.parentModel("createsifter:block/meshes/mesh")
		.texture("mesh","ftbskies:item/mana_steel_mesh")
		.texture("frame","block/stripped_oak_log")
		.texture("particle", "block/stripped_oak_log");
})