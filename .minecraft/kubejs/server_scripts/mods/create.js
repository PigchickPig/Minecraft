ServerEvents.recipes(event => {
    //Milling Recipes
    event.custom({
      "type": "create:milling",
      "ingredients": [
        {
          "item": "minecraft:gravel"
        }
      ],
      "processingTime": 250,
      "results": [
        {
          "item": "minecraft:sand"
        }
      ]
    }).id("ftbskies:millingsand")

    event.custom({
      "type": "create:milling",
      "ingredients": [
        {
          "item": "minecraft:sand"
        }
      ],
      "processingTime": 250,
      "results": [
        {
          "item": "ftbskies:dust"
        }
      ]
    }).id("ftbskies:millingdust")

    event.custom({
      "type": "create:milling",
      "ingredients": [
        {
          "item": "minecraft:netherrack"
        }
      ],
      "processingTime": 250,
      "results": [
        {
          "item": "ftbskies:crushed_netherrack"
        }
      ]
    }).id("ftbskies:millingnetherrack")

    event.custom({
      "type": "create:milling",
      "ingredients": [
        {
          "item": "minecraft:end_stone"
        }
      ],
      "processingTime": 250,
      "results": [
        {
          "item": "ftbskies:crushed_end_stone"
        }
      ]
    }).id("ftbskies:millingendstone")


    //hand crank
    event.shaped('create:hand_crank',[' B ','PPP','  C'],{
            B: '#minecraft:buttons',
            P: '#minecraft:planks',
            C: 'minecraft:cobblestone'
        }).id('ftbskies:handcrank')

    //sifter
    event.shaped('createsifter:sifter',['PCP','SGS',' S '],{
            G: 'ftbskies:wooden_gear',
            P: '#minecraft:planks',
            C: 'minecraft:cobblestone',
            S: 'minecraft:stone'
        }).id('ftbskies:sifter')
})