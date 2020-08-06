# jupyternim-labextension

A Jupyter Lab extension to provide syntax highlight for Nim and Jupyternim.

### Installation

```bash
jupyter labextension install jupyternim-labextension
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
# Clone the repo to your local environment
cd jupyternim-labextension
# Install dependencies
npm install
# Install your development version of the extension
jupyter labextension install .
```

You can run JupyterLab in watch mode to watch for changes in the extension's source and automatically rebuild.

```bash
# Run jupyterlab in watch mode
jupyter lab --watch
```

### Uninstall

```bash
jupyter labextension uninstall jupyternim-labextension
```

