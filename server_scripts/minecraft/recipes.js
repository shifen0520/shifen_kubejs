onEvent('recipes', event => {
     //原版修改配方
     event.remove({output: 'minecraft:crafting_table' })//工作台
     event.shaped( 'minecraft:crafting_table' , [
         'ICI',
         'CCC',
         'ICI'
     ],{
         I: 'minecraft:oak_log',
         C: 'minecraft:oak_planks'
     })
	//锻造台
    event.remove({output: 'minecraft:smithing_table' } )
    event.shaped( 'minecraft:smithing_table' , [
        'II ',
        'NN ',
        'NN '
    ],{
        I: 'create:andesite_alloy',
		N: 'minecraft:oak_planks'
    })
    //切石机
	event.remove({output: 'minecraft:stonecutter' })
    event.shaped( 'minecraft:stonecutter' , [
         '   ',
         'C C',
         'NNN'
     ],{
         C: 'create:andesite_alloy',
		 N: 'minecraft:stone'
     })
	//删除高炉
	event.remove({output: 'minecraft:blast_furnace' })
     //一级圆石制造机
     event.shaped( 'cobblefordays:tier_1' , [
        'CCC',
        'ADB',
        'CCC'
     ] ,{
        A: Item.of('ceramics:clay_bucket', '{fluid:"minecraft:water'),
        B: Item.of('ceramics:cracked_clay_bucket', '{fluid:"minecraft:lava"}'),
        C: 'minecraft:oak_log',
        D: 'minecraft:glass'
     })
 }
)