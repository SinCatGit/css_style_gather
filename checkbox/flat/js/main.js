$(function() {
    var countChecked = function() {
        var n = $( "input:checked" ).length;
        console.log(n);
        $("input").parent('div').removeClass('radio-group-mobile-grass-current');
        $("input:checked").parent('div').addClass('radio-group-mobile-grass-current');
    };
    countChecked();

    $(".radio-group-mobile-grass input").on( "click", countChecked );
    var count_li_input_Checked = function() {
        var n = $( "input:checked" ).length;
        console.log(n);
        $("input").parent('li').removeClass('current');
        $("input:checked").parent('li').addClass('current');
    };
    count_li_input_Checked();

    $( ".profile_radio input" ).on( "click", count_li_input_Checked );
});
