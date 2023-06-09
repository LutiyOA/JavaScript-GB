// 20230609071817
// http://universities.hipolabs.com/search?country=Kyrgyzstan

const dataInfo = `[
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Asian Medical Institute",
        "state-province": null,
        "domains": [
            "asmi.edu.kg"
        ],
        "web_pages": [
            "http://www.asmi.edu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "American University of Central Asia",
        "state-province": null,
        "domains": [
            "auca.kg"
        ],
        "web_pages": [
            "http://www.auca.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Bishkek Humanities University",
        "state-province": null,
        "domains": [
            "bhu.kg"
        ],
        "web_pages": [
            "http://www.bhu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "International Ataturk Alatoo University",
        "state-province": null,
        "domains": [
            "iaau.edu.kg"
        ],
        "web_pages": [
            "http://www.iaau.edu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "International University of Kyrgyzstan",
        "state-province": null,
        "domains": [
            "iuk.kg"
        ],
        "web_pages": [
            "http://www.iuk.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Jalalabad State University Kyrgyzstan",
        "state-province": null,
        "domains": [
            "jasu.edu.kg"
        ],
        "web_pages": [
            "http://www.jasu.edu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz National Agrarian University",
        "state-province": null,
        "domains": [
            "knau.kg"
        ],
        "web_pages": [
            "http://www.knau.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz Russian Slavic University",
        "state-province": null,
        "domains": [
            "krsu.edu.kg"
        ],
        "web_pages": [
            "http://www.krsu.edu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz State Technical University",
        "state-province": null,
        "domains": [
            "kstu.kg"
        ],
        "web_pages": [
            "http://www.kstu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz State University of Construction, Transportation and Architecture",
        "state-province": null,
        "domains": [
            "ksucta.kg"
        ],
        "web_pages": [
            "http://www.ksucta.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz Turkish  Manas University",
        "state-province": null,
        "domains": [
            "manas.kg"
        ],
        "web_pages": [
            "http://www.manas.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Medical Faculty, Osh State University",
        "state-province": null,
        "domains": [
            "oshmed.com"
        ],
        "web_pages": [
            "http://www.oshmed.com/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz National University",
        "state-province": null,
        "domains": [
            "university.kg"
        ],
        "web_pages": [
            "http://www.university.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Asian Medical Institute",
        "state-province": null,
        "domains": [
            "asmi.edu.kg"
        ],
        "web_pages": [
            "http://www.asmi.edu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "American University of Central Asia",
        "state-province": null,
        "domains": [
            "auca.kg"
        ],
        "web_pages": [
            "http://www.auca.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Bishkek Humanities University",
        "state-province": null,
        "domains": [
            "bhu.kg"
        ],
        "web_pages": [
            "http://www.bhu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "International Ataturk Alatoo University",
        "state-province": null,
        "domains": [
            "iaau.edu.kg"
        ],
        "web_pages": [
            "http://www.iaau.edu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "International University of Kyrgyzstan",
        "state-province": null,
        "domains": [
            "iuk.kg"
        ],
        "web_pages": [
            "http://www.iuk.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Jalalabad State University Kyrgyzstan",
        "state-province": null,
        "domains": [
            "jasu.edu.kg"
        ],
        "web_pages": [
            "http://www.jasu.edu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz National Agrarian University",
        "state-province": null,
        "domains": [
            "knau.kg"
        ],
        "web_pages": [
            "http://www.knau.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz Russian Slavic University",
        "state-province": null,
        "domains": [
            "krsu.edu.kg"
        ],
        "web_pages": [
            "http://www.krsu.edu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz State Technical University",
        "state-province": null,
        "domains": [
            "kstu.kg"
        ],
        "web_pages": [
            "http://www.kstu.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz State University of Construction, Transportation and Architecture",
        "state-province": null,
        "domains": [
            "ksucta.kg"
        ],
        "web_pages": [
            "http://www.ksucta.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz Turkish  Manas University",
        "state-province": null,
        "domains": [
            "manas.kg"
        ],
        "web_pages": [
            "http://www.manas.kg/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Medical Faculty, Osh State University",
        "state-province": null,
        "domains": [
            "oshmed.com"
        ],
        "web_pages": [
            "http://www.oshmed.com/"
        ]
    },
    {
        "country": "Kyrgyzstan",
        "alpha_two_code": "KG",
        "name": "Kyrgyz National University",
        "state-province": null,
        "domains": [
            "university.kg"
        ],
        "web_pages": [
            "http://www.university.kg/"
        ]
    }
]
`