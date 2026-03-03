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
            priceClassico: 250,
            priceClassicoCombo: 270,
            priceGrande: 380,
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
            priceClassico: 190,
            priceClassicoCombo: 210,
            priceGrande: 250,
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
            priceClassico: 250,
            priceClassicoCombo: 270,
            priceGrande: 350,
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
            priceClassico: '-',
            priceClassicoCombo: '-',
            priceGrande: 450,
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
            priceClassico: 350,
            priceClassicoCombo: 370,
            priceGrande: 440,
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
            priceClassico: 285,
            priceClassicoCombo: 305,
            priceGrande: 395,
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
            priceClassico: 195,
            priceClassicoCombo: 215,
            priceGrande: 340,
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
            priceClassico: 250,
            priceClassicoCombo: 270,
            priceGrande: 390,
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
            priceClassico: 295,
            priceClassicoCombo: 315,
            priceGrande: 395,
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
            priceClassico: 250,
            priceClassicoCombo: 270,
            priceGrande: 340,
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
            priceClassico: 295,
            priceClassicoCombo: 315,
            priceGrande: 390,
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
            priceClassico: 275,
            priceClassicoCombo: 295,
            priceGrande: 395,
            image: 'images/pizza/Halfsize/SecondQuattro.jpg',
            available: true
        },
        {
            id: 'pizza-013',
            nameItalian: 'Digrano Beef Pizza',
            nameEnglish: '',
            nameArabic: 'بيتزا ديجرانو بيف',
            ingredients: 'Tomato Sauce + White Sauce Beef + Mozzarella + Mushroom',
            ingredientsArabic: 'صلصة بيتزا الايطالية + شرائح لحمة بلوايت صوص + جبنة موزاريلا + مشروم',
            priceClassico: 250,
            priceClassicoCombo: 270,
            priceGrande: 395,
            image: 'images/pizza/Halfsize/HalfSize-Stroganof4.jpg',
            available: true
        }
    ],
    
    pasta: [
        {
            id: 'pasta-001',
            nameItalian: 'Fettuccine cremose al pollo',
            nameEnglish: 'Creamy Fettuccine with Chicken',
            nameArabic: 'باستا الفريدو فراخ',
            ingredients: 'White sauce + Chicken + Mushroom + Parmesan cheese',
            ingredientsArabic: 'صوص الفريدو + فراخ متبل + مشروم + بارميجان',
            price: 320,
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
            price: 295,
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
            price: 350,
            image: 'images/pasta/Halfsize/quattroformaggi.jpg',
            available: true
        },
        {
            id: 'pasta-007',
            nameItalian: 'Pasta alle verdure',
            nameEnglish: 'Vegetable Pasta',
            nameArabic: 'باستا خضار',
            ingredients: 'Carrot + Bell peppers + Zucchini + Mushroom + Onion + Olives',
            ingredientsArabic: 'جزر + فلفل الوان + كوسا + مشروم + زيتون + بصل',
            price: 225,
            image: 'images/pasta/Halfsize/PastaAllaVerdure.jpg',
            available: true
        },
        {
            id: 'pasta-008',
            nameItalian: 'Pasta al tartufo',
            nameEnglish: 'Truffle Pasta',
            nameArabic: 'باستا ترافل',
            ingredients: 'White Sauce + Truffle + Mushroom + Parmesan',
            ingredientsArabic: 'وايت صوص + مشروم + مشروم الترافيل + بارميجان',
            price: 250,
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
            price: 300,
            image: 'images/pasta/Halfsize/BurrataPasta2.jpg',
            available: false
        },
        {
            id: 'pasta-010',
            nameItalian: 'Spaghetti alla Bolognese',
            nameEnglish: 'Bolognese Spaghetti',
            nameArabic: 'بولونيز باستا',
            ingredients: 'Red Sauce + Ground Beef + Parmesan cheese',
            ingredientsArabic: 'ريد صوص + لحم مفروم بقري بالتتبيلة الايطالية + بارميجان',
            price: 320,
            image: 'images/pasta/Halfsize/Spaghetti alla Bolognese.jpg',
            available: true
        }
    ],
    
    salads: [
        {
            id: 'salad-001',
            nameItalian: 'Cesare classico',
            nameEnglish: 'Classic Caesar Salad',
            nameArabic: 'سيزر كلاسيك',
            ingredients: 'Ceasar sauce + Lettuce + Croutons + Parmesan cheese',
            ingredientsArabic: 'صلصة سيزر + كابوتشا + كريتون ( عيش محمص) + جبنة بارميزان',
            price: 150,
            image: 'https://cdn.prod.website-files.com/684040cab7995662a002de62/68600f321caa887d5c637634_CesareClassico2.png',
            available: true
        },
        {
            id: 'salad-002',
            nameItalian: 'Rucola Insalata',
            nameEnglish: 'Rocca Salad',
            nameArabic: 'سلطة ريكولا',
            ingredients: 'Rocca + Parmesan cheese + Cherry Tomatoes + Olive Oil',
            ingredientsArabic: 'جرجير + جبنة بارميزان + زيت زيتون  + طماطم شيري',
            price: 125,
            image: 'images/Salad/RoccaSalata-HalfSize.jpg',
            available: true
        },
        {
            id: 'salad-003',
            nameItalian: 'Caprese',
            nameEnglish: '',
            nameArabic: 'سلطة كابريزي',
            ingredients: 'Italian Bufala Cheese + Tomatoes + Basil + Olive Oil',
            ingredientsArabic: 'جبنه بوفلا الايطالية + طماطم + ريحان + زيت زيتون',
            price: 225,
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
            price: 90,
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
            price: 125,
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
            price: 175,
            image: 'images/soup/Halfsize/ShrimpSoup.jpg',
            available: true
        },
        {
            id: 'soup-004',
            nameItalian: 'Zuppa di verdure',
            nameEnglish: 'Vegetable Soup',
            nameArabic: 'شوربة خضار',
            ingredients: 'Zucchini + Carrot + Celery + Onion + Potato',
            ingredientsArabic: 'كوسة + جزر + كرفس + بصل + بطاطس',
            price: 50,
            image: 'images/soup/Halfsize/VerdureSoup.jpg',
            available: true
        },
        {
            id: 'soup-005',
            nameItalian: 'Zuppa Pancetta di Manzo',
            nameEnglish: 'Beef Bacon Soup',
            nameArabic: 'شوربة بيف بيكون',
            ingredients: 'Cream sauce + Mushroom + Beef Bacon',
            ingredientsArabic: 'شوربة الكريمة اللذيذة مع قطع الفطر و قطع بيف بيكون',
            price: 150,
            image: 'images/soup/Halfsize/Halfsize-BeefBaconSoup.jpg',
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
            image: 'images/SparklingWater.jpg',
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
        }
    ]

};
