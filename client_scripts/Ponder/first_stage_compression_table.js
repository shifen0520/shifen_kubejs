onEvent("ponder.registry", (event) => {
    event
      .create('masterfulmachinery:first_stage_compression_table_controller')
      .scene('first_stage_compression_table',
        '如何搭建初级压缩机',
        'kubejs:first_stage_compression_table',
        (scene, util) => {
          scene.showBasePlate();
          scene.world().showSection(util.select().layer(1), Facing.south);

          scene.idle(20);

        }
      )
  })
