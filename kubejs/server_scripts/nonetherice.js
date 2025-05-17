console.log("OH NO, OUR NETHER ICE, ITS MELTED!")

// Old way, dumb
//BlockEvents.placed("minecraft:ice", (event) => {
//    if (event.block.dimension == "minecraft:the_nether") {
//        event.player.tell(
//            "Placing boats or §dice§r in the nether is disallowed."
//        );
//        event.cancel();
//    }
//});
//
//BlockEvents.placed("minecraft:packed_ice", (event) => {
//     if (event.block.dimension == "minecraft:the_nether") {
//         event.player.tell(
//             "Placing boats or §dice§r in the nether is disallowed."
//         );
//         event.cancel();
//     }
// });
//
// BlockEvents.placed("minecraft:blue_ice", (event) => {
//     if (event.block.dimension == "minecraft:the_nether") {
//         event.player.tell(
//             "Placing boats or §dice§r in the nether is disallowed."
//         );
//         event.cancel();
//     }
// });

BlockEvents.placed(event => {
    if (event.block.dimension == "minecraft:the_nether" && event.block.hasTag("minecraft:ice")) {
        event.player.tell(
            "Placing boats or §4ice§r in the nether is disallowed."
        );
        event.cancel();
    }
});

ItemEvents.rightClicked((event) => {
    if (
        (event.player.block.dimension == "minecraft:the_nether" &&
            event.player.mainHandItem.hasTag("minecraft:boats")) ||
        event.player.offHandItem.hasTag("minecraft:boats")
    ) {
        event.player.tell("Placing §4boats§r or ice in the nether is disallowed.");
        event.cancel();
    }
});
