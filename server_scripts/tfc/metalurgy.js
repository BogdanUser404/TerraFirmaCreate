//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    event.recipes.create.mixing(
        Item.of('tfc:raw_iron_bloom'),
        [
            Fluid.of('tfc:metal/cast_iron'),
            '#minecraft:coals'
        ]
    ).heated()
    event.recipes.create.mixing(
        Item.of('tfc:metal/ingot/pig_iron'),
        [
            Fluid.of('tfc:metal/cast_iron'),
            Item.of('tfc:powder/flux')
        ]
    ).heated()

    event.recipes.create.pressing(
        Item.of('tfc:metal/ingot/pig_iron'),
        Item.of('tfc:metal/ingot/high_carbon_steel'),
    )
    event.recipes.create.pressing(
        Item.of('tfc:metal/ingot/high_carbon_steel'),
        Item.of('tfc:metal/ingot/steel')
    )
})