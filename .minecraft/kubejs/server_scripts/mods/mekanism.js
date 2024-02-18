ServerEvents.recipes((event) => {
  event.custom({
    type: "mekanism:enriching",
    input: {
      ingredient: {
        item: "ae2:flawed_budding_quartz",
      },
    },
    output: {
      count: 1,
      item: "ae2:flawless_budding_quartz",
    },
  });

  event.custom({
    type: "mekanism:metallurgic_infusing",
    chemicalInput: { amount: 50, tag: "mekanism:diamond" },
    itemInput: { ingredient: { tag: "forge:ingots/iesnium" } },
    output: { item: "ftbskies:platinum_ingot" },
  });
});
