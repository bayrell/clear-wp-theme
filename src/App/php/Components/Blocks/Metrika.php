<?php
/*
 *  Metrika
*/
namespace App\Components\Blocks;
class Metrika extends \Runtime\Web\Component
{
	function render()
	{
		$__v = new \Runtime\Vector();
		
		if (\Runtime\rtl::getContext()->env("METRIKA_ENABLED"))
		{
		}
		
		return $this->_flatten($__v);
	}
	static function css($vars)
	{
		$res = "";
		return $res;
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App.Components.Blocks";
	}
	static function getClassName()
	{
		return "App.Components.Blocks.Metrika";
	}
	static function getParentClassName()
	{
		return "Runtime.Web.Component";
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