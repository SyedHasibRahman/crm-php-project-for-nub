
(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory();
  else if (typeof define === 'function' && define.amd)
    define([], factory);
  else {
    var a = factory();
    for (var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
  }
})(window, function () {
  return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
        /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
        /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
      /******/
}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/
}
      /******/
};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
      /******/
};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
      /******/
};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
    /******/
})
/************************************************************************/
/******/({

/***/ 38:
/***/ (function (module, exports) {

        (function ($) {
          $.extend($.summernote.lang, {
            'sk-SK': {
              font: {
                bold: 'Tu??n??',
                italic: 'Kurz??va',
                underline: 'Pod??iarknutie',
                clear: 'Odstr??ni?? ??t??l p??sma',
                height: 'V????ka riadku',
                strikethrough: 'Pre??iarknut??',
                subscript: 'Subscript',
                superscript: 'Superscript',
                size: 'Ve??kos?? p??sma'
              },
              image: {
                image: 'Obr??zok',
                insert: 'Vlo??i?? obr??zok',
                resizeFull: 'P??vodn?? ve??kos??',
                resizeHalf: 'Polovi??n?? ve??kos??',
                resizeQuarter: '??tvrtinov?? ve??kos??',
                floatLeft: 'Umiestni?? do??ava',
                floatRight: 'Umiestni?? doprava',
                floatNone: 'Bez zarovnania',
                shapeRounded: 'Shape: Rounded',
                shapeCircle: 'Shape: Circle',
                shapeThumbnail: 'Shape: Thumbnail',
                shapeNone: 'Shape: None',
                dragImageHere: 'Pretiahnu?? sem obr??zok',
                dropImage: 'Drop image or Text',
                selectFromFiles: 'Vybra?? s??bor',
                maximumFileSize: 'Maximum file size',
                maximumFileSizeError: 'Maximum file size exceeded.',
                url: 'URL obr??zku',
                remove: 'Remove Image',
                original: 'Original'
              },
              video: {
                video: 'Video',
                videoLink: 'Odkaz videa',
                insert: 'Vlo??i?? video',
                url: 'URL videa?',
                providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion alebo Youku)'
              },
              link: {
                link: 'Odkaz',
                insert: 'Vytvori?? odkaz',
                unlink: 'Zru??i?? odkaz',
                edit: 'Upravi??',
                textToDisplay: 'Zobrazovan?? text',
                url: 'Na ak?? URL adresu m?? tento odkaz vies???',
                openInNewWindow: 'Otvori?? v novom okne'
              },
              table: {
                table: 'Tabu??ka',
                addRowAbove: 'Add row above',
                addRowBelow: 'Add row below',
                addColLeft: 'Add column left',
                addColRight: 'Add column right',
                delRow: 'Delete row',
                delCol: 'Delete column',
                delTable: 'Delete table'
              },
              hr: {
                insert: 'Vlo??it vodorovn?? ??iaru'
              },
              style: {
                style: '??t??l',
                p: 'Norm??lny',
                blockquote: 'Cit??cia',
                pre: 'K??d',
                h1: 'Nadpis 1',
                h2: 'Nadpis 2',
                h3: 'Nadpis 3',
                h4: 'Nadpis 4',
                h5: 'Nadpis 5',
                h6: 'Nadpis 6'
              },
              lists: {
                unordered: 'Odr????kov?? zoznam',
                ordered: '????seln?? zoznam'
              },
              options: {
                help: 'Pomoc',
                fullscreen: 'Cel?? obrazovka',
                codeview: 'HTML k??d'
              },
              paragraph: {
                paragraph: 'Odsek',
                outdent: 'Zv??????i?? odsadenie',
                indent: 'Zmen??i?? odsadenie',
                left: 'Zarovna?? do??ava',
                center: 'Zarovna?? na stred',
                right: 'Zarovna?? doprava',
                justify: 'Zarovna?? obojstranne'
              },
              color: {
                recent: 'Aktu??lna farba',
                more: 'Dal??ie farby',
                background: 'Farba pozadia',
                foreground: 'Farba p??sma',
                transparent: 'Prieh??adnos??',
                setTransparent: 'Nastavi?? prieh??adnos??',
                reset: 'Obnovi??',
                resetToDefault: 'Obnovi?? prednastaven??'
              },
              shortcut: {
                shortcuts: 'Kl??vesov?? skratky',
                close: 'Zavrie??',
                textFormatting: 'Form??tovanie textu',
                action: 'Akcia',
                paragraphFormatting: 'Form??tovanie odseku',
                documentStyle: '??t??l dokumentu'
              },
              help: {
                'insertParagraph': 'Insert Paragraph',
                'undo': 'Undoes the last command',
                'redo': 'Redoes the last command',
                'tab': 'Tab',
                'untab': 'Untab',
                'bold': 'Set a bold style',
                'italic': 'Set a italic style',
                'underline': 'Set a underline style',
                'strikethrough': 'Set a strikethrough style',
                'removeFormat': 'Clean a style',
                'justifyLeft': 'Set left align',
                'justifyCenter': 'Set center align',
                'justifyRight': 'Set right align',
                'justifyFull': 'Set full align',
                'insertUnorderedList': 'Toggle unordered list',
                'insertOrderedList': 'Toggle ordered list',
                'outdent': 'Outdent on current paragraph',
                'indent': 'Indent on current paragraph',
                'formatPara': 'Change current block\'s format as a paragraph(P tag)',
                'formatH1': 'Change current block\'s format as H1',
                'formatH2': 'Change current block\'s format as H2',
                'formatH3': 'Change current block\'s format as H3',
                'formatH4': 'Change current block\'s format as H4',
                'formatH5': 'Change current block\'s format as H5',
                'formatH6': 'Change current block\'s format as H6',
                'insertHorizontalRule': 'Insert horizontal rule',
                'linkDialog.show': 'Show Link Dialog'
              },
              history: {
                undo: 'Krok vzad',
                redo: 'Krok dopredu'
              },
              specialChar: {
                specialChar: 'SPECIAL CHARACTERS',
                select: 'Select Special characters'
              }
            }
          });
        })(jQuery);

        /***/
})

    /******/
});
});