<?php
/*
 *  Seo
*/
namespace App\Components\Blocks;
class Seo extends \Runtime\Web\Component
{
	function render()
	{
		$__v = new \Runtime\Vector();
		
		/* Element 'title' */
		$__v0 = new \Runtime\Vector();
		
		/* Text */
		$this->_t($__v0, $this->_escape($this->layout->getFullTitle()));
		
		/* Element 'title' */
		$this->_e($__v, "title", [], $__v0);
		
		/* Element 'meta' */
		$this->_e($__v, "meta", ["charset" => $this->layout->content_type]);
		
		/* Element 'meta' */
		$this->_e($__v, "meta", ["http-equiv" => "Content-Type","content" => "text/html; " . \Runtime\rtl::toStr($this->layout->content_type)]);
		
		/* Element 'meta' */
		$this->_e($__v, "meta", ["http-equiv" => "Content-Language","content" => $this->layout->getLocale()]);
		
		/* Element 'meta' */
		$this->_e($__v, "meta", ["http-equiv" => "X-UA-Compatible","content" => "IE=edge"]);
		
		/* Element 'meta' */
		$this->_e($__v, "meta", ["name" => "viewport","content" => "width=device-width, initial-scale=1"]);
		
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
		return "App.Components.Blocks.Seo";
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