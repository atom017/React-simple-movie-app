
import Footer from "./components/Footer";
import Header from "./components/Header";
import MovieList from './components/MovieList';
import {AppProvider} from './context';

function App() {
  return (
    <main>
     <AppProvider>
       <Header/>
       <MovieList/>
       <Footer/>
     </AppProvider>
     
    
    </main>
  );
}

export default App;
