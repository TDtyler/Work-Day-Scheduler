const localeSettings = {};
dayjs.locale(localeSettings);

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
    $('.saveBtn').on('click', function() {
        const key = $(this).parent().attr('id');
        const value = $(this).siblings('.description').val();
        localStorage.setItem(key, value);
    });
}

function reloadColor() {
    $('.time-block').each(function() {
        const hourBlock = parseInt(this.id);
        if (hourBlock == currentHour) {
            $(this).removeClass('past future').addClass('present');
        } else if (hourBlock < currentHour) {
            $(this).removeClass('future present').addClass('past');
        } else {
            $(this).removeClass('past present').addClass('future');
        }
    });
}

$('.time-block').each(function() {
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);
});

function clock() {
    const dateElement = $('#date');
      const timeElement = $('#time');
      const currentDate = dayjs().format('dddd, MMMM D, YYYY');
      const currentTime = dayjs().format('hh:mm:ss A');
      dateElement.text(currentDate);
      timeElement.text(currentTime);
}

hourColor();
textEntry();
reloadColor();

setInterval(clock, 1000);

});
