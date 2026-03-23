export interface VoicePart {
  label: string;
  src: string;
}

export interface AudioSection {
  title: string;
  description?: string;
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
  3: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: "/audio/glas-3/gospodi-vozvah-1.m4a" },
        { label: "2 голос", src: "/audio/glas-3/gospodi-vozvah-2.m4a" },
        { label: "3 голос", src: "/audio/glas-3/gospodi-vozvah-3.m4a" },
        { label: "Бас", src: "/audio/glas-3/gospodi-vozvah-bas.m4a" },
      ],
    },
    {
      title: "Догматик",
      parts: [
        { label: "1 голос", src: "/audio/glas-3/dogmatik-1.m4a" },
        { label: "2 голос", src: "/audio/glas-3/dogmatik-2.m4a" },
        { label: "Бас", src: "/audio/glas-3/dogmatik-bas.m4a" },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: "/audio/glas-3/zapevy-1.m4a" },
        { label: "2 голос", src: "/audio/glas-3/zapevy-2.m4a" },
        { label: "Бас", src: "/audio/glas-3/zapevy-bas.m4a" },
      ],
    },
  ],
  5: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: "/audio/glas-5/gospodi-vozvah-1.m4a" },
        { label: "2 голос", src: "/audio/glas-5/gospodi-vozvah-2.m4a" },
        { label: "Бас", src: "/audio/glas-5/gospodi-vozvah-bas.m4a" },
      ],
    },
    {
      title: "Догматик",
      parts: [
        { label: "1 голос", src: "/audio/glas-5/dogmatik-1.m4a" },
        { label: "2 голос", src: "/audio/glas-5/dogmatik-2.m4a" },
        { label: "Бас", src: "/audio/glas-5/dogmatik-bas.m4a" },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: "/audio/glas-5/zapevy-1.m4a" },
        { label: "2 голос", src: "/audio/glas-5/zapevy-2.m4a" },
        { label: "Бас", src: "/audio/glas-5/zapevy-bas.m4a" },
      ],
    },
  ],
  6: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: "/audio/glas-6/gospodi-vozvah-1.m4a" },
        { label: "2 голос", src: "/audio/glas-6/gospodi-vozvah-2.m4a" },
        { label: "Бас", src: "/audio/glas-6/gospodi-vozvah-bas.m4a" },
      ],
    },
    {
      title: "Догматик",
      parts: [
        { label: "1 голос", src: "/audio/glas-6/dogmatik-1.m4a" },
        { label: "2 голос", src: "/audio/glas-6/dogmatik-2.m4a" },
        { label: "Бас", src: "/audio/glas-6/dogmatik-bas.m4a" },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: "/audio/glas-6/zapevy-1.m4a" },
        { label: "2 голос", src: "/audio/glas-6/zapevy-2.m4a" },
        { label: "Бас", src: "/audio/glas-6/zapevy-bas.m4a" },
      ],
    },
  ],
};
