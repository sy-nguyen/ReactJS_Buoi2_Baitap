import React, { useEffect, useState } from 'react';
import Tour from './Tour';
import img1 from "./imgs_tour/tour-1.png"
import img2 from "./imgs_tour/tour-2.png"
import img3 from "./imgs_tour/tour-3.png"
import img4 from "./imgs_tour/tour-4.png"
import img5 from "./imgs_tour/tour-5.png"
import img6 from "./imgs_tour/tour-6.png"
import img7 from "./imgs_tour/tour-7.png"
import img8 from "./imgs_tour/tour-8.png"
import img9 from "./imgs_tour/tour-9.png"
import img10 from "./imgs_tour/tour-10.png"
import img11 from "./imgs_tour/tour-11.png"
import img12 from "./imgs_tour/tour-12.png"
import img13 from "./imgs_tour/tour-13.png"
import img14 from "./imgs_tour/tour-14.png"
import img15 from "./imgs_tour/tour-15.png"
import img16 from "./imgs_tour/tour-16.png"
import { Container, Row } from 'reactstrap';
import "./tours.css"

export default function Tours() {
    const [list, setList] = useState([
        { id: 1, city: "New York", name: "Three Temples Bangkok City Tour Must Visit", prices: 149.99, img: img1 },
        { id: 2, city: "New York", name: "Essence of Vietnam South to North", prices: 167.19, img: img2 },
        { id: 3, city: "New York", name: "Osa Peninsula to Dominical City Tour", prices: 134.99, img: img3 },
        { id: 4, city: "New York", name: "Mt Fuji, Hakone, Lake Ashi Cruise", prices: 50.15, img: img4 },
        { id: 5, city: "London", name: "Three Temples Bangkok City Tour Must Visit", prices: 149.99, img: img5 },
        { id: 6, city: "London", name: "Essence of Vietnam South to North", prices: 167.19, img: img6 },
        { id: 7, city: "London", name: "Osa Peninsula to Dominical City Tour", prices: 134.99, img: img7 },
        { id: 8, city: "London", name: "Mt Fuji, Hakone, Lake Ashi Cruise", prices: 50.15, img: img8 },
        { id: 9, city: "Tokyo", name: "Three Temples Bangkok City Tour Must Visit", prices: 149.99, img: img9 },
        { id: 10, city: "Tokyo", name: "Essence of Vietnam South to North", prices: 167.19, img: img10 },
        { id: 11, city: "Tokyo", name: "Osa Peninsula to Dominical City Tour", prices: 134.99, img: img11 },
        { id: 12, city: "Tokyo", name: "Mt Fuji, Hakone, Lake Ashi Cruise", prices: 50.15, img: img12 },
        { id: 13, city: "Los Angeles", name: "Three Temples Bangkok City Tour Must Visit", prices: 149.99, img: img13 },
        { id: 14, city: "Los Angeles", name: "Essence of Vietnam South to North", prices: 167.19, img: img14 },
        { id: 15, city: "Los Angeles", name: "Osa Peninsula to Dominical City Tour", prices: 134.99, img: img15 },
        { id: 16, city: "Los Angeles", name: "Mt Fuji, Hakone, Lake Ashi Cruise", prices: 50.15, img: img16 },
    ])

    const [filteredList, setFilteredList] = useState([]);
    const [selectedCity, setSelectedCity] = useState("New York");

    useEffect(() => {
        const filtered = list.filter(item => item.city === selectedCity);
        setFilteredList(filtered);
    }, [list, selectedCity]);

    const handleCityClick = (city) => {
        setSelectedCity(city);
    };

    return (
        <Container className="tours">
            <div className="header_tours">
                <h3>Perfect destination</h3>
                <h2>Trending destinations</h2>
            </div>
            <ul className="tab_list">
                <li className="item">
                    <button
                        className={selectedCity === 'New York' ? 'active' : ''}
                        onClick={() => handleCityClick('New York')}
                    >
                        New York
                    </button>
                </li>
                <li className="item">
                    <button
                        className={selectedCity === 'London' ? 'active' : ''}
                        onClick={() => handleCityClick('London')}
                    >
                        London
                    </button>
                </li>
                <li className="item">
                    <button
                        className={selectedCity === 'Tokyo' ? 'active' : ''}
                        onClick={() => handleCityClick('Tokyo')}
                    >
                        Tokyo
                    </button>
                </li>
                <li className="item">
                    <button
                        className={selectedCity === 'Los Angeles' ? 'active' : ''}
                        onClick={() => handleCityClick('Los Angeles')}
                    >
                        Los Angeles
                    </button>
                </li>
            </ul>
            <div>
                <Row>
                    {filteredList.map((item, index) => (
                        <Tour key={index} pro={item} />
                    ))}
                </Row>
            </div>
        </Container>
    );
}