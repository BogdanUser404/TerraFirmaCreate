//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    //Lathe
    event.remove({ output: 'vintage:lathe' });
    event.recipes.create.mechanical_crafting(
        'vintage:lathe',
        [
            'MGGM',
            'CCCC',
            'B  S',
            'CCCC',
        ],
        {
            C: 'create:andesite_casing',
            B: 'create:mechanical_bearing',
            G: 'tfc_items:wrought_iron_gear',
            S: 'tfc:metal/saw_blade/wrought_iron',
            M: 'create:precision_mechanism'
        }
    )
    //Compressor
    event.remove({ output: 'vintage:vacuum_chamber' });
    event.recipes.create.mechanical_crafting(
        'vintage:vacuum_chamber',
        [
            'GCCG',
            'MPPM',
            'CUUC',
            'RSSR',
        ],
        {
            C: 'create:andesite_casing',
            G: 'tfc_items:steel_gear',
            M: 'create:precision_mechanism',
            S: 'tfc:metal/sheet/steel',
            R: 'rubberworks:rubber_sheet',
            P: 'petrochem:steel_fluid_pipe',
            U: 'petrochem:steel_pump'
        }
    )
    event.remove({ output: 'vintage:belt_grinder' });
    event.recipes.create.mechanical_crafting(
        'vintage:belt_grinder',
        [
            'BBBB',
            'SMMS',
            'GGGG',
            'CCCC',
        ],
        {
            C: 'create:andesite_casing',
            G: 'tfc_items:steel_gear',
            M: 'create:precision_mechanism',
            S: 'create:shaft',
            B: 'vintage:grinder_belt'
        }
    )

    event.remove({output: 'vintage:vibrating_table'});
    event.shaped(
        'vintage:vibrating_table',
        [
            'BBB',
            'GSG',
            'ECE'
        ],
        {
            B: '#kubejs:bronze_sheets',
            G: 'tfc_items:wrought_iron_gear',
            E: 'create:belt_connector',
            S: 'create:shaft',
            C: 'create:andesite_casing'

        }
    )
});
