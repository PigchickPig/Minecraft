const crushIO = [
    ["minecraft:sand","ftbskies:dust"],
    ["minecraft:netherrack","ftbskies:crushed_netherrack"],
    ["minecraft:end_stone", "ftbskies:crushed_end_stone"]
]

ServerEvents.recipes(event => {

    crushIO.forEach(recipeMap => {             
        //force craft grinding
        event.custom({
          "type": "forcecraft:grinding",
          "ingredient": {
            "item": `${recipeMap[0]}`
          },
          "results": [
              {
                "item": `${recipeMap[1]}`
              }
          ],
          "experience": 0.1,
          "processtime": 400
        })
        //elemental craft air mill stone
        event.custom({
          "type": "elementalcraft:grinding",
          "element_amount": 200,
          "input": {
            "item": `${recipeMap[0]}`
          },
          "luck_ration": 5,
          "output": {
            "item": `${recipeMap[1]}`
          }
        })        

        //cyclic crushing macerator
        event.custom({
	        "type": "cyclic:crusher",
	        "input": {
		        "item": `${recipeMap[0]}`
	        },
	        "energy": {
		        "ticks": 100,
		        "rfpertick": 10
	        },
	        "result": {
		        "item": `${recipeMap[1]}`
	        }
        })

        //create crushing
         event.custom({
          "type": "create:crushing",
          "ingredients": [
            {
              "item": `${recipeMap[0]}`
            }
          ],
          "processingTime": 250,
          "results": [
            {
              "item": `${recipeMap[1]}`
            }
          ]
        })

        //ars crush glyph
        event.custom({
          "type": "ars_nouveau:crush",
          "input": {
            "item": `${recipeMap[0]}`
          },
          "output": [
            {
              "chance": 1.0,
              "count": 1,
              "maxRange": 1,
              "item": `${recipeMap[1]}`
            }
          ],
          "skip_block_place": false
        })

        //mek crusher
        event.custom({
          "type": "mekanism:crushing",
          "input": {
            "ingredient": {
              "item": `${recipeMap[0]}`
            }
          },
          "output": {
            "item": `${recipeMap[1]}`
          }
        })

        //pulverizer    
        event.custom({
          "type": "thermal:pulverizer",
          "ingredient": {
            "item": `${recipeMap[0]}`
          },
          "result": [
            {
              "item": `${recipeMap[1]}`
            }
          ]
        })

    });

})