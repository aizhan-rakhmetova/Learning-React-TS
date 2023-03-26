import React from "react";

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: ()=>void
}

// Условный рендеринг (можно еще {props.collapsed===false && <AccordionBody/> })
function Accordion(props: AccordionPropsType){
    return (
        <div>
            <AccordionTitle title = {props.titleValue}
                            onChange={props.onChange}
                            collapsed = {props.collapsed}
            />
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}
// function Accordion(props: AccordionPropsType) {
//     console.log("Accordion rendered");
//     if(props.collapsed === true){
//         return (
//             <div>
//                 <AccordionTitle title = {props.titleValue} />
//                 <AccordionBody/>
//             </div>
//         );
//     } else{
//         return (
//             <div>
//                 <AccordionTitle title = {props.titleValue} />
//             </div>
//         );
//     }
//
// }

type AccordionTitlePropsType = {
    title: string
    onChange: ()=>void
    collapsed: boolean
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.onChange()}}>{props.title}</h3>

    )
}
function AccordionBody() {
    return (
            <ul>
                <li>1 </li>
                <li>2</li>
                <li>3</li>
            </ul>
    );
}

export default Accordion;