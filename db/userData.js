db.Users.deleteMany({});

db.Users.aggregate([{
    $lookup: {
        from: "BlogPosts",
        localField: "user_id",
        foreignField: "author_id",
        as: "blogPosts"
    }
}
])

db.Users.aggregate([{
    $lookup: {
        from: "VlogPosts",
        localField: "user_id",
        foreignField: "author_id",
        as: "vlogPosts"
    }
}
])

// Define sample data
const users = [
    {
        user_id: "100105303031333661985",
        displayName: "Priyanka Vysyaraju"
    },
    {
        user_id: "104928675914176513026",
        displayName: "Vysyaraju Priyanka"
    }
    
];

// Insert sample data into users collection
const result = db.Users.insertMany(users);
