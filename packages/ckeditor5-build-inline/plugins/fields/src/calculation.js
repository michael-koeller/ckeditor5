/**
 * @module calculation
 */

import Plugin from '@ckeditor/ckeditor5-core/src/plugin';

import '../theme/fields.css';

const CALCULATION = 'calculation';

export default class Calculation extends Plugin {
	static get pluginName() {
		return 'Calculation';
	}

	init() {
		const editor = this.editor;

		// Register new model element
		editor.model.schema.register( CALCULATION, {
			// Allow wherever text is allowed:
			allowWhere: '$text',
			// Declare allowed model attributes:
			allowAttributes: [ 'formula', 'alias', 'format', 'evalFormula', 'value' ],

			// Calculations will act as an inline node:
			isInline: true,
			// The inline-widget is self-contained so cannot be split by the caret and can be selected:
			isObject: true
		} );
		editor.model.schema.extend( '$text', {
			allowIn: CALCULATION
		} );

		// Convert view element -> model element
		editor.conversion.for( 'upcast' ).elementToElement( {
			view: {
				name: 'x-field',
				classes: CALCULATION
			},
			model: ( viewElement, conversionApi ) => {
				const attrs = {
					formula: viewElement.getAttribute( 'data-formula' )
				};
				if ( viewElement.hasAttribute( 'data-alias' ) ) {
					attrs.alias = viewElement.getAttribute( 'data-alias' );
				}
				if ( viewElement.hasAttribute( 'data-format' ) ) {
					attrs.format = viewElement.getAttribute( 'data-format' );
				}
				if ( viewElement.hasAttribute( 'data-evalformula' ) ) {
					attrs.evalFormula = viewElement.getAttribute( 'data-evalformula' );
				}
				if ( viewElement.hasAttribute( 'data-value' ) ) {
					attrs.value = viewElement.getAttribute( 'data-value' );
				}
				return conversionApi.writer.createElement( CALCULATION, attrs );
			}
		} );

		// Convert model element -> view element
		// Handles both situations: dataDowncast and editingDowncast
		editor.conversion.for( 'dataDowncast' ).elementToElement( {
			model: CALCULATION,
			view: ( modelElement, conversionApi ) => {
				const attrs = {
					class: CALCULATION,
					'data-formula': modelElement.getAttribute( 'formula' )
				};
				if ( modelElement.hasAttribute( 'alias' ) ) {
					attrs[ 'data-alias' ] = modelElement.getAttribute( 'alias' );
				}
				if ( modelElement.hasAttribute( 'format' ) ) {
					attrs[ 'data-format' ] = modelElement.getAttribute( 'format' );
				}
				return conversionApi.writer.createContainerElement( 'x-field', attrs );
			}
		} );

		// Convert model element -> view element
		// Handles both situations: dataDowncast and editingDowncast
		editor.conversion.for( 'editingDowncast' ).elementToElement( {
			model: CALCULATION,
			view: ( modelElement, conversionApi ) => {
				const el = conversionApi.writer.createEditableElement( 'span', {
					class: CALCULATION,
					'data-formula': modelElement.getAttribute( 'formula' ),
					title: modelElement.getAttribute( 'formula' ) +
							( modelElement.hasAttribute( 'evalFormula' ) ? ' = ' + modelElement.getAttribute( 'evalFormula' ) : '' ) +
							( modelElement.hasAttribute( 'value' ) ? ' = ' + modelElement.getAttribute( 'value' ) : '' ) +
							( modelElement.hasAttribute( 'alias' ) ? ' -> ' + modelElement.getAttribute( 'alias' ) : '' )
				} );
				conversionApi.writer.setAttribute( 'contenteditable', 'false', el );
				return el;
			}
		} );
	}
}
