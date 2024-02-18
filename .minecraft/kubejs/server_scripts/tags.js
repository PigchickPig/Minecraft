// priority: 0

const sifterItems = [
    'ftbskies:dust',
    'minecraft:gravel',
    'minecraft:sand',
    'minecraft:grass',
    'ftbskies:crushed_netherrack',
    'ftbskies:crushed_end_stone',
    'minecraft:dirt',
    'minecraft:mycelium',
    'minecraft:soul_sand',
    'minecraft:oak_leaves'

    ]

ServerEvents.tags('item', event => {
    
    global['unUnified'].forEach((id) => {
        event.removeAllTagsFrom(id)
    })

    event.add('forge:ingots/platinum',['ftbskies:platinum_ingot'])
    event.add('forge:nuggets/platinum',['ftbskies:platinum_nugget'])

    event.add('itemfilters:check_nbt',[
        'patchouli:guide_book',
        'apotheosis:potion_charm',
        'tetra:modular_double',
        'productivebees:configurable_honeycomb'
    ])

    event.add('ftbskies:siftable',sifterItems)

    event.add('forge:experience',[
        'experienceobelisk:raw_experience_bucket'])
})


const arsBlacklist = [
    'trashcans:energy_trash_can',
    'trashcans:item_trash_can',
    'trashcans:ultimate_trash_can',
    'trashcans:liquid_trash_can',
    'ad_astra:launch_pad',
    'experienceobelisk:experience_obelisk',
    'angelblockrenewed:angel_block',
    'integratedtunnels:part_interface_item',
    'integratedtunnels:part_interface_filter_item',
    'integratedtunnels:part_importer_item',
    'integratedtunnels:part_exporter_item',
    'integratedtunnels:part_importer_world_item',
    'integratedtunnels:part_exporter_world_item'

    ]




ServerEvents.tags('block', event => {
    arsBlacklist.forEach((block) => { 
        event.get('ars_nouveau:no_break_drop').add(block)
    })
})



