ServerEvents.recipes(event => {
  const ftbtools = event.recipes.ftbsba;

  ftbtools.hammer(
    ["minecraft:cobblestone"],
    [
      "minecraft:stone",
      "minecraft:granite",
      "minecraft:polished_granite",
      "minecraft:diorite",
      "minecraft:polished_diorite",
      "minecraft:andesite",
      "minecraft:polished_andesite",
      "minecraft:polished_deepslate",
      "minecraft:tuff",
      "minecraft:infested_stone",
      "minecraft:infested_deepslate",
    ]
  );
  ftbtools.hammer(
    ["minecraft:gravel"],
    [
      "minecraft:cobblestone",
      "minecraft:mossy_cobblestone",
      "minecraft:infested_cobblestone",
    ]
  );
  ftbtools.hammer(["minecraft:sand"],"#forge:gravel");
  ftbtools.hammer(["ftbskies:dust"], "#minecraft:sand");
  ftbtools.hammer(["ftbskies:crushed_netherrack"],"#forge:netherrack");
  ftbtools.hammer(["ftbskies:crushed_end_stone"], "#forge:end_stones");
  ftbtools.hammer(["minecraft:cobbled_deepslate"], "#forge:deepslate");


})
