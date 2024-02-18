ServerEvents.recipes(event => {
    
    event.shaped('tetra:lubricant_dispenser',['NEN','NON','NEN'],{
    N: '#forge:ingots/netherite',
    E: '#forge:ingots/enderium',
    O: 'thermal:crude_oil_bucket'
    }).id('ftbskies:lubricant')

    event.shaped('tetra:combustion_chamber',['NEN','NON','NEN'],{
    N: '#forge:ingots/netherite',
    E: '#forge:ingots/enderium',
    O: 'mekanismadditions:obsidian_tnt'
    }).id('ftbskies:combustion')
})