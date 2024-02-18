ForgeEvents.onEvent("net.minecraftforge.event.entity.player.PlayerEvent$PlayerChangedDimensionEvent", event => {
    let dim = event.getTo()
    console.log('Entity changed dimension, entity: ' + event.getEntity().getName() + ", dimension: " + dim   + ", vehicle: " + event.getEntity().getVehicle())
    if (event.getEntity().type === "entity.minecraft.player") {
    let player = event.getEntity()
  console.log('Player changed dimension, vehicle: ' + player.getVehicle())
  }
})
