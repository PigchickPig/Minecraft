const eventSuggestions = [
  "ftbskies:bees",
  "ftbskies:wandering_trader",
  "ftbskies:frogs",
  "ftbskies:tea",
  "ftbskies:chest",
  "ftbskies:crow",
  "ftbskies:villager",
  "ftbskies:stick",
  "ftbskies:amethyst",
  "ftbskies:endermite"
];


function setupCommand(e,ctx) {
    var source = ctx.getSource();
    if (!source) 
        console.log("invalid source")
    
 
    var player = source.getPlayerOrException()
            
    if (!player)
        console.log("invalid player")

    if (!player.persistentData) 
        console.log("invalid persistent data")

    var pData = player.persistentData
    var disabledEvents = pData.disabledEvents;         
    
    if (!eventSuggestions.includes(e)) {
        source.sendSuccess(Text.of(["Event not found!"]).red(),false);
        return 0;
    }

    if (disabledEvents) {
        let disabledEventsList = [];
        for (let i = 0; i < disabledEvents.length; i++) {
        disabledEventsList.push(disabledEvents[i]);
        }
                
        if (disabledEventsList.includes(e)) {
        pData.disabledEvents = disabledEventsList.filter((item) => item !== e);
        source.sendSuccess(Text.of(["Toggled " + e + " on"]),false);
        return 1;
        } else {
        pData.disabledEvents.push(e);
        source.sendSuccess(Text.of(["Toggled " + e + " off"]), false);
        return 1;
        }
    } else {
        pData.disabledEvents = [e];
        source.sendSuccess(Text.of(["Toggled " + e + " off"]), false);
        return 1;
    }
}

ServerEvents.commandRegistry((event) => {
    const { commands: Commands, arguments: Arguments, builtinSuggestions: Suggestions} = event
    event.register(Commands.literal("events").then(Commands.literal("toggle")
        .then(Commands.literal("ftbskies:bees").executes(function (ctx) {
            setupCommand("ftbskies:bees",ctx)
            return 1
        }))
        .then(Commands.literal("ftbskies:wandering_trader").executes(function (ctx) {
            setupCommand("ftbskies:wandering_trader",ctx)
            return 1
        }))
        .then(Commands.literal("ftbskies:bees").executes(function (ctx) {
            setupCommand("ftbskies:bees",ctx)
            return 1
        }))
        .then(Commands.literal("ftbskies:tea").executes(function (ctx) {
            setupCommand("ftbskies:tea",ctx)
            return 1
        }))
        .then(Commands.literal("ftbskies:crow").executes(function (ctx) {
            setupCommand("ftbskies:crow",ctx)
            return 1
        }))
        .then(Commands.literal("ftbskies:chest").executes(function (ctx) {
            setupCommand("ftbskies:chest",ctx)
            return 1
        }))
        .then(Commands.literal("ftbskies:frogs").executes(function (ctx) {
            setupCommand("ftbskies:frogs",ctx)
            return 1
        }))
        .then(Commands.literal("ftbskies:villager").executes(function (ctx) {
            setupCommand("ftbskies:villager",ctx)
            return 1
        }))
        .then(Commands.literal("ftbskies:stick").executes(function (ctx) {
            setupCommand("ftbskies:stick",ctx)
            return 1
        }))
        .then(Commands.literal("ftbskies:amethyst").executes(function (ctx) {
            setupCommand("ftbskies:amethyst",ctx)
            return 1
        }))
        .then(Commands.literal("ftbskies:endermite").executes(function (ctx) {
            setupCommand("ftbskies:endermite",ctx)
            return 1
        }))
  ));
});
