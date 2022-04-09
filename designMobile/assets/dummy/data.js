
export const cleaners = [
    {
        id: 1,
        name: "zach",
        about_me: "I'm a housecleaner"
    },
    {
        id: 1,
        name: "amy",
        about_me: "I'm a housecleaner"
    },
    {
        id: 1,
        name: "mohamed",
        about_me: "I'm a housecleaner"
    },
]
export const appointments = {
    // keys are user ids
    1: [
        {
            time: '10:00AM',
            is_available: true
        }, {
            time: '12:00PM',
            is_available: false
        }, {
            time: '2:00PM',
            is_available: true
        }, {
            time: '4:00PM',
            is_available: true
        }
    ]
}

// appointments[1].forEach(timeslot => console.log(`${timeslot.time}: ${timeslot.is_available}`))

appointments[1].map(timeslot => console.log(`${timeslot.time}: ${timeslot.is_available}`))