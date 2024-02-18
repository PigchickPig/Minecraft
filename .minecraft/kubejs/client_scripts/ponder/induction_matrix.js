Ponder.registry(ponder => {

	ponder.create('mekanism:induction_casing').scene(
		'induction_construction',
		'Building an Induction Matrix',
		'ftbuniversity:induction_matrix',
		(scene, util) => {

			scene.showStructure()
			scene.scaleSceneView(0.85)

			scene.idle(10)
			scene.text(50, 'The Induction Matrix is a modular multiblock that stores FE.')
			scene.idle(60)
			scene.text(40, 'This is how it\'s built.')
			scene.idle(50)

			scene.text(80, 'It must be a rectangular prism, but it can be anywhere from 3x3x4 to 18x18x18').attachKeyFrame()
			scene.idle(90)

			scene.text(50, 'The edges must be made out of Induction Casing...')
			scene.idle(60)
			scene.text(60, '...but the centers can have Induction Ports anywhere inside.')
			scene.idle(70)

			for (let y = 5; y > 2; y--) {
				scene.world.hideSection([0,y,0,8,y,8], Facing.UP)
				scene.idle(3)
			}

			scene.world.setBlock([5,2,3], 'mekanism:basic_induction_provider', false)
			scene.idle(10)
			scene.text(50, 'An Induction Provider must be placed anywhere inside.').attachKeyFrame()
			scene.idle(60)

			for (let z = 3; z <= 5; z++) {
				scene.world.setBlock([5,2,z], 'mekanism:ultimate_induction_provider', false)
				scene.idle(2)
			}

			scene.text(80, 'Having more Induction Providers, or Providers of higher tiers, increases the rate FE can move in and out.')
			scene.idle(90)

			scene.world.setBlock([3,2,3], 'mekanism:basic_induction_cell', false)
			scene.text(50, 'An Induction Cell must also be placed anywhere inside.').attachKeyFrame()
			scene.idle(60)

			for (let z = 3; z <= 5; z++) {
				scene.world.setBlock([3,2,z], 'mekanism:ultimate_induction_cell', false)
				scene.idle(2)
			}

			scene.text(80, 'More Cells, or Cells of higher tiers, increase the capacity of the Matrix.')
			scene.idle(90)

			scene.text(120, 'A max sized Matrix with the most Cells possible could store 6,552,000,000,000,000 FE!')
			scene.idle(130)

			scene.text(60, 'Close it back up (air inside is fine)').attachKeyFrame()
			scene.idle(5)
			for (let y = 3; y < 6; y++) {
				scene.world.showSection([0,y,0,8,y,8], Facing.UP)
				scene.idle(3)
			}
			scene.idle(50)
			scene.text(50, 'FE is piped into the input Induction Port...', [5.5,2.5,2.5]).placeNearTarget()
			scene.idle(60)
			scene.text(50, '...and out of the output Port.', [3.5,2.5,2.5]).placeNearTarget()


			scene.idle(130)
			scene.text(200, 'Ponder originally made for FTB University 1.19!')

		})
})