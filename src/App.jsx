import './styles/global.css';
import './App.css';
import Layout from './components/Layout';
import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import { useAnimation } from './hooks/useAnimation';

function App() {
  const { isPlaying, toggle, danceStyle, changeDanceStyle } = useAnimation();

  return (
    <Layout>
      <DancingCat isPlaying={isPlaying} danceStyle={danceStyle} />
      <AnimationControls
        isPlaying={isPlaying}
        onToggle={toggle}
        danceStyle={danceStyle}
        onChangeDance={changeDanceStyle}
      />
    </Layout>
  );
}

export default App;
