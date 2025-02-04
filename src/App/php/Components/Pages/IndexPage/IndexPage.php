<?php
namespace App\Components\Pages\IndexPage;
class IndexPage extends \Runtime\Web\Component
{
	function render()
	{
		$__v = new \Runtime\Vector();
		
		/* Element 'div' */
		$__v0 = new \Runtime\Vector();
		
		/* Component 'Section' */
		$this->_c($__v0, "Runtime.Widget.Section", ["class" => $this->_class_name(["main_section"])], function (){
			$__v = new \Runtime\Vector();
			
			/* Element 'h1' */
			$__v0 = new \Runtime\Vector();
			
			/* Text */
			$this->_t($__v0, "Index page");
			
			/* Element 'h1' */
			$this->_e($__v, "h1", ["class" => $this->_class_name(["page_title"])], $__v0);
			
			/* Element 'div' */
			$__v0 = new \Runtime\Vector();
			
			/* Text */
			$this->_t($__v0, "Clear project");
			
			/* Element 'div' */
			$this->_e($__v, "div", ["class" => $this->_class_name(["page_text"])], $__v0);
			
			return $__v;
		});
		
		/* Element 'div' */
		$this->_e($__v, "div", ["class" => $this->_class_name(["main_page"])], $__v0);
		
		return $this->_flatten($__v);
	}
	static function components()
	{
		return \Runtime\Vector::from(["Runtime.Widget.Section","Runtime.Widget.Text"]);
	}
	static function css($vars)
	{
		$res = "";
		$res .= \Runtime\rtl::toStr(".main_section.h-8c97{padding-top: 20px;padding-bottom: 20px;background-position: center top;background-repeat: no-repeat;background-size: cover}");
		return $res;
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App.Components.Pages.IndexPage";
	}
	static function getClassName()
	{
		return "App.Components.Pages.IndexPage.IndexPage";
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