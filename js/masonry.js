let MagicGrid;

document.addEventListener('DOMContentLoaded', function () {
    let cerebraMenu = new MagicGrid({
      container: '.container',
      animate: true,
      items: 16,
      gutter: 30,
      static: true,
      useMin: true
    });
    
    cerebraMenu.listen();
  });