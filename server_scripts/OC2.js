//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    event.remove({mod: 'oc2'});

    event.recipes.create.sequenced_assembly(
        CreateItem.of('oc2:cpu_riscv', 0.5), 
        'kubejs:silicon_wafer', 
        [
            event.recipes.create.filling(
                'kubejs:silicon_wafer', 
                ['kubejs:silicon_wafer', Fluid.of('tfc:metal/solder', 10)] 
            ),
            event.recipes.create.filling(
                'kubejs:silicon_wafer', 
                ['kubejs:silicon_wafer', Fluid.of('tfc:metal/antimony', 10)] 
            ),
            event.recipes.create.filling(
                'kubejs:silicon_wafer', 
                ['kubejs:silicon_wafer', Fluid.of('tfc:metal/aluminum', 10)] 
            ),
            event.recipes.create.cutting(
                'kubejs:silicon_wafer',
                'kubejs:silicon_wafer'
            ),
            event.recipes.create.filling(
                'kubejs:silicon_wafer', 
                ['kubejs:silicon_wafer', Fluid.of('petrochem:plastic', 100)] 
            )
        ]
    ).transitionalItem('kubejs:silicon_wafer').loops(1)

    event.recipes.create.sequenced_assembly(
        Item.of('oc2:cpu_z80'),
        Item.of('powergrid:empty_circuit'),
        [
            event.recipes.create.deploying(
                'powergrid:empty_circuit',
                ['powergrid:empty_circuit', Item.of('create:electron_tube')]
            ),
            event.recipes.create.filling(
                'powergrid:empty_circuit',
                ['powergrid:empty_circuit', Fluid.of('tfc:metal/solder', 10)]
            )
        ]
    ).transitionalItem('powergrid:empty_circuit').loops(10)

    event.recipes.create.sequenced_assembly(
        Item.of('oc2:memory_small'),
        Item.of('powergrid:empty_circuit'),
        [
            event.recipes.create.deploying(
                'powergrid:empty_circuit',
                ['powergrid:empty_circuit', Item.of('powergrid:capacitor')]
            ),
            event.recipes.create.filling(
                'powergrid:empty_circuit',
                ['powergrid:empty_circuit', Fluid.of('tfc:metal/solder', 10)]
            )
        ]
    ).transitionalItem('powergrid:empty_circuit').loops(15)

    event.recipes.create.sequenced_assembly(
        Item.of('oc2:memory_medium'),
        Item.of('kubejs:plastic_sheet'),

        [
            event.recipes.create.deploying(
                'kubejs:plastic_sheet',
                ['kubejs:plastic_sheet', Item.of('powergrid:diode')]
            ),
            event.recipes.create.deploying(
                'kubejs:plastic_sheet',
                ['kubejs:plastic_sheet', Item.of('powergrid:bjt_npn')]
            ),
            event.recipes.create.deploying(
                'kubejs:plastic_sheet',
                ['kubejs:plastic_sheet', Item.of('powergrid:bjt_pnp')]
            ),
            event.recipes.create.filling(
                'kubejs:plastic_sheet',
                ['kubejs:plastic_sheet', Fluid.of('tfc:metal/solder',10)]
            )
        ]
    ).transitionalItem('kubejs:plastic_sheet').loops(15)


    event.recipes.create.sequenced_assembly(
        Item.of('oc2:memory_large'),
        Item.of('powergrid:electrical_gizmo'),

        [
            event.recipes.create.deploying(
                'powergrid:electrical_gizmo',
                ['powergrid:electrical_gizmo', Item.of('powergrid:diode')]
            ),
            event.recipes.create.deploying(
                'powergrid:electrical_gizmo',
                ['powergrid:electrical_gizmo', Item.of('powergrid:bjt_npn')]
            ),
            event.recipes.create.deploying(
                'powergrid:electrical_gizmo',
                ['powergrid:electrical_gizmo', Item.of('powergrid:bjt_pnp')]
            ),
            event.recipes.create.filling(
                'powergrid:electrical_gizmo',
                ['powergrid:electrical_gizmo', Fluid.of('tfc:metal/solder',10)]
            )
        ]
    ).transitionalItem('powergrid:electrical_gizmo').loops(15)

    event.recipes.create.sequenced_assembly(
        Item.of('oc2:hard_drive_small'),
        Item.of('create:precision_mechanism'),

        [
            event.recipes.create.deploying(
                'create:precision_mechanism',
                ['create:precision_mechanism', 'tfc:metal/sheet/steel']
            ),
            event.recipes.create.deploying(
                'create:precision_mechanism',
                ['create:precision_mechanism', 'tfc:metal/rod/gold']
            ),
        ]
    ).transitionalItem('create:precision_mechanism');

    event.recipes.create.sequenced_assembly(
        Item.of('oc2:hard_drive_medium'),
        Item.of('kubejs:plastic_casing'),
        [
            event.recipes.create.deploying(
                'kubejs:plastic_casing',
                [
                    'kubejs:plastic_casing', 
                    'powergrid:magnet'
                ]
            ),
            event.recipes.create.deploying(
                'kubejs:plastic_casing',
                [
                    'kubejs:plastic_casing',
                    'tfc:metal/rod/steel'
                ]
            ),
            event.recipes.create.deploying(
                'kubejs:plastic_casing',
                [
                    'kubejs:plastic_casing',
                    'powergrid:electrical_gizmo'
                ]
            )
        ]
    ).transitionalItem('kubejs:plastic_casing');
    event.recipes.create.sequenced_assembly(
        Item.of('oc2:hard_drive_large'),
        Item.of('powergrid:electrical_gizmo'),
        [
            event.recipes.create.deploying(
                'powergrid:electrical_gizmo',
                [
                    'powergrid:electrical_gizmo',
                    'powergrid:diode'
                ]
            ),
            event.recipes.create.filling(
                'powergrid:electrical_gizmo',
                ['powergrid:electrical_gizmo', Fluid.of('petrochem:plastic', 100)]
            ),
            event.recipes.create.deploying(
                'powergrid:electrical_gizmo',
                ['powergrid:electrical_gizmo', 'tfc:metal/rod/blue_steel']
            )
        ]
    ).transitionalItem('powergrid:electrical_gizmo');

    event.shaped(
        'oc2:hard_drive_large[custom_data={oc2:{image:"oc2:block_devices/hdd/sedna.bin"}},dyed_color={rgb:-10585066}]',
        [
            'D  '
        ],
        {
            D: 'oc2:hard_drive_large'
        }
    );
    event.shaped(
        'oc2:floppy[custom_data={oc2:{image:\'oc2:block_devices/floppy/cpm.bin\'}},dyed_color={rgb:-425955}]',
        [
            'F  ',
            '   ',
            '   '
        ],
        {
            F: 'oc2:floppy'
        }
    )

    event.recipes.create.mechanical_crafting(
        'oc2:computer',
        [
            'EAAE',
            'FPPG',
            'FCHG',
            'ESSE'
        ],
        {
            E: 'tfc_items:steel_screw',
            F: 'tfc_items:steel_foil',
            G: 'create:framed_glass_pane',
            C: 'oc2:cpu_z80',
            H: 'oc2:hard_drive_small',
            A: 'powergrid:device_connector',
            P: 'create:precision_mechanism',
            S: 'tfc:metal/sheet/steel'
        }
    ),

    event.shaped(
        'oc2:network_interface_card',
        [
            'PAR',
            'FFF',
            'TCT'
        ],
        {
            P: 'powergrid:punch_card_reader',
            A: 'powergrid:device_connector',
            R: 'powergrid:relay',
            F: 'tfc_items:copper_foil',
            T: 'powergrid:bjt_npn',
            C: 'powergrid:empty_circuit'
        }
    );
    event.shaped(
        'oc2:redstone_interface_card',
        [
            'RRR',
            'TCT',
            'III'
        ],
        {
            R: 'minecraft:redstone',
            T: 'powergrid:bjt_npn',
            C: 'powergrid:redstone_converter',
            I: 'kubejs:plastic_ignot',
            P: ''
        }
    );
    event.shaped(
        'oc2:file_import_export_card',
        [
            'HTH',
            'TFT',
            'SSS'
        ],
        {
            T: 'powergrid:bjt_npn',
            S: 'kubejs:plastic_sheet',
            F: 'tfc_items:copper_foil',
            H: 'oc2:hard_drive_medium',

        }
    );
    event.shaped(
        'oc2:sound_card',
        [
            ' C ',
            'TWT',
            'SSS'
        ],
        {
            T: 'powergrid:bjt_npn',
            S: 'kubejs:plastic_sheet',
            C: 'powergrid:device_connector',
            W: 'powergrid:wire'
        }
    );
    event.shaped(
        'oc2:redstone_interface',
        [
            'RCR',
            'CAC',
            'RCR'
        ],
        {
            C: 'oc2:redstone_interface_card',
            A: 'kubejs:plastic_casing',
            R: 'minecraft:redstone'
        }
    );

    event.shaped(
        'oc2:network_hub',
        [
            'WCW',
            'CAC',
            'WCW'
        ],
        {
            C: 'oc2:network_interface_card',
            A: 'kubejs:plastic_casing',
            W: 'powergrid:golden_wire'
        }
    );

    event.shaped(
        'oc2:network_cable',
        [
            'SSS',
            'WWW',
            'SSS'
        ],
        {
            S: 'kubejs:plastic_sheet',
            W: 'powergrid:golden_wire',
        }
    );
    event.shaped(
        'oc2:network_connector',
        [
            'SSS',
            'CWC',
            'SSS'
        ],
        {
            S: 'kubejs:plastic_sheet',
            W: 'powergrid:golden_wire',
            C: 'powergrid:device_connector'
        }
    );
    event.shaped(
        'oc2:bus_cable',
        [
            'SSS',
            'WWW',
            'SSS'
        ],
        {
            S: 'kubejs:plastic_sheet',
            W: 'powergrid:wire',
        }
    );
    event.shaped(
        'oc2:bus_interface',
        [
            'SSS',
            'CWC',
            'SSS'
        ],
        {
            S: 'kubejs:plastic_sheet',
            W: 'powergrid:wire',
            C: 'powergrid:device_connector'
        }
    );

    event.shaped(
        'oc2:keyboard',
        [
            ' SS',
            'SKC',
            'SSS'
        ],
        {
            S: 'kubejs:plastic_sheet',
            K: 'simulated:linked_typewriter',
            C: 'oc2:bus_cable'
        }

    );
    event.shaped(
        'oc2:terminal',
        [
            'GS ',
            'GSC',
            'GK '
        ],
        {
            S: 'kubejs:plastic_sheet',
            C: 'oc2:bus_cable',
            G: 'create:framed_glass_pane',
            K: 'oc2:keyboard'
        }
    );

    event.shaped(
        'oc2:flash_memory',
        [
            'SRS',
            'SRS',
            'SRS'
        ],
        {
            S: 'tfc:metal/sheet/steel',
            R: 'powergrid:relay'
        }
    );

    event.shaped(
        'oc2:floppy',
        [
            'PPS',
            'PSP',
            'PPP'
        ],
        {
            S: 'tfc:metal/sheet/steel',
            P: 'minecraft:paper'
        }
    );


    event.shaped(
        'oc2:disk_drive',
        [
            'SSS',
            ' FR',
            'SSS'
        ],
        {
            S: 'tfc:metal/sheet/steel',
            R: 'powergrid:relay',
            F: 'oc2:floppy'
        }
    );

    event.shaped(
        'oc2:flash_drive',
        [
            'SSS',
            ' FT',
            'SSS'
        ],
        {
            S: 'kubejs:plastic_sheet',
            T: 'powergrid:bjt_npn',
            F: 'oc2:flash_memory'
        }
    );

    event.shaped(
        'oc2:flash_memory[custom_data={oc2:{image:"oc2:block_devices/flash/riscv.bin"}},dyed_color={rgb:-10585066}]',
        [
            'F'
        ],
        {
            F: 'oc2:flash_memory'
        }
    );

    event.shaped(
        'oc2:flash_memory[custom_data={oc2:{image:"oc2:block_devices/flash/z80.bin"}},dyed_color={rgb:-425955}]',
        [
            'FL'
        ],
        {
            F: 'oc2:flash_memory',
            L: 'oc2:floppy'
        }
    )

})
