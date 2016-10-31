# @jacobmarshall/interpolate

A very simple, basic, and dumb string interpolation utility

## Installation

```
$ npm install @jacobmarshall/interpolate
```

## Basic Usage

```js
import interpolate from '@jacobmarshall/interpolate';

console.log(interpolate('Hello {{message}}', {
    message: 'World'
}));

// => "Hello World"
```

## API

### interpolate (`string` string, `object|array` data [, `object` options]) `string`

Pretty self explanatory, see example above 😚