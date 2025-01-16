"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Blocks == 'undefined') App.Components.Blocks = {};
App.Components.Blocks.Header = {
	name: "App.Components.Blocks.Header",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {"class":this._class_name(["header"])});
			
			/* Element 'div' */
			let __v1 = this._e(__v0, "div", {"class":this._class_name(["item"])});
			
			/* Text */
			this._t(__v1, "Header");
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Blocks.Header,
{
	css: function(vars)
	{
		var res = "";
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Blocks";
	},
	getClassName: function()
	{
		return "App.Components.Blocks.Header";
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
Runtime.rtl.defClass(App.Components.Blocks.Header);
window["App.Components.Blocks.Header"] = App.Components.Blocks.Header;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Blocks.Header;