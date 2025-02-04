<?php
namespace App\Components\Layout;
class DefaultLayoutModel extends \Runtime\Web\BaseLayoutModel
{
	public $component;
	/**
	 * Process frontend data
	 */
	function serialize($serializer, $data)
	{
		parent::serialize($serializer, $data);
	}
	/**
	 * Load data
	 */
	function loadData($container)
	{
		parent::loadData($container);
	}
	/* ======================= Class Init Functions ======================= */
	function _init()
	{
		parent::_init();
		$this->component = "App.Components.Layout.DefaultLayout";
	}
	static function getNamespace()
	{
		return "App.Components.Layout";
	}
	static function getClassName()
	{
		return "App.Components.Layout.DefaultLayoutModel";
	}
	static function getParentClassName()
	{
		return "Runtime.Web.BaseLayoutModel";
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