"use strict;"
/*
 *  Metrika
*/
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Blocks == 'undefined') App.Components.Blocks = {};
App.Components.Blocks.Metrika = {
	name: "App.Components.Blocks.Metrika",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			if (Runtime.rtl.getContext().env("METRIKA_ENABLED"))
			{
			}
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Blocks.Metrika,
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
		return "App.Components.Blocks.Metrika";
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
Runtime.rtl.defClass(App.Components.Blocks.Metrika);
window["App.Components.Blocks.Metrika"] = App.Components.Blocks.Metrika;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Blocks.Metrika;