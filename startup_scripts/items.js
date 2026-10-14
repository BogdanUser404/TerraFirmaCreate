StartupEvents.registry('item', event => {
    event.create('plastic_ignot')
        .displayName('Plastic Ignot')
        .maxStackSize(64);

    event.create('plastic_sheet')
        .displayName('Plastic Sheet')
        .maxStackSize(64);
})