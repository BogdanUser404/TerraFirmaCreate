//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {

    event.recipes.vintage.pressurizing(
        Fluid.of('modernelements:silicon_fluid'),
        [
            Item.of('tfc:powder/charcoal'),
            '#c:sands',
        ]
    ).superheated();

    event.recipes.create.mixing('kubejs:silicon_boule', [
        Fluid.of('modernelements:silicon_fluid'),
        Item.of('tfc:metal/rod/gold')
    ]);

    event.recipes.create.cutting('10x kubejs:silicon_wafer', 'kubejs:silicon_boule');

    event.remove({output: 'powergrid:bjt_npn'})
    event.remove({output: 'powergrid:bjt_pnp'})

    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('20x powergrid:bjt_npn', 0.80),
        ],
        'kubejs:silicon_wafer',
        [
            //N Layer
            event.recipes.create.filling(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', Fluid.of('tfc:metal/antimony', 100)]
            ),
            event.recipes.vintage.polishing('kubejs:silicon_wafer', 'kubejs:silicon_wafer'),

            // P layer
            event.recipes.create.filling(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', Fluid.of('tfc:metal/aluminum', 100)]
            ),
            event.recipes.vintage.polishing('kubejs:silicon_wafer', 'kubejs:silicon_wafer'),
            // N Layer

            event.recipes.create.filling(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', Fluid.of('tfc:metal/antimony', 100)]
            ),
            event.recipes.vintage.polishing('kubejs:silicon_wafer', 'kubejs:silicon_wafer'),

            //Case
            event.recipes.create.cutting('kubejs:silicon_wafer','kubejs:silicon_wafer'),
            event.recipes.create.filling(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', Fluid.of('petrochem:plastic', 100)]
            )
        ]

    ).transitionalItem('kubejs:silicon_wafer');
    event.recipes.create.sequenced_assembly(
        [
            CreateItem.of('20x powergrid:bjt_pnp', 0.80),
        ],
        'kubejs:silicon_wafer',
        [
            //N Layer
            event.recipes.create.filling(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', Fluid.of('tfc:metal/aluminum', 100)]
            ),
            event.recipes.vintage.polishing('kubejs:silicon_wafer', 'kubejs:silicon_wafer'),

            // P layer
            event.recipes.create.filling(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', Fluid.of('tfc:metal/antimony', 100)]
            ),
            event.recipes.vintage.polishing('kubejs:silicon_wafer', 'kubejs:silicon_wafer'),
            // N Layer

            event.recipes.create.filling(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', Fluid.of('tfc:metal/aluminum', 100)]
            ),
            event.recipes.vintage.polishing('kubejs:silicon_wafer', 'kubejs:silicon_wafer'),

            //Case
            event.recipes.create.cutting('kubejs:silicon_wafer','kubejs:silicon_wafer'),
            event.recipes.create.filling(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', Fluid.of('petrochem:plastic', 100)]
            )
        ]

    ).transitionalItem('kubejs:silicon_wafer');
    
    event.remove({output: 'powergrid:diode'})

    event.recipes.create.sequenced_assembly(
        Item.of('20x powergrid:diode'),
        Item.of('kubejs:silicon_wafer'),
        [
            event.recipes.create.deploying(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', 'powergrid:wire']
            ),

            //N Layer
            event.recipes.create.filling(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', Fluid.of('tfc:metal/aluminum', 100)]
            ),
            event.recipes.vintage.polishing('kubejs:silicon_wafer', 'kubejs:silicon_wafer'),
            // P layer
            event.recipes.create.filling(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', Fluid.of('tfc:metal/antimony', 100)]
            ),
            event.recipes.vintage.polishing('kubejs:silicon_wafer', 'kubejs:silicon_wafer'),

            //Case
            event.recipes.create.cutting('kubejs:silicon_wafer','kubejs:silicon_wafer'),
            event.recipes.create.filling(
                'kubejs:silicon_wafer',
                ['kubejs:silicon_wafer', Fluid.of('petrochem:plastic', 100)]
            )
        ]
    ).transitionalItem('kubejs:silicon_wafer');
})