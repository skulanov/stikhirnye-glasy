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

const audio = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const glasAudio: GlasAudioMap = {
  2: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: audio("audio/glas-2/gospodi-vozvah-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-2/gospodi-vozvah-2.m4a") },
        { label: "Бас", src: audio("audio/glas-2/gospodi-vozvah-bas.m4a") },
      ],
    },
    {
      title: "Догматик",
      description:
        "**Сла́ва, и ны́не, догма́тик:**\n\nПре́йде се́нь зако́нная,/ благода́ти прише́дши:/ я́коже бо купина́ не сгара́ше опаля́ема,/ та́ко Де́ва родила́ еси́,/ и Де́ва пребы́ла еси́./ Вме́сто столпа́ о́гненнаго,/ пра́ведное возсия́ Со́лнце:/ вме́сто Моисе́а Христо́с,// спасе́ние душ на́ших.",
      parts: [
        { label: "1 голос", src: audio("audio/glas-2/dogmatik-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-2/dogmatik-2.m4a") },
        { label: "Бас", src: audio("audio/glas-2/dogmatik-bas.m4a") },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: audio("audio/glas-2/zapevy-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-2/zapevy-2.m4a") },
        { label: "Бас", src: audio("audio/glas-2/zapevy-bas.m4a") },
      ],
    },
  ],

  3: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: audio("audio/glas-3/gospodi-vozvah-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-3/gospodi-vozvah-2.m4a") },
        { label: "3 голос", src: audio("audio/glas-3/gospodi-vozvah-3.m4a") },
        { label: "Бас", src: audio("audio/glas-3/gospodi-vozvah-bas.m4a") },
      ],
    },
    {
      title: "Догматик",
      description:
        "**Сла́ва, и ны́не, догма́тик:**\n\nКа́ко не диви́мся/ Богому́жному рождеству́ Твоему́, Пречестна́я?/ Искуше́ния бо му́жескаго не прие́мши, Всенепоро́чная,/ родила́ бо еси́ без отца́ Сы́на пло́тию,/ пре́жде ве́к от Отца́ рожде́ннаго без ма́тере,/ ника́коже претерпе́вшаго измене́ния,/ или́ смеше́ния,/ или́ разделе́ния,/ но обо́ю существу́ сво́йство це́ло сохра́ншаго./ Те́мже, Ма́ти Де́во Влады́чице,/ Того́ моли́ спасти́ся душа́м,// правосла́вно Богоро́дицу испове́дающих Тя́.",
      parts: [
        { label: "1 голос", src: audio("audio/glas-3/dogmatik-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-3/dogmatik-2.m4a") },
        { label: "Бас", src: audio("audio/glas-3/dogmatik-bas.m4a") },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: audio("audio/glas-3/zapevy-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-3/zapevy-2.m4a") },
        { label: "Бас", src: audio("audio/glas-3/zapevy-bas.m4a") },
      ],
    },
  ],

  5: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: audio("audio/glas-5/gospodi-vozvah-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-5/gospodi-vozvah-2.m4a") },
        { label: "Бас", src: audio("audio/glas-5/gospodi-vozvah-bas.m4a") },
      ],
    },
    {
      title: "Догматик",
      description:
        "**Сла́ва, и ны́не, догма́тик:**\n\nВ чермне́м мо́ри/ неискусобра́чныя Неве́сты о́браз написа́ся иногда́:/ та́мо Моисе́й разде́литель воды́;/ зде́ же Гаврии́л служи́тель чу́десев./ То́гда глубину́ ше́ствова немо́кренно Изра́иль:/ ны́не же Христа́ ро́ди безсе́менно Де́ва./ Мо́ре по прохожде́нии Изра́илеве пребы́сть непрохо́дно:/ Непоро́чная по рождестве́ Емману́илеве пребы́сть нетле́нна./ Сы́й и пре́жде Сы́й,/ явле́йся яко челове́к,// Бо́же, поми́луй нас.",
      parts: [
        { label: "1 голос", src: audio("audio/glas-5/dogmatik-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-5/dogmatik-2.m4a") },
        { label: "Бас", src: audio("audio/glas-5/dogmatik-bas.m4a") },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: audio("audio/glas-5/zapevy-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-5/zapevy-2.m4a") },
        { label: "Бас", src: audio("audio/glas-5/zapevy-bas.m4a") },
      ],
    },
  ],

  6: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: audio("audio/glas-6/gospodi-vozvah-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-6/gospodi-vozvah-2.m4a") },
        { label: "Бас", src: audio("audio/glas-6/gospodi-vozvah-bas.m4a") },
      ],
    },
    {
      title: "Догматик",
      description:
        "**Сла́ва, и ны́не, догма́тик:**\n\nКто Тебе́ не ублажи́т, Пресвята́я Де́во;/ кто ли не воспое́т Твоего́ Пречи́стаго Рождества́?/ Безле́тно бо от Отца́ возсия́вый Сын Единоро́дный,/ То́йже от Тебе́, Чи́стыя, про́йде,/ неизрече́нно вопло́щься,/ естество́м Бог Сы́й,/ и естество́м быв Челове́к нас ра́ди;/ не во двою́ лицу́ разделя́емый,/ но во двою́ естеству́ несли́тно познава́емый./ Того́ моли́, Чи́стая Всеблаже́нная,// поми́ловатися душа́м на́шим.",
      parts: [
        { label: "1 голос", src: audio("audio/glas-6/dogmatik-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-6/dogmatik-2.m4a") },
        { label: "Бас", src: audio("audio/glas-6/dogmatik-bas.m4a") },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: audio("audio/glas-6/zapevy-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-6/zapevy-2.m4a") },
        { label: "Бас", src: audio("audio/glas-6/zapevy-bas.m4a") },
      ],
    },
  ],
};
