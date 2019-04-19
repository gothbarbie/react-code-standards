# React Code Standards

## Naming

1. For event-handling methods, use prefix "on", for example: "onSubmit", "onClick" to describe what triggers the method.

2. Never use reserved words such as `export`, `for`, `const`, `let`, `var`, `await`, `async` as they will cause conflicts.

## Gotcha's

### prevState

`setState` is smart enough to merge whatever state you want to change, so unlike a normal object you don't have to destruct `prevState`. Only the mentioned property will be affected by `setState`.

However, when you change based on an existing state value (inverting a boolean for example), always refer to previous value with `prevState`, never `this.state`.

**Correct**:

```
this.setState(prevState => ({
  isOpen: !prevState.isOpen,
}))
```

**Incorrect**:

```
this.setState(prevState => ({
  ...prevState,
  isOpen: !this.state.isOpen,
}))
```

### Click Events

Don't use `click`-events (or `blur`, or `focus` etc.) on anything but the `button` element.

Older browsers will not work well with clickable `div`s and also you can't navigate using the keyboard unless the elements are focusable which only buttons are.

## Destructuring

## Semantic HTML

With HTML5 there was a bunch of alternatives to `div` added, such as `section`, `article`, `header`, and `footer` added. Using these makes it easier to identify component in the final HTML.

## Reducers

Avoid nested reducers. It makes for more complicated look-ups and unnecessary complexity.

**Correct**:

```
const initialState = {
  // props goes here
}
```

**Incorrect**:

```
const initialState = {
  nameOfReducer:  {
    // props goes here
  }
}
```

The reason is that when you add the reducer to the list of reducers, you will already have the name of the root of the reducer as the first level. You don't need an additional level on top of that.

If you plan on adding several objects to one reducer, you should probably **create a separate reducer instead**.
