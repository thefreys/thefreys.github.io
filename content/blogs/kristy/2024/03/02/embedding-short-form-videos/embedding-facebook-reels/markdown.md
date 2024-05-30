To embed a **Facebook Reel** 

1. While on the Reel, find the sharing feature and choose Copy Link
2. Visit the [Facebook Embedded Video Player Configurator](https://developers.facebook.com/docs/plugins/embedded-video-player/) and get the embed code

```html
<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0&appId=2591188577686814" nonce="7F9yY1So"></script>

<div class="fb-video" data-href="https://www.facebook.com/reel/256478830845757" data-width="300" data-show-text="true"></div>
```

What it produces:<div id="fb-root"></div>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0&appId=2591188577686814" nonce="7F9yY1So"></script>

<div class="fb-video" data-href="https://www.facebook.com/reel/256478830845757" data-width="300" data-show-text="true"></div>