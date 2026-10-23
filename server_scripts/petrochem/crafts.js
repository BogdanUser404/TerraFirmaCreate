//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    event.remove({'id': 'petrochem:mixing/basic_plastic'})
    event.recipes.vintage.pressurizing(
        [ //Output
            Fluid.of('petrochem:plastic')
        ],
        [//Input
            Fluid.of('petrochem:ethylene')
        ]
    ).heated();

    event.recipes.create.compacting(
        [ //Output
            Item.of('tfc:ceramic/ingot_mold'),
            Item.of('kubejs:plastic_ignot')
        ],
        [ //Input
            Fluid.of('petrochem:plastic', 100),
            Item.of('tfc:ceramic/ingot_mold')
        ]
    )
    event.recipes.create.pressing(
        Item.of('kubejs:plastic_sheet'),
        Item.of('kubejs:plastic_ignot')
    );

    event.shaped(
        Item.of('kubejs:plastic_block'),
        [
            'PPP',
            'PPP',
            'PPP'
        ],
        {
            P: 'kubejs:plastic_sheet'
        }
    );
    event.remove({"output": 'petrochem:bronze_ingot'});
    event.remove({"output": 'petrochem:steel_ingot'});
    event.remove({"output": 'petrochem:tin_nugget'});
})