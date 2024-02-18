// priority: 800
const lootbeeEvent = {
  name: "ftbskies:bees",
  chance: 0.4,
  minDistance: 2,
  maxDistance: 15,
  size: 0,
  checkBlocks: [
    "minecraft:air"
  ],
  requireBlockBelow: true,
  itemDespawnTime: 400,
  lootTable: {
    table1: [
      { entry: "minecraft:diamond", weight: 10 },
      { entry: "minecraft:emerald", weight: 10 },
      { entry: "ftbdripper:dripper", weight: 10 },
      { entry: "elementalcraft:source", weight: 10 },
      { entry: "thermal:upgrade_augment_1", weight: 10 },
      { entry: "ironchest:gold_chest", weight: 10 },
      { entry: "minecraft:copper_ingot", weight: 25 },
      { entry: "forcecraft:force_gem", weight: 20 },
      { entry: "minecraft:gold_ingot", weight: 15 },
      { entry: "botania:cyan_mystical_flower", weight: 15 },
      { entry: "botania:white_mystical_flower", weight: 15 },
      { entry: "ars_creo:starbuncle_wheel", weight: 15 },
      { entry: "chancecubes:chance_cube", weight: 20 },
      { entry: "bhc:red_heart", weight: 20 },
      { entry: "artifacts:superstitious_hat", weight: 10 },
      { entry: "energeticsheep:energetic_sheep_spawn_egg", weight: 35 },
      { entry: "minecraft:egg", weight: 60 },
    ],
    table2: [
      { entry: "minecraft:diamond", weight: 10 },
      { entry: "elementalcraft:source", weight: 10 },
      { entry: "thermal:upgrade_augment_2", weight: 10 },
      { entry: "ae2:flawless_budding_quartz", weight: 10 },
      { entry: "productivebees:upgrade_simulator", weight: 15 },
      { entry: "laserio:card_fluid", weight: 15 },
      { entry: "laserio:card_item", weight: 15 },
      { entry: "laserio:card_energy", weight: 15 },
      { entry: "ironchest:crystal_chest", weight: 10 },
      { entry: "minecraft:trident", weight: 15 },
      { entry: "chancecubes:chance_cube", weight: 20 },
      { entry: "mekanism:ingot_osmium", weight: 25 },
      { entry: "minecraft:ender_pearl", weight: 25 },
      { entry: "bhc:yellow_heart", weight: 20 },
      { entry: "minecraft:turtle_egg", weight: 30 },
    ],
    table3: [
      { entry: "chancecubes:chance_cube", weight: 20 },
      { entry: "refinedstorage:4k_storage_part", weight: 10 },
      { entry: "ae2:cell_component_4k", weight: 10 },
      { entry: "cyclic:soulstone", weight: 15 },
      { entry: "spirit:broken_spawner", weight: 15 },
      { entry: "hexerei:budding_selenite", weight: 15 },
      { entry: "elementalcraft:source", weight: 20 },
      { entry: "tetra:planar_stabilizer", weight: 20 },
      { entry: "tetra:thermal_cell", weight: 20 },
      { entry: "tetra:combustion_chamber", weight: 20 },
      { entry: "tetra:lubricant_dispenser", weight: 20 },
      { entry: "thermal:upgrade_augment_3", weight: 20 },
      { entry: "botania:terrasteel_ingot", weight: 25 },
      { entry: "mekanism:ultimate_induction_cell", weight: 25 },
      { entry: "bhc:green_heart", weight: 20 },
      { entry: "apotheosis:boss_summoner", weight: 30 },
    ],
    table4: [
      { entry: "chancecubes:chance_cube", weight: 20 },
      { entry: "refinedstorage:16k_storage_part", weight: 10 },
      { entry: "ae2:cell_component_16k", weight: 10 },
      { entry: "apotheosis:mythic_material", weight: 15 },
      { entry: "spirit:broken_spawner", weight: 15 },
      { entry: "hexerei:budding_selenite", weight: 15 },
      { entry: "elementalcraft:source", weight: 20 },
      { entry: "compactmachines:machine_giant", weight: 20 },
      { entry: "tetra:thermal_cell", weight: 20 },
      { entry: "apotheosis:endshelf", weight: 10 },
      { entry: "mekanism:ultimate_tier_installer", weight: 20 },
      { entry: "occultism:storage_stabilizer_tier4", weight: 5 },
      { entry: "productivebees:upgrade_simulator", weight: 25 },
      { entry: "botania:dice", weight: 25 },
      { entry: "bhc:blue_heart", weight: 20 },
      { entry: "apotheosis:boss_summoner", weight: 30 },
    ],

  },
  execute(event, player, location) {
    const level = player.getLevel();
    player.tell([
      `Loot Bee has spawned at X: ${location.pos.x}, Y: ${location.pos.y}, Z: ${location.pos.z}`,
      `\nHurry up and get the loot before it despawns!`,
    ]);

    let selectedLootTable;
    if (player.persistentData.lootBeeCount >= 60) {
      selectedLootTable = this.lootTable.table4;
      player.persistentData.lootBeeCount++;
    } 
      else if (player.persistentData.lootBeeCount >= 40) {
      selectedLootTable = this.lootTable.table3;
      player.persistentData.lootBeeCount++;
    } else if (player.persistentData.lootBeeCount >= 20) {
      selectedLootTable = this.lootTable.table2;
      player.persistentData.lootBeeCount++;
    } else if (player.persistentData.lootBeeCount >= 0) {
      selectedLootTable = this.lootTable.table1;
      player.persistentData.lootBeeCount++;
    } else {
      selectedLootTable = this.lootTable.table1;
      player.persistentData.lootBeeCount = 1;
    }                                                           

    const entity = level.createEntity("minecraft:bee");
    entity.setPosition(
      location.pos.x + 0.5,
      location.pos.y + 0.5,
      location.pos.z + 0.5
    );
    entity.glowing = true;
    entity.persistentData.maxRounds = Math.floor(Math.random() * (10 - 3 + 1) + 3);
    entity.persistentData.currentRound = 0;

    entity.spawn();

    event.server.scheduleInTicks(800, (callback) => {
      this.cycle(
        event.server,
        entity,
        player,
        level,
        selectedLootTable,
        location.locationInfo
      );
    });
  },
  cycle(server, entity, player, level, lootTable, location) {
    if (entity.persistentData.currentRound < entity.persistentData.maxRounds && entity.alive) {
      entity.persistentData.currentRound++;

      server.scheduleInTicks(60, (callback) => {
        var itemEnity = level.createEntity("item");
        itemEnity.item = Ku.Lists.getEntryBasedOnWeight(lootTable);
        itemEnity.setPosition(entity.x, entity.y, entity.z);
        itemEnity.age = 6000 - this.itemDespawnTime;
        itemEnity.glowing = true;
        itemEnity.spawn();

        this.cycle(server, entity, player, level, lootTable, location);
      });
    } else {
      if (entity.alive) {
        entity.glowing = false;
      }

    }
  },
};