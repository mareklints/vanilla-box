const POPUP_CONF_DEFAULT = {
    dimensionClass: 'popup-600-800',
    displayCloseButton: true,
    coverBackground: 'darkgrey',
    coverOpacity: '90%',
    coverCloseOnClick: true
};

const POPUP_CONF_BLANK_300_300 = {
    dimensionClass: 'popup-300-300',
    displayCloseButton: false,
    coverBackground: 'white',
    coverOpacity: '100%',
    coverCloseOnClick: false
};

const POPUP_CONF_300_300 = {
    dimensionClass: 'popup-300-300',
    displayCloseButton: true,
    coverBackground: 'darkgrey',
    coverOpacity: '90%',
    coverCloseOnClick: true
};

const POPUP_CONF_BLANK_600_800 = {
    dimensionClass: 'popup-600-800',
    displayCloseButton: false,
    coverBackground: 'white',
    coverOpacity: '100%',
    coverCloseOnClick: false
};

module.exports.config = {
    POPUP_CONF_DEFAULT,
    POPUP_CONF_BLANK_300_300,
    POPUP_CONF_300_300,
    POPUP_CONF_BLANK_600_800
};