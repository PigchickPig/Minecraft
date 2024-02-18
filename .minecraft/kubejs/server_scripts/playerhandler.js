const hammer = 'tetra:modular_double'

//Cancel breaking blocks in overworld unless in creative
BlockEvents.broken( event => {
    const {level, player} = event
    if (level.dimension == 'minecraft:overworld'){
        if (!player)
            event.cancel()
        if (!player.isCreative())
            event.cancel()
    }
})

//Cancel placing blocks in overworld unless in creative
BlockEvents.placed( event => {
    const {level, player, block} = event
    if (level.dimension == 'minecraft:overworld'){
        if (!player)
            event.cancel()
        if (!player.isCreative())
            event.cancel()
    }
})

BlockEvents.placed( 'minecraft:end_portal_frame', event => {
    const {level, player, block} = event
    console.log('calling block placement event')
    if (level.dimension == 'minecraft:the_nether') {
        if (!player.isCreative()) {
            player.tell("You can't place that in this dimension")
            block.set('minecraft:air')
            block.popItem('minecraft:end_portal_frame')
        }

    } 
})


const digBlocks = [
    'botania:dry_grass',
    'botania:vivid_grass',
    'minecraft:grass_block',
    'minecraft:dirt',
    'minecraft:coarse_dirt',
    'antiblocksrechiseled:wool_green',
    'antiblocksrechiseled:wool_lime',
    'botania:infused_grass'
    ]

BlockEvents.rightClicked(digBlocks, event => {
    const {item, hand, player} = event
    if (hand != "MAIN_HAND") return
    if (!event.player.crouching) return
    if (item.id != 'minecraft:air') { 
        return
    } 
        var chance = Math.random() * 100;
        if (chance < 25)
            event.block.popItem('ftbskies:soil')
        else
            event.block.popItem('ftbskies:rock')
    return
})


BlockEvents.rightClicked('minecraft:end_portal_frame', event => {
    const {item, hand, player} = event
    if (hand != "MAIN_HAND") return
    if (!event.player.crouching) return
    if (item.id != 'minecraft:air') { 
        return
    } 
    event.server.schedule(1,(_) => {
            event.block.set('minecraft:air')
        })
        event.block.popItem('minecraft:end_portal_frame')
        return
})

BlockEvents.rightClicked('minecraft:end_portal', event => {
    const {item, hand, player} = event
    if (hand != "MAIN_HAND") return
    if (!event.player.crouching) return
    if (event.player.level.dimension == 'minecraft:the_end') return
    if (item.id != 'minecraft:air') { 
        return
    } 
    event.server.schedule(1,(_) => {
            event.block.set('minecraft:air')
        })
        return
})


BlockEvents.rightClicked('minecraft:dirt', event => {
    const {item, hand, player} = event
    if (hand != "MAIN_HAND") return
    if (item.id == 'ftbskies:mycelium_spores') {
        item.count--
        player.tell("The spores begin to absorb into the block")
        event.server.scheduleInTicks(2, (_) => {
            event.block.set('minecraft:mycelium')
        })
    }
})

BlockEvents.rightClicked('minecraft:netherrack', event => {
    const {item, hand, player, block} = event
    if (hand != "MAIN_HAND") return

    if (item.id == 'ftbskies:warped_nylium_spores') {
        item.count--
        player.tell("The spores begin to absorb into the netherrack")
        event.server.scheduleInTicks(2, (_) => {
            event.block.set('minecraft:warped_nylium')
        })
    }
    if (item.id == 'ftbskies:crimson_nylium_spores') {
        item.count--
        player.tell("The spores begin to absorb into the netherrack")
        event.server.scheduleInTicks(2, (_) => {
            event.block.set('minecraft:crimson_nylium')
        })
    }
    

})


// Cancel overgrowthSeed Placement
BlockEvents.rightClicked((event) => {
    const { item, player, level, server, block } = event;
  
    if (block.hasTag("botania:floating_flowers")) {
      if (item.id == "botania:overgrowth_seed") {
        player.tell("I should probably use this on grass below the flower instead.");
        event.cancel();
      }
    }
});

BlockEvents.rightClicked('minecraft:cobblestone', event => {
    const {item, hand, player, block} = event
    if (hand != "MAIN_HAND") return
    if (!player) return


})

BlockEvents.rightClicked('minecraft:gravel', event => {
    const {item, hand, player, block} = event
    if (hand != "MAIN_HAND") return
   

})


BlockEvents.rightClicked('minecraft:sand', event => {
    const {item, hand, player, block} = event
    if (hand != "MAIN_HAND") return
   

})


BlockEvents.rightClicked('minecraft:end_stone', event => {
    const {item, hand, player, block} = event
    if (hand != "MAIN_HAND") return
   

})

//Sifter Waterlog with Bucket - Thanks to EnigmaQuip
BlockEvents.rightClicked('createsifter:sifter', event => {
    const { item, hand, player, block } = event
    if (hand != "MAIN_HAND") return
    if (item.id == 'minecraft:water_bucket') {
        if (block.properties.waterlogged == 'false') {
            block.set('createsifter:sifter',{ waterlogged: true })
            player.setMainHandItem('minecraft:bucket')
        }
    } else if (item.id == 'minecraft:bucket') {
        if (block.properties.waterlogged == 'true') {
            block.set('createsifter:sifter',{ waterlogged: false })
            item.count--
            player.give('minecraft:water_bucket')
        }
    }
})

