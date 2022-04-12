
export const cleaners = {
   1: {
        id: 1,
        name: "Zach Lastname",
        about_me: ["All about me and my story, how I clean and all that. All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that.", "All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that."],
        num_of_cleanings: 11,
        avg_rating: 4.2,
        video_uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
  2:  {
        id: 2,
        name: "Amy Lastname",
        about_me: ["All about me and my story, how I clean and all that. All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that.", "All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that."],
        num_of_cleanings: 11,
            avg_rating: 4.4,
            video_uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
  3:  {
        id: 3,
        name: "Mohamed Lastname",
        about_me: ["All about me and my story, how I clean and all that. All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that.", "All about me and my story, how I clean and all that.  All about me and my story, how I clean and all that."],
        num_of_cleanings: 11,
        avg_rating: 4.7,
        video_uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'
    },
}

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
    1: {
        id: 1,
        name: "kate",
        address: "743 Evergreen Terrace",
        special_instructions: "Please separate recycles from garbage",
        upcoming_reservation: null,//id,
        past_reservations: []
    },
    2: {
        id: 2,
        name: "wendy",
        address: "743 Evergreen Terrace",
        special_instructions: "Please separate recycles from garbage",
        upcoming_reservation: null,//id,
        past_reservations: []
    },
    3: {
        id: 1,
        name: "kathleen",
        address: "743 Evergreen Terrace",
        special_instructions: "Please separate recycles from garbage",
        upcoming_reservation: null,//id,
        past_reservations: []
    }
}

// represents logged-in user on device
// "this_client" assumes the user is client and not housecleaner
export const this_client = {
    id: 1,
    name: "Kato Potato",
    address: "743 Evergreen Terrace",
    special_instructions: "Please separate recycles from garbage",
    upcoming_reservation: false,//id?,
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
        client: {
            name: clients[2].name,
            address: clients[2].address,
            special_instructions: clients[2].special_instructions
        }
    },
    {
        reservation_id: 2,
        date: new Date(2022, 4, 23),//date obj,
        status: 'confirmed',
        client: {
            name: clients[3].name,
            address: clients[3].address,
            special_instructions: clients[3].special_instructions

        }
    },
    {
        reservation_id: 3,
        date: new Date(2022, 4, 23),//date obj,
        status: 'completed',
        client: {
            name: clients[1].name,
            address: clients[1].address,
            special_instructions: clients[3].special_instructions

        }
    }
]

//     {
//         reservation_id: 4,
//         date: new Date(2022, 3, 22),//date obj,
//         status: 'completed',
//         client: 2, //client id (but for dev purposes, the client object)
//         //review (if completed)
//     },
//     {
//         reservation_id: 5,
//         date: new Date(2022, 3, 22),//date obj,
//         status: 'completed',
//         client: 1, //client id (but for dev purposes, the client object)
//         //review (if completed)
//     }

// ]

const add_reservations = (cleaner) => {
    cleaner.reservations = this_cleaner_reservations
    return cleaner
}

export const this_cleaner = add_reservations(cleaners[1])


appointments[1].map(timeslot => console.log(`${timeslot.time}: ${timeslot.is_available}`))