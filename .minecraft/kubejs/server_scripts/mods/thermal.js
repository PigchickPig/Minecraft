    //input, output, chance
const phytogenAdditions = [
    ['cyclic:flower_purple_tulip','cyclic:flower_purple_tulip', 2.0],
    ['cyclic:flower_absalon_tulip','cyclic:flower_absalon_tulip', 2.0],
    ['ars_nouveau:source_berry','ars_nouveau:source_berry', 2.0],
    ['farmersdelight:rice_panicle','farmersdelight:rice_panicle', 2.0],
    ['farmersdelight:onion','farmersdelight:onion', 2.0],
    ]

    //input, output, chance
const phytogenAdditionsWithSeeds = [
    ['supplementaries:flax_seeds','supplementaries:flax', 1.5],
    ['farmersdelight:cabbage_seeds','farmersdelight:cabbage', 1.5],
    ['ars_nouveau:magebloom_crop','ars_nouveau:magebloom', 1.5],
    ['farmersdelight:tomato_seeds','farmersdelight:tomato', 1.5],
    ['hexerei:sage_seed','hexerei:sage', 2.1],
    ['occultism:datura_seeds','occultism:datura', 1.5]
  ]

  const phytogenTreeAdditions = [
    ['ars_nouveau:purple_archwood_sapling','ars_nouveau:purple_archwood_log', 6.0], 
    ['ars_nouveau:blue_archwood_sapling','ars_nouveau:blue_archwood_log', 6.0], 
    ['ars_nouveau:green_archwood_sapling','ars_nouveau:green_archwood_log', 6.0], 
    ['ars_nouveau:red_archwood_sapling','ars_nouveau:red_archwood_log', 6.0], 
    ['forcecraft:force_sapling','forcecraft:force_log', 6.0], 
    ['occultism:otherworld_sapling','occultism:otherworld_log', 6.0], 
    ['hexerei:willow_sapling','hexerei:willow_log', 6.0], 
    ['hexerei:mahogany_sapling','hexerei:mahogany_log', 6.0], 
    ]

    const gourmandAdditions = [
      ['farmersdelight:carrot_crate',48000],
      ['farmersdelight:potato_crate',16000],
      ['farmersdelight:cabbage_crate',32000],
      ['farmersdelight:tomato_crate',16000],
      ['farmersdelight:onion_crate',32000],
      ['farmersdelight:beetroot_crate',32000],                        
      ['quark:potato_crate',16000],
      ['quark:carrot_crate',48000],
      ['quark:beetroot_crate',32000],
      ['quark:apple_crate',64000],
      ['quark:golden_apple_crate',512000],
      ['quark:apple_crate',64000]
  ]


ServerEvents.recipes(event => {
	//add fuels 
    gourmandAdditions.forEach((fuels) =>
	    event.custom({
              "type": "thermal:gourmand_fuel",
              "ingredient": {
                "item": fuels[0]
              },
              "energy": fuels[1]
            }		
	    )
    )
	



  phytogenAdditions.forEach(recipe => {
        event.custom({
          "type": "thermal:insolator",
          "ingredient": {
            "item": `${recipe[0]}`
          },
          
          "result": [
                {
                  "item": `${recipe[1]}`,
                  "count": 2,
                  "chance": `${recipe[2]}`
                }
          ]
        })
    })


    phytogenAdditionsWithSeeds.forEach(recipe => {
        event.custom({
          "type": "thermal:insolator",
          "ingredient": {
            "item": `${recipe[0]}`
          },        
              "result": [
                    {
                      "item": `${recipe[1]}`,
                      "chance": `${recipe[2]}`
                    },
                    {
                      "item": `${recipe[0]}`,
                      "chance": 1.0
                    }
             ],
              "water_mod": 0.5
        })
    })


    phytogenTreeAdditions.forEach(recipe => {
      event.custom({
        "type": "thermal:insolator",
        "ingredient": {
          "item": `${recipe[0]}`
        },        
            "result": [
                  {
                    "item": `${recipe[1]}`,
                    "count": 6,
                    "chance": `${recipe[2]}`
                  },
                  {
                    "item": `${recipe[0]}`,
                    "chance": 1.0
                  }
           ],
            "water_mod": 0.5
      })
  })

    //Hexerei Custom
    event.custom({
      "type": "thermal:insolator",
      "ingredient": {
        "item": "hexerei:yellow_dock_bush"
      },
      "result": [
        {
          "item": "hexerei:yellow_dock_leaves",
          "chance": 2.0
        },
        {
          "item": "hexerei:yellow_dock_flowers",
          "chance": 1.0
        },
        {
          "item": "hexerei:yellow_dock_bush",
          "chance": 1.0
        },
      ],
      "water_mod": 1.5
    }).id('ftbskies:yellowdock')

    //Hexerei Custom
    event.custom({
      "type": "thermal:insolator",
      "ingredient": {
        "item": "hexerei:mugwort_bush"
      },
      "result": [
        {
          "item": "hexerei:mugwort_leaves",
          "chance": 2.0
        },
        {
          "item": "hexerei:mugwort_flowers",
          "chance": 1.0
        },
        {
          "item": "hexerei:mugwort_bush",
          "chance": 1.0
        },
      ],
      "water_mod": 1.5
    }).id('ftbskies:mugwort')

    //Hexerei Custom
    event.custom({
      "type": "thermal:insolator",
      "ingredient": {
        "item": "hexerei:mandrake_flower"
      },
      "result": [
        {
          "item": "hexerei:mandrake_flowers",
          "chance": 2.0
        },
        {
          "item": "hexerei:mandrake_root",
          "chance": 1.0
        },
        {
          "item": "hexerei:mandrake_flower",
          "chance": 1.0
        },
      ],
      "water_mod": 1.5
    }).id('ftbskies:mandrake')

    //Menril
    event.custom({
      "type": "thermal:insolator",
      "ingredient": {
        "item": "integrateddynamics:menril_sapling"
      },
      "result": [
        {
          "item": "integrateddynamics:menril_log",
          "count": 6,
          "chance": 1.0 
        },
        {
          "item": "integrateddynamics:crystalized_menril_chunk",
          "chance": .5
        },
        {
          "item": "integrateddynamics:menril_berries",
          "chance": 1.75
        },
        {
          "item": "integrateddynamics:menril_sapling",
          "chance": 1.0
        },
      ],
      "water_mod": 1.0
    }).id('ftbskies:menril')

})