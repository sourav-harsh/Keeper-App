import React, {useEffect, useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
const CACHE_KEY = "keeper_items";

function App() {
    const [inputText, setinputText] = useState({
        title: "",
        content: "",
    });
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems();
    }, []);

    useEffect((items) => {
        storeItems(items);
    }, [items]);

    function handleChange(event) {
        const {name, value} = event.target;
        setinputText((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }

    function addItems(event) {
        setItems((prev) => {
            return [...prev, inputText];
        });
        setinputText({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    function storeItems(_items) {
        localStorage.setItem(CACHE_KEY, JSON.stringify(items));
    }

    function getItems() {
        const cacheItems = localStorage.getItem(CACHE_KEY);
        if (cacheItems === null || cacheItems === 'undefined') return;
        console.log(cacheItems);
        const jsonItems = JSON.parse(cacheItems);
        setItems(jsonItems);
    }

    function deleteItem(id) {
        setItems((prev) => {
            return prev.filter((items, index) => {
                return index !== id;
            });
        });
    }

    return (
        <>
            <Header/>
            <CreateArea change={handleChange} add={addItems} value={inputText}/>
            {items.map((test, index) => (
                <Note
                    key={index}
                    id={index}
                    title={test.title}
                    content={test.content}
                    onChecked={deleteItem}
                />
            ))}
            <Footer/>
        </>
    );
}

export default App;
