ServerEvents.recipes(event => {
        event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "minecraft:coal_block"
      },
      "result": {
        "item": "minecraft:blackstone"
      }
    }).id('ftbskies:blackstone')

        event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "farmersdelight:organic_compost"
      },
      "result": {
        "item": "minecraft:dirt"
      }
    }).id('ftbskies:compostdirt')

            event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "minecraft:end_stone_bricks"
      },
      "result": {
        "item": "minecraft:end_stone"
      }
    }).id('ftbskies:endstone')

      event.custom({
      "type": "pedestals:cobblegen",
      "blockBelow": {
        "item": "farmersdelight:rich_soil"
      },
      "result": {
        "item": "minecraft:dirt"
      }
    }).id('ftbskies:richdirt')
})