"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Pages == 'undefined') App.Components.Pages = {};
if (typeof App.Components.Pages.NotFoundPage == 'undefined') App.Components.Pages.NotFoundPage = {};
App.Components.Pages.NotFoundPage.NotFoundPage = {
	name: "App.Components.Pages.NotFoundPage.NotFoundPage",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {"class":this._class_name(["not_found_page"])});
			
			/* Component 'Text' */
			let __v1 = this._c(__v0, "Runtime.Widget.Text", {"content":"Страница не найдена","class":this._class_name(["text_not_found"])});
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Pages.NotFoundPage.NotFoundPage,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Text"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".text_not_found.h-ee65{font-size: 150%;font-weight: bold;text-align: center;padding-top: 20px;padding-bottom: 20px}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Pages.NotFoundPage";
	},
	getClassName: function()
	{
		return "App.Components.Pages.NotFoundPage.NotFoundPage";
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
Runtime.rtl.defClass(App.Components.Pages.NotFoundPage.NotFoundPage);
window["App.Components.Pages.NotFoundPage.NotFoundPage"] = App.Components.Pages.NotFoundPage.NotFoundPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Pages.NotFoundPage.NotFoundPage;