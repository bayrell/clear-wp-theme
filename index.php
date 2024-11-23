<?php

/* Check if Wordpress */
if (!defined('ABSPATH')) exit;

/* Run web app */
$context = \Runtime\rtl::getContext();
$context->run($context);
