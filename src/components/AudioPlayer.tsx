import { useRef, useState, useEffect, useCallback } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import type { AudioSection } from "@/data/audioData";

function formatTime(s: number) {
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

interface TrackPlayerProps {
  label: string;
  src: string;
}

const TrackPlayer = ({ label, src }: TrackPlayerProps) => {
  const ref = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [current, setCurrent] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const a = ref.current;
    if (!a) return;
    const onTime = () => setCurrent(a.currentTime);
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = useCallback(() => {
    const a = ref.current;
    if (!a) return;
    if (playing) a.pause();
    else a.play();
    setPlaying(!playing);
  }, [playing]);

  const seek = useCallback((v: number[]) => {
    const a = ref.current;
    if (!a) return;
    a.currentTime = v[0];
    setCurrent(v[0]);
  }, []);

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3">
      <audio ref={ref} src={src} preload="metadata" muted={muted} />
      <button
        onClick={toggle}
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform active:scale-95"
        aria-label={playing ? "Пауза" : "Воспроизвести"}
      >
        {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 ml-0.5" />}
      </button>
      <span className="w-20 shrink-0 text-sm font-medium text-foreground">{label}</span>
      <Slider
        value={[current]}
        max={duration || 1}
        step={0.1}
        onValueChange={seek}
        className="flex-1"
      />
      <span className="w-20 shrink-0 text-right font-mono text-xs text-muted-foreground">
        {formatTime(current)} / {formatTime(duration)}
      </span>
      <button
        onClick={() => setMuted(!muted)}
        className="text-muted-foreground transition-colors hover:text-foreground"
        aria-label={muted ? "Включить звук" : "Выключить звук"}
      >
        {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
      </button>
    </div>
  );
};

interface AudioPlayerProps {
  sections: AudioSection[];
}

const AudioPlayer = ({ sections }: AudioPlayerProps) => {
  return (
    <div className="space-y-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="mb-3 text-lg font-semibold text-foreground">{section.title}</h3>
          <div className="space-y-2">
            {section.parts.map((part) => (
              <TrackPlayer key={part.src} label={part.label} src={part.src} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AudioPlayer;
