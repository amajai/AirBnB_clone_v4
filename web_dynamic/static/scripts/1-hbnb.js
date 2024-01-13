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
});
