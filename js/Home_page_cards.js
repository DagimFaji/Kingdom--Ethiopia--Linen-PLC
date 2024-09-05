$(document).ready(function () {
    // Function to dynamically load detailed content
    function loadDetailedContent(cardId) {
        // Replace this with your actual card data
        const cardData = [
            { id: 1, title: "Kingdom's Vision", content: "Kingdom's Inovation Leading The Future.", imageUrl: 'css/img/Kingdom pics/about-us-social-responsibility-section-2-2.jpg' },
            { id: 2, title: "Kingdom's Mission", content: "Fulfill the Physical and Spiritual Well-Being of Our Employees and Create Values to Our Consumers, Customers and Shareholders as well as Make Greater Contribution to the Society and Country.", imageUrl: '../css/img/Kingdom pics/colorful-1678168136004-3591.jpg' },
            { id: 3, title: "Kingdom's Core Values", content: "RESPONSIBILITY.\n SINCERITY. HARMONY. \n MUTUAL SUCCESS.", imageUrl: '../css/img/Kingdom pics/1698297844588.jfif' },
            // Add more card items as needed
        ];

        const selectedCard = cardData.find(card => card.id === cardId);

        if (selectedCard) {
            // Update the detailed content in the modal
            $('#modalTitle').text(selectedCard.title);
            $('#modalImage').attr('src', selectedCard.imageUrl);
            $('#modalContent').text(selectedCard.content);

            // Show the MDB modal
            $('#exampleModal').modal();
        }
    }

    // Click event for "Read More" button
    $('.read-more-btn').on('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        const cardId = $(this).data('card-id');
        loadDetailedContent(cardId);
    });
});
