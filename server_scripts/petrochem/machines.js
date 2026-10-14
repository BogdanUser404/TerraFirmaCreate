//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    //Gasoline Egine
    event.remove({'output': 'petrochem:small_engine'});
    event.recipes.create.sequenced_assembly(
        [Item.of('petrochem:small_engine')],
        //Input
        Item.of('tfc_items:steel_heavy_sheet'),
        
        [
            event.recipes.createvintageneoforged.turning(
                Item.of('tfc_items:steel_heavy_sheet'),
                Item.of('tfc_items:steel_heavy_sheet')
            ),
            event.recipes.create.deploying(
                Item.of('tfc_items:steel_heavy_sheet'), 
                [Item.of('tfc_items:stainless_steel_heavy_sheet'), Item.of('tfc:metal/sheet/steel')]
            ),
            event.recipes.create.deploying(
                Item.of('tfc_items:steel_heavy_sheet'), 
                [Item.of('tfc_items:stainless_steel_heavy_sheet'), Item.of('tfc:metal/rod/steel')]
            ),
            event.recipes.create.deploying(
                Item.of('tfc_items:steel_heavy_sheet'), 
                [Item.of('tfc_items:stainless_steel_heavy_sheet'), Item.of('create:shaft')]
            ),
            event.recipes.create.deploying(
                Item.of('tfc_items:steel_heavy_sheet'), 
                [Item.of('tfc_items:stainless_steel_heavy_sheet'), Item.of('tfc_items:brass_gear')]
            ),
        ]
    )
    .transitionalItem('tfc_items:steel_heavy_sheet')
    .loops(4)

    //Diesel Engine
    event.remove({'output': 'petrochem:medium_engine'});
    event.recipes.create.sequenced_assembly(
        [Item.of('petrochem:medium_engine')],
        //Input
        Item.of('petrochem:steel_fluid_tank'),
        
        [
            event.recipes.createvintageneoforged.turning(
                Item.of('petrochem:steel_fluid_tank'),
                Item.of('petrochem:steel_fluid_tank')
            ),
            event.recipes.create.deploying(
                Item.of('petrochem:steel_fluid_tank'), 
                [Item.of('petrochem:steel_fluid_tank'), Item.of('tfc:metal/sheet/steel')]
            ),
            event.recipes.create.deploying(
                Item.of('tfc_items:steel_heavy_sheet'), 
                [Item.of('petrochem:steel_fluid_tank'), Item.of('tfc:metal/rod/steel')]
            ),
            event.recipes.create.deploying(
                Item.of('tfc_items:steel_heavy_sheet'), 
                [Item.of('petrochem:steel_fluid_tank'), Item.of('tfc_items:brass_gear')]
            ),
        ]
    )
    .transitionalItem('tfc_items:steel_heavy_sheet')
    .loops(1)

    event.remove({"output": 'petrochem:distillation_controller'})
    event.recipes.create.mechanical_crafting(
        'petrochem:distillation_controller',
        [
            'SPPS',
            'PGGP',
            'MVVM',
            'FGGF',
        ], 
        {
            S: 'tfc_items:steel_screw',
            P: 'tfc:metal/sheet/steel',
            G: 'tfc_items:steel_gear',
            M: 'create:precision_mechanism',
            V: 'petrochem:steel_fluid_valve',
            F: 'petrochem:steel_smart_fluid_pipe',
        }
    );
})