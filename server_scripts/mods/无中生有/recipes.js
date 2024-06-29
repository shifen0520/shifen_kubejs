onEvent('recipes', event => {
    //删除配方
    //所有木制坩埚
    event.remove({output: 'exnihilosequentia:dark_oak_crucible' })
    event.remove({output: 'exnihilosequentia:jungle_crucible' })
    event.remove({output: 'exnihilosequentia:spruce_crucible' })
    event.remove({output: 'exnihilosequentia:crimson_crucible' })
    event.remove({output: 'exnihilosequentia:birch_crucible' })
    event.remove({output: 'exnihilosequentia:acacia_crucible' })
    event.remove({output: 'exnihilosequentia:warped_crucible' })
    //压缩圆石
    event.remove({output: 'excompressum:compressed_cobblestone' })
    //修改配方
    //线筛网
    event.remove({output: 'exnihilosequentia:mesh_string' })
    event.shaped( 'exnihilosequentia:mesh_string' , [
        'INI',
        'N N',
        'INI'
    ],{
        I: 'minecraft:stick',
        N: 'minecraft:white_wool'
    })
    //木锤子
    event.remove({output: 'exnihilosequentia:hammer_wood' } )
    event.shaped( Item.of('exnihilosequentia:hammer_wood', '{Damage:0,AS_Amulet_Holder:[I;1235474594,-911390224,-1147692615,486283458]}'), [
        'NIN',
        ' I ',
        ' I '
    ],{
        I: 'minecraft:stick',
        N: 'minecraft:oak_log'
    })
	//石筛网
    event.remove({output: 'exnihilosequentia:mesh_flint' } )
    event.shaped( 'exnihilosequentia:mesh_flint' , [
        'I I',
        'CNC',
        'I I'
    ],{
        I: 'excompressum:compressed_flint',
        N: 'exnihilosequentia:mesh_string',
		C: 'minecraft:flint'
    })
    //木钩子
    event.remove({output: 'exnihilosequentia:crook_wood' } )
    event.shaped( Item.of('exnihilosequentia:crook_wood', '{Damage:0,AS_Amulet_Holder:[I;1235474594,-911390224,-1147692615,486283458]}') , [
        'II ',
        ' I ',
        ' I '
    ],{
        I: 'minecraft:oak_log'
    })
	//瓷土
    event.remove({output: 'exnihilosequentia:porcelain_clay' } )
    event.shaped( Item.of('exnihilosequentia:porcelain_clay', '{Damage:0,AS_Amulet_Holder:[I;1235474594,-911390224,-1147692615,486283458]}') , [
        'III',
        'BBB',
        '   '
    ],{
        I: 'minecraft:bone_meal',
		B: 'minecraft:clay_ball'
    })
}
)
   