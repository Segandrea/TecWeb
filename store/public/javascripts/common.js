const toggleSearchBar = () => {
  document.getElementById('datePicker').classList.toggle('d-none');
  document.getElementById('searchBar').classList.toggle('d-none');
};

const setupDatePicker = () => {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

  const picker = new Litepicker({
    element: document.getElementById('rentalPeriod'),
    minDate: today,
    format: 'DD/MM/YYYY',
    singleMode: false,
  });

  picker.on('show', (_) => { document.onscroll = (_) => { picker.hide(); }; });
  picker.on('hide', (_) => { document.onscroll = null; });
  picker.setDateRange(today, tomorrow);

  return picker;
};

const rentalPeriod = setupDatePicker();
