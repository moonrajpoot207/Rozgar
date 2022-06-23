const loadMore = document.getElementById("loadMore");

$(function () {
    x=8;
    $('.box').slice(0, 8).show();
    $(loadMore).on('click', function (e) {
        e.preventDefault();
        x = x+8;
        $('.box').slice(0, x).slideDown();
    });
});