<?php
namespace App\WidgetSettings;
class WidgetManager extends \Runtime\BaseObject implements \BayLang\Constructor\WidgetPage\WidgetManagerInterface
{
	/**
	 * Init widgets
	 */
	function init($provider)
	{
	}
	/**
	 * Returns group settings
	 */
	function getGroupSettings()
	{
		return \Runtime\Map::from(["app"=>\Runtime\Map::from(["label"=>"App","priority"=>50])]);
	}
	/**
	 * Returns list of widget settings
	 */
	function getWidgetSettings()
	{
		return \Runtime\Vector::from([new \App\WidgetSettings\Settings\PriceBlockSettings()]);
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App.WidgetSettings";
	}
	static function getClassName()
	{
		return "App.WidgetSettings.WidgetManager";
	}
	static function getParentClassName()
	{
		return "Runtime.BaseObject";
	}
	static function getClassInfo()
	{
		return \Runtime\Dict::from([
			"annotations"=>\Runtime\Collection::from([
			]),
		]);
	}
	static function getFieldsList()
	{
		$a = [];
		return \Runtime\Collection::from($a);
	}
	static function getFieldInfoByName($field_name)
	{
		return null;
	}
	static function getMethodsList()
	{
		$a=[
		];
		return \Runtime\Collection::from($a);
	}
	static function getMethodInfoByName($field_name)
	{
		return null;
	}
}