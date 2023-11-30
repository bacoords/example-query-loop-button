<?php
/**
 * Plugin Name:       Example Query Loop Button
 * Description:       Example block extension that allows button blocks to link to permalinks and custom fields.
 * Requires at least: 6.4
 * Requires PHP:      8.0
 * Version:           0.1.0
 * Author:            bacoords
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       example-query-loop-button
 *
 * @package           create-block
 */

namespace example_query_loop_button;

use WP_HTML_Tag_Processor;

/**
 * Enqueue editor specific modifications in the Post Editor, Site Editor,
 * and Widgets Editor.
 *
 * This function enqueues the `editor.js` file found in `/src/js` and
 * adds extra dependencies depending on the current screen (post, widgets, site-editor).
 *
 * @return void
 */
function wpdev_enqueue_editor_modifications() {
	$asset_file = include plugin_dir_path( __FILE__ ) . 'build/index.asset.php';
	wp_enqueue_script( 'example-query-loop-button', plugin_dir_url( __FILE__ ) . 'build/index.js', $asset_file['dependencies'], $asset_file['version'], true );
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\wpdev_enqueue_editor_modifications' );





/**
 * Filter button blocks for possible link attributes
 *
 * @param string $block_content The block content about to be rendered.
 * @param array  $block        The full block, including name and attributes.
 * @return string
 */
function filter_button_block_render_block( $block_content, $block ) {

	if ( isset( $block['attrs']['isPostLink'] ) && 'permalink' === $block['attrs']['isPostLink'] ) {
		$p = new WP_HTML_Tag_Processor( $block_content );
		if ( $p->next_tag( 'a' ) ) {
			$p->set_attribute( 'href', get_permalink() );
			$p->set_attribute( 'rel', 'bookmark' );
			$block_content = $p->get_updated_html();
		}
	}
	if ( isset( $block['attrs']['isPostLink'] ) && 'custom_field' === $block['attrs']['isPostLink'] && isset( $block['attrs']['customFieldName'] ) ) {
		$p = new WP_HTML_Tag_Processor( $block_content );
		if ( $p->next_tag( 'a' ) ) {
			$p->set_attribute( 'href', get_post_meta( get_the_ID(), $block['attrs']['customFieldName'], true ) );
			$block_content = $p->get_updated_html();
		}
	}

	return $block_content;
}
add_filter( 'render_block_core/button', __NAMESPACE__ . '\filter_button_block_render_block', 10, 2 );
