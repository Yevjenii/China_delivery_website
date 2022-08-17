function createMap() {
    var coordinates = {lat: 50.451498, lng: 30.612200},
        markerImage = '../icons/marker.png',
        popupContent = '<h2 style="font-size: 16px;line-height: 20px;font-weight: 700;color: #ec644b;">г. Киев</h2>' +
        '<div style="font-size: 14px;font-weight: 300;color: #3a3a3a;">ул. Строителей, дом 37 офис 4-6 <br>700м от м. Дарница <br>Тел: +38 (050) 000 00 00</div>' +
        '<h3 style="font-size: 14px;font-weight: 300;text-decoration: underline; color: #ec644b;">info@glopt.ru;</h3>',
        zoom = 15,

        map = new google.maps.Map(document.getElementById('map'), {
            center: coordinates,
            zoom: zoom            
        });

        marker = new google.maps.Marker({
            position: coordinates,
            map: map,
            icon: markerImage
        });

        infowindow = new google.maps.InfoWindow({
            content: popupContent
        });


        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
}

document.addEventListener("DOMContentLoaded", function () {

    //cards


    function toggleClass(item) {
        document.querySelectorAll(item).forEach(function (val, i) {
            val.addEventListener('click', function (event) {
                event.preventDefault();
                document.querySelectorAll('.price-item__content')[i].classList.toggle('price-item__content_active');
                document.querySelectorAll('.price-item__descr')[i].classList.toggle('price-item__descr_active');
            });
        });
    }


    toggleClass('.price-item__link');
    toggleClass('.price-item__back');



    ///slider


    const slides = document.querySelectorAll('.feedback__item'),
        right = document.querySelector('.feedback__right'),
        left = document.querySelector('.feedback__left');

    function startSlider() {
        slides.forEach((item, i) => {
            item.style.order = i + 1;
        });
    }


    function slide() {

        left.addEventListener('click', () => {
            slides.forEach((item, i) => {
                if ((+item.style.order + 1) > 3) {
                    item.style.order = 1;
                } else {
                    +item.style.order++;
                }
                activeSlide(item);
            });
        });

        right.addEventListener('click', () => {
            slides.forEach((item, i) => {
                if (+item.style.order - 1 == 0) {
                    item.style.order = 3;
                } else {
                    +item.style.order--;
                }
                activeSlide(item);
            });
        });
    }

    function activeSlide(item) {
        if (+item.style.order == 2) {
            item.classList.add("feedback__item_active");
        } else {
            item.classList.remove("feedback__item_active");
        }
    }

    startSlider();
    slide();

    //map

    
});