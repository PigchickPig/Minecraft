PlayerEvents.loggedIn(event => {
    let player = event.player

    //Birthdays
    let currentDate = new Date()
    let today =
        currentDate.getMonth() +
        1 + //[0,11] so +1
        '-' +
        currentDate.getDate() //[0,31]
    let birthdays = [
        ['aaronhowser1','12-2','Pack dev'],
        ['Saereth','11-23','Pack dev'],
        ['Tazz','6-21','Pack dev'],
        ['Everlipse','4-30','Structure builder'],
        ['Jak Hills','10-31','Artist'],
    ]

    birthdays.forEach((birthday) => {
        let person = birthday[0]
        let birthdate = birthday[1]
        let role = birthday[2]

        if (birthdate == today) {
            player.tell([
                Component.string('Happy birthday to '),
                Component.string('[' + person + ']').hover(Component.string(role)),
            ])
        }
    })
})