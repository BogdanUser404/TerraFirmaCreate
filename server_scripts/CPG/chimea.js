//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    event.remove({output: 'powergrid:acid'})

    event.recipes.createvintageneoforged.pressurizing(
        Fluid.of('powergrid:acid', 100),
        [
            Fluid.of('petrochem:hydrogen', 50),
            Fluid.of('petrochem:chlorine', 50)
        ]
    )
})