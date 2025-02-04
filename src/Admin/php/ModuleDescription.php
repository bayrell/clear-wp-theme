<?php
namespace App\Admin;
class ModuleDescription
{
	/**
	 * Returns module name
	 */
	static function getModuleName()
	{
		return "App.Admin";
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
		return \Runtime\Map::from(["Runtime"=>">=0.12"]);
	}
	/**
	 * Returns enities
	 */
	static function entities()
	{
		return \Runtime\Vector::from([]);
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App.Admin";
	}
	static function getClassName()
	{
		return "App.Admin.ModuleDescription";
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