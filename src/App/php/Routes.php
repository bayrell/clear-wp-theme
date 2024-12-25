<?php
/*!
 *  Routes
 */
namespace App;
class Routes extends \Runtime\Web\BaseRoute
{
	/**
	 * Returns layout name
	 */
	static function getLayoutName()
	{
		return "default";
	}
	/**
	 * Returns routes
	 */
	static function getRoutes()
	{
		return \Runtime\Vector::from([new \Runtime\Web\RouteModel(\Runtime\Map::from(["uri"=>"/","name"=>"app:index","model"=>"App.Components.IndexPage.IndexPageModel"])),new \Runtime\Web\RouteModel(\Runtime\Map::from(["uri"=>"/test","name"=>"app:indextest","model"=>"App.Components.TestPage.TestPageModel"]))]);
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App";
	}
	static function getClassName()
	{
		return "App.Routes";
	}
	static function getParentClassName()
	{
		return "Runtime.Web.BaseRoute";
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