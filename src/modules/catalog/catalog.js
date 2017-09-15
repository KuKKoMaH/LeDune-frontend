const $btn = $('.' + catalog_show);
$btn.on('click', () => {
  if(!window.CATALOG_ENDPOINT) return;
  $.get(window.CATALOG_ENDPOINT, {offset: window.CATALOG_OFFSET}, (data) => {
    $('.' + catalog_items).append(data.data);
    $btn.hide();
  });
});