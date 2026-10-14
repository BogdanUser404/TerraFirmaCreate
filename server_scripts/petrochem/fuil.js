//(C) 2026 Bogdan Yachmenev
//License: AGPL v3.0

ServerEvents.tags('fluid', event => {
    event.remove('c:kerosene', 'petrochem:kerosene');
    event.add('c:kerosene', 'petrochem:desulfurized_kerosene');
    
})