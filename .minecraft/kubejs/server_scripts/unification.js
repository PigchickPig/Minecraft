// priority:100
ServerEvents.recipes(event => {

    //replace thermal outputs
    const IngredientReplacements = [
	    ['ad_astra:steel_ingot','mekanism:ingot_steel']
    ]

    IngredientReplacements.forEach((replacement) => {
          event.replaceOutput({}, replacement[0], replacement[1])
    })

 })

