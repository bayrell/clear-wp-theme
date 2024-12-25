"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.IndexPage == 'undefined') App.Components.IndexPage = {};
App.Components.IndexPage.IndexPageModel = function()
{
	Runtime.Web.BasePageModel.apply(this, arguments);
};
App.Components.IndexPage.IndexPageModel.prototype = Object.create(Runtime.Web.BasePageModel.prototype);
App.Components.IndexPage.IndexPageModel.prototype.constructor = App.Components.IndexPage.IndexPageModel;
Object.assign(App.Components.IndexPage.IndexPageModel.prototype,
{
	initWidget: function(params)
	{
		Runtime.Web.BasePageModel.prototype.initWidget.call(this, params);
	},
	buildTitle: function(container)
	{
		this.layout.setPageTitle("Index page");
	},
	_init: function()
	{
		Runtime.Web.BasePageModel.prototype._init.call(this);
		this.component = "App.Components.IndexPage.IndexPage";
	},
});
Object.assign(App.Components.IndexPage.IndexPageModel, Runtime.Web.BasePageModel);
Object.assign(App.Components.IndexPage.IndexPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App.Components.IndexPage";
	},
	getClassName: function()
	{
		return "App.Components.IndexPage.IndexPageModel";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.BasePageModel";
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
Runtime.rtl.defClass(App.Components.IndexPage.IndexPageModel);
window["App.Components.IndexPage.IndexPageModel"] = App.Components.IndexPage.IndexPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.IndexPage.IndexPageModel;