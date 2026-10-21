//Copyright Bogdan Yachemenev
//License: AGPL V3

ServerEvents.recipes(event => {
    [
        'powergrid:copper_coil',
        'powergrid:wire',
        'powergrid:golden_wire',
        'powergrid:generator_housing',
        'powergrid:generator_induction_rotor',
        'powergrid:generator_commutator',
        'powergrid:generator_clutch'
    ].forEach(item => {
        event.remove({ output: item })
    })



    //Coil1
    event.shapeless(
        'powergrid:copper_coil',
        [
            '4x tfc_items:copper_wire'
        ]
    )
    //Wire
    event.shapeless(
        'powergrid:wire',
        [
            'tfc_items:copper_wire'
        ]
    )
    //Golden wire
    //Wire
    event.shapeless(
        'powergrid:golden_wire',
        [
            'tfc_items:gold_wire'
        ]
    )

    event.shaped(
        'minecraft:coal_block',
        [
            'CCC',
            'CCC',
            'CCC'
        ],
        {
            C: '#minecraft:coals'
        }
    );

    //Generators block

    event.recipes.create.sequenced_assembly(
        [
            Item.of('powergrid:generator_housing')
        ],
        'powergrid:conductive_casing',
        [
            event.recipes.create.deploying(
                Item.of('powergrid:conductive_casing'),
                [
                    Item.of('powergrid:conductive_casing'),
                    Item.of('powergrid:wire')
                ]
            ),
            event.recipes.create.cutting(
                Item.of('powergrid:conductive_casing'),
                Item.of('powergrid:conductive_casing')
            ),
            event.recipes.create.deploying(
                Item.of('powergrid:conductive_casing'),
                [
                    Item.of('powergrid:conductive_casing'),
                    Item.of('tfc:metal/sheet/copper')
                ]
            )
        ]
    ).loops(2).transitionalItem('powergrid:conductive_casing');

    event.recipes.create.mechanical_crafting(
        '4x powergrid:generator_induction_rotor',
        [
            ' MCM ',
            'MCICM',
            'CISIC',
            'MCICM',
            ' MCM '
        ],
        {
            M: 'powergrid:magnet',
            C: 'powergrid:copper_coil',
            I: 'tfc:metal/ingot/steel',
            S: 'create:shaft',
        }
    );
    event.recipes.create.mechanical_crafting(
        'powergrid:generator_commutator',
        [
            'GSG',
            'CSC',
            'GDG',
        ],
        {
            G: 'tfc_items:steel_gear',
            C: 'powergrid:copper_coil',
            S: 'create:shaft',
            D: 'powergrid:device_connector'
        }
    );

    event.shaped(
        'powergrid:generator_clutch',
        [
            'PPP',
            'GSG',
            'RBR'
        ],
        {
            P: 'tfc_items:steel_heavy_sheet',
            G: 'tfc_items:steel_gear',
            S: 'create:shaft',
            R: 'tfc_items:steel_screw',
            B: 'create:mechanical_bearing',
        }
    );

    event.recipes.create.sequenced_assembly(
        Item.of('powergrid:electrical_gizmo'),
        Item.of('powergrid:empty_circuit'),
        [
            event.recipes.create.deploying(
                'powergrid:empty_circuit',
                [
                    'powergrid:empty_circuit',
                    'tfc:metal/sheet/copper'
                ],
            ),
            event.recipes.create.filling(
                'powergrid:empty_circuit',
                [
                    'powergrid:empty_circuit',
                    Fluid.of('powergrid:acid',100)
                ],
            ),
            event.recipes.create.deploying(
                'powergrid:empty_circuit',
                [
                    'powergrid:empty_circuit',
                    'powergrid:bjt_npn',
                ],
            ),
            event.recipes.create.deploying(
                'powergrid:empty_circuit',
                [
                    'powergrid:empty_circuit',
                    'powergrid:resistor',
                ],
            ),
            event.recipes.create.deploying(
                'powergrid:empty_circuit',
                [
                    'powergrid:empty_circuit',
                    'powergrid:bjt_pnp',
                ],
            ),
            event.recipes.create.deploying(
                'powergrid:empty_circuit',
                [
                    'powergrid:empty_circuit',
                    'powergrid:lv_button',
                ],
            ),
            event.recipes.create.filling(
                'powergrid:empty_circuit',
                [
                    'powergrid:empty_circuit',
                    Fluid.of('tfc:metal/solder',100)
                ],
            ),
        ]
    ).transitionalItem('powergrid:empty_circuit');

    
});