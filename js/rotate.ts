// /<reference path="../../typings/browser.d.ts" />

class Rotation {
    private main: HTMLElement;
    private nextImage: HTMLElement;
    private current: number;
    private images: string[];
    
    constructor(id: string, images: string[]) {
        this.main = document.getElementById(id);
        this.images = images;
        this.current = Math.floor(Math.random() * this.images.length) - 1;
        Rotation.setImage(this.main, this.nextCssImage());
        this.appendNextDivToMain();
        this.preLoadNext();
    }

    private nextCssImage(): string {
        this.current = (this.current + 1) % this.images.length;
        return "url(" + this.images[this.current] + ")";
    }

    private static setImage(element: HTMLElement, cssImageUrl: string) {
        element.style.backgroundImage = cssImageUrl;
    }

    private appendNextDivToMain() : void {
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

    private preLoadNext() {
        var nextCssImage = this.nextCssImage();
        Rotation.setImage(this.nextImage, nextCssImage);
    }

    static rotate(me: Rotation) {
        Rotation.setImage(me.main, me.nextImage.style.backgroundImage);
        me.preLoadNext();
    }

    RotateOnClick() {
        this.main.onclick = () => {
            Rotation.rotate(this);
        };
        return this;
    }

    RotateOnInterval(durationMilliseconds: number) {
        setInterval(function() {
            Rotation.rotate(this);
        }.bind(this), durationMilliseconds);
    }
}