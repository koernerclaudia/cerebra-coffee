document.addEventListener('DOMContentLoaded', function () {
    let cerebraMenu = new MagicGrid({
        container: '.container',
        animate: true,
        items: 16,
        gutter: 30,
        maxColumns: 3,
        useTransform: true,
        static: true,
        useMin: true
    });
    
    cerebraMenu.listen();


});
