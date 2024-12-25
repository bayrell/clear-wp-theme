"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.NotFoundPage == 'undefined') App.Components.NotFoundPage = {};
App.Components.NotFoundPage.NotFoundPageModel = function()
{
	Runtime.Web.BasePageModel.apply(this, arguments);
};
App.Components.NotFoundPage.NotFoundPageModel.prototype = Object.create(Runtime.Web.BasePageModel.prototype);
App.Components.NotFoundPage.NotFoundPageModel.prototype.constructor = App.Components.NotFoundPage.NotFoundPageModel;
Object.assign(App.Components.NotFoundPage.NotFoundPageModel.prototype,
{
	buildTitle: function(container)
	{
		/* Set title */
		this.layout.setPageTitle("Страница не найдена");
		/* Setup 404 response */
		container.response.http_code = 404;
	},
	_init: function()
	{
		Runtime.Web.BasePageModel.prototype._init.call(this);
		this.component = "App.Components.NotFoundPage.NotFoundPage";
	},
});
Object.assign(App.Components.NotFoundPage.NotFoundPageModel, Runtime.Web.BasePageModel);
Object.assign(App.Components.NotFoundPage.NotFoundPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App.Components.NotFoundPage";
	},
	getClassName: function()
	{
		return "App.Components.NotFoundPage.NotFoundPageModel";
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
Runtime.rtl.defClass(App.Components.NotFoundPage.NotFoundPageModel);
window["App.Components.NotFoundPage.NotFoundPageModel"] = App.Components.NotFoundPage.NotFoundPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.NotFoundPage.NotFoundPageModel;