"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Layout == 'undefined') App.Components.Layout = {};
App.Components.Layout.DefaultLayout = {
	name: "App.Components.Layout.DefaultLayout",
	extends: Runtime.Web.DefaultLayout,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {"class":this._class_name(["layout_default"])});
			
			/* Component 'Header' */
			let __v1 = this._c(__v0, "App.Components.Blocks.Header", {});
			
			/* Element 'div' */
			let __v2 = this._e(__v0, "div", {"class":this._class_name(["layout_content"])});
			
			/* Render */
			this._t(__v2, this.renderCurrentPage());
			
			/* Component 'Footer' */
			let __v3 = this._c(__v0, "App.Components.Blocks.Footer", {});
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Layout.DefaultLayout,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Web.DefaultLayout","App.Components.Blocks.Footer","App.Components.Blocks.Header"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr("");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Layout";
	},
	getClassName: function()
	{
		return "App.Components.Layout.DefaultLayout";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.DefaultLayout";
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
Runtime.rtl.defClass(App.Components.Layout.DefaultLayout);
window["App.Components.Layout.DefaultLayout"] = App.Components.Layout.DefaultLayout;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Layout.DefaultLayout;