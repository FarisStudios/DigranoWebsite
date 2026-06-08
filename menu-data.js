/* ========= DiGrano Bilingual Menu Data ========= */

const menuProducts = {
    pizza: [
        {
            id: 'pizza-001',
            nameItalian: 'Pizza ai Funghi',
            nameEnglish: 'Mushroom Pizza',
            nameArabic: 'بيتزا فونجي',
            ingredients: 'Tomato Sauce + Mushroom + Olives + Truffle + Mozzarella + Bufala Cheese + Parmesan + Oregano',
            ingredientsArabic: 'صلصة براون + مشروم + زيتون + ترافيل + موزريلا + موزريلا بوفالا + بارميجان + زعتر',
            priceClassico: 395,
            priceClassicoCombo: 270,
            priceGrande: 420,
            image: 'images/pizza/Halfsize/PizzaFunghi1.jpg',
            available: true
        },
        {
            id: 'pizza-002',
            nameItalian: 'Pizza Margherita',
            nameEnglish: '',
            nameArabic: 'بيتزا مارغريتا',
            ingredients: 'Tomato sauce + Mozzarella cheese + Basil + Parmesan cheese',
            ingredientsArabic: 'صلصة بيتزا ايطالية + جبنة موزريلا + بارميجان + زعتر',
            priceClassico: 285,
            priceClassicoCombo: 210,
            priceGrande: 310,
            image: 'images/pizza/Halfsize/Margherita.jpg',
            available: true
        },
        {
            id: 'pizza-003',
            nameItalian: 'Pizza con Pollo',
            nameEnglish: 'Chicken Pizza',
            nameArabic: 'بيتزا فراخ',
            ingredients: 'Tomato sauce + Chicken + Bufala Cheese + Mushroom + Parmesan cheese + Oregano',
            ingredientsArabic: 'صلصة بيتزا الايطالية + فراخ + جبنة موزريلا بوفالا الايطالية + مشروم + بارميزان + زعتر',
            priceClassico: 425,
            priceClassicoCombo: 270,
            priceGrande: 450,
            image: 'images/pizza/Halfsize/PizzaConPollo.jpg',
            available: true
        },
        {
            id: 'pizza-004',
            nameItalian: 'Pizza con Burrata',
            nameEnglish: 'Burrata Pizza',
            nameArabic: 'بيتزا بوراتا',
            ingredients: 'Pesto sauce + Burrata + Arugula + Basil + Pomegranate + Walnuts + Pomegranate molasses',
            ingredientsArabic: 'بيستو صوص + جبنة بوراتا الايطالية + جرجير + ريحان + رمان + عين جمل + دبس الرمان',
            priceClassico: 485,
            priceClassicoCombo: '-',
            priceGrande: 510,
            image: 'images/pizza/Halfsize/BurrataPizza.jpg',
            available: true
        },
        {
            id: 'pizza-005',
            nameItalian: 'Pizza Ai Gamberi',
            nameEnglish: 'Shrimp Pizza',
            nameArabic: 'بيتزا جمبري',
            ingredients: 'Tomato sauce + Bell Pepper + Mozzarella + Bufala Cheese + Capers + Shrimp',
            ingredientsArabic: 'صلصة بيتزا الايطالية + فلفل الوان + موزريلا + جبنة موزريلا بوفالا الايطالية + كابري + جمبري',
            priceClassico: 495,
            priceClassicoCombo: 370,
            priceGrande: 520,
            image: 'images/pizza ai gamberi.jpg',
            available: true
        },
        {
            id: 'pizza-006',
            nameItalian: 'Pizza Pesto',
            nameEnglish: '',
            nameArabic: 'بيتزا بيستو',
            ingredients: 'White Sauce + Pesto + Parmesan cheese + Bufala cheese + Sundried Tomatoes + Pepperoni + Basil',
            ingredientsArabic: 'صوص بيستو + موزريلا بوفالا الايطالية + بارميجان + طماطم مجففة + ببروني + ريحان',
            priceClassico: 425,
            priceClassicoCombo: 305,
            priceGrande: 450,
            image: 'images/pizza/Halfsize/PestoPizza2.jpg',
            available: true
        },
        {
            id: 'pizza-007',
            nameItalian: 'Pizza Primavera',
            nameEnglish: 'Vegetables Pizza',
            nameArabic: 'بيتزا الخضار',
            ingredients: 'Tomato Sauce + Bufala Cheese + Parmesan cheese + Mozzarella cheese + Bell pepper + Zucchini + Olives + Mushroom + Basil',
            ingredientsArabic: 'صلصه بيتزا الايطالية + جبنة موزريلا + جبنة موزريلا بوفالا الايطالية + فلفل الوان + كوسا + زيتون + مشروم + بارميزان',
            priceClassico: 375,
            priceClassicoCombo: 215,
            priceGrande: 395,
            image: 'images/pizza/Halfsize/PrimaveraPizza.jpg',
            available: true
        },
        {
            id: 'pizza-008',
            nameItalian: 'Pizza Diavola',
            nameEnglish: 'Pepperoni Pizza',
            nameArabic: 'بيتزا الببروني',
            ingredients: 'Tomato Sauce + Bufala Cheese + Mozzarella cheese + Parmesan Cheese + Pepperoni + Basil',
            ingredientsArabic: 'صلصة بيتزا الايطالية + موزريلا + موزريلا بوفالا الايطالية + ببروني + بارميجان',
            priceClassico: 440,
            priceClassicoCombo: 270,
            priceGrande: 465,
            image: 'images/pizza/Halfsize/Diavola1.jpg',
            available: true
        },
        {
            id: 'pizza-009',
            nameItalian: 'Pizza con Pancetta di Manzo',
            nameEnglish: 'Beef Bacon Pizza',
            nameArabic: 'بيتزا اللحم المجفف',
            ingredients: 'Brown sauce + Beef Bacon + Mozzarella + Bufala Mozzarella + Parmesan + Mushroom + Bell Pepper + Olives',
            ingredientsArabic: 'براون صوص + بيف بيكون + فلفل الوان + مشروم + زيتون + موزريلا + موزريلا بوفالا الايطالية + بارميجان',
            priceClassico: 450,
            priceClassicoCombo: 315,
            priceGrande: 475,
            image: 'images/pizza/Halfsize/BefBacon.jpg',
            available: true
        },
        {
            id: 'pizza-010',
            nameItalian: 'Pizza Bufala',
            nameEnglish: 'Bufala Pizza',
            nameArabic: 'بيتزا بوفالا',
            ingredients: 'Tomato Sauce + Bufala cheese + Parmesan cheese + Basil',
            ingredientsArabic: 'صلصة بيتزا طماطم الايطالية + جبنة موزريلا بوفالا الايطالية + بارميجان',
            priceClassico: 385,
            priceClassicoCombo: 270,
            priceGrande: 410,
            image: 'images/pizza/Halfsize/PizzaBufala2.jpg',
            available: true
        },
        {
            id: 'pizza-011',
            nameItalian: 'Pizza Alfredo',
            nameEnglish: '',
            nameArabic: 'بيتزا الفريدو',
            ingredients: 'Alfredo sauce + Chicken + Bufala Cheese + Mushroom + Parmesan cheese',
            ingredientsArabic: 'صلصة الفريدو + جبنة موزريلا الايطالية + فراخ بالتتبيلة الايطالية الخاصة + مشروم + بارميجان',
            priceClassico: 440,
            priceClassicoCombo: 315,
            priceGrande: 465,
            image: 'images/pizza/Halfsize/AlfredoPizza.jpg',
            available: true
        },
        {
            id: 'pizza-012',
            nameItalian: 'Pizza Quattro Formaggi',
            nameEnglish: 'Four Cheese Pizza',
            nameArabic: 'بيتزا مكس جبن',
            ingredients: 'White sauce + Bufala cheese + Mozzarella + Roquefort cheese + Parmesan cheese',
            ingredientsArabic: 'وايت صوص + جبنه موزريلا الايطالية + جبنه موزريلا بوفالا الايطالية + ريكفورت + بارميجان',
            priceClassico: 425,
            priceClassicoCombo: 295,
            priceGrande: 450,
            image: 'images/pizza/Halfsize/SecondQuattro.jpg',
            available: true
        },
    ],
    
    pasta: [
        {
            id: 'pasta-001',
            nameItalian: 'Fettuccine cremose al pollo',
            nameEnglish: 'Creamy Fettuccine with Chicken',
            nameArabic: 'باستا الفريدو فراخ',
            ingredients: 'White sauce + Chicken + Mushroom + Parmesan cheese',
            ingredientsArabic: 'صوص الفريدو + فراخ متبل + مشروم + بارميجان',
            price: 340,
            image: 'https://cdn.prod.website-files.com/684040cab7995662a002de62/685ff66ffa89a4b1b8252200_%D8%A7%D9%84%D9%81%D8%B1%D9%8A%D8%AF%D9%88%20%D8%AF%D8%AC%D8%A7%D8%AC%20%D9%88%20%D9%85%D8%B4%D8%B1%D9%88%D9%85.jpg',
            available: true
        },
        {
            id: 'pasta-002',
            nameItalian: 'Aglio e Olio',
            nameEnglish: 'Garlic & Olive Oil Pasta',
            nameArabic: 'باستا أليو أوليو',
            ingredients: 'Olive oil + Chili pepper + Garlic + Parsley',
            ingredientsArabic: 'زيت زيتون + فلفل حار + ثوم + بقدونس',
            price: 195,
            image: 'images/pasta/Halfsize/Aglio e Olio.jpg',
            available: true
        },
        {
            id: 'pasta-003',
            nameItalian: 'Fettuccine al pesto con pollo',
            nameEnglish: 'Pesto & Chicken Fettuccine',
            nameArabic: 'بيستو باستا',
            ingredients: 'Pesto Sauce + Mushroom + Chicken + Parmesan cheese',
            ingredientsArabic: 'بيستو صوص + فراخ متبل + مشروم + بارميجان',
            price: 365,
            image: 'images/pasta/Halfsize/Fettuccine al sugo di basilico.jpg',
            available: true
        },
        {
            id: 'pasta-004',
            nameItalian: 'Penne Arrabbiata',
            nameEnglish: 'Chili & Tomato Pasta',
            nameArabic: 'بيني أرابياتا',
            ingredients: 'Red sauce + Red spicy chili + Garlic',
            ingredientsArabic: 'ريد صوص + فلفل حار مجفف + ثوم',
            price: 230,
            image: 'images/pasta/Halfsize/PenneArrabbiata2.jpg',
            available: true
        },
        {
            id: 'pasta-005',
            nameItalian: 'Fettuccine cremose ai gamberetti',
            nameEnglish: 'Creamy Shrimp Fettuccine',
            nameArabic: 'باستا جمبري',
            ingredients: 'White sauce or Red Sauce (as per request) + Shrimp + Mushroom + Parmesan cheese',
            ingredientsArabic: 'وايت او ريد صوص (حسب الرغبة) + جمبري + مشروم + بارميجان',
            price: 460,
            image: 'images/pasta/Halfsize/FettucineCremoseGamberetti.jpg',
            available: true
        },
        {
            id: 'pasta-006',
            nameItalian: 'Penne ai quattro formaggi',
            nameEnglish: 'Four Cheese Pasta',
            nameArabic: 'باستا مكس جبن',
            ingredients: 'White Sauce + Mozzarella + Parmesan + Roquefort + Smoked cheese',
            ingredientsArabic: 'وايت صوص + موزريلا + بارميجان + ريكفورت + الجبنه المدخنة',
            price: 340,
            image: 'images/pasta/Halfsize/quattroformaggi.jpg',
            available: true
        },
        {
            id: 'pasta-008',
            nameItalian: 'Pasta al tartufo',
            nameEnglish: 'Truffle Pasta',
            nameArabic: 'باستا ترافل',
            ingredients: 'White Sauce + Truffle + Mushroom + Parmesan',
            ingredientsArabic: 'وايت صوص + مشروم + مشروم الترافيل + بارميجان',
            price: 290,
            image: 'images/pasta/Halfsize/FunghiPasta.jpg',
            available: true
        },
        {
            id: 'pasta-009',
            nameItalian: 'Pasta con burrata',
            nameEnglish: 'Burrata Pasta',
            nameArabic: 'باستا بوراتا',
            ingredients: 'Red Sauce + Burrata cheese + Pesto + Parmesan cheese',
            ingredientsArabic: 'صلصة طماطم + جبنة بوراتا + بيستو + جبنة بارميزان',
            price: 370,
            image: 'images/pasta/Halfsize/BurrataPasta2.jpg',
            available: true
        },
        {
            id: 'pasta-010',
            nameItalian: 'Spaghetti alla Bolognese',
            nameEnglish: 'Bolognese Spaghetti',
            nameArabic: 'بولونيز باستا',
            ingredients: 'Red Sauce + Ground Beef + Parmesan cheese',
            ingredientsArabic: 'ريد صوص + لحم مفروم بقري بالتتبيلة الايطالية + بارميجان',
            price: 340,
            image: 'images/pasta/Halfsize/Spaghetti alla Bolognese.jpg',
            available: true
        }
    ],
    
    salads: [
        {
            id: 'salad-003',
            nameItalian: 'Caprese',
            nameEnglish: '',
            nameArabic: 'سلطة كابريزي',
            ingredients: 'Italian Bufala Cheese + Tomatoes + Basil + Olive Oil',
            ingredientsArabic: 'جبنه بوفلا الايطالية + طماطم + ريحان + زيت زيتون',
            price: 275,
            image: 'images/Salad/caprese.jpg',
            available: true
        },
        {
            id: 'salad-004',
            nameItalian: 'Burrata Insalata',
            nameEnglish: 'Burrata Salad',
            nameArabic: 'سلطة بوراتا',
            ingredients: 'Burrata Cheese + Rocca + Cherry Tomatoes + Pesto sauce + Walnuts + Basil',
            ingredientsArabic: 'جبنه بوراتا الايطالية + جرجير + طماطم شيري + ريحان+ زيت زيتون + بيستو صوص + عين جمل',
            price: 295,
            image: 'images/Salad/HalfSize-BurattaSalad.jpg',
            available: true
        }
    ],
    
    soup: [
        {
            id: 'soup-001',
            nameItalian: 'Zuppa di funghi',
            nameEnglish: 'Mushroom Soup',
            nameArabic: 'شوربة فونجي',
            ingredients: 'Cream sauce + Mushroom',
            ingredientsArabic: 'شوربة الكريمة اللذيذة مع قطع الفطر الطازجة',
            price: 125,
            image: 'images/soup/Halfsize/MushroomSoup.jpg',
            available: true
        },
        {
            id: 'soup-002',
            nameItalian: 'Zuppa di pollo',
            nameEnglish: 'Chicken Soup',
            nameArabic: 'شوربة فراخ',
            ingredients: 'Cream sauce + Mushroom + Chicken',
            ingredientsArabic: 'شوربة الكريمة اللذيذة مع قطع الفطر و الفراخ الطازجة',
            price: 150,
            image: 'images/soup/Halfsize/chickensoup.jpg',
            available: true
        },
        {
            id: 'soup-003',
            nameItalian: 'Zuppa di gamberi',
            nameEnglish: 'Shrimp Soup',
            nameArabic: 'شوربة جمبري',
            ingredients: 'Cream sauce + Shrimp',
            ingredientsArabic: 'شوربة الكريمة اللذيذة مع جمبري طازج',
            price: 195,
            image: 'images/soup/Halfsize/ShrimpSoup.jpg',
            available: true
        },
        {
            id: 'soup-005',
            nameItalian: 'Zuppa Pancetta di Manzo',
            nameEnglish: 'Beef Bacon Soup',
            nameArabic: 'شوربة بيف بيكون',
            ingredients: 'Cream sauce + Mushroom + Beef Bacon',
            ingredientsArabic: 'شوربة الكريمة اللذيذة مع قطع الفطر و قطع بيف بيكون',
            price: 175,
            image: 'images/soup/Halfsize/Halfsize-BeefBaconSoup.jpg',
            available: true
        }
    ],
schiacciata: [
    {
        id: 'schiacciata-001',
        nameItalian: '1.Nero',
        nameEnglish: '',
        nameArabic: '1.نيرو',
        ingredients: 'For lovers of bold flavors, Salami paired with sautéed mushrooms, Stracciatella cheese, and a touch of truffle.',
        ingredientsArabic: 'لعشاق الطعم الجريء سلامي مع مشروم سوتيه وجبنة الستراتاتشيلا الفاخره بلمسه ترافيل في خبز السوردو',
        price: 195,
        image: 'images/schiacciata/Nero.png',
        available: true
    },
    {
        id: 'schiacciata-002',
        nameItalian: '2.Prestigio',
        nameEnglish: '',
        nameArabic: '2.برستيجيو',
        ingredients: 'A taste that commands respect from the very first bite, Salami with Stracciatella cheese, premium pesto, and the fresh crunch of arugula.',
        ingredientsArabic: 'طعم يفرض نفسه من اول قطمة من سلامي مع جبنة الستراتاتشيلا والبيستو الفاخر مع قرمشة الجرجير في خبز السوردو',
        price: 195,
        image: 'images/schiacciata/Prestigio.png',
        available: true
    },
    {
        id: 'schiacciata-003',
        nameItalian: '3.Armonia',
        nameEnglish: '',
        nameArabic: '3.ارمونيا',
        ingredients: 'A light Italian composition with a harmonious flavor profile, Stracciatella cheese and Smoked turkey paired with crunchy arugula and rich pesto.',
        ingredientsArabic: 'تركيبة ايطالية خفيفة بنكهة متناغمة من التيركي المدخن و جبنة الستراتاتشيلا مع الجرجير المقرمش وبيستو الريحان الغني في خبز السوردو',
        price: 195,
        image: 'images/schiacciata/Dolce.png',
        available: true
    },
    {
        id: 'schiacciata-004',
        nameItalian: '4.Fantasia',
        nameEnglish: '',
        nameArabic: '4.فانتازيا',
        ingredients: 'An exceptional sensation - Smoked turkey with Stracciatella cheese, arugula, and fresh tomatoes, finished with a signature touch of truffle.',
        ingredientsArabic: 'الاحساس الاستثنائي من التيركي المدخن مع جبنة الستراتاتشيلا والجرجير والطماطم الطازج بلمسه الترافيل في خبز السوردو',
        price: 195,
        image: 'images/schiacciata/Fantasia.png',
        available: true
    },
    {
        id: 'schiacciata-005',
        nameItalian: '5.Pomodoro',
        nameEnglish: '',
        nameArabic: '5.بومودورو',
        ingredients: 'Similar to the Italian Caprese, but with our special touch. Roasted tomatoes served with rich pesto, Stracciatella cheese, and fresh arugula.',
        ingredientsArabic: 'قريبة من الكبريزي الايطالي لكن بلمساتنا الخاصة من الطماطم المشوية مع بيستو الريحان الغني و جبنة الستراتاتشيلا مع الجرجير الفريش في خبز السوردو',
        price: 135,
        image: 'images/schiacciata/pomodoro.jpeg',
        available: true
    },
    {
        id: 'schiacciata-006',
        nameItalian: '6.Trufullo',
        nameEnglish: '',
        nameArabic: '6.ترافولو',
        ingredients: 'A sensational profile, Grilled zucchini and fresh sautéed mushrooms with Stracciatella cheese, a luxurious touch of truffle, and arugula.',
        ingredientsArabic: 'النكهة العميقة من الكوسا المشوية مع المشروم الفريش السوتيه مع جبنة الستراتاتشيلا بلمسة الترافيل الفاخر مع الجرجير في خبز السوردو',
        price: 135,
        image: 'images/schiacciata/trufallo.jpeg',
        available: true
    },
    {
        id: 'schiacciata-007',
        nameItalian: '7.Boscaro',
        nameEnglish: '',
        nameArabic: '7.بوسكارو',
        ingredients: 'The Crown Jewel, Salami paired with grilled pineapple, creamy Stracciatella cheese, and basil pesto.',
        ingredientsArabic: 'تجربة فاخرة وخارجة عن المالوف من سلامي مع الاناناس المشوي وجبنة الستراتاتشيلا وبيستو الريحان في خبز السوردو، و تستحق لقب تاج السندوتشات',
        price: 235,
        image: 'images/schiacciata/Boscaro.png',
        available: true
    },
    {
        id: 'schiacciata-008',
        nameItalian: '8.Dolcero',
        nameEnglish: '',
        nameArabic: '8.دولتشيرو',
        ingredients: 'Layers of smooth, creamy stracciatella cheese, paired with dried raisins, the crunch of toasted almonds, and bananas, finished with a touch of rich chocolate that melts with every bite.',
        ingredientsArabic: 'طبقات من جبنة الستراتشيلا الكريمية الناعمة، مع الزبيب المجفف، وقرمشة اللوز المحمص، والموز تنتهي بلمسة شوكولاتة غنية تذوب بكل قضمة',
        price: 235,
        image: 'images/schiacciata/Dolcero.png',
        available: true
    }
],
    
    beverages: [
        {
            id: 'bev-001',
            nameItalian: 'Sparkling Water',
            nameEnglish: '',
            nameArabic: 'مياه غازية',
            ingredients: '',
            ingredientsArabic: '',
            price: 50,
            image: 'images/Drinks/Halfsize-Unbranded-SparklingWater.jpg',
            available: true
        },
        {
            id: 'bev-002',
            nameItalian: 'V-Cola',
            nameEnglish: '',
            nameArabic: 'كولا',
            ingredients: '',
            ingredientsArabic: '',
            price: 30,
            image: 'images/Drinks/Halfsize-Vcola.png',
            available: true
        },
        {
            id: 'bev-003',
            nameItalian: 'Tiramisu',
            nameEnglish: '',
            nameArabic: 'تيراميسو',
            ingredients: '',
            ingredientsArabic: '',
            price: 195,
            image: 'images/Drinks/Halfsize-Tiramisu.jpg',
            available: true
        },
        {
            id: 'bev-004',
            nameItalian: 'Espresso',
            nameEnglish: '',
            nameArabic: 'ايسبريسو',
            ingredients: '',
            ingredientsArabic: '',
            price: 75,
            price2: 95,
            label1: "Single shot",
            label2: "Double shot",
            labelArabic1: "سنجل شوت",
            labelArabic2: "دبل شوت",
            image: 'images/Drinks/Espresso.png',
            available: true
        }
    ]

};