
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
            is_available: false
        }, {
            time: '4:00PM',
            is_available: true
        }
    ]
}

export const clients = {
// keys are user ids
    1: [
        {
            id: 1,
            name: "kate",
            address: "743 Evergreen Terrace",
            special_instructions: "Please separate recycles from garbage",
            upcoming_reservation: null,//id,
            past_reservations: []
        },  {
            id: 2,
            name: "wendy",
            address: "743 Evergreen Terrace",
            special_instructions: "Please separate recycles from garbage",
            upcoming_reservation: null,//id,
            past_reservations: []
        },  {
            id: 1,
            name: "kathleen",
            address: "743 Evergreen Terrace",
            special_instructions: "Please separate recycles from garbage",
            upcoming_reservation: null,//id,
            past_reservations: []
        }
    ]
}

// represents logged-in user on device
// "this_user" assumes the user is client and not housecleaner
export const this_user = {
    id: 1,
    name: "Kato Potato",
    address: "743 Evergreen Terrace",
    special_instructions: "Please separate recycles from garbage",
    upcoming_reservation: true,//id?,
    past_reservations: []
}


appointments[1].map(timeslot => console.log(`${timeslot.time}: ${timeslot.is_available}`))