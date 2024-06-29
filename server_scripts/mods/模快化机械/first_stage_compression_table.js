events.listen('recipes', function (e) {
e.custom({
  "type": "masterfulmachinery:machine_structure",
  "id": "first_stage_compression_tabley",
  "controllerId": "first_stage_compression_table",
  "name": "\u4E00\u7EA7\u538B\u7F29\u53F0",
    "layout": [
      [
        ")C)",
        ")*)",
        ")))"
      ],
      [
        ")+)",
        ", -",
        ").)"
      ],
      [
        ")))",
        ")/)",
        ")))"
      ]
    ],
    "legend": {
      ")": {
        "block": "minecraft:smooth_stone"
      },
      "*": {
        "block": "create:depot"
      },
      "+": {
        "block": "create:framed_glass"
      },
      ",": {
        "block": "masterfulmachinery:first_stage_compression_table_first_stage_compression_table_item_port_items_output"
      },
      "-": {
        "block": "masterfulmachinery:first_stage_compression_table_first_stage_compression_table_item_port_items_input"
      },
      ".": {
        "block": "masterfulmachinery:first_stage_compression_table_first_stage_compression_table_fluid_port_fluids_input"
      },
      "/": {
        "block": "create:mechanical_press"
      }
    }
  })

  function assembling1(ticks, fluid, milliliters, input1, count1, output) {
    e.custom({
      "type": "masterfulmachinery:machine_process",
      "structureId": "first_stage_compression_tabley",
      "controllerId": "first_stage_compression_tabley",
      "ticks": ticks,
      "inputs": [
          {"type": "masterfulmachinery:items","data": {"item": input1,"count": count1}},
          {"type": "masterfulmachinery:fluids","data": {"fluid": fluid,"amount":milliliters}}
      ], 
      "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": 1}}]
      
    })
  }

  assembling1(100, 'minecraft:lava', 100, 'mysticalagriculture:stone_essence',32 ,'kubejs:knowledge_cube')
  assembling1(200, 'minecraft:lava', 100, 'minecraft:cobblestone',64 ,'mysticalagriculture:stone_essence')
  assembling1(200, 'minecraft:lava', 100, 'create:andesite_alloy',2 ,'kubejs:andesite_alloy_sheet')
})

