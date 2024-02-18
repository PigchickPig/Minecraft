/*ForgeEvents.onEvent(
  "net.minecraftforge.event.entity.EntityJoinWorldEvent",
  (event) => {
    if (event.getEntity().type === "entity.minecraft.player") {
      if (event.getWorld().isClientSide()) {
        const dimPath = event.getWorld().dimension().location().getPath();
        if (
          event
            .getWorld()
            .dimension()
            .location()
            .toString()
            .startsWith("ftbsbc:team")
        ) {
          SDRP.setState("sdrp.sbd.in", "sdrp.sbd", "stone");
        } else {
          SDRP.setState(`sdrp.${dimPath}.in`, `sdrp.${dimPath}`, "dimPath");
        }
      }
    }
  }
);
*/