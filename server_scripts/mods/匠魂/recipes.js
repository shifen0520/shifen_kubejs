onEvent('recipes', event => {
    //修改配方
    //模具
    event.remove({output: 'tconstruct:pattern' })
    event.shaped( 'tconstruct:pattern' , [
        '   ',
        'NNN',
        'III'
    ],{
        I: 'minecraft:stick',
        N: 'minecraft:oak_planks'
    })
 }
)
   