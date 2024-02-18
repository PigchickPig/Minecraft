// priority: 800
const teaEvent = {
  name: "ftbskies:tea",
  chance: 0.1,
  execute(event, player, location) {
    player.tell(["[Server]: getting a cup of tea, don't break the game!"]);
    event.server.scheduleInTicks(20,(_) => {
        player.persistentData.timer = 8000; //lower their event timer instead of a full reset
    })
  },
};
