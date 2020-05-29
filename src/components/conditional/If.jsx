
export default  props => {
    const elseChilden = props.children.filter(child=>{
        return child.type && child.type.name === 'Else';
    })[0]

    const ifChilden = props.children.filter(child=>{
        return child !== elseChilden;
    })

    if (props.test){
        return ifChilden;
    }
    else if(elseChilden){
        return elseChilden;
    }
    else{
        return false
    }
}

export const Else = props => props.children;