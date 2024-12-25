"use strict;"
/*
 *  CSS
*/
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Blocks == 'undefined') App.Components.Blocks = {};
App.Components.Blocks.CSS = {
	name: "App.Components.Blocks.CSS",
	extends: Runtime.Web.Component,
	methods:
	{
	},
};
Object.assign(App.Components.Blocks.CSS,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Button","Runtime.Widget.Form.Form","Runtime.Widget.TextArea"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr("body,html{font-family: var(--widget-font-family);font-size: var(--widget-font-size);line-height: var(--widget-line-height);width: 100%;padding: 0;margin: 0}.widget_textarea.h-ee82{min-height: 200px}.form_style1.h-b6a8 .widget_button.h-8dd7{background-color: red}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Blocks";
	},
	getClassName: function()
	{
		return "App.Components.Blocks.CSS";
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
Runtime.rtl.defClass(App.Components.Blocks.CSS);
window["App.Components.Blocks.CSS"] = App.Components.Blocks.CSS;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Blocks.CSS;