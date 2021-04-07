///<reference path="../../typings/browser.d.ts" />

class Rotation {
    private jMain: JQuery;
    private jNext: JQuery;
    private current: number;
    private images: string[];
    
    constructor(selector: string, images: string[]) {
        this.jMain = $(selector);
        this.images = images;
        this.current = Math.floor(Math.random() * this.images.length) - 1;
        Rotation.setImage(this.jMain, this.nextCssImage());
        this.setupNextDiv();
        this.preLoadNext();
    }

    private nextCssImage(): string {
        this.current = (this.current + 1) % this.images.length;
        return "url(" + this.images[this.current] + ")";
    }

    private static setImage(jDiv: JQuery, cssImageUrl: string) {
        jDiv.css("background-image", cssImageUrl);
    }

    private setupNextDiv() {
        // create image control
        var img = $("<div/>");
        img.css("background-size", "cover");
        img.css("width", "100%");
        img.css("height", this.jMain.height());
        /*background-position: center center; ?? */

        this.jNext = img;
        this.jMain.append(img);
    }

    private preLoadNext() {
        var nextImage = this.nextCssImage();
        this.jNext.css("display", "none"); // this sets up the display for the fade in.
        Rotation.setImage(this.jNext, nextImage);
    }

    static rotate(me: Rotation) {
        me.jNext.fadeIn(1000, function() {
            Rotation.setImage(me.jMain, me.jNext.css("background-image"));
            me.preLoadNext();
        })
    }

    RotateOnClick() {
        this.jMain.click(this, function(event) {
            Rotation.rotate(event.data);
        });
    }

    RotateOnInterval(durationMilliseconds: number) {
        setInterval(function() {
            Rotation.rotate(this);
        }.bind(this), durationMilliseconds);
    }
}