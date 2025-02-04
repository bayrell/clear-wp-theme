"use strict;"
/*
 *  ThankYouPage
*/
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Pages == 'undefined') App.Components.Pages = {};
App.Components.Pages.ThankYouPage = {
	name: "App.Components.Pages.ThankYouPage",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {});
			
			/* Element 'div' */
			let __v1 = this._e(__v0, "div", {"class":this._class_name(["thank_you_page"])});
			
			/* Element 'h1' */
			let __v2 = this._e(__v1, "h1", {"class":this._class_name(["page_title"])});
			
			/* Text */
			this._t(__v2, "Ваше сообщение успешно отправлено");
			
			/* Element 'div' */
			let __v3 = this._e(__v1, "div", {"class":this._class_name(["message"])});
			
			/* Text */
			this._t(__v3, "Ожидайте, мы свяжемся с вами");
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Pages.ThankYouPage,
{
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".thank_you_page.h-1e82{text-align: center;font-size: 16px;padding-top: 100px}.page_title.h-1e82{line-height: 1.2}.message.h-1e82{margin: 0;margin-top: 1em;margin-bottom: 1em}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Pages";
	},
	getClassName: function()
	{
		return "App.Components.Pages.ThankYouPage";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
	},
	getClassInfo: function()
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return Map.from({
			"annotations": Vector.from([
			]),
		});
	},
	getFieldsList: function()
	{
		var a = [];
		return Runtime.Vector.from(a);
	},
	getFieldInfoByName: function(field_name)
	{
		var Vector = Runtime.Vector;
		var Map = Runtime.Map;
		return null;
	},
	getMethodsList: function()
	{
		var a=[
		];
		return Runtime.Vector.from(a);
	},
	getMethodInfoByName: function(field_name)
	{
		return null;
	},
});
Runtime.rtl.defClass(App.Components.Pages.ThankYouPage);
window["App.Components.Pages.ThankYouPage"] = App.Components.Pages.ThankYouPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Pages.ThankYouPage;