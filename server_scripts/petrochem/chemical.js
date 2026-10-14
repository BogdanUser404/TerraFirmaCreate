//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.recipes(event => {
    
    //Salt water electrolysis
    event.remove({ id: 'petrochem:electrolyzing/chlor_alkali'});
    event.custom({
        "type": "petrochem:electrolyzing",
        "energy": 238,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "tfc:salt_water"
            }
        ],
        "results": [
            {
                "id": "petrochem:caustic_soda"
            },
            {
                "amount": 100,
                "id": "petrochem:chlorine"
            },
            {
                "amount": 100,
                "id": "petrochem:hydrogen"
            }
        ]
    }).id('kubejs:petrochem/electrolyzing/salt_water_to_caustic_soda_chlorine_hydrogen');

    event.custom({
        "type": "petrochem:electrolyzing",
        "energy": 238,
        "ingredients": [
            {
                "type": "neoforge:single",
                "amount": 1000,
                "fluid": "minecraft:water"
            }
        ],
        "results": [
            {
                "amount": 333,
                "id": "petrochem:oxygen"
            },
            {
                "amount": 666,
                "id": "petrochem:hydrogen"
            }
        ]
    }).id('kubejs:petrochem/electrolyzing/water_electrolises');
});
