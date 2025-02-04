<?php
/*
 *  ThankYouPage
*/
namespace App\Components\Pages;
class ThankYouPage extends \Runtime\Web\Component
{
	function render()
	{
		$__v = new \Runtime\Vector();
		
		/* Element 'div' */
		$__v0 = new \Runtime\Vector();
		
		/* Element 'div' */
		$__v1 = new \Runtime\Vector();
		
		/* Element 'h1' */
		$__v2 = new \Runtime\Vector();
		
		/* Text */
		$this->_t($__v2, "Ваше сообщение успешно отправлено");
		
		/* Element 'h1' */
		$this->_e($__v1, "h1", ["class" => $this->_class_name(["page_title"])], $__v2);
		
		/* Element 'div' */
		$__v2 = new \Runtime\Vector();
		
		/* Text */
		$this->_t($__v2, "Ожидайте, мы свяжемся с вами");
		
		/* Element 'div' */
		$this->_e($__v1, "div", ["class" => $this->_class_name(["message"])], $__v2);
		
		/* Element 'div' */
		$this->_e($__v0, "div", ["class" => $this->_class_name(["thank_you_page"])], $__v1);
		
		/* Element 'div' */
		$this->_e($__v, "div", [], $__v0);
		
		return $this->_flatten($__v);
	}
	static function css($vars)
	{
		$res = "";
		$res .= \Runtime\rtl::toStr(".thank_you_page.h-1e82{text-align: center;font-size: 16px;padding-top: 100px}.page_title.h-1e82{line-height: 1.2}.message.h-1e82{margin: 0;margin-top: 1em;margin-bottom: 1em}");
		return $res;
	}
	/* ======================= Class Init Functions ======================= */
	static function getNamespace()
	{
		return "App.Components.Pages";
	}
	static function getClassName()
	{
		return "App.Components.Pages.ThankYouPage";
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