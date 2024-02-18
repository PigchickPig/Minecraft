Ponder.registry(ponder => {

	ponder.create('mekanismgenerators:fission_reactor_port').scene(
		'fission_construction',
		'Building the Fission Reactor',
		'ftbuniversity:fission_reactor',
		(scene, util) => {

			scene.showStructure()
			scene.scaleSceneView(0.65)
			scene.idle(10)

			scene.text(70,'The Fission Generator is a multiblock that generates a massive amount of heat.')
			scene.idle(80)

			scene.text(50,'It does this by coolant (like Water)...',[5.5,7.5,1.5]).placeNearTarget()
			scene.idle(60)
			scene.text(50,'...into something hotter (like Steam).',[3.5,7.5,1.5]).placeNearTarget()
			scene.idle(70)

			scene.text(50,'Fueled by Fissile Fuel..',[5.5,1.5,1.5]).placeNearTarget()
			scene.idle(60)
			scene.text(80,'...it creates dangerous Radioactive Waste as a byproduct.',[3,1,1]).placeNearTarget()
			scene.idle(90)

			scene.text(50, 'This is how it\'s built.').attachKeyFrame()

			for (let y = 8; y > 0; y--) {
				scene.world.hideSection([0,y,0,8,y,8], Facing.UP)
				scene.idle(5)
			}
			scene.idle(20)

			scene.text(80,'It can be anywhere from 3x4x3 to 18x18x18')
			scene.idle(90)

			scene.world.setBlocks([0,1,2,8,8,8], 'air', false)
			scene.world.showSection([0,1,2,8,8,8], Facing.DOWN)

			scene.text(70, 'Build the frame out of Fission Reactor Casing')
			scene.idle(30)

			let frameTop = [
				[6,7,2],[5,7,2],[4,7,2],[3,7,2],[2,7,2],
				[6,7,3],[2,7,3],
				[6,7,4],[2,7,4],
				[6,7,5],[2,7,5],
				[6,7,6],[5,7,6],[4,7,6],[3,7,6],[2,7,6]
			]
			let frameMiddle = [
				[6,6,6],[2,6,6],[2,6,2],[6,6,2],
				[6,5,6],[2,5,6],[2,5,2],[6,5,2],
				[6,4,6],[2,4,6],[2,4,2],[6,4,2],
				[6,3,6],[2,3,6],[2,3,2],[6,3,2],
				[6,2,6],[2,2,6],[2,2,2],[6,2,2]
			]
			let frameBottom = [
				[6,1,2],[5,1,2],[4,1,2],[3,1,2],[2,1,2],
				[6,1,3],[2,1,3],
				[6,1,4],[2,1,4],
				[6,1,5],[2,1,5],
				[6,1,6],[5,1,6],[4,1,6],[3,1,6],[2,1,6]
			]
			let frame = [frameTop, frameMiddle, frameBottom]

			let setFrame = (block) => {
				frame.forEach(i => i.forEach(j => scene.world.setBlock(j, block, false)))
			}

			let counter = 0
			for (let i = 0; i < 6; i++) {
				setFrame(counter%2==0 ? 'air' : 'mekanismgenerators:fission_reactor_casing')
				counter++
				scene.idle(5)
			}

			scene.idle(20)
			scene.text(50, 'Cap the top and bottom as well.').attachKeyFrame()

			//Top and bottom
			for (let i = 0; i < 6; i++) {
				for (let x = 3; x <= 5; x++) {
					for (let z = 3; z <= 5; z++) {
						scene.world.setBlock(
							[x,1,z],
							counter%2==0 ? 'air' : 'mekanismgenerators:fission_reactor_casing',
							false
						)
						scene.world.setBlock(
							[x,7,z],
							counter%2==0 ? 'air' : 'mekanismgenerators:fission_reactor_casing',
							false
						)
					}
				}
				counter++
				scene.idle(5)
			}

			scene.idle(30)
			scene.text(80, 'Fill the walls with Reactor Glass (or more Reactor Casing).')
			scene.idle(20)

			//East and West
			for (let i = 0; i < 6; i++) {
				for (let z = 3; z <= 5; z++) {
					for (let y = 2; y <= 6; y++) {
						scene.world.setBlock(
							[2,y,z],
							counter%2==0 ? 'air' : 'mekanismgenerators:reactor_glass',
							false
						)
						scene.world.setBlock(
							[6,y,z],
							counter%2==0 ? 'air' : 'mekanismgenerators:reactor_glass',
							false
						)
					}
				}
				counter++
				scene.idle(5)
			}

			//North and South
			for (let i = 0; i < 6; i++) {
				for (let x = 3; x <= 5; x++) {
					for (let y = 2; y <= 6; y++) {
						scene.world.setBlock(
							[x,y,2],
							counter%2==0 ? 'air' : 'mekanismgenerators:reactor_glass',
							false
						)
						scene.world.setBlock(
							[x,y,6],
							counter%2==0 ? 'air' : 'mekanismgenerators:reactor_glass',
							false
						)
					}
				}
				counter++
				scene.idle(5)
			}

			scene.idle(30)
			scene.world.hideSection([6,1,2,2,7,2], Facing.NORTH)
			scene.idle(15)

			scene.text(70, 'Place a pillar of Fusion Fuel Assemblies anywhere inside').attachKeyFrame()
			scene.idle(30)

			for (let y = 2; y < 5; y++) {
				scene.world.setBlock([4,y,4], 'mekanismgenerators:fission_fuel_assembly', false)
				scene.idle(3)
			}
			scene.idle(40)

			scene.text(70, 'The more you put, the faster the Reactor burns fuel.')
			scene.idle(80)

			scene.text(60, 'On top of the pillar, place a Control Rod Assembly.').attachKeyFrame()
			scene.idle(20)
			scene.world.setBlock([4,5,4], 'mekanismgenerators:control_rod_assembly', false)
			scene.idle(50)

			scene.text(55, 'This must be BELOW the Reactor\'s top, not part of it.')
			scene.idle(65)


			scene.text(70, 'There can be multiple sets of Control Rods, but they cannot touch sides.')

			for (let y = 2; y <= 5; y++) {
				
				let block = y == 5 ? 'mekanismgenerators:control_rod_assembly' : 'mekanismgenerators:fission_fuel_assembly'

				scene.world.setBlock([3,y,3], block, false)
				scene.world.setBlock([5,y,3], block, false)
				scene.world.setBlock([3,y,5], block, false)
				scene.world.setBlock([5,y,5], block, false)
				scene.idle(3)
			}
			
			scene.idle(50)
			scene.world.showSection([6,1,2,2,7,2], Facing.SOUTH)
			scene.idle(25)

			scene.text(60,'Anywhere on any of the sides, place 4 Fission Reactor Ports:').attachKeyFrame()
			scene.idle(70)

			scene.world.setBlock([5,2,2], 'mekanismgenerators:fission_reactor_port', false)
			scene.text(40, 'One for Fuel input', [5.5,2.5,2.5]).placeNearTarget()
			scene.idle(50)

			scene.world.setBlock([5,6,2], 'mekanismgenerators:fission_reactor_port', false)
			scene.text(40, 'One for Coolant input', [5.5,6.5,2.5]).placeNearTarget()
			scene.idle(50)

			scene.world.setBlock([3,6,2], 'mekanismgenerators:fission_reactor_port', false)
			scene.world.modifyBlock([3,6,2], s => s.with('mode','output_coolant'), false)
			scene.text(40, 'One for Heated Coolant output', [3.5,6.5,2.5]).placeNearTarget()
			scene.idle(50)

			scene.world.setBlock([3,2,2], 'mekanismgenerators:fission_reactor_port', false)
			scene.world.modifyBlock([3,2,2], s => s.with('mode','output_waste'), false)
			scene.text(40, 'And one for Radioactive Waste output', [3.5,2.5,2.5]).placeNearTarget()
			scene.idle(50)

			scene.addKeyframe()
			scene.idle(10)
			scene.world.showSection([0,1,0,8,8,1], Facing.SOUTH)

			scene.text(50, 'And now your Fission Reactor is complete!')
			scene.idle(60)
			scene.text(100, 'Running it is VERY dangerous though, so make sure to read the quests explaining it!')

			scene.idle(130)
			scene.text(200, 'Ponder originally made for FTB University 1.19!')

		})
})