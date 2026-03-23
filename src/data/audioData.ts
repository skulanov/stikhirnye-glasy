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
      description: "**Сла́ва, и ны́не, догма́тик:**\n\nВ чермне́м мо́ри/ не искусобра́чныя Неве́сты о́браз написа́ся иногда́:/ та́мо Моисе́й разде́литель воды́;/ зде́ же Гаврии́л служи́тель чу́десев./ То́гда глубину́ ше́ствова немо́кренно Изра́иль:/ ны́не же Христа́ ро́ди безсе́менно Де́ва./ Мо́ре по прохожде́нии Изра́илеве пребы́сть непрохо́дно:/ Непоро́чная по рождестве́ Емману́илеве пребы́сть нетле́нна./ Сы́й и пре́жде Сы́й,/ явле́йся яко челове́к,// Бо́же, поми́луй нас.",
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
