
export const cleaners = [
    {
        id: 1,
        name: "Zach",
        about_me: "I'm a housecleaner"
    },
    {
        id: 1,
        name: "Amy",
        about_me: "I'm a housecleaner"
    },
    {
        id: 1,
        name: "Mohamed",
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
// "this_client" assumes the user is client and not housecleaner
export const this_client = {
    id: 1,
    name: "Kato Potato",
    address: "743 Evergreen Terrace",
    special_instructions: "Please separate recycles from garbage",
    upcoming_reservation: true,//id?,
    past_reservations: []
}


// {
//     id: 1,
//     name: "Mohamed",
//     about_me: "I'm a housecleaner"
// }

export const this_cleaner_reservations = [
    //sorted by pending/confirmed then date (recent first)
    {
        reservation_id: 1,
        date: new Date(2022, 4, 28),//date obj,
        status: 'pending',
        client: 2, //client id (but for dev purposes, the client object)
        //review (if completed)
    },
    {
        reservation_id: 2,
        date: new Date(2022, 4, 23),//date obj,
        status: 'confirmed',
        client: 1, //client id (but for dev purposes, the client object)
        //review (if completed)
    },
    {
        reservation_id: 2,
        date: new Date(2022, 4, 23),//date obj,
        status: 'confirmed',
        client: 1, //client id (but for dev purposes, the client object)
        //review (if completed)
    },
    {
        reservation_id: 2,
        date: new Date(2022, 4, 23),//date obj,
        status: 'confirmed',
        client: 1, //client id (but for dev purposes, the client object)
        //review (if completed)
    },
    {
        reservation_id: 3,
        date: new Date(2022, 3, 24),//date obj,
        status: 'completed',
        client: 3, //client id (but for dev purposes, the client object)
        //review (if completed)
    },
    {
        reservation_id: 4,
        date: new Date(2022, 3, 22),//date obj,
        status: 'completed',
        client: 2, //client id (but for dev purposes, the client object)
        //review (if completed)
    },
    {
        reservation_id: 5,
        date: new Date(2022, 3, 22),//date obj,
        status: 'completed',
        client: 1, //client id (but for dev purposes, the client object)
        //review (if completed)
    }

]

const add_reservations = (cleaner) => {
    cleaner.reservations = this_cleaner_reservations
    return cleaner
}

export const this_cleaner = add_reservations(cleaners[0])


appointments[1].map(timeslot => console.log(`${timeslot.time}: ${timeslot.is_available}`))