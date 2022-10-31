import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const HomePage = lazy(() => import("../pages/home/HomePage"));
const AssistancePage = lazy(() => import('../pages/assistance/AssistancePage'));
const ContactPage = lazy(() => import('../pages/contact/ContactPage'));
const LeaderPage = lazy(() => import('../pages/leaderboard/LeaderPage'));


const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={
              <Layout showFooter={false}>
                <HomePage />
              </Layout>
            }
          />
          <Route 
            path="/assistance-and-guidance" 
            element={
              <Layout>
                <AssistancePage />
              </Layout>
            }
          />
          <Route 
            path="/leaderboard" 
            element={
              <Layout>
                <LeaderPage />
              </Layout>
            }
          />
          <Route 
            path="/contact" 
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
};

export default AppRoutes;