import { useState, useCallback } from 'react';

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [danceStyle, setDanceStyle] = useState('groove');

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeDanceStyle = useCallback((style) => {
    setDanceStyle(style);
  }, []);

  return { isPlaying, toggle, danceStyle, changeDanceStyle };
}
