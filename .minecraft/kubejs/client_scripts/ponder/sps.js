Ponder.registry(ponder => {

	ponder.create('mekanism:sps_port').scene(
		'sps_construction',
		'Building the SPS',
		'ftbuniversity:sps',
		(scene, util) => {

			scene.showStructure()
			scene.scaleSceneView(0.65)

			scene.idle(20)
			scene.text(50, 'The SPS turns energy and Polonium into Antimatter.')
			scene.idle(60)
			scene.text(50, 'This is how it\'s built.')
			scene.idle(60)

			for (let degree = 0; degree <= 360; degree++) {
				scene.rotateCameraY(1)
				if (degree % 4 == 0) scene.idle(1)
			}

			scene.idle(20)
			scene.text(60, 'Basically, six 7-wide circles of SPS Casing with stuff inside').attachKeyFrame()
			scene.idle(70)

			for (let y = 7; y > 1; y--) {
				scene.world.hideSection([0,y,0,12,y,12], Facing.UP)
				scene.idle(2)
			}

			scene.text(60, 'The inside of the circle can be made of any of these:')
			scene.idle(70)

			let circle = [
						[7,1,8],[6,1,8],[5,1,8],
				[8,1,7],[7,1,7],[6,1,7],[5,1,7],[4,1,7],
				[8,1,6],[7,1,6],	,[5,1,6],[4,1,6],
				[8,1,5],[7,1,5],[6,1,5],[5,1,5],[4,1,5],
						[7,1,4],[6,1,4],[5,1,4],
			]

			scene.text(40, 'SPS Casing',[6.5,.51,7.5]).placeNearTarget()
			scene.idle(50)

			circle.forEach(i => scene.world.setBlock(i, 'mekanism:structural_glass', false))
			scene.text(40, 'Structural Glass',[6.5,1.5,7.5]).placeNearTarget()
			scene.idle(50)

			circle.forEach(i => scene.world.setBlock(i, 'mekanism:structural_glass', false))
			scene.text(40, 'or Reactor Glass',[6.5,1.5,7.5]).placeNearTarget()
			scene.idle(50)

			circle.forEach(i => {scene.world.setBlock(i, 'mekanism:sps_casing', false)})

			scene.world.showSection([0,2,0,12,4,12], Facing.DOWN)
			scene.idle(15)
			scene.world.hideSection([0,1,0,12,4,5], Facing.NORTH)

			scene.idle(10)
			scene.text(70, 'Three SPS Ports must be placed inside any of the circles.').attachKeyFrame()
			scene.idle(80)

			scene.text(60, 'One for Polonium input', [9.5,4.5,6.5]).placeNearTarget()
			scene.idle(70)

			scene.text(60, 'One for energy input', [6.5,1.5,6.5]).placeNearTarget()
			scene.idle(70)

			scene.text(60, 'One for Antimatter output', [3.5,4.5,6.5]).placeNearTarget()
			scene.idle(70)

			scene.text(60,'Any Port can be anywhere inside any circle.').attachKeyFrame()
			scene.idle(20)

			let coilLocations = [
				[6,6],[7,6],[5,8],[7,6],[8,8],[5,7],[4,6],[6,6]
			]

			scene.idle(1)
			for (let i = 0; i < coilLocations.length; i++) {
				
				let position = coilLocations[i]
				let x = position[0]
				let z = position[1]

				scene.world.setBlock([x,1,z], 'mekanism:sps_port', false)
				scene.world.setBlock([x,2,z], 'mekanism:supercharged_coil', false)
				scene.world.modifyBlock([x,2,z], s => s.with('facing','up'), false)

				if (i > 0) {

					let prev = coilLocations[i-1]

					let px = prev[0]
					let pz = prev[1]

					scene.world.setBlock([px,1,pz], 'mekanism:sps_casing', false)
					scene.world.setBlock([px,2,pz], 'air', false)
				}
				scene.idle(10)
			}

			scene.text(60, 'The Supercharged Coil has to be on the Port that accepts power.').attachKeyFrame()
			scene.idle(10)
			scene.world.hideSection([0,0,0,6,0,5], Facing.DOWN)
			scene.idle(40)
			scene.world.showSection([0,0,0,6,0,5], Facing.UP)
			scene.idle(20)

			scene.world.setBlock([6,1,6], 'mekanism:sps_casing', false)
			scene.world.setBlock([6,2,6], 'mekanism:air', false)
			scene.idle(10)

			scene.world.setBlock([6,4,9], 'mekanism:sps_port', false)
			scene.world.setBlock([6,4,8], 'mekanism:supercharged_coil', false)
			scene.world.modifyBlock([6,4,8], s => s.with('facing','north'), false)
			scene.world.setBlock([6,4,10], 'mekanism:creative_energy_cube', false)

			scene.text(50, 'The two can be placed on the sides as well').attachKeyFrame()
			scene.idle(60)
			
			scene.world.showSection([0,1,0,12,4,5], Facing.SOUTH)
			scene.idle(10)

			circle.push([6,2,6])

			circle.forEach(i => {
				let x = i[0]
				let z = i[2]

				scene.world.setBlock([x,1,z], 'mekanism:sps_port', false)
				scene.world.setBlock([x,2,z], 'air', false)
				scene.world.setBlock([x,2,z], 'mekanism:supercharged_coil', false)
				scene.world.modifyBlock([x,2,z], s => s.with('facing','up'), false)
				scene.idle(1)
			})

			scene.text(70, 'The more powered Coils, the faster Antimatter is created!')
			scene.idle(80)

			scene.world.showSection([0,5,0,12,12,12], Facing.DOWN)
			scene.idle(10)

			for (let degree = 0; degree <= 360; degree++) {
				scene.rotateCameraY(1)
				if (degree % 4 == 0) scene.idle(1)
			}

			scene.idle(130)
			scene.text(200, 'Ponder originally made for FTB University 1.19!')
	})
})