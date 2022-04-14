
$(function() {
    $('.column').click(function() {
        $(this).toggleClass('selected');
        var lsid = 'test' + this.dataset.id;
        window.localStorage.setItem(lsid, $(this).hasClass('selected'));
    });

    $('.column').each(function() {
        var lsid = 'test' + this.dataset.id;
        if (localStorage.getItem(lsid) && localStorage.getItem(lsid) == "true") {
            $(this).addClass('selected');
        }
    })
});
