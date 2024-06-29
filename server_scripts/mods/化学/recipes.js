onEvent('recipes', event => {
    //删除配方
    //添加配方
    event.remove('alchemistry:fusion_core')
    event.shaped('alchemistry:fusion_core', [
        'BCB',
        'ACA',
        'BCB',
    ] ,{
        A: 'minecraft:black_concrete',
        B: 'forestry:peat',
        C: 'forestry:impregnated_casing'
    })
    event.remove('alchemistry:fusion_controller')
    event.shaped('alchemistry:fusion_controller', [
        'BAB',
        'ACA',
        'BAB'
    ] ,{
        A: 'forestry:peat',
        B: 'minecraft:black_concrete',
        C: 'forestry:impregnated_casing'
    })
    event.remove('alchemistry:fusion_casing')
    event.shaped('8x alchemistry:fusion_casing', [
        'BBB',
        'BAB',
        'BBB'
    ] ,{
        A: 'forestry:peat',
        B: 'minecraft:black_concrete'
    })
    event.remove('alchemistry:fission_core')
    event.shaped('alchemistry:fission_core', [
        'BCB',
        'ACA',
        'BCB',
    ] ,{
        A: 'minecraft:light_gray_concrete',
        B: 'forestry:peat',
        C: 'forestry:impregnated_casing'
    })
    event.remove('alchemistry:fission_controller')
    event.shaped('alchemistry:fission_controller', [
        'BAB',
        'ACA',
        'BAB'
    ] ,{
        A: 'forestry:peat',
        B: 'minecraft:light_gray_concrete',
        C: 'forestry:impregnated_casing'
    })
    event.remove('alchemistry:fission_casing')
    event.shaped('8x alchemistry:fission_casing', [
        'BBB',
        'BAB',
        'BBB'
    ] ,{
        A: 'forestry:peat',
        B: 'minecraft:light_gray_concrete'
    })
 }
)