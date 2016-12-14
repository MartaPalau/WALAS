import {DOM} from './dom';

export class ComponentBase extends HTMLElement {
    constructor(){
        super();
        this._patch= this.attachShadow({mode: 'closed'});       
    }   
    get patch(){
        return this._patch;
    }
    connectedCallback(){
         this.created();
    }
    disconnectedCallback(){
        this.destroy();
    }
    attributeChangedCallback(attr,oldValue,newValue){
        this.changeAttribute(attr,oldValue,newValue);
    }
    render(){

    }
    refresh(){
        var render = this.render.call(this,null);
        DOM.patch(this.patch,render);
    }
    created(){
        this.refresh();
    }
    destroy(){

    }
    changeAttribute(){

    }
}
