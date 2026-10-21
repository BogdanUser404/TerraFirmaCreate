//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

//Items
StartupEvents.registry('item', event => {
    event.create('kubejs:n_semiconductor').maxStackSize(64)
    event.create('kubejs:p_semiconductor').maxStackSize(64)
    event.create('kubejs:silicon_ingot').maxStackSize(64)

    event.create('kubejs:silicon_wafer').maxStackSize(64)
    event.create('kubejs:silicon_boule').maxStackSize(64)
});
