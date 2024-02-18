    const compostables = [
       'minecraft:rotten_flesh',
       'rootsclassic:elderberry',
       'rootsclassic:whitecurrant',
       'rootsclassic:redcurrant',
       'rootsclassic:nightshade',
       'rootsclassic:blackcurrant'
    ]

ServerEvents.compostableRecipes( event => {

    compostables.forEach((id) => {
        event.add(id,0.65)
    })
})