onEvent('recipes', event => {
    //删除配方
    event.remove({output: 'projectex:knowledge_sharing_book' })//知识共享之书
    event.remove({output: 'projecte:tome' })//炼金术秘卷
    //修改配方
    //低级等价粉
    event.remove({output: 'projecte:low_covalence_dust' })
    event.shaped( '40x projecte:low_covalence_dust', [
        'ICI',
        'CIC',
        'ICI'
    ],{
        I: 'botania:mana_powder',
        C: 'botania:manasteel_ingot'
    })

 }
)