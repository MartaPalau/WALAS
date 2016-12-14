import { patch, elementOpen, elementClose, text, elementVoid } from 'incremental-dom';

function createEvents() {
    var eventName = /on[A-Z]/;
    var element = elementOpen.apply(null, [...arguments]);
    Object.keys(element)
        .filter((event) => eventName.test(event))
        .forEach((event) => {
            element.addEventListener(event.replace('on', '').toLowerCase(), element[event]);
        });
}
function getTextNode(text) {
    if (!Array.isArray(text)) {
        return null;
    }
    return text
        .filter((item) => item && typeof item !== 'function')
        .join("");
}
function createChilds(childs) {
    if (childs && Array.isArray(childs)) {
        childs
            .filter(child => typeof child === 'function')
            .forEach(child => child());
    }
}
function normalizeAttrs(attrs){
  var _attrs =[];
  if(!attrs || typeof attrs !== "object"){
      return null;
  }
  Object.keys(attrs).forEach((attr)=>{
      _attrs.push(attr),
      _attrs.push(attrs[attr]);
  });
  return _attrs;
}
function create() {
    var args = [...arguments],
        name = args[0],
        attrs = normalizeAttrs(args[1]),
        nextArgs = args.slice(2),
        text = getTextNode(nextArgs);

    this.open(name, null, attrs);
    if (text) {
        this.text(text);
    }
    createChilds(nextArgs);
    this.close(name);

}
export const Dom = {
    patch: patch,
    open: createEvents,
    close: elementClose,
    void: elementVoid,
    text: text,
    create: create,
    INCREMENTALDATA: '__incrementalDOMData'
}