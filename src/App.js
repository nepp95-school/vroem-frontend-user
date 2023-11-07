import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useEffect, useState } from 'react';
import { Stack } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';

import { Footer } from './Components/Footer';
import { NavBar } from './Components/NavBar';
import { SearchBar } from './Components/SearchBar';
import { Routes } from './Routes';
import axios from 'axios';

export const api = axios.create({
    baseURL: "https://localhost:5001"
});

export default function App() {
    const [token, setToken] = useState(null);
    const [user, SetUser] = useState(null);

    // useEffect(() => {
    //     api.post('/Main/GetData', {
    //     })
    //     .then(response => {
    //       const { Id, Name, Age } = response.data
    //       SetUser({ Id, Name, Age });
    //     })
    //   }, []);

    return (
        <BrowserRouter>
            <Stack gap={2}>
                { /* Render the header */ }
                <NavBar user={user} />
                <SearchBar />

                { /* Render the main content page */ }
                <Routes />

                { /* Render the footer */ }
                <Footer />
            </Stack>
        </BrowserRouter>
    );
}