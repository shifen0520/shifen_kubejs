onEvent('recipes', event => {
     //添加配方
     event.shaped( 'masterfulmachinery:first_stage_compression_table_controller' ,[
          "ABA",
          "BCB",
          "ABA"
        ],{
          A: "minecraft:smooth_stone",
          B: "create:zinc_ingot",
          C: "minecraft:blast_furnace"
          }
        )

     event.shaped( 'masterfulmachinery:first_stage_compression_table_first_stage_compression_table_item_port_items_input' ,[
          "CAC",
          "DBD",
          "CDC"
        ],{
          A: "cyclic:hopper",
          B: "minecraft:chest",
          C: "minecraft:smooth_stone",
          D: "create:zinc_ingot"
          }
        )
        
     event.shaped( 'masterfulmachinery:first_stage_compression_table_first_stage_compression_table_item_port_items_output' ,[
          "CDC",
          "DBD",
          "CAC"
        ],{
          A: "cyclic:hopper",
          B: "minecraft:chest",
          C: "minecraft:smooth_stone",
          D: "create:zinc_ingot"
          }
        )

     event.shaped( 'masterfulmachinery:first_stage_compression_table_first_stage_compression_table_fluid_port_fluids_input' ,[
          'CAC',
          'DBD',
          'CDC'
        ],{
          A: 'cyclic:hopper_fluid',
          B: 'miniutilities:stone_drum',
          C: 'minecraft:smooth_stone',
          D: 'create:zinc_ingot'
          }
        )   
        //初级物质生成机
    event.shaped('masterfulmachinery:primary_material_generator_controller',[
      'ACA',
      'CBC',
      'ACA'
    ],{
      A: 'create:andesite_casing',
      B: 'kubejs:andesite_machine',
      C: 'kubejs:andesite_mechanism'
    })
    event.shaped('masterfulmachinery:primary_material_generator_primary_material_generator_item_port_items_input',[
      'AEA',
      'BDB',
      'ACA'
    ],{
      A: 'create:andesite_casing',
      B: 'kubejs:andesite_mechanism',
      C: 'create:chute',
      D: 'create:andesite_tunnel',
      E: 'create:andesite_funnel'
    })
    event.shaped('masterfulmachinery:primary_material_generator_primary_material_generator_item_port_items_output',[
      'ACA',
      'BDB',
      'AEA'
    ],{
      A: 'create:andesite_casing',
      B: 'kubejs:andesite_mechanism',
      C: 'create:chute',
      D: 'create:andesite_tunnel',
      E: 'create:andesite_funnel'
    })
    event.shaped('masterfulmachinery:primary_material_generator_primary_material_generator_fluid_port_fluids_input',[
      'ACA',
      'BDB',
      'ABA'
    ],{
      A: 'create:andesite_casing',
      B: 'kubejs:andesite_mechanism',
      C: 'cyclic:hopper_fluid',
      D: 'miniutilities:stone_drum'
    })
 }
)
