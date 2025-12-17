<?php

/* Check if Wordpress */
if (!defined('ABSPATH')) exit;

use Runtime\Loader;
use Runtime\Map;
use Runtime\Vector;

/* Include admin */
//include __DIR__ . "/src/Admin/bay/admin.php";


/**
 * Setup theme
 */
add_action("after_setup_theme", function(){
	add_theme_support("post-thumbnails");
	add_theme_support("menus");
});


/**
 * Disable author page
 */
add_action("template_redirect", function(){
    if (is_author()) {
        wp_redirect(home_url());
        exit;
    }
});


/**
 * Remove emoji
 */
add_action( 'wp_enqueue_scripts', function() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
    wp_dequeue_style( 'wp-emoji-styles' );
});


/**
 * WordPress init
 */
add_action("wp", function(){
	if (class_exists(\RankMath::class))
	{
		remove_action("wp_head", [rank_math()->head, "head"], 1);
	}
});


/**
 * Filter sitemap
 */
add_filter("wp_sitemaps_add_provider", function($provider, $name){
	if ($name == "users")
	{
		return false;
	}
	return $provider;
}, 99, 2);


/**
 * Is WordPress
 */
function app_is_wordpress()
{
	$uri = $_SERVER["REQUEST_URI"];
	$allow = [
		"/robots.txt",
		"/sitemap.xml",
		"/sitemap_index.xml",
		"/category-sitemap.xml",
		"/docs-sitemap.xml",
		"/main-sitemap.xsl",
		"/page-sitemap.xml",
		"/post-sitemap.xml",
		"/post_tag-sitemap.xml",
		"/product-sitemap.xml",
		"/repo-sitemap.xml",
		"/wp-sitemap.xsl",
		"/wp-sitemap.xml",
		"/wp-sitemap-",
		"/wp-json/",
	];
	$denied = [
		"/wp-json/wp/v2/users/1",
	];
	foreach ($denied as $s)
	{
		if (strpos($uri, $s) === 0)
		{
			return false;
		}
	}
	foreach ($allow as $s)
	{
		if (strpos($uri, $s) === 0)
		{
			return true;
		}
	}
	return false;
}


/**
 * Disable main query
 **/
add_filter("do_parse_request", function()
{
	if (app_is_wordpress()) return true;
	if (is_admin()) return true;
	return false;
}, 9999);


/**
 * Disable redirect
 */
add_filter('redirect_canonical', function(){
	return false;
});


/**
 * Show generation time
 */
add_action('wp_footer', function (){
	global $timestart;
	$time = microtime(true) - $timestart;
	echo "<!-- Page generated in " . round($time, 3) . " seconds -->";
});


/**
 * Init loader
 */
add_action("init_loader", function(){
	Loader::add("App",  __DIR__ . "/Source/php");
	Loader::add("App.Admin",  __DIR__ . "/Source/Admin/php");
});


/**
 * Init template context
 */
add_action("init_template_context", function($init){
	$init->get("modules")->push("App");
});


/**
 * Add template scripts
 */
add_action("wp_enqueue_scripts", function(){
	$app_version = \Runtime\WordPress\WP_Helper::getAppVersion(
		\App\ModuleDescription::getModuleVersion()
	);
	wp_enqueue_script(
		"app",
		get_template_directory_uri() . "/Assets/app.js",
		["baylang-runtime"], $app_version, true
	);
	if (current_user_can("edit_pages"))
	{
		/*wp_enqueue_script(
			"app-constructor",
			get_template_directory_uri() . "/assets/constructor.js",
			["baylang-constructor"], get_app_version(), true
		);*/
	}
});
