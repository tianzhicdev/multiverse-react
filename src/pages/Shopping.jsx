import Landing from "../components/Landing";
import AppLink from '../components/AppLink';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

function Shopping() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">multiverse.ai - Shopping</h1>
        <p className="text-gray-600">Discover yourself in every style</p>
        <Navigation />
        <Landing directory="shopping" />
        <AppLink /> 
        <Footer />
      </div>
    </div>
  );
}

export default Shopping; 