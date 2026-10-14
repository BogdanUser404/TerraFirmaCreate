//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

StartupEvents.registry('block', event => {
    
    //Plastic case
    event.create('plastic_casing')
        .displayName('Plastic Case')
        .hardness(1.5)
        .resistance(1.5)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')

    //Plastic Blocks
    event.create('plastic_block')
        .displayName('Блок пластика')
        .hardness(1.0)
        .resistance(1.0)
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe') 

})