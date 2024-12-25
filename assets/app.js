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
		res += Runtime.rtl.toStr("body,html{font-family: var(--widget-font-family);font-size: var(--widget-font-size);line-height: var(--widget-line-height);width: 100%;padding: 0;margin: 0}.widget_textarea.h-ee82{min-height: 200px}.form_style1.h-b6a8 .widget_button.h-8dd7{background-color: red}");
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
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.IndexPage == 'undefined') App.Components.IndexPage = {};
App.Components.IndexPage.IndexPage = {
	name: "App.Components.IndexPage.IndexPage",
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
Object.assign(App.Components.IndexPage.IndexPage,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Section","Runtime.Widget.Text"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".main_section.h-fe35{padding-top: 20px;padding-bottom: 20px;background-position: center top;background-repeat: no-repeat;background-size: cover}.page_title.h-fe35{margin-bottom: 10px}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.IndexPage";
	},
	getClassName: function()
	{
		return "App.Components.IndexPage.IndexPage";
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
Runtime.rtl.defClass(App.Components.IndexPage.IndexPage);
window["App.Components.IndexPage.IndexPage"] = App.Components.IndexPage.IndexPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.IndexPage.IndexPage;
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
"use strict;"
if (typeof App == 'undefined') App = {};
if (typeof App.Components == 'undefined') App.Components = {};
if (typeof App.Components.NotFoundPage == 'undefined') App.Components.NotFoundPage = {};
App.Components.NotFoundPage.NotFoundPage = {
	name: "App.Components.NotFoundPage.NotFoundPage",
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
Object.assign(App.Components.NotFoundPage.NotFoundPage,
{
	components: function()
	{
		return Runtime.Vector.from(["Runtime.Widget.Text"]);
	},
	css: function(vars)
	{
		var res = "";
		res += Runtime.rtl.toStr(".text_not_found.h-678e{font-size: 150%;font-weight: bold;text-align: center;padding-top: 20px;padding-bottom: 20px}");
		return res;
	},
	getNamespace: function()
	{
		return "App.Components.NotFoundPage";
	},
	getClassName: function()
	{
		return "App.Components.NotFoundPage.NotFoundPage";
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
Runtime.rtl.defClass(App.Components.NotFoundPage.NotFoundPage);
window["App.Components.NotFoundPage.NotFoundPage"] = App.Components.NotFoundPage.NotFoundPage;
if (typeof module != "undefined" && typeof module.exports != "undefined") module.exports = App.Components.NotFoundPage.NotFoundPage;
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
		return Runtime.Vector.from([Runtime.Web.Hooks.SetupLayout.hook(Runtime.Map.from({"default":"App.Components.Layout.DefaultLayoutModel"})),Runtime.Web.Hooks.Components.hook(Runtime.Vector.from(["App.Components.Blocks.CSS"]))]);
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
