import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from '../Main/Main';
import PerconalPage from '../PersonalPage/PersonalPage';


function ContainerRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>} /> 
                <Route path="/perconal" element={<PerconalPage />} />
            </Routes>
        </BrowserRouter>
    )
}


export default ContainerRoute;