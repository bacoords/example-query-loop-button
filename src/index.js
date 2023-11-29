import { addFilter } from "@wordpress/hooks";
import { createHigherOrderComponent } from "@wordpress/compose";
import { InspectorControls } from "@wordpress/block-editor";
import {
	SelectControl,
	TextControl,
	PanelBody,
	PanelRow,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";

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
addFilter(
	"blocks.registerBlockType",
	"ponderosa/is-post-link",
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
	},
);

/**
 * Edit component for the block.
 *
 * @param {object} props block props
 * @returns {JSX}
 */
function Edit(props) {
	const setIsPostLink = (value) => {
		props.setAttributes({ isPostLink: value });
	};

	const setCustomFieldName = (value) => {
		props.setAttributes({ customFieldName: value });
	};

	return (
		<InspectorControls>
			<PanelBody title={__("Post Permalink")}>
				<PanelRow>
					<SelectControl
						label={__("Link this button to a post value?")}
						value={props.attributes.isPostLink}
						options={[
							{ label: __("No"), value: "" },
							{ label: __("Yes, to the permalink"), value: "permalink" },
							{ label: __("Yes, to a custom field"), value: "custom_field" },
						]}
						onChange={setIsPostLink}
						help={__("This is mainly used for buttons inside query loops.")}
					/>
				</PanelRow>
				{"custom_field" === props.attributes.isPostLink && (
					<PanelRow>
						<TextControl
							label={__("Custom field name")}
							value={props.attributes.customFieldName}
							onChange={setCustomFieldName}
							help={__("The name of the custom field to link to.")}
						/>
					</PanelRow>
				)}
			</PanelBody>
		</InspectorControls>
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
addFilter(
	"editor.BlockEdit",
	"ponderosa/is-post-link",
	createHigherOrderComponent((BlockEdit) => {
		return (props) => {
			if (props.name !== "core/button") {
				return <BlockEdit {...props} />;
			}

			return (
				<>
					<BlockEdit {...props} />
					<Edit {...props} />
				</>
			);
		};
	}),
);
