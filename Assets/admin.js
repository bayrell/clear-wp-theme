"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Admin == 'undefined') App.Admin = {};
App.Admin.ModuleDescription = class
{
	/**
	 * Returns module name
	 */
	static getModuleName(){ return "App.Admin"; }
	
	
	/**
	 * Returns module version
	 */
	static getModuleVersion(){ return "0.0.1"; }
	
	
	/**
	 * Returns required modules
	 * @return Map<string>
	 */
	static requiredModules()
	{
		return Runtime.Map.create({
			"Runtime": ">=0.12",
		});
	}
	
	
	/**
	 * Returns enities
	 */
	static entities()
	{
		return Runtime.Vector.create([
		]);
	}
	
	
	/* ========= Class init functions ========= */
	_init()
	{
	}
	static getClassName(){ return "App.Admin.ModuleDescription"; }
	static getMethodsList(){ return null; }
	static getMethodInfoByName(field_name){ return null; }
	static getInterfaces(){ return []; }
};
window["App.Admin.ModuleDescription"] = App.Admin.ModuleDescription;
