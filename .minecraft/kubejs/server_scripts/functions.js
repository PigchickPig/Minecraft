//priority: 1000

const sec = 20

// Functions
function giveVanillaGear(event, material){
  equipment.forEach(slot => {
    //console.log(`${slot[0]} : giving minecraft:${material}_${slot[1]}`)
    event.entity.setEquipment(slot[0], `minecraft:${material}_${slot[1]}`)
  })
}

function title(username, text, color, bold, italic) {
    Utils.server.runCommandSilent(`title ${username} title ${JSON.stringify({
        text: text,
        bold: bold ?? true,
        italic: italic ?? false, 
        color: color ?? 'red'
    })}`)
}

function subtitle(username, text, color, bold, italic) {
    Utils.server.runCommandSilent(`title ${username} subtitle ${JSON.stringify({
        text: text,
        bold: bold ?? false,
        italic: italic ?? true, 
        color: color ?? 'yellow'
    })}`)
}

function actionbar(username, text, color, bold, italic) {
    Utils.server.runCommandSilent(`title ${username} actionbar ${JSON.stringify({
        text: text,
        bold: bold ?? false,
        italic: italic ?? false, 
        color: color ?? 'yellow'
    })}`)
}

function delay(delay, command){
    Utils.server.scheduleInTicks(delay, (_) => command)

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function customName(entity, name, chance) {
  if(getRandomInt(1, 100)<chance){
    let nbt = entity.fullNBT
    nbt.CustomName = `{"text":"${name}"}`
    nbt.CustomNameVisible = true
    entity.fullNBT = nbt
  }
}

function dialog(event, dialoglist, delay){
  let initdelay = delay
  dialoglist.forEach(text => {
    delay = delay+initdelay
    Utils.server.scheduleInTicks(delay, (_) => event.player.tell(text))
  })
}

function capFirst(string) {
  return string[0].toUpperCase() + string.slice(1);
}


function blockBreak(event, range) {
    const blacklist = [
      'minecraft:bedrock',
      'spirit:soul_pedestal',
      'spirit:pedestal',
      'indrev:wither_proof_obsidian'
  ]
  const {entity, level} =  event
  const {x, y, z} = entity

  let posRange = range
  let negRange = range-range-range

  for (let ix = negRange; ix < posRange; ix++) {
      for (let iz = negRange; iz < posRange; iz++) {
          for (let iy = 0; iy < posRange; iy++) {
              let block = event.level.getBlock([x+ix, y+iy, z+iz])

              if (!blacklist.includes(block.id)){
                  block.popItem(block.id)
                  block.set('air')}

          }
      }
  }
}

//TODO: refactor to pass particle and effect for more usability
function conversion_effect(player,block) {
    let sound_effect = `execute at ${player.username} run playsound minecraft:block.ancient_debris.hit block ${player.username}`
    let particle_effect = `particle minecraft:ash ${block.x} ${block.y+0.2} ${block.z} 0.5 1 0.5 0.5 100 force`
    player.runCommandSilent(sound_effect)
    player.runCommandSilent(particle_effect)
}

function spawnEntitiesAroundBlock(level,entityId,count,pos,xOffset,yOffset,zOffset) {
            for (let i = 0; i < count; i++) {
                let entity = level.createEntity(entityId)
                entity.x = pos.x + Math.floor(getRandomInt(-1*xOffset,xOffset))
                entity.y = pos.y + Math.floor(getRandomInt(0,yOffset))
                entity.z = pos.z + Math.floor(getRandomInt(-1*zOffset,zOffset))
                entity.spawn()
            }

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