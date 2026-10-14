//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    //Shaft
    event.remove({ output: 'create:shaft' });
    event.shapeless('2x create:shaft', [
        '#kubejs:bronze_ingots',
        '#c:tools/saw'
    ])
    .damageIngredient(1)
    .keepIngredient('#c:tools/saw');

    //Belt
    event.remove({ output: 'create:belt_connector' });
    event.shaped('12x create:belt_connector', [
        'RRR',
        'RRR',
        '   ',
    ], {
        R: 'rubberworks:rubber_sheet'
    });
    //Alt Belt
    event.shaped('2x create:belt_connector', [
        'LLL',
        'LLL',
        '   ',
    ], {
        L: '#c:leathers'
    });

    //Cogwheel
    event.remove({ output: 'create:cogwheel' });
    event.shaped('create:cogwheel', [
        'GPG',
        'PSP',
        'GPG',
    ], {
        G: 'tfc:glue',
        P: '#tfc:lumber',
        S: 'create:shaft'
    });

    //Big Cogwheel
    event.remove({ output: 'create:large_cogwheel' });
    event.shaped('create:large_cogwheel', [
        'GPG',
        'PCP',
        'GPG',
    ], {
        G: 'tfc:glue',
        P: '#tfc:lumber',
        C: 'create:cogwheel'
    });

    //Spout
    event.remove({ output: 'create:spout' });
    event.shaped('create:spout', [
        'PCP',
        ' R ',
        '   ',
    ], {
        C: 'create:copper_casing',
        R: 'rubberworks:rubber_sheet',
        P: 'create:fluid_pipe',
    });

    //Press
    event.remove({ output: 'create:mechanical_press' });
    event.shaped('create:mechanical_press', [
        'GHG',
        'SCS',
        'NSN',
    ], {
        C: 'create:andesite_casing',
        S: '#kubejs:bronze_heavy_sheets',
        N: '#kubejs:bronze_screws',
        G: '#kubejs:bronze_gears',
        H: 'create:shaft',
    });

    //Mixer
    event.remove({ output: 'create:mechanical_mixer' });
    event.shaped('create:mechanical_mixer', [
        'GSG',
        'NCN',
        ' W ',
    ], {
        C: 'create:andesite_casing',
        N: '#kubejs:bronze_screws',
        G: '#kubejs:bronze_gears',
        S: 'create:shaft',
        W: 'create:whisk',
    });

    //Basim
    event.remove({ output: 'create:basin' });
    event.shaped('create:basin', [
        '   ',
        'S S',
        'NSN',
    ], {
        N: '#c:screws',
        S: 'tfc:metal/sheet/copper'
    });

    //Mechanic Hammer
    event.remove({ output: 'createvintageneoforged:helve_hammer' });
    event.shaped('createvintageneoforged:helve_hammer', [
        ' NG',
        'DLC',
        ' NG',
    ], {
        N: '#c:screws',
        L: '#minecraft:logs',
        D: '#kubejs:bronze_double_ingots',
        C: 'create:andesite_casing',
        G: '#kubejs:bronze_gears',
    });
});
