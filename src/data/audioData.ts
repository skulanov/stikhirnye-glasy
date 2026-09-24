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
  1: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: audio("audio/glas-1/gospodi-vozvah-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-1/gospodi-vozvah-2.m4a") },
        { label: "3 голос", src: audio("audio/glas-1/gospodi-vozvah-3.m4a") },
        { label: "Бас", src: audio("audio/glas-1/gospodi-vozvah-bas.m4a") },
      ],
    },
    {
      title: "Догматик",
      description:
        "**Сла́ва, и ны́не, догма́тик:**\n\nВсеми́рную сла́ву,/ от челове́к прозя́бшую /и Влады́ку ро́ждшую,/ небе́сную дверь, воспои́м Мари́ю Де́ву,/ безпло́тных песнь и ве́рных удобре́ние./ Сия́ бо яви́ся не́бо и храм Божества./ Сия́, прегражде́ние вражды́ разруши́вши,/ мир введе́ и Ца́рствие отве́рзе./ Сию́ у́бо иму́ще ве́ры утвержде́ние,/ Побо́рника и́мамы из Нея́ ро́ждшагося Го́спода./ Дерза́йте убо, дерза́йте, лю́дие Бо́жии;/ и́бо То́й победи́т враги́,// я́ко Всеси́лен.",
      parts: [
        { label: "1 голос", src: audio("audio/glas-1/dogmatik-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-1/dogmatik-2.m4a") },
        { label: "3 голос", src: audio("audio/glas-1/dogmatik-3.m4a") },
        { label: "Бас", src: audio("audio/glas-1/dogmatik-bas.m4a") },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: audio("audio/glas-1/zapevy-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-1/zapevy-2.m4a") },
        { label: "Бас", src: audio("audio/glas-1/zapevy-bas.m4a") },
      ],
    },
  ],

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

  4: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: audio("audio/glas-4/gospodi-vozvah-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-4/gospodi-vozvah-2.m4a") },
        { label: "3 голос", src: audio("audio/glas-4/gospodi-vozvah-3.m4a") },
        { label: "Бас", src: audio("audio/glas-4/gospodi-vozvah-bas.m4a") },
      ],
    },
    {
      title: "Догматик",
      description:
        "**Сла́ва, и ны́не, догма́тик:**\n\nИ́же Тебе́ ра́ди богооте́ц проро́к Дави́д / пе́сненно о Тебе́ провозгласи́, / вели́чия Тебе́ Сотво́ршему, / предста́ Цари́ца одесну́ю Тебе́, / Тя бо Ма́терь, Хода́таицу Живота́ показа́, / без отца́ из Тебе́ вочелове́читися благоволи́вый Бог, / да Свой па́ки обнови́т о́браз, истле́вший страстьми́, / и заблу́ждшее горохи́щное обре́т овча́, / на ра́мо восприи́м, ко Отцу́ принесе́т / и Своему́ хоте́нию / с Небе́сными совокупи́т Си́лами, / и спасе́т, Богоро́дице, мiр / Христо́с, име́яй ве́лию и бога́тую ми́лость.",
      parts: [
        { label: "1 голос", src: audio("audio/glas-4/dogmatik-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-4/dogmatik-2.m4a") },
        { label: "Бас", src: audio("audio/glas-4/dogmatik-bas.m4a") },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: audio("audio/glas-4/zapevy-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-4/zapevy-2.m4a") },
        { label: "2 иной", src: audio("audio/glas-4/zapevy-2-alt.m4a") },
        { label: "Бас", src: audio("audio/glas-4/zapevy-bas.m4a") },
      ],
    },
    {
      title: "На стиховне Богородичен",
      description:
        "При́зри на моле́ния Твои́х раб, Всенепоро́чная, / утоля́ющи лю́тая на ны воста́ния, / вся́кия ско́рби нас изменя́ющи. / Тя бо, Еди́ну, тве́рдое и изве́стное утвержде́ние и́мамы, / и Твое́ предста́тельство стяжа́хом. / Да не постыди́мся, Влады́чице, Тя призыва́ющии, / потщи́ся на умоле́ние Тебе́ ве́рно вопию́щих: / ра́дуйся, Влады́чице, / всех по́моще, ра́досте и покро́ве, / и спасе́ние душ на́ших.",
      parts: [
        { label: "2 глас", src: audio("audio/glas-4/bogorodichen-prizri-na-molenie.m4a") },
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

  7: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: audio("audio/glas-7/gospodi-vozvah-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-7/gospodi-vozvah-2.m4a") },
        { label: "3 голос", src: audio("audio/glas-7/gospodi-vozvah-3.m4a") },
        { label: "Бас", src: audio("audio/glas-7/gospodi-vozvah-bas.m4a") },
      ],
    },
    {
      title: "Догматик",
      description:
        "**Сла́ва, и ны́не, догма́тик:**\n\nМа́ти у́бо позна́лася еси́, / па́че естества́, Богоpо́дице, / пpебыла́ же еси́ Де́ва, / па́че сло́ва и pа́зума, / и чудесе́ Рождества́ Твоего́ сказа́ти язы́к не мо́жет. / Пpесла́вну бо су́щу зача́тию, Чи́стая, / непости́жен есть о́бpаз pожде́ния: / иде́же бо хо́щет Бог, побежда́ется естества́ чин. / Те́мже, Тя вси Ма́теpь Бо́жию ве́дуще, / мо́лим Ти ся пpиле́жно, / моли́ спасти́ся душа́м на́шим.",
      parts: [
        { label: "1 голос", src: audio("audio/glas-7/dogmatik-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-7/dogmatik-2.m4a") },
        { label: "3 голос", src: audio("audio/glas-7/dogmatik-3.m4a") },
        { label: "Бас", src: audio("audio/glas-7/dogmatik-bas.m4a") },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: audio("audio/glas-7/zapevy-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-7/zapevy-2.m4a") },
        { label: "3 голос", src: audio("audio/glas-7/zapevy-3.m4a") },
        { label: "Бас", src: audio("audio/glas-7/zapevy-bas.m4a") },
      ],
    },
  ],

  8: [
    {
      title: "Господи воззвах",
      parts: [
        { label: "1 голос", src: audio("audio/glas-8/gospodi-vozvah-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-8/gospodi-vozvah-2.m4a") },
        { label: "3 голос", src: audio("audio/glas-8/gospodi-vozvah-3.m4a") },
        { label: "Бас", src: audio("audio/glas-8/gospodi-vozvah-bas.m4a") },
      ],
    },
    {
      title: "Догматик",
      description:
        "**Сла́ва, и ны́не, догма́тик:**\n\nЦарь Небе́сный за человеколю́бие на земли́ яви́ся, / и с челове́ки поживе́, / от Де́вы бо Чи́стыя плоть прие́мый / и из Нея́ проше́дый с восприя́тием. / Еди́н есть Сын, сугу́б естество́м, / но не Ипоста́сию. / Те́мже соверше́нна Того́ Бо́га / и соверше́нна Челове́ка вои́стину пропове́дающе, / испове́дуем Христа́ Бо́га на́шего: / Его́же моли́, Ма́ти Безневе́стная, / поми́ловатися душа́м на́шим.",
      parts: [
        { label: "1 голос", src: audio("audio/glas-8/dogmatik-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-8/dogmatik-2.m4a") },
        { label: "3 голос", src: audio("audio/glas-8/dogmatik-3.m4a") },
        { label: "Бас", src: audio("audio/glas-8/dogmatik-bas.m4a") },
      ],
    },
    {
      title: "Запевы",
      parts: [
        { label: "1 голос", src: audio("audio/glas-8/zapevy-1.m4a") },
        { label: "2 голос", src: audio("audio/glas-8/zapevy-2.m4a") },
        { label: "3 голос", src: audio("audio/glas-8/zapevy-3.m4a") },
        { label: "Бас", src: audio("audio/glas-8/zapevy-bas.m4a") },
      ],
    },
  ],
};
