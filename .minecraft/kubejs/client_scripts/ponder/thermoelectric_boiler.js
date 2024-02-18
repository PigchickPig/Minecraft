Ponder.registry(ponder => {

	ponder.create('mekanism:boiler_valve').scene(
		'boiler_construction',
		'Building the Thermoelectric Boiler',
		'ftbuniversity:thermoelectric_boiler',
		(scene, util) => {

			let setCorners = (level, block) => {
				let corners = [
					[6,6],[2,6],
					[6,2],[2,2]
				]
		
				corners.forEach(i => {
					scene.world.setBlock([i[0],level,i[1]], block, false)
				})
			}

			let setRing = (level, block) => {
				let outerRing = [
					[2,3],[2,4],[2,5],
					[3,6],[4,6],[5,6],
					[6,5],[6,4],[6,3],
					[5,2],[5,2],[4,2],[3,2]
				]
				outerRing.forEach(i => {
					scene.world.setBlock([i[0],level,i[1]], block, false)
				})
			}

			scene.showStructure()
			scene.scaleSceneView(0.75)
			scene.setSceneOffsetY(-1)

			scene.text(80,'The Thermoelectric Boiler uses Heat to turn Water into Steam.')

			scene.idle(90)
			scene.text(50,'Its design is modular, here\'s how you make it.')

			scene.idle(65)
			for (let y = 8; y > 0; y--) {
				scene.world.hideSection([0,y,0,8,y,8], Facing.UP)
				scene.idle(2)
			}
			scene.idle(20)
			scene.world.setBlocks([0,1,0,8,8,8], 'air', false)
			scene.idle(8)
			scene.world.showSection([0,1,0,8,1,8], Facing.DOWN)
			scene.idle(8)

			scene.addKeyframe()
			for (let x = 3; x < 6; x++) {
				for (let z = 3; z < 6; z++) {
					scene.world.setBlock([x,1,z], 'mekanism:boiler_casing', false)
					scene.idle(1)
				}
			}
			scene.text(70,'The Boiler can be anywhere from a 3x4x3 to 18x18x18.')
			scene.idle(80)
			scene.text(50, 'We\'ll be making a 5x7x5 here.')
			setRing(1, 'mekanism:boiler_casing')
			setCorners(1, 'mekanism:boiler_casing')

			scene.idle(60)

			scene.text(40,'Make the bottom first').attachKeyFrame()
			scene.idle(50)

			scene.world.setBlocks([3,2,3,5,2,5],'mekanism:superheating_element',false)
			scene.world.showSection([0,2,0,8,2,8],Facing.DOWN)
			scene.text(70,'Fill the next layer with Superheating Elements.').attachKeyFrame
			scene.idle(80)
			setRing(2, 'mekanism:boiler_casing')
			setCorners(2, 'mekanism:boiler_casing')

			scene.text(50, 'Surround this layer with Boiler Casing.')
			scene.idle(60)

			scene.text(50, 'This layer is now a "Heater layer."')
			scene.idle(60)

			setRing(2, 'mekanism:structural_glass')
			scene.text(40, 'The non-corners can be Structural Glass instead')
			scene.idle(60)

			scene.world.setBlocks([3,3,3,5,3,5],'mekanism:superheating_element',false)
			setCorners(3, 'mekanism:boiler_casing')
			setRing(3, 'mekanism:structural_glass')

			scene.world.showSection([0,3,0,8,3,8],Facing.DOWN)
			scene.text(70,'Additional Heater layers are optional, but make it run faster and hold more Water.').attachKeyFrame()
			scene.idle(80)

			setRing(4,'mekanism:structural_glass')
			setCorners(4, 'mekanism:boiler_casing')
			scene.world.showSection([0,4,0,8,4,8],Facing.DOWN)
			scene.text(70, 'Hollow layers (called Water Cavity layers) can optionally be included, to hold more Water.').attachKeyFrame()
			scene.idle(80)

			setRing(5,'mekanism:boiler_casing')
			setCorners(5, 'mekanism:boiler_casing')
			scene.world.setBlocks([3,5,3,5,5,5], 'mekanism:pressure_disperser',false)
			scene.world.showSection([0,5,0,8,5,8],Facing.DOWN)
			scene.text(80, 'Fill a layer with Pressure Dispersers to create a "Steam Catch layer." The entire layer must be filled.').attachKeyFrame()
			scene.idle(90)

			setRing(6, 'mekanism:structural_glass')
			setCorners(6, 'mekanism:boiler_casing')
			scene.world.showSection([0,6,0,8,6,8], Facing.DOWN)
			scene.text(80, 'Hollow layers (called Steam Cavity layers) can optionally be included, to hold more Steam').attachKeyFrame()
			scene.idle(90)

			scene.world.setBlocks([2,7,2,6,7,6], 'mekanism:boiler_casing')
			scene.world.showSection([0,7,0,8,7,8], Facing.DOWN)
			scene.text(50, 'Cap it off, and you\'re almost done!').attachKeyFrame()
			scene.idle(60)

			scene.world.setBlock([4,2,2],'mekanism:boiler_valve',false)
			scene.world.setBlock([2,2,4],'mekanism:boiler_valve',false)
			scene.text(60, 'Replace two blocks on the casing on a Heater or Water Cavity layer with Valves.').attachKeyFrame()
			scene.idle(70)
			scene.text(40, 'One acts as a Water input...', [4,2,2]).placeNearTarget()
			scene.idle(50)
			scene.text(40, '...and the other as Heat input.', [2,2,4]).placeNearTarget()
			scene.idle(50)

			scene.world.setBlock([4,6,2], 'mekanism:boiler_valve',false)
			scene.world.modifyBlock([4,6,2], state => state.with('mode','output_steam'), false)
			scene.text(60, 'Replace a block on the casing on a Steam Catch or Steam Cavity layer with another Valve.').attachKeyFrame()
			scene.idle(70)
			scene.text(50, 'This will act as the Steam output.',[4,6,2]).placeNearTarget()
			scene.idle(60)

			scene.text(100, 'And that\'s it! Your Boiler is now ready to run!')

			scene.idle(130)
			scene.text(200, 'Ponder originally made for FTB University 1.19!')

	})
})