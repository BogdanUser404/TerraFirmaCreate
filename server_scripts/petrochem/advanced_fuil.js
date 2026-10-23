//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    //Oil rectification
    event.remove({ input: "petrochem:oil" })    
    event.custom({
        "type": "petrochem:distilling",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "petrochem:oil"
            }
        ],
        "mode": "DISTIL_ATMOSPHERIC",
        "results": [
            {
                "amount": 450,
                "id": "petrochem:oil_residue"
            },
            {
                "amount": 280,
                "id": "petrochem:heavy_diesel"
            },
            {
                "amount": 120,
                "id": "petrochem:kerosene"
            },
            {
                "amount": 150,
                "id": "petrochem:heavy_naphta"
            }
        ]
    }).id('kubejs:petrochem/distilling/rectify_oil_expert');

    //VGO Kraking
    event.recipes.vintage.pressurizing(
            [ //Output
                Fluid.of('petrochem:hydrocracked_gasoline', 450),
                Fluid.of('petrochem:light_diesel', 550),
            ],
            [ // Input
                Fluid.of('petrochem:heavy_gas_oil', 1000),
                Fluid.of('petrochem:hydrogen', 100),
            ],
    ).heated().processingTime(200)

    //Heavy Diesel Kraking
    event.recipes.vintage.pressurizing(
            [ // Output
                Fluid.of('petrochem:hydrogen_sulfide', 100),
                Fluid.of('petrochem:desulfurized_heavy_diesel', 950),
            ],
            [ // Input
                Fluid.of('petrochem:heavy_diesel', 1000),
                Fluid.of('petrochem:hydrogen', 100),
            ],
    ).heated().processingTime(200)
    event.remove({id: 'petrochem:distilling/basic_atmospheric'});

    //Kerosene kraking
    event.recipes.vintage.pressurizing(
            [ // Output
                Fluid.of('petrochem:hydrogen_sulfide', 100),
                Fluid.of('petrochem:desulfurized_kerosene', 950),
            ],
            [ // Input
                Fluid.of('petrochem:kerosene', 1000),
                Fluid.of('petrochem:hydrogen', 100),
            ],
    ).heated().processingTime(200)

    //Light Naphta
    event.custom({
        "type": "petrochem:distilling",
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "petrochem:light_naphta"
            }
        ],
        "mode": "DISTIL_FLASH",
        "results": [
            {
                "amount": 100,
                "id": "modernelements:benzene_fluid"
            },
            {
                "amount": 600,
                "id": "petrochem:ethylene"
            },
            {
                "amount": 300,
                "id": "petrochem:lpg"
            },
        ]
    }).id('kubejs:petrochem/distilling/flash_naphta');
    
    //Heavy naphta kraking
    event.recipes.vintage.pressurizing(
            [ // Output
                Fluid.of('petrochem:hydrogen_sulfide', 100),
                Fluid.of('petrochem:desulfurized_heavy_naphta', 900),
            ],
            [ // Input
                Fluid.of('petrochem:heavy_naphta', 1000),
                Fluid.of('petrochem:hydrogen', 100),
            ],
    ).heated().processingTime(200)

    //Gasoline
    event.remove({ id: 'petrochem:mixing/basic_gasoline' });
    event.recipes.vintage.pressurizing(
        //Output
        [
            CreateItem.of('tfcm:metal/sheet/platinum', 0.99),
            Fluid.of('petrochem:gasoline')
        ],
        //Input
        [
            Fluid.of('petrochem:desulfurized_heavy_naphta', 1000),
            Item.of('tfcm:metal/sheet/platinum')
        ]
    ).heated();
    event.recipes.vintage.pressurizing(
        //Output
        [
            CreateItem.of('tfcm:metal/sheet/platinum', 0.99),
            Fluid.of('petrochem:gasoline')
        ],
        //Input
        [
            Fluid.of('petrochem:hydrocracked_gasoline', 1000),
            Item.of('tfcm:metal/sheet/platinum')
        ]
    ).heated();

    //Disel
    event.recipes.create.mixing(
        [
            Fluid.of('petrochem:diesel', 1000)
        ],
        [
            Fluid.of('petrochem:light_diesel', 500),
            Fluid.of('petrochem:desulfurized_heavy_diesel', 500)
        ]
    )
});
