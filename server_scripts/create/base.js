//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {

    //Brass case
    event.remove({ output: 'create:brass_casing' });
    event.shaped('create:brass_casing', [
        'NPN',
        'PFP',
        'NPN',
    ], {
        N: '#c:nails',
        P: '#tfc:lumber',
        F: '#c:foils/brass',
    });

    //Copper case
    event.remove({ output: 'create:copper_casing' });
    event.shaped('create:copper_casing', [
        'NPN',
        'PFP',
        'NPN',
    ], {
        N: '#c:nails',
        P: '#tfc:lumber',
        F: '#c:foils/copper',
    });

    //Base case
    event.remove({ output: 'create:andesite_casing' });
    event.shaped('create:andesite_casing', [
        'NPN',
        'AFA',
        'NPN',
    ], {
        N: '#c:nails',
        A: 'tfc:brick/andesite',
        P: '#tfc:lumber',
        F: '#kubejs:bronze_foils',
    });

    //Super glue
    event.remove({ output: 'create:super_glue' });
    event.shaped('create:super_glue', [
        'GB ',
        'FG ',
        '   ',
    ], {
        B: '#kubejs:bronze_ingots',
        F: '#kubejs:bronze_foils',
        G: 'tfc:glue',
    });

    //Andesite alloy
    event.remove({output: 'create:andesite_alloy'});
    event.recipes.create.filling(
        '2x create:andesite_alloy',
        [
            Fluid.of('tfc:metal/bronze', 100),
            'tfc:rock/loose/andesite'
        ]
    );
    event.recipes.create.filling(
        '2x create:andesite_alloy',
        [
            Fluid.of('tfc:metal/bismuth_bronze', 100),
            'tfc:rock/loose/andesite'
        ]
    );
    event.recipes.create.filling(
        '2x create:andesite_alloy',
        [
            Fluid.of('tfc:metal/black_bronze', 100),
            'tfc:rock/loose/andesite'
        ]
    );
    

    //Plastic case
    event.recipes.create.sequenced_assembly(
        [Item.of('kubejs:plastic_casing')],
        //Input
        Item.of('kubejs:plastic_block'),
        
        [
            event.recipes.create.deploying(
                Item.of('kubejs:plastic_block'), 
                [Item.of('kubejs:plastic_block'), Item.of('powergrid:pins')]
            ),
            
            event.recipes.create.deploying(
                Item.of('kubejs:plastic_block'), 
                [Item.of('kubejs:plastic_block'), Item.of('powergrid:electric_fan')]
            ),
            
            event.recipes.create.deploying(
                Item.of('kubejs:plastic_block'), 
                [Item.of('kubejs:plastic_block'), Item.of('powergrid:light_fixture')]
            )
        ]
    )
    .transitionalItem('kubejs:plastic_block')
    .loops(1)
});
