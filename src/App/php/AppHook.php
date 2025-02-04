<?php
namespace App;
class AppHook extends \Runtime\Web\Hooks\AppHook
{
	/**
	 * Register hooks
	 */
	function register_hooks()
	{
		$this->register("runtime.wordpress::form_submit_event_name", "form_submit_event_name");
	}
	/**
	 * Form submit event name
	 */
	function form_submit_event_name($res)
	{
		$res->set("event_name", "submit");
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App";
	}
	static function getClassName()
	{
		return "App.AppHook";
	}
	static function getParentClassName()
	{
		return "Runtime.Web.Hooks.AppHook";
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