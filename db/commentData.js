db.Comments.deleteMany({});

const comments = [
    {
        post_id: "James Gunn Gives Update On Casting New Batman Actor For The DC Universe",
        comment: "Good Information",
        createdAt: "2023-05-15"
    },
    {
        post_id: "James Gunn Gives Update On Casting New Batman Actor For The DC Universe",
        comment: "Very much satisfied with the blog.",
        createdAt: "2023-05-16"
    },
    {
        post_id: "More than 24 dinosaurs of 'Jurassic World' movies roaring into Resch Center for 6 arena shows in October",
        comment: "Nice",
        createdAt: "2023-05-15"
    }
]

const result = db.Comments.insertMany(comments);