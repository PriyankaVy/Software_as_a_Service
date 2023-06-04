db.Users.deleteMany({});

db.Users.aggregate([{
    $lookup: {
        from: "BlogPosts",
        localField: "username",
        foreignField: "author_id",
        as: "blogPosts"
    }
}
])

db.Users.aggregate([{
    $lookup: {
        from: "VlogPosts",
        localField: "username",
        foreignField: "author_id",
        as: "vlogPosts"
    }
}
])

// Define sample data
const users = [
    {
        user_id: 1,
        username: "Pvy",
        fullname: "Priyanka",
        description: "MS CS Student..",
        email: "pvy@gmail.com",
        password: "priya123"
    },
    {
        user_id: 2,
        username: "Psm",
        fullname: "Priya",
        description: "MS CS Student..",
        email: "psm@gmail.com",
        password: "priya0306"
    },
    {
        user_id: 3,
        username: "Heni",
        fullname: "Henish",
        description: "MS CS Student..",
        email: "heni@gmail.com",
        password: "henish123"
    },
    {
        user_id: 4,
        username: "Khan",
        fullname: "Mujadid",
        description: "MS CS Student..",
        email: "khan@gmail.com",
        password: "khan012"
    },
    {
        user_id: 5,
        username: "Maran",
        fullname: "Ilamaran",
        description: "MS CS Student..",
        email: "ila@gmail.com",
        password: "ila123"
    }
];

// Insert sample data into users collection
const result = db.Users.insertMany(users);
