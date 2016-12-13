import {Dom} from './dom'
export class ComponentBase extends HTMLElement{
    constructor(){
        super();
        this._patch= this.attachShadow({mode: 'open'});
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
    created(){
        Dom.patch(this.patch,this.render.bind(this));
    }
    destroy(){

    }
    changeAttribute(attr,oldValue,newValue){

    }
}
