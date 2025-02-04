"use strict;"
if (typeof App == 'undefined') App = {};
App.ModuleDescription = function()
{
};
Object.assign(App.ModuleDescription.prototype,
{
});
Object.assign(App.ModuleDescription,
{
	/**
	 * Returns module name
	 */
	getModuleName: function()
	{
		return "App";
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
		return Runtime.Map.from({"Runtime.Web":"*","Runtime.Widget":"*"});
	},
	/**
	 * Returns enities
	 */
	entities: function()
	{
		return Runtime.Vector.from([new Runtime.Entity.Hook("App.AppHook"),new Runtime.Entity.Hook("Runtime.WordPress.Theme.Metrika"),Runtime.Web.Hooks.SetupLayout.create(Runtime.Map.from({"default":"App.Components.Layout.DefaultLayoutModel"})),new Runtime.Entity.Hook("Runtime.Web.Hooks.Components", Runtime.Map.from({"components":Runtime.Vector.from(["App.Components.Blocks.CSS","App.Components.Blocks.Fonts"]),"header":Runtime.Vector.from(["App.Components.Blocks.Seo"]),"footer":Runtime.Vector.from(["App.Components.Blocks.Metrika"])}))]);
	},
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App";
	},
	getClassName: function()
	{
		return "App.ModuleDescription";
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
Runtime.rtl.defClass(App.ModuleDescription);
window["App.ModuleDescription"] = App.ModuleDescription;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.ModuleDescription;