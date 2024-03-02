This is basically what tiktok says:

* Go to the video in a non-mobile browser
* Click the Share button (right-facing arrow icon), and then click Embed
* From the popup window, copy and paste the code into the destination webpage

It did not work for me until I moved the script tag into the head of the html. Even then it produces a lot of security warnings in the console. I removed it from the head and left it in the body here in a not-working state. Boooooo.

Code:
```html
<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@effariwhy/video/7341837351078874411" data-video-id="7341837351078874411" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@effariwhy" href="https://www.tiktok.com/@effariwhy?refer=embed">@effariwhy</a> <p></p> <a target="_blank" title="♬ original sound - kristy" href="https://www.tiktok.com/music/original-sound-7341837456913812266?refer=embed">♬ original sound - kristy</a> </section> </blockquote><script async src="https://www.tiktok.com/embed.js"></script>
```

What it produces:
