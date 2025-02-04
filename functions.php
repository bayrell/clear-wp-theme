<?php

/* Check if Wordpress */
if (!defined('ABSPATH')) exit;


/* Include admin */
include __DIR__ . "/src/Admin/bay/admin.php";


/**
 * Returns app version
 */
function get_app_version()
{
	return \Runtime\WordPress\WP_Helper::getAppVersion("3");
}


/**
 * Setup theme
 */
add_action('after_setup_theme', function(){
	add_theme_support('post-thumbnails');
	add_theme_support('menus');
});


/**
 * Init loader
 */
add_action('init_loader', function($loader){
	$loader->add("App",  __DIR__ . "/src/App/php");
	$loader->add("App.Admin",  __DIR__ . "/src/Admin/php");
	$loader->add("App.WidgetSettings",  __DIR__ . "/src/App/php/WidgetSettings");
});


/**
 * Init template context
 */
add_action('init_template_context', function($init){
	$init['modules']->push('App');
});


/**
 * Add template scripts
 */
add_action('wp_enqueue_scripts', function(){
	wp_enqueue_script(
		'app',
		get_template_directory_uri() . '/assets/app.js',
		['baylang-runtime'], get_app_version(), true
	);
	if (current_user_can("edit_pages"))
	{
		wp_enqueue_script(
			'app-constructor',
			get_template_directory_uri() . '/assets/constructor.js',
			['baylang-constructor'], get_app_version(), true
		);
	}
});
