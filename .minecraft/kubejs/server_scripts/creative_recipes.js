// priority: 0
ServerEvents.recipes(event => {
    //super cobblegen
    event.shaped('compacter:cobbler',['NWN','CSC','NFN'],{
            N: 'minecraft:netherite_block',
            W: 'botania:rune_water',
            S: 'minecraft:amethyst_shard',
            C: 'cyclic:compressed_cobblestone',
            F: 'botania:rune_fire'
        }).id('ftbskies:infinicobble')

})

