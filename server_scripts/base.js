//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    event.remove({output: 'create:copper_sheet'});
    event.remove({output: 'create:brass_sheet'});
    event.remove({output: 'create:brass_ingot'});
    event.remove({output: 'create:iron_sheet'});
    event.remove({output: 'create:golden_sheet'});
    event.remove({output: 'create:zinc_ingot'});
    event.remove({output: 'create:polished_rose_quartz'});

    event.remove({output: 'powergrid:zinc_sheet'});
    event.remove({output: 'petrochem:steel_sheet'});
    event.remove({output: 'petrochem:steel_ingot'});

    event.replaceInput({}, 'create:polished_rose_quartz', 'kubejs:silicon_wafer')
    event.replaceOutput({}, 'create:polished_rose_quartz', 'kubejs:silicon_wafer')

    event.replaceInput({}, 'create:copper_sheet', 'tfc:metal/sheet/copper')
    event.replaceOutput({}, 'create:copper_sheet', 'tfc:metal/sheet/copper')

    event.replaceInput({}, 'create:brass_sheet', 'tfc:metal/sheet/brass')
    event.replaceOutput({}, 'create:brass_sheet', 'tfc:metal/sheet/brass')

    event.replaceInput({}, 'create:brass_ingot', 'tfc:metal/ingot/brass')
    event.replaceOutput({}, 'create:brass_ingot', 'tfc:metal/ingot/brass')

    event.replaceInput({}, 'create:zinc_ingot', 'tfc:metal/ingot/zinc')
    event.replaceOutput({}, 'create:zinc_ingot', 'tfc:metal/ingot/zinc')

    event.replaceInput({}, 'powergrid:zinc_sheet', 'tfc:metal/sheet/zinc')
    event.replaceOutput({}, 'powergrid:zinc_sheet', 'tfc:metal/sheet/zinc')

    event.replaceInput({}, 'petrochem:bronze_sheet', 'tfc:metal/sheet/bronze')
    event.replaceOutput({}, 'petrochem:bronze_sheet', 'tfc:metal/sheet/bronze')

    event.replaceInput({}, 'petrochem:steel_sheet', 'tfc:metal/sheet/steel')
    event.replaceOutput({}, 'petrochem:steel_sheet', 'tfc:metal/sheet/steel')

    event.replaceOutput({}, 'petrochem:steel_ingot', 'tfc:metal/ingot/steel')
    event.replaceOutput({}, 'petrochem:steel_ingot', 'tfc:metal/ingot/steel')


    event.replaceInput({}, 'create:iron_sheet', 'tfc:metal/sheet/wrought_iron')
    event.replaceOutput({}, 'create:iron_sheet', 'tfc:metal/sheet/wrought_iron')
    event.remove({id: "create:press"});
})
