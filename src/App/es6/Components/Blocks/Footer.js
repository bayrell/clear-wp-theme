"use strict;"
/*
 *  Footer
*/
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Blocks == 'undefined') App.Components.Blocks = {};
App.Components.Blocks.Footer = {
	name: "App.Components.Blocks.Footer",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Text */
			this._t(__v, "    ");
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {});
			
			/* Text */
			this._t(__v0, "        ");
			
			/* Component 'Section' */
			let __v1 = this._c(__v0, "Runtime.Widget.Section", {"class":this._class_name(["footer", this.class])}, () => {
				let __v = [];
				
				/* Text */
				this._t(__v, "            Footer\n        ");
				
				return this._flatten(__v);
			});
			
			/* Text */
			this._t(__v0, "    ");
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Blocks.Footer,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Section"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".footer.h-396a{background-position: center top;background-repeat: no-repeat;background-size: cover;padding-top: 10px}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Blocks";
	},
	getClassName: function()
	{
		return "App.Components.Blocks.Footer";
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
Runtime.rtl.defClass(App.Components.Blocks.Footer);
window["App.Components.Blocks.Footer"] = App.Components.Blocks.Footer;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Blocks.Footer;