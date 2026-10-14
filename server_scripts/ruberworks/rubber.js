//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    event.remove({ id: /^rubberworks:sapping\/.*/ });
    event.remove({id: 'rubberworks:compacting/rubber'});
    event.remove({id: 'afc:pot/rubber_temp'});
    event.remove({id: 'afc:pot/rubber'});
    event.remove({id: 'afc:vat/rubber'})

    event.recipes.create.mixing([Fluid.of('rubberworks:resin')], [Fluid.of('afc:latex', 100), Item.of('tfc:powder/sulfur')]).heated();
})