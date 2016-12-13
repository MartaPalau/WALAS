import {Dom} from './dom';
export const bootstrap =function(element,component){
   Dom.patch(element,function(){
       let name = component.componentName();
       Dom.void(name);       
   });
}