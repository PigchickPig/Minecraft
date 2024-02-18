// priority: 0
StartupEvents.registry('block', event => {

	event.create('ftbskies:crushed_end_stone').material('sand').hardness(0.4).displayName('Crushed End Stone')
	event.create('ftbskies:crushed_netherrack').material('sand').hardness(0.4).displayName('Crushed Netherrack')
	event.create('ftbskies:dust').material('sand').hardness(0.4).displayName('Dust')
})
