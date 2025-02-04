"use strict;"
/*!
 *  Routes
 */
if (typeof App == 'undefined') App = {};
App.Routes = function()
{
	Runtime.Web.BaseRoute.apply(this, arguments);
};
App.Routes.prototype = Object.create(Runtime.Web.BaseRoute.prototype);
App.Routes.prototype.constructor = App.Routes;
Object.assign(App.Routes.prototype,
{
});
Object.assign(App.Routes, Runtime.Web.BaseRoute);
Object.assign(App.Routes,
{
	/**
	 * Returns layout name
	 */
	getLayoutName: function()
	{
		return "default";
	},
	/**
	 * Returns routes
	 */
	getRoutes: function()
	{
		return Runtime.Vector.from([new Runtime.Web.RouteModel(Runtime.Map.from({"uri":"/","name":"app:index","model":"App.Components.Pages.IndexPage.IndexPageModel"})),new Runtime.Web.RoutePage(Runtime.Map.from({"uri":"/thank-you.html","name":"app:thank_you_page","page":"App.Components.Pages.ThankYouPage","data":Runtime.Map.from({"title":"Ваше сообщение успешно отправлено","robots":Runtime.Vector.from(["nofollow","noindex"])})}))]);
	},
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App";
	},
	getClassName: function()
	{
		return "App.Routes";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.BaseRoute";
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
Runtime.rtl.defClass(App.Routes);
window["App.Routes"] = App.Routes;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Routes;