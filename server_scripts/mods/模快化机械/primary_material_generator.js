events.listen('recipes', function (e) {
    e.custom({
        "type": "masterfulmachinery:machine_structure",
        "id": "primary_material_generator",
        "controllerId": "primary_material_generator",
        "name": "\u521D\u7EA7\u7269\u8D28\u751F\u6210\u673A",
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
            "block": "create:andesite_casing"
          },
          "*": {
            "block": "create:millstone"
          },
          "+": {
            "block": "create:framed_glass"
          },
          ",": {
            "block": "masterfulmachinery:primary_material_generator_primary_material_generator_item_port_items_output"
          },
          "-": {
            "block": "masterfulmachinery:primary_material_generator_primary_material_generator_item_port_items_input"
          },
          ".": {
            "block": "masterfulmachinery:primary_material_generator_primary_material_generator_fluid_port_fluids_input"
          },
          "/": {
            "block": "create:mechanical_drill"
          }
    }
})
function assembling1(ticks, fluid, milliliters, input1, count1, input2, count2, output) {
    e.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "primary_material_generator",
        "controllerId": "primary_material_generator",
        "ticks": ticks,
        "inputs": [
            {"type": "masterfulmachinery:items","data": {"item": input1,"count": count1}},
            {"type": "masterfulmachinery:items","data": {"item": input2,"count": count2}},
            {"type": "masterfulmachinery:fluids","data": {"fluid": fluid,"amount":milliliters}}
        ], 
        "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": 1}}]
        
      })
    }
    assembling1(600, 'minecraft:lava', 500, 'kubejs:knowledge_cube', 64, 'minecraft:yellow_dye', 2, 'create:crushed_gold_ore')
    assembling1(200, 'minecraft:lava', 100, 'kubejs:knowledge_cube', 16, 'minecraft:orange_dye', 1, 'create:crushed_copper_ore')
})