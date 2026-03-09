# Project Overview

This is BayLang project WordPress theme

## Root-level structure

- `.git/`, `.gitignore`: Git repository metadata and ignore rules.
- `.htaccess`: Global Apache configuration used by the module.
- `.vscode/`: Editor settings and rules for VS Code (includes `.htaccess`, agent/rule folders, and `settings.json`).
- `LICENSE`: License information for the package.
- `ModuleDescription.bay` & `module.json`: Top-level descriptors defining the module itself.
- `project.json`: Higher-level manifest describing the overall project structure.
- `create.zip.sh`: Helper script to package the module for distribution.
- `index.php`, `functions.php`, `style.css`: Entry point, supporting PHP helpers, and base stylesheet for the front-facing UI.

## Key directories

- **Admin/**
  - `admin.php`: Entry script for the administration interface.
  - `.htaccess`: Directory protection for admin resources.
  - `module.json`, `ModuleDescription.bay`: Admin-specific descriptors for the module.

- **Api/**
  - `.htaccess`: Protection for API endpoints. (No additional files yet.)

- **Assets/**
  - `app.js`, `admin.js`, `constructor.js`: Compiled JavaScript bundles targeting the public UI, admin UI, and constructor/editor respectively.

- **Components/**
  - `.htaccess`: Prevents direct HTTP access.
  - `Blocks/`, `Layout/`, `Pages/`: Nested component folders intended for block widgets, layout shells, and page-specific modules. (Currently empty but reserved for component files.)
  - `Routes.bay`: Routing configuration that wires components and pages into navigable views.

- **Source/**
  - `.htaccess`: Protects source assets.
  - `es6/`: Source code for JavaScript before transpilation.
  - `php/`: PHP source files that likely feed into bundled entry points or backend behaviors.

## Notes

- Separation between `Assets/` (ready-to-serve bundles) and `Source/` (compiled files) implies a build/transpilation step not tracked here.
- The `Components/` tree stores DSL-based artifacts (`.bay` files) for routes, layouts, pages, and blocks, indicating a component-first architecture.
- Dedicated admin and API folders ensure runtime and configuration boundaries.

This structure keeps runtime assets, source files, and configuration clearly separated so developers can work on individual domains (UI, admin, API, tooling) without crossing concerns.