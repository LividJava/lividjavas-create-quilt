console.log("Removed the placement of boats and ice in the Nether.")

BlockEvents.placed("minecraft:ice", (event) => {
    if (event.block.dimension == "minecraft:the_nether") {
        event.cancel();
        event.player.tell(
            Text.of("Placing boats or §dice§r in the nether is disallowed.")
        );
    }
});

BlockEvents.placed("minecraft:packed_ice", (event) => {
    if (event.block.dimension == "minecraft:the_nether") {
        event.cancel();
        event.player.tell(
            Text.of("Placing boats or §dice§r in the nether is disallowed.")
        );
    }
});

BlockEvents.placed("minecraft:blue_ice", (event) => {
    if (event.block.dimension == "minecraft:the_nether") {
        event.cancel();
        event.player.tell(
            Text.of("Placing boats or §dice§r in the nether is disallowed.")
        );
    }
});


ItemEvents.rightClicked((event) => {
    if (
        (event.player.block.dimension == "minecraft:the_nether" &&
            event.player.mainHandItem.hasTag("minecraft:boats")) ||
        event.player.offHandItem.hasTag("minecraft:boats")
    ) {
        event.cancel();
        event.player.tell(
            Text.of("Placing §dboats§r or ice in the nether is disallowed.")
        );
    }
});
