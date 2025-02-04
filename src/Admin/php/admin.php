<?php

/* Check if Wordpress */
if (!defined('ABSPATH')) exit;


/**
 * Init admin context
 */
add_action('init_admin_context', function($init){
    $init['modules']->push('App.Admin');
});


/**
 * Add admin scripts
 */
add_action('admin_render_page', function(){
	wp_enqueue_script(
		'admin',
		get_template_directory_uri() . '/assets/admin.js',
		['baylang-runtime'], get_app_version(), true
	);
});
