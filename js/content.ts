///<reference path="../../McBlocks/McBlocks/McBlocks.ts" />
///<reference path="rotate.ts" />

var content: IMcBlock[] = [
    { id: "resume", header: "Resume", image: "/images/polo.jpg", href: "http://files.mckaysalisbury.com/resume.pdf", alt: "McKay" },
    // { id: "stackOverflow", header: "Stack Overflow", image: "/images/so-icon.png", href: "http://stackoverflow.com/users/8384/", alt: "Stack Overflow Logo" },
    // { id: "stackOverflow", header: "Stack Overflow", image: "http://stackoverflow.com/users/flair/8384.png", href: "http://stackoverflow.com/users/8384/", alt: "Stack Overflow Flair" },
    { id: "stackOverflow", header: "Stack Overflow", image: "http://stackexchange.com/users/flair/5267.png", href: "http://stackoverflow.com/users/8384/", alt: "Stack Exchange Flair" },
    { id: "stackOverflowCareers", header: "Stack Overflow Careers CV", image: "/images/so-careers.png", href: "http://careers.stackoverflow.com/mckaysalisbury", alt: "Stack Overflow Careers logo" },
    { id: "linkedIn", header: "LinkedIn", image: "https://static.licdn.com/scds/common/u/img/webpromo/btn_viewmy_160x33.png", href: "https://www.linkedin.com/in/mckaysalisbury", alt: "LinkedIn button" },
    { id: "facebook", header: "facebook", href: "https://facebook.com/mckaysalisbury", image: "https://badge.facebook.com/badge/17825358.4917.490922280.png", alt: "facebook badge" },
    { id: "wikipedia", header: "Wikipedia", image: "https://en.wikipedia.org/static/images/project-logos/enwiki.png", href: "https://en.wikipedia.org/wiki/User:mckaysalisbury", alt: "Wikipedia logo" },
    //,{ id: "blog", header: "Blog", image: "", href: "http://blog.mckaysalisbury.com/" }
];
McBlocks.Add("#blocksArea", content);

var headerImages: string[] = [
    "../images/airForceUp.jpg",
    "../images/circuit.jpg",
    "../images/airForceTexture.jpg",
    "../images/jefferson.jpg",
    "../images/airForceDown.jpg",
    "../images/lincoln.jpg",
    "../images/blizzfetti.jpg"
];
$(document).ready(function() {
    new Rotation("#header", headerImages)
        .RotateOnClick();
        //.RotateOnInterval(5000);
});


