"use strict;"
if (typeof App == 'undefined') App = {};
App.AppHook = function()
{
	Runtime.Web.Hooks.AppHook.apply(this, arguments);
};
App.AppHook.prototype = Object.create(Runtime.Web.Hooks.AppHook.prototype);
App.AppHook.prototype.constructor = App.AppHook;
Object.assign(App.AppHook.prototype,
{
	/**
	 * Register hooks
	 */
	register_hooks: function()
	{
		this.register("runtime.wordpress::form_submit_event_name", "form_submit_event_name");
	},
	/**
	 * Form submit event name
	 */
	form_submit_event_name: function(res)
	{
		res.set("event_name", "submit");
	},
});
Object.assign(App.AppHook, Runtime.Web.Hooks.AppHook);
Object.assign(App.AppHook,
{
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App";
	},
	getClassName: function()
	{
		return "App.AppHook";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Hooks.AppHook";
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
Runtime.rtl.defClass(App.AppHook);
window["App.AppHook"] = App.AppHook;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.AppHook;