/**
 * redirect router in function (not in exact component)
 * @param {Component} props
 * @param {String} path
 */
export const redirectRouter = (props, path) => {
  props.history.push(path);
};