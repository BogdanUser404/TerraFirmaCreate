//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    //Electron lamp
    event.remove({ output: 'create:electron_tube' });
    event.shaped('create:electron_tube', [
        'GW ',
        'SB ',
        '   ',
    ], {
        G: 'tfc:glue',
        W: 'tfc_items:copper_wire',
        S: 'tfc:metal/sheet/wrought_iron',
        B: 'tfc:silica_glass_bottle',
    });

    //Brass hand
    event.remove({ output: 'create:brass_hand' });
    event.recipes.tfc.anvil(
        'create:brass_hand',
        'tfc:metal/double_sheet/brass',
        [ 'draw_third_last', 'bend_second_last', 'upset_last' ]
    ).tier(2); //Bronze tier

    //Activator
    event.remove({ output: 'create:deployer' });
    event.shaped('create:deployer', [
        'WMW',
        'GCG',
        'RAR',
    ], {
        W: 'tfc_items:wrought_iron_wire',
        M: 'create:precision_mechanism',
        C: 'create:andesite_casing',
        G: 'tfc_items:wrought_iron_gear',
        A: 'create:brass_hand',
        R: 'tfc:metal/rod/wrought_iron',
    });

    //Presection Mechanism
    event.remove({ output: 'create:precision_mechanism' });
    event.shaped('create:precision_mechanism', [
        'NLN',
        'WPW',
        'LPL',
    ], {
        N: 'tfc_items:copper_nail',
        L: 'create:electron_tube',
        W: 'tfc_items:copper_wire',
        P: '#tfc:lumber',
    });
    //Bearing
    event.remove({ output: 'create:mechanical_bearing' });
    event.shaped('create:mechanical_bearing', [
        'GPG',
        'ESE',
        'SCS',
    ], {
        G: 'tfc:glue',
        P: '#tfc:lumber',
        S:'#c:screws/wrought_iron',
        C: 'create:andesite_casing',
        E:'#c:gears/wrought_iron',
    });


    event.recipes.create.sequenced_assembly(
        Item.of('create:electron_tube'),
        Item.of('kubejs:plastic_sheet'),
        [
            event.recipes.create.deploying(
                'kubejs:plastic_sheet',
                [
                    'kubejs:plastic_sheet',
                    'powergrid:bjt_npn',
                ]
            ),
            event.recipes.create.deploying(
                'kubejs:plastic_sheet',
                [
                    'kubejs:plastic_sheet',
                    'powergrid:diode',
                ]
            ),
            event.recipes.create.deploying(
                'kubejs:plastic_sheet',
                [
                    'kubejs:plastic_sheet',
                    'powergrid:bjt_pnp',
                ]
            )
        ]
    ).transitionalItem('kubejs:plastic_sheet');

    event.recipes.create.sequenced_assembly(
        Item.of('create:precision_mechanism'),
        Item.of('kubejs:plastic_sheet'),
        [
            event.recipes.create.deploying(
                'kubejs:plastic_sheet',
                [
                    'kubejs:plastic_sheet',
                    'create:electron_tube',
                ]
            ),
            event.recipes.create.deploying(
                'kubejs:plastic_sheet',
                [
                    'kubejs:plastic_sheet',
                    'create:electron_tube',
                ]
            ),
            event.recipes.create.deploying(
                'kubejs:plastic_sheet',
                [
                    'kubejs:plastic_sheet',
                    'create:electron_tube',
                ]
            ),
        ]
    ).transitionalItem('kubejs:plastic_sheet');

    event.shaped(
        'simulated:engine_assembly',
        [
            'GSG',
            'GSG',
            'GGG',
        ],
        {
            G: 'tfc_items:wrought_iron_gear',
            S: 'create:shaft'
        }
    );

    event.blasting(
        'minecraft:smooth_stone',
        '#c:cobblestones/normal'
    )
});
