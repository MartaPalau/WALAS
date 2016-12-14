class Component{
  constructor(){
      this._customElements = {};
  }
 
  getComponent(name){
      return this._customElements[name];
  }
  register(component){
    var name = component.componentName();
    if(!this._customElements[name]){
        this._customElements[name] = component;
        customElements.define(name,component);       
    }    
    return this._customElements[name];
  }
}
export let Components = new Component();