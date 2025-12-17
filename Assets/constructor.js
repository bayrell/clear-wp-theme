"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.WidgetSettings == 'undefined') App.WidgetSettings = {};
App.WidgetSettings.WidgetManager = class extends Runtime.BaseObject
{
	/**
	 * Init widgets
	 */
	init(provider)
	{
	}
	
	
	/**
	 * Returns group settings
	 */
	getGroupSettings()
	{
		return Runtime.Map.create({
			"app": Runtime.Map.create({
				"label": "App",
				"priority": 50,
			}),
		});
	}
	
	
	/**
	 * Returns list of widget settings
	 */
	getWidgetSettings()
	{
		return new Runtime.Vector(
			new App.WidgetSettings.Settings.PriceBlockSettings(),
		);
	}
	
	
	/* ========= Class init functions ========= */
	_init()
	{
		super._init();
	}
	static getClassName(){ return "App.WidgetSettings.WidgetManager"; }
	static getMethodsList(){ return null; }
	static getMethodInfoByName(field_name){ return null; }
	static getInterfaces(){ return ["BayLang.Constructor.WidgetPage.WidgetManagerInterface"]; }
};
window["App.WidgetSettings.WidgetManager"] = App.WidgetSettings.WidgetManager;
"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.WidgetSettings == 'undefined') App.WidgetSettings = {};
App.WidgetSettings.ModuleDescription = class
{
	/**
	 * Returns module name
	 * @return string
	 */
	static getModuleName()
	{
		return "App.WidgetSettings";
	}
	
	
	/**
	 * Returns module name
	 * @return string
	 */
	static getModuleVersion()
	{
		return "0.1";
	}
	
	
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	static requiredModules()
	{
		return Runtime.Map.create({
		});
	}
	
	
	/**
	 * Returns enities
	 */
	static entities()
	{
		return new Runtime.Vector(
			new BayLang.Constructor.WidgetPage.WidgetManagerAnnotation("App.WidgetSettings.WidgetManager"),
		);
	}
	
	
	/* ========= Class init functions ========= */
	_init()
	{
	}
	static getClassName(){ return "App.WidgetSettings.ModuleDescription"; }
	static getMethodsList(){ return null; }
	static getMethodInfoByName(field_name){ return null; }
	static getInterfaces(){ return []; }
};
window["App.WidgetSettings.ModuleDescription"] = App.WidgetSettings.ModuleDescription;
