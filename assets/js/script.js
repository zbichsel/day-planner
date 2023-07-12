$(function () {

$('.saveBtn').on('click', function () {
  var key = $(this).parent().attr('id').split('-')[1];
  var value = $(this).parent().find('.description').val();
  localStorage.setItem(key, value);
});

  var today = dayjs();
  var currentTime = dayjs().format('HH');
  $('.time-block').each(function () {
    var timeBlkId = $(this).attr('id').split('-')[1];
    
    var savedStores = localStorage.getItem(timeBlkId);
    var displayStores = $(this).find('.description');
    displayStores.val(savedStores);

    if (timeBlkId < currentTime) {
      $(this).find('.description').addClass('past');
    } else if (timeBlkId === currentTime) {
      $(this).find('.description').addClass('present');
    } else {
      $(this).find('.description').addClass('future');
    }
  });

  $('#currentDay').text(today.format('MMM D, YYYY'));
});
