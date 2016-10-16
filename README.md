## Synopsis

Simple lightwight HTML/jQuery accordion content. Quickly create accordion content containers with a simple and lightweight jQuery function and basic html mark up.


## Markup

1) Create a container:
```html
<div class="simple-accordion">
	-- content will go here --
</div>
```

2) Create an accordion item:
```html
<div class="simple-accordion--item">
    <div class="simple-accordion--action">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut mauris faucibue</p>
    </div>
    <div class="simple-accordion--content">
        <p>Curabitur placerat velit a purus dictum tincidunt. Pellentesque ornare sollicitudin tristique. Fusce eu feugiat arcu. Pellentesque nisi risus, varius ut ipsum nec, interdum hendrerit quam. Aliquam aliquet ante eu porttitor eleifend. Proin efficitur libero nec ligula lobortis tempor elementum in dui. Donec et erat feugiat sapien dapibus facilisis eget non arcu. Aliquam nec pretium sem, nec molestie purus.</p>
    </div>
</div>
```

3) Add as many item containers as needed...


# JS

1) Include the Javascript funciton after your jQuery call

2) Enable the function in you projects JS:
```javascript
$('.simple-accordion').simple_accordion();
```


## Demo
See the basic functionality [here](http://russellramey.me/examples/simple-accordion).