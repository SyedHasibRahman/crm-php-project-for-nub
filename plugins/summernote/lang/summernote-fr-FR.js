
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
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
    /******/
})
/************************************************************************/
/******/({

/***/ 19:
/***/ (function (module, exports) {

        (function ($) {
          $.extend($.summernote.lang, {
            'fr-FR': {
              font: {
                bold: 'Gras',
                italic: 'Italique',
                underline: 'Soulign??',
                clear: 'Effacer la mise en forme',
                height: 'Interligne',
                name: 'Famille de police',
                strikethrough: 'Barr??',
                superscript: 'Exposant',
                subscript: 'Indice',
                size: 'Taille de police'
              },
              image: {
                image: 'Image',
                insert: 'Ins??rer une image',
                resizeFull: 'Taille originale',
                resizeHalf: 'Redimensionner ?? 50 %',
                resizeQuarter: 'Redimensionner ?? 25 %',
                floatLeft: 'Align?? ?? gauche',
                floatRight: 'Align?? ?? droite',
                floatNone: 'Pas d\'alignement',
                shapeRounded: 'Forme: Rectangle arrondi',
                shapeCircle: 'Forme: Cercle',
                shapeThumbnail: 'Forme: Vignette',
                shapeNone: 'Forme: Aucune',
                dragImageHere: 'Faites glisser une image ou un texte dans ce cadre',
                dropImage: 'Lachez l\'image ou le texte',
                selectFromFiles: 'Choisir un fichier',
                maximumFileSize: 'Taille de fichier maximale',
                maximumFileSizeError: 'Taille maximale du fichier d??pass??e',
                url: 'URL de l\'image',
                remove: 'Supprimer l\'image',
                original: 'Original'
              },
              video: {
                video: 'Vid??o',
                videoLink: 'Lien vid??o',
                insert: 'Ins??rer une vid??o',
                url: 'URL de la vid??o',
                providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion ou Youku)'
              },
              link: {
                link: 'Lien',
                insert: 'Ins??rer un lien',
                unlink: 'Supprimer un lien',
                edit: 'Modifier',
                textToDisplay: 'Texte ?? afficher',
                url: 'URL du lien',
                openInNewWindow: 'Ouvrir dans une nouvelle fen??tre'
              },
              table: {
                table: 'Tableau',
                addRowAbove: 'Ajouter une ligne au-dessus',
                addRowBelow: 'Ajouter une ligne en dessous',
                addColLeft: 'Ajouter une colonne ?? gauche',
                addColRight: 'Ajouter une colonne ?? droite',
                delRow: 'Supprimer la ligne',
                delCol: 'Supprimer la colonne',
                delTable: 'Supprimer le tableau'
              },
              hr: {
                insert: 'Ins??rer une ligne horizontale'
              },
              style: {
                style: 'Style',
                p: 'Normal',
                blockquote: 'Citation',
                pre: 'Code source',
                h1: 'Titre 1',
                h2: 'Titre 2',
                h3: 'Titre 3',
                h4: 'Titre 4',
                h5: 'Titre 5',
                h6: 'Titre 6'
              },
              lists: {
                unordered: 'Liste ?? puces',
                ordered: 'Liste num??rot??e'
              },
              options: {
                help: 'Aide',
                fullscreen: 'Plein ??cran',
                codeview: 'Afficher le code HTML'
              },
              paragraph: {
                paragraph: 'Paragraphe',
                outdent: 'Diminuer le retrait',
                indent: 'Augmenter le retrait',
                left: 'Aligner ?? gauche',
                center: 'Centrer',
                right: 'Aligner ?? droite',
                justify: 'Justifier'
              },
              color: {
                recent: 'Derni??re couleur s??lectionn??e',
                more: 'Plus de couleurs',
                background: 'Couleur de fond',
                foreground: 'Couleur de police',
                transparent: 'Transparent',
                setTransparent: 'D??finir la transparence',
                reset: 'Restaurer',
                resetToDefault: 'Restaurer la couleur par d??faut'
              },
              shortcut: {
                shortcuts: 'Raccourcis',
                close: 'Fermer',
                textFormatting: 'Mise en forme du texte',
                action: 'Action',
                paragraphFormatting: 'Mise en forme des paragraphes',
                documentStyle: 'Style du document',
                extraKeys: 'Touches suppl??mentaires'
              },
              help: {
                'insertParagraph': 'Ins??rer paragraphe',
                'undo': 'D??faire la derni??re commande',
                'redo': 'Refaire la derni??re commande',
                'tab': 'Tabulation',
                'untab': 'Tabulation arri??re',
                'bold': 'Mettre en caract??re gras',
                'italic': 'Mettre en italique',
                'underline': 'Mettre en soulign??',
                'strikethrough': 'Mettre en texte barr??',
                'removeFormat': 'Nettoyer les styles',
                'justifyLeft': 'Aligner ?? gauche',
                'justifyCenter': 'Centrer',
                'justifyRight': 'Aligner ?? droite',
                'justifyFull': 'Justifier ?? gauche et ?? droite',
                'insertUnorderedList': 'Basculer liste ?? puces',
                'insertOrderedList': 'Basculer liste ordonn??e',
                'outdent': 'Diminuer le retrait du paragraphe',
                'indent': 'Augmenter le retrait du paragraphe',
                'formatPara': 'Changer le paragraphe en cours en normal (P)',
                'formatH1': 'Changer le paragraphe en cours en ent??te H1',
                'formatH2': 'Changer le paragraphe en cours en ent??te H2',
                'formatH3': 'Changer le paragraphe en cours en ent??te H3',
                'formatH4': 'Changer le paragraphe en cours en ent??te H4',
                'formatH5': 'Changer le paragraphe en cours en ent??te H5',
                'formatH6': 'Changer le paragraphe en cours en ent??te H6',
                'insertHorizontalRule': 'Ins??rer s??paration horizontale',
                'linkDialog.show': 'Afficher fen??tre d\'hyperlien'
              },
              history: {
                undo: 'Annuler la derni??re action',
                redo: 'Restaurer la derni??re action annul??e'
              },
              specialChar: {
                specialChar: 'Caract??res sp??ciaux',
                select: 'Choisir des caract??res sp??ciaux'
              }
            }
          });
        })(jQuery);

        /***/
})

    /******/
});
});