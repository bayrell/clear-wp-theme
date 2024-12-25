<?php
namespace App\Components\NotFoundPage;
class NotFoundPageModel extends \Runtime\Web\BasePageModel
{
	public $component;
	function buildTitle($container)
	{
		/* Set title */
		$this->layout->setPageTitle("Страница не найдена");
		/* Setup 404 response */
		$container->response->http_code = 404;
	}
	/* ======================= Class Init Functions ======================= */
	function _init()
	{
		parent::_init();
		$this->component = "App.Components.NotFoundPage.NotFoundPage";
	}
	static function getNamespace()
	{
		return "App.Components.NotFoundPage";
	}
	static function getClassName()
	{
		return "App.Components.NotFoundPage.NotFoundPageModel";
	}
	static function getParentClassName()
	{
		return "Runtime.Web.BasePageModel";
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