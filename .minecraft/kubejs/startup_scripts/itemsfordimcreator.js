let akashic = Item.of('akashictome:tome').withNBT('{"akashictome:data":{advancedperipherals:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"advancedperipherals:manual"}},ae2:{Count:1b,id:"ae2:guide"},apotheosis:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"apotheosis:apoth_chronicle"}},ars_nouveau:{Count:1b,id:"ars_nouveau:worn_notebook"},botania:{Count:1b,id:"botania:lexicon"},cookingforblockheads:{Count:1b,id:"cookingforblockheads:recipe_book"},cyclic:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"cyclic:cyclic_guide_book"}},ftbquests:{Count:1b,id:"ftbquests:book"},hexcasting:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"hexcasting:thehexbook"}},industrialforegoing:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"industrialforegoing:industrial_foregoing"}},integratedtunnels:{Count:1b,id:"integrateddynamics:on_the_dynamics_of_integration"},productivebees:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"productivebees:guide"}},rftoolsbase:{Count:1b,id:"rftoolsbase:manual"},sebastrnlib:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"sebastrnlib:sebastrn_mods_guide_book"}},solcarrot:{Count:1b,id:"solcarrot:food_book"}}}')

ForgeEvents.onEvent('dev.ftb.mods.ftbteamdimensions.event.DimensionCreatedEvent', event => {

        global['startingItems'].forEach(item => {
            event.player.give(item)
        })
            event.player.give(akashic)

        let cm = checkForBlockInCube('compactmachines:machine_giant',event.level,5,0,64,0)
        if (cm != '' && !event.player.stages.has('compact_starters')) {
            event.player.stages.add('compact_starters')
            event.player.give(Item.of('compactmachines:personal_shrinking_device'))
            let satchel = Item.of('thermal:satchel').withNBT('{ItemInv:{ItemInv:[{Count:1b,Slot:0b,id:"apotheosis:potion_charm",tag:{Damage:0,Potion:"cyclic:levitation"}},{Count:9b,Slot:1b,id:"botania:infused_grass"},{Count:16b,Slot:2b,id:"supplementaries:flax_seeds"},{Count:4b,Slot:3b,id:"minecraft:ice"},{Count:1b,Slot:4b,id:"ftbskies:easter_egg"},{Count:32b,Slot:5b,id:"farmersdelight:rice_panicle"},{Count:1b,Slot:6b,id:"constructionwand:iron_wand",tag:{Damage:0,wand_options:{}}},{Count:1b,Slot:7b,id:"industrialforegoing:water_condensator"}]}}')
            event.player.give(satchel)
        }


})


