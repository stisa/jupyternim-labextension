import {
  JupyterFrontEnd, JupyterFrontEndPlugin
} from '@jupyterlab/application';

import './codemirror-jupyternim';

import '../style/index.css';

/**
 * Initialization data for the extension1 extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyternim',
  autoStart: true,
  requires: [],
  activate: (app: JupyterFrontEnd) =>
  {
    app.serviceManager.ready
      .then(() => {defineJupyternim()});
  }
};

function defineJupyternim() {
  console.log('Jupyternim codemirror activated');
}


export default extension;
