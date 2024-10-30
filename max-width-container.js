wp.blocks.registerBlockType( 'gutenberg-blocks/max-width-container', {
    title: 'Max width container',
    category: 'layout',
    attributes: {
        container_width: {
            type: 'number',
            default: 1920
        }
    },
    edit: function( props ) {
        return (
            wp.element.createElement( wp.element.Fragment, null,
                wp.element.createElement( wp.editor.InspectorControls, null,
                    wp.element.createElement( wp.components.RangeControl,
                        {
                            label: 'Adjust the maximum width of the container',
                            min: 0,
                            max: 1920,
                            value: props.attributes.container_width,
                            onChange: function( value ){
                                props.setAttributes( { container_width: value } );
                            }
                        }
                    )
                ),
                wp.element.createElement( 'div', {
                    style: { maxWidth: props.attributes.container_width + 'px', borderTop: '10px solid lightgray' },
                    className: 'wp-block-max-width-container'
                },
                    wp.element.createElement( wp.editor.InnerBlocks )
                )
            )
        );
    },
    save: function( props ) {
        return (
            wp.element.createElement( 'div', {
                style: { maxWidth: props.attributes.container_width + 'px' }
            },
                wp.element.createElement( wp.editor.InnerBlocks.Content )
            )
        )
    }
});