Ponder.registry(ponder => {

	ponder.create('mekanism:dynamic_tank').scene(
		'dt_construction',
		'Building a Dynamic Tank',
		'ftbuniversity:dynamic_tank',
		(scene, util) => {

			scene.showStructure()
			scene.scaleSceneView(0.85)

			scene.idle(10)
			scene.text(60, 'The Dynamic Tank is a modular multiblock that stores a fluid.')
			scene.idle(70)
			scene.text(50, 'This is how it\'s built.')

			for (let degree = 0; degree <= 360; degree++) {
				scene.rotateCameraY(1)
				if (degree % 8 == 0) scene.idle(1)
			}
			scene.idle(20)

			scene.text(60, 'Make a cuboid frame out of Dynamic Tank blocks...').attachKeyFrame()
			scene.idle(70)

			scene.text(80, '...and fill the sides with either more Tank blocks or Structural Glass.')
			scene.idle(90)

			scene.text(90, 'For every block that makes up the Tank (including edges), the Tank can hold 16 buckets of fluid.').attachKeyFrame()
			scene.idle(100)
			
			scene.text(130, 'The smallest Tank (3x3x3) holds 432 buckets, and the largest Tank (18x18x18) holds 93,312.')
			scene.idle(140)

			scene.text(50, 'Replace two blocks with Dynamic Valves.').attachKeyFrame()
			scene.idle(60)

			scene.text(90, 'That really is it! Your tank is now ready!')

			scene.idle(130)
			scene.text(200, 'Ponder originally made for FTB University 1.19!')

		})
})