<?php
namespace App\Components\IndexPage;
class IndexPageModel extends \Runtime\Web\BasePageModel
{
	public $component;
	function initWidget($params)
	{
		parent::initWidget($params);
	}
	function buildTitle($container)
	{
		$this->layout->setPageTitle("Index page");
	}
	/* ======================= Class Init Functions ======================= */
	function _init()
	{
		parent::_init();
		$this->component = "App.Components.IndexPage.IndexPage";
	}
	static function getNamespace()
	{
		return "App.Components.IndexPage";
	}
	static function getClassName()
	{
		return "App.Components.IndexPage.IndexPageModel";
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