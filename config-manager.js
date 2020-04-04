let configs = new Map();
configs.set('default', {
    top: 10,
    dimensionClass: 'popup-600-800',
    displayCloseButton: true,
    coverBackground: 'lightgrey',
    coverOpacity: '95%',
    coverCloseOnClick: true
});
configs.set('blank_300_300', {
    top: 10,
    dimensionClass: 'popup-300-300',
    displayCloseButton: false,
    coverBackground: 'white',
    coverOpacity: '100%',
    coverCloseOnClick: false
});
configs.set('blank_400_400', {
    top: 20,
    width: '400px',
    height: '400px',
    displayCloseButton: true,
    coverBackground: 'white',
    coverOpacity: '90%',
    coverCloseOnClick: false
});


module.exports = {
    getConfig: name => configs.get(name),
    addConfig: (name, config) => configs.set(name, config)
}