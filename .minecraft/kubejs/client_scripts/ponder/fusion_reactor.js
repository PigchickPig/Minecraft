Ponder.registry(ponder => {

	ponder.create('mekanismgenerators:fusion_reactor_controller').scene(
		'fusion_construction',
		'Building the Fusion Reactor',
		'ftbuniversity:fusion_reactor',
		(scene, util) => {

			scene.showStructure()
			scene.scaleSceneView(0.85);

			scene.idle(10)
			scene.text(60, 'Mekanism\'s Fusion Reactor can make an extreme amount of FE/t.')

			scene.idle(70)
			scene.text(50, 'This is how it\'s built.')

			scene.idle(65)
			for (let y = 8; y > 1; y--) {
				scene.world.hideSection([0,y,0,8,y,8], Facing.UP)
				scene.idle(2)
			}

			scene.text(90, 'Use "Q" to see what each block is.').attachKeyFrame()
			scene.idle(110)

			for (let y = 2; y < 6; y++) {
				scene.addKeyframe()
				scene.world.showSection([0,y,0,8,y,8], Facing.DOWN)
				scene.idle(50)
			}

			scene.text(70, 'Any Frames that aren\'t on a corner can be replaced with Reactor Glass').attachKeyFrame()
			
			scene.idle(30)
			let faces = [
				[4,4,2],[3,3,2],[4,2,2],[5,3,2],
				[2,4,4],[2,3,5],[2,2,4],[2,3,3],
				[4,5,5],[3,5,4],[4,5,3],[5,5,4]
			]
			faces.forEach(i => {
				scene.world.setBlock(i, 'mekanismgenerators:reactor_glass',false)
				scene.idle(1)
			})
			faces.forEach(i => {
				scene.world.setBlock(i, 'mekanismgenerators:fusion_reactor_frame', false)
				scene.idle(1)
			})
			faces.forEach(i => {
				scene.world.setBlock(i, 'mekanismgenerators:reactor_glass',false)
				scene.idle(1)
			})

			scene.idle(130)
			scene.text(200, 'Ponder originally made for FTB University 1.19!')
	})
})