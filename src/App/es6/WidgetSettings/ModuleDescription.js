"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.WidgetSettings == 'undefined') App.WidgetSettings = {};
App.WidgetSettings.ModuleDescription = function()
{
};
Object.assign(App.WidgetSettings.ModuleDescription.prototype,
{
});
Object.assign(App.WidgetSettings.ModuleDescription,
{
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleName: function()
	{
		return "App.WidgetSettings";
	},
	/**
	 * Returns module name
	 * @return string
	 */
	getModuleVersion: function()
	{
		return "0.1";
	},
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	requiredModules: function()
	{
		return Runtime.Map.from({});
	},
	/**
	 * Returns enities
	 */
	entities: function()
	{
		return Runtime.Vector.from([new BayLang.Constructor.WidgetPage.WidgetManagerAnnotation("App.WidgetSettings.WidgetManager")]);
	},
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App.WidgetSettings";
	},
	getClassName: function()
	{
		return "App.WidgetSettings.ModuleDescription";
	},
	getParentClassName: function()
	{
		return "";
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
Runtime.rtl.defClass(App.WidgetSettings.ModuleDescription);
window["App.WidgetSettings.ModuleDescription"] = App.WidgetSettings.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.WidgetSettings.ModuleDescription;