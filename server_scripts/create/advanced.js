//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    //Electron lamp
    event.remove({ output: 'create:electron_tube' });
    event.shaped('create:electron_tube', [
        'GW ',
        'SB ',
        '   ',
    ], {
        G: 'tfc:glue',
        W: 'tfc_items:copper_wire',
        S: 'tfc:metal/sheet/wrought_iron',
        B: 'tfc:silica_glass_bottle',
    });

    //Brass hand
    event.remove({ output: 'create:brass_hand' });
    event.recipes.tfc.anvil(
        'create:brass_hand',
        'tfc:metal/double_sheet/brass',
        [ 'draw_third_last', 'bend_second_last', 'upset_last' ]
    ).tier(2); //Bronze tier

    //Activator
    event.remove({ output: 'create:deployer' });
    event.shaped('create:deployer', [
        'WMW',
        'GCG',
        'RAR',
    ], {
        W: 'tfc_items:wrought_iron_wire',
        M: 'create:precision_mechanism',
        C: 'create:andesite_casing',
        G: 'tfc_items:wrought_iron_gear',
        A: 'create:brass_hand',
        R: 'tfc:metal/rod/wrought_iron',
    });

    //Presection Mechanism
    event.remove({ output: 'create:precision_mechanism' });
    event.shaped('create:precision_mechanism', [
        'NLN',
        'WPW',
        'LPL',
    ], {
        N: 'tfc_items:copper_nail',
        L: 'create:electron_tube',
        W: 'tfc_items:copper_wire',
        P: '#tfc:lumber',
    });
    //Bearing
    event.remove({ output: 'create:mechanical_bearing' });
    event.shaped('create:mechanical_bearing', [
        'GPG',
        'ESE',
        'SCS',
    ], {
        G: 'tfc:glue',
        P: '#tfc:lumber',
        S:'#c:screws/wrought_iron',
        C: 'create:andesite_casing',
        E:'#c:gears/wrought_iron',
    });
});
