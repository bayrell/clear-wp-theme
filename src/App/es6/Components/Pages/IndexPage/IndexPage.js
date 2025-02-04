"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Pages == 'undefined') App.Components.Pages = {};
if (typeof App.Components.Pages.IndexPage == 'undefined') App.Components.Pages.IndexPage = {};
App.Components.Pages.IndexPage.IndexPage = {
	name: "App.Components.Pages.IndexPage.IndexPage",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {"class":this._class_name(["main_page"])});
			
			/* Component 'Section' */
			let __v1 = this._c(__v0, "Runtime.Widget.Section", {"class":this._class_name(["main_section"])}, () => {
				let __v = [];
				
				/* Element 'h1' */
				let __v0 = this._e(__v, "h1", {"class":this._class_name(["page_title"])});
				
				/* Text */
				this._t(__v0, "Index page");
				
				/* Element 'div' */
				let __v1 = this._e(__v, "div", {"class":this._class_name(["page_text"])});
				
				/* Text */
				this._t(__v1, "Clear project");
				
				return this._flatten(__v);
			});
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Pages.IndexPage.IndexPage,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Section","Runtime.Widget.Text"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".main_section.h-8c97{padding-top: 20px;padding-bottom: 20px;background-position: center top;background-repeat: no-repeat;background-size: cover}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Pages.IndexPage";
	},
	getClassName: function()
	{
		return "App.Components.Pages.IndexPage.IndexPage";
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
Runtime.rtl.defClass(App.Components.Pages.IndexPage.IndexPage);
window["App.Components.Pages.IndexPage.IndexPage"] = App.Components.Pages.IndexPage.IndexPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Pages.IndexPage.IndexPage;