<?php

/* Check if Wordpress */
if (!defined('ABSPATH')) exit;


/**
 * Returns app version
 */
function get_app_version()
{
    return "1";
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
    $loader->addPsr4("App\\",  __DIR__ . "/src/App/php");
});


/**
 * Init template context
 */
add_action('init_template_context', function($init){
    /* $init['environments']['CUSTOM_FEATURE_ENABLE'] = false; */
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
