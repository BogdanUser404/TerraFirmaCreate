// (C) 2026 Bogdan Yachmenev
// License: AGPL v3.0

ServerEvents.recipes(event => {
    
    //Rocks
    const rocks = [
        'chalk', 'chert', 'claystone', 'conglomerate', 'dolomite', 
        'limestone', 'shale',
        'gneiss', 'marble', 'phyllite', 'quartzite', 'schist', 'slate',
        'diorite', 'gabbro', 'granite',
        'andesite', 'basalt', 'dacite', 'rhyolite'
    ];

    //Bricks craft
    rocks.forEach(rock => {
        event.recipes.create.cutting(
            `tfc:brick/${rock}`,
            `tfc:rock/loose/${rock}`
        ).processingTime(2);
    });

});

ServerEvents.recipes(event => {

    event.remove({ output: 'create:whisk' });
    event.recipes.tfc.anvil(
        'create:whisk',
        'tfc:metal/double_sheet/bronze',
        [ 'bend_third_last', 'upset_second_last', 'shrink_last' ] //+7 +13 +16
    )
    .tier(2); //Minimum Bronze Tier

    event.recipes.tfc.quern( Item.of('tfc:powder/salt', 4), 'petrochem:salt_dust')
    event.recipes.create.milling( Item.of('tfc:powder/salt', 4), 'petrochem:salt_dust')

    event.recipes.minecraft.crafting_shaped(
        '8x firmalife:sealed_bricks',
        [ 
            'BBB',
            'BRB',
            'BBB'
        ],
        {
            B: '#minecraft:stone_bricks',
            R: 'rubberworks:rubber_sheet',
        }
    );
});