ItemEvents.pickedUp(event =>{
    const {item,player} = event
        if (item.id == 'ftbskies:mana_steel_mesh' && !player.stages.has('mana_steel_mesh'))
            player.stages.add('mana_steel_mesh')
})


PlayerEvents.inventoryChanged(event => {
    const {player, item, level} =  event
    if(level.dimension == 'minecraft:the_nether' && (item.id == 'ftbskies:eye_of_legend' || item.id == 'fbtskies:eye_of_legend_end')){
        swapItem(player, item.id.toString(), 'ftbskies:eye_of_legend_nether')

    }
    else if(level.dimension == 'minecraft:the_end' && (item.id == 'ftbskies:eye_of_legend' || item.id == 'ftbskies:eye_of_legend_nether')){
        swapItem(player, item.id.toString(), 'ftbskies:eye_of_legend_end')

    }
    else if((level.dimension != 'minecraft:the_nether' && level.dimension != 'minecraft:the_end') && 
            (item.id == 'ftbskies:eye_of_legend_nether' || item.id == 'ftbskies:eye_of_legend_end')){
        swapItem(player, item.id.toString(), 'ftbskies:eye_of_legend')

    }
})
//easter egg
ItemEvents.rightClicked('ftbskies:easter_egg',event => {
    const { item,player,hand,level } = event
    if (hand != "MAIN_HAND") return;
    if (item.id == 'ftbskies:easter_egg') {
        item.count--
        player.tell(`Oh No ${player.username}: Something is happening...`)
        console.log('x = ')
        let pos = event.entity

        event.server.scheduleInTicks(2,_ => {
            spawnEntitiesAroundBlock(level,'minecraft:rabbit',1,pos,2,2,2)
        })
        event.server.scheduleInTicks(10,_ => {
            spawnEntitiesAroundBlock(level,'minecraft:rabbit',2,pos,2,2,2)
            player.tell(`Uh Oh ${player.username}: They are multiplying...`)
        })
        event.server.scheduleInTicks(80,_ => {
            spawnEntitiesAroundBlock(level,'minecraft:rabbit',4,pos,3,2,3)
        })
        event.server.scheduleInTicks(160,_ => {
            player.tell(`${player.username}... THEY JUST KEEP APPEARING...`)
            spawnEntitiesAroundBlock(level,'minecraft:rabbit',8,pos,3,2,3)
        })
        event.server.scheduleInTicks(240,_ => {
            player.tell(`Do Something ${player.username}!`)
            spawnEntitiesAroundBlock(level,'minecraft:rabbit',16,pos,4,2,4)
        })
        event.server.scheduleInTicks(360,_ => {
            player.tell(`Will This ever End?!`)
            spawnEntitiesAroundBlock(level,'minecraft:rabbit',32,pos,5,3,5)
        })

    }
})

EntityEvents.hurt(event => {
    const {entity, source,level} = event
    if(!entity.isPlayer()) return
    let player = entity

    if(player.persistentData.voidForgiven == true && source == 'DamageSource (fall)'){
        player.persistentData.voidForgiven = false

        if(player.health > 8) {
            player.attack(player.health-4)
            event.cancel()
        }
    }

    if(source == 'DamageSource (outOfWorld)' && player.y < -64){
        player.persistentData.voidForgiven = true

        if(!player.stages.has('inVoid')){

            let x = Math.floor(player.x)
            let z = Math.floor(player.z)
            let command = `execute in ${level.dimension} run tp ${player.username} ${x} 256 ${z}`
            //player.tell('Executing command: ' + command)
            event.server.runCommandSilent(command);
            player.addMotion(0, -10, 0)
    
            let potion = player.potionEffects
            potion.add('minecraft:blindness', 2*20, 0, false, false)
            player.stages.add('inVoid')

        }
        event.cancel()

        event.server.scheduleInTicks(100, _=>{
            player.stages.remove('inVoid')
        })
    }
})


// Tick Events

// Login Event
PlayerEvents.loggedIn((event) => {
    const { player, server, level } = event;
  
    let pData = event.player.persistentData;
    pData.gameTimer = 0;
    if (!pData.contaminated) pData.contaminated = false;
    
  });
  
  // Tick Event
PlayerEvents.tick((event) => {
    const { player, server, level } = event;
  
    let pData = player.persistentData;
    pData.gameTimer++;


    if (pData.gameTimer % 80 != 0) return;
    
    /*
        let dim = player.level.dimension;
    if (player.level.dimension == 'minecraft:overworld' && player.getVehicle() != null) {
        let vehicle = player.getVehicle();
        console.log('Entity: ' + event.getEntity().getName() + ", dimension: " + dim   + ", vehicle: " + event.getEntity().getVehicle())  
        if (vehicle.id.includes('ad_astra:tier_')) {
            console.log('Rocket and player being moved to team dim')
        }
    }*/
});

