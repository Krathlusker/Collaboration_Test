document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const rating = document.querySelector('input[name="rating"]:checked');
    const name = document.querySelector('input[name="name"]').value
    const comment = document.getElementById('comment').value;
   
    if (rating && name && comment) {
        // Creating the review element
        const review = document.createElement('div');
        review.classList.add('review');

        // Creating the rating stars element
        const reviewRating = document.createElement('div');
        reviewRating.classList.add('review-rating');
        reviewRating.textContent = '★'.repeat(rating.value) + '☆'.repeat(5 - rating.value);

        // Creating the name element
        const reviewName = document.createElement('div');
        reviewName.classList.add('review-name');
        reviewName.textContent = name;


        // Creating the comment element
        const reviewComment = document.createElement('div');
        reviewComment.classList.add('review-comment');
        reviewComment.textContent = comment;

        // Append everything to the review element
        review.appendChild(reviewRating);
        review.appendChild(reviewName);
        review.appendChild(reviewComment);

        // Add the review to the reviews list
        document.getElementById('reviews').appendChild(review);

        // Reset the form
        document.getElementById('reviewForm').reset();
    } else {
        alert('Please select a rating and write a comment.');
    }
});    