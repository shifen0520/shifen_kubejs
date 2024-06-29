events.listen('recipes', function (e) {
    e.custom(
        {
            "type": "masterfulmachinery:machine_structure",
            "id": "primary_fluid_extraction_machine",
            "controllerId": "primary_fluid_extraction_machine",
            "name": "\u521D\u7EA7\u6D41\u4F53\u8403\u53D6\u673A",
            "layout": [
              [
                ")C)",
                ")*)",
                ")))"
              ],
              [
                ")+)",
                ", -",
                ")+)"
              ],
              [
                ")))",
                ").)",
                ")))"
              ]
            ],
            "legend": {
              ")": {
                "block": "create:copper_casing"
              },
              "*": {
                "block": "create:item_drain"
              },
              "+": {
                "block": "create:framed_glass"
              },
              ",": {
                "block": "masterfulmachinery:primary_fluid_extraction_machine_primary_fluid_extraction_machine_item_port_items_output"
              },
              "-": {
                "block": "masterfulmachinery:primary_fluid_extraction_machine_primary_fluid_extraction_machine_fluid_port_fluids_input"
              },
              ".": {
                "block": "create:spout"
              }
            }
          }
    )
    function assembling1(ticks, fluid, milliliters, output) {
      e.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "primary_fluid_extraction_machine",
        "controllerId": "primary_fluid_extraction_machine",
        "ticks": ticks,
        "inputs": [
            {"type": "masterfulmachinery:fluids","data": {"fluid": fluid,"amount":milliliters}}
        ], 
        "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": 1}}]
        
        }
      )
    }
  
    assembling1(600, 'minecraft:lava', 250, 'mysticalagriculture:fire_essence')
    assembling1(600, 'minecraft:water', 1000, 'mysticalagriculture:water_essence')
  }
)