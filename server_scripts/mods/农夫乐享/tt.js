//砧板合成木制模板
onEvent('recipes', event => {

    event.custom(
        {"type": "farmersdelight:cutting",
          "ingredients": [{"item": "tconstruct:pattern"}],
          "tool": {
          "tag": "farmersdelight:tools/knives"},
          "result": [{"item": "kubejs:wooden_formwork","count": 1 }]
    })    
})
