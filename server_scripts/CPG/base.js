//Copyright Bogdan Yachemenev
//License: AGPL V3

ServerEvents.recipes(event => {
    event.remove({mod: 'powergrid'});
    event.remove({mod: 'powerchip'});

    //Coil
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
    ).loops(2).transitionalItem('powergrid:conductive_casin');
});