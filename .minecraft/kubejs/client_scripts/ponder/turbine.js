Ponder.registry(ponder => {

	ponder.create('mekanismgenerators:turbine_valve').scene(
		'turbine_construction',
		'Building a Turbine',
		'ftbuniversity:turbine',
		(scene, util) => {
			scene.showStructure()
			scene.scaleSceneView(0.45)

			scene.idle(10)
			scene.text(80, 'The Industrial Turbine is a multiblock that uses Steam to generate massive amounts of FE.')
			scene.idle(90)
			scene.text(50, 'This is how it\'s built.')

			for (let degree = 0; degree <= 360; degree++) {
				scene.rotateCameraY(1)
				if (degree % 8 == 0) scene.idle(1)
			}
			scene.idle(20)

			for (let y = 12; y > 0; y--) {
				scene.world.hideSection([0,y,0,10,y,10], Facing.UP)
				scene.idle(5)
			}

			scene.idle(15)
			scene.addKeyframe()
			scene.idle(15)
			
			scene.text(75, 'First, place a base of Casing.')
			scene.idle(25)
			scene.world.showSection([3,1,3,7,1,7], Facing.DOWN)
			scene.idle(60)
			scene.text(75, 'It can be anywhere from 5x5 to 17x17.')
			scene.idle(80)
			
			scene.addKeyframe()
			
			scene.world.modifyTileNBT([5,2,5,2,8,5], nbt => {nbt.blades = 0})
			
			scene.idle(30)
			scene.text(40, 'Place some Rotors in the middle.')
			for (let y = 2; y <= 8; y++) {
				scene.world.showSection([5,y,5], Facing.DOWN)
				scene.idle(5)
			}
			scene.idle(30)
			scene.text(60, 'The wider your Turbine, the taller it can be.')
			scene.idle(70)

			scene.addKeyframe()
			scene.idle(10)
			scene.text(60, 'Attach Turbine Blades')
			scene.showControls(60, [5.5, 9, 5.5], "down").rightClick().withItem('mekanismgenerators:turbine_blade')

			for (let y = 2; y <= 8; y++) {
				scene.world.modifyTileNBT([5,y,5], nbt => {nbt.blades = 1})
				scene.idle(3)
				scene.world.modifyTileNBT([5,y,5], nbt => {nbt.blades = 2})
				scene.idle(3)
			}

			scene.idle(30)
			scene.addKeyframe()
			scene.idle(10)

			scene.text(70, 'If the Blades reach out far enough they would go through the walls...')
			scene.idle(20)
			scene.world.setBlocks([6,2,7,4,8,7], 'mekanism:structural_glass', false)
			scene.world.showSection([6,2,7,4,8,7], Facing.NORTH)
			scene.idle(40)
			for (let i = 0; i <= 3; i++) {
				scene.world.setBlocks([6,8,7,4,8,7], 'minecraft:red_concrete', false)
				scene.idle(5)
				scene.world.setBlocks([6,8,7,4,8,7], 'mekanism:structural_glass', false)
				scene.idle(5)
			}
			scene.idle(10)
			scene.world.hideSection([6,2,7,4,8,7], Facing.SOUTH)
			scene.idle(10)
			scene.text(80, '...then you have to make the Turbine either shorter or wider.')
			scene.idle(20)
			scene.world.showSection([2,1,2,8,1,2], Facing.DOWN)
			scene.world.showSection([2,1,2,2,1,8], Facing.DOWN)
			scene.world.showSection([8,1,2,8,1,8], Facing.DOWN)
			scene.world.showSection([8,1,8,2,1,8], Facing.DOWN)
			scene.world.setBlocks([6,2,7,4,8,7], 'air', false)
			scene.idle(70)

			scene.world.setBlocks([3,2,2,7,2,2], 'mekanism:structural_glass', false)

			scene.addKeyframe()
			scene.idle(10)
			scene.text(80, 'The walls can be made of Structural Glass, but the corners must be Turbine Casing.')
			scene.idle(15)

			for (let y = 2; y <= 8; y++) {
				scene.world.showSection([2,y,2,8,y,2], Facing.DOWN)
				scene.world.showSection([2,y,2,2,y,8], Facing.DOWN)
				scene.world.showSection([8,y,2,8,y,8], Facing.DOWN)
				scene.world.showSection([8,y,8,2,y,8], Facing.DOWN)
				scene.idle(5)
			}

			scene.idle(80)
			scene.addKeyframe()
			scene.idle(10)

			scene.world.showSection([5,9,5], Facing.DOWN)
			scene.text(60, 'Place a Rotational Complex on the Rotors...')
			scene.idle(70)
			scene.world.showSection([3,9,5,4,9,7], Facing.DOWN)
			scene.world.showSection([5,9,7,7,9,6], Facing.DOWN)
			scene.world.showSection([7,9,5,6,9,3], Facing.DOWN)
			scene.world.showSection([5,9,4,3,9,3], Facing.DOWN)
			scene.text(80, '...and completely fill the rest of that layer with Pressure Dispersers.')
			scene.idle(90)

			scene.addKeyframe()
			scene.idle(10)
			scene.text(80, 'The more room under this layer, the more Steam the Turbine can hold.')
			scene.idle(90)

			scene.addKeyframe()
			scene.idle(10)
			scene.world.showSection([5,10,5], Facing.DOWN)
			scene.text(70, 'Place an Electromagnetic Coil on the Rotational Complex.')
			scene.idle(80)
			scene.text(100, 'The amount of Coils (and of Rotor Blades) is what decides how much FE is generated.')
			scene.idle(45)
			scene.world.showSection([3,10,3,7,10,7], Facing.DOWN)
			scene.idle(65)

			scene.text(70, 'You can have multiple layers of Coil.')
			scene.idle(30)
			scene.world.setBlocks([3,11,3,7,11,7], 'mekanismgenerators:electromagnetic_coil', false)
			scene.world.showSection([3,11,3,7,11,7], Facing.DOWN)
			scene.idle(55)

			scene.addKeyframe()
			scene.idle(10)

			scene.text(70, 'Finish up the walls with Turbine Vents.')
			scene.idle(35)
			scene.world.showSection([2,9,2,8,11,2], Facing.DOWN)
			scene.world.showSection([2,9,2,2,11,8], Facing.DOWN)
			scene.world.showSection([8,9,2,8,11,8], Facing.DOWN)
			scene.world.showSection([8,9,8,2,11,8], Facing.DOWN)
			scene.idle(50)

			scene.text(100, 'The amount of Vents (and of Presssure Dispersers) is what decides the flow rate.')
			scene.idle(110)
			scene.text(85, 'Higher flow rate means more Steam is used, and more FE is produced.')
			scene.idle(95)
			scene.world.showSection([2,12,2,8,12,8], Facing.DOWN)

			scene.idle(20)
			scene.addKeyframe()
			scene.world.setBlock([7,2,2], 'mekanismgenerators:turbine_valve', false)
			scene.text(60, 'Place a Valve for Steam input...', [7.5,2.5,2.5]).placeNearTarget()
			scene.idle(70)
			scene.world.setBlock([3,2,2], 'mekanismgenerators:turbine_valve', false)
			scene.text(60, '...and another for FE output!', [3.5,2.5,2.5]).placeNearTarget()
			scene.idle(70)

			scene.idle(70)
			scene.text(200, 'Ponder originally made for FTB University 1.19!')
		})
})