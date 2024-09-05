// newsLoad.js

$(document).ready(function () {
    // Function to dynamically load detailed content
    function loadDetailedContent(newsId) {
        // Replace this with your actual news data
        const newsData = [
            { id: 1, title: 'Ethiopian Christmass', content: 'Kingdom Ethiopia Celebrated ethiopian christmass recently. The holiday was celebrated with different events and some games that involving the local management and also chinese management wish.',imageUrl: '../css/img/Kingdom pics/Image_20240127113338-news pic holiday.jpg'},
            { id: 2, title: 'New Year', content: "Kingdom has celebrated the new Year 2024 with the chairman's message",imageUrl: 'path/to/image1.jpg' },
            { id: 3, title: '2023 Milestone', content: 'Detailed content for 2023 Milestone.',imageUrl: 'path/to/image1.jpg' },
            { id: 4, title: 'AON Awards', content: 'Detailed content for AON Awards.',imageUrl: 'path/to/image1.jpg' },
            { id: 5, title: 'Première Vision Paris', content: 'Detailed content for Première Vision Paris.',imageUrl: 'path/to/image1.jpg' },
            { id: 6, title: 'Patents', content: 'Kingdom Holdings Group Declared 12 Patents throughout the Year.',imageUrl: 'path/to/image1.jpg' }
            // Add more news items as needed
        ];

        const selectedNews = newsData.find(news => news.id === newsId);

        if (selectedNews) {
            // Update the detailed content on the page
            const detailedContent = `
                <div class="text-center">
                    <h2>${selectedNews.title}</h2>
                    <hr class="line-black">
                    <img src="${selectedNews.imageUrl}" alt="News Image" class="img-fluid" style="width:50%;height:auto;">
                    <hr class="line-black">
                    <p>${selectedNews.content}</p>
                </div>
            `;
            $('.booking-area').html(detailedContent);
        }
    }

    // Click event for "Read More" button
    $('.read-more-btn').on('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of the anchor tag
        const newsId = $(this).data('news-id');
        loadDetailedContent(newsId);
    });
});
