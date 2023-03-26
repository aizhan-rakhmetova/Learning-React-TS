import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string;
    collapsed?: boolean;
}

// Условный рендеринг (можно еще {props.collapsed===false && <AccordionBody/> })
function UncontrolledAccordion(props: AccordionPropsType){
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div>
            <AccordionTitle title = {props.titleValue} onClick={()=>{setCollapsed(!collapsed)}} />
            {collapsed ? <AccordionBody/> : '' }
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
    title: string;
    onClick: ()=>void
}
function AccordionTitle(props: AccordionTitlePropsType) {
    return (
            <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
    );
}

export default UncontrolledAccordion;