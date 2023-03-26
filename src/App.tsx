import React, {useState} from 'react';
import Accordion from "./components/Accordion/Accordion";
import './App.css';
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(4);
    const [accordionCollapsedValue, setAccordionCollapsedValue ] = useState<boolean>(false);
    return (
        <div>
            {/*<PageTitle title={"This is App Title"}/>*/}
            {/*<PageTitle title={"This is the second App Title"}/>*/}
            {/*Статья 1*/}
            {/*<Accordion titleValue = {"Menu"} collapsed = {true}/>*/}
            <UncontrolledAccordion titleValue={"Uncontrolled Menu"}/>
            <Accordion titleValue = {"Menu"}
                       collapsed = {accordionCollapsedValue}
                       onChange={()=>{setAccordionCollapsedValue(!accordionCollapsedValue)}}/>

            <UncontrolledRating/>
            <Rating value={ratingValue}
                    onClick={setRatingValue}/>
            {/*Статья 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title: string;
}

function PageTitle (props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;


let a = {
    name: "Dima", 
    age: 10, 
    address: {
        city: "Minsk",
        country: "Belarus"
    }
};

console.log(a.address.country);

let b = "Minsk";
// b=10; we cannot write this way 

let users = [
    {
        name: "Dima",
        age: 10, 
        address:{
            city: "Minsk", 
            country: "Belarus"
        }
    }
]

console.log(users[0].address.city);


let c: Array<number| string>;
c = [1,2,3];
c=["gf", "Fg"];