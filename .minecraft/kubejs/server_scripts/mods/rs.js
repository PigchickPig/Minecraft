// priority: 0
ServerEvents.recipes(event => {

    event.shapeless('4x refinedstorage:cable', ['2x ae2:fluix_crystal','2x refinedstorage:quartz_enriched_iron']).id('ftbskies:rscable')
    event.shapeless('refinedstorage:raw_basic_processor', ['ae2:printed_silicon','minecraft:redstone','refinedstorage:processor_binding', 'refinedstorage:quartz_enriched_iron']).id('ftbskies:raw_basic_processor')
    event.shapeless('refinedstorage:raw_improved_processor', ['ae2:printed_silicon','minecraft:redstone','refinedstorage:processor_binding', 'minecraft:gold_ingot']).id('ftbskies:raw_imporoved_processor')
    event.shapeless('refinedstorage:raw_advanced_processor', ['ae2:printed_silicon','minecraft:redstone','refinedstorage:processor_binding', 'minecraft:diamond']).id('ftbskies:raw_advanced_processor')

        
    event.shaped('refinedstorage:machine_casing',['EEE','ECE','EEE'],{
            E: 'refinedstorage:quartz_enriched_iron',
            C: 'refinedstorage:cable'
        }).id('ftbskies:rsmachinecasing')

    event.shaped('refinedstorage:controller',['EFE','FMF','EFE'],{
            E: 'refinedstorage:quartz_enriched_iron',
            F: 'ae2:fluix_crystal',
            M: 'refinedstorage:machine_casing'
        }).id('ftbskies:rscontroller')

    //universal crafting grid
    event.shaped('universalgrid:wireless_universal_grid',['CFC','CQC','CIC'],{
        C: 'ae2:energy_cell',
        I: 'refinedstorage:wireless_grid',
        F: 'refinedstorage:wireless_fluid_grid',
        Q: 'ae2wtlib:quantum_bridge_card'
    }).id('ftbskies:rsuniversalwireless')

})


