# jupyternim-labextension
Jupyter lab extension for nim/jupyternim.  
Provides syntax highlighting in Jupyter Lab codemirror editor for nim files.

## Installation

```bash
jupyter labextension install nim_labextension
```

## Development

For a development install (requires npm version 4 or later), do the following in the repository directory:

```bash
npm install
npm run build
jupyter labextension link .
```

To rebuild the package and the JupyterLab app:

```bash
npm run build
jupyter lab build
```

