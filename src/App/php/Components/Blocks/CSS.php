<?php
/*
 *  CSS
*/
namespace App\Components\Blocks;
class CSS extends \Runtime\Web\Component
{
	static function components()
	{
		return \Runtime\Vector::from(["Runtime.Widget.Button","Runtime.Widget.Form.Form","Runtime.Widget.TextArea"]);
	}
	static function css($vars)
	{
		$res = "";
		$res .= \Runtime\rtl::toStr(":root{--widget-font-family: Arial;--widget-font-size: 16px;--widget-color-link: blue}body,html{font-family: var(--widget-font-family);font-size: var(--widget-font-size);line-height: var(--widget-line-height);width: 100%;padding: 0;margin: 0}.page_title{font-size: 32px;margin: 0px;text-align: center}.widget_textarea.h-ee82{min-height: 200px}");
		return $res;
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App.Components.Blocks";
	}
	static function getClassName()
	{
		return "App.Components.Blocks.CSS";
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