//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.tags('item', event => {
    event.add('c:dusts/sulfur', 'tfc:powder/sulfur');
});

ServerEvents.tags('fluid', event => {
    event.add('kubejs:liquid_bronzes', [
        'tfc:metal/bronze',
        'tfc:metal/bismuth_bronze',
        'tfc:metal/black_bronze'
    ]);
});

ServerEvents.tags('item', event => {
    const bronzeTypes = ['bronze', 'bismuth_bronze', 'black_bronze'];
    const steelTypes = ['red_steel', 'blue_steel'];

    const tfcParts = ['rod', 'sheet', 'double_ingot', 'double_sheet', 'ingot',];
    const moreParts = ['heavy_sheet', 'foil', 'gear', 'stamen', 'screw', 'nail', 'rivet', 'ring', 'wire'];

    //TFC Tags
    tfcParts.forEach(part => {
        bronzeTypes.forEach(mat => {
            event.add(`kubejs:bronze_${part}s`, `tfc:metal/${part}/${mat}`);
        });
        steelTypes.forEach(mat => {
            event.add(`kubejs:colored_steel_${part}s`, `tfc:metal/${part}/${mat}`);
        });
    });

    //TFC More Items Tags
    moreParts.forEach(part => {
        bronzeTypes.forEach(mat => {
            event.add(`kubejs:bronze_${part}s`, `tfc_items:${mat}_${part}`);
        });
        steelTypes.forEach(mat => {
            event.add(`kubejs:colored_steel_${part}s`, `tfc_items:${mat}_${part}`);
        });
    });
});
