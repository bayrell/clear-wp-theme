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
		return \Runtime\Vector::from([new \Runtime\Web\RouteModel(\Runtime\Map::from(["uri"=>"/","name"=>"app:index","model"=>"App.Components.Pages.IndexPage.IndexPageModel"])),new \Runtime\Web\RoutePage(\Runtime\Map::from(["uri"=>"/thank-you.html","name"=>"app:thank_you_page","page"=>"App.Components.Pages.ThankYouPage","data"=>\Runtime\Map::from(["title"=>"Ваше сообщение успешно отправлено","robots"=>\Runtime\Vector::from(["nofollow","noindex"])])]))]);
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