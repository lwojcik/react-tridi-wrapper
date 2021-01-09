# react-tridi-wrapper

[![npm (latest)](https://img.shields.io/npm/v/react-tridi-wrapper/latest.svg)](https://www.npmjs.com/package/react-tridi)
[![Build status](https://ci.appveyor.com/api/projects/status/mc374b3atvv6026q/branch/master?svg=true)](https://ci.appveyor.com/project/lwojcik/react-wrapper/branch/master)
[![codecov](https://codecov.io/gh/lukemnet/react-tridi/branch/master/graph/badge.svg?token=D3DW3W2JZP)](https://codecov.io/gh/lukemnet/react-wrapper)

React component wrapper for embedding 360-degree 3D image viewers with [Tridi](https://tridi.lukem.net/).

Note that this is a thin wrapper for an original library and it may not offer all functionality. For a first-party React component check out [react-tridi by Tuan Pham](https://www.npmjs.com/package/react-tridi).

## Install

```
npm install --save react-tridi-wrapper
```

## Usage

Example:

```javascript
import Tridi from 'react-tridi-wrapper';

function App() {
  const options = {
    element: '.tridi-basic',
    location: '/images/white',
    format: 'jpg',
    count: 36,
  };

  return (
    <div className="App">
      <Tridi options={options} />
    </div>
  );
}
```

## Contributions

Contributions of any kind are welcome.

You can contribute to react-tridi by:

* submiting bug reports or feature suggestions
* improving documentation
* submitting pull requests

Before contributing be sure to read [Contributing Guidelines](https://github.com/lukemnet/react-tridi-wrapper/blob/master/CONTRIBUTING.md) and [Code of Conduct](https://github.com/lukemnet/react-tridi-wrapper/blob/master/CODE_OF_CONDUCT.md).

## Contributors

To all who contribute code, improve documentation, submit issues or feature requests - thank you for making react-tridi-wrapper even better!

We maintain an [AUTHORS](https://github.com/lukemnet/react-tridi-wrapper/blob/master/AUTHORS) file where we keep a list of all project contributors. Please consider adding your name there with your next PR.

## License

Code is available under MIT license. See [LICENSE](https://raw.githubusercontent.com/lukemnet/react-tridi-wrapper/master/LICENSE) for more information.
