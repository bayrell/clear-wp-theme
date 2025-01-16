<?php

/* Check if Wordpress */
if (!defined('ABSPATH')) exit;

/* Include admin */
include __DIR__ . "/src/Admin/php/admin.php";

/**
 * Returns app version
 */
function get_app_version()
{
    $version = "1";
    return $version . "_" . \Runtime\WordPress\WP_Helper::get_option("app_js_vesion");
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
});


/**
 * Init admin context
 */
add_action('init_admin_context', function($init){
    $init['modules']->push('App.Admin');
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
});
