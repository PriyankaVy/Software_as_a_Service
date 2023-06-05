db.VlogPosts.deleteMany({});

db.VlogPosts.aggregate([{
    $lookup: {
        from: "Comments",
        localField: "_id",
        foreignField: "post_id",
        as: "comments"
    }
}
])

// Define sample data
const posts = [
    {
        author_id: "104928675914176513026",
        image_url:"https://www.specpage.com/wp-content/uploads/2020/05/shutterstock_1256009944-Specpage.jpg",
        title: "Software-as-a-Service",
        content: "CPSC 5240 01 Spring Quarter 23",
        post_id: 1,
        category: "Education",
        publication_date: "2023-04-11",
        post_url:"https://www.youtube.com/watch?v=20QUNgFIrK0",
        views: 100,
        likes: 20,
        dislikes: 0
    },
    {
        author_id: "104928675914176513026",
        image_url:"https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg",
        title: "We Ate EVERYTHING At DISNEYLAND! My Family Comes To Los Angeles!!!",
        content: "Watch my latest vlog",
        post_id: 2,
        category: "Entertainment",
        publication_date: "2023-06-01",
        post_url:"https://www.youtube.com/watch?v=pWhcceYpZv0",
        views: 5,
        likes: 2,
        dislikes: 1
    },
    {
        author_id: "100105303031333661985",
        image_url:"https://cdn.educba.com/academy/wp-content/uploads/2020/03/What-is-ExpressJS.jpg",
        title: "Express",
        content: "Backend Technology",
        post_id: 1,
        category: "Education",
        publication_date: "2023-04-11",
        post_url:"https://www.youtube.com/watch?v=0QRFOsrBtXw",
        views: 156,
        likes: 100,
        dislikes: 0
    },

    {
        author_id: "100105303031333661985",
        image_url:"https://image.cnbcfm.com/api/v1/image/107071342-1654498386354-gettyimages-1401126499-vcg111385892956.jpeg?v=1654498568",
        title: "MIND BLOWING FIRST IMPRESSION TO SHANGHAI, CHINA ",
        content: "This video is in English, Bangla, Telegu and Malayalam Subtitles.",
        post_id: 1,
        category: "Travel",
        publication_date: "2023-06-01",
        post_url:"https://www.youtube.com/watch?v=93XoHC8XPoM",
        views: 15,
        likes: 7,
        dislikes: 0
    },
];

// Insert sample data into users collection
const result = db.VlogPosts.insertMany(posts);
