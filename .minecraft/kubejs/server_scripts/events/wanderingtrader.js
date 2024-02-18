// priority: 800
const wanderingtraderEvent = {
  name: "ftbskies:wandering_trader",
  chance: 0.15,
  minDistance: 2,
  maxDistance: 15,
  size: 0,
  checkBlocks: ["minecraft:air"],
  requireBlockBelow: true,
  no_solicitors: Block.id("cyclic:no_soliciting").blockState,
  execute(event, player, location) {
    const level = player.getLevel();
    const checkForNoSolicitors = new Ku.Level(level).findBlockWithinRadius(this.no_solicitors, location.pos, 32, false);
    const checkAmountOfTraders = new Ku.Level(level).findEntitiesWithinRadius("minecraft:wandering_trader", location.pos, 64);

    if (checkForNoSolicitors.length === 0 && checkAmountOfTraders.length < 2) {
      player.tell([
        `Wandering Trader has spawned at X: ${location.pos.x}, Y: ${location.pos.y}, Z: ${location.pos.z}`,
      ]);

      let entityWandering = level.createEntity("minecraft:wandering_trader");
      entityWandering.setPosition(
        location.pos.x + 0.5,
        location.pos.y + 0.5,
        location.pos.z + 0.5
      );

      entityWandering.spawn();
    }
  },
};


const heads = [
  "kSunekaer",
  "Naxanria",
  "Loneztar",
  "slowpoke101",
  "Jake_Evans",
  "ShyNieke",
  "ErrorMikey",
  "1aaron5",
  "desht",
  "MaxNeedsSnacks",
  "DinnerBeef",
  "UnRealDinnerbone",
  "NMX_R3GEN",
  "OfficialyAwsome",
  "manmaed",
  "Gaz492",
  "TheonlyTazz",
  "Saereth"
];

EntityEvents.spawned( (event) => {
  if (event.entity.type === "minecraft:wandering_trader") {
    //Grabbing traders current NBT
    let nbt = event.entity.fullNBT;
    let elytra = 'minecraft:elytra'

    //Check if the trader doesn't have an elytra for sale, if not, add it.
    if (!nbt.Offers.Recipes.some((recipe) => recipe.sell.id === elytra)) {
      let elytraCost  = Math.round((Math.random() * 3) + 1)
      nbt.Offers.Recipes.add(
        NBT.compoundTag({
          maxUses: 3,
          buy: Item.of(`${elytraCost}x minecraft:emerald`).toNBT(),
          sell: Item.of(elytra).toNBT(),
        })
      )
        event.entity.mergeFullNBT(nbt)
        nbt = event.entity.fullNBT;

    }

    //Check if the trader already has heads for sale, if so stop here.
    if (nbt.Offers.Recipes.some((recipe) => recipe.sell.id === "minecraft:player_head")) {
      return;
    }

    //Create copy of the FTB Staff heads
    let headsCopy = [];
    headsCopy = Array.from(heads);

    //Get all players on the server
    event.server.players.forEach((name) => {
      //Add the players that isn't in the array all to the array
      if (!headsCopy.some((n) => n === name.toString())) {
        headsCopy.push(name);
      }
    });

    //Shuffling the heads array a lot
    headsCopy = headsCopy
      .sort(() => Math.random() - 0.6)
      .sort(() => Math.random() - 0.2)
      .sort(() => Math.random() - 0.1);

    //Taking the first 3 names from the shuffled array
    headsCopy.slice(0, 6).forEach((name) => {
      //Get random price between 1 and 3
      let price = Math.round((Math.random() * (3)) + 1);

      //Adding the trade to the NBT data
      nbt.Offers.Recipes.add(
        NBT.compoundTag({
          maxUses: 3,
          buy: Item.of(`${price}x minecraft:emerald`).toNBT(),
          sell: Item.of("minecraft:player_head", { SkullOwner: name }).toNBT(),
        })
      );
    });

    // make sure the trader despawns after the regular amount of time as well
    nbt.DespawnDelay = NBT.i(48000);

    //Merging the NBT data back on to the trader
    event.entity.mergeFullNBT(nbt);
  }
});
