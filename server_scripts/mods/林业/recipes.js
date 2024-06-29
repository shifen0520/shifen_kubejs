onEvent('recipes', event => {
     //修改配方
     event.remove({output: 'forestry:engine_clockwork' })
     event.shaped( 'forestry:engine_clockwork', [
         'IPI',
         'ICI',
         'IPI'
     ],{
         I: 'minecraft:oak_planks',
         C: 'forestry:impregnated_casing',
         P: 'minecraft:piston'
     })
 
     event.remove({output: 'minecraft:piston' })//活塞
     event.shaped( 'minecraft:piston', [
         'III',
         'XCX',
         'XCX'
     ],{
         I: 'minecraft:oak_planks',
         C: 'forestry:impregnated_casing',
         X: 'minecraft:cobblestone'
     })
     event.shaped( 'minecraft:piston', [
         'III',
         'XCX',
         'XRX'
     ],{
         I: 'minecraft:oak_planks',
         C: 'forestry:impregnated_casing',
         X: 'minecraft:cobblestone',
         R: 'minecraft:redstone'
     })
 
     event.remove({output: 'forestry:impregnated_casing' })//沉浸部件
     event.shaped( 'forestry:impregnated_casing', [
         'III',
         'ICI',
         'III'
     ],{
         I: 'forestry:peat',
         C: 'minecraft:cobblestone'
     })
    event.shapeless( 'forestry:peat', '9x #minecraft:leaves' )
	//榨汁机
    event.remove({output: 'forestry:squeezer' })
    event.shaped( 'forestry:squeezer', [
         'ICI',
         'XDX',
         'ICI'
     ],{
         I: 'create:andesite_alloy',
         C: 'extrautilitiesrebirth:clean_glass',
         X: 'forestry:peat',
		 D: 'forestry:impregnated_casing'
     })
    //木工机合成安山构建
    event.custom(
		{
			"type": "forestry:carpenter","time": 5,
			"liquid": {"FluidName": "minecraft:water", "Amount": 500},
			"box": [],
			"recipe": {
				"type": "minecraft:crafting_shaped",
				"pattern": [
					"   ",
					" AB",
					" CD"
				],
				"key": {
                    "A": {"item": "create:cogwheel"},
					"B": {"item": "kubejs:andesite_alloy_sheet"},
                    "C": {"item": "create:andesite_alloy"},
                    "D": {"item": "kubejs:wooden_formwork"},
                },
				"result": {"item": "kubejs:andesite_mechanism"}
            },
			"result": {"id": "kubejs:andesite_mechanism","Count": 1}
		})
//木工台
    event.remove({output: 'forestry:carpenter' })
    event.shaped( 'forestry:carpenter', [
         'ABA',
         'ACA',
         'ABA'
     ],{
         A: 'kubejs:andesite_alloy_sheet',
         B: 'minecraft:glass',
         C: 'forestry:impregnated_casing',
     })
 }
)