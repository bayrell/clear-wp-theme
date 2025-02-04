"use strict;"
if (typeof App == 'undefined') App = {};
App.AppHook = function()
{
	Runtime.Web.Hooks.AppHook.apply(this, arguments);
};
App.AppHook.prototype = Object.create(Runtime.Web.Hooks.AppHook.prototype);
App.AppHook.prototype.constructor = App.AppHook;
Object.assign(App.AppHook.prototype,
{
	/**
	 * Register hooks
	 */
	register_hooks: function()
	{
		this.register("runtime.wordpress::form_submit_event_name", "form_submit_event_name");
	},
	/**
	 * Form submit event name
	 */
	form_submit_event_name: function(res)
	{
		res.set("event_name", "submit");
	},
});
Object.assign(App.AppHook, Runtime.Web.Hooks.AppHook);
Object.assign(App.AppHook,
{
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App";
	},
	getClassName: function()
	{
		return "App.AppHook";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.Hooks.AppHook";
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
Runtime.rtl.defClass(App.AppHook);
window["App.AppHook"] = App.AppHook;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.AppHook;
"use strict;"
/*
 *  CSS
*/
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Blocks == 'undefined') App.Components.Blocks = {};
App.Components.Blocks.CSS = {
	name: "App.Components.Blocks.CSS",
	extends: Runtime.Web.Component,
	methods:
	{
	},
};
Object.assign(App.Components.Blocks.CSS,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Button","Runtime.Widget.Form.Form","Runtime.Widget.TextArea"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(":root{--widget-font-family: Arial;--widget-font-size: 16px;--widget-color-link: blue}body,html{font-family: var(--widget-font-family);font-size: var(--widget-font-size);line-height: var(--widget-line-height);width: 100%;padding: 0;margin: 0}.page_title{font-size: 32px;margin: 0px;text-align: center}.widget_textarea.h-ee82{min-height: 200px}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Blocks";
	},
	getClassName: function()
	{
		return "App.Components.Blocks.CSS";
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
Runtime.rtl.defClass(App.Components.Blocks.CSS);
window["App.Components.Blocks.CSS"] = App.Components.Blocks.CSS;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Blocks.CSS;
"use strict;"
/*
 *  Fonts
*/
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Blocks == 'undefined') App.Components.Blocks = {};
App.Components.Blocks.Fonts = {
	name: "App.Components.Blocks.Fonts",
	extends: Runtime.Web.Component,
	methods:
	{
	},
};
Object.assign(App.Components.Blocks.Fonts,
{
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr("");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Blocks";
	},
	getClassName: function()
	{
		return "App.Components.Blocks.Fonts";
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
Runtime.rtl.defClass(App.Components.Blocks.Fonts);
window["App.Components.Blocks.Fonts"] = App.Components.Blocks.Fonts;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Blocks.Fonts;
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
"use strict;"
/*
 *  Header
*/
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Blocks == 'undefined') App.Components.Blocks = {};
App.Components.Blocks.Header = {
	name: "App.Components.Blocks.Header",
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
			let __v1 = this._c(__v0, "Runtime.Widget.Section", {"class":this._class_name(["header", this.class])}, () => {
				let __v = [];
				
				/* Text */
				this._t(__v, "            Header\n        ");
				
				return this._flatten(__v);
			});
			
			/* Text */
			this._t(__v0, "    ");
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Blocks.Header,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Section"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".header.h-9450{background-position: center top;background-repeat: no-repeat;background-size: cover;padding-top: 10px}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Blocks";
	},
	getClassName: function()
	{
		return "App.Components.Blocks.Header";
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
Runtime.rtl.defClass(App.Components.Blocks.Header);
window["App.Components.Blocks.Header"] = App.Components.Blocks.Header;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Blocks.Header;
"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Layout == 'undefined') App.Components.Layout = {};
App.Components.Layout.DefaultLayout = {
	name: "App.Components.Layout.DefaultLayout",
	extends: Runtime.Web.DefaultLayout,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {"class":this._class_name(["layout_default"])});
			
			/* Component 'Header' */
			let __v1 = this._c(__v0, "App.Components.Blocks.Header", {});
			
			/* Element 'div' */
			let __v2 = this._e(__v0, "div", {"class":this._class_name(["layout_content"])});
			
			/* Render */
			this._t(__v2, this.renderCurrentPage());
			
			/* Component 'Footer' */
			let __v3 = this._c(__v0, "App.Components.Blocks.Footer", {});
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Layout.DefaultLayout,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Web.DefaultLayout","App.Components.Blocks.Footer","App.Components.Blocks.Header"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr("");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Layout";
	},
	getClassName: function()
	{
		return "App.Components.Layout.DefaultLayout";
	},
	getParentClassName: function()
	{
		return "Runtime.Web.DefaultLayout";
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
Runtime.rtl.defClass(App.Components.Layout.DefaultLayout);
window["App.Components.Layout.DefaultLayout"] = App.Components.Layout.DefaultLayout;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Layout.DefaultLayout;
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
	_init: function()
	{
		Runtime.Web.BaseLayoutModel.prototype._init.call(this);
		this.component = "App.Components.Layout.DefaultLayout";
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
"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Pages == 'undefined') App.Components.Pages = {};
if (typeof App.Components.Pages.IndexPage == 'undefined') App.Components.Pages.IndexPage = {};
App.Components.Pages.IndexPage.IndexPage = {
	name: "App.Components.Pages.IndexPage.IndexPage",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {"class":this._class_name(["main_page"])});
			
			/* Component 'Section' */
			let __v1 = this._c(__v0, "Runtime.Widget.Section", {"class":this._class_name(["main_section"])}, () => {
				let __v = [];
				
				/* Element 'h1' */
				let __v0 = this._e(__v, "h1", {"class":this._class_name(["page_title"])});
				
				/* Text */
				this._t(__v0, "Index page");
				
				/* Element 'div' */
				let __v1 = this._e(__v, "div", {"class":this._class_name(["page_text"])});
				
				/* Text */
				this._t(__v1, "Clear project");
				
				return this._flatten(__v);
			});
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Pages.IndexPage.IndexPage,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Section","Runtime.Widget.Text"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".main_section.h-8c97{padding-top: 20px;padding-bottom: 20px;background-position: center top;background-repeat: no-repeat;background-size: cover}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Pages.IndexPage";
	},
	getClassName: function()
	{
		return "App.Components.Pages.IndexPage.IndexPage";
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
Runtime.rtl.defClass(App.Components.Pages.IndexPage.IndexPage);
window["App.Components.Pages.IndexPage.IndexPage"] = App.Components.Pages.IndexPage.IndexPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Pages.IndexPage.IndexPage;
"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Pages == 'undefined') App.Components.Pages = {};
if (typeof App.Components.Pages.IndexPage == 'undefined') App.Components.Pages.IndexPage = {};
App.Components.Pages.IndexPage.IndexPageModel = function()
{
	Runtime.Web.BasePageModel.apply(this, arguments);
};
App.Components.Pages.IndexPage.IndexPageModel.prototype = Object.create(Runtime.Web.BasePageModel.prototype);
App.Components.Pages.IndexPage.IndexPageModel.prototype.constructor = App.Components.Pages.IndexPage.IndexPageModel;
Object.assign(App.Components.Pages.IndexPage.IndexPageModel.prototype,
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
		this.component = "App.Components.Pages.IndexPage.IndexPage";
	},
});
Object.assign(App.Components.Pages.IndexPage.IndexPageModel, Runtime.Web.BasePageModel);
Object.assign(App.Components.Pages.IndexPage.IndexPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App.Components.Pages.IndexPage";
	},
	getClassName: function()
	{
		return "App.Components.Pages.IndexPage.IndexPageModel";
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
Runtime.rtl.defClass(App.Components.Pages.IndexPage.IndexPageModel);
window["App.Components.Pages.IndexPage.IndexPageModel"] = App.Components.Pages.IndexPage.IndexPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Pages.IndexPage.IndexPageModel;
"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Pages == 'undefined') App.Components.Pages = {};
if (typeof App.Components.Pages.NotFoundPage == 'undefined') App.Components.Pages.NotFoundPage = {};
App.Components.Pages.NotFoundPage.NotFoundPage = {
	name: "App.Components.Pages.NotFoundPage.NotFoundPage",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {"class":this._class_name(["not_found_page"])});
			
			/* Component 'Text' */
			let __v1 = this._c(__v0, "Runtime.Widget.Text", {"content":"Страница не найдена","class":this._class_name(["text_not_found"])});
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Pages.NotFoundPage.NotFoundPage,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Text"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".text_not_found.h-ee65{font-size: 150%;font-weight: bold;text-align: center;padding-top: 20px;padding-bottom: 20px}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Pages.NotFoundPage";
	},
	getClassName: function()
	{
		return "App.Components.Pages.NotFoundPage.NotFoundPage";
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
Runtime.rtl.defClass(App.Components.Pages.NotFoundPage.NotFoundPage);
window["App.Components.Pages.NotFoundPage.NotFoundPage"] = App.Components.Pages.NotFoundPage.NotFoundPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Pages.NotFoundPage.NotFoundPage;
"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Pages == 'undefined') App.Components.Pages = {};
if (typeof App.Components.Pages.NotFoundPage == 'undefined') App.Components.Pages.NotFoundPage = {};
App.Components.Pages.NotFoundPage.NotFoundPageModel = function()
{
	Runtime.Web.BasePageModel.apply(this, arguments);
};
App.Components.Pages.NotFoundPage.NotFoundPageModel.prototype = Object.create(Runtime.Web.BasePageModel.prototype);
App.Components.Pages.NotFoundPage.NotFoundPageModel.prototype.constructor = App.Components.Pages.NotFoundPage.NotFoundPageModel;
Object.assign(App.Components.Pages.NotFoundPage.NotFoundPageModel.prototype,
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
		this.component = "App.Components.Pages.NotFoundPage.NotFoundPage";
	},
});
Object.assign(App.Components.Pages.NotFoundPage.NotFoundPageModel, Runtime.Web.BasePageModel);
Object.assign(App.Components.Pages.NotFoundPage.NotFoundPageModel,
{
	/* ======================= Class Init Functions ======================= */
	getNamespace: function()
	{
		return "App.Components.Pages.NotFoundPage";
	},
	getClassName: function()
	{
		return "App.Components.Pages.NotFoundPage.NotFoundPageModel";
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
Runtime.rtl.defClass(App.Components.Pages.NotFoundPage.NotFoundPageModel);
window["App.Components.Pages.NotFoundPage.NotFoundPageModel"] = App.Components.Pages.NotFoundPage.NotFoundPageModel;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Pages.NotFoundPage.NotFoundPageModel;
"use strict;"
/*
 *  ThankYouPage
*/
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.Pages == 'undefined') App.Components.Pages = {};
App.Components.Pages.ThankYouPage = {
	name: "App.Components.Pages.ThankYouPage",
	extends: Runtime.Web.Component,
	methods:
	{
		render: function()
		{
			let __v = [];
			
			/* Element 'div' */
			let __v0 = this._e(__v, "div", {});
			
			/* Element 'div' */
			let __v1 = this._e(__v0, "div", {"class":this._class_name(["thank_you_page"])});
			
			/* Element 'h1' */
			let __v2 = this._e(__v1, "h1", {"class":this._class_name(["page_title"])});
			
			/* Text */
			this._t(__v2, "Ваше сообщение успешно отправлено");
			
			/* Element 'div' */
			let __v3 = this._e(__v1, "div", {"class":this._class_name(["message"])});
			
			/* Text */
			this._t(__v3, "Ожидайте, мы свяжемся с вами");
			
			return this._flatten(__v);
		},
	},
};
Object.assign(App.Components.Pages.ThankYouPage,
{
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".thank_you_page.h-1e82{text-align: center;font-size: 16px;padding-top: 100px}.page_title.h-1e82{line-height: 1.2}.message.h-1e82{margin: 0;margin-top: 1em;margin-bottom: 1em}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.Pages";
	},
	getClassName: function()
	{
		return "App.Components.Pages.ThankYouPage";
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
Runtime.rtl.defClass(App.Components.Pages.ThankYouPage);
window["App.Components.Pages.ThankYouPage"] = App.Components.Pages.ThankYouPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.Pages.ThankYouPage;
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
