$(document).ready(function () {
  let checkedAmenitiesId = [];
  let checkedAmenitiesName = [];

  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).data('id');
    const amenityName = $(this).data('name');

    if ($(this).prop('checked')) {
      checkedAmenitiesId.push(amenityId);
      checkedAmenitiesName.push(amenityName);
    } else {
      checkedAmenitiesId = checkedAmenitiesId.filter(function (element) {
        return element !== amenityId;
      });

      checkedAmenitiesName = checkedAmenitiesName.filter(function (element) {
        return element !== amenityName;
      });
    }

    const amenitiesList = checkedAmenitiesName.map(function (element) {
      return element;
    }).join(', ');

    $('#amenities-list').html('<span>' + amenitiesList + '</span>');
  });

  $.get('http://127.0.0.1:5001/api/v1/status', (data, status) => {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else { $('#api_status').removeClass('available'); }
  });
});
