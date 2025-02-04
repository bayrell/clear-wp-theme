"use strict;"
/*
 *  Seo
*/
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Blocks == 'undefined') App.Components.Blocks = {};
App.Components.Blocks.Seo = {
	name: "App.Components.Blocks.Seo",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'title' */
			let __v0 = this._e(__v, "title", {});
			
			/* Render */
			this._t(__v0, this.layout.getFullTitle());
			
			/* Element 'meta' */
			let __v1 = this._e(__v, "meta", {"charset":this.layout.content_type});
			
			/* Element 'meta' */
			let __v2 = this._e(__v, "meta", {"http-equiv":"Content-Type","content":"text/html; " + Runtime.rtl.toStr(this.layout.content_type)});
			
			/* Element 'meta' */
			let __v3 = this._e(__v, "meta", {"http-equiv":"Content-Language","content":this.layout.getLocale()});
			
			/* Element 'meta' */
			let __v4 = this._e(__v, "meta", {"http-equiv":"X-UA-Compatible","content":"IE=edge"});
			
			/* Element 'meta' */
			let __v5 = this._e(__v, "meta", {"name":"viewport","content":"width=device-width, initial-scale=1"});
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Blocks.Seo,
{
	css: function(vars)
	{
		var res = "";
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Blocks";
	},
	getClassName: function()
	{
		return "App.Components.Blocks.Seo";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Component";
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
Runtime.rtl.defClass(App.Components.Blocks.Seo);
window["App.Components.Blocks.Seo"] = App.Components.Blocks.Seo;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Blocks.Seo;