"use strict";
var GenericDlgComponent = (function () {
    function GenericDlgComponent() {
    }
    Object.defineProperty(GenericDlgComponent.prototype, "titleLabel", {
        /* ------------------ */
        /*  getter / setter   */
        /* ------------------ */
        get: function () { return this._titleLabel; },
        set: function (_lbl) {
            if (_lbl)
                this._titleLabel = _lbl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericDlgComponent.prototype, "buttonOneLabel", {
        get: function () { return this._lblBtnOne; },
        set: function (_lbl) {
            if (_lbl)
                this._lblBtnOne = _lbl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericDlgComponent.prototype, "buttonTwoLabel", {
        get: function () { return this._lblBtnTwo; },
        set: function (_lbl) {
            if (_lbl)
                this._lblBtnTwo = _lbl;
        },
        enumerable: true,
        configurable: true
    });
    /* -------------- */
    /*  util methods  */
    /* -------------- */
    /**
     *  return the html form
     */
    GenericDlgComponent.prototype.getForm = function (_element) {
        if (this._form == null) {
            this._form = _element.nativeElement.querySelector('form');
        }
        return this._form;
    };
    /**
     *  return the html div representing the dialog
     */
    GenericDlgComponent.prototype.getDlg = function (_element, _id) {
        if (this._dlg == null) {
            this._dlg = _element.nativeElement.querySelector('#' + _id);
        }
        return this._dlg;
    };
    /**
     *  return the html component by the given id
     */
    GenericDlgComponent.prototype.getHtmlComponent = function (_element, _id) {
        return _element.nativeElement.querySelector('#' + _id);
    };
    /**
     *  STATIC method to show the dialog
     */
    GenericDlgComponent.showDlg = function (_e, _renderer) {
        _renderer.addClass(_e, 'show');
        _renderer.setStyle(_e, 'display', 'block');
    };
    /**
     *  STATIC method to hide the dialog
     */
    GenericDlgComponent.hideDlg = function (_e, _renderer) {
        _renderer.removeClass(_e, 'show');
        _renderer.setStyle(_e, 'display', "none");
    };
    return GenericDlgComponent;
}());
exports.GenericDlgComponent = GenericDlgComponent;
//# sourceMappingURL=generic.dlg.component.js.map