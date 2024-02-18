// priority: 800
const crowEvent = {
    name: "ftbskies:crow",
    chance: 0.15,
    minDistance: 1,
    maxDistance: 15,
    size: 0,
    checkBlocks: [
        "minecraft:air"
    ],
    requireBlockBelow: true,
    itemDespawnTime: 400,

    execute(event,player,location) {
        const level = player.getLevel();
        const crow = 'hexerei:crow'
        let failed = false
        let grass_block = checkForBlockInCube('minecraft:grass_block',level,15,player.x,player.y,player.z)
        if (grass_block == '')
            failed = true

        if (failed) {
            event.server.scheduleInTicks(20,(_) => {
                player.persistentData.timer = 9000; //reset their event timer by half since no event was able to trigger
            })
        }
        else {

            let blockLoc = grass_block.pos



            let animal = level.createEntity(crow);
            animal.setPosition(blockLoc.x + 0.25,blockLoc.y + 1.5,blockLoc.z + 0.25)
            animal.spawn();
        }
    }
}
