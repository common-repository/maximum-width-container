<?php
/*
 * Plugin Name: Maximum width container
 * Description: An adjustable maximum width container for Gutenberg
 * Author: Webzotic
 * Author URI: https://webzotic.com/
 * Version: 1.0.0
 * License: GPLv2 or later
 */

if( !defined( 'ABSPATH' ) ) {
	exit;
}
function max_width_container() {
	wp_register_script(
        'max-width-container',
        plugins_url( 'max-width-container.js?v=' . round( rand() ), __FILE__ ),
        array( 'wp-blocks', 'wp-element' )
    );
    wp_register_style(
        'max-width-container',
        plugins_url( 'max-width-container.css?v=' . round( rand() ), __FILE__ ),
        array( 'wp-edit-blocks' )
    );
    register_block_type( 'gutenberg-blocks/width-container', array(
		'editor_script' => 'max-width-container',
		'editor_style' => 'max-width-container',
		'style' => 'max-width-container',
    ));
}
add_action( 'init', 'max_width_container' );