events.listen('recipes', event => {
//熔炉流体转变高炉
  event.custom({ "type": "interactio:item_fluid_transform", "inputs": [{ "item": "minecraft:furnace", "count": 1, "return_chance": 0 }], "fluid": { "fluid": "minecraft:lava" }, "output": { "item": "minecraft:blast_furnace", "count": 1 }, "consume_fluid": 1 })

})