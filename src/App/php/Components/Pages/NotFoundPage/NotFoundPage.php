<?php
namespace App\Components\Pages\NotFoundPage;
class NotFoundPage extends \Runtime\Web\Component
{
	function render()
	{
		$__v = new \Runtime\Vector();
		
		/* Element 'div' */
		$__v0 = new \Runtime\Vector();
		
		/* Component 'Text' */
		$this->_c($__v0, "Runtime.Widget.Text", ["content" => "Страница не найдена","class" => $this->_class_name(["text_not_found"])]);
		
		/* Element 'div' */
		$this->_e($__v, "div", ["class" => $this->_class_name(["not_found_page"])], $__v0);
		
		return $this->_flatten($__v);
	}
	static function components()
	{
		return \Runtime\Vector::from(["Runtime.Widget.Text"]);
	}
	static function css($vars)
	{
		$res = "";
		$res .= \Runtime\rtl::toStr(".text_not_found.h-ee65{font-size: 150%;font-weight: bold;text-align: center;padding-top: 20px;padding-bottom: 20px}");
		return $res;
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App.Components.Pages.NotFoundPage";
	}
	static function getClassName()
	{
		return "App.Components.Pages.NotFoundPage.NotFoundPage";
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