"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.WidgetSettings == 'undefined') App.WidgetSettings = {};
App.WidgetSettings.WidgetManager = function()
{
	Runtime.BaseObject.apply(this, arguments);
};
App.WidgetSettings.WidgetManager.prototype = Object.create(Runtime.BaseObject.prototype);
App.WidgetSettings.WidgetManager.prototype.constructor = App.WidgetSettings.WidgetManager;
Object.assign(App.WidgetSettings.WidgetManager.prototype,
{
	/**
	 * Init widgets
	 */
	init: function(provider)
	{
	},
	/**
	 * Returns group settings
	 */
	getGroupSettings: function()
	{
		return Runtime.Map.from({"app":Runtime.Map.from({"label":"App","priority":50})});
	},
	/**
	 * Returns list of widget settings
	 */
	getWidgetSettings: function()
	{
		return Runtime.Vector.from([new App.WidgetSettings.Settings.PriceBlockSettings()]);
	},
});
Object.assign(App.WidgetSettings.WidgetManager, Runtime.BaseObject);
Object.assign(App.WidgetSettings.WidgetManager,
{
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App.WidgetSettings";
	},
	getClassName: function()
	{
		return "App.WidgetSettings.WidgetManager";
	},
	getParentClassName: function()
	{
		return "Runtime.BaseObject";
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
	__implements__:
	[
		BayLang.Constructor.WidgetPage.WidgetManagerInterface,
	],
});
Runtime.rtl.defClass(App.WidgetSettings.WidgetManager);
window["App.WidgetSettings.WidgetManager"] = App.WidgetSettings.WidgetManager;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.WidgetSettings.WidgetManager;