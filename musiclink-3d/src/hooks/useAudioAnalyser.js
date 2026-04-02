import { useEffect, useRef, useState } from "react";

export default function useAudioAnalyser(audioUrl) {
  const [frequency, setFrequency] = useState(0);
  const audioRef = useRef(null);
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.crossOrigin = "anonymous";
    audio.loop = true;
    const ctx = new AudioContext();
    const src = ctx.createMediaElementSource(audio);
    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    src.connect(analyser);
    analyser.connect(ctx.destination);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    dataArrayRef.current = dataArray;
    analyserRef.current = analyser;
    audioRef.current = audio;

    const update = () => {
      analyser.getByteFrequencyData(dataArray);
      const avg = dataArray.reduce((a, b) => a + b, 0) / bufferLength / 255;
      setFrequency(avg);
      rafRef.current = requestAnimationFrame(update);
    };
    update();

    return () => {
      cancelAnimationFrame(rafRef.current);
      ctx.close();
    };
  }, [audioUrl]);

  const toggle = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) audioRef.current.play();
    else audioRef.current.pause();
  };

  return { frequency, toggle };
}