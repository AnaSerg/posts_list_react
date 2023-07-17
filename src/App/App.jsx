import React, { useEffect, useState } from 'react';
import { Header } from "../Header/Header";
import { Navbar } from "../Navbar/Navbar";
import { PostsList } from "../PostsList/PostsList";
import * as Api from "../../api/Api";

function App() {
    const [data, setData] = useState(null);
    const [filter, setFilter] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            const result = await Api.getData();
            setData(result);
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (data) {
            const lowerCaseFilter = filter.toLowerCase();
            const filtered = data.filter((article) => {
                const { title, text } = article;

                return (
                    title.toLowerCase().includes(lowerCaseFilter) ||
                    text.toLowerCase().includes(lowerCaseFilter)
                );
            });

            setFilteredArticles(filtered);
        }
    }, [data, filter]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    return (
        <div>
            <Header onFilterChange={handleFilterChange} openSideMenu={() => setIsMobileMenuOpen(true)}/>
            <Navbar isMobileMenuOpen={isMobileMenuOpen} closeMobileMenu={() => setIsMobileMenuOpen(false)}/>
            <PostsList articles={filteredArticles} />
        </div>
    );
}

export default App;


