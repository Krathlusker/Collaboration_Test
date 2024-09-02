const reviewsArray = [];

document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Defining all the parts of the review
    const rating = document.querySelector('input[name="rating"]:checked');
    const name = document.querySelector('input[name="name"]').value;
    const comment = document.getElementById('comment').value;
    const date = new Date();

    if (rating && name && comment) {
    
        reviewsArray.push({ name, rating: Number(rating.value), comment, date });

        displayReviews('date');

        countRatings();

        document.getElementById('reviewForm').reset();
    } else {
        alert('Please select a rating, enter your name, and write a comment.');
    }
});

function displayReviews(sortBy) {
    const reviewsContainer = document.getElementById('reviews');
    reviewsContainer.innerHTML = '';

    if (sortBy === 'score') {
        reviewsArray.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'date') {
        reviewsArray.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    reviewsArray.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        const reviewRating = document.createElement('div');
        reviewRating.classList.add('review-rating');
        reviewRating.textContent = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        const reviewName = document.createElement('div');
        reviewName.classList.add('review-name');
        reviewName.textContent = review.name;

        const reviewComment = document.createElement('div');
        reviewComment.classList.add('review-comment');
        reviewComment.textContent = review.comment;

        const reviewDate = document.createElement('div');
        reviewDate.classList.add('review-date');
        reviewDate.textContent = new Date(review.date).toLocaleString();

        reviewElement.appendChild(reviewRating);
        reviewElement.appendChild(reviewName);
        reviewElement.appendChild(reviewComment);
        reviewElement.appendChild(reviewDate);

        reviewsContainer.appendChild(reviewElement);
    });
}

function countRatings() {
    const ratingCounts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

    reviewsArray.forEach(review => {
        ratingCounts[review.rating]++;
    });

    document.getElementById('count-1star').textContent = `1 Star: ${ratingCounts[1]}`;
    document.getElementById('count-2star').textContent = `2 Stars: ${ratingCounts[2]}`;
    document.getElementById('count-3star').textContent = `3 Stars: ${ratingCounts[3]}`;
    document.getElementById('count-4star').textContent = `4 Stars: ${ratingCounts[4]}`;
    document.getElementById('count-5star').textContent = `5 Stars: ${ratingCounts[5]}`;
}

document.getElementById('sortByScore').addEventListener('click', function() {
    displayReviews('score');
});

document.getElementById('sortByDate').addEventListener('click', function() {
    displayReviews('date');
});