events.listen('recipes', function (e) {
    e.custom(
        {
            "type": "masterfulmachinery:machine_structure",
            "id": "primary_assembly_station",
            "controllerId": "primary_assembly_station",
            "name": "\u521D\u7EA7\u88C5\u914D\u673A",
            "layout": [
              [
                ")***)",
                "*)))*",
                "*)))*",
                "*)))*",
                ")*+*)"
              ],
              [
                ",-C-,",
                "-*)*-",
                "./0/1",
                "-*/*-",
                ",-2-,"
              ],
              [
                "3   3",
                "     ",
                "     ",
                "     ",
                "3   3"
              ],
              [
                ")- -)",
                "-   -",
                "  4  ",
                "-   -",
                ")- -)"
              ],
              [
                "  -  ",
                " -*- ",
                "-*)*-",
                " -*- ",
                "  -  "
              ]
            ],
            "legend": {
              "0": {
                "block": "create:depot"
              },
              "1": {
                "block": "masterfulmachinery:primary_assembly_station_primary_assembly_station_item_port_items_input"
              },
              "2": {
                "block": "masterfulmachinery:primary_assembly_station_primary_assembly_station_fluid_port_fluids_input"
              },
              "3": {
                "block": "create:shaft"
              },
              "4": {
                "block": "create:mechanical_press"
              },
              ")": {
                "block": "create:brass_casing"
              },
              "*": {
                "block": "minecraft:polished_andesite"
              },
              "+": {
                "block": "masterfulmachinery:primary_assembly_station_primary_assembly_station_spinny_port_create_rotation_input"
              },
              ",": {
                "block": "create:gantry_shaft"
              },
              "-": {
                "block": "minecraft:polished_andesite_slab"
              },
              ".": {
                "block": "masterfulmachinery:primary_assembly_station_primary_assembly_station_item_port_items_output"
              },
              "/": {
                "block": "create:mechanical_arm"
              }
            }
          }
    )
    function assembling1(ticks, speed, fluid, milliliters, input1, count1, output) {
      e.custom({
        "type": "masterfulmachinery:machine_process",
        "structureId": "primary_assembly_station",
        "controllerId": "primary_assembly_station",
        "ticks": ticks,
        "inputs": [
                  {"type": 'masterfulmachinery:create_rotation',"data": {"speed": speed}},
                  {"type": "masterfulmachinery:fluids","data": {"fluid": fluid,"amount":milliliters}},
                  {"type": "masterfulmachinery:items","data": {"item": input1,"count": count1}}
                  ], 
        "outputs": [{"type": "masterfulmachinery:items","data": {"item": output,"count": 1}}]
    
            }
          )
        }
  
    assembling1(600, 128, 'minecraft:lava', 250, 'create:rose_quartz', 1, 'create:polished_rose_quartz')
  }
)