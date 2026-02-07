document.addEventListener("DOMContentLoaded", () => {
  const translations = {
    fi: {
      title_home: "KoriKunto Oy – Etusivu",
      meta_description_home: "KoriKunto Oy tarjoaa ammattitaitoisia siivous- ja remonttipalveluja pääkaupunkiseudulla.",
      title_services: "KoriKunto Oy – Palvelut",
      meta_description_services: "KoriKunto Oy tarjoaa ammattitaitoisia siivous- ja remonttipalveluja pääkaupunkiseudulla.",
      title_contact: "KoriKunto Oy – Yhteystiedot",
      meta_description_contact: "Ota yhteyttä KoriKunto Oy:öön siivous- ja remonttipalveluista.",
      nav_home_alt: "Etusivu",
      nav_services_alt: "Palvelut",
      nav_contact_alt: "Yhteystiedot",
      hero_heading: "Tarjoamme ammattitaitoista siivous- ja remonttipalvelua",
      hero_text_1: "KoriKunto Oy tarjoaa laadukkaita ja luotettavia siivous- ja remonttipalveluita koteihin ja yrityksille pääkaupunkiseudulla sekä noin 80 km säteellä Helsingistä.",
      hero_text_2: "Huolehdimme jokaisesta yksityiskohdasta ja käytämme omia työvälineitä sekä ympäristöystävällisiä puhdistusaineita.",
      hero_cta: "Pyydä tarjous",
      services_cleaning_heading: "Siivouspalvelut",
      services_cleaning_item_1: "✅Toimistojen ja liiketilojen siivous",
      services_cleaning_item_2: "✅Rappusiivous",
      services_cleaning_item_3: "✅Muuttosiivous",
      services_cleaning_item_4: "✅Ikkunanpesu (sisältä ja ulkoa)",
      services_renovation_heading: "Remontti- ja asennuspalvelut",
      services_renovation_item_1: "✅Pienet remonttityöt",
      services_renovation_item_2: "✅Kalusteiden asennus",
      services_renovation_item_3: "✅Seinien ja lattioiden korjaus",
      services_renovation_item_4: "✅Viimeistelytyöt (nopea ja siisti)",
      why_heading: "Miksi valita KoriKunto?",
      why_item_1: "✅Kokenut ja ammattitaitoinen tiimi",
      why_item_2: "✅Luotettava ja aikatauluja noudattava palvelu",
      why_item_3: "✅Selkeä hinnoittelu ilman piilokuluja",
      why_item_4: "✅Yksilöllinen lähestymistapa jokaiseen kohteeseen",
      cta_heading: "Luotettava kumppani arjen ja remontin tarpeisiin",
      cta_text: "Olipa kyse säännöllisestä siivouksesta tai pienremontista, KORIKUNTO OY on turvallinen valinta. Palvelemme yksityisasiakkaita ja yrityksiä Espoossa, Helsingissä ja Vantaalla sekä noin 80 km säteellä Helsingistä. Tarjoamme joustavia aikatauluja, räätälöimme palvelut asiakkaan tarpeiden mukaan ja käytämme ympäristöystävällisiä työvälineitä. Kaikki työntekijämme ovat koulutettuja ja luotettavia, joten voit luottaa palveluumme.",
      cta_button: "Ota yhteyttä",
      footer_company: "KoriKunto Oy",
      footer_phone: "📞 040 867 6722",
      footer_email: "✉️ korikunto@gmail.com",
      footer_company_id: "🏢 Y-tunnus 3477450-6",
      services_cleaning_title: "🧹 Siivouspalvelut – Esimerkkihinnat ja kesto",
      services_cleaning_price: "Hinta: <strong>45 € / tunti</strong> <span class=\"alv-text\">+ ALV 25,5%</span>",
      services_cleaning_intro: "Siivoukseen voi kuulua:",
      services_cleaning_list_1: "Imurointi ja lattioiden pesu",
      services_cleaning_list_2: "Pölyjen pyyhintä kaikilta saatavilta pinnoilta",
      services_cleaning_list_3: "Keittiön siivous (työpinnat, tiskiallas, liesi ulkopuolelta)",
      services_cleaning_list_4: "Ovien, kahvojen ja kytkimien pyyhintä",
      services_cleaning_list_5: "Peilien ja lasipintojen puhdistus",
      services_cleaning_list_6: "Roskien vienti",
      services_cleaning_note: "Lisäpalveluna sopimuksen mukaan: ikkunoiden pesu, perusteellinen siivous, muuton jälkeinen siivous tai remontin jälkeinen siivous.",
      see_photos: "📷 Katso kuvat",
      services_renovation_title: "🧱 Remontti- ja asennuspalvelut – Esimerkkihinnat ja kesto",
      renovation_floor_title: "Lattiatyöt",
      renovation_floor_price: "alkaen 25 € / m²",
      price_vat: "+ ALV 25,5%",
      renovation_floor_note: "Parketti, laminaatti, linoleumi, laatta",
      renovation_paint_title: "Seinien maalaus",
      renovation_paint_price: "alkaen 25 € / m²",
      renovation_kitchen_title: "Keittiöiden ja kaappien asennus",
      renovation_kitchen_price: "alkaen 45 € / tunti",
      renovation_kitchen_note: "Sisältää tarvittaessa sähkön ja putkiston siirrot",
      renovation_delivery_title: "Tavaran toimitus kotiin",
      renovation_delivery_price: "alkaen 50 €",
      services_renovation_note: "Huom: Hintoihin sisältyy minimaalisten materiaalien käyttö. Hinta voi muuttua riippuen toiveistanne ja lisäpalveluista.",
      travel_costs_title: "🚗 Matkakulut",
      travel_costs_local: "→ Pääkaupunkiseudulla (Helsinki, Vantaa, Espoo) — <strong>15 € / matka</strong>",
      travel_costs_outer: "→ Kaikissa kohteissa pääkaupunkiseudun ulkopuolella 80 km säteellä Helsingistä — <strong>30 € / matka</strong>",
      cta_quote: "📩 Pyydä tarjous",
      why_choose_title: "🌟 Miksi valita KoriKunto?",
      why_choose_item_1: "Ammattitaitoinen ja luotettava tiimi",
      why_choose_item_2: "Laadukkaat ja ympäristöystävälliset puhdistusaineet",
      why_choose_item_3: "Nopea vasteaika tarjouspyynnöille",
      why_choose_item_4: "Selkeä hinnoittelu ilman piilokuluja",
      why_choose_item_5: "Yksilöllinen lähestymistapa jokaiseen kohteeseen",
      faq_title: "❓ Usein kysytyt kysymykset",
      faq_q1: "🧹 Sisältääkö hinta siivousvälineet?",
      faq_a1: "Kyllä, kaikki tarvittavat välineet ja puhdistusaineet sisältyvät hintaan.",
      faq_q2: "🚗 Mitä matkakulut maksavat?",
      faq_a2: "15 € päivässä pääkaupunkiseudulla (Helsinki, Espoo, Vantaa). Jos kohde on kauempana, matkakulut 30 €.",
      faq_q3: "💰 Voinko saada kotitalousvähennystä?",
      faq_a3: "Kyllä, osa palvelun hinnasta voidaan vähentää kotitalousvähennyksenä jopa 60% (2250€ / vuosi per henkilö).",
      faq_q4: "🕒 Kuinka nopeasti voitte aloittaa?",
      faq_a4: "Yleensä pystymme aloittamaan 1–3 päivän sisällä varauksesta.",
      faq_q5: "📆 Voinko sopia säännöllisen siivouksen?",
      faq_a5: "Kyllä, voimme sopia viikoittaisista tai kuukausittaisista siivouskerroista.",
      faq_q6: "🏠 Palveletteko koko pääkaupunkiseutua?",
      faq_a6: "Kyllä, pääkaupunkiseudulla sekä noin 80 km säteellä Helsingistä.",
      contact_title: "Ota yhteyttä",
      contact_phone: "📞 040 867 6722",
      contact_email: "✉️ korikunto@gmail.com",
      contact_address: "📍 Tillinmäentie 3 B117, 02330 Espoo",
      contact_form_title: "Pyydä tarjous",
      contact_form_name_label: "Nimi",
      contact_form_name_placeholder: "Nimesi",
      contact_form_phone_label: "Puhelin",
      contact_form_phone_placeholder: "Puhelinnumerosi",
      contact_form_email_label: "Sähköposti",
      contact_form_email_placeholder: "Sähköpostisi",
      contact_form_service_label: "Palvelu",
      contact_form_service_placeholder: "Valitse palvelu",
      contact_form_service_cleaning: "Siivous",
      contact_form_service_renovation: "Remontti / asennus",
      contact_form_service_other: "Muu",
      contact_form_message_label: "Viesti",
      contact_form_message_placeholder: "Kuvaile tarpeesi",
      contact_form_submit: "Lähetä",
      contact_form_status_sending: "Lähetetään...",
      contact_form_toast_success: "Viesti lähetetty onnistuneesti. Otamme pian yhteyttä.",
      reviews_title: "Arvostelut ja palautet",
      review_1_text: "Siivous tehtiin huolellisesti ja ajallaan. Erittäin tyytyväinen lopputulokseen.",
      review_1_author: "Anna M.",
      review_2_text: "Keittiöiden kokoaminen suoritettiin nopeasti ja tarkasti. Lopputulos vastasi täysin odotuksia.",
      review_2_author: "Jukka L.",
      location_title: "Sijaintimme"
    },
    en: {
      title_home: "KoriKunto Oy – Home",
      meta_description_home: "KoriKunto Oy provides professional cleaning and renovation services in the Helsinki capital region.",
      title_services: "KoriKunto Oy – Services",
      meta_description_services: "KoriKunto Oy provides professional cleaning and renovation services in the Helsinki capital region.",
      title_contact: "KoriKunto Oy – Contact",
      meta_description_contact: "Contact KoriKunto Oy for cleaning and renovation services.",
      nav_home_alt: "Home",
      nav_services_alt: "Services",
      nav_contact_alt: "Contact",
      hero_heading: "We provide professional cleaning and renovation services",
      hero_text_1: "KoriKunto Oy provides high-quality and reliable cleaning and renovation services for homes and businesses in the Helsinki capital region and within about 80 km of Helsinki.",
      hero_text_2: "We take care of every detail and use our own equipment as well as eco-friendly cleaning products.",
      hero_cta: "Request a quote",
      services_cleaning_heading: "Cleaning services",
      services_cleaning_item_1: "✅Office and commercial cleaning",
      services_cleaning_item_2: "✅Stairwell cleaning",
      services_cleaning_item_3: "✅Move-out cleaning",
      services_cleaning_item_4: "✅Window cleaning (inside and outside)",
      services_renovation_heading: "Renovation and installation services",
      services_renovation_item_1: "✅Small renovation jobs",
      services_renovation_item_2: "✅Furniture installation",
      services_renovation_item_3: "✅Wall and floor repairs",
      services_renovation_item_4: "✅Finishing work (fast and tidy)",
      why_heading: "Why choose KoriKunto?",
      why_item_1: "✅Experienced and professional team",
      why_item_2: "✅Reliable service that keeps schedules",
      why_item_3: "✅Clear pricing with no hidden fees",
      why_item_4: "✅Individual approach for every site",
      cta_heading: "A reliable partner for everyday and renovation needs",
      cta_text: "Whether it's regular cleaning or a small renovation, KORIKUNTO OY is a safe choice. We serve private and business customers in Espoo, Helsinki, and Vantaa as well as within about 80 km of Helsinki. We offer flexible schedules, tailor services to your needs, and use eco-friendly equipment. All our employees are trained and trustworthy, so you can rely on our service.",
      cta_button: "Contact us",
      footer_company: "KoriKunto Oy",
      footer_phone: "📞 040 867 6722",
      footer_email: "✉️ korikunto@gmail.com",
      footer_company_id: "🏢 Business ID 3477450-6",
      services_cleaning_title: "🧹 Cleaning services – Sample prices and duration",
      services_cleaning_price: "Price: <strong>45 € / hour</strong> <span class=\"alv-text\">+ VAT 25.5%</span>",
      services_cleaning_intro: "Cleaning may include:",
      services_cleaning_list_1: "Vacuuming and washing floors",
      services_cleaning_list_2: "Dusting all reachable surfaces",
      services_cleaning_list_3: "Kitchen cleaning (countertops, sink, stove exterior)",
      services_cleaning_list_4: "Wiping doors, handles, and switches",
      services_cleaning_list_5: "Cleaning mirrors and glass surfaces",
      services_cleaning_list_6: "Taking out trash",
      services_cleaning_note: "Additional services by agreement: window cleaning, deep cleaning, move-out cleaning, or post-renovation cleaning.",
      see_photos: "📷 View photos",
      services_renovation_title: "🧱 Renovation and installation services – Sample prices and duration",
      renovation_floor_title: "Flooring",
      renovation_floor_price: "from 25 € / m²",
      price_vat: "+ VAT 25.5%",
      renovation_floor_note: "Parquet, laminate, linoleum, tile",
      renovation_paint_title: "Wall painting",
      renovation_paint_price: "from 25 € / m²",
      renovation_kitchen_title: "Kitchen and cabinet installation",
      renovation_kitchen_price: "from 45 € / hour",
      renovation_kitchen_note: "Includes electrical and plumbing moves if needed",
      renovation_delivery_title: "Delivery of items to your home",
      renovation_delivery_price: "from 50 €",
      services_renovation_note: "Note: Prices include minimal materials. The price may change depending on your wishes and additional services.",
      travel_costs_title: "🚗 Travel costs",
      travel_costs_local: "→ In the capital region (Helsinki, Vantaa, Espoo) — <strong>15 € / trip</strong>",
      travel_costs_outer: "→ Outside the capital region within 80 km of Helsinki — <strong>30 € / trip</strong>",
      cta_quote: "📩 Request a quote",
      why_choose_title: "🌟 Why choose KoriKunto?",
      why_choose_item_1: "Skilled and reliable team",
      why_choose_item_2: "High-quality and eco-friendly cleaning products",
      why_choose_item_3: "Fast response time to quote requests",
      why_choose_item_4: "Clear pricing with no hidden fees",
      why_choose_item_5: "Individual approach for every site",
      faq_title: "❓ Frequently asked questions",
      faq_q1: "🧹 Does the price include cleaning supplies?",
      faq_a1: "Yes, all necessary supplies and cleaning products are included in the price.",
      faq_q2: "🚗 What do travel costs cover?",
      faq_a2: "15 € per day in the capital region (Helsinki, Espoo, Vantaa). If the site is farther away, travel costs are 30 €.",
      faq_q3: "💰 Can I get a household deduction?",
      faq_a3: "Yes, part of the service price can be deducted as a household deduction up to 60% (2250 € / year per person).",
      faq_q4: "🕒 How quickly can you start?",
      faq_a4: "We can usually start within 1–3 days after booking.",
      faq_q5: "📆 Can I arrange regular cleaning?",
      faq_a5: "Yes, we can arrange weekly or monthly cleaning visits.",
      faq_q6: "🏠 Do you serve the entire capital region?",
      faq_a6: "Yes, in the capital region and within about 80 km of Helsinki.",
      contact_title: "Contact us",
      contact_phone: "📞 040 867 6722",
      contact_email: "✉️ korikunto@gmail.com",
      contact_address: "📍 Tillinmäentie 3 B117, 02330 Espoo",
      contact_form_title: "Request a quote",
      contact_form_name_label: "Name",
      contact_form_name_placeholder: "Your name",
      contact_form_phone_label: "Phone",
      contact_form_phone_placeholder: "Your phone number",
      contact_form_email_label: "Email",
      contact_form_email_placeholder: "Your email",
      contact_form_service_label: "Service",
      contact_form_service_placeholder: "Select a service",
      contact_form_service_cleaning: "Cleaning",
      contact_form_service_renovation: "Renovation / installation",
      contact_form_service_other: "Other",
      contact_form_message_label: "Message",
      contact_form_message_placeholder: "Describe your needs",
      contact_form_submit: "Send",
      contact_form_status_sending: "Sending...",
      contact_form_toast_success: "Message sent successfully. We will contact you soon.",
      reviews_title: "Reviews and feedback",
      review_1_text: "The cleaning was done carefully and on time. Very satisfied with the result.",
      review_1_author: "Anna M.",
      review_2_text: "Kitchen assembly was completed quickly and accurately. The result fully met expectations.",
      review_2_author: "Jukka L.",
      location_title: "Our location"
    },
    ru: {
      title_home: "KoriKunto Oy – Главная",
      meta_description_home: "KoriKunto Oy предоставляет профессиональные услуги по уборке и ремонту в столичном регионе Хельсинки.",
      title_services: "KoriKunto Oy – Услуги",
      meta_description_services: "KoriKunto Oy предоставляет профессиональные услуги по уборке и ремонту в столичном регионе Хельсинки.",
      title_contact: "KoriKunto Oy – Контакты",
      meta_description_contact: "Свяжитесь с KoriKunto Oy по вопросам уборки и ремонтных работ.",
      nav_home_alt: "Главная",
      nav_services_alt: "Услуги",
      nav_contact_alt: "Контакты",
      hero_heading: "Профессиональные услуги по уборке и ремонту",
      hero_text_1: "KoriKunto Oy предоставляет качественные и надежные услуги по уборке и ремонту для домов и бизнеса в столичном регионе Хельсинки и в радиусе около 80 км от Хельсинки.",
      hero_text_2: "Мы заботимся о каждой детали и используем собственное оборудование и экологичные средства.",
      hero_cta: "Запросить расчет",
      services_cleaning_heading: "Услуги уборки",
      services_cleaning_item_1: "✅Уборка офисов и коммерческих помещений",
      services_cleaning_item_2: "✅Уборка подъездов",
      services_cleaning_item_3: "✅Уборка при переезде",
      services_cleaning_item_4: "✅Мойка окон (внутри и снаружи)",
      services_renovation_heading: "Ремонт и установка",
      services_renovation_item_1: "✅Небольшие ремонтные работы",
      services_renovation_item_2: "✅Установка мебели",
      services_renovation_item_3: "✅Ремонт стен и полов",
      services_renovation_item_4: "✅Финишные работы (быстро и аккуратно)",
      why_heading: "Почему выбирают KoriKunto?",
      why_item_1: "✅Опытная и профессиональная команда",
      why_item_2: "✅Надежный сервис и соблюдение сроков",
      why_item_3: "✅Прозрачные цены без скрытых платежей",
      why_item_4: "✅Индивидуальный подход к каждому объекту",
      cta_heading: "Надежный партнер для повседневных и ремонтных задач",
      cta_text: "Будь то регулярная уборка или небольшой ремонт, KORIKUNTO OY — надежный выбор. Мы работаем с частными и корпоративными клиентами в Эспоо, Хельсинки и Вантаа, а также в радиусе около 80 км от Хельсинки. Предлагаем гибкие графики, подбираем услуги под ваши потребности и используем экологичные инструменты. Все наши сотрудники обучены и заслуживают доверия.",
      cta_button: "Связаться",
      footer_company: "KoriKunto Oy",
      footer_phone: "📞 040 867 6722",
      footer_email: "✉️ korikunto@gmail.com",
      footer_company_id: "🏢 Идентификатор предприятия 3477450-6",
      services_cleaning_title: "🧹 Услуги уборки – Примерные цены и сроки",
      services_cleaning_price: "Цена: <strong>45 € / час</strong> <span class=\"alv-text\">+ НДС 25,5%</span>",
      services_cleaning_intro: "В уборку может входить:",
      services_cleaning_list_1: "Пылесос и мытье полов",
      services_cleaning_list_2: "Удаление пыли со всех доступных поверхностей",
      services_cleaning_list_3: "Уборка кухни (столешницы, мойка, плита снаружи)",
      services_cleaning_list_4: "Протирка дверей, ручек и выключателей",
      services_cleaning_list_5: "Очистка зеркал и стеклянных поверхностей",
      services_cleaning_list_6: "Вынос мусора",
      services_cleaning_note: "Дополнительные услуги по договоренности: мойка окон, генеральная уборка, уборка после переезда или после ремонта.",
      see_photos: "📷 Смотреть фото",
      services_renovation_title: "🧱 Ремонт и установка – Примерные цены и сроки",
      renovation_floor_title: "Полы",
      renovation_floor_price: "от 25 € / м²",
      price_vat: "+ НДС 25,5%",
      renovation_floor_note: "Паркет, ламинат, линолеум, плитка",
      renovation_paint_title: "Покраска стен",
      renovation_paint_price: "от 25 € / м²",
      renovation_kitchen_title: "Установка кухонь и шкафов",
      renovation_kitchen_price: "от 45 € / час",
      renovation_kitchen_note: "Включает перенос электрики и труб при необходимости",
      renovation_delivery_title: "Доставка товара на дом",
      renovation_delivery_price: "от 50 €",
      services_renovation_note: "Примечание: В цену включены минимальные материалы. Стоимость может измениться в зависимости от пожеланий и дополнительных услуг.",
      travel_costs_title: "🚗 Транспортные расходы",
      travel_costs_local: "→ В столичном регионе (Хельсинки, Вантаа, Эспоо) — <strong>15 € / поездка</strong>",
      travel_costs_outer: "→ За пределами столичного региона в радиусе 80 км от Хельсинки — <strong>30 € / поездка</strong>",
      cta_quote: "📩 Запросить расчет",
      why_choose_title: "🌟 Почему выбирают KoriKunto?",
      why_choose_item_1: "Профессиональная и надежная команда",
      why_choose_item_2: "Качественные и экологичные средства",
      why_choose_item_3: "Быстрый ответ на запросы",
      why_choose_item_4: "Прозрачные цены без скрытых платежей",
      why_choose_item_5: "Индивидуальный подход к каждому объекту",
      faq_title: "❓ Часто задаваемые вопросы",
      faq_q1: "🧹 Включены ли средства для уборки?",
      faq_a1: "Да, все необходимые средства и инвентарь включены в стоимость.",
      faq_q2: "🚗 Сколько стоят транспортные расходы?",
      faq_a2: "15 € в день в столичном регионе (Хельсинки, Эспоо, Вантаа). Если объект дальше, транспортные расходы 30 €.",
      faq_q3: "💰 Можно ли получить налоговый вычет?",
      faq_a3: "Да, часть стоимости можно вычесть как бытовой вычет до 60% (2250 € / год на человека).",
      faq_q4: "🕒 Как быстро вы можете начать?",
      faq_a4: "Обычно можем начать в течение 1–3 дней после бронирования.",
      faq_q5: "📆 Можно ли оформить регулярную уборку?",
      faq_a5: "Да, можем организовать еженедельные или ежемесячные визиты.",
      faq_q6: "🏠 Вы обслуживаете весь столичный регион?",
      faq_a6: "Да, в столичном регионе и в радиусе около 80 км от Хельсинки.",
      contact_title: "Свяжитесь с нами",
      contact_phone: "📞 040 867 6722",
      contact_email: "✉️ korikunto@gmail.com",
      contact_address: "📍 Tillinmäentie 3 B117, 02330 Espoo",
      contact_form_title: "Запросить расчет",
      contact_form_name_label: "Имя",
      contact_form_name_placeholder: "Ваше имя",
      contact_form_phone_label: "Телефон",
      contact_form_phone_placeholder: "Ваш номер телефона",
      contact_form_email_label: "Email",
      contact_form_email_placeholder: "Ваш email",
      contact_form_service_label: "Услуга",
      contact_form_service_placeholder: "Выберите услугу",
      contact_form_service_cleaning: "Уборка",
      contact_form_service_renovation: "Ремонт / установка",
      contact_form_service_other: "Другое",
      contact_form_message_label: "Сообщение",
      contact_form_message_placeholder: "Опишите ваши потребности",
      contact_form_submit: "Отправить",
      contact_form_status_sending: "Отправка...",
      contact_form_toast_success: "Сообщение отправлено. Мы скоро с вами свяжемся.",
      reviews_title: "Отзывы и обратная связь",
      review_1_text: "Уборка выполнена тщательно и вовремя. Очень доволен результатом.",
      review_1_author: "Анна М.",
      review_2_text: "Сборка кухни выполнена быстро и точно. Результат полностью оправдал ожидания.",
      review_2_author: "Юкка Л.",
      location_title: "Наше расположение"
    }
  };

  const switcherButtons = document.querySelectorAll(".language-switcher__btn");
  if (!switcherButtons.length) {
    return;
  }

  const getStoredLanguage = () => {
    const stored = window.localStorage.getItem("language");
    if (stored && translations[stored]) {
      return stored;
    }
    return "fi";
  };

  const applyLanguage = (language) => {
    const dictionary = translations[language];
    if (!dictionary) {
      return;
    }

    document.documentElement.lang = language;
    window.localStorage.setItem("language", language);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      const value = dictionary[key];
      if (!value) {
        return;
      }

      if (element.dataset.i18nAttr) {
        const attrs = element.dataset.i18nAttr.split(",").map((attr) => attr.trim()).filter(Boolean);
        attrs.forEach((attr) => element.setAttribute(attr, value));
        return;
      }

      element.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
      const key = element.dataset.i18nHtml;
      const value = dictionary[key];
      if (!value) {
        return;
      }
      element.innerHTML = value;
    });

    switcherButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.lang === language);
    });
  };

  switcherButtons.forEach((button) => {
    button.addEventListener("click", () => {
      applyLanguage(button.dataset.lang);
    });
  });

  applyLanguage(getStoredLanguage());

  const getTranslation = (key) => {
    const language = getStoredLanguage();
    if (translations[language] && translations[language][key]) {
      return translations[language][key];
    }
    if (translations.fi && translations.fi[key]) {
      return translations.fi[key];
    }
    return "";
  };

  const contactForm = document.querySelector(".contact-form[data-form-endpoint]");
  if (contactForm) {
    const statusElement = contactForm.querySelector("[data-form-status]");
    const submitButton = contactForm.querySelector("button[type=\"submit\"]");
    const toastElement = document.querySelector("[data-toast]");
    let toastTimeoutId = null;

    const setStatus = (message, statusClass) => {
      if (!statusElement) {
        return;
      }
      statusElement.textContent = message;
      statusElement.classList.remove("is-success", "is-error");
      if (statusClass) {
        statusElement.classList.add(statusClass);
      }
    };

    const showToast = (message) => {
      if (!toastElement) {
        return;
      }
      toastElement.textContent = message;
      toastElement.classList.add("is-visible");
      if (toastTimeoutId) {
        clearTimeout(toastTimeoutId);
      }
      toastTimeoutId = setTimeout(() => {
        toastElement.classList.remove("is-visible");
      }, 5000);
    };

    contactForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const rawEndpoint = contactForm.dataset.formEndpoint;
      const endpoint = rawEndpoint ? rawEndpoint.trim() : "";
      if (!endpoint || endpoint.includes("your-id")) {
        setStatus(getTranslation("contact_form_status_missing_endpoint"), "is-error");
        return;
      }

      setStatus(getTranslation("contact_form_status_sending"));
      if (submitButton) {
        submitButton.disabled = true;
      }

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: new FormData(contactForm)
        });

        if (response.ok) {
          contactForm.reset();
          setStatus(getTranslation("contact_form_status_success"), "is-success");
          showToast(getTranslation("contact_form_toast_success"));
        } else {
          setStatus(getTranslation("contact_form_status_error"), "is-error");
        }
      } catch (error) {
        setStatus(getTranslation("contact_form_status_error"), "is-error");
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
        }
      }
    });
  }
});
