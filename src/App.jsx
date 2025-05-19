import { useState } from "react";
import Landing from "./components/Landing";
import AppLink from './components/AppLink';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">multiverse.ai</h1>
        <p className="text-gray-600">Simply Upload and Discover</p>
        <p className="text-gray-600">All the art styles ever in existence, in your pocket</p>
        <Navigation />
        <Landing />
        <AppLink /> 
        <Footer />
      </div>
    </div>
  );
}

export default App;
