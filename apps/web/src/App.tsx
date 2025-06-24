import './App.css';
import { ThemeProvider } from './providers/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex w-full flex-col items-center justify-center">
        <h1>Hello World!</h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
