# css_animation_demo

## How to Run

```shell
npm install
npm run dev
```

## Case Descriptions

- **Case1**: Use a timer to periodically display different images
- **Case2**: Use the [motion](https://github.com/motiondivision/motion) library to animate the spear movement
- **Case3**: Use `@keyframes`, displaying each frame as a separate image
- **Case4**: Use a merged sprite sheet with uniform frame sizes laid out horizontally
    - **spear**: spear animation via `background-position`
    - **explosion**: explosion animation via `translateX`
- **Case5**: Use a merged sprite sheet with trimming enabled during packaging
    - **spear**: spear animation via `transform` and `clip-path`
    - **explosion**: explosion animation via `transform` and `mask-image`
- **Case6**: Render Case1(explosion) 10,000 times
- **Case7**: Render Case3(explosion) 10,000 times
- **Case8**: Render Case4(explosion) 10,000 times
- **Case9**: Render Case5(explosion) 10,000 times

## Summary

- **Case4** triggers GPU acceleration and offers the best performance
- **Case5** uses the smallest image size, resulting in the smallest storage footprint 
