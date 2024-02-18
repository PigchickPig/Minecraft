// priority: 0

ServerEvents.recipes((event) => {
  const stonecutting = event.stonecutting;
  var transmute = function (arrayOfBlocks) {
    var cpt = 0;
    while (cpt < arrayOfBlocks.length) {
      var otherBlocks = arrayOfBlocks
        .slice(0, cpt)
        .concat(arrayOfBlocks.slice(cpt + 1));
      stonecutting(arrayOfBlocks[cpt], otherBlocks);
      cpt++;
    }
  };

  //nether brick
  event
    .custom({
      type: "occultism:spirit_fire",
      ingredient: {
        item: "minecraft:brick",
      },
      result: {
        item: "minecraft:nether_brick",
      },
    })
    .id("ftbskies:netherbrick");

  //sourceberry
  event
    .custom({
      type: "botania:mana_infusion",
      input: {
        item: "minecraft:sweet_berries",
      },
      mana: 1000,
      output: {
        item: "ars_nouveau:source_berry",
      },
    })
    .id("ftbskies:sourceberry");

  //menril sapling
  event
    .custom({
      type: "botania:mana_infusion",
      input: {
        item: "minecraft:oak_sapling",
      },
      mana: 1000,
      output: {
        item: "integrateddynamics:menril_sapling",
      },
    })
    .id("ftbskies:sourceberry");

  //spooky scary skelebone
  event
    .shaped("bhc:wither_bone", ["B  ", " B ", "  B"], {
      B: "wstweaks:fragment",
    })
    .id("ftbskies:spookyscarybone");

  //bee hive
  event
    .shaped("minecraft:beehive", ["PPP", "SSS", "PPP"], {
      P: "#minecraft:planks",
      S: "minecraft:sugar",
    })
    .id("ftbskies:hivealternate");

  //glow lichen
  event
    .custom({
      type: "botania:mana_infusion",
      input: {
        item: "minecraft:kelp",
      },
      mana: 500,
      output: {
        item: "minecraft:glow_lichen",
      },
    })
    .id("ftbskies:glowlichen");

  event
    .custom({
      type: "occultism:spirit_fire",
      ingredient: {
        item: "minecraft:sand",
      },
      result: {
        item: "minecraft:soul_sand",
      },
    })
    .id("ftbskies:soulsand");

  event
    .shaped("ftbskies:amethyst_mesh", ["SAS", "AMA", "SAS"], {
      S: "minecraft:stick",
      A: "minecraft:amethyst_shard",
      M: "ftbskies:mana_steel_mesh",
    })
    .id("ftbskies:amethystmesh");

  event
    .shaped("ftbskies:mana_steel_mesh", ["SSS", "SMS", "SSS"], {
      S: "minecraft:stick",
      M: "botania:manasteel_ingot",
    })
    .id("ftbskies:manasteelmesh");

  event
    .shapeless("unusualend:gilded_pearl", [
      "minecraft:ender_eye",
      "minecraft:gold_block",
    ])
    .id("ftbskies:gildedeye");

    event
    .shapeless("4x forcecraft:pile_of_gunpowder", [
      "minecraft:gunpowder"
    ])
    .id("ftbskies:tinytogunpowder");


  //statue manual
  event.shapeless(
    Item.of("patchouli:guide_book", '{"patchouli:book":"statues:statues"}'),
    ["minecraft:book", "statues:display_stand"]
  );
  event
    .shapeless("minecraft:diorite", ["4x ftbskies:diorite_chunk"])
    .id("ftbskies:diorite");
  event
    .shapeless("minecraft:tuff", ["4x ftbskies:tuff_chunk"])
    .id("ftbskies:tuff");
  event
    .shapeless("minecraft:andesite", ["4x ftbskies:andesite_chunk"])
    .id("ftbskies:andesite");

  event
    .shapeless("minecraft:cobblestone", ["4x ftbskies:rock"])
    .id("ftbskies:rock");
  event.shapeless("minecraft:dirt", ["4x ftbskies:soil"]).id("ftbskies:soil");

  event.smelting("petrock:stoneium", "ftbskies:rock");

  //wooden gear
  event
    .shaped("ftbskies:wooden_gear", [" S ", "SBS", " S "], {
      S: "minecraft:stick",
      B: "minecraft:stone_button",
    })
    .id("ftbskies:woodengear");
  //force sapling
  event
    .shapeless("forcecraft:force_sapling", [
      "minecraft:oak_sapling",
      "3x forcecraft:force_gem",
    ])
    .id("ftbskies:forcesapling");

  //shroom lights
  event
    .shapeless("4x minecraft:shroomlight", [
      "minecraft:brown_mushroom_block",
      "3x minecraft:glowstone_dust",
    ])
    .id("ftbskies:shroomlight1");
  event
    .shapeless("4x minecraft:shroomlight", [
      "minecraft:red_mushroom_block",
      "3x minecraft:glowstone_dust",
    ])
    .id("ftbskies:shroomlight2");

  //Gold bars
  event
    .shapeless("cyclic:gold_bars", ["quark:gold_bars"])
    .id("ftbskies:goldbars1");
  event
    .shapeless("quark:gold_bars", ["cyclic:gold_bars"])
    .id("ftbskies:goldbars2");

  //void upgrade
  event
    .shapeless("functionalstorage:void_upgrade", [
      "thermal:machine_null_augment",
    ])
    .id("ftbskies:voidupgrade");
  event
    .shapeless("thermal:machine_null_augment", [
      "functionalstorage:void_upgrade",
    ])
    .id("ftbskies:voidupgradeconvert");

  let eHead = Item.of("minecraft:player_head").withNBT(
    '{SkullOwner:{Id:[I;1090499442,318129784,-1275977354,-1084826293],Name:"MHF_Enderman",Properties:{textures:[{Signature:"vw5qrGqKTKN/AEOoxdrpBsjW+vd70dtjuupPzSyBgmrsw4RrYvW8MfoRI/FEhSt0ofilE66Jt5fpR6GtkuTNKKGYgAzELS315RbJQsU8NrMhR4w9k91n1cjkeXZeGNsPJObgPO88B/qKBg3iEEwBiCMIymqf2Rs8JN5hyzNPaXFTd8HwAZ1548ClzoW3U+QuJ7itSNIs4dmoQ+i7LGx9uhb/tuIX7+6PkgwiyJqzYtD/fgwlgxfgL6JXYopKvUfe0576usLjkJLyRrGpMP2J0AFi2HOCqBDgxZg+cz9ymHdQDaLopSbhVAyymKQMUXOYW3M+vxZ/tzNniWdfARaR9JQg2uILxeccdVorA7SOoDcDWGDJPEaUV35SmSlOQtjE0rXd+J6GfESkdcXEPYwJZ2Zxn6+jYBZ4GCBPXPbEd0ccAcXHqUOS3vizw77I9LL1cY0ksWR7OcVozQTjp5SlquIBX/38mnTCqro2gaSZ/Y0epPiV6z91pele3tmiYJ2JcdS2VY8UbxEFczFJRfAFqItldicuVPyrJTchM1hWcgEWrxbpUGCssY44+9I6y6Dd85TnvdjdgLIQujlbHu1Rpq/O5Nzj2fnXy7BX3IdWLKrelsrXgzFDdr5dYBpCRXC4fn7TA1W+8uB/oe4cnqxuemL5JtzJD/9ah5FzMYDuC5Q=",Value:"ewogICJ0aW1lc3RhbXAiIDogMTY4MDMyNjg3OTAxMSwKICAicHJvZmlsZUlkIiA6ICI0MGZmYjM3MjEyZjY0Njc4YjNmMjIxNzZiZjU2ZGQ0YiIsCiAgInByb2ZpbGVOYW1lIiA6ICJNSEZfRW5kZXJtYW4iLAogICJzaWduYXR1cmVSZXF1aXJlZCIgOiB0cnVlLAogICJ0ZXh0dXJlcyIgOiB7CiAgICAiU0tJTiIgOiB7CiAgICAgICJ1cmwiIDogImh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWIwOWEzNzUyNTEwZTkxNGIwYmRjOTA5NmIzOTJiYjM1OWY3YThlOGE5NTY2YTAyZTdmNjZmYWZmOGQ2Zjg5ZSIKICAgIH0KICB9Cn0="}]}}}'
  );
  //enderman head
  event
    .shapeless(eHead, ["supplementaries:enderman_head"])
    .id("ftbskies:ehead1");
  event
    .shapeless("supplementaries:enderman_head", [eHead])
    .id("ftbskies:ehead2");

  //Blaze blocks
  event
    .shapeless("botania:blaze_block", ["9x minecraft:blaze_powder"])
    .id("ftbskies:blazeblock");
  event
    .shapeless("9x minecraft:blaze_powder", ["botania:blaze_block"])
    .id("ftbskies:blazeblocktopowder");

  //temporal Pouch
  event
    .shaped("gag:time_sand_pouch", ["LLL", "CPC", "LLL"], {
      P: "enderstorage:ender_pouch",
      L: "minecraft:lapis_lazuli",
      C: "minecraft:clock",
    })
    .id("ftbskies:timepouch");

  //eye of legend
  event
    .shaped("ftbskies:eye_of_legend", [" D ", "DED", " D "], {
      D: "minecraft:diamond",
      E: "minecraft:ender_eye",
    })
    .id("ftbskies:eyeoflegend");

  //End Portal Frame
  event
    .shaped("minecraft:end_portal_frame", ["OOO", "EGE", "OOO"], {
      O: "minecraft:obsidian",
      E: "minecraft:end_stone_bricks",
      G: "botania:life_essence",
    })
    .id("ftbskies:endportalframe");

  //ad astra book
  event
    .shapeless("ad_astra:astrodux", ["#forge:ingots/steel", "minecraft:book"])
    .id("ftbskies:astrodux");

  //Bamboo blocks
  transmute(["quark:bamboo_block", "thermal:bamboo_block"]);
  transmute(["thermal:bamboo_block", "quark:bamboo_block"]);
});
