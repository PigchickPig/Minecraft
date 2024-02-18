// priority: 0
ServerEvents.recipes(event => {
    let removalids = [
        'chancecubes:chance_cube_crafting',
        'create:milling/gravel',
        'create:crafting/kinetics/hand_crank',
        'createsifter:sifter',
        'ftbsba:hammer_test',
        'ad_astra:recipes/steel_ingot_from_blasting_iron_ingot',
        'functionalstorage:void_ugprade',
        'refinedstorage:cable',
        'refinedstorage:raw_basic_processor',
        'refinedstorage:raw_improved_processor',
        'refinedstorage:raw_advanced_processor',
        'gag:time_sand_pouch',
        'refinedstorage:controller',
        'cyclic:crafter',
        'refinedstorage:machine_casing',
        'jaopca:storage_blocks.to_storage_block.obsidian',
        'jaopca:thermal_expansion.material_to_storage_block.obsidian',
        'gardenofglass:end_portal_frame',
        'cyclic:tile_transporter_empty_alt',
        'unusualend:upgrade_to_gilded',
        'cyclic:tile_transporter_empty',
        'cyclic:crusher/netherrack',
        'cyclic:sleeping_mat',
        'ad_astra:recipes/astrodux',
        'botania:blaze_block',
        'cyclic:uncrafter',
        'botania:conversions/blazeblock_deconstruct',
        'cyclic:compressed_cobblestone',
        'refinedstorage:silicon',
        'quark:building/crafting/compressed/nether_wart_block_override',
        'cyclic:energy_pipe',
        'cyclic:item_pipe',
        'cyclic:fluid_pipe',
        'productivebees:centrifuge/ingots/honeycomb_platinum',
        'cyclic:compressed_cobblestone_u'

    ]

    removalids.forEach(recipeid => {             
        event.remove({ id:`${recipeid}`})
    });

    event.remove({mod: 'itemfilters'})
})

