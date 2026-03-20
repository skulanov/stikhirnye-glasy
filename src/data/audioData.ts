export interface VoicePart {
  label: string;
  src: string;
}

export interface AudioSection {
  title: string;
  parts: VoicePart[];
}

export type GlasAudioMap = Record<number, AudioSection[]>;

export const glasAudio: GlasAudioMap = {
  2: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: "/audio/glas-2/gospodi-vozvah-1.m4a" },
        { label: "2 голос", src: "/audio/glas-2/gospodi-vozvah-2.m4a" },
        { label: "Бас", src: "/audio/glas-2/gospodi-vozvah-bas.m4a" },
      ],
    },
    {
      title: "Догматик",
      parts: [
        { label: "1 голос", src: "/audio/glas-2/dogmatik-1.m4a" },
        { label: "2 голос", src: "/audio/glas-2/dogmatik-2.m4a" },
        { label: "Бас", src: "/audio/glas-2/dogmatik-bas.m4a" },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: "/audio/glas-2/zapevy-1.m4a" },
        { label: "2 голос", src: "/audio/glas-2/zapevy-2.m4a" },
        { label: "Бас", src: "/audio/glas-2/zapevy-bas.m4a" },
      ],
    },
  ],
};
