const entities = [
    {
        name: "Ozzy Osbourne",
        sumUp: "Zpěvák metalové skupiny Black Sabbath",
        category: [
            "sólo",
            "sólo prémium"
        ],
        images: [
            {
                url: "https://www.rollingstone.com/wp-content/uploads/2002/07/GettyImages-2887285.jpg",
                alt: "Ozzy Osbourne s charakteristickými kulatými brýlemi"
            },
            {
                url: "https://i.abcnewsfe.com/a/75838cd7-1099-4c6a-8475-3b7e60e2e2f1/black-sabbath-gty-gmh-250205_1738786910005_hpMain.jpg",
                alt: "Kapela Black Sabbath (Ozzy Osbourne vlevo)"
            },
            {
                url: "https://www.actingthepart.com.au/wp-content/uploads/2023/03/Ozzy-Osbourne.jpg",
                alt: "Jedno z možných pojetí kostýmu"
            }
        ],
        performanceUrl: "https://youtu.be/zqkKzZheXQg?si=S9AFpxU5XLqfBLJ0&t=335",
        musicUrl: "https://youtu.be/PrZFscfJxXc?si=4bGmJD0c0FjfdHQq",
        comment: {
            author: "Josefínin",
            content: "Relevantní pochopitelně spíše pro starší generace. Kontroverzní postava kvůli drogám a obecně životnímu stylu, ale významná osobnost pro metal, ale i rockovou muziku vůbec. Mezi sólo prémium je Ozzy zařazen kvůli možnosti vydávat se za celý Black Sabbath, na jejichž má dle mého rozhodně cenu upozorňovat."
        }
    },
    {
        name: "Jana Kratochvílová",
        sumUp: "Česká textařka a zpěvačka původně spojená s Kroky Františka Janečka, která ale zaznamenala i po revoluci úspěšnou sólo dráhu",
        category: [
            "sólo",
            "sólo premium"
        ],
        images: [
            {
                url: "https://www.play.cz/wp-content/uploads/2023/01/Jana-Uriel-Kratochvilova.jpg",
                alt: "Jana Kratochvílová počátkem devadesátých let (srov. Dorian Electra 🖱️)",
                linkTo: "dorian-electra"
            },
            {
                url: "https://festival.praguepride.com/app/uploads/2025/06/foto-kratochvilova-1920x1080-c-default.jpg",
                alt: "Jana Uriel Kratochvílová na oslavě svých 70. narozenin (2023)"
            },
            {
                url: "https://cdn.xsd.cz/original/094d509f7cce3fd1a9950b29a5eda457.jpg",
                alt: "Jana Uriel Kratochvílová pózující v typicky výstředním outfitu"
            }
        ],
        performanceUrl: "https://youtu.be/s1Vr2RacZkU?si=Y7n54Rb2PILJy40J&t=77",
        musicUrl: "https://youtu.be/oZbiqpYE3i8?si=MSfP0T3pDoWl9WAP",
        comment: {
            author: "Josefínin",
            content: "Zaprvý, ta hudba má grády a živé koncerty svým formátem dost úspěšně drží krok s dobou. Janička Uriel sama je známá jako poměrně trhlá bába s výstředním způsobem oblíkání, vyjadřování i uvažování. Podle mě královna, ale mladší ročníky ji asi moc znát nebudou."
        }
    },
    {
        name: "Daft Punk",
        sumUp: "Elektronické duo z Francie",
        category: "uskupení",
        images: [
            {
                url: "https://static01.nyt.com/images/2021/02/23/arts/22daftpunk/merlin_68436082_cbc2d16f-e4ce-4e8e-9f06-d2789c9f309b-superJumbo.jpg",
                alt: "Daft Punk v jejich charakteristických pochromovaných helmách"
            },
            {
                url: "https://cached.imagescaler.hbpl.co.uk/resize/scaleHeight/815/cached.offlinehbpl.hbpl.co.uk/news/OMC/DAFTPUNK.jpg",
                alt: "Daft Punk na veřejnosti stále nosí své helmy"
            },
            {
                url: "https://www.partiescostume.com/wp-content/uploads/2015/11/Daft-Punk-Halloween-Costumes.jpg",
                alt: "Jedno z možných pojetí kostýmu"
            }
        ],
        performanceUrl: "https://youtu.be/BMC8nTo5oJo?si=IMrjuO5X5ZOX2l3X",
        musicUrl: "https://youtu.be/gAjR4_CbPpQ?si=7bkJ3CIOv121N_D8",
        comment: {
            author: "Josefínin",
            content: "Ideální volba pro ty, kteří chtějí schovat obličej a zároveň se vydávat za rozpoznatelné hudebníky. Daft Punk v rámci elektronické hudby klasika a vzhledem k tomu, že se rozhodli ukončit kariéru teprv před třemi lety, jejich hudbu znají i mladší ročníky. Navíc mají velmi odmítavý postoj k umělé inteligenci, což by podle mých zkušeností mohlo mezi studenty rezonovat."
        }
    },
    {
        name: "Dorian Electra",
        sumUp: "Genderfluidní popová hvězda z USA",
        category: [
            "sólo",
            "sólo premium"
        ],
        images: [
            {
                url: "https://outsmartmag.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/01/19125802/WEB_0283Photos-by-Phillip-Soulliere-_-Hair-by-Gregg-Lennon-Jr.-_-Makeup-by-Nick-Lennon.jpg",
                alt: "Co se týče outfitů, Dorian Electra často volí výrazná ramena, volány, lesklé materiály a kontrastní barevné kombinace"
            },{
                url: "https://dailyutahchronicle.com/wp-content/uploads/2022/01/Maybe-900x751.png",
                alt: "Dorian Electra rádx experimentuje se svým vizuálem, především výrazným líčením, různými barvami vlasů a extravagantními outfity"
            },
            {
                url: "https://pbs.twimg.com/media/EJBW9zTUUAAGROX.jpg",
                alt: ""
            }

        ],
        performanceUrl: "https://youtu.be/GRO82Ny-wXM?si=vjr9YUZlYgUHVp50&t=40",
        musicUrl: "https://youtu.be/kk4BZ3uOSHI?si=DvgoV8vy3TmKRSi3",
        comment: {
            author: "Josefínin",
            content: "Dorian Electra je jeden z mých oblíbených současných umělců. Je to vizuálně i hudebně velmi výrazná osobnost a to z ní dělá dobrou inspiraci pro purimový kostým. Zároveň zdůrazňuji, že není prostx kontroverze (témata písní, genderová identita, používání hlasových efektů)."       }
    },
        {
        name: "Milion+",
        sumUp: "Český label sdružující několik raperů, kteří vydávají hudbu i sólově",
        category: [
            "uskupení",
            "sólo prémium",
        ],
        images: [
            {
                url: "images/milion-plus-skupina.jpg",
                alt: "Milion+"
            },
            {
                url: "https://media.extralife.cz/static/img/2025/07/pav-09001-690.jpg",
                alt: "Yzomandias"
            },
            {
                url: "images/milion-plus-tendo.jpg",
                alt: "Nik Tendo"
            },
            /*
            {
                url: "images/milion-plus-raper3.jpg",
                alt: "Sara Rikas"
            },
            {
                url: "images/milion-plus-raper4.jpg",
                alt: "Robin Zoot"
            },
            {
                url: "images/milion-plus-raper5.jpg",
                alt: "Koky"
            },
            {
                url: "images/milion-plus-raper6.jpg",
                alt: "Decky"
            },
            {
                url: "images/milion-plus-raper7.jpg",
                alt: "Hasan"
            },
            {
                url: "images/milion-plus-raper8.jpg",
                alt: "Karlo"
            },
            */
        ],
        performanceUrl: "https://youtu.be/p6hlVuDJrsc?si=MsyWe12llVZ0ab3i&t=1470",
        musicUrl: "https://youtu.be/X_AahLWk8Sw?si=51pqqkpwZIi2XXGa",
        comment: {                  
            author: "Josefínin",
            content: "Tohle je hodně populistická volba – děcka je milujou. Zároveň ale zařazuju do sólo prémium, protože celý kostým může spočívat v podstatě v černé mikině a výhružném výrazu. Samozžejmě pokud se někdo (třeba já) ujme představování alespoň jedné ze dvou nejvýraznějších tváří labelu, viz výše. Hudba je extrémně sprostá a absolutně nevhodná pro děti, takže je to rozhodně na pováženou, zda se chceme postavit do schvalující pozice. Ale bude to sranda a bude to mít ohlas."

        }
    }
    

];
/*  {
        name: "",
        sumUp: "",
        category: "",
        images: [
            {
                url: "",
                alt: ""
            },
            {
                url: "",
                alt: ""
            },{
                url: "",
                alt: ""
            }
        ],
        performanceUrl: "",
        musicUrl: "",
        comment: {
            author: "",
            content: ""
        }
    } */