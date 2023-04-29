$(function () {
const currentHour = dayjs().format('H');

function hourColor() {
    $('.time-block').each(function() {
        const hourBlock = parseInt(this.id);
        $(this).toggleClass('past', hourBlock < currentHour);
        $(this).toggleClass('present', hourBlock === currentHour);
        $(this).toggleClass('future', hourBlock > currentHour);

    });
}

function textEntry() {
    $('saveBtn').on('click', function() {
        const key = $(this).parent().attr('id');
        const value = $(this).children('description').val();
        localStorage.setItem(key, value);
    });
}

function reloadColor() {
    $('.time-block').each(function() {
        const hourBlock = parseInt(this.id);
        if(hourBlock == currentHour) {
            $(this).removeClass('past, future').addClass('present');
        } else if (hourBlock < currentHour) {
            $(this).removeClass('future, present').addClass('past');
        } else {
            $(this).removeClass(past, present).addClass('future');
        }
    });
}
})