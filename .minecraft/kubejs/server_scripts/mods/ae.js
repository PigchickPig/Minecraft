// priority: 0
ServerEvents.recipes(event => {


    event.smithing('ae2:engineering_processor_press','minecraft:paper','minecraft:diamond').id('ftbskies:press_diamond')
    event.smithing('ae2:silicon_press','minecraft:paper','ae2:silicon').id('ftbskies:press_silicon')
    event.smithing('ae2:logic_processor_press','minecraft:paper','minecraft:gold_ingot').id('ftbskies:press_gold')
    event.smithing('ae2:calculation_processor_press','minecraft:paper','ae2:certus_quartz_crystal').id('ftbskies:press_certus')
    event.smithing('ae2:name_press','minecraft:paper','minecraft:writable_book').id('ftbskies:press_name')

})

