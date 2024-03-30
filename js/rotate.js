///<reference path="../../typings/browser.d.ts" />
var Rotation = (function () {
    function Rotation(id, images) {
        this.jMain = document.getElementById(id);
        this.images = images;
        this.current = Math.floor(Math.random() * this.images.length) - 1;
        Rotation.setImage(this.jMain, this.nextCssImage());
        this.setupNextDiv();
        this.preLoadNext();
    }
    Rotation.prototype.nextCssImage = function () {
        this.current = (this.current + 1) % this.images.length;
        return "url(" + this.images[this.current] + ")";
    };
    Rotation.setImage = function (div, cssImageUrl) {
        div.style.backgroundImage = cssImageUrl;
    };
    Rotation.prototype.setupNextDiv = function () {
        // create image control
        var img = document.createElement('div');
        img.style.backgroundSize = "cover";
        img.style.width = '100%';
        img.style.height = this.jMain.height;
        /*background-position: center center; ?? */
        this.jNext = img;
        this.jMain.append(img);
    };
    Rotation.prototype.preLoadNext = function () {
        var nextImage = this.nextCssImage();
        this.jNext.style.display, "none"; // this sets up the display for the fade in.
        Rotation.setImage(this.jNext, nextImage);
    };
    Rotation.rotate = function (me) {
        me.jNext.fadeIn(1000, function () {
            Rotation.setImage(me.jMain, me.jNext.style.backgroundImage);
            me.preLoadNext();
        });
    };
    Rotation.prototype.RotateOnClick = function () {
        this.jMain.click(this, function (event) {
            Rotation.rotate(event.data);
        });
    };
    Rotation.prototype.RotateOnInterval = function (durationMilliseconds) {
        setInterval(function () {
            Rotation.rotate(this);
        }.bind(this), durationMilliseconds);
    };
    return Rotation;
}());
