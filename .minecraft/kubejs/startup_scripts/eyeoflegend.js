/* 
  custom eye of ender implementation allowing to find different structures
  authored by EnigmaQuip

  will locate the nearest structure that has the structure tag set
*/

const $EyeofEnder = Java.loadClass('net.minecraft.world.entity.projectile.EyeOfEnder')
const $Registry = Java.loadClass('net.minecraft.core.Registry')
const $TagKey = Java.loadClass('net.minecraft.tags.TagKey')

ForgeEvents.onEvent('net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent', event => {
  let dim = event.getTo()
  let player = event.getEntity()

  if(dim == 'minecraft:the_nether'){
    swapItem(player, 'ftbskies:eye_of_legend', 'ftbskies:eye_of_legend_nether')
    swapItem(player, 'ftbskies:eye_of_legend_end', 'ftbskies:eye_of_legend_nether')
  }
  else if(dim == 'minecraft:the_end'){
    swapItem(player, 'ftbskies:eye_of_legend', 'ftbskies:eye_of_legend_end')
    swapItem(player, 'ftbskies:eye_of_legend_nether', 'ftbskies:eye_of_legend_end')
  }
  else{
    swapItem(player, 'ftbskies:eye_of_legend_nether', 'ftbskies:eye_of_legend')
    swapItem(player, 'ftbskies:eye_of_legend_end', 'ftbskies:eye_of_legend')
  }
})

StartupEvents.registry('item', event => {
  event.create('ftbskies:eye_of_legend').displayName('Eye of Legend').unstackable()
    .use((level, player, interactionHand) => {
      let item = player.getHeldItem(interactionHand)
      player.startUsingItem(interactionHand)
      if (level.side == 'server') {
        let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, 'ftbskies:legendlocator')
        let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
        if (foundPos) {
          let eye = new $EyeofEnder(level, player.getX(), player.getY(0.5), player.getZ())
          eye.setItem(item)
          eye.signalTo(foundPos)
          eye.spawn()
          level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
          player.swing(interactionHand)
          player.addItemCooldown('ftbskies:eye_of_legend', 10*20)
          return true
        }
      }
      return false
    })
    event.create('ftbskies:eye_of_legend_nether').displayName('Nether Eye of Legend').unstackable()
    .use((level, player, interactionHand) => {
      let item = player.getHeldItem(interactionHand)
      player.startUsingItem(interactionHand)
      if (level.side == 'server') {
        let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, 'ftbskies:legendlocator')
        let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
        if (foundPos) {
          let eye = new $EyeofEnder(level, player.getX(), player.getY(0.5), player.getZ())
          eye.setItem(item)
          eye.signalTo(foundPos)
          eye.spawn()
          level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
          player.swing(interactionHand)
          player.addItemCooldown('ftbskies:eye_of_legend_nether', 10*20)
          return true
        }
      }
      return false
    })

    event.create('ftbskies:eye_of_legend_end').displayName('End Eye of Legend').unstackable()
    .use((level, player, interactionHand) => {
      let item = player.getHeldItem(interactionHand)
      player.startUsingItem(interactionHand)
      if (level.side == 'server') {
        let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, 'ftbskies:endcitylocator')
        let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 1000, false)
        if (foundPos) {
          let eye = new $EyeofEnder(level, player.getX(), player.getY(0.5), player.getZ())
          eye.setItem(item)
          eye.signalTo(foundPos)
          eye.spawn()
          level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
          player.swing(interactionHand)
          player.addItemCooldown('ftbskies:eye_of_legend_end', 10*20)
          return true
        }
      }
      return false
    })

    event.create('ftbskies:eye_of_legend_sky').displayName('Eye of Sky Legend').unstackable()
    .use((level, player, interactionHand) => {
      let item = player.getHeldItem(interactionHand)
      player.startUsingItem(interactionHand)
      if (level.side == 'server') {
        let structureTag = $TagKey.create($Registry.STRUCTURE_REGISTRY, 'ftbskies:skylegendlocator')
        let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 1000, false)
        if (foundPos) {
          let eye = new $EyeofEnder(level, player.getX(), player.getY(0.5), player.getZ())
          eye.setItem(item)
          eye.signalTo(foundPos)
          eye.spawn()
          level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
          player.swing(interactionHand)
          player.addItemCooldown('ftbskies:eye_of_legend_sky', 10*20)
          return true
        }
      }
      return false
    })
})