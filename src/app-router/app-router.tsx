import { FC, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/UI/Layout';
import Loading from '../components/UI/Loading';

import { routes } from './route';

const About = lazy(() => import('../components/pages/About'));
const Admin = lazy(() => import('../components/pages/Admin'));
const BarStuff = lazy(() => import('../components/pages/BarStuff'));
const Barware = lazy(() => import('../components/pages/Barware'));
const Books = lazy(() => import('../components/pages/Books'));
const Cart = lazy(() => import('../components/pages/Cart'));
const Contact = lazy(() => import('../components/pages/Contact'));
const Dashboard = lazy(() => import('../components/pages/Dashboard'));
const Faq = lazy(() => import('../components/pages/Faq'));
const Glassware = lazy(() => import('../components/pages/Glassware'));
const Jiggers = lazy(() => import('../components/pages/Jiggers'));
const Knives = lazy(() => import('../components/pages/Knives'));
const Machine = lazy(() => import('../components/pages/Machine'));
const Return = lazy(() => import('../components/pages/ReturnPolicy'));
const SingleProductPage = lazy(() => import('../components/pages/SingleProductPage'));
const Search = lazy(() => import('../components/pages/Search'));
const Sets = lazy(() => import('../components/pages/Sets'));
const Terms = lazy(() => import('../components/pages/Terms'));

export const AppRouter: FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path={routes.DASHBOARD} element={<Dashboard />} />
            <Route path={routes.ABOUT} element={<About />} />
            <Route path={routes.ADMIN} element={<Admin />} />
            <Route path={routes.BARSTUFF} element={<BarStuff />} />
            <Route path={`${routes.BARSTUFF}/:id`} element={<SingleProductPage />} />
            <Route path={routes.BARWARE} element={<Barware />} />
            <Route path={routes.BOOKS} element={<Books />} />
            <Route path={routes.CART} element={<Cart />} />
            <Route path={routes.CONTACT} element={<Contact />} />
            <Route path={routes.FAQ} element={<Faq />} />
            <Route path={routes.GLASSWARE} element={<Glassware />} />
            <Route path={routes.JIGGERS} element={<Jiggers />} />
            <Route path={routes.KNIVES} element={<Knives />} />
            <Route path={routes.MACHINE} element={<Machine />} />
            <Route path={routes.RETURN} element={<Return />} />
            <Route path={routes.SEARCH} element={<Search />} />
            <Route path={routes.SETS} element={<Sets />} />
            <Route path={routes.TERMS} element={<Terms />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
