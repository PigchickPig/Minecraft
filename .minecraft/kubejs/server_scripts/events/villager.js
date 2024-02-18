// priority: 800
const villagerEvent = {
  name: "ftbskies:villager",
  chance: 0.15,
  minDistance: 2,
  maxDistance: 15,
  size: 0,
  checkBlocks: ["minecraft:air"],
  requireBlockBelow: true,
  
  execute(event, player, location) {
    const level = player.getLevel();

    const checkAmountOfVillagers = new Ku.Level(level).findEntitiesWithinRadius(
      "minecraft:villager",
      location.pos,
      64
    );

    if (checkAmountOfVillagers.length < 2) {
      player.tell([
        `A visiting villager has arrived at X: ${location.pos.x}, Y: ${location.pos.y}, Z: ${location.pos.z}`,
      ]);
      player.tell([
        `Villager: Hey this place is pretty nice, I think I'll stick around!`,
      ]);

      let entityVillager = level.createEntity("minecraft:villager");
      entityVillager.setPosition(
        location.pos.x + 0.5,
        location.pos.y + 0.5,
        location.pos.z + 0.5
      );

      entityVillager.spawn();
    }
  },
};


