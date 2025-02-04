<?php
namespace App;
class ModuleDescription
{
	/**
	 * Returns module name
	 */
	static function getModuleName()
	{
		return "App";
	}
	/**
	 * Returns module version
	 */
	static function getModuleVersion()
	{
		return "0.0.1";
	}
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	static function requiredModules()
	{
		return \Runtime\Map::from(["Runtime.Web"=>"*","Runtime.Widget"=>"*"]);
	}
	/**
	 * Returns enities
	 */
	static function entities()
	{
		return \Runtime\Vector::from([new \Runtime\Entity\Hook("App.AppHook"),new \Runtime\Entity\Hook("Runtime.WordPress.Theme.Metrika"),\Runtime\Web\Hooks\SetupLayout::create(\Runtime\Map::from(["default"=>"App.Components.Layout.DefaultLayoutModel"])),new \Runtime\Entity\Hook("Runtime.Web.Hooks.Components", \Runtime\Map::from(["components"=>\Runtime\Vector::from(["App.Components.Blocks.CSS","App.Components.Blocks.Fonts"]),"header"=>\Runtime\Vector::from(["App.Components.Blocks.Seo"]),"footer"=>\Runtime\Vector::from(["App.Components.Blocks.Metrika"])])),new \Runtime\Web\Annotations\PageNotFound("App.Components.Pages.NotFoundPage.NotFoundPageModel"),new \Runtime\Web\Annotations\Route("App.Routes")]);
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App";
	}
	static function getClassName()
	{
		return "App.ModuleDescription";
	}
	static function getParentClassName()
	{
		return "";
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