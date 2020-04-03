let util = require('./util');
let config = require('./config');

const containerTemplate = document.createElement('template');
containerTemplate.innerHTML = /*html*/`
<div data-key="backgroundCover" style="display: none;"></div>
<div data-key="popup" class="popup" style="display: none;">
    <div data-key="popupContent" style="display: none;">
        <div data-key="popupTopBar" style="visibility: hidden;">
            <svg height="20" width="20">
                <line x1="0" y1="0" x2="20" y2="20" style="stroke:darkblue;stroke-width:2" />
                <line x1="0" y1="20" x2="20" y2="0" style="stroke:darkblue;stroke-width:2" />
            </svg>
        </div>
        <div data-key="popupBody">
        </div>
    </div>
</div>
`;

class PopupWindow extends HTMLElement {

    constructor() {
        super();
        this.close = this.close.bind(this);
        this.closeBackgroundCover = this.closeBackgroundCover.bind(this);
    }

    static get observedAttributes() {
        return ['config-name'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'config-name':
                console.log(config);
                this.config = config[newValue];
                break;
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.children.length > 0) {
            // Container
            let containerNode = document.importNode(containerTemplate.content, true);
            this.appendChild(containerNode);

            // Content
            let contentTemplate = this.querySelector('template');
            let contentNode = document.importNode(contentTemplate.content, true);
            this.querySelector('[data-key=popupBody]').appendChild(contentNode);
        }
    }

    async open() {
        this.close();
        this.applyBackgroundCover();
        await this.displayPopup();
        this.displayPopupContent();
    }

    async displayPopup() {
        const popup = this.querySelector('[data-key=popup]');
        popup.style.top = (window.pageYOffset + 50) + "px";
        popup.style.display = 'block';
        await util.sleep(50);
        popup.classList.add(this.config.dimensionClass);
        await util.sleep(300);
    }

    displayPopupContent() {
        const popupContent = this.querySelector('[data-key=popupContent]');
        const popupTopBar = this.querySelector('[data-key=popupTopBar]');
        popupContent.style.display = 'block';
        if (this.config.displayCloseButton) {
            popupTopBar.style.visibility = 'visible';
            this.querySelector('svg').addEventListener('click', this.close);
        }
    }

    applyBackgroundCover() {
        const cover = this.querySelector('[data-key=backgroundCover]');
        cover.style.display = 'block';
        cover.style.background = this.config.coverBackground;
        cover.style.opacity = this.config.coverOpacity;
        if (this.config.coverCloseOnClick) {
            cover.addEventListener('click', this.close);
        }
    }

    close() {
        const popup = this.querySelector('[data-key=popup]');
        const popupContent = this.querySelector('[data-key=popupContent]');
        const popupTopBar = this.querySelector('[data-key=popupTopBar]');
        popup.classList.remove(this.config && this.config.dimensionClass);
        popup.style.display = 'none';
        popupContent.style.display = 'none';
        popupTopBar.style.visibility = 'hidden';
        this.querySelector('svg').removeEventListener('click', this.close);
        this.closeBackgroundCover();
    }

    closeBackgroundCover() {
        const cover = this.querySelector('[data-key=backgroundCover]');
        cover.style.display = "none";
        cover.removeEventListener('click', this.close);
    }
}

window.customElements.define('popup-window', PopupWindow);

module.exports = PopupWindow;