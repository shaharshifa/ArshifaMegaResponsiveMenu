Arshifa Mega Responsive Menu
----

##### [A Multipurpose Responsive Menu](http://arshifa.com/plugins_product/mega-responsive-menu/)
Mobile first jQuery plugin that lets you create a beautiful multiple menus, with Responsive & Touch Friendly.

### Download Version
[v1.0](#)

Development
----

##### 1. Include Arshifa Mega Responsive Menu plugin files with jQuery library

```sh
<!-- Add arshifa menu stylesheet -->
<link rel="stylesheet" href="css/megaResponsiveMenu.css" />

<!-- jQuery 1.11.3+ -->
<script src="js/jquery-1.11.3.min.js"></script>

<!-- Include arshifa menu js plugin -->
<script src="js/megaResponsiveMenu.js"></script>
```

##### 2. Follow HTML code structure
```sh
<div class="arshmenu" id="demo1">
  <ul>
    <li><a href="#">...</a></li>
    <li><a href="#">...</a>
      <ul>
        <li><a href="#">...</a></li>
        <li><a href="#">...</a></li>
        <li><a href="#">...</a>
          <ul>
            <li><a href="#">...</a></li>
            <li><a href="#">...</a></li>
            <li><a href="#">...</a></li>
          </ul>
        </li>
        <li><a href="#">...</a></li>
      </ul>
    </li>
  </ul>
</div>
```

##### 3. Call the menu plugin
```sh
$(document).ready(function ($) {
    $('#demo1 > ul').ArshMegaResponsiveMenu({
        closeSpeed: 200, // set Opening Responsive Menus speed
        openSpeed: 800, // set closing Responsive Menus speed
        windowWidth: 1023, //set window width for Responsive Menus
        responsive: true, // true or false - if responsive not requited use 'responsive: false'
        menuLevel_Arrow: true, // true or false - for responsive dropdown menu Level arrow symbol
        menuArrow_sign: '-', // change symbol accordingy with you, Note:- do not working if 'menuLevel_Arrow: false'
        arrowClass: 'active_down_arrow', // change arrow class, Note: Please Change Class Names in CSS file
        full_width_menu: [ // if required Full width Mega menus
                           {menu_item: 3, column: 5}, // for example you want in 3 menu level 5 column layout - set '{menu_item: 3, column: 5}'
                           {menu_item: 4, column: 4}, // for example you want in 4 menu level 4 column layout - set '{menu_item: 4, column: 4}'
                           {menu_item: 5, column: 3} // for example you want in 5 menu level 3 column layout - set '{menu_item: 5, column: 3}'
                         ], // you can increase or decrease column layout size 2, 3, 4, 5, 6, 7, 8 and more...
        right_direction_menu: [{menu_item: 6}] // if required right direction dropdown menus, for example - set main menu item number '{menu_item: 6}'
    });
});
```

Customizing
----

| Options | Default | Type | Description |
| ------------- |:-------------:| -----:| -----:|
| closeSpeed | 200 | int | Set Opening Responsive Menus speed in milliseconds |
| openSpeed | 200 | int | Set closing Responsive Menus speed in milliseconds |
| windowWidth | 768 | int | Set window width for Responsive Menus |
| responsive | true | boolean | If responsive not requited use 'responsive: false' |
| menuLevel_Arrow | true | boolean | For responsive dropdown menu Level arrow symbol if responsive not requited use 'menuLevel_Arrow: false' |
| menuArrow_sign | '›' | string | change symbol accordingy with you, Note:- do not working if 'menuLevel_Arrow: false' |
| arrowClass | 'active_down_arrow' | string | change arrow class, Note: Please change class names in CSS file |
| full_width_menu | [] | array | if required Full width Mega menus, for example you want in 3 menu level 5 column layout - set '{menu_item: 3, column: 5}', for example you want in 4 menu level 4 column layout - set '{menu_item: 4, column: 4}', for example you want in 5 menu level 3 column layout - set '{menu_item: 5, column: 3}', you can increase or decrease column layout size 2, 3, 4, 5, 6, 7, 8 and more... |
| right_direction_menu | [] | array | if required right direction dropdown menus, for example - set main menu item number '{menu_item: 6}', requite more than one direction dropdown menus - set '{menu_item: 6}, {menu_item: 7}, {menu_item: 8}' |
| subMenuClass | 'submenu' | string | Desktop Direction Arrows, You can change 'submenu' class - Note: please change class names in CSS file |
| multiLevelClass | 'multimenu' | string | Desktop Direction Arrows, You can change 'multimenu' class - Note: please change class names in CSS file

Browsers Support
----

All Modern Browsers




License
----

The MIT License (MIT) 


Copyright
----

Copyright (c) 2016 Shahnawaz Khan [http://arshifa.com/](http://arshifa.com/)
