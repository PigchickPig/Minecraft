// priority: 100
let timer = 0;
let events = [lootbeeEvent, chestEvent, wanderingtraderEvent, frogEvent, teaEvent, amethystEvent, crowEvent, endermiteEvent, villagerEvent, stickEvent];


ServerEvents.tags('worldgen/structure', event => {
  event.add('ftbskies:legendlocator', 'skyvillages:skyvillage')
  event.add('ftbskies:legendlocator', 'skyvillages:crimson_sky_village')
  event.add('ftbskies:skylegendlocator', 'castle_in_the_sky:castle_in_the_sky')
  event.add('ftbskies:legendlocator', 'skyvillages:warped_sky_village')
  event.add('ftbskies:endcitylocator', 'minecraft:end_city')
  
  
})

ServerEvents.tick((event) => {
  timer++;
  if (timer > 1000) {
    var debug = false;  
    var ran = Math.random();
    timer = 0;

    //Get all player
    var players = event.server.players;
    if (debug)
      console.log('Events Triggered')
    //If no players return
      if (players.length === 0) {
        if (debug)
          console.log('No players found for events')
          return;
      }

    //Choose a player to do the event for
    var chosenPlayer = players[Math.floor(Math.random() * players.length)];
    if (debug)
        console.log('Chose player for event ' + chosenPlayer.username)
    //Check players gamemode, so we only do this on players in survival.
      if (chosenPlayer.isCreative() || chosenPlayer.isSpectator()) {
        if (debug)
          console.log('Player is create or spectator, exiting')       
          return
      }

    //Check if player is alive.
      if (!chosenPlayer.alive) {
        if (debug)
          console.log('Player is dead')
          return;
      }

    //Check persistent data is available
      if (!chosenPlayer.persistentData) {
        if (debug)
          console.log('Player missing persistent Data')
          return;
      }
    //If no timer exist on player make it and return
    if (!chosenPlayer.persistentData.timer) {
        if (debug)
          console.log('player has no timer data')
      chosenPlayer.persistentData.timer = 0;
      return;
    }

    //If player had an event happen within the last 15min do nothing
     if (chosenPlayer.persistentData.timer < 10000) {
        if (debug)
          console.log('Player has had an event recently, skipping')
          return;
      }

    //Creates a list of events the user player has disabled.
    var disabledEvents = [];
    if (chosenPlayer.persistentData.disabledEvents) {
      for (
        let i = 0;
        i < chosenPlayer.persistentData.disabledEvents.length;
        i++
      ) {
        disabledEvents.push(chosenPlayer.persistentData.disabledEvents[i]);
      }
    }

    //Filter event based on their chance, disabled events
    var filteredEvents = events.filter(
      (e) => ran <= e.chance && !disabledEvents.includes(e.name)
    );

    //Choose an event from the filtered list
    var chosenEvent =
      filteredEvents[Math.floor(Math.random() * filteredEvents.length)];

    // If no event return
      if (!chosenEvent) {
        if (debug)
          console.log('no event was chosen, returning')
          return;
      }

    //Check for required biomes
    if (chosenEvent.requiredBiomes && chosenEvent.requiredBiomes.length > 0) {
      let biomeHolder = chosenPlayer.level.minecraftLevel.getBiome(
        chosenPlayer.getBlock().getPos()
      );
      let foundBiome = chosenEvent.requiredBiomes.find((e) =>
        biomeHolder.is(e)
      );

        if (!foundBiome) {
        if (debug)
          console.log('Required biome not found, returning')
            return;
        }
    }

    //40% chance of no event for the player this time.
    if (ran > 0.4) {
        if (debug)
          console.log('40% chance triggered, no event for this player at this time')
      chosenPlayer.persistentData.timer = 5000; //try again in half the normal timeout period
      return;
    }

    if (chosenEvent.size >= 0 &&
      chosenEvent.minDistance &&
      chosenEvent.maxDistance) {
      //10 Tries to find random location for the event to happen.
      let tries = 0;
      let spawnFound;
      let playerPos = new BlockPos(chosenPlayer.x,chosenPlayer.y,chosenPlayer.z);

      while (tries < 10 && !spawnFound) {
        let randomLoc = new Ku.Level(chosenPlayer.getLevel()).getRandomLocation(
          playerPos,
          chosenEvent.minDistance,
          chosenEvent.maxDistance
        );

        if (debug && !spawnFound)
          console.log('Checking spawn location for event:' + chosenEvent.name)

        let spawnCheck = checkSpawnLocation(
          chosenPlayer.getLevel(),
          randomLoc,
          chosenEvent.size,
          chosenEvent.checkBlocks,
          chosenEvent.requireBlockBelow
        );
        if (spawnCheck.okay) {
          spawnFound = { pos: randomLoc, locationInfo: spawnCheck };
        } else {
          tries++;
        }
      }

        if (debug && !spawnFound)
          console.log('Spawn not found for event')

      //If event and player has been chosen, start the event and restart players timer
      if (chosenEvent && chosenPlayer && spawnFound) {
        chosenEvent.execute(event, chosenPlayer, spawnFound);
        chosenPlayer.persistentData.timer = 0;
      }
    } else {
      //If event and player has been chosen, start the event and restart players timer
      if (chosenEvent && chosenPlayer) {
        chosenEvent.execute(event, chosenPlayer, null);
        chosenPlayer.persistentData.timer = 0;
      }
    }
  }
});

PlayerEvents.tick((event) => {
  //Ticking players timer.
  event.player.persistentData.timer >= 0
    ? event.player.persistentData.timer++
    : (event.player.persistentData.timer = 0);
});
