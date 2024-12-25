"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Layout == 'undefined') App.Components.Layout = {};
App.Components.Layout.DefaultLayoutModel = function()
{
	Runtime.Web.BaseLayoutModel.apply(this, arguments);
};
App.Components.Layout.DefaultLayoutModel.prototype = Object.create(Runtime.Web.BaseLayoutModel.prototype);
App.Components.Layout.DefaultLayoutModel.prototype.constructor = App.Components.Layout.DefaultLayoutModel;
Object.assign(App.Components.Layout.DefaultLayoutModel.prototype,
{
	/**
	 * Process frontend data
	 */
	serialize: function(serializer, data)
	{
		Runtime.Web.BaseLayoutModel.prototype.serialize.call(this, serializer, data);
	},
	/**
	 * Load data
	 */
	loadData: async function(container)
	{
		Runtime.Web.BaseLayoutModel.prototype.loadData.call(this, container);
	},
});
Object.assign(App.Components.Layout.DefaultLayoutModel, Runtime.Web.BaseLayoutModel);
Object.assign(App.Components.Layout.DefaultLayoutModel,
{
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App.Components.Layout";
	},
	getClassName: function()
	{
		return "App.Components.Layout.DefaultLayoutModel";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.BaseLayoutModel";
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
Runtime.rtl.defClass(App.Components.Layout.DefaultLayoutModel);
window["App.Components.Layout.DefaultLayoutModel"] = App.Components.Layout.DefaultLayoutModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Layout.DefaultLayoutModel;