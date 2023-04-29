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
})