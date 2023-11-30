/******/ (() => {
	// webpackBootstrap
	/******/ "use strict";
	/******/ var __webpack_modules__ = {
		/***/ react:
			/*!************************!*\
  !*** external "React" ***!
  \************************/
			/***/ (module) => {
				module.exports = window["React"];

				/***/
			},

		/***/ "@wordpress/block-editor":
			/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
			/***/ (module) => {
				module.exports = window["wp"]["blockEditor"];

				/***/
			},

		/***/ "@wordpress/components":
			/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
			/***/ (module) => {
				module.exports = window["wp"]["components"];

				/***/
			},

		/***/ "@wordpress/compose":
			/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
			/***/ (module) => {
				module.exports = window["wp"]["compose"];

				/***/
			},

		/***/ "@wordpress/hooks":
			/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
			/***/ (module) => {
				module.exports = window["wp"]["hooks"];

				/***/
			},

		/***/ "@wordpress/i18n":
			/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
			/***/ (module) => {
				module.exports = window["wp"]["i18n"];

				/***/
			},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId](
			module,
			module.exports,
			__webpack_require__
		);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/compat get default export */
	/******/ (() => {
		/******/ // getDefaultExport function for compatibility with non-harmony modules
		/******/ __webpack_require__.n = (module) => {
			/******/ var getter =
				module && module.__esModule
					? /******/ () => module["default"]
					: /******/ () => module;
			/******/ __webpack_require__.d(getter, { a: getter });
			/******/ return getter;
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/define property getters */
	/******/ (() => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = (exports, definition) => {
			/******/ for (var key in definition) {
				/******/ if (
					__webpack_require__.o(definition, key) &&
					!__webpack_require__.o(exports, key)
				) {
					/******/ Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key],
					});
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ (() => {
		/******/ __webpack_require__.o = (obj, prop) =>
			Object.prototype.hasOwnProperty.call(obj, prop);
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ (() => {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = (exports) => {
			/******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, {
					value: "Module",
				});
				/******/
			}
			/******/ Object.defineProperty(exports, "__esModule", { value: true });
			/******/
		};
		/******/
	})();
	/******/
	/************************************************************************/
	var __webpack_exports__ = {};
	// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
	(() => {
		/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
		__webpack_require__.r(__webpack_exports__);
		/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
			__webpack_require__(/*! react */ "react");
		/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
			/*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
		/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__ =
			__webpack_require__(/*! @wordpress/hooks */ "@wordpress/hooks");
		/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1___default =
			/*#__PURE__*/ __webpack_require__.n(
				_wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__
			);
		/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ =
			__webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
		/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default =
			/*#__PURE__*/ __webpack_require__.n(
				_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__
			);
		/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ =
			__webpack_require__(
				/*! @wordpress/block-editor */ "@wordpress/block-editor"
			);
		/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default =
			/*#__PURE__*/ __webpack_require__.n(
				_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__
			);
		/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ =
			__webpack_require__(/*! @wordpress/components */ "@wordpress/components");
		/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default =
			/*#__PURE__*/ __webpack_require__.n(
				_wordpress_components__WEBPACK_IMPORTED_MODULE_4__
			);
		/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ =
			__webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
		/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default =
			/*#__PURE__*/ __webpack_require__.n(
				_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__
			);

		/**
		 * Add the attribute to the block.
		 * This is the attribute that will be saved to the database.
		 *
		 * @param {object} settings block settings
		 * @param {string} name block name
		 * @returns {object} modified settings
		 *
		 * @see https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/#blocks-registerblocktype
		 */
		(0, _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)(
			"blocks.registerBlockType",
			"wpdev/is-post-link",
			function (settings, name) {
				if (name !== "core/button") {
					return settings;
				}
				return {
					...settings,
					attributes: {
						...settings.attributes,
						isPostLink: {
							type: "string",
							default: "",
						},
						customFieldName: {
							type: "string",
							default: "",
						},
					},
				};
			}
		);

		/**
		 * Edit component for the block.
		 *
		 * @param {object} props block props
		 * @returns {JSX}
		 */
		function Edit(props) {
			const setIsPostLink = (value) => {
				props.setAttributes({
					isPostLink: value,
				});
			};
			const setCustomFieldName = (value) => {
				props.setAttributes({
					customFieldName: value,
				});
			};
			return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
				_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls,
				null,
				(0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
					_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody,
					{
						title: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(
							"Post Permalink"
						),
					},
					(0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
						_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow,
						null,
						(0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
							_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl,
							{
								label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(
									"Link this button to a post value?"
								),
								value: props.attributes.isPostLink,
								options: [
									{
										label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(
											"No"
										),
										value: "",
									},
									{
										label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(
											"Yes, to the permalink"
										),
										value: "permalink",
									},
									{
										label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(
											"Yes, to a custom field"
										),
										value: "custom_field",
									},
								],
								onChange: setIsPostLink,
								help: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(
									"This is mainly used for buttons inside query loops."
								),
							}
						)
					),
					"custom_field" === props.attributes.isPostLink &&
						(0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
							_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelRow,
							null,
							(0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
								_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl,
								{
									label: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(
										"Custom field name"
									),
									value: props.attributes.customFieldName,
									onChange: setCustomFieldName,
									help: (0, _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)(
										"The name of the custom field to link to."
									),
								}
							)
						)
				)
			);
		}

		/**
		 * Add the edit component to the block.
		 * This is the component that will be rendered in the editor.
		 * It will be rendered after the original block edit component.
		 *
		 * @param {function} BlockEdit Original component
		 * @returns {function} Wrapped component
		 *
		 * @see https://developer.wordpress.org/block-editor/developers/filters/block-filters/#editor-blockedit
		 */
		(0, _wordpress_hooks__WEBPACK_IMPORTED_MODULE_1__.addFilter)(
			"editor.BlockEdit",
			"wpdev/is-post-link",
			(0,
			_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.createHigherOrderComponent)(
				(BlockEdit) => {
					return (props) => {
						if (props.name !== "core/button") {
							return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
								BlockEdit,
								{
									...props,
								}
							);
						}
						return (0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(
							react__WEBPACK_IMPORTED_MODULE_0__.Fragment,
							null,
							(0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockEdit, {
								...props,
							}),
							(0, react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Edit, {
								...props,
							})
						);
					};
				}
			)
		);
	})();

	/******/
})();
//# sourceMappingURL=index.js.map
