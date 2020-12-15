
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import "./ListSurgeon.css";



const ListSurgeon = () => {
    const url = "http://localhost:8000/api/getinfo";
    const [listOffers, setListOffers] = useState([]);
    const [isShowing, setIsShowing] = useState([]);
    const sortSurgeon = (data) => {
        var sortTable = data;

        sortTable
        .sort((a,b) => a.interventionCount < b.interventionCount ? 1 : -1)
        
        return sortTable;
    }
 
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(url)
            setListOffers(sortSurgeon(result.data));
            console.log(result.data)
            console.log(listOffers)
        }
        fetchData()
    }, [] );


    return (

        <div>
        </div>
    )
};




export default ListSurgeon; 