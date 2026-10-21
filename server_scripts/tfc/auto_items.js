//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    const metalConfigs = {
        'bronze':          { inNs: 'tfc',       outNs: 'tfc_items', outFormat: 'underscore' },
        'bismuth_bronze':  { inNs: 'tfc',       outNs: 'tfc_items', outFormat: 'underscore' },
        'black_bronze':    { inNs: 'tfc',       outNs: 'tfc_items', outFormat: 'underscore' },
        'cast_iron':       { inNs: 'tfc',       outNs: 'tfc_items', outFormat: 'underscore' },
        'steel':           { inNs: 'tfc',       outNs: 'tfc_items', outFormat: 'underscore' },
        'copper':          { inNs: 'tfc',       outNs: 'tfc_items', outFormat: 'underscore' },
        'wrought_iron':    { inNs: 'tfc',       outNs: 'tfc_items', outFormat: 'underscore' },
        'platinum':        { inNs: 'tfcm',      outNs: 'tfcm',      outFormat: 'path' },
        'titanium':        { inNs: 'tfcm',      outNs: 'tfcm',      outFormat: 'path' },
        'stainless_steel': { inNs: 'firmalife', outNs: 'tfc_items', outFormat: 'underscore' },
    };

    Object.entries(metalConfigs).forEach(([metal, cfg]) => {
        const isPath = cfg.outFormat === 'path';
        const inNs = cfg.inNs;
        const outNs = cfg.outNs;

        const ingot = `${inNs}:metal/ingot/${metal}`;
        const doubleIngot = `${inNs}:metal/double_ingot/${metal}`;
        const sheet = `${inNs}:metal/sheet/${metal}`;
        const doubleSheet = `${inNs}:metal/double_sheet/${metal}`;
        const rod = `${inNs}:metal/rod/${metal}`;

        const foil = isPath ? `${outNs}:metal/foil/${metal}` : `${outNs}:${metal}_foil`;
        const gear = isPath ? `${outNs}:metal/gear/${metal}` : `${outNs}:${metal}_gear`;
        const screw = isPath ? `${outNs}:metal/screw/${metal}` : `${outNs}:${metal}_screw`;
        const nail = isPath ? `${outNs}:metal/nail/${metal}` : `${outNs}:${metal}_nail`;
        const rivet = isPath ? `${outNs}:metal/rivet/${metal}` : `${outNs}:${metal}_rivet`;
        const heavySheet = isPath ? `${outNs}:metal/heavy_sheet/${metal}` : `${outNs}:${metal}_heavy_sheet`;
        const outWire = isPath ? `${outNs}:metal/wire/${metal}` : `${outNs}:${metal}_wire`;

        event.recipes.create.pressing(foil, sheet);
        event.recipes.createvintageneoforged.turning(gear, doubleSheet);
        event.recipes.createvintageneoforged.turning(Item.of(screw, 20), ingot);
        event.recipes.createvintageneoforged.turning(Item.of(nail, 20), ingot);
        event.recipes.createvintageneoforged.turning(Item.of(rivet, 20), ingot);
        event.recipes.createvintageneoforged.turning(Item.of(rod, 2), ingot);
        event.recipes.createvintageneoforged.turning(Item.of(outWire, 4), ingot);
        event.recipes.create.compacting(heavySheet, [Ingredient.of(sheet), Ingredient.of(doubleSheet)]).heated();

        event.recipes.create.pressing(sheet, doubleIngot);
        event.recipes.create.pressing(ingot, doubleIngot);

        event.recipes.create.compacting(
            doubleSheet,
            [Ingredient.of(sheet), Ingredient.of(sheet), Ingredient.of('tfc:powder/flux')]
        ).heated();

        event.recipes.create.compacting(
            doubleIngot,
            [Ingredient.of(ingot), Ingredient.of(ingot), Ingredient.of('tfc:powder/flux')]
        ).heated();
    });

    event.recipes.createvintageneoforged.turning('create:whisk', 'tfc:metal/ingot/wrought_iron');
    event.recipes.createvintageneoforged.turning('create:brass_hand', 'tfc:metal/sheet/brass');

});