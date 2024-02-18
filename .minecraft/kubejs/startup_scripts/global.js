// priority: 1000

function checkForBlockInCube(targetBlock,level,cubeSize,sx,sy,sz) {
  let found = ''

  for (let x = -Math.abs(cubeSize); x <= cubeSize; x++) {
    if (found != '')
      break;

    for (let y = -Math.abs(cubeSize); y <= cubeSize; y++) {
      if (found != '')
          break;

      for (let z = -Math.abs(cubeSize); z <= cubeSize; z++) {
        if (found != '')
          break;

        let block = level.getBlock(sx + x,sy + y,sz + z)
        if (block.id == targetBlock) {
            found = block
        }
      }
    }
  }
  return found
}

function swapItem(player, oldItem, newItem){
  let inventory = player.inventory

  for(let i = 0; i < inventory.containerSize; i++) {
      if(inventory.getItem(i) == oldItem){
          inventory.setItem(i, newItem)
      }
  }
  player.sendInventoryUpdate();
}

global['unUnified'] = [
    'supplementaries:flint_block',
    'ftbsba:stone_crook',
    'ad_astra:steel_ingot',
    'refinedstorage:silicon',
    'unstabletools:unstable_bow',
    'cyclic:energy_pipe',
    'cyclic:item_pipe',
    'cyclic:fluid_pipe',
    'cyclic:solidifier/solidifier_xpfood',
    'cyclic:structure'
    ]

global['hideOres'] = [

]

global['startingItems'] = [
    '5x minecraft:oak_sapling',
    '5x minecraft:apple',
    '64x minecraft:bone_meal',
    'ftbquests:book'
]