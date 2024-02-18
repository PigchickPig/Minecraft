const batteries = [
    'cyclic:battery',
    'cyclic:battery_clay',
    'integrateddynamics:energy_battery'
]

ItemEvents.modification(event => {

    // Make batteries unstackable
    batteries.forEach(battery => {
        event.modify(battery, item => {
            item.maxStackSize = 1
        })
    })
});
