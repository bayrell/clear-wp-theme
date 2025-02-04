<?php
namespace App\Components\Layout;
class DefaultLayout extends \Runtime\Web\DefaultLayout
{
	function render()
	{
		$__v = new \Runtime\Vector();
		
		/* Element 'div' */
		$__v0 = new \Runtime\Vector();
		
		/* Component 'Header' */
		$this->_c($__v0, "App.Components.Blocks.Header", []);
		
		/* Element 'div' */
		$__v1 = new \Runtime\Vector();
		
		/* Text */
		$this->_t($__v1, $this->renderCurrentPage());
		
		/* Element 'div' */
		$this->_e($__v0, "div", ["class" => $this->_class_name(["layout_content"])], $__v1);
		
		/* Component 'Footer' */
		$this->_c($__v0, "App.Components.Blocks.Footer", []);
		
		/* Element 'div' */
		$this->_e($__v, "div", ["class" => $this->_class_name(["layout_default"])], $__v0);
		
		return $this->_flatten($__v);
	}
	static function components()
	{
		return \Runtime\Vector::from(["Runtime.Web.DefaultLayout","App.Components.Blocks.Footer","App.Components.Blocks.Header"]);
	}
	static function css($vars)
	{
		$res = "";
		$res .= \Runtime\rtl::toStr("");
		return $res;
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App.Components.Layout";
	}
	static function getClassName()
	{
		return "App.Components.Layout.DefaultLayout";
	}
	static function getParentClassName()
	{
		return "Runtime.Web.DefaultLayout";
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