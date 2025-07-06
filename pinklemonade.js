function rate(star) {
    const stars = document.querySelectorAll('.stars span');
    stars.forEach((s, index) => {
        s.classList.toggle('checked', index < star);
    });
}

function toggleInfo() {
    const info = document.getElementById('info');
    info.style.display = (info.style.display === 'block') ? 'none' : 'block';
}

function calculateTotal() {
    const qty = document.getElementById('qty').value;
    const price = 5; // Price per drink RM5
    const total = price * qty;
    document.getElementById('total').innerText = `Total Price: RM${total.toFixed(2)}`;
}

function order() {
    const qty = document.getElementById('qty').value;
    alert(`🛒 You have added ${qty} Pink Lemonade to your cart!`);
}

function submitReview() {
    const review = document.getElementById('review').value;
    if (review.trim() !== '') {
        const reviewBox = document.getElementById('show-review');
        reviewBox.style.display = 'block';
        reviewBox.innerText = `⭐ Review: "${review}"`;
        document.getElementById('review').value = '';
    } else {
        alert('Please write something before submitting!');
    }
}
