
  window.addEventListener('block-loaded-bestellung', () => {
  function updatePlaceholder() {
  const dateTimePickerHolder = document.querySelector('#bestellung .date-time-picker-holder');
  const targetInput = dateTimePickerHolder.querySelector('input[placeholder="Set time"]');
  if (targetInput) {
  targetInput.placeholder = "Uhrzeit";
  }
  }
  setTimeout(() => {
  updatePlaceholder();
  }, 100)
  });
  
