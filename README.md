> __THIS VIOLATES GOOGLE MAPS ToS AND IS A PROOF OF CONCEPT ONLY__

### CleanMaps

Google Maps are great, but since we've started using them as design features, they've been getting more and more cluttered. There’s a big "View on Google Maps" button that takes up [most of the map](http://i.imgur.com/ULltLdA.png) at smaller sizes, there’s a profile image if you're signed in, along with the satellite toggle and zoom buttons. 

__Before and After__

![Before and After](http://i.imgur.com/IzlOkfo.jpg)

__Usage__

CleanMaps automatically cleans up all the Google Maps ```<iframes>``` on a page. Simply include the CSS and JS and call ```CleanMaps.init()```. Width and height are determined from the width and height attributes of the iframe, so be sure to include them.

```
<link href="clean-maps.css" type="text/css" />
<script src="clean-maps.js"></script>

<iframe width="300" height="300" src="https://maps.google.com/..."></iframe>

<script>
    $(document).ready(function() {
        CleanMaps.init();
    });
</script>
```

You can also disable map interaction (panning, zooming, scrolling) by passing ```true``` to the init function. This adds a transparent ```<div>``` over the iframe.

```
CleanMaps.init(true);
```

__How does it work?__

CleanMaps wraps each ```<iframe>``` in two divs with a negative margin on top. This covers up the buttons, but keeps the map centered on the same location.

Requires jQuery.

__Don't want the Javascript?__

Just include the css file, add these wrappers around your ```<iframe>``` and set the appropriate heights (don't set the height in the iframe). If your iframe was initially 300px tall:

```
clean-maps-outer {
	height: 300px;
}

clean-maps-inner {
	height: 300px + offset;
	margin-top: -(offset / 2);
}
```

```
<div class="clean-maps-outer" style="height: 300px">
    <div class="clean-maps-inner" style="height: (300 + offset); margin-top: -(offset / 2);">
        <iframe src="https://maps.google.com/..."></iframe>
    </div>
</div>
```

Calculate ```offset``` with this function:

```
function calculateOffset(height) {
    var offset = 150;

    if (height < 200) {
        offset = 145;
    } else if (height < 400) {
        offset = 110;
    }
    
    return offset;
}

calculateOffset(300);
```

To disable map interaction, add a second div with the ```clean-maps-cover``` class:

```
<div class="clean-maps-outer">
	<div class="clean-maps-cover"></div>
    <div class="clean-maps-inner">
        <iframe src="https://maps.google.com/..."></iframe>
    </div>
</div>
```
