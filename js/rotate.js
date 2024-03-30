// /<reference path="../../typings/browser.d.ts" />
class Rotation {
    constructor(id, images) {
        this.main = document.getElementById(id);
        this.images = images;
        this.current = Math.floor(Math.random() * this.images.length) - 1;
        Rotation.setImage(this.main, this.nextCssImage());
        this.appendNextDivToMain();
        this.preLoadNext();
    }
    nextCssImage() {
        this.current = (this.current + 1) % this.images.length;
        return "url(" + this.images[this.current] + ")";
    }
    static setImage(element, cssImageUrl) {
        element.style.backgroundImage = cssImageUrl;
    }
    appendNextDivToMain() {
        // create image control
        var img = document.createElement('div');
        img.id = "next";
        img.style.backgroundSize = "cover";
        img.style.width = "100%";
        // img.style.height = this.main.height;
        /*background-position: center center; ?? */
        // this.nextImage.style.display = "none"; // this sets up the display for the fade in.
        this.nextImage = img;
        this.main.append(img);
    }
    preLoadNext() {
        var nextCssImage = this.nextCssImage();
        Rotation.setImage(this.nextImage, nextCssImage);
    }
    static rotate(me) {
        Rotation.setImage(me.main, me.nextImage.style.backgroundImage);
        me.preLoadNext();
    }
    RotateOnClick() {
        this.main.onclick = () => {
            Rotation.rotate(this);
        };
        return this;
    }
    RotateOnInterval(durationMilliseconds) {
        setInterval(function () {
            Rotation.rotate(this);
        }.bind(this), durationMilliseconds);
    }
}
//# sourceMappingURL=rotate.js.map