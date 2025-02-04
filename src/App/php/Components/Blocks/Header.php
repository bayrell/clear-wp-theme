<?php
/*
 *  Header
*/
namespace App\Components\Blocks;
class Header extends \Runtime\Web\Component
{
	function render()
	{
		$__v = new \Runtime\Vector();
		
		/* Text */
		$this->_t($__v, "    ");
		
		/* Element 'div' */
		$__v0 = new \Runtime\Vector();
		
		/* Text */
		$this->_t($__v0, "        ");
		
		/* Component 'Section' */
		$this->_c($__v0, "Runtime.Widget.Section", ["class" => $this->_class_name(["header", $this->class])], function (){
			$__v = new \Runtime\Vector();
			
			/* Text */
			$this->_t($__v, "            Header\n        ");
			
			return $__v;
		});
		
		/* Text */
		$this->_t($__v0, "    ");
		
		/* Element 'div' */
		$this->_e($__v, "div", [], $__v0);
		
		return $this->_flatten($__v);
	}
	static function components()
	{
		return \Runtime\Vector::from(["Runtime.Widget.Section"]);
	}
	static function css($vars)
	{
		$res = "";
		$res .= \Runtime\rtl::toStr(".header.h-9450{background-position: center top;background-repeat: no-repeat;background-size: cover;padding-top: 10px}");
		return $res;
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App.Components.Blocks";
	}
	static function getClassName()
	{
		return "App.Components.Blocks.Header";
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