const viewAll = document.getElementById('viewAll');
const element = document.getElementsByTagName('tr');


$(function () {
    x = 5;
    $(element).slice(0, 5).addClass('active');
    $(viewAll).on('click', function (e) {
        e.preventDefault();
        $(element).addClass('active');
    });
});