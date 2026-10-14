//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    //Glue
    event.recipes.create.mixing(
        ['tfc:glue'],
        [
            Fluid.of('petrochem:gasoline', 180),
            Fluid.of('afc:latex', 20),
        ]
    )
    //Glue (Kerosene)
    event.recipes.create.mixing(
        ['tfc:glue'],
        [
            Fluid.of('petrochem:desulfurized_kerosene', 100),
            Fluid.of('afc:latex', 20),
        ]
    )

    //Olive oil
    event.recipes.create.compacting(
        [
            Fluid.of('tfc:olive_oil', 120),
            CreateItem.of('tfc:olive_paste', 0.05)
        ],
        'tfc:olive_paste'
    ).heated(); 

});
