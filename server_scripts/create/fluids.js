//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    //Copper pipe
    event.remove({'output': 'create:fluid_pipe'})
    event.recipes.create.sequenced_assembly(
        [Item.of('4x create:fluid_pipe')],
        //Input
        Item.of('tfc:metal/double_ingot/copper'),
        
        [
            event.recipes.createvintageneoforged.turning(
                Item.of('tfc:metal/double_ingot/copper'),
                Item.of('tfc:metal/double_ingot/copper')
            ),
            event.recipes.create.filling(
                Item.of('tfc:metal/double_ingot/copper'),
                [Item.of('tfc:metal/double_ingot/copper'), Fluid.of('afc:latex', 100)]
            )
        ]
    ).transitionalItem('tfc:metal/double_ingot/copper').loops(1);
    event.recipes.create.sequenced_assembly(
        [Item.of('create:fluid_pipe')],
        //Input
        Item.of('tfc:metal/double_ingot/copper'),
        
        [
            event.recipes.createvintageneoforged.turning(
                Item.of('tfc:metal/double_ingot/copper'),
                Item.of('tfc:metal/double_ingot/copper')
            ),
            event.recipes.create.deploying(
                Item.of('tfc:metal/double_ingot/copper'),
                [Item.of('tfc:metal/double_ingot/copper'), Item.of('minecraft:leather')]
            )
        ]
    ).transitionalItem('tfc:metal/double_ingot/copper').loops(1);
    //Steel pipe
    event.remove({'output': 'petrochem:steel_fluid_pipe'})
    event.recipes.create.sequenced_assembly(
        [Item.of('4x petrochem:steel_fluid_pipe')],
        //Input
        Item.of('tfc:metal/double_ingot/steel'),
        
        [
            event.recipes.createvintageneoforged.turning(
                Item.of('tfc:metal/double_ingot/steel'),
                Item.of('tfc:metal/double_ingot/steel')
            ),
            event.recipes.create.deploying(
                Item.of('tfc:metal/double_ingot/steel'),
                [Item.of('tfc:metal/double_ingot/steel'), Item.of('rubberworks:rubber_sheet')]
            ),
        ]
    ).transitionalItem('tfc:metal/double_ingot/steel').loops(1);

    //Steel smart fluid pipe
    event.remove({'output': 'petrochem:steel_smart_fluid_pipe'})
    event.shaped('petrochem:steel_smart_fluid_pipe',
        [
            ' S ',
            ' L ',
            ' P ',
        ],
        {
            S: '#kubejs:bronze_sheets',
            L: 'create:electron_tube',
            P: 'petrochem:steel_fluid_pipe'
        }
    );
    //Steel vave
    event.remove({'output': 'petrochem:steel_fluid_valve'})
    event.shaped('petrochem:steel_fluid_valve',
        [
            'PS ',
        ],
        {
            S: 'tfc:metal/sheet/steel',
            P: 'petrochem:steel_fluid_pipe'
        }
    );

    //Copper smart fluid pipe
    event.remove({'output': 'create:smart_fluid_pipe'})
    event.shaped('create:smart_fluid_pipe',
        [
            ' S ',
            ' L ',
            ' P ',
        ],
        {
            S: 'tfc:metal/sheet/brass',
            L: 'create:electron_tube',
            P: 'create:fluid_pipe'
        }
    )

    //Copper fluid tank 
    event.remove({"output": 'create:fluid_tank'})
    event.recipes.create.mechanical_crafting(
        '4x create:fluid_tank',
        [
            'RSSR',
            'SBBS',
            'PBBP',
            'RSSR',
        ], 
        {
            R: 'tfc_items:copper_rivet',
            S: 'tfc_items:copper_heavy_sheet',
            B: 'rubberworks:rubber_sheet',
            P: 'create:fluid_pipe'
        }
    );

    //Steel fluid tank
    event.remove({"output": 'petrochem:steel_fluid_tank'})
    event.recipes.create.mechanical_crafting(
        '4x petrochem:steel_fluid_tank',
        [
            'RSSR',
            'SBBS',
            'PBBP',
            'RSSR',
        ], 
        {
            R: 'tfc_items:steel_rivet',
            S: 'tfc_items:steel_heavy_sheet',
            B: 'rubberworks:rubber_sheet',
            P: 'petrochem:steel_fluid_pipe'
        }
    );

    //Platinum fluid tank
    event.remove({"output": 'createpropulsion:platinum_fluid_tank'})
    event.recipes.create.mechanical_crafting(
        '4x createpropulsion:platinum_fluid_tank',
        [
            'RSSR',
            'SBBS',
            'PBBP',
            'RSSR',
        ], 
        {
            R: 'tfc_items:steel_rivet',
            S: 'tfcm:metal/heavy_sheet/platinum',
            B: 'kubejs:plastic_sheet',
            P: 'petrochem:steel_fluid_pipe'
        }
    );
})