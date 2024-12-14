const comments = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
];

function countTotalComments(comments) {
    let total = 0;
    comments.forEach(comment => {
        total++;
        if (comment.replies) {
            total += countTotalComments(comment.replies);
        }
    });
    return total;
};

const totalComments = countTotalComments(comments);

console.log("5. Buatlah fungsi untuk menghitung total komentar yang ada, termasuk semua balasan komentar. \nBerdasarkan data di atas, total komentar adalah 7 komentar.")
console.log("Total komentar:", totalComments); 