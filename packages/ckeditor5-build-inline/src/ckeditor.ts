/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { InlineEditor as InlineEditorBase } from '@ckeditor/ckeditor5-editor-inline';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
// import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder/';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
// import { CKBox } from '@ckeditor/ckeditor5-ckbox';
// import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
// import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
// import { Image, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image';
// import { Indent } from '@ckeditor/ckeditor5-indent';
import { Link } from '@ckeditor/ckeditor5-link';
import { List } from '@ckeditor/ckeditor5-list';
// import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
// import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';

// Add plugins
import { Subscript, Superscript } from '@ckeditor/ckeditor5-basic-styles';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { Highlight } from '@ckeditor/ckeditor5-highlight';
import { FontSize } from '@ckeditor/ckeditor5-font';

// Custom plugins
import DataField from '../plugins/fields/src/datafield';
import Property from '../plugins/fields/src/property';
import Calculation from '../plugins/fields/src/calculation';
import ContextRef from '../plugins/fields/src/contextRef';
import Dynamic from '../plugins/fields/src/dynamic';
import Whitespaces from '../plugins/whitespaces/src/whitespaces';
import CustomTableClasses from '../plugins/customtableclasses/src/customtableclasses';

export default class InlineEditor extends InlineEditorBase {
	public static override builtinPlugins = [
		Essentials,
		// UploadAdapter,
		Autoformat,
		Bold,
		Italic,
		BlockQuote,
		// CKBox,
		// CKFinder,
		// CloudServices,
		// EasyImage,
		Heading,
		// Image,
		// ImageCaption,
		// ImageStyle,
		// ImageToolbar,
		// ImageUpload,
		// Indent,
		Link,
		List,
		// MediaEmbed,
		Paragraph,
		PasteFromOffice,
		// PictureEditing,
		Table,
		TableToolbar,
		TextTransformation,

		// Add plugins
		Subscript,
		Superscript,
		Alignment,
		Highlight,
		FontSize,

		// Custom plugins
		DataField,
		Property,
		Calculation,
		ContextRef,
		Dynamic,
		Whitespaces,
		CustomTableClasses
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'heading',
				'|',
				'fontSize',
				'bold',
				'italic',
				'subscript',
				'superscript',
				'blockQuote',
				'link',
				'|',
				'alignment:justify',
				'alignment:left',
				'alignment:right',
				'alignment:center',
				'|',
				'highlight:yellowMarker',
				'highlight:pinkMarker',
				'removeHighlight',
				'|',
				'bulletedList',
				'numberedList',
				'insertTable',
				'|',
				'undo',
				'redo'
			]
		},

		/*
		image: {
			toolbar: [
				'imageStyle:inline',
				'imageStyle:block',
				'imageStyle:side',
				'|',
				'toggleImageCaption',
				'imageTextAlternative'
			]
		},
		*/
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	};
}
