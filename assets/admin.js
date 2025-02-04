"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Admin == 'undefined') App.Admin = {};
App.Admin.ModuleDescription = function()
{
};
Object.assign(App.Admin.ModuleDescription.prototype,
{
});
Object.assign(App.Admin.ModuleDescription,
{
	/**
	 * Returns module name
	 */
	getModuleName: function()
	{
		return "App.Admin";
	},
	/**
	 * Returns module version
	 */
	getModuleVersion: function()
	{
		return "0.0.1";
	},
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	requiredModules: function()
	{
		return Runtime.Map.from({"Runtime":">=0.12"});
	},
	/**
	 * Returns enities
	 */
	entities: function()
	{
		return Runtime.Vector.from([]);
	},
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App.Admin";
	},
	getClassName: function()
	{
		return "App.Admin.ModuleDescription";
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
Runtime.rtl.defClass(App.Admin.ModuleDescription);
window["App.Admin.ModuleDescription"] = App.Admin.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Admin.ModuleDescription;
