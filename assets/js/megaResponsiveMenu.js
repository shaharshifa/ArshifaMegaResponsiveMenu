/*
 *  CSS Arshifa Mega Responsive Menu v1.0
 *
 *  Copyright (c) 2016
 *
 *  Released under - The MIT License (MIT)
 *
 *  Author - Shahnawaz Khan
 *
 *  URL - http://arshifa.com
 *
 */
 
/* JS Lint helpers: 
 *
/* Default Settings closeSpeed: 200, openSpeed: 200, windowWidth: 768 
 * // You can Increse or Descrease Speeds and Responsive menu Window width Size 
 *
/* Default Classes subMenuClass: 'submenu', multiLevelClass: 'multimenu' // for Direction Arrows
 * // You can Change Submenu Class or MultiLevel Class - Note: Please Change Class Names in CSS File
 * 
 * Default Responsive Arrow Button Class arrowClass: 'active_down_arrow'
 * // You can Change Responsive Arrow Button Class - Note: Please Change Class Names in CSS File
 *
 * Default options responsive: true and menuLevel_Arrow: true
 * // You can change Option if Not Requited Responsive menus or Menu Level Arrows = False
 *
 * Default options menuArrow_sign: '&#x203A;', // add Arrow for mobile MultiLevel
 * // change symbol accordingy with you, Note:- do not working if 'menuLevel_Arrow: False'
 *
 * if required Full width Mega menus
 * // for example you want in 3 menu level 5 column layout - set '{menu_item: 3, column: 5}' 
 * // for example you want in 4 menu level 4 column layout - set '{menu_item: 4, column: 4}'
 * // for example you want in 5 menu level 3 column layout - set '{menu_item: 5, column: 3}'
 * // you can increase or decrease column layout size 2, 3, 4, 5, 6, 7, 8 and more...
 *
 * if required right direction dropdown menus, for example - set main menu item number '{menu_item: 6}'
 * // requite more than one  direction dropdown menus - set '{menu_item: 6}, {menu_item: 7}, {menu_item: 8}'
 *
*/

