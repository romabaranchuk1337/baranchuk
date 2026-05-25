import { Router, Route } from 'wouter';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';
import { About } from './pages/About';
import { I18nProvider } from './i18n';

const routerBase = import.meta.env.BASE_URL.replace(/\/$/, '');

function App() {
  return (
    <I18nProvider>
      <Router base={routerBase}>
        <div className="flex flex-col min-h-screen">
          <Navigation />
          <div className="flex-grow">
            <Route path="/" component={Home} />
            <Route path="/project/:id" component={ProjectDetail} />
            <Route path="/about" component={About} />
          </div>
          <Footer />
        </div>
      </Router>
    </I18nProvider>
  );
}

export default App;
