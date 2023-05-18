db.BlogPosts.deleteMany({});

// Define sample data
const posts = [
    {
        author_id: 1,
        title: "Software-as-a-Service",
        content: "CPSC 5240 01 Spring Quarter 23",
        post_id: 1,
        category: "Education",
        publication_date: "2023-04-11",
        featured: true,
        views: 100,
        likes: 20,
        dislikes: 0
    },
    {
        author_id: 1,
        title: "Evil Dead - The Rise",
        content: "Horror",
        post_id: 2,
        category: "Entertainment",
        publication_date: "2023-05-14",
        featured: false,
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: 2,
        title: "Express",
        content: "Backend Technology",
        post_id: 3,
        category: "Technology",
        publication_date: "2023-04-11",
        featured: false,
        views: 156,
        likes: 100,
        dislikes: 0
    },
];

// Insert sample data into users collection
const result = db.BlogPosts.insertMany(posts);
