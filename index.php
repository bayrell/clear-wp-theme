<?php

/* Check if Wordpress */
if (!defined('ABSPATH')) exit;

/* Check if BayLang Constructor is installed */
if (!class_exists(\Runtime\rtl::class))
{
	status_header(500);
	echo "Install BayLang Constructor";
}

/* Run web app */
else
{
	render();
}