(function ( $ ) {
	"use strict";
	
	$.fn.ArshMegaResponsiveMenu = function(options) {
		
		// Default Plugin Options
		var settings = $.extend({
			closeSpeed: 200,
			openSpeed:200,
			windowWidth: 768,
			subMenuClass: 'submenu',
			multiLevelClass: 'multimenu',
			responsive: true,
			menuLevel_Arrow: true, // add Arrow for mobile MultiLevel
			menuArrow_sign: '&#x203A;', // add Arrow for mobile MultiLevel
			arrowClass: 'active_down_arrow',
			full_width_menu: [],
			right_direction_menu: []
		}, options );
		
		
		// create variables
		var $this = $(this),
		Ulist = 'ul',
		LiList = 'li',
		Dir = '>',
		HasUl = ':has(ul)',
		blnk = ' ',
		Spn = 'span',
		FullMenu = 'fullWidth',
		DirRightClass = 'right_dir',
		responsiveClass = 'responsive-menus',
		listItem = Dir + blnk + LiList,
		SubmenuList = 'megasubmenu',
		thisId = $(this).selector,
		mediaWidth = settings.windowWidth + 1,
		right_dir = settings.right_direction_menu,
		fullWidth = settings.full_width_menu;
		
		
		$this.find(Dir + blnk + LiList + HasUl).addClass(settings.subMenuClass); // Add Submenu Class
		$this.find(Dir + blnk + LiList + blnk + Ulist + blnk + LiList + HasUl).addClass(settings.multiLevelClass); // Add Inner Menus Class
		$this.find(LiList + HasUl).append('<span class="' + settings.arrowClass + '" />'); // Append Mobile Click/Touch Arrows
		
		
		// Create Function for Responsive Menus
		var window_Width = function (ArshMegaResponsiveMenu) {
			
			if ($(window).width() <= settings.windowWidth && settings.responsive == true) {
				
				$this.parent().addClass(responsiveClass);
				$(LiList + blnk + Spn).on('click', function (e) {
					e.stopImmediatePropagation();
					$(this).parent().siblings().find(Ulist).slideUp(settings.closeSpeed);
					$(this).prev().slideToggle(settings.openSpeed);
					$(this).parent().siblings().find(Spn).removeClass('active');
					$(this).toggleClass('active');
				});
				return $this;
			} else {
				$this.parent().removeClass(responsiveClass);
			}
			
		}; window_Width(); $(window).resize(window_Width);
		
		
		// Create Function for Right Direction Menus Start
		var right_dir_menu = function (ArshMegaResponsiveMenu) {
			
			if ($(window).width() > settings.windowWidth) {
				
				$.each(right_dir, function (index) {
					var m_item = right_dir[index].menu_item - 1;
					$this.find(Dir + blnk + LiList + ':eq( ' + m_item + ' )').addClass(DirRightClass);
				});
			} else {
				$this.find(Dir + blnk + LiList).removeClass(DirRightClass);
			}
			
		}; right_dir_menu(); $(window).resize(right_dir_menu);
		
		
		// Create Function for Full Width Menus Start
		var full_megamenu = function () {
			
			if ($(window).width() > settings.windowWidth) {
				$.each(fullWidth, function (index) {
					var menus_item = fullWidth[index].menu_item - 1;					
					$this.find(Dir + blnk + LiList + ':eq( ' + menus_item + ' )').addClass(FullMenu);
					$this.find(Dir + blnk + LiList + ':eq( ' + menus_item + ' ).' + FullMenu).find(Dir + blnk + Ulist).wrapAll('<div class="fullWidth_container" />');
					
				});
			} else {
				$this.find(Dir + blnk + LiList).removeClass(FullMenu);
				$this.find(Dir + blnk + LiList + blnk + '.fullWidth_container' + Dir + blnk + Ulist).unwrap();
			}
			
			
			var	fullWidthCntenr = $this.find(Dir + blnk + LiList + '.' + FullMenu + blnk + Dir + blnk + 'div.fullWidth_container' + Dir + blnk + Ulist);
				
			if ($(window).width() > settings.windowWidth) {
				                  
				if(!$this.find(LiList + '.' + FullMenu + blnk + Dir + blnk + 'div.fullWidth_container' + blnk + Dir + blnk + Ulist + blnk + Dir + blnk + LiList + '.fullWidth_section').length) {
					
					$.each(fullWidthCntenr, function(index) {
						
						var num_cols = fullWidth[index].column,
						widthTotal = 100 / num_cols,
						items_per_col = new Array(),
						items = $(this).find(listItem),
						min_items_per_col = Math.floor(items.length / num_cols),
						compare = items.length - (min_items_per_col * num_cols);
						
						for (var n = 0; n < num_cols; n++) {
							if (n < compare) {
								items_per_col[n] = min_items_per_col + 1;
							} else {
								items_per_col[n] = min_items_per_col;
							}
						}
						
						for (var n = 0; n < num_cols; n++) {
							$(this).append($('<ul />').addClass(SubmenuList));
							
							for (var m = 0; m < items_per_col[n]; m++) {
								var p = 0;
								for (var o = 0; o < n; o++) {
									p += items_per_col[o];
								}
								$(this).find('.' + SubmenuList).last().append(items[m + p]);
							}
							
						}
						
						if ($(window).width() > settings.windowWidth) {
							$(this).find(Ulist + '.' + SubmenuList).wrap('<li class="fullWidth_section" style="width: ' + widthTotal + '%; display: inline-block; vertical-align: top;" />');
						}
						
					});
				
				}
				
			}  else {
				$this.find(Dir + blnk + LiList + blnk + Dir + Ulist + blnk + Dir + LiList + '.fullWidth_section' + blnk + Dir + Ulist + '.' + SubmenuList).unwrap();				            
				$this.find(Dir + blnk + LiList + blnk + Dir + blnk + Ulist + blnk + Dir + blnk + Ulist + '.' + SubmenuList + blnk + Dir + blnk + LiList).unwrap();
			}
				
				
			if ($(window).width() <= settings.windowWidth && settings.menuLevel_Arrow == true) {
	
				if(!$this.find(LiList + blnk + Dir + blnk + 'a span.level_arrows').length) {
					
					$this.find(LiList).each(function() {
						$(this).find(Dir + blnk + 'a').prepend('<span class="level_arrows" />');
						var newDepth = $(this).parents(Ulist).length;
						for(var i=1;i<newDepth; i++){
							$(this).find(Dir + blnk +'a span.level_arrows').prepend(settings.menuArrow_sign);
						}
					});
				
				}
			}
			else {
				$this.find(LiList + blnk + Dir + blnk + 'a span.level_arrows').remove();
			}
		}; full_megamenu(); $(window).resize(full_megamenu);
		
		
		// Create Function for Responsive Toggle Menu Button
		var toggle_menu = function () {
			
			if(!$this.parent().find('.arshmenu_toggle').length) {
				$this.parent().prepend('<div class="arshmenu_toggle" />');
			}
			
			var arshmenu_toggle = $this.parent().find('.arshmenu_toggle');
			arshmenu_toggle.on('click', function () {
				$(this).toggleClass('menuclose');
				$this.fadeToggle(200);
				$this.find(LiList + blnk + Ulist).slideUp(200);
				$this.find(LiList + blnk + Spn + '.active_down_arrow').removeClass('active');
			});
			
		}; toggle_menu();
			
		
		// Append CSS Media Queries For Responsive Menus in Head Element In HTML
		$('head').append('<style type="text/css"> @media screen and (min-width: ' + mediaWidth + 'px) {' + thisId + '{display: block !important;}' + thisId + ' > li ul {display: none !important;}' + thisId + ' > li:hover > ul {display: block !important;}' + thisId + ' > li li:hover > ul {display: block !important;}' + thisId + ' > li.fullWidth:hover div.fullWidth_container {display: block !important;}' + thisId + ' > li.fullWidth div.fullWidth_container ul {display: block !important;}}</style>');
		
		
		// Return Function
		return $this;
		
	}
}( jQuery ));