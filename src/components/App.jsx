import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home/Home';
import { About } from 'pages/About/About';
import { Products } from 'pages/Products/Products';
import { NotFound } from 'pages/NotFound/NotFound';
import { ProductItem } from 'pages/ProductItem/ProductItem';
import { SharedComponents } from 'components/SharedComponent/SharedComponents';
import { Team } from 'components/Team/Team';
import { History } from 'components/History/History';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<SharedComponents />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="history" element={<History />} />
            <Route path="team" element={<Team />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="products/:productId" element={<ProductItem />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
