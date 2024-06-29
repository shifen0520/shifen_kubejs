onEvent('recipes', event => {
     //机械动力配方修改
     event.remove({output: 'create:andesite_funnel' })//安山岩漏斗
     event.shaped( 'create:andesite_funnel' , [
         'ICI',
         'CNC',
         'ICI'
     ],{
         I: 'minecraft:dried_kelp',
         C: 'create:andesite_alloy',
		 N: 'cyclic:hopper'
     })
	 //工作盆
     event.remove({output: 'create:basin' })
     event.shaped( 'create:basin' , [
         '   ',
         'CIC',
         'CCC'
     ],{
         I: 'ceramics:clay_bucket',
         C: 'create:andesite_alloy'
     })
	 //大齿轮
     event.remove({output: 'create:large_cogwheel' })
     event.shaped( 'create:large_cogwheel' , [
         '   ',
         'CC ',
         'CC '
     ],{
         C: 'create:cogwheel'
     }) 
	 //动力碾压机
	 event.remove({output: 'create:mechanical_press' })
     event.shaped( 'create:mechanical_press' , [
         'CDC',
         'DND',
         'CIC'
     ],{
         I: 'create:zinc_block',
         C: 'create:andesite_alloy',
		 N: 'create:andesite_casing',
		 D: 'create:large_cogwheel'
     })
	 //锯片
	 event.remove({output: 'thermal:saw_blade' })
     event.shaped( 'thermal:saw_blade' , [
         'CC ',
         'CIC',
         ' CC'
     ],{
         I: 'kubejs:andesite_machine',
         C: 'create:andesite_alloy'
    })
	//小齿轮
	event.remove({output: 'create:cogwheel' })
    event.shaped( 'create:cogwheel' , [
         'CCC',
         'CIC',
         'CCC'
     ],{
         I: 'create:shaft',
         C: 'minecraft:oak_planks'
     })
    //轧机
	event.remove({output: 'createaddition:rolling_mill' })
    event.shaped( 'createaddition:rolling_mill' , [
         'ABA',
         'ECE',
         'DBD'
     ],{
         A: 'kubejs:andesite_alloy_sheet',
         B: 'create:shaft',
         C: 'create:andesite_casing',
         D: 'create:andesite_alloy',
         E: 'create:cogwheel'
     })
    //安山机械方块
	event.remove({output: 'kubejs:andesite_machine' })
    event.shaped( 'kubejs:andesite_machine' , [
         'AAA',
         'ABA',
         'AAA'
     ],{
         A: 'kubejs:andesite_mechanism',
         B: 'create:large_cogwheel'
     })
    //链式传动箱
	event.remove({output: 'create:encased_chain_drive' })
    event.shaped( '2x create:encased_chain_drive' , [
         ' A ',
         'CBC',
         ' A '
     ],{
         A: 'create:shaft',
         B: 'kubejs:andesite_mechanism',
         C: 'create:zinc_nugget'
     })
    //动力锯
	event.remove({output: 'create:mechanical_saw' })
    event.shaped( 'create:mechanical_saw' , [
         '   ',
         ' A ',
         'BCB'
     ],{
         A: 'thermal:saw_blade',
         B: 'kubejs:andesite_alloy_sheet',
         C: 'create:andesite_casing'
     })
    //钻头
	event.remove({output: 'thermal:drill_head' })
    event.shaped( 'thermal:drill_head' , [
         'ABA',
         'ABA',
         ' A '
     ],{
         A: 'thermal:saw_blade',
         B: 'create:andesite_alloy'
     })
    //动力钻
    event.remove({output: 'create:mechanical_drill' })
    event.shaped( 'create:mechanical_drill' , [
         'ABA',
         'ACA',
         ' D '
     ],{
         A: 'create:andesite_alloy',
         B: 'create:andesite_casing',
         C: 'kubejs:andesite_machine',
         D: 'thermal:drill_head'
     })
    //搅拌器
	event.remove({output: 'create:whisk' })
    event.shaped( 'create:whisk' , [
         ' A ',
         'BAB',
         'BBB'
     ],{
         A: 'create:andesite_alloy',
         B: 'kubejs:andesite_alloy_sheet'
     })
    //风扇
	event.remove({output: 'create:propeller' })
    event.shaped( 'create:propeller' , [
         ' B ',
         'BAB',
         ' B '
     ],{
         A: 'create:andesite_alloy',
         B: 'kubejs:andesite_alloy_sheet'
     }) 
    //动力搅拌机
	event.remove({output: 'create:mechanical_mixer' })
    event.smithing('create:mechanical_mixer', 'create:whisk', 'kubejs:andesite_machine')
    //鼓风机
    event.remove({output: 'create:encased_fan' })
    event.smithing('create:encased_fan', 'create:propeller', 'kubejs:andesite_machine')
    //余烬面粉
	event.remove({output: 'create:propeller' })
    event.shaped( 'create:propeller' , [
         ' B ',
         'BAB',
         ' B '
     ],{
         A: 'create:andesite_alloy',
         B: 'kubejs:andesite_alloy_sheet'
     }) 
     //
    event.recipes.createMixing('create:cinder_flour', [
        'minecraft:red_dye',
        'minecraft:red_dye',
        'create:wheat_flour',
        'create:wheat_flour',
        Fluid.water(100)
      ])
    //面团
	event.remove({output: 'create:dough' })
    event.recipes.createMixing('create:dough', [
        'create:wheat_flour',
        'create:wheat_flour',
        'create:wheat_flour',
        'create:wheat_flour',
        Fluid.water(100)
      ])
    event.remove({output: 'cyclic:biomass'})
    event.recipes.createMixing('cyclic:biomass', [
        Fluid.of('createaddition:seed_oil',100),
        '#forge:crops'
      ])
    //空的烈焰人燃烧室
	event.remove({output: 'create:empty_blaze_burner' })
    event.shaped( 'create:empty_blaze_burner' , [
         ' B ',
         'BAB',
         ' B '
     ],{
         A: 'minecraft:nether_bricks',
         B: 'kubejs:andesite_alloy_sheet'
     }) 
     //自动锤合成烈焰棒
     event.recipes.create.compacting('minecraft:blaze_rod',[Fluid.of('minecraft:lava',250)])
     //强力胶
    event.remove({output: Item.of('create:super_glue') })
    event.shaped( Item.of('create:super_glue', '{Damage:0,AS_Amulet_Holder:[I;475577861,1407075768,-1595392063,287097922]}'), [
         '   ',
         ' CA',
         ' AB'
     ],{
         A: '#forge:slimeballs',
         B: 'create:zinc_nugget',
         C: 'create:andesite_alloy',
     })
     //扳手
    event.remove({output: 'create:wrench' })
    event.shaped('create:wrench', [
         'AA ',
         'AB ',
         ' C '
     ],{
         A: 'kubejs:andesite_alloy_sheet',
         B: 'create:cogwheel',
         C: '#forge:rods/wooden',
     })
 }
)
