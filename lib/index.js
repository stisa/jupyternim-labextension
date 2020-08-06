"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./codemirror-jupyternim");
require("../style/index.css");
/**
 * Initialization data for the extension1 extension.
 */
const extension = {
    id: 'jupyternim',
    autoStart: true,
    requires: [],
    activate: (app) => {
        app.serviceManager.ready
            .then(() => { defineJupyternim(); });
    }
};
function defineJupyternim() {
    console.log('Jupyternim codemirror activated');
}
exports.default = extension;
