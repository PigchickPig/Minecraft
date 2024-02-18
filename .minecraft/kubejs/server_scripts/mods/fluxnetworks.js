ServerEvents.recipes(event => {
	event.custom({
      "type": "mekanism:metallurgic_infusing",
      "chemicalInput": {
        "amount": 40,
        "tag": "mekanism:redstone"
      },
      "itemInput": {
        "ingredient": {
          "tag": "forge:dusts/obsidian"
        }
      },
      "output": {
        "item": "fluxnetworks:flux_dust"
      }
    }).id("ftbskies:flux")
})