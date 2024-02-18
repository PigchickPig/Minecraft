let akashic = Item.of('akashictome:tome').withNBT('{"akashictome:data":{advancedperipherals:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}},ae2:{Count:1b,id:"ae2:guide"},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},botania:{Count:1b,id:"botania:lexicon"},cookingforblockheads:{Count:1b,id:"cookingforblockheads:recipe_book"},cyclic:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"cyclic:cyclic_guide_book"}},ftbquests:{Count:1b,id:"ftbquests:book"},hexcasting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"hexcasting:thehexbook"}},industrialforegoing:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},integratedtunnels:{Count:1b,id:"integrateddynamics:on_the_dynamics_of_integration"},productivebees:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"productivebees:guide"}},rftoolsbase:{Count:1b,id:"rftoolsbase:manual"},sebastrnlib:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"sebastrnlib:sebastrn_mods_guide_book"}},solcarrot:{Count:1b,id:"solcarrot:food_book"}}}')
//Starter Items
PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('starting_items')) {
        // Add the stage
        event.player.stages.add('starting_items')
        global['startingItems'].forEach(item => {
            event.player.give(item)
        })
    }
    if (!event.player.stages.has('akashic')) {
        event.player.give(akashic)
        event.player.stages.add('akashic')
    }
    //Check if it's the Compact Machines island
    let cm = checkForBlockInCube('compactmachines:machine_giant',event.level,5,0,64,0)
    if (cm != '' && !event.player.stages.has('compact_starters')) {
        event.player.stages.add('compact_starters')
        event.player.give(Item.of('compactmachines:personal_shrinking_device'))
    }
})
