//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {

    //Sail
    event.remove({ output: 'create:white_sail' });
    event.shaped('4x create:white_sail', [
        'STS',
        'TCT',
        'STS',
    ], {
        S: '#c:screws',
        T: '#tfc:firepit_sticks',
        C: '#tfc:sewing_dark_cloth',
    });
    event.shaped('8x create:white_sail', [
        'STS',
        'TCT',
        'STS',
    ], {
        S: '#c:screws',
        T: '#tfc:firepit_sticks',
        C: '#tfc:high_quality_cloth',
    });

    //Waterwheel
    event.remove({ output: 'create:water_wheel' });
    event.shaped('create:water_wheel', [
        'SPS',
        'PHP',
        'SPS',
    ], {
        S: '#c:screws',
        H: "create:shaft",
        P: '#tfc:lumber',
    });

    //Big whaterwheel
    event.remove({ output: 'create:steam_engine' });
    event.shaped('create:steam_engine', [
        'GRG',
        'SRS',
        'SBS',
    ], {
        S: 'tfc_items:copper_heavy_sheet',
        B: 'rubberworks:rubber_sheet',
        G: '#c:gears/wrought_iron',
        R: 'tfc:metal/rod/wrought_iron',
    });
    //Windmall bearing
    event.remove({ output: 'create:windmill_bearing' });
    event.shaped('create:windmill_bearing', [
        'GGG',
        'PPP',
        'SBS',
    ], {
        G: 'tfc:glue',
        P: '#tfc:lumber',
        S:'#c:screws/wrought_iron',
        B: 'create:mechanical_bearing',
    });
});
