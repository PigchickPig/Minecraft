// priority: 800
const chestEvent = {
    name: "ftbskies:chest",
    chance: 0.50,
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
        const mimic = 'artifacts:mimic'
        let failed = false
        let chest_block = checkForBlockInCube('minecraft:chest',level,15,player.x,player.y,player.z)
        if (chest_block == '')
            failed = true

        if (failed) {
            console.log('Failed to find chest')
            event.server.scheduleInTicks(20,(_) => {
                player.persistentData.timer = 9000; //reset their event timer by half since no event was able to trigger
            })
        }
        else {

            let blockLoc = chest_block.pos
            let mimicEntity = level.createEntity(mimic);
            mimicEntity.setPosition(blockLoc.x,blockLoc.y + 1.25,blockLoc.z)
            mimicEntity.spawn();
            player.tell([
                `Your chests have multiplied, new chest at X: ${blockLoc.x}, Y: ${blockLoc.y}, Z: ${blockLoc.z}. What could be inside of it?`,
            ]);
        }
    }
}
