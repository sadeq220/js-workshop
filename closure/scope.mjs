let x = 5; // global scoped variable
export default function init(){
    let y = 6; // local variable with function-scope
    return function() {
        return x + y;// this function has access to its outer scopes
    }
}
const initFunction = init();
console.log(initFunction());