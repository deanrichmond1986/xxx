// Fictional review examples and separately sourced developer release notes.
const CATALOG_CONTENT = {
  "reviewPools": {
    "avito": {
      "ru": {
        "pos": [
          "Продал старое кресло: загрузил фотографии, ответил в чате и договорился о встрече. Всё в одном месте.",
          "Искал велосипед рядом с домом. Фильтр по району избавил от поездок через весь город.",
          "Удобно обсуждать детали объявления в чате и не давать номер каждому желающему.",
          "Объявление создал с телефона за несколько минут. Самым долгим оказалось нормально сфотографировать вещь."
        ],
        "mid": [
          "Подходящие объявления есть, но приходится внимательно отсекать повторные публикации.",
          "Для продажи своих вещей подходит. В настройках продвижения я запутался и просто их не использую."
        ],
        "neg": [
          "Поиск по району всё равно показывает предложения на другом конце города. Фильтрам перестал доверять.",
          "Ответы в чате приходят без уведомлений. Пропустил сообщение покупателя, пока сам не открыл приложение."
        ]
      },
      "en": {
        "pos": [
          "I sold an old chair: uploaded photos, replied in chat and arranged a meeting. All in one place.",
          "I was looking for a bike close to home. Filtering by location saved trips across the city.",
          "It is useful to discuss a listing in chat without handing out my number to every enquiry.",
          "Creating the listing took a few minutes on my phone. Taking decent photos was the slow part."
        ],
        "mid": [
          "There are suitable listings, but duplicate posts take some sorting through.",
          "It works for selling my own things. I found promotion settings confusing and leave them alone."
        ],
        "neg": [
          "A neighbourhood search still shows listings across the city. I no longer trust the filters.",
          "Chat replies arrive without notifications. I missed a buyer’s message until I opened the app myself."
        ]
      }
    },
    "sber": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "max": {
      "ru": {
        "pos": [
          "Переписка с близкими под рукой, нужный разговор нахожу быстро. Для меня это главное.",
          "Отправил несколько фотографий одним сообщением, всё дошло в нужном порядке. Удобно.",
          "Длинные сообщения читаются нормально, текст не слипается. Часто обсуждаем здесь рабочие вопросы.",
          "Нравится быстро возвращаться к разговорам, которые уже начаты. Не теряюсь в списке."
        ],
        "mid": [
          "Переписываться удобно, но непривычные настройки уведомлений пришлось изучить отдельно.",
          "Нужные мне функции есть. Часть дополнительных разделов я бы убрал с главного экрана."
        ],
        "neg": [
          "Новое сообщение вижу только после открытия приложения. Из-за пропущенных уведомлений пользоваться неудобно.",
          "При возвращении в длинную переписку теряется место, где читал. Каждый раз приходится листать заново."
        ]
      },
      "en": {
        "pos": [
          "Chats with people close to me are easy to reach. That is what matters most to me.",
          "I sent several photos together and they arrived in the right order. Convenient.",
          "Long messages are easy to read. We often discuss work here, so that helps.",
          "Getting back to an existing conversation is quick. I do not get lost in the list."
        ],
        "mid": [
          "Messaging is comfortable, though I had to spend time figuring out notification settings.",
          "The features I need are here. I would remove some extra sections from the main screen."
        ],
        "neg": [
          "I only see new messages after opening the app. Missed notifications make it difficult to use.",
          "Returning to a long conversation loses my reading position. I have to scroll back every time."
        ]
      }
    },
    "vk": {
      "ru": {
        "pos": [
          "Переписка с близкими под рукой, нужный разговор нахожу быстро. Для меня это главное.",
          "Отправил несколько фотографий одним сообщением, всё дошло в нужном порядке. Удобно.",
          "Длинные сообщения читаются нормально, текст не слипается. Часто обсуждаем здесь рабочие вопросы.",
          "Нравится быстро возвращаться к разговорам, которые уже начаты. Не теряюсь в списке."
        ],
        "mid": [
          "Переписываться удобно, но непривычные настройки уведомлений пришлось изучить отдельно.",
          "Нужные мне функции есть. Часть дополнительных разделов я бы убрал с главного экрана."
        ],
        "neg": [
          "Новое сообщение вижу только после открытия приложения. Из-за пропущенных уведомлений пользоваться неудобно.",
          "При возвращении в длинную переписку теряется место, где читал. Каждый раз приходится листать заново."
        ]
      },
      "en": {
        "pos": [
          "Chats with people close to me are easy to reach. That is what matters most to me.",
          "I sent several photos together and they arrived in the right order. Convenient.",
          "Long messages are easy to read. We often discuss work here, so that helps.",
          "Getting back to an existing conversation is quick. I do not get lost in the list."
        ],
        "mid": [
          "Messaging is comfortable, though I had to spend time figuring out notification settings.",
          "The features I need are here. I would remove some extra sections from the main screen."
        ],
        "neg": [
          "I only see new messages after opening the app. Missed notifications make it difficult to use.",
          "Returning to a long conversation loses my reading position. I have to scroll back every time."
        ]
      }
    },
    "ozon": {
      "ru": {
        "pos": [
          "Сравнил несколько вариантов, почитал характеристики и выбрал нужный размер. На телефоне всё вполне удобно.",
          "Заказ и его статус находятся сразу. Не приходится каждый раз искать письмо с подтверждением.",
          "Фотографии покупателей помогают больше рекламных картинок. Несколько сомнительных покупок так отсеял.",
          "Собрал корзину вечером, утром вернулся к ней и спокойно закончил заказ. Всё осталось на месте.",
          "Поиск по точному названию сработал с первого раза. Не пришлось листать десятки похожих товаров.",
          "Удобно держать варианты в избранном и уже потом решать, что брать. Я обычно так и покупаю."
        ],
        "mid": [
          "Нужные вещи нахожу, но одинаковых карточек от разных продавцов слишком много. Сравнение затягивается.",
          "Оформить заказ несложно. А вот условия доставки хотелось бы видеть раньше, ещё до перехода в корзину."
        ],
        "neg": [
          "Выставляю фильтры, открываю товар, возвращаюсь — список снова сначала. Искать что-то конкретное так мучительно.",
          "В карточке одна цена, в корзине уже другая из-за условий скидки. Надоело разбираться в мелком тексте.",
          "Страница заказа зависла именно когда нужно было проверить доставку. Перезапуск ничего не изменил."
        ]
      },
      "en": {
        "pos": [
          "I compared a few items, checked the details and picked the right size. It was easy enough on my phone.",
          "My order and its status are easy to find. No need to search for a confirmation email each time.",
          "Customer photos are more useful than promotional images. They helped me rule out a few questionable purchases.",
          "I filled my cart in the evening and finished the order the next morning. Everything was still there.",
          "Searching for the exact item name worked immediately. I did not have to scroll through dozens of alternatives.",
          "I save options to my favourites and decide later. That suits the way I shop."
        ],
        "mid": [
          "I find what I need, but there are lots of near-identical listings from different sellers. Comparing them takes time.",
          "Checkout is straightforward. I would like delivery terms to be clearer before I get to the cart."
        ],
        "neg": [
          "I set filters, open an item and return to find the list reset. Looking for something specific is exhausting.",
          "The listing price changes in the cart because of discount conditions. I am tired of digging through the fine print.",
          "The order page froze when I needed to check the delivery. Restarting made no difference."
        ]
      }
    },
    "wb": {
      "ru": {
        "pos": [
          "Сравнил несколько вариантов, почитал характеристики и выбрал нужный размер. На телефоне всё вполне удобно.",
          "Заказ и его статус находятся сразу. Не приходится каждый раз искать письмо с подтверждением.",
          "Фотографии покупателей помогают больше рекламных картинок. Несколько сомнительных покупок так отсеял.",
          "Собрал корзину вечером, утром вернулся к ней и спокойно закончил заказ. Всё осталось на месте.",
          "Поиск по точному названию сработал с первого раза. Не пришлось листать десятки похожих товаров.",
          "Удобно держать варианты в избранном и уже потом решать, что брать. Я обычно так и покупаю."
        ],
        "mid": [
          "Нужные вещи нахожу, но одинаковых карточек от разных продавцов слишком много. Сравнение затягивается.",
          "Оформить заказ несложно. А вот условия доставки хотелось бы видеть раньше, ещё до перехода в корзину."
        ],
        "neg": [
          "Выставляю фильтры, открываю товар, возвращаюсь — список снова сначала. Искать что-то конкретное так мучительно.",
          "В карточке одна цена, в корзине уже другая из-за условий скидки. Надоело разбираться в мелком тексте.",
          "Страница заказа зависла именно когда нужно было проверить доставку. Перезапуск ничего не изменил."
        ]
      },
      "en": {
        "pos": [
          "I compared a few items, checked the details and picked the right size. It was easy enough on my phone.",
          "My order and its status are easy to find. No need to search for a confirmation email each time.",
          "Customer photos are more useful than promotional images. They helped me rule out a few questionable purchases.",
          "I filled my cart in the evening and finished the order the next morning. Everything was still there.",
          "Searching for the exact item name worked immediately. I did not have to scroll through dozens of alternatives.",
          "I save options to my favourites and decide later. That suits the way I shop."
        ],
        "mid": [
          "I find what I need, but there are lots of near-identical listings from different sellers. Comparing them takes time.",
          "Checkout is straightforward. I would like delivery terms to be clearer before I get to the cart."
        ],
        "neg": [
          "I set filters, open an item and return to find the list reset. Looking for something specific is exhausting.",
          "The listing price changes in the cart because of discount conditions. I am tired of digging through the fine print.",
          "The order page froze when I needed to check the delivery. Restarting made no difference."
        ]
      }
    },
    "gos": {
      "ru": {
        "pos": [
          "Проверил документы в одном месте, не пришлось искать их по старым письмам.",
          "Заявление заполнял с телефона. Подсказки у полей помогли понять, какие данные нужны.",
          "Статус обращения можно посмотреть самому, без звонков и ожидания на линии.",
          "Нужную услугу нашёл через поиск. Название оказалось достаточно ввести обычными словами."
        ],
        "mid": [
          "Основные документы видны сразу. С редкими услугами сложнее: похожие названия иногда сбивают с толку.",
          "Заявление отправить получилось, но описание дальнейших шагов хотелось бы понятнее."
        ],
        "neg": [
          "Почти заполнил заявление, вылезла ошибка, и введённые данные пропали. Начинать всё заново совсем не хочется.",
          "Статус обращения долго не обновляется и не объясняет, что происходит. Приложение в этом вопросе не помогло."
        ]
      },
      "en": {
        "pos": [
          "I checked my documents in one place instead of searching old emails.",
          "I filled in an application on my phone. The field prompts explained what information was needed.",
          "I can check an application status myself without calling and waiting on hold.",
          "I found the service through search using ordinary wording."
        ],
        "mid": [
          "Main documents are easy to find. Less common services can be confusing when their names are similar.",
          "I managed to submit the application, but the next steps could be explained more clearly."
        ],
        "neg": [
          "I had nearly completed the form when an error erased my entries. Starting again is deeply frustrating.",
          "The application status does not update or explain what is happening. The app has not helped with this."
        ]
      }
    },
    "ybrowser": {
      "ru": {
        "pos": [
          "Читаю длинные статьи с телефона. Текст удобно увеличивать, страницы не превращаются в кашу.",
          "Нужный сайт снова нашёл в истории, хотя название уже забыл.",
          "Поиск под рукой, вкладки переключаются понятно. На повседневные задачи хватает.",
          "Сохранил несколько страниц, чтобы дочитать вечером. Удобнее, чем пересылать ссылки самому себе."
        ],
        "mid": [
          "Со страницами всё нормально, но главная перегружена блоками, которые мне не нужны.",
          "Пользоваться можно. Некоторые настройки привычнее были в предыдущем браузере."
        ],
        "neg": [
          "Открываю браузер ради конкретного сайта, а сначала получаю ленту рекомендаций. Слишком много отвлекающего.",
          "При возвращении во вкладку страница перезагружается и сбрасывает заполненную форму. Это уже несколько раз испортило работу."
        ]
      },
      "en": {
        "pos": [
          "I read long articles on my phone. Enlarging the text does not wreck the page layout.",
          "I found a website again in my history after forgetting its name.",
          "Search is easy to reach and switching tabs is straightforward. It covers my everyday browsing.",
          "I saved a few pages for the evening. More convenient than sending links to myself."
        ],
        "mid": [
          "Browsing pages works well, but the home screen has too many sections I do not need.",
          "It does the job. Some settings were easier for me to find in my previous browser."
        ],
        "neg": [
          "I open the browser for a specific website and first get a recommendation feed. Too distracting.",
          "Returning to a tab reloads the page and clears my form entries. This has interrupted my work several times."
        ]
      }
    },
    "maps": {
      "ru": {
        "pos": [
          "Нашёл вход в нужное здание, а не просто точку посреди квартала. Очень выручило в незнакомом районе.",
          "Перед выходом смотрю маршрут и примерно понимаю, сколько займёт дорога.",
          "Искал аптеку поблизости, сразу увидел несколько вариантов и время работы.",
          "Нравится сохранять места заранее, чтобы потом не вспоминать точный адрес."
        ],
        "mid": [
          "С обычными маршрутами помогает. Во дворах всё же иногда проще свериться с указателями.",
          "Информации много и она полезная, но карту хотелось бы видеть чуть свободнее от значков."
        ],
        "neg": [
          "Маршрут повёл к закрытому проходу. Пришлось обходить целый квартал, хотя очень торопился.",
          "Метка моего местоположения прыгает, поворот уже проехал, а подсказка только появилась. Так ориентироваться невозможно."
        ]
      },
      "en": {
        "pos": [
          "I found the building entrance rather than just a point in the middle of the block. Helpful in an unfamiliar area.",
          "I check my route before leaving and get a useful idea of the travel time.",
          "I searched for a nearby pharmacy and immediately saw several options with opening hours.",
          "I like saving places ahead of time so I do not have to remember the exact address later."
        ],
        "mid": [
          "It helps with normal routes. Inside residential blocks I still sometimes need to check signs.",
          "There is plenty of useful information, though I would prefer fewer icons covering the map."
        ],
        "neg": [
          "The route led to a closed passage. I had to walk around an entire block when I was already in a hurry.",
          "My location marker jumps around and turn instructions arrive after I have passed the turn. Impossible to navigate reliably."
        ]
      }
    },
    "vkvideo": {
      "ru": {
        "pos": [
          "Продолжил просмотр с того места, где остановился вечером. Не пришлось вспоминать номер серии.",
          "Нашёл нужное видео по названию. Проигрыватель понятный, лишний раз в настройки не лезу.",
          "Смотреть на планшете удобно: изображение крупное, кнопки не перекрывают половину кадра.",
          "Сохраняю интересное на потом, иначе постоянно забываю названия. Список пригодился."
        ],
        "mid": [
          "Проигрыватель устраивает. Рекомендации пока часто предлагают то, что мне неинтересно.",
          "Нужное видео нахожу, но главная страница для меня слишком пёстрая."
        ],
        "neg": [
          "На середине видео воспроизведение остановилось. Интернет работает, другие приложения открываются, а здесь только загрузка.",
          "После закрытия приложения пропало место просмотра. Пришлось вручную искать нужный момент длинного видео.",
          "Поиск выдаёт всё подряд, кроме точного названия, которое я ввёл. Пользоваться им надоело."
        ]
      },
      "en": {
        "pos": [
          "I resumed where I stopped the previous evening without having to remember the episode number.",
          "I found the video by title. The player is clear enough that I rarely need its settings.",
          "Watching on a tablet is comfortable. Controls do not cover half the picture.",
          "I save interesting things for later because I otherwise forget the titles. The list is useful."
        ],
        "mid": [
          "The player works for me. Recommendations still often suggest things I do not want to watch.",
          "I find the videos I want, but the home screen feels too busy."
        ],
        "neg": [
          "Playback stopped halfway through. My connection works and other apps open, but this one just keeps loading.",
          "Closing the app lost my viewing position. I had to search manually through a long video.",
          "Search returns everything except the exact title I entered. I am fed up with it."
        ]
      }
    },
    "mail": {
      "ru": {
        "pos": [
          "Рабочие и личные письма собраны вместе. Переключаться между ящиками удобно.",
          "Нашёл старое письмо по паре слов из темы. Поиск сэкономил много прокрутки.",
          "Вложение открыл прямо из письма и быстро отправил ответ. Основные действия понятные.",
          "Нравится разбирать почту короткими подходами с телефона. Непрочитанное хорошо заметно."
        ],
        "mid": [
          "С письмами справляется, но дополнительных разделов для меня многовато.",
          "Поиск полезный, а вот длинные цепочки сообщений читать не всегда удобно."
        ],
        "neg": [
          "Уведомление о важном письме пришло только после ручного открытия почты. Для рабочего ящика это неприемлемо.",
          "Письмо осталось в исходящих без понятной причины. Узнал об этом, когда адресат спросил, где ответ."
        ]
      },
      "en": {
        "pos": [
          "Work and personal mail are together. Switching accounts is straightforward.",
          "I found an old email using a few words from the subject. Search saved a lot of scrolling.",
          "I opened an attachment from the email and replied quickly. The basic actions are clear.",
          "I like sorting mail in short sessions on my phone. Unread messages are easy to spot."
        ],
        "mid": [
          "It handles email, though there are more extra sections than I need.",
          "Search is useful. Long email threads can be awkward to read."
        ],
        "neg": [
          "An important email notification arrived only after I opened the inbox manually. That is unacceptable for work mail.",
          "My reply sat in the outbox without an explanation. I found out when the recipient asked about it."
        ]
      }
    },
    "market": {
      "ru": {
        "pos": [
          "Сравнил несколько вариантов, почитал характеристики и выбрал нужный размер. На телефоне всё вполне удобно.",
          "Заказ и его статус находятся сразу. Не приходится каждый раз искать письмо с подтверждением.",
          "Фотографии покупателей помогают больше рекламных картинок. Несколько сомнительных покупок так отсеял.",
          "Собрал корзину вечером, утром вернулся к ней и спокойно закончил заказ. Всё осталось на месте.",
          "Поиск по точному названию сработал с первого раза. Не пришлось листать десятки похожих товаров.",
          "Удобно держать варианты в избранном и уже потом решать, что брать. Я обычно так и покупаю."
        ],
        "mid": [
          "Нужные вещи нахожу, но одинаковых карточек от разных продавцов слишком много. Сравнение затягивается.",
          "Оформить заказ несложно. А вот условия доставки хотелось бы видеть раньше, ещё до перехода в корзину."
        ],
        "neg": [
          "Выставляю фильтры, открываю товар, возвращаюсь — список снова сначала. Искать что-то конкретное так мучительно.",
          "В карточке одна цена, в корзине уже другая из-за условий скидки. Надоело разбираться в мелком тексте.",
          "Страница заказа зависла именно когда нужно было проверить доставку. Перезапуск ничего не изменил."
        ]
      },
      "en": {
        "pos": [
          "I compared a few items, checked the details and picked the right size. It was easy enough on my phone.",
          "My order and its status are easy to find. No need to search for a confirmation email each time.",
          "Customer photos are more useful than promotional images. They helped me rule out a few questionable purchases.",
          "I filled my cart in the evening and finished the order the next morning. Everything was still there.",
          "Searching for the exact item name worked immediately. I did not have to scroll through dozens of alternatives.",
          "I save options to my favourites and decide later. That suits the way I shop."
        ],
        "mid": [
          "I find what I need, but there are lots of near-identical listings from different sellers. Comparing them takes time.",
          "Checkout is straightforward. I would like delivery terms to be clearer before I get to the cart."
        ],
        "neg": [
          "I set filters, open an item and return to find the list reset. Looking for something specific is exhausting.",
          "The listing price changes in the cart because of discount conditions. I am tired of digging through the fine print.",
          "The order page froze when I needed to check the delivery. Restarting made no difference."
        ]
      }
    },
    "ok": {
      "ru": {
        "pos": [
          "Переписка с близкими под рукой, нужный разговор нахожу быстро. Для меня это главное.",
          "Отправил несколько фотографий одним сообщением, всё дошло в нужном порядке. Удобно.",
          "Длинные сообщения читаются нормально, текст не слипается. Часто обсуждаем здесь рабочие вопросы.",
          "Нравится быстро возвращаться к разговорам, которые уже начаты. Не теряюсь в списке."
        ],
        "mid": [
          "Переписываться удобно, но непривычные настройки уведомлений пришлось изучить отдельно.",
          "Нужные мне функции есть. Часть дополнительных разделов я бы убрал с главного экрана."
        ],
        "neg": [
          "Новое сообщение вижу только после открытия приложения. Из-за пропущенных уведомлений пользоваться неудобно.",
          "При возвращении в длинную переписку теряется место, где читал. Каждый раз приходится листать заново."
        ]
      },
      "en": {
        "pos": [
          "Chats with people close to me are easy to reach. That is what matters most to me.",
          "I sent several photos together and they arrived in the right order. Convenient.",
          "Long messages are easy to read. We often discuss work here, so that helps.",
          "Getting back to an existing conversation is quick. I do not get lost in the list."
        ],
        "mid": [
          "Messaging is comfortable, though I had to spend time figuring out notification settings.",
          "The features I need are here. I would remove some extra sections from the main screen."
        ],
        "neg": [
          "I only see new messages after opening the app. Missed notifications make it difficult to use.",
          "Returning to a long conversation loses my reading position. I have to scroll back every time."
        ]
      }
    },
    "gis": {
      "ru": {
        "pos": [
          "Нашёл вход в нужное здание, а не просто точку посреди квартала. Очень выручило в незнакомом районе.",
          "Перед выходом смотрю маршрут и примерно понимаю, сколько займёт дорога.",
          "Искал аптеку поблизости, сразу увидел несколько вариантов и время работы.",
          "Нравится сохранять места заранее, чтобы потом не вспоминать точный адрес."
        ],
        "mid": [
          "С обычными маршрутами помогает. Во дворах всё же иногда проще свериться с указателями.",
          "Информации много и она полезная, но карту хотелось бы видеть чуть свободнее от значков."
        ],
        "neg": [
          "Маршрут повёл к закрытому проходу. Пришлось обходить целый квартал, хотя очень торопился.",
          "Метка моего местоположения прыгает, поворот уже проехал, а подсказка только появилась. Так ориентироваться невозможно."
        ]
      },
      "en": {
        "pos": [
          "I found the building entrance rather than just a point in the middle of the block. Helpful in an unfamiliar area.",
          "I check my route before leaving and get a useful idea of the travel time.",
          "I searched for a nearby pharmacy and immediately saw several options with opening hours.",
          "I like saving places ahead of time so I do not have to remember the exact address later."
        ],
        "mid": [
          "It helps with normal routes. Inside residential blocks I still sometimes need to check signs.",
          "There is plenty of useful information, though I would prefer fewer icons covering the map."
        ],
        "neg": [
          "The route led to a closed passage. I had to walk around an entire block when I was already in a hurry.",
          "My location marker jumps around and turn instructions arrive after I have passed the turn. Impossible to navigate reliably."
        ]
      }
    },
    "music": {
      "ru": {
        "pos": [
          "Собрал плейлист для дороги и теперь не выбираю каждый трек отдельно.",
          "Поиск по исполнителю нашёл нужный альбом сразу. Обложки помогают быстро сориентироваться.",
          "Нравится сохранять понравившуюся песню прямо во время прослушивания. Потом легко к ней вернуться.",
          "Открыл для себя несколько исполнителей из рекомендаций. Обычно слушаю одно и то же, а тут захотелось добавить новое."
        ],
        "mid": [
          "Музыку слушать удобно, но иногда рекомендации зацикливаются на одном настроении.",
          "Нужные альбомы есть, а вот организовать большую библиотеку так, как хочется, получается не всегда."
        ],
        "neg": [
          "Плейлист перестал воспроизводиться после пары треков. Каждый раз доставать телефон и запускать заново надоело.",
          "Поиск смешивает нужную песню с ремиксами и каверами. Оригинал приходится вылавливать вручную."
        ]
      },
      "en": {
        "pos": [
          "I made a playlist for travelling and no longer have to choose every track separately.",
          "Artist search found the album immediately. The covers make it easy to recognise.",
          "I like saving a song while listening. It is easy to return to it later.",
          "Recommendations introduced me to a few artists. I usually listen to the same things, but these made it into my library."
        ],
        "mid": [
          "Listening is convenient, though recommendations sometimes get stuck on one mood.",
          "The albums I want are there, but arranging a large library my way is not always easy."
        ],
        "neg": [
          "My playlist stops after a couple of tracks. I am tired of getting my phone out to restart it.",
          "Search mixes the song I want with remixes and covers. Finding the original becomes a manual hunt."
        ]
      }
    },
    "kino": {
      "ru": {
        "pos": [
          "Продолжил просмотр с того места, где остановился вечером. Не пришлось вспоминать номер серии.",
          "Нашёл нужное видео по названию. Проигрыватель понятный, лишний раз в настройки не лезу.",
          "Смотреть на планшете удобно: изображение крупное, кнопки не перекрывают половину кадра.",
          "Сохраняю интересное на потом, иначе постоянно забываю названия. Список пригодился."
        ],
        "mid": [
          "Проигрыватель устраивает. Рекомендации пока часто предлагают то, что мне неинтересно.",
          "Нужное видео нахожу, но главная страница для меня слишком пёстрая."
        ],
        "neg": [
          "На середине видео воспроизведение остановилось. Интернет работает, другие приложения открываются, а здесь только загрузка.",
          "После закрытия приложения пропало место просмотра. Пришлось вручную искать нужный момент длинного видео.",
          "Поиск выдаёт всё подряд, кроме точного названия, которое я ввёл. Пользоваться им надоело."
        ]
      },
      "en": {
        "pos": [
          "I resumed where I stopped the previous evening without having to remember the episode number.",
          "I found the video by title. The player is clear enough that I rarely need its settings.",
          "Watching on a tablet is comfortable. Controls do not cover half the picture.",
          "I save interesting things for later because I otherwise forget the titles. The list is useful."
        ],
        "mid": [
          "The player works for me. Recommendations still often suggest things I do not want to watch.",
          "I find the videos I want, but the home screen feels too busy."
        ],
        "neg": [
          "Playback stopped halfway through. My connection works and other apps open, but this one just keeps loading.",
          "Closing the app lost my viewing position. I had to search manually through a long video.",
          "Search returns everything except the exact title I entered. I am fed up with it."
        ]
      }
    },
    "tbank": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "vtb": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "alfa": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "ozonbank": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "psb": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "gazprom": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "halva": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "mirpay": {
      "ru": {
        "pos": [
          "Добавление карты оказалось понятным: шаги короткие, сразу видно, что делать дальше.",
          "Нужная карта находится без пролистывания кучи предложений. На кассе это особенно удобно.",
          "Пользуюсь для небольших повседневных покупок. Нравится, что основной экран не приходится долго изучать.",
          "Разобрался с настройкой сам, подсказок в интерфейсе хватило."
        ],
        "mid": [
          "Сам интерфейс понятный, но перед настройкой пришлось проверить, подходит ли мой телефон.",
          "На нужные мне покупки хватает. Дополнительные предложения почти не открываю."
        ],
        "neg": [
          "Карту добавить не получилось: возвращает на начало без понятного объяснения. Несколько попыток впустую.",
          "В нужный момент приложение застряло на запуске. Полагаться на такой способ оплаты у меня не получается."
        ]
      },
      "en": {
        "pos": [
          "Adding a card was straightforward. Each step made the next action clear.",
          "I can find the right card without scrolling through a pile of offers. That helps at the checkout.",
          "I use it for small everyday purchases. The main screen does not take much learning.",
          "I managed the setup on my own using the prompts in the app."
        ],
        "mid": [
          "The interface is clear, though I had to check device compatibility before setting it up.",
          "It covers the purchases I need. I rarely open the extra offers."
        ],
        "neg": [
          "Adding my card keeps returning me to the beginning without a clear explanation. Several attempts wasted.",
          "The app got stuck opening right when I needed it. I cannot rely on it for payments like this."
        ]
      }
    },
    "yoomoney": {
      "ru": {
        "pos": [
          "Добавление карты оказалось понятным: шаги короткие, сразу видно, что делать дальше.",
          "Нужная карта находится без пролистывания кучи предложений. На кассе это особенно удобно.",
          "Пользуюсь для небольших повседневных покупок. Нравится, что основной экран не приходится долго изучать.",
          "Разобрался с настройкой сам, подсказок в интерфейсе хватило."
        ],
        "mid": [
          "Сам интерфейс понятный, но перед настройкой пришлось проверить, подходит ли мой телефон.",
          "На нужные мне покупки хватает. Дополнительные предложения почти не открываю."
        ],
        "neg": [
          "Карту добавить не получилось: возвращает на начало без понятного объяснения. Несколько попыток впустую.",
          "В нужный момент приложение застряло на запуске. Полагаться на такой способ оплаты у меня не получается."
        ]
      },
      "en": {
        "pos": [
          "Adding a card was straightforward. Each step made the next action clear.",
          "I can find the right card without scrolling through a pile of offers. That helps at the checkout.",
          "I use it for small everyday purchases. The main screen does not take much learning.",
          "I managed the setup on my own using the prompts in the app."
        ],
        "mid": [
          "The interface is clear, though I had to check device compatibility before setting it up.",
          "It covers the purchases I need. I rarely open the extra offers."
        ],
        "neg": [
          "Adding my card keeps returning me to the beginning without a clear explanation. Several attempts wasted.",
          "The app got stuck opening right when I needed it. I cannot rely on it for payments like this."
        ]
      }
    },
    "ypay": {
      "ru": {
        "pos": [
          "Добавление карты оказалось понятным: шаги короткие, сразу видно, что делать дальше.",
          "Нужная карта находится без пролистывания кучи предложений. На кассе это особенно удобно.",
          "Пользуюсь для небольших повседневных покупок. Нравится, что основной экран не приходится долго изучать.",
          "Разобрался с настройкой сам, подсказок в интерфейсе хватило."
        ],
        "mid": [
          "Сам интерфейс понятный, но перед настройкой пришлось проверить, подходит ли мой телефон.",
          "На нужные мне покупки хватает. Дополнительные предложения почти не открываю."
        ],
        "neg": [
          "Карту добавить не получилось: возвращает на начало без понятного объяснения. Несколько попыток впустую.",
          "В нужный момент приложение застряло на запуске. Полагаться на такой способ оплаты у меня не получается."
        ]
      },
      "en": {
        "pos": [
          "Adding a card was straightforward. Each step made the next action clear.",
          "I can find the right card without scrolling through a pile of offers. That helps at the checkout.",
          "I use it for small everyday purchases. The main screen does not take much learning.",
          "I managed the setup on my own using the prompts in the app."
        ],
        "mid": [
          "The interface is clear, though I had to check device compatibility before setting it up.",
          "It covers the purchases I need. I rarely open the extra offers."
        ],
        "neg": [
          "Adding my card keeps returning me to the beginning without a clear explanation. Several attempts wasted.",
          "The app got stuck opening right when I needed it. I cannot rely on it for payments like this."
        ]
      }
    },
    "wbbank": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "telegram": {
      "ru": {
        "pos": [
          "Переписка с близкими под рукой, нужный разговор нахожу быстро. Для меня это главное.",
          "Отправил несколько фотографий одним сообщением, всё дошло в нужном порядке. Удобно.",
          "Длинные сообщения читаются нормально, текст не слипается. Часто обсуждаем здесь рабочие вопросы.",
          "Нравится быстро возвращаться к разговорам, которые уже начаты. Не теряюсь в списке."
        ],
        "mid": [
          "Переписываться удобно, но непривычные настройки уведомлений пришлось изучить отдельно.",
          "Нужные мне функции есть. Часть дополнительных разделов я бы убрал с главного экрана."
        ],
        "neg": [
          "Новое сообщение вижу только после открытия приложения. Из-за пропущенных уведомлений пользоваться неудобно.",
          "При возвращении в длинную переписку теряется место, где читал. Каждый раз приходится листать заново."
        ]
      },
      "en": {
        "pos": [
          "Chats with people close to me are easy to reach. That is what matters most to me.",
          "I sent several photos together and they arrived in the right order. Convenient.",
          "Long messages are easy to read. We often discuss work here, so that helps.",
          "Getting back to an existing conversation is quick. I do not get lost in the list."
        ],
        "mid": [
          "Messaging is comfortable, though I had to spend time figuring out notification settings.",
          "The features I need are here. I would remove some extra sections from the main screen."
        ],
        "neg": [
          "I only see new messages after opening the app. Missed notifications make it difficult to use.",
          "Returning to a long conversation loses my reading position. I have to scroll back every time."
        ]
      }
    },
    "rutube": {
      "ru": {
        "pos": [
          "Продолжил просмотр с того места, где остановился вечером. Не пришлось вспоминать номер серии.",
          "Нашёл нужное видео по названию. Проигрыватель понятный, лишний раз в настройки не лезу.",
          "Смотреть на планшете удобно: изображение крупное, кнопки не перекрывают половину кадра.",
          "Сохраняю интересное на потом, иначе постоянно забываю названия. Список пригодился."
        ],
        "mid": [
          "Проигрыватель устраивает. Рекомендации пока часто предлагают то, что мне неинтересно.",
          "Нужное видео нахожу, но главная страница для меня слишком пёстрая."
        ],
        "neg": [
          "На середине видео воспроизведение остановилось. Интернет работает, другие приложения открываются, а здесь только загрузка.",
          "После закрытия приложения пропало место просмотра. Пришлось вручную искать нужный момент длинного видео.",
          "Поиск выдаёт всё подряд, кроме точного названия, которое я ввёл. Пользоваться им надоело."
        ]
      },
      "en": {
        "pos": [
          "I resumed where I stopped the previous evening without having to remember the episode number.",
          "I found the video by title. The player is clear enough that I rarely need its settings.",
          "Watching on a tablet is comfortable. Controls do not cover half the picture.",
          "I save interesting things for later because I otherwise forget the titles. The list is useful."
        ],
        "mid": [
          "The player works for me. Recommendations still often suggest things I do not want to watch.",
          "I find the videos I want, but the home screen feels too busy."
        ],
        "neg": [
          "Playback stopped halfway through. My connection works and other apps open, but this one just keeps loading.",
          "Closing the app lost my viewing position. I had to search manually through a long video.",
          "Search returns everything except the exact title I entered. I am fed up with it."
        ]
      }
    },
    "ygo": {
      "ru": {
        "pos": [
          "Указал подъезд и комментарий, водитель нашёл нужный вход. С заказом разобрался быстро.",
          "Нравится видеть номер машины и место подачи в одном экране. Не нужно ничего запоминать.",
          "Маршрут и стоимость проверяю до заказа. Основная информация показана понятно.",
          "Частые адреса экономят время, особенно когда собираюсь в спешке."
        ],
        "mid": [
          "Заказывать машину удобно, но точку подачи во дворе часто поправляю вручную.",
          "Само приложение понятное. Итоговый опыт сильно зависит от конкретной поездки."
        ],
        "neg": [
          "Точка подачи перескочила на соседнюю улицу после выбора адреса. Потратил время на объяснения с водителем.",
          "Поиск машины закончился без результата, а экран долго продолжал показывать ожидание. Хотелось бы сразу понимать, что происходит."
        ]
      },
      "en": {
        "pos": [
          "I added my entrance and a comment, and the driver found the right place. Ordering was straightforward.",
          "I like seeing the car details and pickup location together. Nothing to memorise.",
          "I check the route and price before ordering. The main information is clear.",
          "Saved frequent addresses save time, especially when I am rushing."
        ],
        "mid": [
          "Ordering a car is easy, but I often have to adjust the pickup point inside the courtyard.",
          "The app itself is clear. The overall experience depends a lot on the individual trip."
        ],
        "neg": [
          "The pickup point jumped to the next street after I selected the address. I wasted time explaining it to the driver.",
          "No car was found, but the screen kept showing a wait. I need a clear indication of what is happening."
        ]
      }
    },
    "magnit": {
      "ru": {
        "pos": [
          "Перед походом в магазин просматриваю акции и решаю, что брать. Удобнее, чем искать бумажный каталог.",
          "Карта магазина теперь всегда в телефоне. Перестал вспоминать о пластике уже у кассы.",
          "Нашёл ближайший магазин и посмотрел время работы. Всё, что было нужно в тот момент.",
          "Информация о товарах читается нормально, картинки крупные. Можно спокойно составить список покупок."
        ],
        "mid": [
          "Пользуюсь в основном картой. Остальные разделы открываю редко, поэтому их обилие немного мешает.",
          "Акции смотреть удобно, но хочется быстрее переключаться между магазинами."
        ],
        "neg": [
          "Карта на кассе не открылась, всё зависло на заставке. Именно ради неё приложение и ставил.",
          "Открываю акцию, а условия спрятаны внизу мелким текстом. В магазине выяснилось, что выбранный товар под неё не подходит."
        ]
      },
      "en": {
        "pos": [
          "I check the offers before shopping and decide what to buy. Easier than looking for a paper leaflet.",
          "The store card is always on my phone now. No more remembering the plastic card at the checkout.",
          "I found the nearest store and its opening hours. Exactly what I needed at the time.",
          "Product details are readable and the pictures are large. Planning a shopping list is comfortable."
        ],
        "mid": [
          "I mainly use the loyalty card. I rarely need the other sections, so the crowded layout gets in the way.",
          "Browsing offers is handy, but switching stores could take fewer steps."
        ],
        "neg": [
          "The loyalty card would not open at the checkout. It hung on the splash screen, and that was the feature I installed it for.",
          "Offer conditions are buried in small print. At the store I discovered the item I chose did not qualify."
        ]
      }
    },
    "mts": {
      "ru": {
        "pos": [
          "Остаток интернета вижу сразу. Больше не приходится гадать, хватит ли его до конца месяца.",
          "Проверил условия своего тарифа, всё нужное нашлось без звонка оператору.",
          "Удобно следить за расходами по номеру с телефона. Понятно, за какой период показаны суммы.",
          "Пополнение счёта нашёл быстро, итоговую сумму видно до подтверждения."
        ],
        "mid": [
          "Баланс и остатки смотреть удобно. Предложения сменить тариф занимают слишком много места.",
          "Нужные разделы есть, но список подключённых услуг мог бы быть понятнее."
        ],
        "neg": [
          "Хочу проверить остаток пакета, а приложение долго не пускает дальше заставки. В дороге от него мало толку.",
          "Подключённые услуги спрятаны глубоко в меню. Не должен тратить столько времени на проверку своего номера."
        ]
      },
      "en": {
        "pos": [
          "My remaining data is visible immediately. No more guessing whether it will last the month.",
          "I checked my plan details without having to call the operator.",
          "Tracking spending for my number is convenient. The period for each amount is clear.",
          "Top-up was easy to find, and the amount was clear before confirmation."
        ],
        "mid": [
          "Balance and allowance checks are easy. Plan-change offers take up too much space.",
          "The sections I need are there, but the list of enabled services could be clearer."
        ],
        "neg": [
          "I want to check my allowance, but the app stays on the splash screen. Not much use while travelling.",
          "Enabled services are buried in the menus. Checking my own number should not take this much effort."
        ]
      }
    },
    "megafon": {
      "ru": {
        "pos": [
          "Остаток интернета вижу сразу. Больше не приходится гадать, хватит ли его до конца месяца.",
          "Проверил условия своего тарифа, всё нужное нашлось без звонка оператору.",
          "Удобно следить за расходами по номеру с телефона. Понятно, за какой период показаны суммы.",
          "Пополнение счёта нашёл быстро, итоговую сумму видно до подтверждения."
        ],
        "mid": [
          "Баланс и остатки смотреть удобно. Предложения сменить тариф занимают слишком много места.",
          "Нужные разделы есть, но список подключённых услуг мог бы быть понятнее."
        ],
        "neg": [
          "Хочу проверить остаток пакета, а приложение долго не пускает дальше заставки. В дороге от него мало толку.",
          "Подключённые услуги спрятаны глубоко в меню. Не должен тратить столько времени на проверку своего номера."
        ]
      },
      "en": {
        "pos": [
          "My remaining data is visible immediately. No more guessing whether it will last the month.",
          "I checked my plan details without having to call the operator.",
          "Tracking spending for my number is convenient. The period for each amount is clear.",
          "Top-up was easy to find, and the amount was clear before confirmation."
        ],
        "mid": [
          "Balance and allowance checks are easy. Plan-change offers take up too much space.",
          "The sections I need are there, but the list of enabled services could be clearer."
        ],
        "neg": [
          "I want to check my allowance, but the app stays on the splash screen. Not much use while travelling.",
          "Enabled services are buried in the menus. Checking my own number should not take this much effort."
        ]
      }
    },
    "beeline": {
      "ru": {
        "pos": [
          "Остаток интернета вижу сразу. Больше не приходится гадать, хватит ли его до конца месяца.",
          "Проверил условия своего тарифа, всё нужное нашлось без звонка оператору.",
          "Удобно следить за расходами по номеру с телефона. Понятно, за какой период показаны суммы.",
          "Пополнение счёта нашёл быстро, итоговую сумму видно до подтверждения."
        ],
        "mid": [
          "Баланс и остатки смотреть удобно. Предложения сменить тариф занимают слишком много места.",
          "Нужные разделы есть, но список подключённых услуг мог бы быть понятнее."
        ],
        "neg": [
          "Хочу проверить остаток пакета, а приложение долго не пускает дальше заставки. В дороге от него мало толку.",
          "Подключённые услуги спрятаны глубоко в меню. Не должен тратить столько времени на проверку своего номера."
        ]
      },
      "en": {
        "pos": [
          "My remaining data is visible immediately. No more guessing whether it will last the month.",
          "I checked my plan details without having to call the operator.",
          "Tracking spending for my number is convenient. The period for each amount is clear.",
          "Top-up was easy to find, and the amount was clear before confirmation."
        ],
        "mid": [
          "Balance and allowance checks are easy. Plan-change offers take up too much space.",
          "The sections I need are there, but the list of enabled services could be clearer."
        ],
        "neg": [
          "I want to check my allowance, but the app stays on the splash screen. Not much use while travelling.",
          "Enabled services are buried in the menus. Checking my own number should not take this much effort."
        ]
      }
    },
    "rshb": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "uralsib": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "mkb": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "mtsmoney": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "raif": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "angrybirds2": {
      "ru": {
        "pos": [
          "Люблю подбирать птицу под конкретную башню. Когда удаётся развалить всё одним удачным выстрелом, очень приятно.",
          "Играем с братом по очереди и спорим, куда лучше целиться. Иногда его странный план действительно срабатывает.",
          "Вернулся ради знакомой рогатки и задержался. Сам момент выстрела всё ещё отлично сделан.",
          "Больше всего нравится Бомб: сначала аккуратно расставляешь всё, а потом один взрыв решает уровень."
        ],
        "mid": [
          "Птицами стрелять интересно, но всплывающие предложения между попытками отвлекают.",
          "На одних уровнях прохожу с первого раза, на других надолго застреваю. Сложность ощущается неровной."
        ],
        "neg": [
          "Слишком много времени уходит на окна и предложения вместо самой игры. Ради рогатки продираться через них надоело.",
          "После нескольких попыток игра начала тормозить в момент выстрела. Точно прицелиться стало невозможно."
        ]
      },
      "en": {
        "pos": [
          "I like choosing a bird for each tower. Bringing it all down with one well-placed shot is satisfying.",
          "My brother and I take turns and argue about where to aim. Sometimes his odd plan actually works.",
          "I came back for the familiar slingshot and stayed. The actual shot still feels good.",
          "Bomb is my favourite: a little setup, then one explosion settles the level."
        ],
        "mid": [
          "Launching the birds is fun, but pop-up offers between attempts are distracting.",
          "Some levels take one attempt while others keep me stuck. The difficulty feels uneven."
        ],
        "neg": [
          "Too much time goes into pop-ups and offers instead of playing. I am tired of getting through them just to use the slingshot.",
          "After a few attempts the game started lagging during shots. Accurate aiming became impossible."
        ]
      }
    },
    "dreamblast": {
      "ru": {
        "pos": [
          "Обожаю эту игру, играю по вечерам перед сном, так мило!",
          "Самая красивая игра, пузырики такие милые",
          "Играю с сестрой, соревнуемся кто больше звёзд наберёт",
          "Подруга посоветовала, теперь сама всем советую эту игру",
          "Хорошая головоломка, чтобы расслабиться после школы.",
          "Собираю все специальные пузыри, обожаю комбо!",
          "Прошла уровень с боссом наконец, так довольна"
        ],
        "mid": [
          "Уровни коротенькие, удобно проходить в перерывах между делами.",
          "Ребёнку нравится, но иногда просит купить бустеры.",
          "Симпатичная графика, но однообразно уже ближе к 50 уровню."
        ],
        "neg": [
          "Залипла на одном уровне уже три дня не могу пройти(",
          "Реклама вылезает прямо посреди уровня это бесит",
          "После обновления вылетает при загрузке уровня."
        ]
      },
      "en": {
        "pos": [
          "Love this game, play it every night before bed, so cute!",
          "Prettiest game ever, the bubbles are so cute",
          "Me and my sister compete for who gets more stars",
          "My friend recommended it, now I recommend it to everyone",
          "A nice puzzle to relax with after school.",
          "Collecting all the special bubbles, love the combos!",
          "Finally beat the boss level, so happy"
        ],
        "mid": [
          "Levels are short, easy to play in between things.",
          "My kid loves it but keeps asking to buy boosters.",
          "Cute graphics but gets repetitive by level 50."
        ],
        "neg": [
          "Stuck on one level for three days can't pass it(",
          "Ads pop up right in the middle of a level so annoying",
          "It crashes on loading since the last update."
        ]
      }
    },
    "angryjourney": {
      "ru": {
        "pos": [
          "Красивые миры, прохожу с папой по выходным",
          "Управление супер простое, я прошёл пять уровней с первого раза",
          "Мой любимый герой тут Ред, он такой смешной",
          "Детям точно понравится, моей сестре 7 лет и она обожает",
          "Приятная головоломка, спокойно коротать время в дороге.",
          "Нашёл все секретные звёзды на уровне, это было сложно!",
          "Рисунки в игре такие классные, разглядываю каждый раз"
        ],
        "mid": [
          "Красиво, но иногда не понятно куда идти дальше.",
          "Хорошо для детей, но взрослому может показаться простовато.",
          "Приятная игра, только маловато уровней пока."
        ],
        "neg": [
          "Завис на одной головоломке уже два дня",
          "Реклама после каждого уровня надоела",
          "Игра вылетает при открытии на моём телефоне."
        ]
      },
      "en": {
        "pos": [
          "Beautiful worlds, I play with my dad on weekends",
          "Controls are super easy, beat five levels first try",
          "My favorite character is Red, he is so funny",
          "Kids will love this, my 7 year old sister is obsessed",
          "A nice puzzle game to pass time on the road.",
          "Found every hidden star on the level, that was tough!",
          "The art in this game is so nice, I notice something new every time"
        ],
        "mid": [
          "It's pretty but sometimes unclear where to go next.",
          "Good for kids but might feel too simple for adults.",
          "Nice game, just wish there were more levels."
        ],
        "neg": [
          "Stuck on one puzzle for two days now",
          "Ads after every level got old fast",
          "The game crashes on launch on my phone."
        ]
      }
    },
    "angrypop": {
      "ru": {
        "pos": [
          "Обожаю бабл-шутеры, а этот с птичками ещё и милый!",
          "Мой любимый герой Стелла, она такая крутая",
          "Играю на переменах в школе, оч затягивает",
          "Брат подсадил меня на эту игру, теперь играем вместе",
          "Простая и приятная игра для отдыха, ничего лишнего.",
          "Собрала комбо из десяти пузырей это было эпично!",
          "Новый персонаж в обновлении просто супер"
        ],
        "mid": [
          "Сотни уровней это хорошо, но ближе к концу все похожи друг на друга.",
          "Бонусы помогают, но без них местами тяжело.",
          "Неплохо, но хотелось бы больше персонажей."
        ],
        "neg": [
          "Опять реклама прямо посреди уровня, задолбало",
          "Не могу пройти уровень 87 уже неделю бешусь",
          "После обновления стало лагать сильно."
        ]
      },
      "en": {
        "pos": [
          "Love bubble shooters and this one with birds is so cute!",
          "My favorite character is Stella, she is so cool",
          "I play during school breaks, super addictive",
          "My brother got me into this, we play together now",
          "Simple and fun game to relax with, nothing extra.",
          "Got a ten bubble combo that was epic!",
          "The new character in the update is amazing"
        ],
        "mid": [
          "Hundreds of levels is great but they start feeling the same near the end.",
          "Boosters help but some levels are tough without them.",
          "Pretty good, wish there were more characters."
        ],
        "neg": [
          "Ads right in the middle of a level again so annoying",
          "Stuck on level 87 for a week im so mad",
          "It started lagging a lot after the update."
        ]
      }
    },
    "cutrope": {
      "ru": {
        "pos": [
          "Ам Ням мой любимый герой, такой милый монстрик!",
          "Обожаю резать верёвки, играю с самого детства",
          "Лучшая головоломка вообще, прошёл все уровни три раза",
          "Сестра плачет когда проигрывает, так смешно с ней играть",
          "Классическая игра, до сих пор затягивает не хуже, чем раньше.",
          "Собрал все три звезды на самом сложном уровне!",
          "Показал эту игру другу теперь он тоже залип"
        ],
        "mid": [
          "Физика верёвок иногда странно себя ведёт, но в целом весело.",
          "Хорошая игра для детей, головоломки в меру сложные.",
          "Приятно, но хотелось бы больше новых уровней почаще."
        ],
        "neg": [
          "Застрял на одном уровне уже три дня подряд",
          "Реклама через каждый уровень это уже слишком",
          "Зависает при открытии некоторых уровней."
        ]
      },
      "en": {
        "pos": [
          "Om Nom is my favorite character, such a cute little monster!",
          "Love cutting the ropes, been playing since I was little",
          "Best puzzle game ever, beat all levels three times over",
          "My sister cries when she loses, so funny to play with her",
          "A classic that is still as addictive as ever.",
          "Got all three stars on the hardest level!",
          "Showed this to my friend now hes hooked too"
        ],
        "mid": [
          "Rope physics act weird sometimes but it is still fun.",
          "Good game for kids, puzzles are reasonably challenging.",
          "Nice but wish new levels came out more often."
        ],
        "neg": [
          "Stuck on the same level for three days straight",
          "Ads every single level is way too much",
          "It freezes when opening certain levels."
        ]
      }
    },
    "akbars": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "russtandard": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "tinvest": {
      "ru": {
        "pos": [
          "Состав портфеля и результат по каждой позиции видны на одном экране. Удобно быстро посмотреть, что изменилось.",
          "Нашёл нужную бумагу по тикеру, открыл карточку и спокойно прочитал информацию. Поиск без лишних шагов.",
          "Проверять состояние заявок с телефона удобно. Не надо держать открытым компьютер весь день.",
          "Нравится, что можно сначала изучить график и только потом перейти к заявке. Всё последовательно."
        ],
        "mid": [
          "Портфель посмотреть удобно, но терминов для новичка многовато. Некоторые всё равно ищу отдельно.",
          "Список бумаг устраивает. Для подробного разбора графиков мне удобнее большой экран."
        ],
        "neg": [
          "Цена в карточке и в списке обновлялась в разное время. Пока не разберутся с отображением, заявки отсюда отправлять не хочу.",
          "При открытии портфеля снова пустой экран. Для приложения, где нужно быстро проверить позиции, это серьёзная проблема."
        ]
      },
      "en": {
        "pos": [
          "Holdings and the result for each position are on one screen. It is easy to see what changed.",
          "I found the security by ticker and opened its details without a maze of extra steps.",
          "Checking order status from my phone is convenient. I do not need to keep my computer open all day.",
          "I like being able to inspect the chart before moving to the order screen. The flow makes sense."
        ],
        "mid": [
          "Portfolio viewing is straightforward, but a beginner still has plenty of terminology to look up.",
          "The securities list works for me. I still prefer a larger screen for detailed chart analysis."
        ],
        "neg": [
          "The list and detail screen updated prices at different times. I am not comfortable placing orders with that display inconsistency.",
          "My portfolio opens to a blank screen again. That is a serious problem when I need to check positions quickly."
        ]
      }
    },
    "sberinvest": {
      "ru": {
        "pos": [
          "Состав портфеля и результат по каждой позиции видны на одном экране. Удобно быстро посмотреть, что изменилось.",
          "Нашёл нужную бумагу по тикеру, открыл карточку и спокойно прочитал информацию. Поиск без лишних шагов.",
          "Проверять состояние заявок с телефона удобно. Не надо держать открытым компьютер весь день.",
          "Нравится, что можно сначала изучить график и только потом перейти к заявке. Всё последовательно."
        ],
        "mid": [
          "Портфель посмотреть удобно, но терминов для новичка многовато. Некоторые всё равно ищу отдельно.",
          "Список бумаг устраивает. Для подробного разбора графиков мне удобнее большой экран."
        ],
        "neg": [
          "Цена в карточке и в списке обновлялась в разное время. Пока не разберутся с отображением, заявки отсюда отправлять не хочу.",
          "При открытии портфеля снова пустой экран. Для приложения, где нужно быстро проверить позиции, это серьёзная проблема."
        ]
      },
      "en": {
        "pos": [
          "Holdings and the result for each position are on one screen. It is easy to see what changed.",
          "I found the security by ticker and opened its details without a maze of extra steps.",
          "Checking order status from my phone is convenient. I do not need to keep my computer open all day.",
          "I like being able to inspect the chart before moving to the order screen. The flow makes sense."
        ],
        "mid": [
          "Portfolio viewing is straightforward, but a beginner still has plenty of terminology to look up.",
          "The securities list works for me. I still prefer a larger screen for detailed chart analysis."
        ],
        "neg": [
          "The list and detail screen updated prices at different times. I am not comfortable placing orders with that display inconsistency.",
          "My portfolio opens to a blank screen again. That is a serious problem when I need to check positions quickly."
        ]
      }
    },
    "alfainvest": {
      "ru": {
        "pos": [
          "Состав портфеля и результат по каждой позиции видны на одном экране. Удобно быстро посмотреть, что изменилось.",
          "Нашёл нужную бумагу по тикеру, открыл карточку и спокойно прочитал информацию. Поиск без лишних шагов.",
          "Проверять состояние заявок с телефона удобно. Не надо держать открытым компьютер весь день.",
          "Нравится, что можно сначала изучить график и только потом перейти к заявке. Всё последовательно."
        ],
        "mid": [
          "Портфель посмотреть удобно, но терминов для новичка многовато. Некоторые всё равно ищу отдельно.",
          "Список бумаг устраивает. Для подробного разбора графиков мне удобнее большой экран."
        ],
        "neg": [
          "Цена в карточке и в списке обновлялась в разное время. Пока не разберутся с отображением, заявки отсюда отправлять не хочу.",
          "При открытии портфеля снова пустой экран. Для приложения, где нужно быстро проверить позиции, это серьёзная проблема."
        ]
      },
      "en": {
        "pos": [
          "Holdings and the result for each position are on one screen. It is easy to see what changed.",
          "I found the security by ticker and opened its details without a maze of extra steps.",
          "Checking order status from my phone is convenient. I do not need to keep my computer open all day.",
          "I like being able to inspect the chart before moving to the order screen. The flow makes sense."
        ],
        "mid": [
          "Portfolio viewing is straightforward, but a beginner still has plenty of terminology to look up.",
          "The securities list works for me. I still prefer a larger screen for detailed chart analysis."
        ],
        "neg": [
          "The list and detail screen updated prices at different times. I am not comfortable placing orders with that display inconsistency.",
          "My portfolio opens to a blank screen again. That is a serious problem when I need to check positions quickly."
        ]
      }
    },
    "megamarket": {
      "ru": {
        "pos": [
          "Сравнил несколько вариантов, почитал характеристики и выбрал нужный размер. На телефоне всё вполне удобно.",
          "Заказ и его статус находятся сразу. Не приходится каждый раз искать письмо с подтверждением.",
          "Фотографии покупателей помогают больше рекламных картинок. Несколько сомнительных покупок так отсеял.",
          "Собрал корзину вечером, утром вернулся к ней и спокойно закончил заказ. Всё осталось на месте.",
          "Поиск по точному названию сработал с первого раза. Не пришлось листать десятки похожих товаров.",
          "Удобно держать варианты в избранном и уже потом решать, что брать. Я обычно так и покупаю."
        ],
        "mid": [
          "Нужные вещи нахожу, но одинаковых карточек от разных продавцов слишком много. Сравнение затягивается.",
          "Оформить заказ несложно. А вот условия доставки хотелось бы видеть раньше, ещё до перехода в корзину."
        ],
        "neg": [
          "Выставляю фильтры, открываю товар, возвращаюсь — список снова сначала. Искать что-то конкретное так мучительно.",
          "В карточке одна цена, в корзине уже другая из-за условий скидки. Надоело разбираться в мелком тексте.",
          "Страница заказа зависла именно когда нужно было проверить доставку. Перезапуск ничего не изменил."
        ]
      },
      "en": {
        "pos": [
          "I compared a few items, checked the details and picked the right size. It was easy enough on my phone.",
          "My order and its status are easy to find. No need to search for a confirmation email each time.",
          "Customer photos are more useful than promotional images. They helped me rule out a few questionable purchases.",
          "I filled my cart in the evening and finished the order the next morning. Everything was still there.",
          "Searching for the exact item name worked immediately. I did not have to scroll through dozens of alternatives.",
          "I save options to my favourites and decide later. That suits the way I shop."
        ],
        "mid": [
          "I find what I need, but there are lots of near-identical listings from different sellers. Comparing them takes time.",
          "Checkout is straightforward. I would like delivery terms to be clearer before I get to the cart."
        ],
        "neg": [
          "I set filters, open an item and return to find the list reset. Looking for something specific is exhausting.",
          "The listing price changes in the cart because of discount conditions. I am tired of digging through the fine print.",
          "The order page froze when I needed to check the delivery. Restarting made no difference."
        ]
      }
    },
    "kuper": {
      "ru": {
        "pos": [
          "Собрал заказ к ужину, адрес и комментарий для курьера указал без проблем. Оформление понятное.",
          "Вижу состав заказа и его статус, не надо гадать, на каком он этапе.",
          "Повторить привычный заказ оказалось быстрее, чем собирать всё заново. Выручает в загруженные дни.",
          "Фотографии и описания помогли выбрать ужин. До оплаты спокойно проверил итоговую сумму."
        ],
        "mid": [
          "Заказывать удобно, но подходящий мне выбор сильно зависит от адреса. На работе вариантов больше, чем дома.",
          "Само оформление нормальное. Не все условия доставки замечаешь с первого раза."
        ],
        "neg": [
          "Время доставки несколько раз сдвигалось, а понятного объяснения в заказе не было. Рассчитывал получить еду к конкретному часу.",
          "Товары исчезли из корзины уже перед оплатой. Пришлось заново придумывать весь заказ."
        ]
      },
      "en": {
        "pos": [
          "I put together a dinner order and added my address and courier instructions easily. Checkout makes sense.",
          "I can see the order contents and its status instead of guessing where it is in the process.",
          "Reordering my usual items was quicker than rebuilding the basket. Handy on busy days.",
          "Photos and descriptions helped me choose dinner. I could check the total before paying."
        ],
        "mid": [
          "Ordering is convenient, though the useful options depend a lot on the address. I get more choice at work than at home.",
          "Checkout itself is fine. Some delivery conditions are easy to miss on the first pass."
        ],
        "neg": [
          "The delivery estimate kept moving with no clear explanation in the order. I needed the food by a particular time.",
          "Items disappeared from my basket just before payment. I had to rethink the entire order."
        ]
      }
    },
    "samokat": {
      "ru": {
        "pos": [
          "Собрал заказ к ужину, адрес и комментарий для курьера указал без проблем. Оформление понятное.",
          "Вижу состав заказа и его статус, не надо гадать, на каком он этапе.",
          "Повторить привычный заказ оказалось быстрее, чем собирать всё заново. Выручает в загруженные дни.",
          "Фотографии и описания помогли выбрать ужин. До оплаты спокойно проверил итоговую сумму."
        ],
        "mid": [
          "Заказывать удобно, но подходящий мне выбор сильно зависит от адреса. На работе вариантов больше, чем дома.",
          "Само оформление нормальное. Не все условия доставки замечаешь с первого раза."
        ],
        "neg": [
          "Время доставки несколько раз сдвигалось, а понятного объяснения в заказе не было. Рассчитывал получить еду к конкретному часу.",
          "Товары исчезли из корзины уже перед оплатой. Пришлось заново придумывать весь заказ."
        ]
      },
      "en": {
        "pos": [
          "I put together a dinner order and added my address and courier instructions easily. Checkout makes sense.",
          "I can see the order contents and its status instead of guessing where it is in the process.",
          "Reordering my usual items was quicker than rebuilding the basket. Handy on busy days.",
          "Photos and descriptions helped me choose dinner. I could check the total before paying."
        ],
        "mid": [
          "Ordering is convenient, though the useful options depend a lot on the address. I get more choice at work than at home.",
          "Checkout itself is fine. Some delivery conditions are easy to miss on the first pass."
        ],
        "neg": [
          "The delivery estimate kept moving with no clear explanation in the order. I needed the food by a particular time.",
          "Items disappeared from my basket just before payment. I had to rethink the entire order."
        ]
      }
    },
    "lamoda": {
      "ru": {
        "pos": [
          "По таблице размеров и фотографиям получилось сузить выбор до двух вещей. Это экономит время.",
          "Нравится рассматривать вещи крупно, детали на снимках видно хорошо.",
          "Отложил несколько вариантов и вернулся к ним вечером. Избранное здесь для меня полезнее бесконечных подборок.",
          "Нашёл нужную модель по названию, выбрал размер и оформил заказ без лишних экранов."
        ],
        "mid": [
          "Каталог хороший, но размер нужного цвета часто приходится проверять вручную.",
          "Для просмотра вещей удобно. Сравнивать несколько похожих моделей на маленьком экране сложнее."
        ],
        "neg": [
          "Фильтр по размеру пропускает вещи, где моего размера уже нет. Полвечера открывал пустые варианты.",
          "После возврата из карточки товара список прыгает наверх. На большом каталоге это просто выводит из себя."
        ]
      },
      "en": {
        "pos": [
          "The size chart and photos helped me narrow the choice to two items. That saves time.",
          "I like being able to inspect items closely. The photos show the details well.",
          "I saved a few options and returned in the evening. Favourites are more useful to me than endless recommendations.",
          "I found the model by name, chose a size and checked out without unnecessary screens."
        ],
        "mid": [
          "The catalogue is useful, but I often have to check size availability for each colour manually.",
          "Browsing clothing is comfortable. Comparing similar models on a small screen is less so."
        ],
        "neg": [
          "The size filter keeps showing items without my size in stock. I spent half the evening opening useless listings.",
          "Returning from an item jumps the list back to the top. In a large catalogue that is infuriating."
        ]
      }
    },
    "pyaterochka": {
      "ru": {
        "pos": [
          "Перед походом в магазин просматриваю акции и решаю, что брать. Удобнее, чем искать бумажный каталог.",
          "Карта магазина теперь всегда в телефоне. Перестал вспоминать о пластике уже у кассы.",
          "Нашёл ближайший магазин и посмотрел время работы. Всё, что было нужно в тот момент.",
          "Информация о товарах читается нормально, картинки крупные. Можно спокойно составить список покупок."
        ],
        "mid": [
          "Пользуюсь в основном картой. Остальные разделы открываю редко, поэтому их обилие немного мешает.",
          "Акции смотреть удобно, но хочется быстрее переключаться между магазинами."
        ],
        "neg": [
          "Карта на кассе не открылась, всё зависло на заставке. Именно ради неё приложение и ставил.",
          "Открываю акцию, а условия спрятаны внизу мелким текстом. В магазине выяснилось, что выбранный товар под неё не подходит."
        ]
      },
      "en": {
        "pos": [
          "I check the offers before shopping and decide what to buy. Easier than looking for a paper leaflet.",
          "The store card is always on my phone now. No more remembering the plastic card at the checkout.",
          "I found the nearest store and its opening hours. Exactly what I needed at the time.",
          "Product details are readable and the pictures are large. Planning a shopping list is comfortable."
        ],
        "mid": [
          "I mainly use the loyalty card. I rarely need the other sections, so the crowded layout gets in the way.",
          "Browsing offers is handy, but switching stores could take fewer steps."
        ],
        "neg": [
          "The loyalty card would not open at the checkout. It hung on the splash screen, and that was the feature I installed it for.",
          "Offer conditions are buried in small print. At the store I discovered the item I chose did not qualify."
        ]
      }
    },
    "aliexpress": {
      "ru": {
        "pos": [
          "Сравнил несколько вариантов, почитал характеристики и выбрал нужный размер. На телефоне всё вполне удобно.",
          "Заказ и его статус находятся сразу. Не приходится каждый раз искать письмо с подтверждением.",
          "Фотографии покупателей помогают больше рекламных картинок. Несколько сомнительных покупок так отсеял.",
          "Собрал корзину вечером, утром вернулся к ней и спокойно закончил заказ. Всё осталось на месте.",
          "Поиск по точному названию сработал с первого раза. Не пришлось листать десятки похожих товаров.",
          "Удобно держать варианты в избранном и уже потом решать, что брать. Я обычно так и покупаю."
        ],
        "mid": [
          "Нужные вещи нахожу, но одинаковых карточек от разных продавцов слишком много. Сравнение затягивается.",
          "Оформить заказ несложно. А вот условия доставки хотелось бы видеть раньше, ещё до перехода в корзину."
        ],
        "neg": [
          "Выставляю фильтры, открываю товар, возвращаюсь — список снова сначала. Искать что-то конкретное так мучительно.",
          "В карточке одна цена, в корзине уже другая из-за условий скидки. Надоело разбираться в мелком тексте.",
          "Страница заказа зависла именно когда нужно было проверить доставку. Перезапуск ничего не изменил."
        ]
      },
      "en": {
        "pos": [
          "I compared a few items, checked the details and picked the right size. It was easy enough on my phone.",
          "My order and its status are easy to find. No need to search for a confirmation email each time.",
          "Customer photos are more useful than promotional images. They helped me rule out a few questionable purchases.",
          "I filled my cart in the evening and finished the order the next morning. Everything was still there.",
          "Searching for the exact item name worked immediately. I did not have to scroll through dozens of alternatives.",
          "I save options to my favourites and decide later. That suits the way I shop."
        ],
        "mid": [
          "I find what I need, but there are lots of near-identical listings from different sellers. Comparing them takes time.",
          "Checkout is straightforward. I would like delivery terms to be clearer before I get to the cart."
        ],
        "neg": [
          "I set filters, open an item and return to find the list reset. Looking for something specific is exhausting.",
          "The listing price changes in the cart because of discount conditions. I am tired of digging through the fine print.",
          "The order page froze when I needed to check the delivery. Restarting made no difference."
        ]
      }
    },
    "yandexfood": {
      "ru": {
        "pos": [
          "Собрал заказ к ужину, адрес и комментарий для курьера указал без проблем. Оформление понятное.",
          "Вижу состав заказа и его статус, не надо гадать, на каком он этапе.",
          "Повторить привычный заказ оказалось быстрее, чем собирать всё заново. Выручает в загруженные дни.",
          "Фотографии и описания помогли выбрать ужин. До оплаты спокойно проверил итоговую сумму."
        ],
        "mid": [
          "Заказывать удобно, но подходящий мне выбор сильно зависит от адреса. На работе вариантов больше, чем дома.",
          "Само оформление нормальное. Не все условия доставки замечаешь с первого раза."
        ],
        "neg": [
          "Время доставки несколько раз сдвигалось, а понятного объяснения в заказе не было. Рассчитывал получить еду к конкретному часу.",
          "Товары исчезли из корзины уже перед оплатой. Пришлось заново придумывать весь заказ."
        ]
      },
      "en": {
        "pos": [
          "I put together a dinner order and added my address and courier instructions easily. Checkout makes sense.",
          "I can see the order contents and its status instead of guessing where it is in the process.",
          "Reordering my usual items was quicker than rebuilding the basket. Handy on busy days.",
          "Photos and descriptions helped me choose dinner. I could check the total before paying."
        ],
        "mid": [
          "Ordering is convenient, though the useful options depend a lot on the address. I get more choice at work than at home.",
          "Checkout itself is fine. Some delivery conditions are easy to miss on the first pass."
        ],
        "neg": [
          "The delivery estimate kept moving with no clear explanation in the order. I needed the food by a particular time.",
          "Items disappeared from my basket just before payment. I had to rethink the entire order."
        ]
      }
    },
    "dns": {
      "ru": {
        "pos": [
          "Сравнил характеристики двух мониторов прямо с телефона. Таблицу читать удобно, разницу видно.",
          "Посмотрел наличие техники в ближайшем магазине перед поездкой. Не пришлось звонить.",
          "По точному артикулу нашёл именно ту модель, которую искал. Для техники это важно.",
          "Отзывы и характеристики собраны рядом. Можно изучить товар до оформления."
        ],
        "mid": [
          "Каталог понятный, но фильтров по некоторым характеристикам мне не хватило.",
          "Выбирать с телефона удобно, большие таблицы всё же лучше смотрятся на компьютере."
        ],
        "neg": [
          "Выбранный магазин сбрасывается, и я снова смотрю наличие не там. Очень неудобно перед поездкой.",
          "При переключении между характеристиками и отзывами карточка зависает. Сравнить покупку нормально не удалось."
        ]
      },
      "en": {
        "pos": [
          "I compared two monitors on my phone. The specification table made the differences clear.",
          "I checked stock at the nearby store before travelling there. No phone call needed.",
          "Searching the exact product code found the model I wanted. That matters with electronics.",
          "Reviews and specifications sit together, making it easy to research an item before ordering."
        ],
        "mid": [
          "The catalogue is clear, but I missed filters for a few specifications.",
          "Shopping on the phone works well enough, though large specification tables suit a computer better."
        ],
        "neg": [
          "My selected store keeps resetting, so I end up checking stock in the wrong location.",
          "The product page freezes when I switch between specifications and reviews. I could not compare my options properly."
        ]
      }
    },
    "sportmaster": {
      "ru": {
        "pos": [
          "По таблице размеров и фотографиям получилось сузить выбор до двух вещей. Это экономит время.",
          "Нравится рассматривать вещи крупно, детали на снимках видно хорошо.",
          "Отложил несколько вариантов и вернулся к ним вечером. Избранное здесь для меня полезнее бесконечных подборок.",
          "Нашёл нужную модель по названию, выбрал размер и оформил заказ без лишних экранов."
        ],
        "mid": [
          "Каталог хороший, но размер нужного цвета часто приходится проверять вручную.",
          "Для просмотра вещей удобно. Сравнивать несколько похожих моделей на маленьком экране сложнее."
        ],
        "neg": [
          "Фильтр по размеру пропускает вещи, где моего размера уже нет. Полвечера открывал пустые варианты.",
          "После возврата из карточки товара список прыгает наверх. На большом каталоге это просто выводит из себя."
        ]
      },
      "en": {
        "pos": [
          "The size chart and photos helped me narrow the choice to two items. That saves time.",
          "I like being able to inspect items closely. The photos show the details well.",
          "I saved a few options and returned in the evening. Favourites are more useful to me than endless recommendations.",
          "I found the model by name, chose a size and checked out without unnecessary screens."
        ],
        "mid": [
          "The catalogue is useful, but I often have to check size availability for each colour manually.",
          "Browsing clothing is comfortable. Comparing similar models on a small screen is less so."
        ],
        "neg": [
          "The size filter keeps showing items without my size in stock. I spent half the evening opening useless listings.",
          "Returning from an item jumps the list back to the top. In a large catalogue that is infuriating."
        ]
      }
    },
    "fixprice": {
      "ru": {
        "pos": [
          "Перед походом смотрю товары для дома. Несколько нужных мелочей нашёл именно через каталог.",
          "Карту магазина удобно открыть с телефона, отдельный пластик больше не ношу.",
          "Фотографии крупные, сразу понятно, что за товар. Для простого списка покупок подходит."
        ],
        "mid": [
          "Идеи для покупок нахожу, но наличие всё равно проверяю в конкретном магазине.",
          "Картой пользоваться легко, а в каталоге хотелось бы больше полезных фильтров."
        ],
        "neg": [
          "Открыть карту без долгой загрузки у меня не получается. На кассе это раздражает сильнее всего.",
          "Поиск выдаёт много лишнего даже по точному названию. Нужную вещь так и не нашёл."
        ]
      },
      "en": {
        "pos": [
          "I browse household items before visiting. The catalogue helped me find several useful small things.",
          "Opening the store card on my phone is convenient. I no longer carry the plastic one.",
          "The photos are large enough to identify the items. It works well for a simple shopping list."
        ],
        "mid": [
          "I find shopping ideas here, but still check availability at the specific store.",
          "The loyalty card is easy to use. The catalogue could use more useful filters."
        ],
        "neg": [
          "I cannot open the loyalty card without a long wait. That is especially frustrating at the checkout.",
          "Search returns unrelated items even for an exact name. I never found what I wanted."
        ]
      }
    },
    "wink": {
      "ru": {
        "pos": [
          "Продолжил просмотр с того места, где остановился вечером. Не пришлось вспоминать номер серии.",
          "Нашёл нужное видео по названию. Проигрыватель понятный, лишний раз в настройки не лезу.",
          "Смотреть на планшете удобно: изображение крупное, кнопки не перекрывают половину кадра.",
          "Сохраняю интересное на потом, иначе постоянно забываю названия. Список пригодился."
        ],
        "mid": [
          "Проигрыватель устраивает. Рекомендации пока часто предлагают то, что мне неинтересно.",
          "Нужное видео нахожу, но главная страница для меня слишком пёстрая."
        ],
        "neg": [
          "На середине видео воспроизведение остановилось. Интернет работает, другие приложения открываются, а здесь только загрузка.",
          "После закрытия приложения пропало место просмотра. Пришлось вручную искать нужный момент длинного видео.",
          "Поиск выдаёт всё подряд, кроме точного названия, которое я ввёл. Пользоваться им надоело."
        ]
      },
      "en": {
        "pos": [
          "I resumed where I stopped the previous evening without having to remember the episode number.",
          "I found the video by title. The player is clear enough that I rarely need its settings.",
          "Watching on a tablet is comfortable. Controls do not cover half the picture.",
          "I save interesting things for later because I otherwise forget the titles. The list is useful."
        ],
        "mid": [
          "The player works for me. Recommendations still often suggest things I do not want to watch.",
          "I find the videos I want, but the home screen feels too busy."
        ],
        "neg": [
          "Playback stopped halfway through. My connection works and other apps open, but this one just keeps loading.",
          "Closing the app lost my viewing position. I had to search manually through a long video.",
          "Search returns everything except the exact title I entered. I am fed up with it."
        ]
      }
    },
    "start": {
      "ru": {
        "pos": [
          "Продолжил просмотр с того места, где остановился вечером. Не пришлось вспоминать номер серии.",
          "Нашёл нужное видео по названию. Проигрыватель понятный, лишний раз в настройки не лезу.",
          "Смотреть на планшете удобно: изображение крупное, кнопки не перекрывают половину кадра.",
          "Сохраняю интересное на потом, иначе постоянно забываю названия. Список пригодился."
        ],
        "mid": [
          "Проигрыватель устраивает. Рекомендации пока часто предлагают то, что мне неинтересно.",
          "Нужное видео нахожу, но главная страница для меня слишком пёстрая."
        ],
        "neg": [
          "На середине видео воспроизведение остановилось. Интернет работает, другие приложения открываются, а здесь только загрузка.",
          "После закрытия приложения пропало место просмотра. Пришлось вручную искать нужный момент длинного видео.",
          "Поиск выдаёт всё подряд, кроме точного названия, которое я ввёл. Пользоваться им надоело."
        ]
      },
      "en": {
        "pos": [
          "I resumed where I stopped the previous evening without having to remember the episode number.",
          "I found the video by title. The player is clear enough that I rarely need its settings.",
          "Watching on a tablet is comfortable. Controls do not cover half the picture.",
          "I save interesting things for later because I otherwise forget the titles. The list is useful."
        ],
        "mid": [
          "The player works for me. Recommendations still often suggest things I do not want to watch.",
          "I find the videos I want, but the home screen feels too busy."
        ],
        "neg": [
          "Playback stopped halfway through. My connection works and other apps open, but this one just keeps loading.",
          "Closing the app lost my viewing position. I had to search manually through a long video.",
          "Search returns everything except the exact title I entered. I am fed up with it."
        ]
      }
    },
    "ivi": {
      "ru": {
        "pos": [
          "Продолжил просмотр с того места, где остановился вечером. Не пришлось вспоминать номер серии.",
          "Нашёл нужное видео по названию. Проигрыватель понятный, лишний раз в настройки не лезу.",
          "Смотреть на планшете удобно: изображение крупное, кнопки не перекрывают половину кадра.",
          "Сохраняю интересное на потом, иначе постоянно забываю названия. Список пригодился."
        ],
        "mid": [
          "Проигрыватель устраивает. Рекомендации пока часто предлагают то, что мне неинтересно.",
          "Нужное видео нахожу, но главная страница для меня слишком пёстрая."
        ],
        "neg": [
          "На середине видео воспроизведение остановилось. Интернет работает, другие приложения открываются, а здесь только загрузка.",
          "После закрытия приложения пропало место просмотра. Пришлось вручную искать нужный момент длинного видео.",
          "Поиск выдаёт всё подряд, кроме точного названия, которое я ввёл. Пользоваться им надоело."
        ]
      },
      "en": {
        "pos": [
          "I resumed where I stopped the previous evening without having to remember the episode number.",
          "I found the video by title. The player is clear enough that I rarely need its settings.",
          "Watching on a tablet is comfortable. Controls do not cover half the picture.",
          "I save interesting things for later because I otherwise forget the titles. The list is useful."
        ],
        "mid": [
          "The player works for me. Recommendations still often suggest things I do not want to watch.",
          "I find the videos I want, but the home screen feels too busy."
        ],
        "neg": [
          "Playback stopped halfway through. My connection works and other apps open, but this one just keeps loading.",
          "Closing the app lost my viewing position. I had to search manually through a long video.",
          "Search returns everything except the exact title I entered. I am fed up with it."
        ]
      }
    },
    "premier": {
      "ru": {
        "pos": [
          "Продолжил просмотр с того места, где остановился вечером. Не пришлось вспоминать номер серии.",
          "Нашёл нужное видео по названию. Проигрыватель понятный, лишний раз в настройки не лезу.",
          "Смотреть на планшете удобно: изображение крупное, кнопки не перекрывают половину кадра.",
          "Сохраняю интересное на потом, иначе постоянно забываю названия. Список пригодился."
        ],
        "mid": [
          "Проигрыватель устраивает. Рекомендации пока часто предлагают то, что мне неинтересно.",
          "Нужное видео нахожу, но главная страница для меня слишком пёстрая."
        ],
        "neg": [
          "На середине видео воспроизведение остановилось. Интернет работает, другие приложения открываются, а здесь только загрузка.",
          "После закрытия приложения пропало место просмотра. Пришлось вручную искать нужный момент длинного видео.",
          "Поиск выдаёт всё подряд, кроме точного названия, которое я ввёл. Пользоваться им надоело."
        ]
      },
      "en": {
        "pos": [
          "I resumed where I stopped the previous evening without having to remember the episode number.",
          "I found the video by title. The player is clear enough that I rarely need its settings.",
          "Watching on a tablet is comfortable. Controls do not cover half the picture.",
          "I save interesting things for later because I otherwise forget the titles. The list is useful."
        ],
        "mid": [
          "The player works for me. Recommendations still often suggest things I do not want to watch.",
          "I find the videos I want, but the home screen feels too busy."
        ],
        "neg": [
          "Playback stopped halfway through. My connection works and other apps open, but this one just keeps loading.",
          "Closing the app lost my viewing position. I had to search manually through a long video.",
          "Search returns everything except the exact title I entered. I am fed up with it."
        ]
      }
    },
    "okko": {
      "ru": {
        "pos": [
          "Продолжил просмотр с того места, где остановился вечером. Не пришлось вспоминать номер серии.",
          "Нашёл нужное видео по названию. Проигрыватель понятный, лишний раз в настройки не лезу.",
          "Смотреть на планшете удобно: изображение крупное, кнопки не перекрывают половину кадра.",
          "Сохраняю интересное на потом, иначе постоянно забываю названия. Список пригодился."
        ],
        "mid": [
          "Проигрыватель устраивает. Рекомендации пока часто предлагают то, что мне неинтересно.",
          "Нужное видео нахожу, но главная страница для меня слишком пёстрая."
        ],
        "neg": [
          "На середине видео воспроизведение остановилось. Интернет работает, другие приложения открываются, а здесь только загрузка.",
          "После закрытия приложения пропало место просмотра. Пришлось вручную искать нужный момент длинного видео.",
          "Поиск выдаёт всё подряд, кроме точного названия, которое я ввёл. Пользоваться им надоело."
        ]
      },
      "en": {
        "pos": [
          "I resumed where I stopped the previous evening without having to remember the episode number.",
          "I found the video by title. The player is clear enough that I rarely need its settings.",
          "Watching on a tablet is comfortable. Controls do not cover half the picture.",
          "I save interesting things for later because I otherwise forget the titles. The list is useful."
        ],
        "mid": [
          "The player works for me. Recommendations still often suggest things I do not want to watch.",
          "I find the videos I want, but the home screen feels too busy."
        ],
        "neg": [
          "Playback stopped halfway through. My connection works and other apps open, but this one just keeps loading.",
          "Closing the app lost my viewing position. I had to search manually through a long video.",
          "Search returns everything except the exact title I entered. I am fed up with it."
        ]
      }
    },
    "zvuk": {
      "ru": {
        "pos": [
          "Собрал плейлист для дороги и теперь не выбираю каждый трек отдельно.",
          "Поиск по исполнителю нашёл нужный альбом сразу. Обложки помогают быстро сориентироваться.",
          "Нравится сохранять понравившуюся песню прямо во время прослушивания. Потом легко к ней вернуться.",
          "Открыл для себя несколько исполнителей из рекомендаций. Обычно слушаю одно и то же, а тут захотелось добавить новое."
        ],
        "mid": [
          "Музыку слушать удобно, но иногда рекомендации зацикливаются на одном настроении.",
          "Нужные альбомы есть, а вот организовать большую библиотеку так, как хочется, получается не всегда."
        ],
        "neg": [
          "Плейлист перестал воспроизводиться после пары треков. Каждый раз доставать телефон и запускать заново надоело.",
          "Поиск смешивает нужную песню с ремиксами и каверами. Оригинал приходится вылавливать вручную."
        ]
      },
      "en": {
        "pos": [
          "I made a playlist for travelling and no longer have to choose every track separately.",
          "Artist search found the album immediately. The covers make it easy to recognise.",
          "I like saving a song while listening. It is easy to return to it later.",
          "Recommendations introduced me to a few artists. I usually listen to the same things, but these made it into my library."
        ],
        "mid": [
          "Listening is convenient, though recommendations sometimes get stuck on one mood.",
          "The albums I want are there, but arranging a large library my way is not always easy."
        ],
        "neg": [
          "My playlist stops after a couple of tracks. I am tired of getting my phone out to restart it.",
          "Search mixes the song I want with remixes and covers. Finding the original becomes a manual hunt."
        ]
      }
    },
    "yandexalice": {
      "ru": {
        "pos": [
          "Читаю длинные статьи с телефона. Текст удобно увеличивать, страницы не превращаются в кашу.",
          "Нужный сайт снова нашёл в истории, хотя название уже забыл.",
          "Поиск под рукой, вкладки переключаются понятно. На повседневные задачи хватает.",
          "Сохранил несколько страниц, чтобы дочитать вечером. Удобнее, чем пересылать ссылки самому себе."
        ],
        "mid": [
          "Со страницами всё нормально, но главная перегружена блоками, которые мне не нужны.",
          "Пользоваться можно. Некоторые настройки привычнее были в предыдущем браузере."
        ],
        "neg": [
          "Открываю браузер ради конкретного сайта, а сначала получаю ленту рекомендаций. Слишком много отвлекающего.",
          "При возвращении во вкладку страница перезагружается и сбрасывает заполненную форму. Это уже несколько раз испортило работу."
        ]
      },
      "en": {
        "pos": [
          "I read long articles on my phone. Enlarging the text does not wreck the page layout.",
          "I found a website again in my history after forgetting its name.",
          "Search is easy to reach and switching tabs is straightforward. It covers my everyday browsing.",
          "I saved a few pages for the evening. More convenient than sending links to myself."
        ],
        "mid": [
          "Browsing pages works well, but the home screen has too many sections I do not need.",
          "It does the job. Some settings were easier for me to find in my previous browser."
        ],
        "neg": [
          "I open the browser for a specific website and first get a recommendation feed. Too distracting.",
          "Returning to a tab reloads the page and clears my form entries. This has interrupted my work several times."
        ]
      }
    },
    "nicegram": {
      "ru": {
        "pos": [
          "Переписка с близкими под рукой, нужный разговор нахожу быстро. Для меня это главное.",
          "Отправил несколько фотографий одним сообщением, всё дошло в нужном порядке. Удобно.",
          "Длинные сообщения читаются нормально, текст не слипается. Часто обсуждаем здесь рабочие вопросы.",
          "Нравится быстро возвращаться к разговорам, которые уже начаты. Не теряюсь в списке."
        ],
        "mid": [
          "Переписываться удобно, но непривычные настройки уведомлений пришлось изучить отдельно.",
          "Нужные мне функции есть. Часть дополнительных разделов я бы убрал с главного экрана."
        ],
        "neg": [
          "Новое сообщение вижу только после открытия приложения. Из-за пропущенных уведомлений пользоваться неудобно.",
          "При возвращении в длинную переписку теряется место, где читал. Каждый раз приходится листать заново."
        ]
      },
      "en": {
        "pos": [
          "Chats with people close to me are easy to reach. That is what matters most to me.",
          "I sent several photos together and they arrived in the right order. Convenient.",
          "Long messages are easy to read. We often discuss work here, so that helps.",
          "Getting back to an existing conversation is quick. I do not get lost in the list."
        ],
        "mid": [
          "Messaging is comfortable, though I had to spend time figuring out notification settings.",
          "The features I need are here. I would remove some extra sections from the main screen."
        ],
        "neg": [
          "I only see new messages after opening the app. Missed notifications make it difficult to use.",
          "Returning to a long conversation loses my reading position. I have to scroll back every time."
        ]
      }
    },
    "aigram": {
      "ru": {
        "pos": [
          "Переписка с близкими под рукой, нужный разговор нахожу быстро. Для меня это главное.",
          "Отправил несколько фотографий одним сообщением, всё дошло в нужном порядке. Удобно.",
          "Длинные сообщения читаются нормально, текст не слипается. Часто обсуждаем здесь рабочие вопросы.",
          "Нравится быстро возвращаться к разговорам, которые уже начаты. Не теряюсь в списке."
        ],
        "mid": [
          "Переписываться удобно, но непривычные настройки уведомлений пришлось изучить отдельно.",
          "Нужные мне функции есть. Часть дополнительных разделов я бы убрал с главного экрана."
        ],
        "neg": [
          "Новое сообщение вижу только после открытия приложения. Из-за пропущенных уведомлений пользоваться неудобно.",
          "При возвращении в длинную переписку теряется место, где читал. Каждый раз приходится листать заново."
        ]
      },
      "en": {
        "pos": [
          "Chats with people close to me are easy to reach. That is what matters most to me.",
          "I sent several photos together and they arrived in the right order. Convenient.",
          "Long messages are easy to read. We often discuss work here, so that helps.",
          "Getting back to an existing conversation is quick. I do not get lost in the list."
        ],
        "mid": [
          "Messaging is comfortable, though I had to spend time figuring out notification settings.",
          "The features I need are here. I would remove some extra sections from the main screen."
        ],
        "neg": [
          "I only see new messages after opening the app. Missed notifications make it difficult to use.",
          "Returning to a long conversation loses my reading position. I have to scroll back every time."
        ]
      }
    },
    "zoom": {
      "ru": {
        "pos": [
          "Подключился к встрече по ссылке, звук настроил сразу. Обошлось без помощи коллег.",
          "Когда не у компьютера, выручает возможность зайти на созвон с телефона.",
          "Кнопки микрофона и камеры заметные. Не ищу их, когда нужно быстро ответить.",
          "Наушники подключились нормально, собеседников слышал хорошо всю встречу."
        ],
        "mid": [
          "Для коротких созвонов удобно. Читать демонстрацию большого экрана на телефоне всё равно тяжело.",
          "Основные кнопки понятные, дополнительные настройки во время встречи найти сложнее."
        ],
        "neg": [
          "Микрофон перестал передавать звук посреди встречи. Пришлось выходить и заходить снова, разговор уже прошёл мимо.",
          "После перехода между приложениями изображение зависло. Для рабочего созвона такая нестабильность не подходит."
        ]
      },
      "en": {
        "pos": [
          "I joined a meeting through its link and set up audio right away, without needing a colleague’s help.",
          "Being able to join from my phone is helpful when I am away from my computer.",
          "Microphone and camera controls are easy to spot when I need to respond quickly.",
          "My headphones connected properly and I could hear everyone throughout the meeting."
        ],
        "mid": [
          "It is convenient for short calls. A shared desktop is still difficult to read on a phone.",
          "Main controls are clear. Extra settings are harder to find during a meeting."
        ],
        "neg": [
          "My microphone stopped transmitting during a meeting. I had to rejoin and missed the discussion.",
          "Video froze after I switched apps. That kind of instability is not acceptable on a work call."
        ]
      }
    },
    "yandexdisk": {
      "ru": {
        "pos": [
          "Передал большой набор фотографий одной ссылкой. Получателям не пришлось разбирать десятки сообщений.",
          "Документ, загруженный с компьютера, быстро нашёл на телефоне. Именно такой сценарий мне и нужен.",
          "Собрал файлы по папкам, искать стало гораздо проще. Названия видны нормально.",
          "Удобно открыть нужный файл вне дома и отправить ссылку, не включая компьютер."
        ],
        "mid": [
          "Для документов подходит. С большой фототекой приходится внимательнее следить за свободным местом.",
          "Файлы передаются нормально, но настройки загрузки фото нашёл не сразу."
        ],
        "neg": [
          "Загрузка файлов замерла и не объясняет причину. Не понимаю, можно ли уже закрывать приложение.",
          "В большой папке список постоянно подгружается заново. Добраться до нужного документа слишком трудно."
        ]
      },
      "en": {
        "pos": [
          "I shared a large photo collection with one link. Recipients did not have to sort through dozens of messages.",
          "I quickly found a document uploaded from my computer on my phone. That is exactly what I need.",
          "Organising files into folders made them much easier to find. File names are readable.",
          "Being able to open a file away from home and share its link without my computer is useful."
        ],
        "mid": [
          "It works well for documents. A large photo library requires more attention to storage space.",
          "File transfers work, though photo upload settings took me a while to find."
        ],
        "neg": [
          "My file upload stalled without an explanation. I cannot tell whether it is safe to close the app.",
          "A large folder keeps reloading its list. Reaching the document I need is unnecessarily difficult."
        ]
      }
    },
    "capcut": {
      "ru": {
        "pos": [
          "Собрал короткий ролик из поездки: обрезал лишнее, добавил музыку и сохранил. Для такого монтажа очень удобно.",
          "На шкале времени легко понять, где заканчивается один фрагмент и начинается следующий.",
          "Подписи к ролику сделал прямо с телефона. Не пришлось переносить материал на компьютер.",
          "Нравится сразу видеть результат перехода, а не гадать по его названию."
        ],
        "mid": [
          "Быстрые ролики собирать удобно. В большом проекте уже тесно на экране телефона.",
          "Нужные инструменты есть, но бесплатные и платные возможности хотелось бы различать раньше."
        ],
        "neg": [
          "Экспорт остановился почти в конце. Потратил время на монтаж, а готовый файл так и не получил.",
          "После возврата в проект звук уехал относительно видео. Переделывать синхронизацию вручную очень неприятно."
        ]
      },
      "en": {
        "pos": [
          "I put together a short trip video, trimmed it, added music and saved it. Convenient for that kind of edit.",
          "The timeline makes clip boundaries easy to see.",
          "I added captions on my phone without moving the footage to my computer.",
          "I like previewing a transition instead of guessing from its name."
        ],
        "mid": [
          "Quick edits are convenient. A large project gets cramped on the phone screen.",
          "The tools I need are there, but I wish free and paid features were distinguished earlier."
        ],
        "neg": [
          "Export stopped near the end. I spent time editing but never got the finished file.",
          "Returning to the project left audio out of sync with the video. Fixing it manually is frustrating."
        ]
      }
    },
    "zen": {
      "ru": {
        "pos": [
          "Продолжил просмотр с того места, где остановился вечером. Не пришлось вспоминать номер серии.",
          "Нашёл нужное видео по названию. Проигрыватель понятный, лишний раз в настройки не лезу.",
          "Смотреть на планшете удобно: изображение крупное, кнопки не перекрывают половину кадра.",
          "Сохраняю интересное на потом, иначе постоянно забываю названия. Список пригодился."
        ],
        "mid": [
          "Проигрыватель устраивает. Рекомендации пока часто предлагают то, что мне неинтересно.",
          "Нужное видео нахожу, но главная страница для меня слишком пёстрая."
        ],
        "neg": [
          "На середине видео воспроизведение остановилось. Интернет работает, другие приложения открываются, а здесь только загрузка.",
          "После закрытия приложения пропало место просмотра. Пришлось вручную искать нужный момент длинного видео.",
          "Поиск выдаёт всё подряд, кроме точного названия, которое я ввёл. Пользоваться им надоело."
        ]
      },
      "en": {
        "pos": [
          "I resumed where I stopped the previous evening without having to remember the episode number.",
          "I found the video by title. The player is clear enough that I rarely need its settings.",
          "Watching on a tablet is comfortable. Controls do not cover half the picture.",
          "I save interesting things for later because I otherwise forget the titles. The list is useful."
        ],
        "mid": [
          "The player works for me. Recommendations still often suggest things I do not want to watch.",
          "I find the videos I want, but the home screen feels too busy."
        ],
        "neg": [
          "Playback stopped halfway through. My connection works and other apps open, but this one just keeps loading.",
          "Closing the app lost my viewing position. I had to search manually through a long video.",
          "Search returns everything except the exact title I entered. I am fed up with it."
        ]
      }
    },
    "russianpost": {
      "ru": {
        "pos": [
          "Добавил посылку по трек-номеру и вижу все её этапы в одном списке.",
          "Нашёл время работы отделения перед выходом из дома. Избежал поездки к закрытой двери.",
          "Несколько отправлений отслеживать здесь проще, чем сохранять ссылки на каждое.",
          "Трек-номер не нужно переписывать при каждой проверке. Открыл приложение — посылка уже в списке."
        ],
        "mid": [
          "Трекинг работает, но названия некоторых статусов непонятны без дополнительного объяснения.",
          "Для проверки посылок хватает. Другие возможности нахожу не сразу."
        ],
        "neg": [
          "По посылке отображается старый статус, хотя она уже в отделении. Уведомление так и не пришло.",
          "Вводил трек несколько раз, приложение просто возвращало на прежний экран. Никакого объяснения ошибки."
        ]
      },
      "en": {
        "pos": [
          "I added a parcel by tracking number and can see its stages in one list.",
          "I checked branch opening hours before leaving home and avoided a wasted trip.",
          "Tracking several shipments here is easier than keeping a separate link for each one.",
          "I do not have to enter the tracking number every time. My parcel is already in the list."
        ],
        "mid": [
          "Tracking works, but some status names need a clearer explanation.",
          "It is sufficient for checking parcels. Other features are harder to find."
        ],
        "neg": [
          "My parcel still shows an old status even though it is at the branch. No notification arrived.",
          "I entered the tracking number several times and the app just returned to the previous screen. No explanation."
        ]
      }
    },
    "genshin": {
      "ru": {
        "pos": [
          "Мой любимый герой Дилюк, обожаю играть за него!",
          "ПЭЙМОН ТАКАЯ МИЛАЯ я обожаю эту игру",
          "Крутиш на баннерах с другом по вотсапу, весело обсуждать",
          "Лучшая игра вообще, прохожу с одноклассником каждый день",
          "Впечатляющий мир для мобильной игры, залипаю на часы даже во взрослом возрасте.",
          "Новый регион вышел, исследую уже третий день подряд!",
          "Собрал команду мечты, теперь прохожу подземелья легко"
        ],
        "mid": [
          "Игра классная, но требует много времени на фарм.",
          "Красивая графика, но телефон греется при долгой игре.",
          "Сюжет интересный, но новых регионов ждать приходится долго."
        ],
        "neg": [
          "Опять не выпал нужный персонаж уже 100 круток трачу",
          "Телефон жутко греется и садится батарея за час",
          "После обновления игра стала вылетать на моём устройстве."
        ]
      },
      "en": {
        "pos": [
          "My favorite character is Diluc, love playing as him!",
          "PAIMON IS SO CUTE I love this game so much",
          "Pulling on banners with my friend over chat is so fun",
          "Best game ever, play it with my classmate every day",
          "Impressive world for a mobile game, I still lose hours to it as an adult.",
          "The new region dropped, ive been exploring for three days straight!",
          "Built my dream team, dungeons are easy now"
        ],
        "mid": [
          "Great game but requires a lot of time farming.",
          "Beautiful graphics but my phone heats up during long sessions.",
          "Story is interesting but new regions take a while to arrive."
        ],
        "neg": [
          "Still no luck pulling the character I want after 100 pulls",
          "Phone gets really hot and battery drains in an hour",
          "The game started crashing on my device after the update."
        ]
      }
    },
    "mytalkingtom": {
      "ru": {
        "pos": [
          "Том мой лучший друг, кормлю его каждый день!",
          "Обожаю наряжать Анджелу, у неё столько нарядов",
          "Играю с младшим братом, ему уже разрешают самому",
          "Мама говорит что это мило смотреть как я забочусь о Томе",
          "Милая игра, приятно смотреть даже взрослому как ребёнок ухаживает за питомцем.",
          "У Хэнка появился новый костюм, обожаю его наряжать!",
          "Играю каждый вечер перед сном, так расслабляет"
        ],
        "mid": [
          "Симпатичная игра, но многие наряды доступны только за донат.",
          "Ребёнку нравится, реклама в меру, но иногда всё же надоедает.",
          "Хорошая игра для малышей, хотя мини-игр хотелось бы побольше."
        ],
        "neg": [
          "Том всё время просит поесть а я не успеваю играть в остальное",
          "Слишком много рекламы для детской игры это неправильно",
          "После обновления сохранения слетели, очень обидно."
        ]
      },
      "en": {
        "pos": [
          "Tom is my best friend, I feed him every day!",
          "Love dressing up Angela, she has so many outfits",
          "I play with my little brother, he gets to play by himself now",
          "Mom says its cute watching me take care of Tom",
          "A cute game, nice even for adults to watch a kid care for a pet.",
          "Hank got a new outfit, love dressing him up!",
          "I play every night before bed, so relaxing"
        ],
        "mid": [
          "Cute game but a lot of outfits are locked behind payments.",
          "My kid loves it, ads are mostly okay but get annoying sometimes.",
          "Good game for little kids, wish there were more mini-games."
        ],
        "neg": [
          "Tom always wants to eat and I can't get to the other games",
          "Way too many ads for a kids game, not okay",
          "My save data got wiped after the update, so upsetting."
        ]
      }
    },
    "tocakitchen": {
      "ru": {
        "pos": [
          "Наконец-то скачал Toca Boca с модом на iPhone, искал нормальную рабочую версию полгода!",
          "Всё реально открыто, все локации и персонажи, не надо задротить и платить донат.",
          "Дочка в восторге — зашла в креатор, а там уже вся одежда доступна, ничего не покупать.",
          "Подарки на почте бесконечные, забираешь каждый день по 10 штук, сын кайфует.",
          "Поставилось в один клик, работает без лагов, прогресс сохраняется как в оригинале.",
          "Платные хэллоуинские вещи тоже уже открыты — ребёнок сразу собрал всех персонажей.",
          "Нашёл спустя кучу сайтов именно рабочий мод на айфон, остальные были или липовые или просили кучу всего."
        ],
        "mid": [
          "Всё работает, но иконка выглядит как от оригинала — иногда пугаюсь что это обычная игра.",
          "Открыто действительно всё, но интерфейс местами тормозит на старом iPhone 8."
        ],
        "neg": [
          "После обновления пришлось переустанавливать — прогресс пропал, обидно.",
          "Иногда в онлайне не грузятся новые события, похоже сервер не всегда дружит с модом.",
          "Батарея разряжается заметно быстрее чем на обычной версии, видимо из-за разблокировок."
        ]
      },
      "en": {
        "pos": [
          "Finally got Toca Boca MOD running on iPhone, been looking for a working build for half a year!",
          "Everything really is unlocked — all locations and characters, no need to grind or pay.",
          "My daughter is over the moon — jumped into the Creator and the whole wardrobe was already available.",
          "Post Office gifts are unlimited, you grab 10 a day, my son is loving it.",
          "Installed in one tap, no lag, progress saves just like in the original.",
          "Paid Halloween items are already unlocked too — kid collected all characters right away.",
          "After trying tons of sites, this is the first iPhone MOD that actually works and didn't ask for anything weird."
        ],
        "mid": [
          "All works, but the icon looks identical to the stock game — sometimes I think I opened the regular one.",
          "Everything is unlocked, but UI stutters a bit on an old iPhone 8."
        ],
        "neg": [
          "Had to reinstall after an update — progress wiped, bummer.",
          "Sometimes online events don't load, looks like the server doesn't always play nice with the MOD.",
          "Battery drains noticeably faster than the stock version, probably because of all the unlocks."
        ]
      }
    },
    "freefire": {
      "ru": {
        "pos": [
          "Мой любимый скин на персонаже просто топ, все завидуют в классе!",
          "Играю с друзьями после школы, самая динамичная игра",
          "10 минут матч это идеально, успеваю сыграть между уроками",
          "Обожаю собирать новые скины, коплю монеты уже месяц",
          "Динамичный батл-рояль, затягивает даже взрослых на пару матчей.",
          "Выиграл матч один против троих это было невероятно!",
          "Новая карта огонь, играю там теперь постоянно"
        ],
        "mid": [
          "Матчи быстрые, но донат на скины ощутимо кусается.",
          "Игра неплохая, но новичкам первое время тяжело против опытных.",
          "Весело с друзьями, но одному играть быстро надоедает."
        ],
        "neg": [
          "Опять словил читера в игре, это невыносимо",
          "Реклама между матчами уже задолбала если честно",
          "После обновления игра лагает на моём телефоне."
        ]
      },
      "en": {
        "pos": [
          "My favorite skin is so cool, everyone at school is jealous!",
          "I play with friends after school, most fast-paced game ever",
          "A 10 minute match is perfect, I can fit one in between classes",
          "Love collecting new skins, been saving coins for a month",
          "A fast-paced battle royale, hooks even adults for a match or two.",
          "Won a match one versus three that was insane!",
          "The new map is fire, I only play there now"
        ],
        "mid": [
          "Matches are quick but skin prices add up fast.",
          "Decent game but tough for beginners against experienced players.",
          "Fun with friends but gets old fast playing solo."
        ],
        "neg": [
          "Ran into another cheater in a match, so frustrating",
          "Ads between matches got really old honestly",
          "The game started lagging on my phone after the update."
        ]
      }
    },
    "mobilelegends": {
      "ru": {
        "pos": [
          "Мой любимый герой Гусион, обожаю играть на нём!",
          "Играю с одноклассниками в команде, очень весело",
          "Ранговые бои затягивают, поднимаюсь с другом по рангу вместе",
          "Лучшая MOBA на телефоне вообще",
          "Динамичные командные бои, неплохо и взрослому провести вечер.",
          "Поднялся до нового ранга наконец, старался месяц!",
          "Новый герой в патче прям сильный, всем советую"
        ],
        "mid": [
          "Игра затягивает, но токсичные тиммейты иногда портят настроение.",
          "Баланс героев неидеальный, но в целом весело.",
          "Хорошая MOBA, но новичку разобраться сначала непросто."
        ],
        "neg": [
          "Опять слился тиммейт из матча, ненавижу такое",
          "Донат на героев ощутимо кусается",
          "После обновления игра стала вылетать посреди матча."
        ]
      },
      "en": {
        "pos": [
          "My favorite hero is Gusion, love playing him!",
          "I play with my classmates as a team, so much fun",
          "Ranked matches are addictive, climbing with my friend together",
          "Best MOBA on mobile honestly",
          "Fast-paced team battles, decent way for an adult to spend an evening too.",
          "Finally hit a new rank, took me a month!",
          "The new hero in the patch is really strong, recommend"
        ],
        "mid": [
          "Addictive game but toxic teammates ruin the mood sometimes.",
          "Hero balance is not perfect but it is still fun overall.",
          "Good MOBA but tough to learn as a beginner."
        ],
        "neg": [
          "A teammate left mid match again, I hate that",
          "Hero prices are pretty rough on the wallet",
          "The game started crashing mid-match after the update."
        ]
      }
    },
    "aviasales": {
      "ru": {
        "pos": [
          "Сравнил несколько дат и нашёл более удобное время вылета. Не пришлось открывать десяток сайтов.",
          "Фильтр по пересадкам сильно сокращает список. Так быстрее выбираю приемлемый маршрут.",
          "Хорошо видно, где долгая пересадка. Один неудобный вариант сразу отбросил.",
          "Для первого сравнения билетов очень удобно. Финальные условия потом внимательно читаю у продавца."
        ],
        "mid": [
          "Вариантов много, но окончательные условия всё равно приходится сверять после перехода к продавцу.",
          "Поиск понятный. Хотелось бы проще сравнивать багаж в нескольких выбранных вариантах."
        ],
        "neg": [
          "Перехожу к предложению, а цена уже другая. Несколько таких переходов подряд — только потерянное время.",
          "Настроенные фильтры сбросились после возвращения в поиск. Пришлось разбирать весь список заново."
        ]
      },
      "en": {
        "pos": [
          "I compared a few dates and found a better departure time without opening ten websites.",
          "Filtering by stopovers cuts the list down considerably. It makes choosing a route quicker.",
          "Long connections are easy to spot. I ruled out an inconvenient option immediately.",
          "It is useful for an initial fare comparison. I read the final conditions carefully with the seller."
        ],
        "mid": [
          "There are plenty of options, but I still need to check the final terms after moving to the seller.",
          "Search is clear. Comparing baggage allowances across shortlisted options could be easier."
        ],
        "neg": [
          "I open an offer and the price has already changed. Several such trips in a row just waste time.",
          "My filters reset when I returned to search. I had to sort through the full list again."
        ]
      }
    },
    "exteragram": {
      "ru": {
        "pos": [
          "Переписка с близкими под рукой, нужный разговор нахожу быстро. Для меня это главное.",
          "Отправил несколько фотографий одним сообщением, всё дошло в нужном порядке. Удобно.",
          "Длинные сообщения читаются нормально, текст не слипается. Часто обсуждаем здесь рабочие вопросы.",
          "Нравится быстро возвращаться к разговорам, которые уже начаты. Не теряюсь в списке."
        ],
        "mid": [
          "Переписываться удобно, но непривычные настройки уведомлений пришлось изучить отдельно.",
          "Нужные мне функции есть. Часть дополнительных разделов я бы убрал с главного экрана."
        ],
        "neg": [
          "Новое сообщение вижу только после открытия приложения. Из-за пропущенных уведомлений пользоваться неудобно.",
          "При возвращении в длинную переписку теряется место, где читал. Каждый раз приходится листать заново."
        ]
      },
      "en": {
        "pos": [
          "Chats with people close to me are easy to reach. That is what matters most to me.",
          "I sent several photos together and they arrived in the right order. Convenient.",
          "Long messages are easy to read. We often discuss work here, so that helps.",
          "Getting back to an existing conversation is quick. I do not get lost in the list."
        ],
        "mid": [
          "Messaging is comfortable, though I had to spend time figuring out notification settings.",
          "The features I need are here. I would remove some extra sections from the main screen."
        ],
        "neg": [
          "I only see new messages after opening the app. Missed notifications make it difficult to use.",
          "Returning to a long conversation loses my reading position. I have to scroll back every time."
        ]
      }
    },
    "moegramx": {
      "ru": {
        "pos": [
          "Переписка с близкими под рукой, нужный разговор нахожу быстро. Для меня это главное.",
          "Отправил несколько фотографий одним сообщением, всё дошло в нужном порядке. Удобно.",
          "Длинные сообщения читаются нормально, текст не слипается. Часто обсуждаем здесь рабочие вопросы.",
          "Нравится быстро возвращаться к разговорам, которые уже начаты. Не теряюсь в списке."
        ],
        "mid": [
          "Переписываться удобно, но непривычные настройки уведомлений пришлось изучить отдельно.",
          "Нужные мне функции есть. Часть дополнительных разделов я бы убрал с главного экрана."
        ],
        "neg": [
          "Новое сообщение вижу только после открытия приложения. Из-за пропущенных уведомлений пользоваться неудобно.",
          "При возвращении в длинную переписку теряется место, где читал. Каждый раз приходится листать заново."
        ]
      },
      "en": {
        "pos": [
          "Chats with people close to me are easy to reach. That is what matters most to me.",
          "I sent several photos together and they arrived in the right order. Convenient.",
          "Long messages are easy to read. We often discuss work here, so that helps.",
          "Getting back to an existing conversation is quick. I do not get lost in the list."
        ],
        "mid": [
          "Messaging is comfortable, though I had to spend time figuring out notification settings.",
          "The features I need are here. I would remove some extra sections from the main screen."
        ],
        "neg": [
          "I only see new messages after opening the app. Missed notifications make it difficult to use.",
          "Returning to a long conversation loses my reading position. I have to scroll back every time."
        ]
      }
    },
    "roblox": {
      "ru": {
        "pos": [
          "Обожаю наряжать своего аватара, у меня уже сто вещей!",
          "Играю с друзьями каждый день, там столько разных игр",
          "Лучшая платформа вообще, можно найти игру на любой вкус",
          "Играю после школы каждый день, всегда нахожу что-то новое",
          "Удивительно, сколько всего придумывают игроки — интересно даже взрослому.",
          "Построил свою первую игру в студии, друзья играли весь вечер!",
          "Нашёл классный ролеплей сервер с одноклассниками"
        ],
        "mid": [
          "Игр там очень много, но качество сильно отличается от проекта к проекту.",
          "Ребёнку нравится, родительский контроль реально помогает.",
          "Хорошая платформа, но Robux стоят ощутимо дорого."
        ],
        "neg": [
          "Опять лагает в популярной игре из-за большого количества игроков",
          "Ребёнок потратил слишком много на Robux, это проблема",
          "После обновления приложение стало вылетать у меня на телефоне."
        ]
      },
      "en": {
        "pos": [
          "Love dressing up my avatar, I have like a hundred items!",
          "I play with friends every day, there are so many games",
          "Best platform ever, theres a game for every taste",
          "I play after school every day, always find something new",
          "Amazing how much players create here — interesting even as an adult.",
          "Built my first game in studio, friends played it all evening!",
          "Found a cool roleplay server with my classmates"
        ],
        "mid": [
          "Tons of games but quality varies a lot between them.",
          "My kid loves it, parental controls actually help.",
          "Good platform but Robux get pretty expensive."
        ],
        "neg": [
          "A popular game lags a ton because of how many players join",
          "My kid spent way too much on Robux, thats a real problem",
          "The app started crashing on my phone after the update."
        ]
      }
    },
    "standoffcase": {
      "ru": {
        "pos": [
          "Открывать кейсы это так затягивает, уже час сижу!",
          "Крутая озвучка и 3D модельки скинов, прям как в настоящей игре",
          "С друзьями соревнуемся кто круче скин откроет",
          "Нашёл редкий скин с первой попытки, повезло невероятно",
          "Приятный фан-симулятор, безопасная альтернатива настоящим донатам в игре.",
          "Выбил легендарный скин с третьей попытки, повезло!",
          "Коллекция уже почти полная, осталось три предмета"
        ],
        "mid": [
          "Симулятор неплохой, но реклама после каждого открытия немного напрягает.",
          "Прикольно, но со временем открывать кейсы приедается.",
          "Хорошая идея, но хотелось бы больше видов кейсов."
        ],
        "neg": [
          "Одна и та же анимация надоела уже через пару дней",
          "Слишком много рекламы для простого симулятора",
          "Зависает при открытии редкого кейса, обидно."
        ]
      },
      "en": {
        "pos": [
          "Opening cases is so addictive, been at it for an hour!",
          "Great sound and 3D skin models, feels just like the real game",
          "Me and my friends compete over who gets the cooler skin",
          "Got a rare skin on my first try, so lucky",
          "A fun fan simulator, a safe alternative to real spending in the game.",
          "Got a legendary skin on my third try, so lucky!",
          "My collection is almost complete, three items left"
        ],
        "mid": [
          "Decent simulator but ads after every case open get a bit much.",
          "Fun at first but opening cases gets old after a while.",
          "Good idea but wish there were more case types."
        ],
        "neg": [
          "Same animation gets old after a couple days",
          "Way too many ads for a simple simulator",
          "It freezes when opening a rare case, so annoying."
        ]
      }
    },
    "brawlbox": {
      "ru": {
        "pos": [
          "Открывать боксы прикольно, коплю монеты каждый день!",
          "Классная фанатская игра, жду персонажей с нетерпением",
          "С другом соревнуемся кто больше персонажей соберёт",
          "Симпатичная анимация открытия, реально затягивает",
          "Неплохой фанатский симулятор для тех, кто любит Brawl Stars.",
          "Открыл сразу два редких персонажа подряд, повезло!",
          "Анимация открытия сундука прям как в оригинале"
        ],
        "mid": [
          "Простая игра, но затягивает на пару вечеров.",
          "Прикольная идея, но контента маловато для долгой игры.",
          "Норм чтобы скоротать время, ничего особенного."
        ],
        "neg": [
          "Реклама вылезает слишком часто для такой простой игры",
          "Быстро надоедает, открыл всех персонажей за день",
          "Зависает иногда при открытии сейфа."
        ]
      },
      "en": {
        "pos": [
          "Opening boxes is fun, saving up coins every day!",
          "Cool fan game, excited to unlock more characters",
          "Me and my friend compete over who collects more characters",
          "The opening animation is cute, really addictive",
          "A decent fan simulator for Brawl Stars fans.",
          "Unlocked two rare characters in a row, lucky!",
          "The box opening animation feels just like the original"
        ],
        "mid": [
          "Simple game but fun for a couple of evenings.",
          "Cute idea but not enough content for long-term play.",
          "Fine for killing time, nothing special."
        ],
        "neg": [
          "Ads pop up way too often for such a simple game",
          "Got boring fast, unlocked everything in a day",
          "It freezes sometimes when opening a vault."
        ]
      }
    },
    "geodash": {
      "ru": {
        "pos": [
          "Наконец прошёл сложный уровень с пятидесятой попытки, ЙЕС!",
          "Музыка в игре просто огонь, играю в наушниках",
          "Играю с другом кто быстрее пройдёт уровень",
          "Сложная но затягивает, не могу перестать пытаться",
          "Хорошая аркада и для взрослых, отличная тренировка реакции.",
          "Прошёл уровень без единой смерти это рекорд для меня!",
          "Создал свой первый уровень в редакторе, друзья хвалят"
        ],
        "mid": [
          "Сложность иногда несправедливая, но чувство прохождения того стоит.",
          "Хорошая игра, но реклама между попытками раздражает.",
          "Музыка отличная, самих уровней могло бы быть побольше."
        ],
        "neg": [
          "Застрял на одном уровне уже неделю это невозможно пройти!",
          "Реклама вылезает слишком часто",
          "Игра вылетает при загрузке нового уровня."
        ]
      },
      "en": {
        "pos": [
          "Finally beat that hard level on my 50th try, YES!",
          "The music is so good, I play with headphones on",
          "Me and my friend race to see who beats the level first",
          "So hard but so addictive, cant stop trying",
          "Good arcade game for adults too, great reflex training.",
          "Beat a level without dying once, thats a record for me!",
          "Made my first level in the editor, friends love it"
        ],
        "mid": [
          "Difficulty feels unfair sometimes but beating a level feels amazing.",
          "Good game but ads between attempts are annoying.",
          "Great music, wish there were more levels."
        ],
        "neg": [
          "Stuck on one level for a week this is impossible!",
          "Ads pop up way too often",
          "The game crashes when loading a new level."
        ]
      }
    },
    "plagueinc": {
      "ru": {
        "pos": [
          "Заразил весь мир за 40 минут, я гений эпидемии!",
          "Играю с братом кто быстрее уничтожит человечество",
          "Самая интересная стратегия что я играл",
          "Теперь всем на уроке биологии рассказываю про вирусы из игры",
          "Умная затягивающая стратегия, отличная тренировка для мозга даже взрослому.",
          "Прошёл на сложности брутальной наконец, было непросто!",
          "Придумал свою стратегию с грибковой инфекцией, сработало"
        ],
        "mid": [
          "Интересная механика, но первые попытки почти всегда проигрышные.",
          "Хорошая стратегия, английский сначала немного сложный.",
          "Затягивает, но на высокой сложности очень трудно."
        ],
        "neg": [
          "Проиграл уже 10 раз подряд не могу понять стратегию бесит",
          "Слишком сложно на высоких уровнях сложности",
          "Игра зависает при загрузке карты мира."
        ]
      },
      "en": {
        "pos": [
          "Infected the whole world in 40 minutes, im an epidemic genius!",
          "Me and my brother race to wipe out humanity first",
          "Most interesting strategy game ive ever played",
          "I keep telling everyone in biology class about the viruses from this game",
          "Smart, addictive strategy game, great brain workout for adults too.",
          "Finally beat brutal difficulty, that was rough!",
          "Came up with my own fungal infection strategy, it worked"
        ],
        "mid": [
          "Interesting mechanics but early attempts almost always fail.",
          "Good strategy game, the English was a bit tricky at first.",
          "Addictive but very hard on higher difficulties."
        ],
        "neg": [
          "Lost 10 times in a row cant figure out the strategy so annoying",
          "Way too hard on high difficulty settings",
          "The game freezes when loading the world map."
        ]
      }
    },
    "fnaf1": {
      "ru": {
        "pos": [
          "ЖУТКО НО ОБОЖАЮ, играю с выключенным светом для атмосферы!",
          "Прошёл вторую ночь с первой попытки, это было страшно",
          "Смотрю летсплеи а теперь сам решил попробовать",
          "Играю с другом по очереди, вместе не так страшно",
          "Классика жанра хоррор, до сих пор держит в напряжении.",
          "Выучил паттерны аниматроников наизусть, теперь легче!",
          "Рассказал всей компании про эту игру на дне рождения"
        ],
        "mid": [
          "Страшно в меру, но демо-версия быстро проходится.",
          "Атмосферная игра, но детям точно нельзя, рейтинг не просто так.",
          "Механика интересная, но на телефоне не всегда удобно управлять."
        ],
        "neg": [
          "Слишком страшно даже для меня, удалил после первой ночи!",
          "Реклама после каждой попытки это уже слишком",
          "Игра вылетает на пятой ночи, обидно."
        ]
      },
      "en": {
        "pos": [
          "SO CREEPY BUT I LOVE IT, I play with the lights off for the vibe!",
          "Beat night two on my first try, that was terrifying",
          "I watch playthroughs and finally decided to try it myself",
          "Me and my friend take turns, less scary together",
          "A horror classic that still keeps you on edge.",
          "Memorized the animatronic patterns, its easier now!",
          "Told everyone about this game at my birthday party"
        ],
        "mid": [
          "Scary but not too much, the demo goes by fast though.",
          "Atmospheric game but definitely not for little kids, the rating is there for a reason.",
          "Interesting mechanics but controls are awkward on phone sometimes."
        ],
        "neg": [
          "Too scary even for me, deleted it after night one!",
          "Ads after every attempt is too much",
          "The game crashes on night five, so annoying."
        ]
      }
    },
    "fnaf2": {
      "ru": {
        "pos": [
          "Той Бонни моя любимая аниматроника, хоть и жуткая!",
          "Прошёл custom night на максимальной сложности, горжусь собой",
          "Играем с классом кто дальше пройдёт, все обсуждаем на переменах",
          "Новые аниматроники ещё страшнее чем в первой части, круто",
          "Отличное продолжение, сложнее и напряжённее первой части.",
          "Разобрался как работает фонарик наконец, стало проще!",
          "У меня теперь есть своя теория кто такой Мальчик-Золото"
        ],
        "mid": [
          "Custom Night классная фишка, но подобрать баланс сложно.",
          "Страшно и интересно, но иногда непонятно откуда ждать угрозы.",
          "Хорошее продолжение, вентиляция иногда работает нечестно."
        ],
        "neg": [
          "Мангл меня пугает каждый раз не могу привыкнуть!",
          "Слишком резкие скримеры, сердце не выдерживает",
          "Зависает при переходе в режим Custom Night."
        ]
      },
      "en": {
        "pos": [
          "Toy Bonnie is my favorite animatronic even though shes terrifying!",
          "Beat Custom Night on max difficulty, so proud of myself",
          "My whole class competes on this, we talk about it at recess",
          "The new animatronics are even scarier than part one, so cool",
          "Great sequel, harder and more intense than the first game.",
          "Finally figured out the flashlight mechanic, easier now!",
          "I have my own theory about who Golden Freddy is now"
        ],
        "mid": [
          "Custom Night is a cool feature but balancing it is tough.",
          "Scary and fun but sometimes its unclear where the threat is coming from.",
          "Good sequel, the vents feel unfair sometimes."
        ],
        "neg": [
          "Mangle scares me every single time cant get used to it!",
          "The jumpscares are too intense, my heart cant take it",
          "It freezes when switching to Custom Night mode."
        ]
      }
    },
    "fnaf3": {
      "ru": {
        "pos": [
          "Призраки это неожиданный твист, крутая идея!",
          "Самая атмосферная часть серии на мой взгляд",
          "Играю поздно ночью для атмосферы, реально страшно",
          "Разгадываю все секретные мини-игры, тут целый лор!",
          "Интересный поворот сюжета, вентиляция добавляет напряжения.",
          "Нашёл все скример-минигры, весь вечер разгадывал!",
          "Теория с призраками наконец сложилась в голове"
        ],
        "mid": [
          "Механика с призраками необычная, но привыкнуть к ней сложно.",
          "Атмосферно, но управление камерами иногда путает.",
          "Хорошая часть серии, но короче предыдущих."
        ],
        "neg": [
          "Не понимаю как работает вентиляция, постоянно проигрываю!",
          "Слишком много рекламы для демо-версии",
          "Игра тормозит на слабом телефоне."
        ]
      },
      "en": {
        "pos": [
          "The ghosts are such an unexpected twist, cool idea!",
          "The most atmospheric part of the series if you ask me",
          "I play late at night for the vibe, genuinely scary",
          "Decoding all the secret minigames, theres a whole lore here!",
          "Interesting story twist, the vents add real tension.",
          "Found all the minigames, spent the whole evening on them!",
          "The ghost theory finally makes sense to me now"
        ],
        "mid": [
          "The ghost mechanic is unusual and takes getting used to.",
          "Atmospheric but the camera controls are confusing sometimes.",
          "Good entry in the series but shorter than the others."
        ],
        "neg": [
          "Dont understand how the vents work, keep losing!",
          "Way too many ads for a demo",
          "The game lags on my weaker phone."
        ]
      }
    },
    "fnaf4": {
      "ru": {
        "pos": [
          "Самая страшная часть вообще, фонарик единственная защита это жёстко!",
          "Прошёл обе ночи демо, руки трясутся до сих пор",
          "Это финал истории и он безумный, обожаю лор фнаф",
          "Играю с друзьями по очереди передавая телефон, все визжим",
          "Самая напряжённая часть серии, минимализм играет на атмосферу.",
          "Прошёл кошмарный режим наконец, руки до сих пор трясутся!",
          "Это моя любимая часть из всей серии если честно"
        ],
        "mid": [
          "Очень страшно, механика с фонариком интересная но непростая.",
          "Хорошая демка, но всего две ночи маловато.",
          "Атмосферная игра, но резкие звуки пугают слишком сильно для некоторых."
        ],
        "neg": [
          "Не могу пройти дальше первой ночи слишком сложно и страшно!",
          "Реклама убивает атмосферу появляясь в самый напряжённый момент",
          "Вылетает при появлении Fredbear, обидно."
        ]
      },
      "en": {
        "pos": [
          "The scariest part of the series, just a flashlight to defend yourself, brutal!",
          "Beat both demo nights, my hands are still shaking",
          "This is the finale of the story and its insane, love the FNAF lore",
          "We pass the phone around with friends, everyone screams",
          "The most intense entry in the series, the minimalism really adds to it.",
          "Finally beat nightmare mode, my hands are still shaking!",
          "This is honestly my favorite part of the whole series"
        ],
        "mid": [
          "Really scary, the flashlight mechanic is interesting but tough.",
          "Good demo but only two nights feels short.",
          "Atmospheric game but the jumpscares are too intense for some people."
        ],
        "neg": [
          "Cant get past night one its too hard and scary!",
          "Ads kill the mood showing up at the tensest moment",
          "It crashes when Fredbear shows up, so annoying."
        ]
      }
    },
    "minecraft": {
      "ru": {
        "pos": [
          "Строю замок с друзьями уже три недели, это лучшая игра!",
          "Нашёл алмазы с первой попытки повезло невероятно",
          "Играю с братом на одном сервере каждый день после школы",
          "Мой любимый мод добавляет драконов это так круто",
          "Бесконечные возможности для творчества, отличная игра и для взрослых.",
          "Построил редстоун-ферму сам без гайдов, горжусь!",
          "Нашли крепость с другом, там было столько сокровищ"
        ],
        "mid": [
          "Игра отличная, но версия для телефона иногда лагает на слабых устройствах.",
          "Детям точно понравится, но покупки в игре могут расстроить бюджет.",
          "Классика жанра, но управление на телефоне менее удобное чем на ПК."
        ],
        "neg": [
          "Крипер взорвал мой дом который я строил неделю это ужасно!",
          "Игра лагает на моём телефоне после обновления",
          "Слетело сохранение мира, потерял весь прогресс."
        ]
      },
      "en": {
        "pos": [
          "Been building a castle with friends for three weeks, best game ever!",
          "Found diamonds on my first try, so lucky",
          "Me and my brother play on the same server every day after school",
          "My favorite mod adds dragons, its so cool",
          "Endless creative possibilities, a great game for adults too.",
          "Built a redstone farm myself with no guides, so proud!",
          "Found a stronghold with my friend, so much loot in there"
        ],
        "mid": [
          "Great game but the mobile version lags on weaker phones.",
          "Kids will love it but in-game purchases can hurt the budget.",
          "A classic but touch controls are less comfortable than PC."
        ],
        "neg": [
          "A creeper blew up the house I built for a week, this is awful!",
          "The game got laggy on my phone after the update",
          "My world save got wiped, lost all my progress."
        ]
      }
    },
    "terraria": {
      "ru": {
        "pos": [
          "Нашёл меч из метеорита это лучший момент в игре!",
          "Строю базу с сестрой, у неё своя комната у меня своя",
          "Победил первого босса наконец после кучи попыток",
          "Копаю каждый день после школы ищу новые ресурсы",
          "Глубокая песочница с отличным прогрессом, увлекает и взрослых.",
          "Победил Короля слизней наконец, готовился неделю!",
          "Построила летающий остров с сестрой, выглядит потрясающе"
        ],
        "mid": [
          "Игра затягивает, но на телефоне интерфейс тесноват.",
          "Хорошая игра для терпеливых, прогресс небыстрый.",
          "Много контента, но новичку разобраться сначала сложно."
        ],
        "neg": [
          "Босс убил меня в сотый раз не могу его победить бесит!",
          "Управление на телефоне не очень удобное честно говоря",
          "Игра вылетает при взрыве большого количества блоков."
        ]
      },
      "en": {
        "pos": [
          "Found a meteor sword, best moment in the game ever!",
          "Building a base with my sister, she has her own room and I have mine",
          "Finally beat the first boss after so many tries",
          "I mine every day after school looking for new resources",
          "A deep sandbox with great progression, hooks adults too.",
          "Finally beat King Slime, spent a week preparing!",
          "Built a floating island with my sister, it looks amazing"
        ],
        "mid": [
          "Addictive game but the interface feels cramped on phone.",
          "Good game if you are patient, progress is slow.",
          "Lots of content but tough for a beginner to learn at first."
        ],
        "neg": [
          "A boss killed me for the hundredth time cant beat it so annoying!",
          "Touch controls are honestly not very comfortable",
          "The game crashes when a lot of blocks explode at once."
        ]
      }
    },
    "ayugram": {
      "ru": {
        "pos": [
          "Переписка с близкими под рукой, нужный разговор нахожу быстро. Для меня это главное.",
          "Отправил несколько фотографий одним сообщением, всё дошло в нужном порядке. Удобно.",
          "Длинные сообщения читаются нормально, текст не слипается. Часто обсуждаем здесь рабочие вопросы.",
          "Нравится быстро возвращаться к разговорам, которые уже начаты. Не теряюсь в списке."
        ],
        "mid": [
          "Переписываться удобно, но непривычные настройки уведомлений пришлось изучить отдельно.",
          "Нужные мне функции есть. Часть дополнительных разделов я бы убрал с главного экрана."
        ],
        "neg": [
          "Новое сообщение вижу только после открытия приложения. Из-за пропущенных уведомлений пользоваться неудобно.",
          "При возвращении в длинную переписку теряется место, где читал. Каждый раз приходится листать заново."
        ]
      },
      "en": {
        "pos": [
          "Chats with people close to me are easy to reach. That is what matters most to me.",
          "I sent several photos together and they arrived in the right order. Convenient.",
          "Long messages are easy to read. We often discuss work here, so that helps.",
          "Getting back to an existing conversation is quick. I do not get lost in the list."
        ],
        "mid": [
          "Messaging is comfortable, though I had to spend time figuring out notification settings.",
          "The features I need are here. I would remove some extra sections from the main screen."
        ],
        "neg": [
          "I only see new messages after opening the app. Missed notifications make it difficult to use.",
          "Returning to a long conversation loses my reading position. I have to scroll back every time."
        ]
      }
    },
    "nullsbrawl": {
      "ru": {
        "pos": [
          "Все бойцы открыты сразу это просто мечта!",
          "Играю с друзьями, у всех теперь любимые скины бесплатно",
          "Наконец попробовал всех персонажей без доната",
          "Фанатский сервер но сделан реально круто",
          "Прикольная альтернатива для тех, кто хочет попробовать всех бойцов сразу.",
          "Попробовал самого редкого бойца наконец, стоило того!",
          "Сервер стал намного стабильнее после обновления"
        ],
        "mid": [
          "Прикольная штука для фанатов, но иногда сервера нестабильны.",
          "Интересно попробовать всё сразу, но баланс отличается от оригинала.",
          "Неплохой фан-проект, обновляется не так часто как хотелось бы."
        ],
        "neg": [
          "Сервер лёг и не могу зайти уже второй день!",
          "Иногда вылетает прямо посреди боя",
          "После обновления игра перестала запускаться у меня."
        ]
      },
      "en": {
        "pos": [
          "All brawlers unlocked right away, its a dream come true!",
          "Playing with friends, everyone has their favorite skins for free now",
          "Finally got to try every character without spending money",
          "Its a fan server but its actually really well made",
          "A fun alternative for anyone who wants to try every brawler at once.",
          "Finally tried the rarest brawler, so worth it!",
          "The server got way more stable after the update"
        ],
        "mid": [
          "Fun for fans but the servers are unstable sometimes.",
          "Cool to try everything at once but balance differs from the original.",
          "Decent fan project, doesnt update as often as Id like."
        ],
        "neg": [
          "Server has been down for two days cant log in!",
          "Crashes right in the middle of a match sometimes",
          "The game stopped launching for me after the update."
        ]
      }
    },
    "standoff2": {
      "ru": {
        "pos": [
          "Обожаю эту игру, играю с одноклассниками каждый день после школы!",
          "Наконец купил скин мечты, копил три месяца",
          "Поднялся до нового звания, старался очень долго!",
          "Графика для мобильной игры просто топ",
          "Динамичный шутер с отличной графикой, затягивает и взрослых."
        ],
        "mid": [
          "Игра классная, но донат на скины ощутимо кусается.",
          "Хорошая графика, но иногда встречаются читеры в матчах.",
          "Затягивает, но телефон сильно греется во время игры."
        ],
        "neg": [
          "Опять словил читера в рейтинговом матче, это невыносимо!",
          "Игра лагает на слабом интернете постоянно",
          "После обновления стало вылетать прямо посреди раунда."
        ]
      },
      "en": {
        "pos": [
          "Love this game, play with my classmates every day after school!",
          "Finally bought my dream skin, saved up for three months",
          "Ranked up to a new tier, tried so hard for it!",
          "The graphics are amazing for a mobile game",
          "A fast-paced shooter with great graphics, hooks adults too."
        ],
        "mid": [
          "Great game but skin prices really add up.",
          "Good graphics but you run into cheaters sometimes.",
          "Addictive but my phone gets really hot playing it."
        ],
        "neg": [
          "Ran into another cheater in ranked, unbearable!",
          "The game lags constantly on weak internet",
          "It started crashing mid-round after the update."
        ]
      }
    },
    "geodash2": {
      "ru": {
        "pos": [
          "Купил игру на свои карманные деньги, оно того стоило!",
          "Прошёл все основные уровни, теперь делаю свои в редакторе",
          "Музыка и уровни здесь ещё круче чем в Meltdown",
          "Играю каждый день, до сих пор не могу пройти Demon уровень!",
          "Отличная полная версия, редактор уровней добавляет часы контента."
        ],
        "mid": [
          "Хорошая игра, но сложность местами реально высокая для новичков.",
          "Стоит своих денег, но требует много терпения.",
          "Классика жанра, хотя за спорные уровни иногда обидно."
        ],
        "neg": [
          "Не могу пройти демон-уровень уже месяц это невозможно!",
          "Заплатил за игру а она всё равно иногда вылетает",
          "Разочарован, слишком сложно для случайного игрока."
        ]
      },
      "en": {
        "pos": [
          "Bought this with my own allowance money, so worth it!",
          "Beat all the main levels, now making my own in the editor",
          "The music and levels here are even better than Meltdown",
          "Play every day, still cant beat the Demon level!",
          "Great full version, the level editor adds hours of content."
        ],
        "mid": [
          "Good game but the difficulty is really high for beginners in places.",
          "Worth the money but needs a lot of patience.",
          "A genre classic, though some levels feel unfair sometimes."
        ],
        "neg": [
          "Cant beat the demon level after a month this is impossible!",
          "Paid for the game and it still crashes sometimes",
          "Disappointed, way too hard for a casual player."
        ]
      }
    },
    "standchillow": {
      "ru": {
        "pos": [
          "Все скины открыты сразу это просто мечта!",
          "Играю с друзьями, тестируем редкие скины бесплатно",
          "Наконец попробовал легендарные ножи без доната",
          "Сервер работает стабильнее чем я думал, приятно",
          "Хорошая альтернатива для тех, кто хочет попробовать всё сразу."
        ],
        "mid": [
          "Прикольно, но иногда сервера бывают перегружены.",
          "Интересная идея, но баланс оружия отличается от оригинала.",
          "Неплохой фан-проект, обновляется реже официальной игры."
        ],
        "neg": [
          "Сервер лёг и не могу зайти уже второй день!",
          "Вылетает прямо во время боя иногда",
          "После обновления перестало работать у меня на телефоне."
        ]
      },
      "en": {
        "pos": [
          "All skins unlocked right away, its a dream!",
          "Playing with friends, we test rare skins for free",
          "Finally got to try the legendary knives without spending",
          "The server is more stable than I expected, nice",
          "A good alternative for anyone who wants to try everything at once."
        ],
        "mid": [
          "Fun but the servers get overloaded sometimes.",
          "Interesting idea but weapon balance differs from the original.",
          "Decent fan project, updates less often than the official game."
        ],
        "neg": [
          "Server has been down for two days cant log in!",
          "Crashes right in the middle of a match sometimes",
          "It stopped working on my phone after the update."
        ]
      }
    },
    "nekogram": {
      "ru": {
        "pos": [
          "Переписка с близкими под рукой, нужный разговор нахожу быстро. Для меня это главное.",
          "Отправил несколько фотографий одним сообщением, всё дошло в нужном порядке. Удобно.",
          "Длинные сообщения читаются нормально, текст не слипается. Часто обсуждаем здесь рабочие вопросы.",
          "Нравится быстро возвращаться к разговорам, которые уже начаты. Не теряюсь в списке."
        ],
        "mid": [
          "Переписываться удобно, но непривычные настройки уведомлений пришлось изучить отдельно.",
          "Нужные мне функции есть. Часть дополнительных разделов я бы убрал с главного экрана."
        ],
        "neg": [
          "Новое сообщение вижу только после открытия приложения. Из-за пропущенных уведомлений пользоваться неудобно.",
          "При возвращении в длинную переписку теряется место, где читал. Каждый раз приходится листать заново."
        ]
      },
      "en": {
        "pos": [
          "Chats with people close to me are easy to reach. That is what matters most to me.",
          "I sent several photos together and they arrived in the right order. Convenient.",
          "Long messages are easy to read. We often discuss work here, so that helps.",
          "Getting back to an existing conversation is quick. I do not get lost in the list."
        ],
        "mid": [
          "Messaging is comfortable, though I had to spend time figuring out notification settings.",
          "The features I need are here. I would remove some extra sections from the main screen."
        ],
        "neg": [
          "I only see new messages after opening the app. Missed notifications make it difficult to use.",
          "Returning to a long conversation loses my reading position. I have to scroll back every time."
        ]
      }
    },
    "clashofclans": {
      "ru": {
        "pos": [
          "Наконец построил третий рабочий стол это было долго!",
          "Мой клан выиграл войну кланов, все радовались весь вечер!",
          "Собираю приложение с папой, обсуждаем стратегию вместе",
          "Отличная стратегия, затягивает надолго, а донат не обязателен."
        ],
        "mid": [
          "Хорошая игра, но без доната прокачка идёт довольно медленно.",
          "Интересно, но раннему аккаунту сложно тягаться с топами."
        ],
        "neg": [
          "Опять слился клан перед самой войной это обидно!",
          "Копил три недели на строителя а обновление всё испортило"
        ]
      },
      "en": {
        "pos": [
          "Finally built my third builder base that took forever!",
          "My clan won the war, everyone was hyped all evening!",
          "I play with my dad, we plan strategies together",
          "Great strategy game, hooks you for hours, and paying isnt required."
        ],
        "mid": [
          "Good game but progress is pretty slow without spending.",
          "Fun but a new base cant compete with maxed players."
        ],
        "neg": [
          "My clan died right before war that stinks!",
          "Saved three weeks for a builder and the update ruined it"
        ]
      }
    },
    "clashroyale": {
      "ru": {
        "pos": [
          "Выбил легендарную карту из сундука это праздник!",
          "Поднялся до новой арены, друзья теперь завидуют!",
          "Собрал колоду с драконами и всех разношу",
          "Быстрые матчи отлично подходят, когда мало времени."
        ],
        "mid": [
          "Весело, но матчмейкинг иногда сводит с явно сильнее прокачанным.",
          "Карты интересные, но сундуки открываются слишком долго."
        ],
        "neg": [
          "Опять слил на последней башне это невыносимо!",
          "Сундук открывался восемь часов а я всё пропустил"
        ]
      },
      "en": {
        "pos": [
          "Got a legendary card from a chest, its a celebration!",
          "Climbed to a new arena, my friends are so jealous!",
          "Built a dragon deck and im wrecking everyone",
          "Quick matches are perfect when you dont have much time."
        ],
        "mid": [
          "Fun but matchmaking sometimes pairs you against way stronger decks.",
          "Cards are cool but chests take forever to unlock."
        ],
        "neg": [
          "Lost on the last tower again thats unbearable!",
          "The chest took eight hours to open and I missed it"
        ]
      }
    },
    "hayday": {
      "ru": {
        "pos": [
          "Вырастила первый огромный урожай пшеницы!",
          "Обмениваюсь товарами с соседями по игре каждый день",
          "Ферма теперь просто загляденье, обустраиваю с душой",
          "Расслабляющая игра, приятно проводить вечер после школы."
        ],
        "mid": [
          "Мило, но некоторые постройки открываются очень нескоро.",
          "Хорошая ферма-игра, но соседи иногда не отвечают на сделки."
        ],
        "neg": [
          "Заказы в городе исчезли прямо перед доставкой это обидно!",
          "Сарай переполнен а расширение стоит очень дорого"
        ]
      },
      "en": {
        "pos": [
          "Grew my first giant wheat harvest!",
          "I trade goods with my in-game neighbors every day",
          "My farm looks so pretty now, I decorate it with care",
          "A relaxing game, nice to play in the evening after school."
        ],
        "mid": [
          "Cute but some buildings take a really long time to unlock.",
          "Good farming game but neighbors dont always answer trades."
        ],
        "neg": [
          "Town orders vanished right before delivery thats annoying!",
          "My barn is full and expanding it costs way too much"
        ]
      }
    },
    "boombeach": {
      "ru": {
        "pos": [
          "Наконец разгромил базу соседа, готовился неделю!",
          "Собрал отряд тяжеловесов и теперь всех сношу",
          "Штаб прокачал до нового уровня, гордость распирает!"
        ],
        "mid": [
          "Похоже на Clash of Clans, но атаки интереснее.",
          "Неплохо, но без ускорений строительство очень долгое."
        ],
        "neg": [
          "Потерял весь десант в одной неудачной атаке это обидно!",
          "Ресурсы кончились а фляга восстанавливается вечность"
        ]
      },
      "en": {
        "pos": [
          "Finally crushed my neighbors base, prepped for a week!",
          "Built a heavy troop squad and im demolishing everyone",
          "Upgraded my HQ to a new level, so proud!"
        ],
        "mid": [
          "Feels like Clash of Clans but the attacks are more fun.",
          "Decent but building takes forever without speeding up."
        ],
        "neg": [
          "Lost my whole landing force in one bad attack thats rough!",
          "Ran out of resources and the flask takes forever to refill"
        ]
      }
    },
    "brawlstars": {
      "ru": {
        "pos": [
          "Открыл нового бойца из бокса, это было эпично!",
          "Выиграла соло-шоудаун впервые, руки до сих пор трясутся!",
          "Играю с друзьями по вечерам, всегда весело!",
          "Динамичные раунды по три минуты — идеально для перерыва."
        ],
        "mid": [
          "Весело, но некоторые бойцы явно сильнее других.",
          "Хорошая игра, но донат на скины ощутимо кусается."
        ],
        "neg": [
          "Опять словил читера в рейтинговых это невыносимо!",
          "Ивент закончился а я не успел собрать награду"
        ]
      },
      "en": {
        "pos": [
          "Unlocked a new brawler from a box, so epic!",
          "Won solo showdown for the first time, hands still shaking!",
          "I play with friends every evening, always fun!",
          "Fast three-minute rounds are perfect for a quick break."
        ],
        "mid": [
          "Fun but some brawlers are clearly stronger than others.",
          "Great game but skin prices really add up."
        ],
        "neg": [
          "Ran into another cheater in ranked, unbearable!",
          "The event ended and I didnt get to claim the reward"
        ]
      }
    },
    "pubgmobile": {
      "ru": {
        "pos": [
          "Выжил один против всей команды и забрал победу!",
          "Нашёл редкий скин на оружие, весь класс завидует!",
          "Играю в дуо с лучшим другом каждые выходные"
        ],
        "mid": [
          "Графика отличная, но на слабом телефоне сильно лагает.",
          "Затягивает, но матчи иногда длятся слишком долго для перемены."
        ],
        "neg": [
          "Телефон перегрелся прямо в финальной зоне это обидно!",
          "Словил читера с аимботом в рейтинговом матче"
        ]
      },
      "en": {
        "pos": [
          "Survived one versus the whole squad and took the win!",
          "Found a rare gun skin, the whole class is jealous!",
          "I play duos with my best friend every weekend"
        ],
        "mid": [
          "Graphics are great but it really lags on a weak phone.",
          "Addictive but matches sometimes run too long for a break."
        ],
        "neg": [
          "My phone overheated right in the final circle thats rough!",
          "Ran into an aimbot cheater in a ranked match"
        ]
      }
    },
    "codmobile": {
      "ru": {
        "pos": [
          "Выполнил контракт в DMZ без единой смерти!",
          "Собрал отряд с одноклассниками, разносим всех подряд",
          "Новая карта просто огонь, играю там теперь постоянно"
        ],
        "mid": [
          "Хорошая графика, но телефон сильно греется во время игры.",
          "Стрельба приятная, но донат на оружие ощутимо кусается."
        ],
        "neg": [
          "Опять лагнуло прямо перед решающим выстрелом это невыносимо!",
          "Сервер вылетел посреди рейтингового матча"
        ]
      },
      "en": {
        "pos": [
          "Finished a DMZ contract without dying once!",
          "Squad up with my classmates, we wreck everyone",
          "The new map is straight fire, only play there now"
        ],
        "mid": [
          "Great graphics but my phone gets really hot playing it.",
          "Shooting feels great but gun prices really add up."
        ],
        "neg": [
          "It lagged right before the winning shot, unbearable!",
          "The server crashed in the middle of a ranked match"
        ]
      }
    },
    "candycrush": {
      "ru": {
        "pos": [
          "Прошла уровень с трёх попыток, так довольна!",
          "Собрала комбо из пяти конфет это было красиво!",
          "Играю с бабушкой по очереди, ей тоже нравится"
        ],
        "mid": [
          "Затягивает, но после определённого уровня без покупок сложно.",
          "Хорошая головоломка, но жизни кончаются слишком быстро."
        ],
        "neg": [
          "Застряла на одном уровне уже две недели это невозможно!",
          "Жизни кончились прямо на середине сложного уровня"
        ]
      },
      "en": {
        "pos": [
          "Beat the level on my third try, so happy!",
          "Made a five-candy combo, it looked amazing!",
          "I play with my grandma taking turns, she loves it too"
        ],
        "mid": [
          "Addictive but gets hard without buying boosters after a point.",
          "Good puzzle game but lives run out too fast."
        ],
        "neg": [
          "Stuck on one level for two weeks now, impossible!",
          "Ran out of lives right in the middle of a hard level"
        ]
      }
    },
    "subwaysurfers": {
      "ru": {
        "pos": [
          "Побила свой рекорд по очкам, три тысячи метров!",
          "Открыла нового персонажа за монеты, обожаю его наряд!",
          "Играю на перемене с одноклассниками, кто дальше пробежит"
        ],
        "mid": [
          "Весело, но управление свайпами иногда подводит на бегу.",
          "Хорошая аркада, но новые доски дорого стоят."
        ],
        "neg": [
          "Инспектор поймал меня прямо перед новым рекордом это обидно!",
          "Игра вылетела и весь прогресс за забег пропал"
        ]
      },
      "en": {
        "pos": [
          "Beat my high score, three thousand meters!",
          "Unlocked a new character with coins, love the outfit!",
          "We play at recess to see who can run the farthest"
        ],
        "mid": [
          "Fun but the swipe controls sometimes mess up mid-run.",
          "Good arcade game but new boards cost a lot."
        ],
        "neg": [
          "The inspector caught me right before a new record, so annoying!",
          "The game crashed and I lost my whole run"
        ]
      }
    },
    "templerun2": {
      "ru": {
        "pos": [
          "Пробежала пять километров без единого падения!",
          "Открыла нового персонажа, теперь бегаю только за него",
          "Обожаю эту игру, играю каждый день по дороге из школы"
        ],
        "mid": [
          "Затягивает, но однообразно после нескольких часов игры.",
          "Хорошая графика, но управление наклоном не всегда точное."
        ],
        "neg": [
          "Упала в пропасть прямо перед своим рекордом это обидно!",
          "Реклама выскакивает буквально после каждого забега"
        ]
      },
      "en": {
        "pos": [
          "Ran five kilometers without falling once!",
          "Unlocked a new character, only run as them now",
          "Love this game, play it every day on the way home from school"
        ],
        "mid": [
          "Addictive but gets repetitive after a few hours.",
          "Good graphics but the tilt controls arent always precise."
        ],
        "neg": [
          "Fell off the edge right before my record, so annoying!",
          "Ads pop up after literally every single run"
        ]
      }
    },
    "homescapes": {
      "ru": {
        "pos": [
          "Обустроила всю гостиную, получилось так красиво!",
          "Прошла сложный уровень с трёх попыток, я молодец!",
          "Играю с мамой по очереди, ей нравится дизайн комнат"
        ],
        "mid": [
          "Затягивает, но сюжет иногда прерывается рекламой доната.",
          "Хорошая головоломка три-в-ряд, но жизни кончаются быстро."
        ],
        "neg": [
          "Застряла на одном уровне уже неделю это невозможно!",
          "Жизни кончились а таймер восстановления долгий"
        ]
      },
      "en": {
        "pos": [
          "Decorated my whole living room, it looks so pretty!",
          "Beat a hard level on my third try, so proud!",
          "I play with my mom taking turns, she loves the room designs"
        ],
        "mid": [
          "Addictive but the story keeps getting interrupted by ads for purchases.",
          "Good match-3 puzzle but lives run out fast."
        ],
        "neg": [
          "Stuck on one level for a week now, impossible!",
          "Ran out of lives and the refill timer is so long"
        ]
      }
    },
    "gardenscapes": {
      "ru": {
        "pos": [
          "Наконец разбила клумбу мечты в своём саду!",
          "Прошла уровень с боссом, было непросто но я справилась!",
          "Играю каждый вечер, сад уже почти готов"
        ],
        "mid": [
          "Мило, но некоторые уровни явно сложнее остальных без доната.",
          "Хорошая головоломка, но реклама выскакивает слишком часто."
        ],
        "neg": [
          "Застряла на уровне уже две недели это невозможно!",
          "Купила бустер а он не сработал как надо"
        ]
      },
      "en": {
        "pos": [
          "Finally built my dream flower bed in the garden!",
          "Beat a boss level, it was tough but I made it!",
          "I play every evening, my garden is almost finished"
        ],
        "mid": [
          "Cute but some levels are clearly harder without spending.",
          "Good puzzle game but ads pop up way too often."
        ],
        "neg": [
          "Stuck on one level for two weeks now, impossible!",
          "Bought a booster and it didnt work like it should"
        ]
      }
    },
    "township": {
      "ru": {
        "pos": [
          "Построила целый район с парком, выглядит потрясающе!",
          "Отправила самолёт с товарами впервые, было интересно!",
          "Играю с сестрой по очереди, обустраиваем город вместе"
        ],
        "mid": [
          "Затягивает, но новые здания открываются довольно долго.",
          "Хороший симулятор города, но донат ощутимо ускоряет игру."
        ],
        "neg": [
          "Склад переполнен а расширение стоит очень дорого!",
          "Заказ самолёта пропал прямо перед доставкой"
        ]
      },
      "en": {
        "pos": [
          "Built a whole district with a park, it looks amazing!",
          "Sent my first cargo plane out, that was exciting!",
          "I play with my sister, we build the town together"
        ],
        "mid": [
          "Addictive but new buildings take a long time to unlock.",
          "Good city sim but paying speeds things up a lot."
        ],
        "neg": [
          "My warehouse is full and expanding costs way too much!",
          "My plane order vanished right before delivery"
        ]
      }
    },
    "coinmaster": {
      "ru": {
        "pos": [
          "Наконец построила деревню до конца, так довольна!",
          "Выбила редкую карту для коллекции это праздник!",
          "Кручу колесо с друзьями по очереди, весело считать удачу"
        ],
        "mid": [
          "Затягивает, но без спинов приходится ждать очень долго.",
          "Весело, но реклама между спинами выскакивает часто."
        ],
        "neg": [
          "Меня атаковали прямо перед завершением деревни это обидно!",
          "Спины кончились а таймер восстановления долгий"
        ]
      },
      "en": {
        "pos": [
          "Finally finished building my village, so happy!",
          "Got a rare card for my collection, its a celebration!",
          "I spin the wheel with friends taking turns, fun to see who gets lucky"
        ],
        "mid": [
          "Addictive but you wait forever once you run out of spins.",
          "Fun but ads pop up a lot between spins."
        ],
        "neg": [
          "Got raided right before finishing my village, so annoying!",
          "Ran out of spins and the refill timer is so long"
        ]
      }
    },
    "asphalt9": {
      "ru": {
        "pos": [
          "Выиграла заезд на новой машине мечты!",
          "Прошёл сложную трассу без единой аварии, я профи!",
          "Графика для мобильной игры просто топ, аж дух захватывает"
        ],
        "mid": [
          "Красивая графика, но управление наклоном иногда неточное.",
          "Хорошая гонка, но новые машины стоят очень дорого."
        ],
        "neg": [
          "Вылетела с трассы прямо перед финишем это обидно!",
          "Игра лагает на слабом интернете во время заезда"
        ]
      },
      "en": {
        "pos": [
          "Won a race in my dream car!",
          "Beat a hard track without a single crash, im a pro!",
          "The graphics are amazing for a mobile game, breathtaking"
        ],
        "mid": [
          "Beautiful graphics but the tilt steering isnt always precise.",
          "Good racing game but new cars cost a lot."
        ],
        "neg": [
          "Spun off the track right before the finish, so annoying!",
          "The game lags on weak internet during races"
        ]
      }
    },
    "easportsfc": {
      "ru": {
        "pos": [
          "Собрал команду мечты из любимых футболистов!",
          "Выиграл турнир в карьере менеджера, гордость распирает!",
          "Играю с одноклассниками матч на матч каждую перемену"
        ],
        "mid": [
          "Хорошая графика, но донат на игроков ощутимо кусается.",
          "Затягивает, но управление иногда чуть медленное."
        ],
        "neg": [
          "Проиграл в добавленное время это невыносимо!",
          "Сервер вылетел прямо в финале турнира"
        ]
      },
      "en": {
        "pos": [
          "Built my dream team of favorite footballers!",
          "Won a tournament in manager career, so proud!",
          "My classmates and I play matches every recess"
        ],
        "mid": [
          "Great graphics but player prices really add up.",
          "Addictive but the controls feel a bit slow sometimes."
        ],
        "neg": [
          "Lost in stoppage time, unbearable!",
          "The server crashed right in the tournament final"
        ]
      }
    },
    "eightballpool": {
      "ru": {
        "pos": [
          "Забил идеальный удар через весь стол, все видели!",
          "Выиграла турнир и получила крутой кий в награду!",
          "Играю с папой онлайн, он тоже подсел на эту игру"
        ],
        "mid": [
          "Затягивает, но донат на кии ощутимо кусается.",
          "Хорошая физика шаров, но матчмейкинг иногда странный."
        ],
        "neg": [
          "Проиграла из-за лагов прямо на решающем шаре это обидно!",
          "Соперник вышел из матча а поражение засчитали мне"
        ]
      },
      "en": {
        "pos": [
          "Made a perfect shot across the whole table, everyone saw!",
          "Won a tournament and got a cool cue as a reward!",
          "I play online with my dad, hes hooked on it too"
        ],
        "mid": [
          "Addictive but cue prices really add up.",
          "Good ball physics but matchmaking feels off sometimes."
        ],
        "neg": [
          "Lost because of lag right on the final ball, so annoying!",
          "My opponent left the match and I got the loss anyway"
        ]
      }
    },
    "honkaistarrail": {
      "ru": {
        "pos": [
          "Выбила пятизвёздочного персонажа с первой попытки!",
          "Прошла новый регион, сюжет реально затягивает!",
          "Собрала команду мечты, теперь подземелья даются легко"
        ],
        "mid": [
          "Красивая графика, но телефон сильно греется во время боёв.",
          "Интересный сюжет, но без доната прокачка идёт медленно."
        ],
        "neg": [
          "Потратила все кристаллы а желаемого персонажа не выбила это обидно!",
          "Игра вылетает на слабом телефоне прямо в бою"
        ]
      },
      "en": {
        "pos": [
          "Pulled a five-star character on my first try!",
          "Finished the new region, the story really hooks you!",
          "Built my dream team, dungeons are easy now"
        ],
        "mid": [
          "Beautiful graphics but my phone gets really hot during battles.",
          "Great story but progress is slow without spending."
        ],
        "neg": [
          "Spent all my crystals and didnt get the character I wanted, so annoying!",
          "The game crashes on a weak phone right in battle"
        ]
      }
    },
    "shadowfight3": {
      "ru": {
        "pos": [
          "Освоила новый боевой стиль, теперь всех разношу!",
          "Собрала лучшее снаряжение, персонаж выглядит потрясающе!",
          "Прошёл сложного босса с пятой попытки, я профи!"
        ],
        "mid": [
          "Красивая графика, но донат на снаряжение ощутимо кусается.",
          "Затягивает, но управление иногда чуть медленное."
        ],
        "neg": [
          "Проиграла боссу уже в десятый раз это невыносимо!",
          "Игра вылетела прямо посреди решающего боя"
        ]
      },
      "en": {
        "pos": [
          "Learned a new fighting style, wrecking everyone now!",
          "Got the best gear, my character looks amazing!",
          "Beat a tough boss on my fifth try, im a pro!"
        ],
        "mid": [
          "Great graphics but gear prices really add up.",
          "Addictive but the controls feel a bit slow sometimes."
        ],
        "neg": [
          "Lost to the boss for the tenth time, unbearable!",
          "The game crashed right in the middle of a big fight"
        ]
      }
    },
    "amongus": {
      "ru": {
        "pos": [
          "Вычислила самозванца по поведению, всех удивила!",
          "Играю с одноклассниками по вечерам в дискорде, очень весело!",
          "Была самозванцем и никто меня не заподозрил, кайф!"
        ],
        "mid": [
          "Весело с друзьями, но с рандомными игроками бывает скучно.",
          "Хорошая игра, но задания иногда однообразные."
        ],
        "neg": [
          "Меня выгнали хотя я не самозванец это так обидно!",
          "Игрок вышел прямо в середине раунда и всё сломал"
        ]
      },
      "en": {
        "pos": [
          "Figured out the impostor from how they acted, surprised everyone!",
          "I play with classmates on discord every evening, so fun!",
          "Was the impostor and nobody suspected me, amazing feeling!"
        ],
        "mid": [
          "Fun with friends but can get boring with random players.",
          "Good game but the tasks get repetitive sometimes."
        ],
        "neg": [
          "Got voted out even though I wasnt the impostor, so unfair!",
          "A player left mid-round and ruined the whole game"
        ]
      }
    },
    "stumbleguys": {
      "ru": {
        "pos": [
          "Выиграла финал впервые, толкала всех до последнего!",
          "Открыла новый скин за монеты, выглядит очень смешно!",
          "Играю с друзьями толпой, всегда до слёз смешно"
        ],
        "mid": [
          "Весело, но сервера иногда сильно лагают в финалах.",
          "Хорошая игра, но донат на скины кусается."
        ],
        "neg": [
          "Вылетела с платформы прямо перед финишем это обидно!",
          "Сервер лагнул и меня выкинуло из финала"
        ]
      },
      "en": {
        "pos": [
          "Won the final for the first time, pushed everyone till the end!",
          "Unlocked a new skin with coins, it looks hilarious!",
          "I play with a big group of friends, always hilarious"
        ],
        "mid": [
          "Fun but servers lag a lot during finals sometimes.",
          "Good game but skin prices add up."
        ],
        "neg": [
          "Fell off the platform right before the finish, so annoying!",
          "The server lagged and kicked me out of the final"
        ]
      }
    },
    "bussimulator": {
      "ru": {
        "pos": [
          "Проехала свой первый международный маршрут!",
          "Купила новый автобус, обустроила его по своему вкусу!",
          "Люблю эту игру, очень реалистичное вождение"
        ],
        "mid": [
          "Реалистично, но новые автобусы стоят очень дорого.",
          "Затягивает, но управление на телефоне непривычное поначалу."
        ],
        "neg": [
          "Игра вылетела прямо посреди дальнего маршрута это обидно!",
          "Пассажиры застряли и не выходили на остановке"
        ]
      },
      "en": {
        "pos": [
          "Drove my first international route!",
          "Bought a new bus and customized it my way!",
          "I love this game, the driving feels really realistic"
        ],
        "mid": [
          "Realistic but new buses cost a lot.",
          "Addictive but the phone controls feel odd at first."
        ],
        "neg": [
          "The game crashed in the middle of a long route, so annoying!",
          "Passengers got stuck and wouldnt get off at the stop"
        ]
      }
    },
    "carparking": {
      "ru": {
        "pos": [
          "Наконец прошла сложную парковку с первой попытки!",
          "Настроила машину под себя, выглядит просто огонь!",
          "Катаюсь с друзьями по открытому миру каждый вечер"
        ],
        "mid": [
          "Интересно, но графика на слабом телефоне немного лагает.",
          "Хорошая игра, но новые машины стоят очень дорого."
        ],
        "neg": [
          "Разбила машину прямо перед финишем это обидно!",
          "Сервер вылетел посреди мультиплеерной гонки"
        ]
      },
      "en": {
        "pos": [
          "Finally nailed a hard parking spot on my first try!",
          "Customized my car, it looks absolutely fire!",
          "I drive around the open world with friends every evening"
        ],
        "mid": [
          "Fun but the graphics lag a bit on a weak phone.",
          "Good game but new cars cost a lot."
        ],
        "neg": [
          "Crashed my car right before the finish, so annoying!",
          "The server crashed in the middle of a multiplayer race"
        ]
      }
    },
    "blockcraft3d": {
      "ru": {
        "pos": [
          "Построила целый замок из кубиков, горжусь собой!",
          "Сделала самолёт который реально летает в игре!",
          "Играю с братом, строим город вместе по очереди"
        ],
        "mid": [
          "Весело строить, но выбор блоков мог бы быть побольше.",
          "Хорошая песочница, но реклама выскакивает часто."
        ],
        "neg": [
          "Стройка пропала после перезапуска игры это невыносимо!",
          "Игра вылетела и не сохранила мой замок"
        ]
      },
      "en": {
        "pos": [
          "Built a whole castle out of blocks, so proud of myself!",
          "Made a plane that actually flies in the game!",
          "I play with my brother, we build a city together"
        ],
        "mid": [
          "Fun to build but the block selection could be bigger.",
          "Good sandbox but ads pop up a lot."
        ],
        "neg": [
          "My build disappeared after restarting the game, unbearable!",
          "The game crashed and didnt save my castle"
        ]
      }
    },
    "riseofkingdoms": {
      "ru": {
        "pos": [
          "Наконец объединился с сильным альянсом, теперь веселее!",
          "Выиграла крупное сражение против соседнего королевства!",
          "Отстроила столицу до нового уровня, приятно наблюдать"
        ],
        "mid": [
          "Затягивает, но без доната развитие идёт очень медленно.",
          "Интересная стратегия, но интерфейс поначалу сложный."
        ],
        "neg": [
          "На меня напали пока я спала, потеряла половину войск это обидно!",
          "Альянс распался прямо перед крупной войной"
        ]
      },
      "en": {
        "pos": [
          "Finally joined a strong alliance, way more fun now!",
          "Won a huge battle against a neighboring kingdom!",
          "Upgraded my capital to a new level, nice to watch it grow"
        ],
        "mid": [
          "Addictive but progress is really slow without spending.",
          "Interesting strategy but the interface is confusing at first."
        ],
        "neg": [
          "Got attacked while I was asleep and lost half my troops, so annoying!",
          "My alliance fell apart right before a big war"
        ]
      }
    },
    "stateofsurvival": {
      "ru": {
        "pos": [
          "Отстроила базу до нового уровня, зомби теперь не страшны!",
          "Собрала отряд героев и разношу целые орды зомби!",
          "Прошла сюжетную главу с третьей попытки, я справилась!"
        ],
        "mid": [
          "Затягивает, но без доната прокачка идёт очень медленно.",
          "Интересный сюжет, но заданий на день слишком много."
        ],
        "neg": [
          "На базу напали пока я спала, потеряла ресурсы это обидно!",
          "Игра вылетела прямо посреди сложного сражения"
        ]
      },
      "en": {
        "pos": [
          "Upgraded my base to a new level, zombies arent scary anymore!",
          "Built a hero squad and im wiping out whole zombie hordes!",
          "Beat a story chapter on my third try, I did it!"
        ],
        "mid": [
          "Addictive but progress is really slow without spending.",
          "Great story but there are way too many daily tasks."
        ],
        "neg": [
          "Got raided while I was asleep and lost my resources, so annoying!",
          "The game crashed right in the middle of a tough battle"
        ]
      }
    },
    "sonicdash": {
      "ru": {
        "pos": [
          "Побила свой рекорд по кольцам, семь тысяч штук!",
          "Открыла Наклза за кольца, он бежит очень быстро!",
          "Играю каждый день после школы, обожаю эту скорость!"
        ],
        "mid": [
          "Весело, но однообразно после нескольких часов игры.",
          "Хорошая аркада, но новые скины стоят дорого."
        ],
        "neg": [
          "Врезалась в препятствие прямо перед новым рекордом это обидно!",
          "Реклама выскакивает буквально после каждого забега"
        ]
      },
      "en": {
        "pos": [
          "Beat my ring record, seven thousand rings!",
          "Unlocked Knuckles with rings, hes so fast!",
          "I play every day after school, love the speed!"
        ],
        "mid": [
          "Fun but gets repetitive after a few hours.",
          "Good arcade game but new skins cost a lot."
        ],
        "neg": [
          "Hit an obstacle right before a new record, so annoying!",
          "Ads pop up after literally every single run"
        ]
      }
    },
    "talkingtomgoldrun": {
      "ru": {
        "pos": [
          "Поймала енота который украл золото Тома!",
          "Открыла новый костюм для Анджелы, он такой милый!",
          "Играю с младшим братом по очереди, ему очень нравится"
        ],
        "mid": [
          "Весело, но однообразно после нескольких часов игры.",
          "Хорошая игра для детей, но реклама выскакивает часто."
        ],
        "neg": [
          "Енот убежал с золотом прямо перед финишем это обидно!",
          "Реклама выскакивает буквально после каждого забега"
        ]
      },
      "en": {
        "pos": [
          "Caught the raccoon that stole Toms gold!",
          "Unlocked a new outfit for Angela, its so cute!",
          "I play with my little brother taking turns, he loves it"
        ],
        "mid": [
          "Fun but gets repetitive after a few hours.",
          "Good kids game but ads pop up a lot."
        ],
        "neg": [
          "The raccoon got away with the gold right before the finish, so annoying!",
          "Ads pop up after literally every single run"
        ]
      }
    },
    "mortalkombat": {
      "ru": {
        "pos": [
          "Собрала команду легендарных бойцов, выглядит мощно!",
          "Выиграла турнир 3 на 3 впервые, руки до сих пор трясутся!",
          "Открыл нового бойца из карты, это было эпично!"
        ],
        "mid": [
          "Красивая графика, но донат на бойцов ощутимо кусается.",
          "Затягивает, но управление картами поначалу непривычное."
        ],
        "neg": [
          "Проиграла в финале турнира это невыносимо!",
          "Игра вылетела прямо посреди решающего боя"
        ]
      },
      "en": {
        "pos": [
          "Built a team of legendary fighters, looks so powerful!",
          "Won a 3v3 tournament for the first time, hands still shaking!",
          "Unlocked a new fighter from a card, so epic!"
        ],
        "mid": [
          "Great graphics but fighter prices really add up.",
          "Addictive but the card controls feel odd at first."
        ],
        "neg": [
          "Lost in the tournament final, unbearable!",
          "The game crashed right in the middle of a big fight"
        ]
      }
    },
    "farmheroessaga": {
      "ru": {
        "pos": [
          "Собрала весь урожай с трёх попыток, так довольна!",
          "Прошла уровень с боссом-вороном, было непросто!",
          "Играю с мамой по очереди, ей тоже нравится"
        ],
        "mid": [
          "Затягивает, но после определённого уровня без покупок сложно.",
          "Хорошая головоломка, но жизни кончаются быстро."
        ],
        "neg": [
          "Застряла на одном уровне уже две недели это невозможно!",
          "Жизни кончились прямо на середине сложного уровня"
        ]
      },
      "en": {
        "pos": [
          "Collected the whole harvest on my third try, so happy!",
          "Beat the crow boss level, that was tough!",
          "I play with my mom taking turns, she loves it too"
        ],
        "mid": [
          "Addictive but gets hard without buying boosters after a point.",
          "Good puzzle game but lives run out too fast."
        ],
        "neg": [
          "Stuck on one level for two weeks now, impossible!",
          "Ran out of lives right in the middle of a hard level"
        ]
      }
    },
    "headball2": {
      "ru": {
        "pos": [
          "Забила победный гол в последнюю секунду, все видели!",
          "Выиграла матч 1 на 1 против сильного соперника!",
          "Играю с одноклассниками на перемене, очень весело"
        ],
        "mid": [
          "Весело, но донат на персонажей ощутимо кусается.",
          "Затягивает, но иногда встречаются явно читерские соперники."
        ],
        "neg": [
          "Проиграла из-за лагов прямо на последней секунде это обидно!",
          "Соперник вышел из матча а поражение засчитали мне"
        ]
      },
      "en": {
        "pos": [
          "Scored the winning goal in the last second, everyone saw!",
          "Won a 1v1 match against a really strong opponent!",
          "My classmates and I play at recess, so much fun"
        ],
        "mid": [
          "Fun but character prices really add up.",
          "Addictive but you sometimes run into obvious cheaters."
        ],
        "neg": [
          "Lost because of lag right on the last second, so annoying!",
          "My opponent left the match and I got the loss anyway"
        ]
      }
    },
    "ludoking": {
      "ru": {
        "pos": [
          "Выбросила подряд три шестёрки, это было невероятно!",
          "Играю с бабушкой и дедушкой по видеозвонку каждые выходные",
          "Обыграла всю семью впервые, очень гордилась собой!"
        ],
        "mid": [
          "Весело с семьёй, но с рандомными игроками бывает долго ждать ход.",
          "Простая игра, но реклама выскакивает довольно часто."
        ],
        "neg": [
          "Фишку срубили прямо у финиша это так обидно!",
          "Игра зависла и не засчитала мой ход"
        ]
      },
      "en": {
        "pos": [
          "Rolled three sixes in a row, that was unbelievable!",
          "I play with my grandparents over video call every weekend",
          "Beat my whole family for the first time, so proud!"
        ],
        "mid": [
          "Fun with family but waiting for random players moves can be slow.",
          "Simple game but ads pop up pretty often."
        ],
        "neg": [
          "Got knocked right before reaching home, so unfair!",
          "The game froze and didnt count my move"
        ]
      }
    },
    "solitaire": {
      "ru": {
        "pos": [
          "Прошла игру без единой подсказки впервые!",
          "Играю с бабушкой, она научила меня раскладывать карты",
          "Это моя любимая игра перед сном, очень успокаивает"
        ],
        "mid": [
          "Классика жанра, но реклама между раздачами выскакивает часто.",
          "Хорошая игра, но интерфейс мог бы быть посовременнее."
        ],
        "neg": [
          "Реклама выскочила прямо в середине удачной раздачи это обидно!",
          "Игра зависла на середине сложного расклада"
        ]
      },
      "en": {
        "pos": [
          "Beat the game without a single hint for the first time!",
          "I play with my grandma, she taught me how to lay out cards",
          "This is my favorite game before bed, so relaxing"
        ],
        "mid": [
          "A genre classic but ads pop up a lot between deals.",
          "Good game but the interface could feel more modern."
        ],
        "neg": [
          "An ad popped up right in the middle of a lucky deal, so annoying!",
          "The game froze in the middle of a tough deal"
        ]
      }
    },
    "wordscapes": {
      "ru": {
        "pos": [
          "Собрала все слова на уровне без единой подсказки!",
          "Играю с мамой по вечерам, она обожает угадывать слова",
          "Словарный запас реально стал больше, это приятно"
        ],
        "mid": [
          "Затягивает, но некоторые уровни явно сложнее остальных.",
          "Хорошая игра для ума, но подсказки стоят дорого."
        ],
        "neg": [
          "Застряла на одном слове уже полчаса это невозможно!",
          "Потратила все подсказки а нужное слово так и не нашла"
        ]
      },
      "en": {
        "pos": [
          "Found every word on the level without a single hint!",
          "I play with my mom every evening, she loves guessing words",
          "My vocabulary actually got bigger, thats really nice"
        ],
        "mid": [
          "Addictive but some levels are clearly harder than others.",
          "Good brain game but hints cost a lot."
        ],
        "neg": [
          "Stuck on one word for half an hour now, impossible!",
          "Used all my hints and still couldnt find the last word"
        ]
      }
    },
    "fruitninja": {
      "ru": {
        "pos": [
          "Набрала рекордный комбо из пятнадцати фруктов!",
          "Открыла новый нож за монеты, выглядит очень круто!",
          "Играю с другом по очереди, кто наберёт больше очков"
        ],
        "mid": [
          "Весело, но однообразно после нескольких часов игры.",
          "Хорошая аркада, но новые додзё стоят дорого."
        ],
        "neg": [
          "Разрезала бомбу случайно прямо на рекордном комбо это обидно!",
          "Игра вылетела и не засчитала мой лучший результат"
        ]
      },
      "en": {
        "pos": [
          "Got a record combo of fifteen fruits!",
          "Unlocked a new blade with coins, it looks so cool!",
          "I play with a friend taking turns to see who scores more"
        ],
        "mid": [
          "Fun but gets repetitive after a few hours.",
          "Good arcade game but new dojos cost a lot."
        ],
        "neg": [
          "Sliced a bomb by accident right on a record combo, so annoying!",
          "The game crashed and didnt save my best score"
        ]
      }
    },
    "pvz2": {
      "ru": {
        "pos": [
          "Прошла сложный уровень с зомби-боссом впервые!",
          "Собрала все растения нового мира, это было интересно!",
          "Играю с младшим братом, ему очень нравятся растения"
        ],
        "mid": [
          "Весело, но некоторые растения открываются очень нескоро.",
          "Хорошая игра, но донат на семена ощутимо кусается."
        ],
        "neg": [
          "Зомби прорвались прямо перед победой это обидно!",
          "Игра вылетела посреди сложной волны"
        ]
      },
      "en": {
        "pos": [
          "Beat a hard zombie boss level for the first time!",
          "Collected all the plants from the new world, that was fun!",
          "I play with my little brother, he loves the plants"
        ],
        "mid": [
          "Fun but some plants take a really long time to unlock.",
          "Good game but seed prices really add up."
        ],
        "neg": [
          "Zombies broke through right before I won, so annoying!",
          "The game crashed in the middle of a tough wave"
        ]
      }
    },
    "mytalkingangela2": {
      "ru": {
        "pos": [
          "Нарядила Анджелу в новый костюм, она такая стильная!",
          "Обустроила её квартиру по своему вкусу, очень красиво!",
          "Играю с подругой по очереди, обе обожаем эту игру"
        ],
        "mid": [
          "Мило, но некоторые наряды стоят довольно дорого.",
          "Хорошая игра для детей, но реклама выскакивает часто."
        ],
        "neg": [
          "Реклама выскочила прямо в середине мини-игры это обидно!",
          "Игра зависла и не сохранила мой прогресс"
        ]
      },
      "en": {
        "pos": [
          "Dressed Angela in a new outfit, shes so stylish!",
          "Decorated her apartment my way, it looks so pretty!",
          "I play with my friend taking turns, we both love it"
        ],
        "mid": [
          "Cute but some outfits cost quite a lot.",
          "Good kids game but ads pop up a lot."
        ],
        "neg": [
          "An ad popped up right in the middle of a minigame, so annoying!",
          "The game froze and didnt save my progress"
        ]
      }
    },
    "mergedragons": {
      "ru": {
        "pos": [
          "Вывела редкого дракона впервые, это было волшебно!",
          "Восстановила целую поляну в лагере, выглядит потрясающе!",
          "Играю с сестрой по очереди, обе обожаем драконов"
        ],
        "mid": [
          "Затягивает, но энергия заканчивается довольно быстро.",
          "Хорошая головоломка, но некоторые предметы открываются нескоро."
        ],
        "neg": [
          "Энергия кончилась прямо перед редким слиянием это обидно!",
          "Игра зависла и не сохранила моего нового дракона"
        ]
      },
      "en": {
        "pos": [
          "Hatched a rare dragon for the first time, it felt magical!",
          "Restored a whole meadow in my camp, it looks amazing!",
          "I play with my sister taking turns, we both love dragons"
        ],
        "mid": [
          "Addictive but energy runs out pretty fast.",
          "Good puzzle game but some items take a while to unlock."
        ],
        "neg": [
          "Ran out of energy right before a rare merge, so annoying!",
          "The game froze and didnt save my new dragon"
        ]
      }
    },
    "wordswithfriends": {
      "ru": {
        "pos": [
          "Составила слово на тройное очко, набрала кучу баллов!",
          "Играю с бабушкой на расстоянии, это нас сближает",
          "Обыграла лучшую подругу впервые, очень гордилась!"
        ],
        "mid": [
          "Затягивает, но реклама между ходами выскакивает часто.",
          "Хорошая игра для ума, но ждать ход соперника долго."
        ],
        "neg": [
          "Соперник вышел из игры прямо перед моим ходом это обидно!",
          "Игра зависла и не засчитала моё лучшее слово"
        ]
      },
      "en": {
        "pos": [
          "Spelled a word on a triple score and racked up points!",
          "I play with my grandma long-distance, it brings us closer",
          "Beat my best friend for the first time, so proud!"
        ],
        "mid": [
          "Addictive but ads pop up a lot between turns.",
          "Good brain game but waiting for your opponents turn is slow."
        ],
        "neg": [
          "My opponent left the game right before my turn, so annoying!",
          "The game froze and didnt count my best word"
        ]
      }
    },
    "freefiremax": {
      "ru": {
        "pos": [
          "Выжила одна против всей команды и забрала победу!",
          "Нашла редкий скин на оружие, весь класс завидует!",
          "Графика здесь намного чётче чем в обычной версии, красота"
        ],
        "mid": [
          "Хорошая графика, но телефон сильно греется во время игры.",
          "Затягивает, но донат на скины ощутимо кусается."
        ],
        "neg": [
          "Телефон перегрелся прямо в финальной зоне это обидно!",
          "Словила читера в рейтинговом матче"
        ]
      },
      "en": {
        "pos": [
          "Survived alone against the whole squad and took the win!",
          "Found a rare gun skin, the whole class is jealous!",
          "The graphics here are way sharper than the regular version, beautiful"
        ],
        "mid": [
          "Great graphics but my phone gets really hot playing it.",
          "Addictive but skin prices really add up."
        ],
        "neg": [
          "My phone overheated right in the final circle thats rough!",
          "Ran into a cheater in a ranked match"
        ]
      }
    },
    "discord": {
      "ru": {
        "pos": [
          "Создала свой сервер для одноклассников, всем нравится!",
          "Голосовые звонки с друзьями во время игр работают отлично",
          "Нашла классное коммьюнити по интересам, очень рада"
        ],
        "mid": [
          "Удобно для общения, но уведомления иногда приходят с задержкой.",
          "Хорошее приложение, но интерфейс поначалу немного путает."
        ],
        "neg": [
          "Сервер друзей взломали и разослали спам всем это ужасно!",
          "Голосовой звонок обрывается прямо посреди разговора"
        ]
      },
      "en": {
        "pos": [
          "Made my own server for classmates, everyone loves it!",
          "Voice calls with friends during games work great",
          "Found a great community for my hobby, so happy"
        ],
        "mid": [
          "Convenient for chatting but notifications sometimes arrive late.",
          "Good app but the interface is a bit confusing at first."
        ],
        "neg": [
          "My friends server got hacked and spammed everyone, thats awful!",
          "Voice calls keep dropping in the middle of a conversation"
        ]
      }
    },
    "spotify": {
      "ru": {
        "pos": [
          "Нашла новую любимую песню в рекомендациях, обожаю!",
          "Создала плейлист с друзьями для похода вместе",
          "Слушаю каждый день по дороге в школу, поднимает настроение"
        ],
        "mid": [
          "Хорошая библиотека музыки, но бесплатная версия с рекламой.",
          "Удобно, но иногда долго грузится на медленном интернете."
        ],
        "neg": [
          "Реклама включилась прямо на середине любимой песни это обидно!",
          "Подписка списалась а музыка всё равно с рекламой"
        ]
      },
      "en": {
        "pos": [
          "Found my new favorite song in recommendations, love it!",
          "Made a playlist with friends for our trip together",
          "I listen every day on the way to school, boosts my mood"
        ],
        "mid": [
          "Great music library but the free version has ads.",
          "Convenient but loads slowly sometimes on slow internet."
        ],
        "neg": [
          "An ad played right in the middle of my favorite song, so annoying!",
          "Got charged for a subscription and still got ads"
        ]
      }
    },
    "netflix": {
      "ru": {
        "pos": [
          "Посмотрела весь сезон за выходные вместе с сестрой!",
          "Нашла классный сериал по рекомендациям, не могу оторваться",
          "Смотрю каждый вечер перед сном, отличный способ расслабиться"
        ],
        "mid": [
          "Хорошая библиотека, но некоторые сериалы быстро исчезают.",
          "Удобно, но иногда буферизация на слабом интернете."
        ],
        "neg": [
          "Подписка списалась дважды за месяц это неприятно!",
          "Любимый сериал убрали прямо перед финалом сезона"
        ]
      },
      "en": {
        "pos": [
          "Watched a whole season over the weekend with my sister!",
          "Found a great show from recommendations, cant stop watching",
          "I watch every evening before bed, great way to relax"
        ],
        "mid": [
          "Good library but some shows disappear pretty quickly.",
          "Convenient but buffers sometimes on weak internet."
        ],
        "neg": [
          "Got charged twice for the subscription in one month, not great!",
          "They removed my favorite show right before the season finale"
        ]
      }
    },
    "pinterest": {
      "ru": {
        "pos": [
          "Нашла идею для дня рождения подруги, все были в восторге!",
          "Собрала доску с идеями для комнаты, очень вдохновляет",
          "Сохраняю рецепты каждую неделю, уже попробовала десять"
        ],
        "mid": [
          "Удобно для идей, но реклама между пинами выскакивает часто.",
          "Хорошее приложение, но поиск иногда выдаёт что-то не то."
        ],
        "neg": [
          "Приложение зависло прямо когда сохраняла важный пин это обидно!",
          "Любимая доска пропала после обновления"
        ]
      },
      "en": {
        "pos": [
          "Found an idea for my friends birthday, everyone loved it!",
          "Made a board of room ideas, its really inspiring",
          "I save recipes every week, already tried ten of them"
        ],
        "mid": [
          "Great for ideas but ads pop up a lot between pins.",
          "Good app but search sometimes shows unrelated results."
        ],
        "neg": [
          "The app froze right when I was saving an important pin, so annoying!",
          "My favorite board disappeared after the update"
        ]
      }
    },
    "duolingo": {
      "ru": {
        "pos": [
          "Выучила первые сто слов на новом языке, так горжусь!",
          "Занимаюсь каждый день перед школой, уже месячный стрик!",
          "Сова из напоминаний мотивирует меня не пропускать уроки"
        ],
        "mid": [
          "Хорошее приложение, но некоторые уроки повторяются слишком часто.",
          "Затягивает, но без подписки реклама выскакивает часто."
        ],
        "neg": [
          "Потеряла стрик на пятидесятый день это невыносимо!",
          "Сердечки кончились а до следующего пополнения долго ждать"
        ]
      },
      "en": {
        "pos": [
          "Learned my first hundred words in a new language, so proud!",
          "I practice every day before school, on a month-long streak!",
          "The reminder owl keeps me motivated not to miss lessons"
        ],
        "mid": [
          "Good app but some lessons repeat a bit too often.",
          "Addictive but ads pop up a lot without a subscription."
        ],
        "neg": [
          "Lost my streak on day fifty, unbearable!",
          "Ran out of hearts and the refill takes forever"
        ]
      }
    },
    "canva": {
      "ru": {
        "pos": [
          "Сделала презентацию для школьного проекта, все хвалили!",
          "Создала логотип для своего блога, выглядит очень стильно",
          "Монтирую видео для друзей на дни рождения, всем нравится"
        ],
        "mid": [
          "Удобное приложение, но многие шаблоны только по подписке.",
          "Хорошие инструменты ИИ, но иногда приложение долго грузится."
        ],
        "neg": [
          "Проект не сохранился прямо перед сдачей это невыносимо!",
          "Подписка списалась хотя я не пользовалась платными функциями"
        ]
      },
      "en": {
        "pos": [
          "Made a presentation for my school project, everyone loved it!",
          "Designed a logo for my blog, it looks really stylish",
          "I edit videos for friends birthdays, everyone loves them"
        ],
        "mid": [
          "Convenient app but a lot of templates are subscription-only.",
          "Great AI tools but the app sometimes takes a while to load."
        ],
        "neg": [
          "My project didnt save right before it was due, unbearable!",
          "Got charged for a subscription even though I didnt use paid features"
        ]
      }
    },
    "picsart": {
      "ru": {
        "pos": [
          "Отредактировала фото для профиля, получилось очень круто!",
          "Убрала фон с фотографии за секунды, это волшебство!",
          "Делаю коллажи с подругами каждые выходные"
        ],
        "mid": [
          "Классные ИИ-инструменты, но многие эффекты только по подписке.",
          "Хорошее приложение, но иногда долго обрабатывает фото."
        ],
        "neg": [
          "Подписка списалась а я забыла её отменить это обидно!",
          "Приложение вылетело и не сохранило отредактированное фото"
        ]
      },
      "en": {
        "pos": [
          "Edited my profile photo, it turned out so cool!",
          "Removed the background from a photo in seconds, its magic!",
          "I make collages with my friends every weekend"
        ],
        "mid": [
          "Great AI tools but a lot of effects are subscription-only.",
          "Good app but it sometimes takes a while to process photos."
        ],
        "neg": [
          "Got charged for a subscription I forgot to cancel, so annoying!",
          "The app crashed and didnt save my edited photo"
        ]
      }
    },
    "tiktok": {
      "ru": {
        "pos": [
          "Мой видос набрал тысячу лайков, я в шоке!",
          "Нашла столько крутых трендов, весь вечер листаю",
          "Снимаю видео с подругами каждые выходные, очень весело"
        ],
        "mid": [
          "Затягивает, но иногда теряешь счёт времени за листанием.",
          "Хорошее приложение, но реклама между видео бывает частой."
        ],
        "neg": [
          "Аккаунт временно заблокировали без объяснения это несправедливо!",
          "Любимое видео удалили без причины"
        ]
      },
      "en": {
        "pos": [
          "My video got a thousand likes, im shocked!",
          "Found so many cool trends, been scrolling all evening",
          "I film videos with my friends every weekend, so fun"
        ],
        "mid": [
          "Addictive but you lose track of time scrolling sometimes.",
          "Good app but ads between videos can get frequent."
        ],
        "neg": [
          "My account got temporarily banned with no explanation, so unfair!",
          "They took down my favorite video for no reason"
        ]
      }
    },
    "snapchat": {
      "ru": {
        "pos": [
          "Держим стрик с лучшей подругой уже двести дней!",
          "Фильтры такие смешные, ржём с друзьями весь вечер",
          "Переписываюсь с одноклассниками каждый день, очень удобно"
        ],
        "mid": [
          "Весело, но интерфейс поначалу немного путает.",
          "Хорошее приложение, но иногда сообщения приходят с задержкой."
        ],
        "neg": [
          "Потеряла стрик на двухсотый день это невыносимо!",
          "Приложение вылетело и не отправило важное сообщение"
        ]
      },
      "en": {
        "pos": [
          "Kept a streak with my best friend for two hundred days!",
          "The filters are so funny, we laugh with friends all evening",
          "I chat with classmates every day, its really convenient"
        ],
        "mid": [
          "Fun but the interface is a bit confusing at first.",
          "Good app but messages sometimes arrive late."
        ],
        "neg": [
          "Lost my streak on day two hundred, unbearable!",
          "The app crashed and didnt send an important message"
        ]
      }
    },
    "reddit": {
      "ru": {
        "pos": [
          "Нашла сообщество по любимой игре, там очень дружелюбно!",
          "Мой пост набрал тысячу лайков, не ожидала такого!",
          "Читаю обсуждения каждый вечер, всегда узнаю что-то новое"
        ],
        "mid": [
          "Интересно, но интерфейс поначалу немного путает новичков.",
          "Хорошее приложение, но реклама между постами бывает часто."
        ],
        "neg": [
          "Мой комментарий удалили без объяснения причин это обидно!",
          "Приложение вылетело и не сохранило черновик поста"
        ]
      },
      "en": {
        "pos": [
          "Found a community for my favorite game, everyone is so friendly!",
          "My post got a thousand upvotes, I didnt expect that!",
          "I read discussions every evening, always learn something new"
        ],
        "mid": [
          "Interesting but the interface is confusing for newcomers at first.",
          "Good app but ads between posts can get frequent."
        ],
        "neg": [
          "My comment got removed with no explanation, so annoying!",
          "The app crashed and didnt save my draft post"
        ]
      }
    },
    "hakogram": {
      "ru": {
        "pos": [
          "Переписка с близкими под рукой, нужный разговор нахожу быстро. Для меня это главное.",
          "Отправил несколько фотографий одним сообщением, всё дошло в нужном порядке. Удобно.",
          "Длинные сообщения читаются нормально, текст не слипается. Часто обсуждаем здесь рабочие вопросы.",
          "Нравится быстро возвращаться к разговорам, которые уже начаты. Не теряюсь в списке."
        ],
        "mid": [
          "Переписываться удобно, но непривычные настройки уведомлений пришлось изучить отдельно.",
          "Нужные мне функции есть. Часть дополнительных разделов я бы убрал с главного экрана."
        ],
        "neg": [
          "Новое сообщение вижу только после открытия приложения. Из-за пропущенных уведомлений пользоваться неудобно.",
          "При возвращении в длинную переписку теряется место, где читал. Каждый раз приходится листать заново."
        ]
      },
      "en": {
        "pos": [
          "Chats with people close to me are easy to reach. That is what matters most to me.",
          "I sent several photos together and they arrived in the right order. Convenient.",
          "Long messages are easy to read. We often discuss work here, so that helps.",
          "Getting back to an existing conversation is quick. I do not get lost in the list."
        ],
        "mid": [
          "Messaging is comfortable, though I had to spend time figuring out notification settings.",
          "The features I need are here. I would remove some extra sections from the main screen."
        ],
        "neg": [
          "I only see new messages after opening the app. Missed notifications make it difficult to use.",
          "Returning to a long conversation loses my reading position. I have to scroll back every time."
        ]
      }
    },
    "monumentvalley": {
      "ru": {
        "pos": [
          "Прошла игру за один вечер и сразу начала заново, чтобы просто побродить по уровням.",
          "Каждый уровень — маленькое произведение искусства, ничего подобного раньше не видела.",
          "Головоломки с невозможной архитектурой ломают мозг в лучшем смысле."
        ],
        "mid": [
          "Очень красиво, но прохождение довольно короткое для такой цены.",
          "Атмосфера прекрасная, но пара уровней показались проще остальных."
        ],
        "neg": [
          "Ожидала больше уровней за эти деньги, прошла слишком быстро.",
          "На старом айпаде подвисает при смене ракурса камеры."
        ]
      },
      "en": {
        "pos": [
          "Finished it in one evening and immediately started over just to wander the levels again.",
          "Every level is a tiny piece of art, never seen anything quite like it.",
          "The impossible-architecture puzzles break your brain in the best way."
        ],
        "mid": [
          "Beautiful, but the playtime feels short for the price.",
          "Lovely atmosphere, though a couple of levels felt easier than the rest."
        ],
        "neg": [
          "Expected more levels for the price, finished it too quickly.",
          "Stutters on camera rotation on my older iPad."
        ]
      }
    },
    "monumentvalley2": {
      "ru": {
        "pos": [
          "История про маму и ребёнка растрогала до слёз, редкость для головоломки.",
          "Механики с зеркальным отражением уровня — гениальная новая идея.",
          "Визуально даже красивее первой части, не думала что это возможно."
        ],
        "mid": [
          "Приятное продолжение, но сюрпризов меньше, чем в оригинале.",
          "Хорошая игра, но короче первой части."
        ],
        "neg": [
          "За такую цену хотелось бы больше контента после основной истории.",
          "Пара головоломок решается почти случайно, без понимания логики."
        ]
      },
      "en": {
        "pos": [
          "The mother-and-child story got me genuinely emotional, rare for a puzzle game.",
          "The mirrored-level mechanic is a genuinely brilliant new idea.",
          "Even more beautiful than the first game somehow."
        ],
        "mid": [
          "A nice sequel, but fewer surprises than the original.",
          "Good game but shorter than the first one."
        ],
        "neg": [
          "Wish there was more content after the main story for the price.",
          "A couple of puzzles get solved almost by accident, not real understanding."
        ]
      }
    },
    "theroomoldsins": {
      "ru": {
        "pos": [
          "Кукольный дом — лучшая локация во всей серии, деталей просто море.",
          "Разгадывать механизмы руками на экране до сих пор ощущается волшебно.",
          "Финал полностью пересобрал моё представление о серии, очень сильно."
        ],
        "mid": [
          "Отличные головоломки, но подсказки иногда слишком прямолинейные.",
          "Атмосфера супер, но некоторые загадки затянуты."
        ],
        "neg": [
          "Застряла на одной комнате на два часа, подсказка не помогла разобраться.",
          "На iPhone текст интерфейса совсем мелкий."
        ]
      },
      "en": {
        "pos": [
          "The dollhouse is the best setting in the whole series, packed with detail.",
          "Solving mechanisms by touch on screen still feels magical.",
          "The ending completely recontextualizes the series, really powerful."
        ],
        "mid": [
          "Great puzzles, but the hint system is sometimes too direct.",
          "Amazing atmosphere but a few puzzles drag on too long."
        ],
        "neg": [
          "Got stuck in one room for two hours, the hint didnt actually help.",
          "Interface text is really small on iPhone."
        ]
      }
    },
    "theroomtwo": {
      "ru": {
        "pos": [
          "Загадки от таинственного «AS» затягивают сильнее, чем в первой части.",
          "Каждый новый механизм удивляет, дизайн головоломок безупречный.",
          "Прошёл на одном дыхании, атмосфера держит в напряжении всю игру."
        ],
        "mid": [
          "Хорошее продолжение, но локаций стало меньше, чем ожидал.",
          "Головоломки классные, но сюжет подан скупо."
        ],
        "neg": [
          "Один пазл с шифром совсем не поддавался логике, пришлось гуглить.",
          "Игра ощутимо короче первой части."
        ]
      },
      "en": {
        "pos": [
          "The puzzles from the mysterious 'AS' are even more gripping than the first game.",
          "Every new mechanism surprises you, flawless puzzle design.",
          "Played it in one sitting, the atmosphere holds tension the whole way through."
        ],
        "mid": [
          "Good sequel but fewer locations than I expected.",
          "Great puzzles but the story is told very sparsely."
        ],
        "neg": [
          "One cipher puzzle made no logical sense, had to look it up.",
          "Noticeably shorter than the first game."
        ]
      }
    },
    "theroomthree": {
      "ru": {
        "pos": [
          "Несколько концовок дают реальный повод пройти игру ещё раз.",
          "Остров с несколькими путями — самая амбициозная локация в серии.",
          "Деталь механизмов на новом уровне, будто держишь настоящий артефакт."
        ],
        "mid": [
          "Отличная головоломка, но переключение между линиями сюжета иногда путает.",
          "Атмосфера супер, но темп ближе к концу проседает."
        ],
        "neg": [
          "Заблудился между несколькими путями, не понял в какую концовку иду.",
          "Требует довольно мощный телефон, на старом подвисает."
        ]
      },
      "en": {
        "pos": [
          "Multiple endings actually give you a reason to play through again.",
          "The multi-path island is the most ambitious setting in the series.",
          "Mechanism detail is next-level, feels like holding a real artifact."
        ],
        "mid": [
          "Great puzzle game but switching between story paths is confusing at times.",
          "Amazing atmosphere but pacing drags near the end."
        ],
        "neg": [
          "Got lost between the multiple paths, wasnt sure which ending I was heading to.",
          "Needs a fairly powerful phone, stutters on older devices."
        ]
      }
    },
    "stardewvalley": {
      "ru": {
        "pos": [
          "Завела ферму и не могу оторваться уже третий месяц подряд.",
          "Игра невероятно расслабляет после учёбы, лучше любой медитации.",
          "Контента на 50+ часов легко хватает, а с обновлениями и больше."
        ],
        "mid": [
          "Отличная игра, но управление пальцами на телефоне непривычное поначалу.",
          "Затягивает, хотя первые часы кажутся медленными."
        ],
        "neg": [
          "На iPhone SE интерфейс иногда слишком мелкий для точного тапа.",
          "Автосохранение один раз подвело и я потеряла прогресс за день."
        ]
      },
      "en": {
        "pos": [
          "Started a farm and haven't been able to stop for three months straight.",
          "Incredibly relaxing after a day of classes, better than any meditation app.",
          "Easily 50+ hours of content, even more with the updates."
        ],
        "mid": [
          "Great game but touch controls take some getting used to.",
          "Addictive though the first few hours feel slow."
        ],
        "neg": [
          "UI feels too small for precise taps on iPhone SE sometimes.",
          "Autosave failed once and I lost a whole days progress."
        ]
      }
    },
    "bloonstd6": {
      "ru": {
        "pos": [
          "Комбинации башен и героев дают бесконечный простор для стратегий.",
          "Регулярные ивенты держат интерес даже спустя год игры.",
          "Графика и анимации взрывов шариков выглядят просто отлично."
        ],
        "mid": [
          "Отличная тауэр-дефенс, но донат на новые башни ощутимо кусается.",
          "Затягивает, но сложность на высоких раундах требует терпения."
        ],
        "neg": [
          "После обновления игра стала заметно чаще вылетать на сложных картах.",
          "Реклама между раундами стала длиннее, чем раньше."
        ]
      },
      "en": {
        "pos": [
          "Tower and hero combos give you endless room for strategy.",
          "Regular events keep it interesting even a year in.",
          "Bloon pop animations and effects look genuinely great."
        ],
        "mid": [
          "Great tower defense but new tower prices really add up.",
          "Addictive but higher rounds need real patience."
        ],
        "neg": [
          "Crashes noticeably more often on hard maps since the update.",
          "Ads between rounds got longer than they used to be."
        ]
      }
    },
    "kingdomrush": {
      "ru": {
        "pos": [
          "Башни и герои отлично сбалансированы, каждая карта — новая головоломка.",
          "Юмор в описаниях врагов до сих пор смешит спустя столько лет.",
          "Один из лучших тауэр-дефенсов на телефоне без вопросов."
        ],
        "mid": [
          "Отличная классика, но интерфейс выглядит немного устаревшим.",
          "Сложность резко растёт на последних картах."
        ],
        "neg": [
          "На новом айфоне игра неожиданно долго грузится между уровнями.",
          "Хотелось бы больше карт, контента маловато для полной цены."
        ]
      },
      "en": {
        "pos": [
          "Towers and heroes are perfectly balanced, every map is a new puzzle.",
          "The enemy flavor text still makes me laugh after all these years.",
          "Simply one of the best tower defense games on mobile."
        ],
        "mid": [
          "Great classic but the interface looks a bit dated now.",
          "Difficulty spikes hard on the last few maps."
        ],
        "neg": [
          "Takes surprisingly long to load between levels on a new iPhone.",
          "Wish there were more maps, feels light on content for the price."
        ]
      }
    },
    "kingdomrushorigins": {
      "ru": {
        "pos": [
          "Эльфийская тема добавила совершенно новые механики магии в серию.",
          "Лучшая часть серии на мой взгляд, баланс просто идеальный.",
          "Дизайн карт стал ещё детальнее, разглядывать одно удовольствие."
        ],
        "mid": [
          "Отличное дополнение к серии, но ощущается похоже на прошлые части.",
          "Хорошо, но новых врагов маловато для полноценной третьей части."
        ],
        "neg": [
          "Столкнулся с багом — герой застревал на одной карте намертво.",
          "Цена высоковата для контента, который во многом повторяет оригинал."
        ]
      },
      "en": {
        "pos": [
          "The elven theme brought genuinely new magic mechanics to the series.",
          "My favorite entry in the series, the balance is just perfect.",
          "Map design got even more detailed, love just looking around."
        ],
        "mid": [
          "Great addition to the series but feels similar to past entries.",
          "Good but not enough new enemy types for a full third game."
        ],
        "neg": [
          "Ran into a bug where my hero got permanently stuck on one map.",
          "A bit pricey for content that overlaps a lot with the original."
        ]
      }
    },
    "papersplease": {
      "ru": {
        "pos": [
          "Никогда не думал, что проверка документов может быть таким сильным опытом.",
          "Моральные дилеммы заставляют реально задуматься о цене решений.",
          "Атмосфера холодной бюрократии передана невероятно точно."
        ],
        "mid": [
          "Мощная игра, но однообразие механики ощущается на длинной дистанции.",
          "Отличная концепция, но ближе к концу темп проседает."
        ],
        "neg": [
          "Управление штампами на маленьком экране телефона неудобное.",
          "Один из дней завершился без объяснений, что я сделал не так."
        ]
      },
      "en": {
        "pos": [
          "Never thought checking documents could be such a powerful experience.",
          "The moral dilemmas genuinely make you weigh the cost of your choices.",
          "The cold bureaucratic atmosphere is captured perfectly."
        ],
        "mid": [
          "Powerful game but the core mechanic gets repetitive over a long session.",
          "Great concept but pacing drags near the end."
        ],
        "neg": [
          "Stamping documents is fiddly on a small phone screen.",
          "One day ended with no explanation of what I did wrong."
        ]
      }
    },
    "florence": {
      "ru": {
        "pos": [
          "Прошла за час и весь вечер потом думала об этой истории.",
          "Мини-игры отражают чувства героини гениально, без единого слова текста.",
          "Самая трогательная история о любви, что я видела в приложении."
        ],
        "mid": [
          "Очень красиво, но хотелось бы, чтобы игра длилась подольше.",
          "Мило и трогательно, хотя геймплей местами совсем простой."
        ],
        "neg": [
          "Слишком короткая для своей цены, прошла за один присест.",
          "Ожидала больше интерактивности, а не просто перелистывание сцен."
        ]
      },
      "en": {
        "pos": [
          "Finished it in an hour and spent the whole evening thinking about it.",
          "The minigames capture the characters feelings brilliantly without a word of text.",
          "The most touching love story I have seen in an app."
        ],
        "mid": [
          "Beautiful, but I wish it lasted longer.",
          "Sweet and touching, though the gameplay is very simple at times."
        ],
        "neg": [
          "Too short for the price, finished it in one sitting.",
          "Expected more interactivity than just flipping through scenes."
        ]
      }
    },
    "minimetro": {
      "ru": {
        "pos": [
          "Минимализм в дизайне и звуке создают удивительно спокойный опыт.",
          "Каждая партия уникальна, переигрывать хочется бесконечно.",
          "Идеальная игра для короткого перерыва между парами."
        ],
        "mid": [
          "Затягивает, но на маленьком экране сложно точно тянуть линии.",
          "Отличная идея, но случайная генерация иногда слишком жёсткая."
        ],
        "neg": [
          "Игра неожиданно сложная для казуального названия, обидно проигрывать.",
          "Хотелось бы больше городов бесплатно, а не только через покупку."
        ]
      },
      "en": {
        "pos": [
          "The minimalist visuals and sound design make for a surprisingly calm experience.",
          "Every run feels unique, endlessly replayable.",
          "The perfect game for a short break between classes."
        ],
        "mid": [
          "Addictive, but dragging precise lines is fiddly on a small screen.",
          "Great concept but the random generation can feel unfair sometimes."
        ],
        "neg": [
          "Surprisingly hard for a casual-looking game, losing runs stings.",
          "Wish more cities were free instead of behind a purchase."
        ]
      }
    },
    "gtasanandreas": {
      "ru": {
        "pos": [
          "Ностальгия накрыла с первых минут, звук мотора точно как в детстве.",
          "Открытый мир до сих пор поражает масштабом даже спустя годы.",
          "Наконец прошёл сюжет, который начинал ещё на PS2, это было сильно."
        ],
        "mid": [
          "Отличный порт, но управление на сенсорном экране требует привыкания.",
          "Графика простовата по нынешним меркам, но играть всё равно приятно."
        ],
        "neg": [
          "На новом iPhone игра неожиданно лагает в городе с плотным трафиком.",
          "Виртуальные кнопки закрывают половину экрана во время стрельбы."
        ]
      },
      "en": {
        "pos": [
          "Nostalgia hit from the first minute, the engine sound is exactly like I remember.",
          "The open world still amazes with its scale even after all these years.",
          "Finally finished the story I started on PS2, that hit hard."
        ],
        "mid": [
          "Great port but touchscreen controls take real getting used to.",
          "Graphics are dated by now but its still a joy to play."
        ],
        "neg": [
          "Surprisingly laggy in busy city traffic on a new iPhone.",
          "Virtual buttons cover half the screen during shootouts."
        ]
      }
    },
    "gtavicecity": {
      "ru": {
        "pos": [
          "Саундтрек 80-х один делает эту игру бессмертной классикой.",
          "Атмосфера Майами передана лучше, чем во многих новых играх.",
          "Переиграл спустя пятнадцать лет и это всё ещё шедевр."
        ],
        "mid": [
          "Классика, но управление на телефоне ощутимо хуже геймпада.",
          "Отличная игра, но текстуры выглядят устаревшими на большом экране."
        ],
        "neg": [
          "Камера при вождении иногда ведёт себя абсолютно непредсказуемо.",
          "Игра вылетела прямо во время финальной миссии, обидно до слёз."
        ]
      },
      "en": {
        "pos": [
          "The 80s soundtrack alone makes this an immortal classic.",
          "The Miami atmosphere is captured better than in a lot of newer games.",
          "Replayed it fifteen years later and it still holds up as a masterpiece."
        ],
        "mid": [
          "A classic, but touch controls are noticeably worse than a gamepad.",
          "Great game but textures look dated on a big screen."
        ],
        "neg": [
          "The driving camera behaves completely unpredictably sometimes.",
          "Crashed right during the final mission, that stung."
        ]
      }
    },
    "gta3": {
      "ru": {
        "pos": [
          "Игра, с которой началась моя любовь к открытым мирам, всё ещё держится.",
          "Историческая ценность огромная, приятно пройти первоисточник жанра.",
          "Атмосфера Либерти-Сити мрачная и по-своему притягательная."
        ],
        "mid": [
          "Управление устарело, но с геймпадом становится намного приятнее.",
          "Хорошая классика, хотя современным играм явно уступает в удобстве."
        ],
        "neg": [
          "Без геймпада играть по-настоящему неудобно, слишком много кнопок.",
          "Миссии со стрельбой почти невозможно пройти на сенсорном экране."
        ]
      },
      "en": {
        "pos": [
          "The game that started my love for open worlds still holds up.",
          "Huge historical value, great to finally play the genre-defining original.",
          "Liberty City atmosphere is bleak and strangely captivating."
        ],
        "mid": [
          "Controls feel dated but a gamepad makes it much more enjoyable.",
          "Good classic though it clearly loses to modern games on comfort."
        ],
        "neg": [
          "Genuinely uncomfortable to play without a gamepad, too many buttons.",
          "Shooting missions are nearly impossible on a touchscreen."
        ]
      }
    },
    "badland": {
      "ru": {
        "pos": [
          "Визуально одна из самых красивых игр, что я видел на телефоне.",
          "Уровни с несколькими копиями себя — гениальная механика.",
          "Атмосфера тёмного леса затягивает с первых секунд."
        ],
        "mid": [
          "Красиво и атмосферно, но управление одним пальцем иногда неточное.",
          "Хорошая игра, но однообразна на длинной дистанции."
        ],
        "neg": [
          "Некоторые уровни требуют пиксельной точности, это раздражает.",
          "Реклама после каждого уровня в бесплатных эпизодах надоедает."
        ]
      },
      "en": {
        "pos": [
          "Visually one of the most beautiful games I've seen on mobile.",
          "Levels with multiple copies of yourself are a genius mechanic.",
          "The dark forest atmosphere pulls you in from the first seconds."
        ],
        "mid": [
          "Beautiful and atmospheric, but one-finger controls are imprecise sometimes.",
          "Good game but repetitive over a long session."
        ],
        "neg": [
          "Some levels demand pixel-perfect precision, its frustrating.",
          "Ads after every level in the free episodes get old."
        ]
      }
    },
    "leosfortune": {
      "ru": {
        "pos": [
          "Уровни нарисованы вручную и это видно в каждой детали фона.",
          "Управление наклоном ощущается точным и приятным с первых минут.",
          "Сюжет про поиск вора неожиданно трогательный к концу."
        ],
        "mid": [
          "Красивый платформер, но местами слишком короткий для цены.",
          "Хорошая игра, но сложность местами скачет неровно."
        ],
        "neg": [
          "Пара прыжков требует пиксельной точности, что раздражает на телефоне.",
          "Игра завершилась быстрее, чем я успел привыкнуть к механикам."
        ]
      },
      "en": {
        "pos": [
          "Levels are hand-drawn and it shows in every background detail.",
          "Tilt controls feel precise and satisfying from the first minute.",
          "The thief-hunting story gets surprisingly touching by the end."
        ],
        "mid": [
          "Beautiful platformer but feels short for the price in places.",
          "Good game but difficulty spikes unevenly."
        ],
        "neg": [
          "A couple of jumps demand pixel precision, frustrating on a phone.",
          "Ended faster than I could really get used to the mechanics."
        ]
      }
    },
    "oceanhorn": {
      "ru": {
        "pos": [
          "Музыка Кена Уилера великолепна, будто из настоящей ролевой игры.",
          "Мир напомнил классические ролевые игры детства, очень приятная ностальгия.",
          "Для мобильной игры контента и сюжета неожиданно много."
        ],
        "mid": [
          "Хорошая ролевая игра, но управление на сенсорном экране требует привыкания.",
          "Приятная графика, но местами повторяющиеся подземелья."
        ],
        "neg": [
          "Камера в узких пространствах ведёт себя странно и мешает целиться.",
          "На старом телефоне игра ощутимо греется во время долгих сессий."
        ]
      },
      "en": {
        "pos": [
          "Kenji Ito’s score is gorgeous, feels like a real console RPG.",
          "The world brought back nostalgia for classic childhood RPGs.",
          "Surprising amount of content and story for a mobile game."
        ],
        "mid": [
          "Good RPG but touchscreen controls take getting used to.",
          "Nice visuals but some dungeons feel repetitive."
        ],
        "neg": [
          "Camera behaves oddly in tight spaces and messes with aiming.",
          "Phone gets noticeably hot during long sessions on older hardware."
        ]
      }
    },
    "dontstarvepocket": {
      "ru": {
        "pos": [
          "Стиль игры настолько уникальный, что ни с чем не спутаешь.",
          "Крафтинг и выживание затягивают на долгие вечера подряд.",
          "Смерть от нелепой случайности каждый раз смешит, а не злит."
        ],
        "mid": [
          "Отличный выживач, но интерфейс на маленьком экране тесноват.",
          "Атмосферно, хотя ночи иногда слишком тёмные, чтобы понять что происходит."
        ],
        "neg": [
          "Погиб от голода на сорок пятый день и потерял весь прогресс, очень обидно.",
          "Требует достаточно мощный телефон, на старых моделях лагает."
        ]
      },
      "en": {
        "pos": [
          "The art style is so unique nothing else looks like it.",
          "Crafting and survival loop is addictive for long evening sessions.",
          "Dying from some absurd accident makes me laugh instead of rage."
        ],
        "mid": [
          "Great survival game but the UI feels cramped on a small screen.",
          "Atmospheric, though nights get so dark its hard to see whats happening."
        ],
        "neg": [
          "Starved to death on day forty five and lost all progress, that hurt.",
          "Needs a fairly powerful phone, laggy on older models."
        ]
      }
    },
    "wheresmywater": {
      "ru": {
        "pos": [
          "Физика воды сделана невероятно качественно для мобильной игры.",
          "Свомпи такой милый персонаж, что хочется пройти все уровни подряд.",
          "Головоломки заставляют думать по-настоящему, а не просто тапать."
        ],
        "mid": [
          "Отличная головоломка, но подсказки платные, что немного разочаровывает.",
          "Хорошая физика, но интерфейс выглядит устаревшим."
        ],
        "neg": [
          "После обновления пропал прогресс на нескольких уровнях.",
          "Реклама между уровнями стала слишком навязчивой в последней версии."
        ]
      },
      "en": {
        "pos": [
          "The water physics are impressively well done for a mobile game.",
          "Swampy is such a charming character, want to clear every level.",
          "The puzzles make you actually think instead of just tapping around."
        ],
        "mid": [
          "Great puzzler but hints cost money, which is a bit disappointing.",
          "Good physics but the interface looks dated."
        ],
        "neg": [
          "Lost progress on several levels after the update.",
          "Ads between levels got too pushy in the latest version."
        ]
      }
    },
    "thiswarofmine": {
      "ru": {
        "pos": [
          "Игра показывает войну так, как редко кто решается показать.",
          "Каждое решение давит морально, а не просто влияет на цифры.",
          "Одна из немногих игр, которая заставила меня по-настоящему задуматься."
        ],
        "mid": [
          "Очень сильная игра, но местами слишком тяжёлая эмоционально для одной сессии.",
          "Отличная концепция, хотя механика выживания местами однообразна."
        ],
        "neg": [
          "Цена высоковата даже с учётом качества и глубины истории.",
          "Один персонаж погиб из-за непонятной механики, было обидно и неясно почему."
        ]
      },
      "en": {
        "pos": [
          "The game shows war in a way few others dare to.",
          "Every decision weighs on you morally, not just as numbers.",
          "One of the few games that made me genuinely stop and think."
        ],
        "mid": [
          "A very powerful game, but emotionally heavy for one sitting at times.",
          "Great concept though the survival loop gets repetitive in places."
        ],
        "neg": [
          "A bit pricey even accounting for the quality and depth of the story.",
          "Lost a character to a mechanic I didnt understand, frustrating and unclear."
        ]
      }
    },
    "altoodyssey": {
      "ru": {
        "pos": [
          "Закат над дюнами в этой игре красивее многих фотографий.",
          "Музыка меняется вместе с погодой и это создаёт невероятную атмосферу.",
          "Играю перед сном каждый вечер, невероятно успокаивает."
        ],
        "mid": [
          "Очень красиво, но геймплей почти не изменился со времён Adventure.",
          "Приятная игра, хотя трюки освоить сложнее, чем кажется."
        ],
        "neg": [
          "Хотелось бы больше нового по сравнению с первой частью за такую цену.",
          "Управление свайпами иногда не срабатывает в решающий момент."
        ]
      },
      "en": {
        "pos": [
          "The dune sunsets in this game are more beautiful than most photos.",
          "The music shifts with the weather and it creates an incredible atmosphere.",
          "I play it every night before bed, incredibly calming."
        ],
        "mid": [
          "Beautiful but the gameplay barely evolved since Adventure.",
          "Enjoyable though the tricks are harder to master than they look."
        ],
        "neg": [
          "Wish there was more new stuff compared to the first game for the price.",
          "Swipe controls sometimes miss at the worst moment."
        ]
      }
    },
    "altoadventure": {
      "ru": {
        "pos": [
          "Снежные пейзажи невероятно умиротворяющие, лучшая игра для расслабления.",
          "Простое управление, но осваивать трюки можно бесконечно долго.",
          "Погодные эффекты в реальном времени выглядят потрясающе."
        ],
        "mid": [
          "Приятная медитативная игра, но однообразна на длинной дистанции.",
          "Красиво, хотя цели миссий иногда повторяются."
        ],
        "neg": [
          "После обновления стала чаще вылетать при запуске на старом айфоне.",
          "Хотелось бы больше локаций, а не только заснеженные склоны."
        ]
      },
      "en": {
        "pos": [
          "The snowy landscapes are incredibly soothing, the best game to unwind to.",
          "Simple controls but the tricks have near-endless depth to master.",
          "Real-time weather effects look absolutely stunning."
        ],
        "mid": [
          "A nice meditative game but repetitive over a long session.",
          "Beautiful, though mission goals repeat a bit."
        ],
        "neg": [
          "Started crashing on launch more often on my old iPhone after the update.",
          "Wish there were more locations besides just snowy slopes."
        ]
      }
    },
    "reignsgot": {
      "ru": {
        "pos": [
          "Смахивать карты и решать судьбу трона неожиданно затягивающе.",
          "Отсылки к сериалу считываются на каждом шагу, фанаты оценят.",
          "Чёрный юмор игры отлично передаёт дух оригинальной саги."
        ],
        "mid": [
          "Хорошая механика, но партии иногда заканчиваются слишком внезапно.",
          "Атмосферно, хотя без знания сериала часть отсылок теряется."
        ],
        "neg": [
          "Умер от случайного решения без всякого предупреждения, было обидно.",
          "Хотелось бы больше персонажей из сериала, многих явно не хватает."
        ]
      },
      "en": {
        "pos": [
          "Swiping cards to decide the fate of the throne is surprisingly addictive.",
          "References to the show show up everywhere, fans will love it.",
          "The dark humor perfectly captures the spirit of the original saga."
        ],
        "mid": [
          "Great mechanic but runs sometimes end abruptly out of nowhere.",
          "Atmospheric, though some references land better if you know the show."
        ],
        "neg": [
          "Died from a random decision with zero warning, that stung.",
          "Wish more characters from the show were included, a lot are missing."
        ]
      }
    },
    "babaisyou": {
      "ru": {
        "pos": [
          "Игра ломает мозг в самом лучшем смысле, такого пазла раньше не видел.",
          "Каждое новое правило открывает совершенно другой взгляд на уровень.",
          "Одна из самых оригинальных головоломок за последние годы точно."
        ],
        "mid": [
          "Гениальная концепция, но сложность растёт очень резко после середины.",
          "Отличная головоломка, хотя пара уровней ощущаются несправедливо сложными."
        ],
        "neg": [
          "Застрял на одном уровне на несколько часов и решение оказалось абсурдным.",
          "Интерфейс на маленьком экране телефона слишком мелкий для точных тапов."
        ]
      },
      "en": {
        "pos": [
          "This game breaks your brain in the best way, never seen a puzzle like it.",
          "Every new rule completely changes how you see the level.",
          "One of the most original puzzle games in years, hands down."
        ],
        "mid": [
          "Genius concept but difficulty spikes hard past the midpoint.",
          "Great puzzler though a couple of levels feel unfairly hard."
        ],
        "neg": [
          "Stuck on one level for hours and the solution turned out absurd.",
          "UI is too small for precise taps on a phone screen."
        ]
      }
    },
    "implosion": {
      "ru": {
        "pos": [
          "Графика выглядит как консольная игра, для мобильного это редкость.",
          "Бои в мех-костюме ощущаются мощно и отзывчиво на каждый удар.",
          "Сюжет про выживание человечества затягивает сильнее, чем ожидал."
        ],
        "mid": [
          "Красивая экшен-РПГ, но управление жестами иногда сбоит в бою.",
          "Хорошая графика, но сюжет подан довольно скупо между миссиями."
        ],
        "neg": [
          "На среднем телефоне периодически проседает частота кадров в бою.",
          "Донат на улучшение снаряжения ощутимо влияет на баланс сложности."
        ]
      },
      "en": {
        "pos": [
          "Graphics look console-quality, rare to see on mobile.",
          "Mech-suit combat feels powerful and responsive to every hit.",
          "The story about humanitys survival hooked me more than expected."
        ],
        "mid": [
          "Beautiful action RPG but gesture controls glitch out in combat sometimes.",
          "Great graphics but the story is told pretty sparsely between missions."
        ],
        "neg": [
          "Frame rate dips noticeably in combat on a mid-range phone.",
          "Gear upgrade purchases noticeably affect the difficulty balance."
        ]
      }
    },
    "transistor": {
      "ru": {
        "pos": [
          "Саундтрек один из лучших, что я слышал в мобильной игре вообще.",
          "Боевая система с планированием ходов в реальном времени гениальна.",
          "Атмосфера города, поглощаемого силой, пробирает до мурашек."
        ],
        "mid": [
          "Потрясающая игра, но сюжет подаётся очень туманно поначалу.",
          "Отличный визуальный стиль, хотя боёвка требует привыкания."
        ],
        "neg": [
          "История осталась местами непонятной даже после финальных титров.",
          "Управление жестами на телефоне менее удобное, чем было бы с геймпадом."
        ]
      },
      "en": {
        "pos": [
          "One of the best soundtracks I have ever heard in a mobile game.",
          "The real-time planning combat system is genius.",
          "The city-consumed-by-a-force atmosphere gives me chills."
        ],
        "mid": [
          "Stunning game but the story is told very cryptically at first.",
          "Great visual style though combat takes getting used to."
        ],
        "neg": [
          "Parts of the story stayed confusing even after the credits rolled.",
          "Touch controls are less comfortable than a gamepad would be."
        ]
      }
    },
    "oldmansjourney": {
      "ru": {
        "pos": [
          "Простая механика рельефа рассказывает историю сильнее любых слов.",
          "Акварельная графика невероятно тёплая и трогательная.",
          "Прошёл за один вечер и потом долго сидел молча, обдумывая финал."
        ],
        "mid": [
          "Красивая, но очень короткая история для полной цены.",
          "Трогательно, хотя геймплей минималистичен почти до предела."
        ],
        "neg": [
          "Слишком короткая игра, закончилась буквально через час.",
          "Ожидал больше головоломок, а не только перетаскивание рельефа."
        ]
      },
      "en": {
        "pos": [
          "The simple terrain-shifting mechanic tells a story stronger than words could.",
          "The watercolor art style is incredibly warm and touching.",
          "Finished it in one evening and sat quietly thinking about the ending after."
        ],
        "mid": [
          "Beautiful but a very short story for the full price.",
          "Touching, though the gameplay is minimal almost to a fault."
        ],
        "neg": [
          "Way too short, finished it in about an hour.",
          "Expected more puzzles, not just terrain dragging."
        ]
      }
    },
    "gorogoa": {
      "ru": {
        "pos": [
          "Четыре панели складываются в историю настолько изящно, что не верится.",
          "Никогда не видел головоломку с таким уникальным визуальным языком.",
          "Каждая находка ощущается как маленькое откровение."
        ],
        "mid": [
          "Гениальная идея, но игра довольно короткая для своей глубины.",
          "Красиво и умно, хотя некоторые связи между панелями неочевидны."
        ],
        "neg": [
          "Застрял на одной комбинации панелей надолго без всякой подсказки.",
          "Хотелось бы больше глав, история заканчивается слишком быстро."
        ]
      },
      "en": {
        "pos": [
          "Four panels come together into a story so elegantly its hard to believe.",
          "Never seen a puzzle game with such a unique visual language.",
          "Every discovery feels like a tiny revelation."
        ],
        "mid": [
          "Brilliant idea but quite short for its depth.",
          "Beautiful and clever, though some panel connections are unclear."
        ],
        "neg": [
          "Got stuck on one panel combination for a long time with no hints.",
          "Wish there were more chapters, the story ends too soon."
        ]
      }
    },
    "framed": {
      "ru": {
        "pos": [
          "Идея с перестановкой кадров комикса абсолютно свежая и умная.",
          "Нуарная эстетика и джазовый саундтрек создают потрясающее настроение.",
          "Каждая перестановка кадров меняет исход и это невероятно увлекательно."
        ],
        "mid": [
          "Оригинальная головоломка, но некоторые уровни решаются методом перебора.",
          "Красивый стиль, хотя сюжет довольно простой."
        ],
        "neg": [
          "Пара головоломок поддалась чисто случайно, без понимания логики.",
          "Игра коротковата, прошёл быстрее, чем ожидал."
        ]
      },
      "en": {
        "pos": [
          "The comic-panel rearranging idea is genuinely fresh and clever.",
          "The noir aesthetic and jazz score create an amazing mood.",
          "Every panel swap changes the outcome and its incredibly engaging."
        ],
        "mid": [
          "Original puzzler but a few levels get solved through trial and error.",
          "Beautiful style, though the story is pretty simple."
        ],
        "neg": [
          "A couple of puzzles solved themselves by pure luck, not real understanding.",
          "Runs a bit short, finished faster than expected."
        ]
      }
    },
    "hyperlightdrifter": {
      "ru": {
        "pos": [
          "Пиксель-арт настолько детализированный, что каждый кадр хочется рассматривать.",
          "Боёвка быстрая и стильная, идеально ощущается на сенсорном экране.",
          "Саундтрек создаёт невероятную атмосферу забытого мира."
        ],
        "mid": [
          "Отличный экшен, но управление на телефоне требует времени на привыкание.",
          "Красиво и атмосферно, хотя история подаётся очень туманно."
        ],
        "neg": [
          "Боссы требуют пиксельной точности, на сенсорном экране это тяжело.",
          "Камера иногда мешает видеть опасность до самого последнего момента."
        ]
      },
      "en": {
        "pos": [
          "The pixel art is so detailed you want to study every frame.",
          "Combat is fast and stylish, feels great on a touchscreen.",
          "The soundtrack builds an incredible atmosphere for this forgotten world."
        ],
        "mid": [
          "Great action game but touch controls take real time to get used to.",
          "Beautiful and atmospheric, though the story is told very cryptically."
        ],
        "neg": [
          "Bosses demand pixel-perfect precision, tough on a touchscreen.",
          "The camera sometimes hides danger until the very last second."
        ]
      }
    },
    "kingdomtwocrowns": {
      "ru": {
        "pos": [
          "Верхом на коне защищать королевство ощущается совершенно по-новому для жанра.",
          "Ночные набеги держат в напряжении каждую партию без исключения.",
          "Визуальный стиль пиксель-арта невероятно атмосферный."
        ],
        "mid": [
          "Отличная стратегия, но темп партии поначалу кажется медленным.",
          "Атмосферно, хотя механики объясняются игрой не очень понятно."
        ],
        "neg": [
          "Потерял всё королевство за одну ночь из-за непонятной механики найма.",
          "Хотелось бы больше подсказок в начале, разобраться самому непросто."
        ]
      },
      "en": {
        "pos": [
          "Defending your kingdom on horseback feels genuinely fresh for the genre.",
          "Night raids keep every single run tense.",
          "The pixel-art visual style is incredibly atmospheric."
        ],
        "mid": [
          "Great strategy game but the pace feels slow at first.",
          "Atmospheric, though the mechanics arent explained very clearly."
        ],
        "neg": [
          "Lost my whole kingdom in one night because of a hiring mechanic I didnt get.",
          "Wish there were more early hints, hard to figure out on your own."
        ]
      }
    },
    "downwell": {
      "ru": {
        "pos": [
          "Простая идея с пистолетами-сапогами превратилась в невероятно глубокую игру.",
          "Ритм спуска затягивает так, что не замечаешь, как проходит час.",
          "Минималистичная графика выглядит стильно даже спустя годы."
        ],
        "mid": [
          "Отличный рогалик, но забеги иногда обрываются слишком внезапно.",
          "Затягивает, хотя однообразно на длинной дистанции."
        ],
        "neg": [
          "Один неудачный прыжок и весь забег насмарку, обидно до злости.",
          "Хотелось бы больше типов оружия для разнообразия забегов."
        ]
      },
      "en": {
        "pos": [
          "The simple Gunboots idea turned into an incredibly deep game.",
          "The descent rhythm is so addictive an hour disappears without noticing.",
          "The minimalist visuals still look stylish years later."
        ],
        "mid": [
          "Great roguelike but runs sometimes end abruptly.",
          "Addictive though repetitive over a long session."
        ],
        "neg": [
          "One bad jump and the whole run is wasted, genuinely frustrating.",
          "Wish there were more weapon types for variety between runs."
        ]
      }
    },
    "procreatepocket": {
      "ru": {
        "pos": [
          "Рисую комиксы прямо на переменах, качество кистей поражает для телефона.",
          "Слои и режимы наложения на уровне десктопных программ, невероятно.",
          "Купил один раз и пользуюсь уже два года без единой подписки."
        ],
        "mid": [
          "Отличное приложение, но на маленьком экране iPhone тесновато рисовать.",
          "Мощный редактор, хотя разобраться со всеми функциями сразу сложно."
        ],
        "neg": [
          "Экспорт больших файлов иногда подвисает на пару минут.",
          "Хотелось бы синхронизацию с версией для iPad, приходится переносить вручную."
        ]
      },
      "en": {
        "pos": [
          "I draw comics between classes, the brush quality is amazing for a phone app.",
          "Layers and blend modes are desktop-grade, genuinely impressive.",
          "Bought it once and have used it for two years with zero subscription."
        ],
        "mid": [
          "Great app but drawing feels cramped on a small iPhone screen.",
          "Powerful editor but theres a learning curve to all the features."
        ],
        "neg": [
          "Exporting large files sometimes freezes for a minute or two.",
          "Wish it synced with the iPad version, have to transfer files manually."
        ]
      }
    },
    "lumafusion": {
      "ru": {
        "pos": [
          "Монтирую видео для учёбы прямо в метро, многодорожечный таймлайн работает как надо.",
          "Цветокоррекция и звук на уровне десктопных программ, серьёзно впечатляет.",
          "Заменил ноутбук для монтажа полностью, теперь всё делаю с телефона."
        ],
        "mid": [
          "Мощный инструмент, но кривая обучения довольно крутая для новичка.",
          "Отличные возможности, хотя интерфейс перегружен на маленьком экране."
        ],
        "neg": [
          "Экспорт длинных проектов в высоком разрешении занимает очень много времени.",
          "Цена высоковата, хотя функциональность оправдывает при частом использовании."
        ]
      },
      "en": {
        "pos": [
          "I edit video for class right on the subway, the multi-track timeline just works.",
          "Color grading and audio tools are desktop-grade, genuinely impressive.",
          "Completely replaced my laptop for editing, do everything from my phone now."
        ],
        "mid": [
          "Powerful tool but theres a steep learning curve for beginners.",
          "Great feature set though the UI feels crowded on a small screen."
        ],
        "neg": [
          "Exporting long projects in high resolution takes a very long time.",
          "Pricey, though the functionality justifies it with frequent use."
        ]
      }
    },
    "pixelmatorclassic": {
      "ru": {
        "pos": [
          "Ретушь фото на уровне профессиональных программ прямо с телефона.",
          "Слои работают быстро даже с большими файлами, приятно удивлён.",
          "Купил один раз и пользуюсь без всякой подписки уже давно."
        ],
        "mid": [
          "Хороший редактор, но часть инструментов спрятана глубоко в меню.",
          "Мощное приложение, хотя интерфейс не самый интуитивный поначалу."
        ],
        "neg": [
          "После обновления системы пара фильтров стала работать нестабильно.",
          "Экспорт в некоторые форматы неожиданно долгий процесс."
        ]
      },
      "en": {
        "pos": [
          "Photo retouching at a professional level, right from my phone.",
          "Layers stay fast even with big files, pleasantly surprised.",
          "Bought it once and never needed a subscription since."
        ],
        "mid": [
          "Good editor but some tools are buried deep in the menus.",
          "Powerful app though the interface isnt the most intuitive at first."
        ],
        "neg": [
          "A couple of filters got unstable after a system update.",
          "Exporting to some formats takes surprisingly long."
        ]
      }
    },
    "goodnotes": {
      "ru": {
        "pos": [
          "Веду все лекции в этом приложении уже второй год, рукописный ввод очень плавный.",
          "ИИ-поиск по конспектам реально экономит время перед экзаменами.",
          "Синхронизация между телефоном и планшетом работает без единого сбоя."
        ],
        "mid": [
          "Отличное приложение для заметок, но часть новых функций теперь по подписке.",
          "Хорошо работает, хотя PDF с большим числом страниц иногда тормозит."
        ],
        "neg": [
          "После обновления подписка стала заметно дороже, неприятно.",
          "Импорт старых заметок из другого приложения прошёл не полностью."
        ]
      },
      "en": {
        "pos": [
          "Ive taken all my lecture notes in this app for two years, handwriting feels smooth.",
          "AI search through my notes genuinely saves time before exams.",
          "Sync between my phone and tablet has never once failed."
        ],
        "mid": [
          "Great note-taking app but some new features are subscription-only now.",
          "Works well though large PDFs sometimes lag."
        ],
        "neg": [
          "Subscription got noticeably pricier after the update, not great.",
          "Importing old notes from another app didnt fully work."
        ]
      }
    },
    "notability": {
      "ru": {
        "pos": [
          "Запись аудио вместе с заметками спасала меня на каждой лекции в этом семестре.",
          "Аннотировать PDF прямо поверх текста очень удобно и быстро.",
          "Интерфейс простой и понятный, разобрался за пять минут без гайдов."
        ],
        "mid": [
          "Хорошее приложение, но переход на подписку многих старых пользователей расстроил.",
          "Удобно для заметок, хотя синхронизация иногда занимает больше времени, чем хотелось бы."
        ],
        "neg": [
          "После перехода на новую модель часть моих старых заметок отображается с ошибками.",
          "Хотелось бы больше настроек экспорта в другие форматы."
        ]
      },
      "en": {
        "pos": [
          "Recording audio alongside notes saved me in every lecture this semester.",
          "Annotating PDFs directly over the text is fast and convenient.",
          "Simple, intuitive interface, figured it out in five minutes with no guide."
        ],
        "mid": [
          "Good app but the switch to subscription upset a lot of longtime users.",
          "Convenient for notes though sync sometimes takes longer than Id like."
        ],
        "neg": [
          "Some of my old notes display with errors after the new update.",
          "Wish there were more export format options."
        ]
      }
    },
    "figma": {
      "ru": {
        "pos": [
          "Проверяю макеты прямо с телефона в перерывах, очень удобно для командной работы.",
          "Комментарии синхронизируются мгновенно с десктопной версией.",
          "Мобильное приложение неожиданно функциональное для такой сложной программы."
        ],
        "mid": [
          "Хорошее приложение, но редактировать сложные макеты на телефоне неудобно.",
          "Удобно для просмотра, хотя часть функций доступна только на компьютере."
        ],
        "neg": [
          "Приложение иногда долго загружает большие файлы с множеством слоёв.",
          "Хотелось бы офлайн-режим, без интернета почти бесполезно."
        ]
      },
      "en": {
        "pos": [
          "I review mockups right from my phone between classes, great for teamwork.",
          "Surprisingly functional mobile app for such a complex tool."
        ],
        "mid": [
          "Good app but editing complex files on a phone is awkward.",
          "Convenient for viewing, though a lot of features are desktop-only."
        ],
        "neg": [
          "Sometimes takes a while to load big files with lots of layers.",
          "Wish there was an offline mode, almost useless without internet."
        ]
      }
    },
    "chatgpt": {
      "ru": {
        "pos": [
          "Помогает разобрать сложную тему по учёбе за пару минут, экономит часы.",
          "Генератор изображений неожиданно хорош для быстрых набросков идей.",
          "Пользуюсь каждый день для работы и учёбы, стало незаменимым инструментом."
        ],
        "mid": [
          "Очень полезное приложение, но иногда ответы требуют перепроверки фактов.",
          "Хорошо работает, хотя лимиты бесплатной версии ощущаются быстро."
        ],
        "neg": [
          "В час пик ответы стали заметно медленнее генерироваться.",
          "Голосовой режим иногда обрывается посреди разговора без причины."
        ]
      },
      "en": {
        "pos": [
          "Helps me untangle a hard topic for class in minutes, saves hours.",
          "The image generator is surprisingly good for quick idea sketches.",
          "I use it every day for work and school, its become indispensable."
        ],
        "mid": [
          "Really useful app but answers sometimes need fact-checking.",
          "Works well though the free tier limits kick in pretty fast."
        ],
        "neg": [
          "Responses got noticeably slower during peak hours.",
          "Voice mode sometimes cuts out mid-conversation for no reason."
        ]
      }
    },
    "deepseek": {
      "ru": {
        "pos": [
          "Отвечает быстро и по делу, стал использовать вместо поиска для многих вопросов.",
          "Помощь с кодом на учёбе сэкономила мне уйму времени перед сдачей.",
          "Бесплатный доступ без ограничений — большая редкость сейчас."
        ],
        "mid": [
          "Хороший ассистент, но иногда путается в более специфичных темах.",
          "Быстро отвечает, хотя объяснения местами суховатые."
        ],
        "neg": [
          "Приложение периодически зависает при длинных диалогах.",
          "В пиковые часы сервер иногда не отвечает по несколько минут."
        ]
      },
      "en": {
        "pos": [
          "Fast, to-the-point answers, started using it instead of search for a lot of questions.",
          "Helped with coding homework and saved me a ton of time before a deadline.",
          "Free access with no real limits is rare these days."
        ],
        "mid": [
          "Good assistant but it sometimes struggles with more niche topics.",
          "Answers quickly though explanations feel a bit dry at times."
        ],
        "neg": [
          "The app occasionally freezes during long conversations.",
          "Server sometimes doesnt respond for a few minutes during peak hours."
        ]
      }
    },
    "claudeai": {
      "ru": {
        "pos": [
          "Помогает структурировать сложные эссе лучше любого другого помощника.",
          "Объяснения глубокие и по делу, а не просто общие фразы.",
          "Использую для работы с кодом, ошибки объясняет очень понятно."
        ],
        "mid": [
          "Отличный ассистент, но бесплатных сообщений в день не так много.",
          "Хорошо думает над сложными задачами, хотя иногда отвечает долго."
        ],
        "neg": [
          "Лимит сообщений в бесплатной версии заканчивается слишком быстро.",
          "Приложение один раз не сохранило длинный диалог после перезапуска."
        ]
      },
      "en": {
        "pos": [
          "Helps structure a complex essay better than any other assistant Ive tried.",
          "Explanations are deep and specific, not just generic phrases.",
          "I use it for coding, it explains errors really clearly."
        ],
        "mid": [
          "Great assistant but the free daily message limit is pretty low.",
          "Thinks carefully through hard problems, though responses take a while sometimes."
        ],
        "neg": [
          "The free tier message limit runs out too fast.",
          "Lost a long conversation once after the app restarted."
        ]
      }
    },
    "mscopilot": {
      "ru": {
        "pos": [
          "Помогает с презентациями для учёбы буквально за пару минут.",
          "Интеграция с офисными документами реально ускоряет работу.",
          "Удобно, что можно продолжить с компьютера то, что начал на телефоне."
        ],
        "mid": [
          "Полезный инструмент, но иногда путает контекст между документами.",
          "Хорошо помогает с текстом, хотя интерфейс немного перегружен."
        ],
        "neg": [
          "Приложение иногда просит повторный вход без видимой причины.",
          "Ответы на русском языке местами звучат неестественно."
        ]
      },
      "en": {
        "pos": [
          "Helps put together a class presentation in just a couple of minutes.",
          "Integration with office documents genuinely speeds up my work.",
          "Nice that I can continue on my computer what I started on my phone."
        ],
        "mid": [
          "Useful tool but sometimes mixes up context between documents.",
          "Helps a lot with writing though the interface feels a bit busy."
        ],
        "neg": [
          "App sometimes asks me to sign in again for no clear reason.",
          "Responses in my language sometimes sound a bit unnatural."
        ]
      }
    },
    "gemini": {
      "ru": {
        "pos": [
          "Интеграция с гугл-сервисами делает планирование дня намного проще.",
          "Отвечает быстро и по делу даже на довольно сложные вопросы.",
          "Помогает с домашкой по математике, объясняя каждый шаг решения."
        ],
        "mid": [
          "Хороший помощник, но иногда слишком осторожничает с ответами.",
          "Удобное приложение, хотя голосовой ввод не всегда распознаёт правильно."
        ],
        "neg": [
          "После обновления стало чаще путать контекст предыдущих сообщений.",
          "Иногда отвечает с заметной задержкой в вечерние часы."
        ]
      },
      "en": {
        "pos": [
          "Integration with Google services makes planning my day so much easier.",
          "Answers quickly and clearly even on fairly complex questions.",
          "Helps with my math homework by explaining every step of the solution."
        ],
        "mid": [
          "Good assistant but sometimes overly cautious with its answers.",
          "Convenient app though voice input doesnt always recognize correctly."
        ],
        "neg": [
          "Started mixing up context from earlier messages more often since the update.",
          "Sometimes responds with a noticeable delay in the evenings."
        ]
      }
    },
    "perplexity": {
      "ru": {
        "pos": [
          "Наконец поисковик, который даёт прямой ответ вместо десяти вкладок.",
          "Ссылки на источники реально помогают проверить факты для реферата.",
          "Использую вместо обычного поиска уже несколько месяцев подряд."
        ],
        "mid": [
          "Отличная идея, но иногда источники не самые авторитетные.",
          "Быстро отвечает, хотя по узким темам ответы бывают поверхностными."
        ],
        "neg": [
          "В бесплатной версии довольно быстро упираешься в дневной лимит.",
          "Иногда путает свежие новости с устаревшей информацией."
        ]
      },
      "en": {
        "pos": [
          "Finally a search engine that gives a direct answer instead of ten open tabs.",
          "Source citations genuinely help fact-check for a paper.",
          "Ive been using it instead of regular search for months now."
        ],
        "mid": [
          "Great idea but sources arent always the most authoritative.",
          "Answers fast though niche topics sometimes get shallow answers."
        ],
        "neg": [
          "Free tier daily limit runs out pretty quickly.",
          "Sometimes mixes up recent news with outdated information."
        ]
      }
    },
    "vkmusic": {
      "ru": {
        "pos": [
          "Офлайн-режим спасает в метро, где интернет ловит через раз.",
          "Подборки под настроение реально попадают в точку почти всегда.",
          "Аудиокниги в том же приложении — очень удобное дополнение к музыке."
        ],
        "mid": [
          "Хорошее приложение, но часть функций доступна только по подписке.",
          "Удобно слушать музыку, хотя каталог подкастов не самый большой."
        ],
        "neg": [
          "После обновления плеер стал чаще перезапускать трек с начала.",
          "Реклама между треками в бесплатной версии стала длиннее."
        ]
      },
      "en": {
        "pos": [
          "Offline mode is a lifesaver on the subway where signal is spotty.",
          "Mood playlists genuinely hit the mark almost every time.",
          "Audiobooks in the same app is a really convenient addition to music."
        ],
        "mid": [
          "Good app but some features are subscription-only.",
          "Convenient for music though the podcast catalog isnt huge."
        ],
        "neg": [
          "Player started restarting tracks from the beginning more often after the update.",
          "Ads between tracks got longer in the free version."
        ]
      }
    },
    "worldofgoo2": {
      "ru": {
        "pos": [
          "Физика жидкостей выглядит невероятно, залипла на час только разглядывая.",
          "Построила мост с первой попытки и почувствовала себя гением!",
          "Продолжение получилось даже изобретательнее оригинала."
        ],
        "mid": [
          "Отличная головоломка, но сложность растёт довольно резко.",
          "Красиво и умно, хотя пара уровней ощущаются затянутыми."
        ],
        "neg": [
          "Застряла на одном уровне на весь вечер, подсказки не помогли.",
          "Цена высоковата даже с учётом качества игры."
        ]
      },
      "en": {
        "pos": [
          "The liquid physics look incredible, got lost just watching it for an hour.",
          "Built a bridge on my first try and felt like a genius!",
          "The sequel turned out even more inventive than the original."
        ],
        "mid": [
          "Great puzzler but the difficulty ramps up pretty sharply.",
          "Beautiful and clever, though a couple of levels drag on."
        ],
        "neg": [
          "Stuck on one level all evening, the hints didnt help.",
          "A bit pricey even accounting for the quality."
        ]
      }
    },
    "machinarium": {
      "ru": {
        "pos": [
          "Рисованный мир такой тёплый и детальный, хочется разглядывать каждый кадр.",
          "Головоломки логичные и честные, ни одной нечестной загадки.",
          "Один из лучших квестов, что я проходил на телефоне."
        ],
        "mid": [
          "Атмосферно, но пара головоломок решается почти случайно.",
          "Красивая игра, хотя подсказки иногда слишком расплывчатые."
        ],
        "neg": [
          "Застрял на одной комнате надолго без всякой зацепки.",
          "Игра коротковата для полной цены."
        ]
      },
      "en": {
        "pos": [
          "The hand-drawn world is so warm and detailed, love studying every frame.",
          "The puzzles are logical and fair, never felt cheated.",
          "One of the best adventure games I have played on a phone."
        ],
        "mid": [
          "Atmospheric but a couple of puzzles get solved almost by accident.",
          "Beautiful game though the hints are sometimes too vague."
        ],
        "neg": [
          "Got stuck in one room for ages with no real clue.",
          "Runs a bit short for the full price."
        ]
      }
    },
    "limbo": {
      "ru": {
        "pos": [
          "Чёрно-белая графика создаёт атмосферу, которую не забыть.",
          "Каждая смерть неожиданная, но справедливая — сразу хочется попробовать снова.",
          "Финал заставил задуматься на весь вечер."
        ],
        "mid": [
          "Мрачно и красиво, но местами слишком жестоко для казуальной игры.",
          "Отличная головоломка, хотя прохождение короткое."
        ],
        "neg": [
          "Пара ловушек убивает без предупреждения, это раздражает.",
          "Хотелось бы больше контента за такую цену."
        ]
      },
      "en": {
        "pos": [
          "The black-and-white visuals create an atmosphere you dont forget.",
          "Every death feels sudden but fair, makes you want to try again immediately.",
          "The ending had me thinking about it all evening."
        ],
        "mid": [
          "Dark and beautiful, though a bit brutal for a casual game at times.",
          "Great puzzler but the playtime is short."
        ],
        "neg": [
          "A couple of traps kill you with zero warning, thats frustrating.",
          "Wish there was more content for the price."
        ]
      }
    },
    "threes": {
      "ru": {
        "pos": [
          "Обманчиво простая механика, а затягивает на часы.",
          "Каждая партия ощущается по-новому благодаря случайным карточкам.",
          "Дизайн и звук сделаны с невероятной любовью к деталям."
        ],
        "mid": [
          "Затягивает, но однообразно после нескольких часов подряд.",
          "Хорошая головоломка, хотя аналогов сейчас полно бесплатных."
        ],
        "neg": [
          "Проиграла из-за одного неудачного хода и было обидно до злости.",
          "За такую простую игру цена ощущается высоковатой."
        ]
      },
      "en": {
        "pos": [
          "Deceptively simple mechanic that hooks you for hours.",
          "Every run feels different thanks to the random card draws.",
          "The design and sound are crafted with incredible attention to detail."
        ],
        "mid": [
          "Addictive but repetitive after several hours in a row.",
          "Good puzzle game though there are plenty of free clones now."
        ],
        "neg": [
          "Lost because of one bad move and it stung.",
          "Feels pricey for such a simple game."
        ]
      }
    },
    "deadcells": {
      "ru": {
        "pos": [
          "Боевая система невероятно отзывчивая, каждый удар ощущается точным.",
          "Замок меняется каждый забег, скучно не бывает никогда.",
          "Одна из лучших метроидваний, что я проходил на телефоне."
        ],
        "mid": [
          "Отличный рогалик, но управление жестами требует привыкания.",
          "Затягивает, хотя сложность на поздних забегах реально высокая."
        ],
        "neg": [
          "Погиб от нечестного удара за секунду до сохранения прогресса.",
          "На среднем телефоне периодически проседает частота кадров."
        ]
      },
      "en": {
        "pos": [
          "Combat is incredibly responsive, every hit feels precise.",
          "The castle changes every run, never gets boring.",
          "One of the best metroidvanias I have played on mobile."
        ],
        "mid": [
          "Great roguelike but gesture controls take getting used to.",
          "Addictive though late-run difficulty is genuinely tough."
        ],
        "neg": [
          "Died to a cheap hit one second before a checkpoint.",
          "Frame rate dips occasionally on a mid-range phone."
        ]
      }
    },
    "slayspire": {
      "ru": {
        "pos": [
          "Каждая колода ощущается уникальной, стратегий бесконечно много.",
          "Реликвии дают такие безумные комбинации, что не могу оторваться.",
          "Лучший карточный рогалик, что я пробовал на телефоне."
        ],
        "mid": [
          "Гениальная механика, но кривая обучения довольно крутая для новичка.",
          "Затягивает, хотя интерфейс на маленьком экране немного тесноват."
        ],
        "neg": [
          "Проиграл боссу на финальном ходу из-за одной карты, было обидно.",
          "Забег оборвался из-за бага с зависанием, весь прогресс пропал."
        ]
      },
      "en": {
        "pos": [
          "Every deck feels unique, endless room for strategy.",
          "Relics create such insane combos, cant put it down.",
          "The best card roguelike I have tried on mobile."
        ],
        "mid": [
          "Genius mechanic but the learning curve is pretty steep for beginners.",
          "Addictive though the UI feels a bit cramped on a small screen."
        ],
        "neg": [
          "Lost to a boss on the final turn because of one card, that stung.",
          "A run got cut short by a freezing bug, lost all progress."
        ]
      }
    },
    "brokensword5": {
      "ru": {
        "pos": [
          "Джордж и Нико такие же обаятельные, как в оригинальной трилогии.",
          "Головоломки логичные, а сюжет держит в напряжении до самого конца.",
          "Озвучка и музыка на уровне лучших квестов девяностых."
        ],
        "mid": [
          "Классический квест, но управление на сенсорном экране непривычное поначалу.",
          "Хорошая история, хотя темп местами провисает."
        ],
        "neg": [
          "Застрял на одной головоломке надолго, подсказка почти не помогла.",
          "Хотелось бы больше эпизодов сразу, а не по частям."
        ]
      },
      "en": {
        "pos": [
          "George and Nico are just as charming as in the original trilogy.",
          "The puzzles are logical and the story keeps you hooked till the end.",
          "Voice acting and music are on par with the best 90s adventure games."
        ],
        "mid": [
          "A classic adventure but touch controls feel odd at first.",
          "Good story though the pacing sags in places."
        ],
        "neg": [
          "Got stuck on one puzzle for ages, the hint barely helped.",
          "Wish more episodes released at once instead of piecemeal."
        ]
      }
    },
    "yearwalk": {
      "ru": {
        "pos": [
          "Атмосфера шведского фольклора пробирает до мурашек.",
          "Головоломки завязаны на реальных поверьях, это очень необычно.",
          "Короткая, но невероятно запоминающаяся игра."
        ],
        "mid": [
          "Атмосферно и жутко, хотя объяснений механик маловато.",
          "Интересная концепция, но прохождение совсем короткое."
        ],
        "neg": [
          "Застряла на одной загадке и не поняла что от меня хотят.",
          "За такую короткую игру цена кажется завышенной."
        ]
      },
      "en": {
        "pos": [
          "The Swedish folklore atmosphere gives me chills.",
          "The puzzles are tied to real folk beliefs, really unusual.",
          "Short but incredibly memorable."
        ],
        "mid": [
          "Atmospheric and eerie though the mechanics arent explained much.",
          "Interesting concept but the playtime is very short."
        ],
        "neg": [
          "Got stuck on one puzzle and had no idea what it wanted from me.",
          "Feels overpriced for such a short game."
        ]
      }
    },
    "device6": {
      "ru": {
        "pos": [
          "Текст в роли карты — гениальная идея, такого больше нигде не видел.",
          "Крутить телефон, чтобы читать сюжет — это свежо и увлекательно.",
          "Атмосфера сюрреалистичного триллера держит в напряжении всю игру."
        ],
        "mid": [
          "Оригинальная механика, но иногда сложно понять, куда двигаться дальше.",
          "Красивая история, хотя головоломки местами слишком абстрактные."
        ],
        "neg": [
          "Застрял на одной загадке и прошёл её почти случайно.",
          "Игра коротковата для своей необычной концепции."
        ]
      },
      "en": {
        "pos": [
          "Text as a map is a genius idea, never seen anything like it.",
          "Rotating your phone to keep reading feels fresh and engaging.",
          "The surreal thriller atmosphere holds tension the whole way through."
        ],
        "mid": [
          "Original mechanic but sometimes unclear where to go next.",
          "Beautiful story though some puzzles feel too abstract."
        ],
        "neg": [
          "Got stuck on one puzzle and solved it almost by accident.",
          "Runs a bit short for such a unique concept."
        ]
      }
    },
    "bridgeconstructor": {
      "ru": {
        "pos": [
          "Смесь Portal и Bridge Constructor работает просто идеально.",
          "Чёрный юмор GLaDOS на месте, фанаты Portal оценят каждую деталь.",
          "Построить мост, который выдержит испытание — невероятно приятно."
        ],
        "mid": [
          "Отличная головоломка, но физика иногда ведёт себя непредсказуемо.",
          "Хорошая игра, хотя уровней могло быть и побольше."
        ],
        "neg": [
          "Мост рухнул из-за странного бага физики на финальном тесте.",
          "Некоторые уровни решаются только одним способом, это раздражает."
        ]
      },
      "en": {
        "pos": [
          "The Portal and Bridge Constructor mashup works perfectly.",
          "GLaDOS-style dark humor is all there, Portal fans will love every detail.",
          "Building a bridge that survives the test feels incredibly satisfying."
        ],
        "mid": [
          "Great puzzler but the physics behave unpredictably sometimes.",
          "Good game though it could use more levels."
        ],
        "neg": [
          "My bridge collapsed from a weird physics bug on the final test.",
          "Some levels only have one solution, which is annoying."
        ]
      }
    },
    "danganronpa": {
      "ru": {
        "pos": [
          "Сюжет держит в напряжении от первой до последней главы.",
          "Персонажи настолько яркие, что помнишь их спустя годы после прохождения.",
          "Судебные баттлы — гениальная механика, ничего похожего не видел."
        ],
        "mid": [
          "Отличная визуальная новелла, но текста очень много для мобильного экрана.",
          "Захватывающий сюжет, хотя местами слишком мрачный для казуальной игры."
        ],
        "neg": [
          "Цена высоковата даже с учётом объёма контента.",
          "Шрифт местами слишком мелкий, читать на телефоне неудобно."
        ]
      },
      "en": {
        "pos": [
          "The story keeps you hooked from the first chapter to the last.",
          "The characters are so vivid you remember them years later.",
          "The class trials are a genius mechanic, never seen anything like it."
        ],
        "mid": [
          "Great visual novel but theres a lot of text for a phone screen.",
          "Gripping story though it gets pretty dark for a casual game."
        ],
        "neg": [
          "A bit pricey even accounting for the amount of content.",
          "The font is too small in places, uncomfortable to read on a phone."
        ]
      }
    },
    "evoland": {
      "ru": {
        "pos": [
          "Наблюдать, как графика эволюционирует по ходу игры — гениальная идея.",
          "Столько отсылок к классике RPG, что не могу перестать улыбаться.",
          "Отличная ностальгическая поездка для тех, кто рос на олдскульных играх."
        ],
        "mid": [
          "Забавная концепция, но геймплей местами вторичен по отношению к пародии.",
          "Приятная игра, хотя сюжет довольно простой."
        ],
        "neg": [
          "Механики меняются так часто, что не успеваешь привыкнуть ни к одной.",
          "Игра коротковата для своей амбициозной идеи."
        ]
      },
      "en": {
        "pos": [
          "Watching the graphics evolve as you play is a genius idea.",
          "So many references to classic RPGs, cant stop smiling.",
          "A great nostalgic trip for anyone who grew up on old-school games."
        ],
        "mid": [
          "Fun concept but the gameplay sometimes takes a backseat to the parody.",
          "Enjoyable game though the story is pretty simple."
        ],
        "neg": [
          "Mechanics change so often you never get used to any of them.",
          "Runs a bit short for such an ambitious idea."
        ]
      }
    },
    "gris": {
      "ru": {
        "pos": [
          "Акварельная графика — одна из самых красивых вещей, что я видела в играх.",
          "История без единого слова трогает сильнее любого текста.",
          "Музыка и визуал работают вместе просто идеально."
        ],
        "mid": [
          "Невероятно красиво, но геймплей местами слишком простой.",
          "Трогательная история, хотя прохождение совсем короткое."
        ],
        "neg": [
          "Хотелось бы больше игровых механик, а не только атмосферу.",
          "Игра закончилась быстрее, чем я успела проникнуться историей."
        ]
      },
      "en": {
        "pos": [
          "The watercolor art is one of the most beautiful things I have seen in games.",
          "A story with zero words that hits harder than any text could.",
          "Music and visuals work together perfectly."
        ],
        "mid": [
          "Incredibly beautiful but the gameplay is a bit too simple at times.",
          "Touching story though the playtime is very short."
        ],
        "neg": [
          "Wish there were more gameplay mechanics, not just atmosphere.",
          "Ended faster than I could really connect with the story."
        ]
      }
    },
    "humanfallflat": {
      "ru": {
        "pos": [
          "Играю с друзьями по видеозвонку каждые выходные, всегда до слёз смешно.",
          "Физика настолько нелепая, что каждый уровень превращается в комедию.",
          "Новые уровни выходят регулярно и бесплатно, это очень щедро."
        ],
        "mid": [
          "Очень весело с друзьями, но в одиночку немного скучновато.",
          "Хорошая физика, хотя управление иногда специально неуклюжее."
        ],
        "neg": [
          "Друг не смог подключиться к моей игре из-за бага с сервером.",
          "Персонаж застрял в текстуре и пришлось перезапускать уровень."
        ]
      },
      "en": {
        "pos": [
          "I play with friends on a video call every weekend, always hilarious.",
          "The physics are so absurd every level turns into comedy.",
          "New levels come out regularly for free, incredibly generous."
        ],
        "mid": [
          "Tons of fun with friends but a bit boring solo.",
          "Good physics though the controls are intentionally clumsy sometimes."
        ],
        "neg": [
          "A friend couldnt join my game because of a server bug.",
          "My character got stuck in the scenery and I had to restart the level."
        ]
      }
    },
    "swordsworcery": {
      "ru": {
        "pos": [
          "Аудиовизуальный стиль просто гипнотизирует, ничего похожего не видел.",
          "Синхронизация с настоящей луной — гениальная деталь.",
          "Атмосфера мифического мира затягивает с первых минут."
        ],
        "mid": [
          "Необычная и красивая игра, но механики объясняются очень скупо.",
          "Атмосферно, хотя боевая система довольно простая."
        ],
        "neg": [
          "Не понял, что делать дальше, и пришлось искать прохождение.",
          "Игра коротковата для своей уникальной атмосферы."
        ]
      },
      "en": {
        "pos": [
          "The audiovisual style is mesmerizing, never seen anything like it.",
          "Syncing with the real moon is a genius touch.",
          "The mythic realm atmosphere pulls you in from the first minute."
        ],
        "mid": [
          "Unique and beautiful game but the mechanics are barely explained.",
          "Atmospheric though the combat is pretty simple."
        ],
        "neg": [
          "Had no idea what to do next and had to look up a guide.",
          "Runs a bit short for such a unique atmosphere."
        ]
      }
    },
    "botanicula": {
      "ru": {
        "pos": [
          "Пять маленьких существ такие милые, что не могу перестать улыбаться.",
          "Юмор в каждой детали, разглядывать мир одно удовольствие.",
          "Тёплая, добрая игра, которая поднимает настроение с первых минут."
        ],
        "mid": [
          "Мило и атмосферно, но головоломки местами слишком простые.",
          "Хорошая игра для отдыха, хотя сложность почти отсутствует."
        ],
        "neg": [
          "Хотелось бы больше вызова, прошла слишком легко.",
          "Игра коротковата для полной цены."
        ]
      },
      "en": {
        "pos": [
          "The five little creatures are so cute I cant stop smiling.",
          "Humor in every detail, love just exploring the world.",
          "A warm, kind game that lifts your mood from the first minute."
        ],
        "mid": [
          "Cute and atmospheric but the puzzles are a bit too easy in places.",
          "Good relaxing game though theres almost no challenge."
        ],
        "neg": [
          "Wish there was more challenge, finished it too easily.",
          "Runs a bit short for the full price."
        ]
      }
    },
    "samorost3": {
      "ru": {
        "pos": [
          "Детализация миров невероятная, разглядывать каждую планету одно удовольствие.",
          "Головоломки логичные и приятно щёлкают одна за другой.",
          "Самая амбициозная игра студии, и это заметно в каждой детали."
        ],
        "mid": [
          "Красиво и умно, но некоторые головоломки решаются почти случайно.",
          "Атмосферная игра, хотя подсказки иногда слишком расплывчатые."
        ],
        "neg": [
          "Застрял на одной планете надолго без всякой зацепки.",
          "Хотелось бы больше объяснений механик в начале игры."
        ]
      },
      "en": {
        "pos": [
          "World detail is incredible, love exploring every single planet.",
          "The puzzles are logical and click satisfyingly into place.",
          "The studios most ambitious game yet, and it shows in every detail."
        ],
        "mid": [
          "Beautiful and clever though some puzzles get solved almost by accident.",
          "Atmospheric game though the hints are sometimes too vague."
        ],
        "neg": [
          "Got stuck on one planet for ages with no real clue.",
          "Wish the mechanics were explained more at the start."
        ]
      }
    },
    "instagram": {
      "ru": {
        "pos": [
          "Нашёл несколько авторов по своим интересам и оставил только их в подписках. Лента стала полезнее.",
          "Сохраняю публикации, к которым хочу вернуться. Удобнее, чем делать десятки скриншотов.",
          "Опубликовал запись с фотографиями без долгой подготовки. Основные действия понятные.",
          "Комментарии к интересным публикациям иногда полезнее самой записи. Нравится следить за такими обсуждениями."
        ],
        "mid": [
          "Подписки читаю с удовольствием. Рекомендации пока часто уводят в темы, которые мне не нужны.",
          "Контента много, подходящее находится не сразу. Пришлось потратить время на настройку ленты."
        ],
        "neg": [
          "Лента постоянно возвращает одинаковые рекомендации, хотя я их пропускаю. Читать интересных мне авторов становится сложнее.",
          "Возвращаюсь в приложение и теряю публикацию, которую читал. Бесконечные обновления ленты раздражают."
        ]
      },
      "en": {
        "pos": [
          "I found creators who match my interests and kept those subscriptions. The feed became more useful.",
          "I save posts I want to revisit. Easier than taking dozens of screenshots.",
          "I published a post with photos without much preparation. The basic actions are clear.",
          "Comments on interesting posts can be more useful than the post itself. I like following those discussions."
        ],
        "mid": [
          "I enjoy reading accounts I follow. Recommendations often take me to topics I do not need.",
          "There is lots of content and useful material takes time to find. I spent a while adjusting my feed."
        ],
        "neg": [
          "My feed keeps returning the same recommendations despite my skipping them. Finding creators I care about is harder.",
          "Returning to the app loses the post I was reading. Constant feed refreshes are irritating."
        ]
      }
    },
    "facebook": {
      "ru": {
        "pos": [
          "Нашёл несколько авторов по своим интересам и оставил только их в подписках. Лента стала полезнее.",
          "Сохраняю публикации, к которым хочу вернуться. Удобнее, чем делать десятки скриншотов.",
          "Опубликовал запись с фотографиями без долгой подготовки. Основные действия понятные.",
          "Комментарии к интересным публикациям иногда полезнее самой записи. Нравится следить за такими обсуждениями."
        ],
        "mid": [
          "Подписки читаю с удовольствием. Рекомендации пока часто уводят в темы, которые мне не нужны.",
          "Контента много, подходящее находится не сразу. Пришлось потратить время на настройку ленты."
        ],
        "neg": [
          "Лента постоянно возвращает одинаковые рекомендации, хотя я их пропускаю. Читать интересных мне авторов становится сложнее.",
          "Возвращаюсь в приложение и теряю публикацию, которую читал. Бесконечные обновления ленты раздражают."
        ]
      },
      "en": {
        "pos": [
          "I found creators who match my interests and kept those subscriptions. The feed became more useful.",
          "I save posts I want to revisit. Easier than taking dozens of screenshots.",
          "I published a post with photos without much preparation. The basic actions are clear.",
          "Comments on interesting posts can be more useful than the post itself. I like following those discussions."
        ],
        "mid": [
          "I enjoy reading accounts I follow. Recommendations often take me to topics I do not need.",
          "There is lots of content and useful material takes time to find. I spent a while adjusting my feed."
        ],
        "neg": [
          "My feed keeps returning the same recommendations despite my skipping them. Finding creators I care about is harder.",
          "Returning to the app loses the post I was reading. Constant feed refreshes are irritating."
        ]
      }
    },
    "twitterx": {
      "ru": {
        "pos": [
          "Нашёл несколько авторов по своим интересам и оставил только их в подписках. Лента стала полезнее.",
          "Сохраняю публикации, к которым хочу вернуться. Удобнее, чем делать десятки скриншотов.",
          "Опубликовал запись с фотографиями без долгой подготовки. Основные действия понятные.",
          "Комментарии к интересным публикациям иногда полезнее самой записи. Нравится следить за такими обсуждениями."
        ],
        "mid": [
          "Подписки читаю с удовольствием. Рекомендации пока часто уводят в темы, которые мне не нужны.",
          "Контента много, подходящее находится не сразу. Пришлось потратить время на настройку ленты."
        ],
        "neg": [
          "Лента постоянно возвращает одинаковые рекомендации, хотя я их пропускаю. Читать интересных мне авторов становится сложнее.",
          "Возвращаюсь в приложение и теряю публикацию, которую читал. Бесконечные обновления ленты раздражают."
        ]
      },
      "en": {
        "pos": [
          "I found creators who match my interests and kept those subscriptions. The feed became more useful.",
          "I save posts I want to revisit. Easier than taking dozens of screenshots.",
          "I published a post with photos without much preparation. The basic actions are clear.",
          "Comments on interesting posts can be more useful than the post itself. I like following those discussions."
        ],
        "mid": [
          "I enjoy reading accounts I follow. Recommendations often take me to topics I do not need.",
          "There is lots of content and useful material takes time to find. I spent a while adjusting my feed."
        ],
        "neg": [
          "My feed keeps returning the same recommendations despite my skipping them. Finding creators I care about is harder.",
          "Returning to the app loses the post I was reading. Constant feed refreshes are irritating."
        ]
      }
    },
    "linkedin": {
      "ru": {
        "pos": [
          "Нашёл несколько авторов по своим интересам и оставил только их в подписках. Лента стала полезнее.",
          "Сохраняю публикации, к которым хочу вернуться. Удобнее, чем делать десятки скриншотов.",
          "Опубликовал запись с фотографиями без долгой подготовки. Основные действия понятные.",
          "Комментарии к интересным публикациям иногда полезнее самой записи. Нравится следить за такими обсуждениями."
        ],
        "mid": [
          "Подписки читаю с удовольствием. Рекомендации пока часто уводят в темы, которые мне не нужны.",
          "Контента много, подходящее находится не сразу. Пришлось потратить время на настройку ленты."
        ],
        "neg": [
          "Лента постоянно возвращает одинаковые рекомендации, хотя я их пропускаю. Читать интересных мне авторов становится сложнее.",
          "Возвращаюсь в приложение и теряю публикацию, которую читал. Бесконечные обновления ленты раздражают."
        ]
      },
      "en": {
        "pos": [
          "I found creators who match my interests and kept those subscriptions. The feed became more useful.",
          "I save posts I want to revisit. Easier than taking dozens of screenshots.",
          "I published a post with photos without much preparation. The basic actions are clear.",
          "Comments on interesting posts can be more useful than the post itself. I like following those discussions."
        ],
        "mid": [
          "I enjoy reading accounts I follow. Recommendations often take me to topics I do not need.",
          "There is lots of content and useful material takes time to find. I spent a while adjusting my feed."
        ],
        "neg": [
          "My feed keeps returning the same recommendations despite my skipping them. Finding creators I care about is harder.",
          "Returning to the app loses the post I was reading. Constant feed refreshes are irritating."
        ]
      }
    },
    "lastdayonearth": {
      "ru": {
        "pos": [
          "Построил укрытие с друзьями по клану, отбиваться от зомби вместе веселее!",
          "Нашёл редкое оружие после долгого рейда, это было эпично!",
          "Крафтинг затягивает так, что не замечаю, как проходит вечер."
        ],
        "mid": [
          "Затягивает, но без доната фарм ресурсов идёт довольно медленно.",
          "Хорошая графика, но телефон сильно греется во время рейдов."
        ],
        "neg": [
          "Потерял весь инвентарь после смерти в рейде, это было обидно!",
          "Игра вылетела прямо посреди сложного рейда на зомби."
        ]
      },
      "en": {
        "pos": [
          "Built a shelter with my clan friends, fighting zombies together is way more fun!",
          "Found a rare weapon after a long raid, that was epic!",
          "Crafting is so addictive I dont notice the evening passing."
        ],
        "mid": [
          "Addictive but resource farming is pretty slow without spending.",
          "Good graphics but my phone gets really hot during raids."
        ],
        "neg": [
          "Lost my whole inventory after dying on a raid, that was rough!",
          "The game crashed right in the middle of a tough raid."
        ]
      }
    },
    "grimsoul": {
      "ru": {
        "pos": [
          "Построила замок с башнями, выглядит просто потрясающе!",
          "Сразила босса-нежить с третьей попытки, было непросто но я справилась!",
          "Атмосфера тёмного фэнтези прямо мурашки по коже."
        ],
        "mid": [
          "Затягивает, но PvP-набеги других игроков бывают довольно агрессивными.",
          "Хорошая графика, но крафтинг брони требует много времени."
        ],
        "neg": [
          "Меня разграбили пока я спала, потеряла все ресурсы это обидно!",
          "Игра лагает на слабом интернете во время сражений."
        ]
      },
      "en": {
        "pos": [
          "Built a castle with towers, looks absolutely amazing!",
          "Beat an undead boss on my third try, tough but I did it!",
          "The dark fantasy atmosphere gives me actual chills."
        ],
        "mid": [
          "Addictive but PvP raids from other players can get pretty aggressive.",
          "Good graphics but crafting armor takes a lot of time."
        ],
        "neg": [
          "Got raided while I was asleep and lost all my resources, so annoying!",
          "The game lags on weak internet during fights."
        ]
      }
    },
    "whiteoutsurvival": {
      "ru": {
        "pos": [
          "Отстроила город до нового уровня, ледяные монстры теперь не страшны!",
          "Собрала отряд героев и разношу целые волны врагов!",
          "Графика для мобильной стратегии просто топ уровень."
        ],
        "mid": [
          "Затягивает, но без доната прокачка идёт довольно медленно.",
          "Интересная стратегия, но заданий на день слишком много."
        ],
        "neg": [
          "На город напали пока я спала, потеряла ресурсы это обидно!",
          "Игра вылетела прямо посреди сложного сражения с боссом."
        ]
      },
      "en": {
        "pos": [
          "Upgraded my city to a new level, ice monsters arent scary anymore!",
          "Built a hero squad and im wiping out whole enemy waves!",
          "The graphics are top-tier for a mobile strategy game."
        ],
        "mid": [
          "Addictive but progress is pretty slow without spending.",
          "Interesting strategy but there are way too many daily tasks."
        ],
        "neg": [
          "Got attacked while I was asleep and lost my resources, so annoying!",
          "The game crashed right in the middle of a boss fight."
        ]
      }
    },
    "lifeafter": {
      "ru": {
        "pos": [
          "Построила убежище с друзьями, выживать вместе намного веселее!",
          "Нашла редкие ресурсы в заражённой зоне, это было эпично!",
          "Графика и открытый мир для мобильной игры просто впечатляют."
        ],
        "mid": [
          "Затягивает, но заданий и систем очень много для новичка.",
          "Хорошая графика, но телефон сильно греется во время долгих сессий."
        ],
        "neg": [
          "Потеряла ресурсы при атаке заражённых, это было обидно!",
          "Игра лагает на слабом интернете в загруженных зонах."
        ]
      },
      "en": {
        "pos": [
          "Built a shelter with friends, surviving together is way more fun!",
          "Found rare resources in an infected zone, that was epic!",
          "The graphics and open world are impressive for a mobile game."
        ],
        "mid": [
          "Addictive but there are a lot of systems and tasks for a newcomer.",
          "Good graphics but my phone gets really hot during long sessions."
        ],
        "neg": [
          "Lost my resources during an infected attack, that was rough!",
          "The game lags on weak internet in crowded zones."
        ]
      }
    },
    "otpbank": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "bspb": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "avangard": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "expobank": {
      "ru": {
        "pos": [
          "Перевожу родителям по номеру телефона. Перед подтверждением хорошо видно, кому уйдут деньги.",
          "Наконец разобрался, куда уходят мелкие суммы: открыл историю и нашёл все покупки за неделю.",
          "Карту и остаток вижу сразу после входа. Мне от банковского приложения большего обычно и не надо.",
          "Платёж сохранился в истории, чек отправил прямо оттуда. Не пришлось искать его по всему меню.",
          "Проверять расходы с телефона гораздо удобнее, чем заходить на сайт. Суммы и даты читаются нормально.",
          "Нужный перевод нашёл по сумме за минуту. История операций здесь действительно выручает."
        ],
        "mid": [
          "С переводами разобрался быстро, а вот нужную справку искал долго. Меню местами перегружено.",
          "Для проверки баланса хватает. Остальными разделами почти не пользуюсь, их для меня слишком много."
        ],
        "neg": [
          "Открываю историю операций, а вместо списка крутится загрузка. Проверить последний платёж так и не смог.",
          "Во время перевода приложение закрылось. После повторного входа пришлось отдельно выяснять, прошёл платёж или нет. Очень неприятно.",
          "Важные для меня счета спрятаны среди предложений. Каждый раз ищу собственные деньги в рекламном меню."
        ]
      },
      "en": {
        "pos": [
          "I send money to my parents by phone number. The recipient is clearly shown before I confirm.",
          "The transaction history helped me track down all those small purchases from last week.",
          "My card and balance are right there when I sign in. That covers most of what I need.",
          "I found the payment receipt in my history and shared it from there. No digging through menus.",
          "Checking expenses on my phone is easier than using the website. Amounts and dates are easy to read.",
          "I located a transfer by its amount in about a minute. The transaction history is genuinely useful."
        ],
        "mid": [
          "Transfers were easy to figure out, but finding the document I needed took a while. Some menus are crowded.",
          "It does the job for checking my balance. There are more extra sections than I personally need."
        ],
        "neg": [
          "Transaction history gets stuck loading. I still could not check my most recent payment.",
          "The app closed during a transfer. After signing in again I had to work out whether the payment had gone through. Not acceptable.",
          "My accounts are buried among offers. I should not have to hunt through promotions to find my own money."
        ]
      }
    },
    "rustmobile": {
      "ru": {
        "pos": [
          "Прошёл во второй бета-тест, ощущения прямо как на ПК-версии!",
          "Построил базу с отрядом, обороняться вместе намного эпичнее!",
          "Графика на телефоне выглядит удивительно близко к оригиналу."
        ],
        "mid": [
          "Играется отлично, но иногда встречаются баги беты, это ожидаемо.",
          "Затягивает, но регистрация и загрузка APK поначалу немного пугают."
        ],
        "neg": [
          "Рейд разнёс мою базу пока я был офлайн, это было обидно!",
          "Сервер лагнул прямо в разгар перестрелки с другим отрядом."
        ]
      },
      "en": {
        "pos": [
          "Got into the second beta test, feels just like the PC version!",
          "Built a base with my squad, defending together is way more epic!",
          "The graphics on mobile look surprisingly close to the original."
        ],
        "mid": [
          "Plays great but there are some beta bugs here and there, expected.",
          "Addictive but the registration and APK download felt intimidating at first."
        ],
        "neg": [
          "A raid wrecked my base while I was offline, that was rough!",
          "The server lagged right in the middle of a firefight with another squad."
        ]
      }
    },
    "arizonamobile": {
      "ru": {
        "pos": [
          "На сервере вечером всегда движ — то ограбление, то свадьба у мэрии, скучать некогда!",
          "Прошёл 3 месяц в игре, купил свою первую тачку, эмоции ааа!",
          "С друзьями на сервере интереснее: постоянно придумываем, чем заняться вместе.",
          "Работаю дальнобойщиком, езжу по трассе и слушаю музыку в приложении, кайф",
          "У нас клан большой, играем каждый день после школы, много движа",
          "Наконец накопил на квартиру в игре. Теперь обустраиваю её и выбираю следующую цель.",
          "Ролеплеить в такси кайфово, разные истории от пассажиров каждый раз))",
          "Делаем с пацанами свою банду, будем гонять полицию по всему городу!",
          "Прикольно что можно устроить свадьбу и потом медовый месяц, все реалистично",
          "Долго собирал на BMW, теперь катаюсь по центру и все смотрят! чётко",
          "Играю с братом на одном сервере, он полицай а я преступник, вечером стреляемся"
        ],
        "mid": [
          "Играть можно, но новичкам сложно въехать без гайдов на ютубе.",
          "Норм игра, только на слабых телефонах немного лагает в центре города",
          "Серверов много, но не всегда легко найти где играют твои друзья",
          "Мод контроль иногда банит зря, приходится писать в суппорт",
          "Работы разные, но платят мало пока не прокачаешь персонажа"
        ],
        "neg": [
          "Донатеры бегают с крутыми тачками, а без вложений играть тяжело(",
          "Иногда серверы падают в самый интересный момент, обидно!",
          "Новый лаунчер иногда не запускается, приходится переустанавливать",
          "Адмны иногда не отвечают, а игроки нарушают правила и им ничего",
          "Рекламу конкурентов постоянно кидают в лс, бесит"
        ]
      },
      "en": {
        "pos": [
          "Server is always active in the evening — heists, weddings at city hall, never a boring night!",
          "3 months in the game, finally bought my first car, feels amazing!",
          "Playing with friends makes the server more interesting. We keep finding things to do together.",
          "I work as a trucker, drive across the map and listen to music in the app, so relaxing.",
          "Our clan is huge, we play every day after school, tons of action.",
          "I finally saved enough for an apartment in the game. Now I am setting it up and choosing my next goal.",
          "Roleplaying as a cab driver is the best, every passenger has a wild story))",
          "Me and the boys started our own gang, we're gonna run from cops all night!",
          "You can even do weddings and honeymoons in game, so realistic.",
          "Grinded forever for a BMW, now everyone stares when I cruise downtown, so cool.",
          "Play with my brother on the same server, he's a cop and I'm a criminal — fun shootouts."
        ],
        "mid": [
          "Playable but newcomers really need YouTube guides to get started.",
          "It's fine, just a bit laggy in downtown on older phones.",
          "So many servers, hard to find the one your friends actually play on.",
          "Mods sometimes ban for no reason, have to write to support.",
          "Jobs are varied but they don't pay much until you level up."
        ],
        "neg": [
          "Whales with fancy cars rule the servers, tough without spending money(",
          "Servers crash at the worst possible moments, super annoying!",
          "New launcher sometimes won't start, have to reinstall it.",
          "Admins are slow to respond and rule-breakers get away with stuff.",
          "Constant ads for competing servers in DMs, gets old fast."
        ]
      }
    },
    "wibes": {
      "ru": {
        "pos": [
          "В коротком видео проще понять, как вещь выглядит в жизни, чем по одному фото.",
          "Нашёл несколько авторов с похожим вкусом. Их подборки смотреть интереснее общей ленты.",
          "Нравится переходить от ролика к товару без поиска названия вручную."
        ],
        "mid": [
          "Идеи для покупок находятся, но рекламных роликов для меня многовато.",
          "Формат коротких обзоров удобный. Подробные характеристики всё равно смотрю в карточке товара."
        ],
        "neg": [
          "Лента показывает почти одинаковые товары подряд. Искать что-то интересное среди повторов надоело.",
          "Видео несколько раз остановилось на загрузке. До самого обзора так и не добрался."
        ]
      },
      "en": {
        "pos": [
          "A short video gives me a better sense of an item than a single photo.",
          "I found creators with similar taste. Their picks are more interesting than the general feed.",
          "I like moving from a video to its product without searching the name manually."
        ],
        "mid": [
          "I find shopping ideas, but there are more promotional videos than I want.",
          "Short reviews are a useful format. I still check detailed specifications in the product listing."
        ],
        "neg": [
          "The feed shows nearly identical products back to back. I am tired of sorting through repetitions.",
          "Videos repeatedly got stuck loading. I never reached the actual review."
        ]
      }
    },
    "balatro": {
      "ru": {
        "pos": [
          "Собрал связку джокеров, которую сначала считал бесполезной, и дошёл дальше обычного. За такие открытия и нравится.",
          "Правила покера знал примерно, но втянулся быстро. Здесь интереснее продумывать колоду, чем просто ждать хорошую руку.",
          "Каждый забег получается другим. Даже знакомая колода заставляет пересматривать план по ходу игры."
        ],
        "mid": [
          "Карточные сочетания увлекают. Но после нескольких неудачных забегов подряд мне нужен перерыв.",
          "На планшете читать свойства карт удобнее. На телефоне к мелкому тексту ещё привыкаю."
        ],
        "neg": [
          "На моём телефоне слишком мелкие подписи у джокеров. Постоянно напрягаю глаза вместо того, чтобы спокойно играть.",
          "За длинный забег телефон заметно нагрелся и сел. Для игры в дороге такой расход батареи мне не подходит."
        ]
      },
      "en": {
        "pos": [
          "A joker combination I thought was useless carried me further than usual. Those discoveries are why I like it.",
          "I only vaguely knew poker rules, but got into it quickly. Planning the deck is more interesting than waiting for a good hand.",
          "Every run feels different. Even a familiar deck makes me rethink my plan along the way."
        ],
        "mid": [
          "The card interactions are engaging. After several failed runs in a row, though, I need a break.",
          "Card descriptions are easier to read on a tablet. I am still getting used to the small text on my phone."
        ],
        "neg": [
          "Joker descriptions are too small on my phone. I keep straining my eyes instead of enjoying the game.",
          "One long run made my phone hot and drained the battery. That is not workable for me while travelling."
        ]
      }
    },
    "wreckfest": {
      "ru": {
        "pos": [
          "Доехал до финиша на совершенно помятой машине и радовался больше, чем чистой победе в других гонках.",
          "Столкновения здесь ощущаются частью гонки. Перед поворотом думаешь не только о скорости, но и о соседях.",
          "Пробую менять защиту машины под разные заезды. Забавно, насколько иначе она ведёт себя после настройки."
        ],
        "mid": [
          "Дерби понравились, но сенсорное управление потребовало нескольких тренировочных заездов.",
          "Хорошо играть подольше дома. Для пяти минут в очереди заезды мне не очень подходят."
        ],
        "neg": [
          "В плотной толпе машин начинаются рывки. Именно в столкновениях плавности и не хватает.",
          "При сенсорном управлении часто ошибаюсь на поворотах. Удовольствия от гонки на моём экране не получил."
        ]
      },
      "en": {
        "pos": [
          "Finishing in a completely battered car felt better than a clean win in other racers.",
          "Collisions feel like part of racing here. Approaching a corner means thinking about nearby cars as well as speed.",
          "I try different protection setups for each event. It is interesting how much they change the car."
        ],
        "mid": [
          "I enjoyed the derbies, but touch controls took a few practice races.",
          "It suits longer sessions at home. It is less useful for five minutes in a queue."
        ],
        "neg": [
          "Racing in a dense pack gets choppy. Collisions are exactly where I need smoother performance.",
          "I keep misjudging corners with touch controls. Racing on my screen has not been enjoyable."
        ]
      }
    },
    "nomadsculpt": {
      "ru": {
        "pos": [
          "Слепил первого персонажа прямо на планшете. Очень приятно работать с объёмом, а не тянуть точки мышью.",
          "Кисти понятные, форму можно быстро набросать и потом уточнять. Для моих небольших моделей отлично.",
          "Покраска и материалы рядом со скульптингом. Не приходится перескакивать между несколькими программами ради эскиза."
        ],
        "mid": [
          "Лепить удобно, но с настройками сетки пришлось разбираться по урокам. Для совсем первого знакомства интерфейс непростой.",
          "Небольшие сцены редактируются хорошо. На детальных моделях уже приходится следить за нагрузкой."
        ],
        "neg": [
          "Тяжёлая модель начала тормозить так, что аккуратно пройти кистью невозможно. Пришлось сильно упростить проект.",
          "Часть элементов слишком мелкая для пальцев. Постоянно задеваю соседний инструмент."
        ]
      },
      "en": {
        "pos": [
          "I sculpted my first character directly on a tablet. Working with volume feels much more natural than dragging points with a mouse.",
          "The brushes make sense. I can block out a shape quickly and refine it later. Great for my small models.",
          "Painting and materials sit alongside sculpting. I do not need several programs just to finish a sketch."
        ],
        "mid": [
          "Sculpting is comfortable, but I needed tutorials for mesh settings. The interface is not simple for an absolute beginner.",
          "Small scenes edit well. Detailed models require more attention to performance."
        ],
        "neg": [
          "A detailed model slowed down so much that accurate brush strokes became impossible. I had to simplify the project heavily.",
          "Some controls are too small for my fingers. I keep selecting the neighbouring tool."
        ]
      }
    },
    "flstudiomobile": {
      "ru": {
        "pos": [
          "Набросал ударные в дороге, дома дописал бас и мелодию. Удобно ловить идею, пока не забыл.",
          "Редактировать ноты на планшете оказалось удобнее, чем ожидал. Для коротких партий мне хватает.",
          "Собрал небольшой трек из нескольких дорожек и вывел в аудиофайл. Нравится проходить весь путь в одном приложении."
        ],
        "mid": [
          "Для набросков подходит. После настольной FL пришлось привыкать к другому расположению инструментов.",
          "Основные партии сделать можно, но точный монтаж на маленьком экране требует терпения."
        ],
        "neg": [
          "В проекте с несколькими эффектами звук начал прерываться. Нормально дослушать свой микс не получилось.",
          "На телефоне постоянно промахиваюсь мимо нужной ноты. Для серьёзной работы этот размер интерфейса мне не подходит."
        ]
      },
      "en": {
        "pos": [
          "I sketched drums while travelling and added bass and melody at home. Handy for catching an idea before it disappears.",
          "Editing notes on a tablet worked better than I expected. It covers my short musical parts.",
          "I built a short multitrack piece and exported it to audio. I like finishing the whole process in one app."
        ],
        "mid": [
          "It works for sketches. Coming from desktop FL, I had to adjust to a different tool layout.",
          "Creating the main parts is possible, but precise editing on a small screen takes patience."
        ],
        "neg": [
          "Audio started breaking up in a project with several effects. I could not listen through my own mix properly.",
          "I keep missing the note I want on my phone. The interface size does not suit serious work for me."
        ]
      }
    },
    "goatsimulator3": {
      "ru": {
        "pos": [
          "Зашёл просто побегать козой, а через полчаса уже устраивал совершенно нелепые цепочки столкновений.",
          "Нравится исследовать остров без спешки. За очередным углом почти всегда находится какая-нибудь глупость.",
          "С другом получается ещё смешнее: один придумывает эксперимент, второй случайно всё ломает."
        ],
        "mid": [
          "Песочница забавная, но иногда хочется более понятной цели. Зависит от настроения.",
          "Физика смешит, пока не пытаешься сделать что-то точно. С аккуратными действиями у меня хуже."
        ],
        "neg": [
          "При большом количестве объектов всё начинает дёргаться. Главная забава игры превращается в тормоза.",
          "Сенсорные кнопки мешают видеть, куда бежишь. На небольшом телефоне играть мне неудобно."
        ]
      },
      "en": {
        "pos": [
          "I went in just to run around as a goat and half an hour later was creating absurd chains of collisions.",
          "I like exploring the island without rushing. There is usually some silliness around the next corner.",
          "It is even funnier with a friend: one invents an experiment and the other accidentally wrecks it."
        ],
        "mid": [
          "The sandbox is entertaining, though I sometimes want a clearer objective. It depends on my mood.",
          "The physics are funny until I try to do something precise. Careful actions are harder for me."
        ],
        "neg": [
          "Lots of objects make everything stutter. The main attraction of the game turns into a performance problem.",
          "Touch buttons obstruct my view of where I am going. Playing on a small phone is uncomfortable."
        ]
      }
    },
    "gridautosport": {
      "ru": {
        "pos": [
          "Постепенно учусь тормозить перед поворотами, а не после. Чувствуется, что правильная траектория действительно решает.",
          "Нравится пробовать разные дисциплины. Машины требуют разного подхода, а не только выглядят по-разному.",
          "С геймпадом получается хороший вечер гонок. Карьеру прохожу без желания постоянно переключиться на что-то ещё."
        ],
        "mid": [
          "Гонки увлекательные, но под себя управление настраивал долго. Первые заезды лучше считать тренировкой.",
          "Мне нравится серьёзный подход к заездам. Любителям коротких аркадных гонок темп может показаться другим."
        ],
        "neg": [
          "Управление наклоном на моём телефоне слишком нервное. Машину ловлю чаще, чем еду по траектории.",
          "После нескольких заездов телефон сильно нагревается. Длинную гоночную сессию нормально провести не выходит."
        ]
      },
      "en": {
        "pos": [
          "I am learning to brake before corners rather than after them. The racing line actually matters.",
          "I enjoy trying different disciplines. Cars need different approaches rather than just looking different.",
          "With a controller it makes for a good evening of racing. The career holds my attention."
        ],
        "mid": [
          "Racing is engaging, but configuring the controls took time. The first few events were practice for me.",
          "I like the more demanding racing. It feels different from a quick arcade racer."
        ],
        "neg": [
          "Tilt steering feels too twitchy on my phone. I spend more time correcting the car than following the line.",
          "My phone gets hot after a few races. A long racing session is not comfortable."
        ]
      }
    },
    "brotatopremium": {
      "ru": {
        "pos": [
          "Думал, новая сборка не переживёт и пару волн, а она оказалась самой удачной. Экспериментировать интересно.",
          "Короткие волны хорошо подходят для телефона. Между ними успеваю спокойно выбрать улучшения.",
          "У персонажей разные ограничения, поэтому привычную сборку не получается повторять бесконечно."
        ],
        "mid": [
          "Сборки затягивают. Когда врагов становится много, за мелкими деталями уже сложно следить.",
          "Играть удобно короткими подходами, но несколько неудачных попыток подряд могут утомить."
        ],
        "neg": [
          "На поздних волнах всё сливается в одну кучу. Не понимаю, от чего получаю урон, и просто теряю забег.",
          "Палец закрывает часть арены, а перемещаться нужно постоянно. На моём телефоне это мешает слишком сильно."
        ]
      },
      "en": {
        "pos": [
          "I thought a new build would fail within two waves, but it turned out to be my best. Experimenting is fun.",
          "Short waves suit the phone well. Between them I have time to consider upgrades.",
          "Character restrictions make me rethink builds rather than repeat the same setup endlessly."
        ],
        "mid": [
          "Building a loadout is absorbing. With many enemies on screen, small details become harder to follow.",
          "It works in short sessions, though several failed attempts in a row can be tiring."
        ],
        "neg": [
          "Late waves become a visual mess. I cannot tell what is damaging me and lose the run.",
          "My finger obscures part of the arena while constant movement is required. It gets in the way too much on my phone."
        ]
      }
    },
    "pocketcity2": {
      "ru": {
        "pos": [
          "Построил район, а потом прогулялся по нему персонажем. Неожиданно приятно увидеть свой город с такого ракурса.",
          "Переделываю дороги и сразу вижу, как меняется город. Залип на планировке дольше, чем собирался.",
          "Свободный режим хорош для экспериментов. Можно попробовать странную планировку без страха испортить основную игру."
        ],
        "mid": [
          "Строить интересно, но городские события иногда отвлекают, когда хочется просто закончить район.",
          "На планшете места хватает. На телефоне при плотной застройке чаще приближаю карту."
        ],
        "neg": [
          "В большом городе меню стало открываться с задержкой. Управлять стройкой в таком темпе неприятно.",
          "Из-за неточного касания удалил не тот участок дороги. Редактирование тесных районов на телефоне мне не понравилось."
        ]
      },
      "en": {
        "pos": [
          "I built a district and then walked around it as a character. Seeing my city from that angle was a nice surprise.",
          "I keep redesigning roads and watching the city change. Planning held me longer than expected.",
          "Free mode is good for experiments. I can try an odd layout without worrying about my main city."
        ],
        "mid": [
          "Building is interesting, but city events sometimes interrupt me when I just want to finish a district.",
          "There is enough room on a tablet. On a phone I zoom in more often around dense construction."
        ],
        "neg": [
          "Menus became slow to open in a large city. Managing construction at that pace is frustrating.",
          "An imprecise tap removed the wrong road section. Editing dense neighbourhoods on a phone has not worked well for me."
        ]
      }
    },
    "things3": {
      "ru": {
        "pos": [
          "Разделил рабочие и домашние дела, а на сегодня оставляю только реальный объём. Список перестал давить.",
          "Крупный проект разбил на небольшие шаги. Теперь понятно, за что браться следующим.",
          "Быстро записываю задачу и возвращаюсь к делу. Именно это мне и нужно от планировщика."
        ],
        "mid": [
          "Личные задачи вести приятно. Для совместной работы мне нужен отдельный инструмент.",
          "Система списков удобная, но пришлось переучить себя не складывать всё подряд в «Сегодня»."
        ],
        "neg": [
          "Мой привычный способ планирования сюда не укладывается. Слишком много времени ушло на перекладывание задач между списками.",
          "Покупал ради простоты, но нужные мне настройки нашёл не сразу. От планировщика ожидал меньше подготовки."
        ]
      },
      "en": {
        "pos": [
          "I separated work and home tasks and keep a realistic amount for today. The list feels less overwhelming.",
          "Breaking a large project into small steps made the next action clear.",
          "I can capture a task quickly and return to what I was doing. That is what I need from a planner."
        ],
        "mid": [
          "Managing personal tasks is pleasant. I use a different tool for collaborative work.",
          "The lists work well, but I had to stop myself from putting absolutely everything in Today."
        ],
        "neg": [
          "My usual planning method does not fit. I spent too much time moving tasks between lists.",
          "I bought it for simplicity, but needed too long to find the settings I wanted. A planner should take less preparation."
        ]
      }
    },
    "ankimobile": {
      "ru": {
        "pos": [
          "Сделал свои карточки по словам, которые постоянно забываю. Повторять именно их гораздо полезнее случайных упражнений.",
          "Нравится возвращаться к сложным карточкам чаще, а знакомые не крутить по кругу каждый день.",
          "Синхронизация с моими наборами через AnkiWeb выручает: продолжаю повторение с телефона."
        ],
        "mid": [
          "Для повторения хорошо, но красивые карточки с оформлением пришлось учиться делать отдельно.",
          "Система полезная, если не пропускать дни. После перерыва большой хвост повторений морально тяжёлый."
        ],
        "neg": [
          "Настройки карточек слишком запутанные для первого запуска. Вместо учёбы разбирался с оформлением и полями.",
          "После долгого перерыва список повторений оказался огромным. Не смог подстроить нагрузку под себя и перестал открывать."
        ]
      },
      "en": {
        "pos": [
          "I made cards for words I repeatedly forget. Reviewing those is more useful than random exercises.",
          "I like revisiting difficult cards more often without repeating familiar ones every day.",
          "AnkiWeb sync lets me continue reviewing my decks on my phone."
        ],
        "mid": [
          "It works well for revision, but I had to learn card formatting separately.",
          "The system is useful if I stay consistent. A backlog after a break can feel daunting."
        ],
        "neg": [
          "Card settings are too confusing on first use. I spent my study time sorting out fields and formatting.",
          "After a long break the review queue was enormous. I could not adjust the workload to suit me and stopped opening it."
        ]
      }
    },
    "forest": {
      "ru": {
        "pos": [
          "Ставлю таймер на один конкретный кусок работы. Деревце смешное, но действительно помогает не тянуться к телефону.",
          "По лесу видно, сколько раз за неделю удалось нормально сосредоточиться. Приятнее обычного счётчика минут.",
          "Короткие сессии подошли для чтения. Начать легче, когда не обещаешь себе заниматься весь вечер."
        ],
        "mid": [
          "Для спокойной работы подходит. Если по делу часто нужен телефон, такой способ концентрации не всегда удобен.",
          "Идея приятная, но привычку всё равно приходится вырабатывать самому. Один таймер отвлечения не убирает."
        ],
        "neg": [
          "Мне постоянно нужен телефон по работе. Получается не концентрация, а борьба с собственным таймером.",
          "Дополнительные экраны отвлекают от главного действия. Хочется просто запустить сессию, а не выбирать украшения."
        ]
      },
      "en": {
        "pos": [
          "I set a timer for one specific piece of work. The little tree is silly, but it does help me leave my phone alone.",
          "The forest shows how often I focused properly during the week. Nicer than a plain minute counter.",
          "Short sessions work for reading. Starting is easier when I am not committing to the whole evening."
        ],
        "mid": [
          "It suits quiet work. If I need my phone for the task, this way of focusing is less convenient.",
          "The idea is pleasant, but I still have to build the habit myself. A timer alone does not remove distractions."
        ],
        "neg": [
          "I constantly need my phone for work. This becomes a fight with the timer rather than useful focus.",
          "Extra screens distract from the main action. I want to start a session, not choose decorations."
        ]
      }
    },
    "skyguide": {
      "ru": {
        "pos": [
          "Нашёл на небе яркую точку и наконец понял, что это за планета. Ради таких маленьких открытий и установил.",
          "Показывали ребёнку созвездия вечером за городом. С картой разговор получился гораздо интереснее.",
          "Смена времени помогает понять, где искать объект позднее. Удобно заранее подготовиться к наблюдению."
        ],
        "mid": [
          "Карта красивая, но в городе часть показанных звёзд всё равно не увидеть из-за света.",
          "Искать объекты интересно. По некоторым значкам сначала пришлось разбираться, что они означают."
        ],
        "neg": [
          "Направление карты заметно расходится с тем, куда смотрит телефон. Не смог нормально определить созвездие.",
          "На маленьком экране слишком много подписей одновременно. Нужный объект теряется среди текста."
        ]
      },
      "en": {
        "pos": [
          "I identified a bright point in the sky as a planet. Those little discoveries are why I installed it.",
          "We showed our child constellations in the countryside. The sky map made the conversation much more interesting.",
          "Changing the time helps me see where to look later. Useful for planning an observation."
        ],
        "mid": [
          "The map looks good, but city light means many displayed stars are not visible to me.",
          "Finding objects is interesting. I needed time to understand some of the symbols."
        ],
        "neg": [
          "The map direction does not line up with where my phone points. I could not identify the constellation properly.",
          "Too many labels appear at once on my small screen. The object I want gets lost among them."
        ]
      }
    },
    "iawriter": {
      "ru": {
        "pos": [
          "Пишу черновики без возни со шрифтами. Открыл документ и занимаюсь текстом, а не оформлением.",
          "Markdown мне подходит: заголовки и списки набираются с клавиатуры, не нужно искать кнопки.",
          "Режим фокуса помогает не перечитывать весь текст после каждой новой строки."
        ],
        "mid": [
          "Для обычного текста удобно. Когда нужны сложные таблицы и оформление, открываю другой редактор.",
          "Минимализм нравится, но к организации документов привыкал не сразу."
        ],
        "neg": [
          "Мой привычный процесс работы с файлами оказался слишком неудобным. На поиск документов трачу больше времени, чем хотел.",
          "Ожидал более гибкого оформления текста. Для моей работы возможностей не хватило, редактор не подошёл."
        ]
      },
      "en": {
        "pos": [
          "I draft without fiddling with fonts. Opening a document leads straight to writing.",
          "Markdown suits me. I can type headings and lists without searching for buttons.",
          "Focus mode helps me stop rereading the entire piece after each new line."
        ],
        "mid": [
          "It is good for plain writing. Complex tables and layouts send me to another editor.",
          "I like the minimal interface, but organising documents took some getting used to."
        ],
        "neg": [
          "My usual file workflow feels awkward here. Finding documents takes more time than I wanted.",
          "I expected more flexible text formatting. It does not provide enough for my work."
        ]
      }
    },
    "forscore": {
      "ru": {
        "pos": [
          "Собрал ноты к репетиции в один список. Больше не ищу отдельные листы между произведениями.",
          "Добавляю пометки прямо в партию. Намного удобнее, чем держать рядом блокнот с номерами тактов.",
          "На планшете моя папка с нотами наконец стала нормально организованной."
        ],
        "mid": [
          "Для репетиций полезно. Плохой скан приложение, конечно, не превращает в хорошие ноты.",
          "Возможностей много, основные освоил быстро. Остальные изучаю по мере необходимости."
        ],
        "neg": [
          "Большой PDF открывается слишком долго. Перед репетицией ждать загрузку каждой партии совсем не хочется.",
          "На моём небольшом экране ноты мелкие, а постоянное масштабирование сбивает во время игры."
        ]
      },
      "en": {
        "pos": [
          "I put the scores for a rehearsal in one list. No more searching for separate sheets between pieces.",
          "I annotate directly on the score. Much easier than keeping a separate notebook of bar numbers.",
          "My sheet-music collection is finally organised properly on the tablet."
        ],
        "mid": [
          "It is useful for rehearsals. It cannot turn a poor scan into good sheet music, though.",
          "There are plenty of features. I learned the basics quickly and explore the rest when needed."
        ],
        "neg": [
          "A large PDF takes too long to open. I do not want to wait for every part before rehearsal.",
          "The notation is small on my screen, and constant zooming interrupts my playing."
        ]
      }
    },
    "alienisolation": {
      "ru": {
        "pos": [
          "Сидел в укрытии и боялся даже пошевелиться. Напряжение держит сильнее многих фильмов.",
          "Станцию интересно исследовать даже без встречи с Чужим. Звуки и детали делают половину атмосферы.",
          "Понравилось, что нельзя просто решить всё стрельбой. Приходится слушать, ждать и выбирать момент."
        ],
        "mid": [
          "Атмосфера отличная, но играть короткими урывками мне неудобно. Нужно время спокойно погрузиться.",
          "Управление освоил не сразу. Особенно трудно было в напряжённых сценах, когда начинаешь торопиться."
        ],
        "neg": [
          "На телефоне слишком часто путаю нужные действия в опасный момент. Вместо страха получаю злость на управление.",
          "Тёмные сцены на моём экране почти нечитаемы. Искать предметы превратилось в мучение."
        ]
      },
      "en": {
        "pos": [
          "I sat in hiding afraid to move. The tension is stronger than in many films.",
          "Exploring the station is interesting even without encountering the Alien. Sound and detail do much of the work.",
          "I like that shooting is not the answer to everything. I have to listen, wait and choose my moment."
        ],
        "mid": [
          "The atmosphere is excellent, but short interrupted sessions do not suit me. I need time to get absorbed.",
          "Controls took time to learn, especially in tense scenes when I started rushing."
        ],
        "neg": [
          "I confuse actions on my phone at the worst moments. The controls make me angry rather than frightened.",
          "Dark scenes are almost unreadable on my display. Searching for items became a chore."
        ]
      }
    },
    "hitmanbloodmoney": {
      "ru": {
        "pos": [
          "Одну миссию прошёл несколькими способами. Нравится находить аккуратное решение, которое сначала не замечал.",
          "Изучать маршруты и подбирать маскировку интереснее, чем просто бежать к цели.",
          "Уровни хочется перепроходить ради собственного плана. Есть ощущение, что сам разобрался в ситуации."
        ],
        "mid": [
          "Возможностей в миссиях много, но сенсорное управление требует неторопливости.",
          "Стелс увлекает. После неудачи иногда приходится повторять больше действий, чем хотелось бы."
        ],
        "neg": [
          "Промахнулся по кнопке и выдал себя в конце миссии. Для точных действий интерфейс на моём телефоне неудобный.",
          "Камера мешает быстро оценить, кто стоит за спиной. Несколько попыток сорвались именно из-за этого."
        ]
      },
      "en": {
        "pos": [
          "I completed one mission several different ways. Finding a subtle solution I missed initially is satisfying.",
          "Studying routines and choosing a disguise is more interesting than rushing straight to the target.",
          "I revisit levels to try my own plan. It feels like I worked out the situation myself."
        ],
        "mid": [
          "Missions offer plenty of possibilities, but touch controls require patience.",
          "The stealth is engaging. After a failure I sometimes repeat more steps than I would like."
        ],
        "neg": [
          "A missed button press exposed me near the end of a mission. Precise actions are awkward on my phone.",
          "The camera makes it difficult to check who is behind me. It has ruined several attempts."
        ]
      }
    },
    "xcom2": {
      "ru": {
        "pos": [
          "Вытащил бойца из почти безнадёжной ситуации и ещё долго вспоминал этот ход. Хорошая тактика такие истории и создаёт.",
          "Нравится думать о позиции отряда, а не торопиться с нажатием. Пошаговый бой хорошо ложится на планшет.",
          "Развитие базы и бойцов заставляет заранее выбирать приоритеты. Решения ощущаются связанными."
        ],
        "mid": [
          "Кампания затягивает. Но это игра, для которой я специально выделяю время, а не запускаю на пару минут.",
          "Систем много, первые миссии проходил медленно. Зато постепенно начинаешь понимать, зачем всё это."
        ],
        "neg": [
          "Переходы между миссиями слишком долгие на моём устройстве. Ожидание постоянно ломает темп игры.",
          "Мелкие элементы интерфейса мешают выбирать нужную клетку. Для такой тактики ошибка касания слишком дорого обходится."
        ]
      },
      "en": {
        "pos": [
          "Rescuing a soldier from a nearly hopeless position stayed with me. Good tactics games create those stories.",
          "I enjoy planning squad positions instead of rushing inputs. Turn-based combat suits a tablet.",
          "Developing the base and soldiers makes me set priorities. The decisions feel connected."
        ],
        "mid": [
          "The campaign is absorbing, but I set time aside for it rather than play for a couple of minutes.",
          "There are many systems, so my early missions were slow. Their purpose becomes clearer with time."
        ],
        "neg": [
          "Transitions between missions are too slow on my device. Waiting keeps breaking the pace.",
          "Small interface elements make tile selection difficult. A mistap is too costly in this kind of tactics game."
        ]
      }
    },
    "cultistsimulator": {
      "ru": {
        "pos": [
          "Долго не понимал, что происходит, а потом связал несколько карт и увидел целую историю. Ради таких моментов продолжаю.",
          "Нравится читать тексты и самому проверять догадки. Здесь любопытство работает лучше готового плана.",
          "Каждая неудачная попытка оставляет новую идею для следующей. Необычный способ рассказывать историю."
        ],
        "mid": [
          "Мир интересный, но без желания много читать и экспериментировать игра вряд ли зайдёт.",
          "Первые часы провёл в растерянности. Понимание приходит постепенно, а мне иногда хочется более ясных подсказок."
        ],
        "neg": [
          "На экране слишком много мелких карт и таймеров. Следить за всем с телефона мне неудобно.",
          "Неясные правила для меня оказались не загадкой, а раздражением. Несколько попыток закончились без понимания ошибки."
        ]
      },
      "en": {
        "pos": [
          "I was confused for a while, then connected several cards and saw a whole story emerge. Those moments keep me playing.",
          "I enjoy reading the text and testing my own theories. Curiosity works better than a fixed plan here.",
          "Each failed attempt leaves me with an idea for the next one. An unusual way to tell a story."
        ],
        "mid": [
          "The world is interesting, but it asks for a willingness to read and experiment.",
          "I spent the first hours feeling lost. Understanding arrives gradually, but I sometimes want clearer hints."
        ],
        "neg": [
          "There are too many small cards and timers on screen. I cannot comfortably track them all on my phone.",
          "Unclear rules felt irritating rather than intriguing. Several attempts ended without my understanding what went wrong."
        ]
      }
    },
    "happvpn": {
      "ru": {
        "pos": [
          "Пользуюсь Happ уже несколько месяцев. Мой VLESS Reality подключается быстро, скорость почти как без VPN.",
          "Добавил подписку из буфера, нажал подключиться — всё заработало с первого раза. Очень удобно.",
          "На мобильном интернете соединение держится стабильно, даже когда другие клиенты перестают подключаться.",
          "Перешёл на Happ из-за нормальной маршрутизации. Мессенджеры идут напрямую, остальное через VPN — именно как настроил.",
          "Удобный клиент: серверы, пинг и расход трафика находятся на одном экране, ничего лишнего.",
          "Использую свой сервер с Hysteria2. Подключение быстрое, видео грузится без постоянной буферизации.",
          "Хорошо работает и на телефоне, и на планшете. Подписка между устройствами добавилась без проблем.",
          "После последнего обновления соединение стало заметно стабильнее, пропали случайные обрывы.",
          "Нравится, что приложение не продаёт непонятный VPN, а просто нормально работает с моей конфигурацией.",
          "Серверов в подписке много, но переключение быстрое. Рабочий узел можно найти за минуту."
        ],
        "mid": [
          "Сам VPN работает хорошо, но после обновления пришлось заново искать настройки маршрутизации.",
          "Всё устраивает, кроме отображения пинга: выбираю время в миллисекундах, а иногда снова появляются значки.",
          "Функций много и для новичка меню сначала выглядит сложно. После настройки пользоваться удобно.",
          "Иногда после перехода с Wi-Fi на мобильную сеть нужно нажать переподключение вручную.",
          "Соединение стабильное, но при включённой постоянной работе расход батареи стал немного выше.",
          "Длинная подписка обновляется не мгновенно, зато после загрузки все серверы работают нормально."
        ],
        "neg": [
          "Настройка вида пинга периодически сбрасывается после перезапуска приложения.",
          "После одного из обновлений слетели правила маршрутизации, пришлось настраивать их заново.",
          "На старом телефоне список из сотни серверов прокручивается с заметными тормозами.",
          "Версия для компьютера пока работает менее стабильно, чем мобильная."
        ]
      },
      "en": {
        "pos": [
          "I have used Happ for several months. My VLESS Reality server connects quickly and the speed is close to a direct connection.",
          "I pasted a subscription, tapped connect and everything worked on the first try.",
          "The connection stays stable on mobile data even when other clients struggle to connect.",
          "Routing works exactly as configured: messengers go direct while other traffic uses the VPN.",
          "Servers, ping and traffic usage are all visible on one screen without unnecessary clutter.",
          "My Hysteria2 server connects quickly and video streams without constant buffering.",
          "It works well on both my phone and tablet, and adding the subscription was painless.",
          "The latest update made the tunnel noticeably more stable and random disconnects are gone.",
          "I like that Happ is a client for my own configuration instead of selling an unclear VPN service.",
          "My subscription contains many servers, but switching is quick and finding a working one takes little time."
        ],
        "mid": [
          "The VPN works well, though I had to find the routing settings again after an update.",
          "Everything is fine except the ping display sometimes switches back from milliseconds to icons.",
          "There are many features and the menus feel complicated at first, but daily use is easy once configured.",
          "A manual reconnect is occasionally needed after switching from Wi-Fi to mobile data.",
          "The connection is stable, though all-day use increased battery consumption a little.",
          "A large subscription takes a moment to refresh, but the servers work normally afterward."
        ],
        "neg": [
          "The selected ping display mode sometimes resets after restarting the app.",
          "One update reset my routing rules and I had to configure them again.",
          "A list with more than a hundred servers scrolls slowly on my older phone."
        ]
      }
    },
    "v2raytun": {
      "ru": {
        "pos": [
          "Импортировал конфигурацию по QR-коду, подключение появилось сразу. VLESS Reality работает стабильно.",
          "Пользуюсь каждый день с собственной подпиской. Скорость хорошая, видео и звонки идут без обрывов.",
          "После добавления Hysteria2 приложение стало для меня основным VPN-клиентом.",
          "Удобно обновлять подписку одной кнопкой, не нужно вручную добавлять каждый сервер.",
          "Нравится, что видно текущую скорость и общий трафик прямо во время подключения.",
          "Переключается между Wi-Fi и мобильной сетью быстрее большинства похожих клиентов.",
          "Простой интерфейс, поддерживает нужные протоколы и не заваливает рекламой.",
          "Несколько месяцев использую Trojan и VLESS — настройки не слетают, соединение держится хорошо.",
          "Даже с большим списком серверов можно быстро отсортировать рабочие по задержке."
        ],
        "mid": [
          "Работает нормально, но проверка пинга у большой подписки заметно нагружает телефон.",
          "Кнопку сортировки по задержке нашёл не сразу. После этого выбирать сервер стало удобнее.",
          "Настроек достаточно, но некоторые пункты спрятаны глубже, чем ожидаешь.",
          "После смены сети иногда остаётся старый статус подключения, хотя интернет уже работает.",
          "Хотелось бы быстрее обновлять длинные списки, в остальном клиент устраивает."
        ],
        "neg": [
          "При тесте задержки сотни конфигураций приложение начинает сильно тормозить.",
          "После обновления один раз пропал список конфигураций, хорошо что была сохранена ссылка на подписку.",
          "При очень длинной ссылке импорта приложение иногда закрывается."
        ]
      },
      "en": {
        "pos": [
          "I imported a configuration by QR code and it appeared immediately. VLESS Reality is stable.",
          "I use my own subscription every day. Speed is good and calls and video remain stable.",
          "After Hysteria2 support was added, this became my main VPN client.",
          "Refreshing a subscription with one button is much easier than adding every server manually.",
          "Current speed and total traffic are clearly visible while connected.",
          "It switches between Wi-Fi and mobile data faster than most similar clients.",
          "The interface is simple, the needed protocols are supported and there are no distracting ads.",
          "I have used Trojan and VLESS for months; settings remain in place and the tunnel is reliable.",
          "Even with a large server list, sorting by latency makes it quick to find a working option."
        ],
        "mid": [
          "The app works well, though testing a large subscription uses noticeable resources.",
          "I did not find latency sorting immediately, but server selection became easy once I did.",
          "Everything is good on the phone, while sending a configuration to TV sometimes takes another try.",
          "There are enough options, though some advanced settings are buried deeper than expected.",
          "After changing networks the old connection status can remain visible for a short time.",
          "Large lists could refresh faster, but otherwise the client does its job."
        ],
        "neg": [
          "Running a latency test on hundreds of configurations makes the app lag heavily.",
          "QR transfer to my TV closed without adding the profile, so I had to paste the URL manually.",
          "My configuration list disappeared once after an update; luckily I still had the subscription URL.",
          "The app can close when importing an extremely long configuration link."
        ]
      }
    },
    "amneziavpn": {
      "ru": {
        "pos": [
          "Подключил свой VPS через Amnezia: ввёл IP, логин и пароль, остальное приложение настроило само.",
          "AmneziaWG работает там, где обычный WireGuard у меня давно перестал подключаться.",
          "Пользуюсь self-hosted несколько месяцев. Скорость стабильная, на видео и звонках просадок почти нет.",
          "Удобно, что в одном приложении есть свой сервер, Amnezia Free и Premium.",
          "Настроил VPN родителям за несколько минут и отправил им готовую конфигурацию.",
          "Открытый исходный код и возможность держать VPN на своём VPS — главные плюсы для меня.",
          "После обновления соединение стало быстрее восстанавливаться при переходе с Wi-Fi на LTE.",
          "На домашнем интернете и мобильной сети AmneziaWG держится стабильно весь день.",
          "Раздельное туннелирование работает как надо: банковские приложения напрямую, браузер через VPN.",
          "Интерфейс понятный даже без опыта с серверами, основные шаги приложение объясняет по ходу настройки."
        ],
        "mid": [
          "Свой сервер настроился со второй попытки, первая установка протокола зависла почти в конце.",
          "Self-hosted работает отлично, но новичку всё равно нужно сначала разобраться, где купить VPS.",
          "Экспорт конфигурации удобный, хотя QR-код иногда приходится увеличить перед сканированием.",
          "Бесплатное подключение помогает, но выбрать конкретную страну нельзя.",
          "После обновлений иногда заново проверяю Kill Switch и раздельное туннелирование.",
          "Подключение стабильное, но первый запуск после перезагрузки сервера занимает чуть больше времени."
        ],
        "neg": [
          "При установке протокола на VPS приложение зависло, помог только повторный запуск настройки.",
          "Получил ошибку 305: оказалось, IP моего сервера заблокирован и его пришлось менять у хостера.",
          "Сгенерированный QR-код один раз плохо считывался, конфигурацию передал файлом.",
          "На старом iPad последняя версия иногда закрывается сразу после запуска.",
          "У Premium периодически не подключались доступные серверы, хотя self-hosted в тот же момент работал."
        ]
      },
      "en": {
        "pos": [
          "I connected my own VPS through Amnezia: entered the IP and credentials, and the app configured the rest.",
          "AmneziaWG works on networks where standard WireGuard stopped connecting for me.",
          "I have used the self-hosted mode for months. Speed is stable with almost no drops during video or calls.",
          "It is convenient to keep a personal server, Amnezia Free and Premium in one app.",
          "I set up VPN for my parents within minutes and sent them a ready configuration.",
          "Open-source code and the option to run VPN on my own VPS are the main advantages for me.",
          "After the update the tunnel recovers faster when switching from Wi-Fi to LTE.",
          "AmneziaWG stays connected all day on both home broadband and mobile data.",
          "Split tunneling works properly: banking apps go direct while the browser uses the VPN.",
          "The interface is understandable even without server experience because the setup explains each main step."
        ],
        "mid": [
          "My server was configured on the second attempt because the first protocol installation stalled near the end.",
          "Self-hosted mode works well, though beginners still need to learn where to get a VPS.",
          "Configuration export is convenient, but the QR code occasionally needs to be enlarged before scanning.",
          "The free connection is useful, though a specific country cannot be selected.",
          "After updates I usually check Kill Switch and split-tunneling settings again.",
          "The tunnel is stable, but the first connection after a server reboot takes a little longer."
        ],
        "neg": [
          "Protocol installation on my VPS froze once and I had to restart the setup.",
          "Error 305 appeared because my server IP was blocked and the hosting provider had to replace it.",
          "A generated QR code was difficult to scan once, so I transferred the configuration as a file.",
          "The latest version sometimes closes immediately on my older iPad.",
          "Premium servers occasionally failed to connect while my self-hosted server still worked."
        ]
      }
    },
    "sberkids": {
      "ru": {
        "pos": [
          "Дочка (9 лет) обожает панду на карте, а я спокойна — поставила лимит 500 ₽ в день и вижу каждую покупку в родительском приложении.",
          "Сын копил на велосипед через цель в приложении, кэшбэк Спасибо капал — за полгода собрал сам, без нытья \"мам, купи\".",
          "Удобно, что покупки в школьной столовой приходят мне уведомлением. Если что-то подозрительное — тут же звоню Мише.",
          "Карта работает везде, где принимают Mastercard. Ребёнок сам платит за пиццу и кино с друзьями, чувствует себя взрослым.",
          "Нравится, что можно давать задания — помыл посуду, получил 50 ₽ на карту. Дочь теперь сама предлагает помочь.",
          "Тигр — любимый персонаж сына, он выбрал его при оформлении. Мелочь, а ребёнку приятно, лезет в приложение каждый день."
        ],
        "mid": [
          "Приложение норм, но лимиты иногда сбрасываются после обновления, приходится заново выставлять. Хотелось бы стабильности.",
          "Карту ждали почти месяц из-за задержки доставки. Сам сервис хороший, но первое впечатление подпортили."
        ],
        "neg": [
          "Карту заблокировали прямо в магазине без причины, ребёнок стоял у кассы с полной корзиной — позор. Разблокировка через поддержку заняла 2 дня.",
          "Приложение вылетает каждый раз при открытии раздела \"Цели\" на старом андроиде. Писал в поддержку — тишина уже неделю.",
          "Поставил лимит на игры, сын всё равно умудрился купить донат в Роблоксе через стороннюю оплату. Фильтры категорий работают криво."
        ]
      },
      "en": {
        "pos": [
          "My daughter (9) loves the panda on her card, and I'm relaxed — set a 500₽ daily limit and see every purchase in the parent app.",
          "My son saved for a bike through a goal in the app, Спасибо cashback kept adding up — he collected it himself in six months, no whining.",
          "Handy that school cafeteria purchases ping me instantly. If something looks off, I call Misha right away.",
          "The card works everywhere Mastercard is accepted. My kid pays for pizza and movies with friends himself, feels grown-up.",
          "I like that you can set chores — washed the dishes, got 50₽ on the card. My daughter now offers to help on her own.",
          "Tiger is my son's favorite mascot, he picked it when we set up the card. Small thing, but he opens the app every day because of it."
        ],
        "mid": [
          "App is okay, but limits sometimes reset after updates, have to set them again. Would love more stability.",
          "Waited almost a month for the card due to delivery delays. The service itself is good, but first impression was spoiled."
        ],
        "neg": [
          "Card got blocked right at the checkout for no reason, my kid stood there with a full basket — embarrassing. Unblocking via support took 2 days.",
          "App crashes every time I open the Goals section on an older Android. Wrote to support — silence for a week now.",
          "Set a limit on gaming, my son still managed to buy a Roblox top-up through third-party payment. Category filters work poorly."
        ]
      }
    },
    "rave": {
      "ru": {
        "pos": [
          "Крутое приложение, пользуемся с друзьями уже давно. Удобно смотреть сериалы вместе и обсуждать происходящее прямо в чате.",
          "Супер! Нашёл для себя удобный способ смотреть фильмы на расстоянии с девушкой — синхронизация работает отлично.",
          "Запускаем с парнем аниме каждый вечер, живём в разных городах. Таймер подхватывается до секунды, пауза срабатывает у обоих — как будто рядом сидим.",
          "Голосовой чат внутри сессии — то что надо. Не надо параллельно висеть в Дискорде, всё в одном окне. На выходных смотрим с друзьями по 3-4 человека.",
          "Удобно, что можно включить и музыку, не только видео. Устроили с подругой домашнюю вечеринку, слушали один плейлист синхронно — зашло.",
          "Пользуюсь уже полгода, лагов на нормальном Wi-Fi не замечаю. Самый простой способ смотреть вместе, когда нет возможности встретиться вживую."
        ],
        "mid": [
          "В целом нормально, но интерфейс местами на английском — хотелось бы полный перевод на русский без исключений.",
          "После обновления стала выше нагрузка на батарею — за пару часов просмотра телефон садится заметно быстрее, чем раньше."
        ],
        "neg": [
          "В последнее время приложение стало работать плохо: видео не прогружается, подключиться к комнате получается не с первого раза. Раньше таких проблем не было.",
          "Приложение постоянно вылетает прямо во время просмотра. Приходится заходить заново и искать, на какой минуте остановились.",
          "Работает отвратительно: видео заикается, звук отстаёт от картинки. С друзьями собрались посмотреть фильм, но так и не досмотрели."
        ]
      },
      "en": {
        "pos": [
          "Great app, my friends and I have been using it for a while. It is convenient to watch TV shows together and discuss what is happening right in the chat.",
          "Super! I found a convenient way to watch movies at a distance with my girlfriend — sync works perfectly.",
          "We watch anime every evening with my boyfriend from different cities. The timer stays in sync to the second, pause works for both of us — feels like we're sitting right next to each other.",
          "Voice chat inside the session is exactly what I needed. No need to hop into Discord in parallel — everything in one window. We watch with 3–4 friends on weekends.",
          "Nice that you can play music too, not just video. Had a house party with a friend over distance, listened to one playlist in sync — loved it.",
          "Been using for six months, no lag on decent Wi-Fi. Easiest way to watch things together when you can't meet up in person."
        ],
        "mid": [
          "Overall fine, but parts of the UI are still in English — would love a full Russian translation with no exceptions.",
          "Battery drain went up after the last update — phone dies noticeably faster during a couple of hours of watching than it used to."
        ],
        "neg": [
          "Lately the app has started working poorly: videos do not load and joining a room does not work on the first try. There were no problems like this before.",
          "The app constantly crashes mid-watch. I have to log back in and figure out which minute we stopped on.",
          "Works terribly: video stutters, audio lags behind the picture. We tried watching a movie with friends but never finished it."
        ]
      }
    }
  },
  "releases": {
    "ozon": {
      "version": "19.36.0",
      "date": "2026-09-23T20:16:23Z",
      "url": "https://apps.apple.com/ru/app/ozon-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D1%8B-%D0%BE%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0-%D0%B1%D0%B8%D0%BB%D0%B5%D1%82%D1%8B/id407804998",
      "storeId": 407804998,
      "developer": "OZON.ru",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Покупки, скидки, путешествия и розыгрыши — всё в одном приложении.",
        "en": "Shopping, discounts, travel and prize draws are all available in one app."
      }
    },
    "wb": {
      "version": "7.8.2000",
      "date": "2026-09-23T09:03:26Z",
      "url": "https://apps.apple.com/ru/app/wildberries/id597880187",
      "storeId": 597880187,
      "developer": "Wildberries OOO",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправили ошибки и ускорили приложение. Встречайте осенние скидки и выбирайте подарки к зимним праздникам.",
        "en": "Resolved errors and made the app faster. Explore autumn offers and find gifts for the winter holidays."
      }
    },
    "gos": {
      "version": "27.0.2",
      "date": "2026-09-02T07:18:32Z",
      "url": "https://apps.apple.com/ru/app/%D0%B3%D0%BE%D1%81%D1%83%D1%81%D0%BB%D1%83%D0%B3%D0%B8/id1367959794",
      "storeId": 1367959794,
      "developer": "Минкомсвязь РФ",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправили ошибки и повысили надёжность приложения.",
        "en": "Corrected errors and improved app reliability."
      }
    },
    "ybrowser": {
      "version": "26.8.7.447",
      "date": "2026-09-24T09:05:59Z",
      "url": "https://apps.apple.com/ru/app/%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80-%D1%81-%D0%B0%D0%BB%D0%B8%D1%81%D0%BE%D0%B9-ai/id483693909",
      "storeId": 483693909,
      "developer": "Direct Cursus Computer Systems Trading",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Доработали код для более стабильной работы приложения.",
        "en": "Updated the code to make the browser more stable."
      }
    },
    "maps": {
      "version": "30.3.1",
      "date": "2026-09-23T10:16:29Z",
      "url": "https://apps.apple.com/ru/app/%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%BA%D0%B0%D1%80%D1%82%D1%8B-%D0%B8-%D0%BD%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%82%D0%BE%D1%80/id313877526",
      "storeId": 313877526,
      "developer": "Direct Cursus Computer Systems Trading",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлена голосовая навигация для общественного транспорта: подсказки о пересадках и остановках, а также маршрут на заблокированном экране.",
        "en": "Public-transport navigation gains spoken transfer and stop guidance, with route information available on the lock screen."
      }
    },
    "market": {
      "version": "2026.36.3",
      "date": "2026-09-23T20:57:54Z",
      "url": "https://apps.apple.com/ru/app/%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82-%D0%BF%D0%BE%D0%BA%D1%83%D0%BF%D0%BA%D0%B8-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1369890634",
      "storeId": 1369890634,
      "developer": "Mikromobilnost doo",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки в работе приложения.",
        "en": "Resolved issues affecting the app."
      }
    },
    "gis": {
      "version": "7.29.1",
      "date": "2026-09-24T03:16:18Z",
      "url": "https://apps.apple.com/ru/app/2%D0%B3%D0%B8%D1%81-%D0%BA%D0%B0%D1%80%D1%82%D1%8B-%D0%BD%D0%B0%D0%B2%D0%B8%D0%B3%D0%B0%D1%82%D0%BE%D1%80-%D0%B4%D1%80%D1%83%D0%B7%D1%8C%D1%8F/id481627348",
      "storeId": 481627348,
      "developer": "LLC \"DoubleGIS\"",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Переработаны карточки маршрутов общественного транспорта. В них появились прогнозное расписание и выбор направления.",
        "en": "Public-transport route cards have a new layout with predicted timetables and direction selection."
      }
    },
    "music": {
      "version": "8.09",
      "date": "2026-09-25T06:40:06Z",
      "url": "https://apps.apple.com/ru/app/%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%BC%D1%83%D0%B7%D1%8B%D0%BA%D0%B0-%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8-%D0%BF%D0%BE%D0%B4%D0%BA%D0%B0%D1%81%D1%82%D1%8B/id520797969",
      "storeId": 520797969,
      "developer": "Direct Cursus Computer Systems Trading",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки в работе приложения.",
        "en": "Resolved issues affecting the app."
      }
    },
    "kino": {
      "version": "8.66.0",
      "date": "2026-09-24T13:24:55Z",
      "url": "https://apps.apple.com/ru/app/%D0%BA%D0%B8%D0%BD%D0%BE%D0%BF%D0%BE%D0%B8%D1%81%D0%BA-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B-%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B-%D1%81%D0%BF%D0%BE%D1%80%D1%82/id477718890",
      "storeId": 477718890,
      "developer": "Direct Cursus Computer Systems Trading",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправили ошибки, доработали приложение и добавили билеты на премьеры.",
        "en": "Resolved errors, refined the app and added tickets for premieres."
      }
    },
    "telegram": {
      "version": "12.9.4",
      "date": "2026-09-12T06:27:05Z",
      "url": "https://apps.apple.com/us/app/telegram-messenger/id686449807",
      "storeId": 686449807,
      "developer": "Telegram FZ-LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "ygo": {
      "version": "700.160.0",
      "date": "2026-09-21T12:33:51Z",
      "url": "https://apps.apple.com/ru/app/%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-go-%D1%82%D0%B0%D0%BA%D1%81%D0%B8-%D0%B5%D0%B4%D0%B0-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0/id472650686",
      "storeId": 472650686,
      "developer": "Mikromobilnost doo",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Переработаны внутренние алгоритмы для ускорения работы. Сервисы собраны на главном экране для более быстрого перехода к ним.",
        "en": "Internal algorithms have been refined for speed, and the main screen brings services together for easier access."
      }
    },
    "magnit": {
      "version": "8.122.0",
      "date": "2026-09-18T14:34:31Z",
      "url": "https://apps.apple.com/ru/app/%D0%BC%D0%B0%D0%B3%D0%BD%D0%B8%D1%82-%D0%B0%D0%BA%D1%86%D0%B8%D0%B8-%D0%B8-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0/id881463973",
      "storeId": 881463973,
      "developer": "ЗАО Тандер",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "В оформленный заказ теперь можно добавить товары. Нажмите «Хочу добавить кое-что» и выберите их в каталоге до начала сборки.",
        "en": "You can now add products to an order you have already placed. Use the add-items button and choose from the catalogue before picking starts."
      }
    },
    "mts": {
      "version": "6.76.0",
      "date": "2026-09-23T07:07:44Z",
      "url": "https://apps.apple.com/ru/app/%D0%BC%D0%BE%D0%B9-%D0%BC%D1%82%D1%81/id1069871095",
      "storeId": 1069871095,
      "developer": "Mobile TeleSystems Public Joint Stock Company",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Доработали скорость и стабильность приложения.",
        "en": "Improved app speed and stability."
      }
    },
    "beeline": {
      "version": "5.47.5",
      "date": "2026-09-23T06:21:12Z",
      "url": "https://apps.apple.com/ru/app/%D0%B1%D0%B8%D0%BB%D0%B0%D0%B9%D0%BD/id569251594",
      "storeId": 569251594,
      "developer": "PJSC VimpelCom",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• На главном экране появилась шкала оставшегося лимита beeGPT.\n• Доработали пополнение лимита общения с нейросетью.\n• Исправили ошибки и ускорили загрузку.",
        "en": "• A home-screen gauge shows your remaining beeGPT allowance.\n• Refined allowance top-ups for AI conversations.\n• Resolved errors and made loading faster."
      }
    },
    "raif": {
      "version": "7.72.1",
      "date": "2026-09-14T12:40:44Z",
      "url": "https://apps.apple.com/ru/app/%D1%80%D0%B0%D0%B9%D1%84%D1%84%D0%B0%D0%B9%D0%B7%D0%B5%D0%BD-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%B1%D0%B0%D0%BD%D0%BA-%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F/id557857165",
      "storeId": 557857165,
      "developer": "Raiffeisenbank Russia",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Перевод по реквизитам можно отменить, пока он не отправлен из банка. Откройте его в истории операций и нажмите «Отменить перевод» — деньги вернутся на счёт.",
        "en": "Transfers using bank details can be cancelled before they leave the bank. Open the transaction in your history and use the cancellation button to return the funds to your account."
      }
    },
    "angrybirds2": {
      "version": "26.6.1",
      "date": "2026-09-24T15:11:51Z",
      "url": "https://apps.apple.com/us/app/angry-birds-2/id880047117",
      "storeId": 880047117,
      "developer": "Rovio Entertainment Oyj",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "dreamblast": {
      "version": "2.8.0",
      "date": "2026-09-14T10:02:37Z",
      "url": "https://apps.apple.com/us/app/angry-birds-dream-blast/id1432579280",
      "storeId": 1432579280,
      "developer": "Rovio Entertainment Oyj",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Обновлён визуальный стиль игры.\n• В Dream Pass продолжается история: проходите новые сцены и получайте награды.\n• Каждую неделю появляются новые головоломки.",
        "en": "• The game has a refreshed visual style.\n• Continue the story through Dream Pass scenes and collect rewards.\n• Additional puzzles arrive each week."
      }
    },
    "angryjourney": {
      "version": "3.8.4",
      "date": "2025-10-29T07:20:55Z",
      "url": "https://apps.apple.com/us/app/angry-birds-journey/id1498198098",
      "storeId": 1498198098,
      "developer": "Rovio Entertainment Oyj",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки в работе приложения.",
        "en": "Resolved issues affecting the app."
      }
    },
    "angrypop": {
      "version": "3.160.0",
      "date": "2026-08-27T05:45:40Z",
      "url": "https://apps.apple.com/us/app/angry-birds-pop/id937718942",
      "storeId": 937718942,
      "developer": "Rovio Entertainment Oyj",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Опубликован новый набор из 40 головоломок.",
        "en": "A new pack adds forty puzzles."
      }
    },
    "cutrope": {
      "version": "4.2.1",
      "date": "2026-09-15T05:58:45Z",
      "url": "https://apps.apple.com/us/app/cut-the-rope-physics-puzzle/id1024506959",
      "storeId": 1024506959,
      "developer": "ZeptoLab UK Limited",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Звёзды отполированы и сияют ещё ярче!",
        "en": "The stars have had a polish and shine more brightly!"
      }
    },
    "megamarket": {
      "version": "3.78",
      "date": "2026-09-14T07:26:17Z",
      "url": "https://apps.apple.com/ru/app/%D0%BC%D0%B5%D0%B3%D0%B0%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%BE%D0%B2/id1438856489",
      "storeId": 1438856489,
      "developer": "MARKETPLACE LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправили несколько небольших ошибок для более стабильной работы.",
        "en": "Resolved several small issues to improve stability."
      }
    },
    "lamoda": {
      "version": "5.46.0",
      "date": "2026-09-24T17:53:19Z",
      "url": "https://apps.apple.com/ru/app/lamoda-%D0%BC%D0%BE%D0%B4%D0%B0-%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%82%D0%B0-%D0%B4%D0%BE%D0%BC/id777645417",
      "storeId": 777645417,
      "developer": "Lamoda",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Обновлена программа Lamoda Club: выбор любимых категорий, персональные предложения, подарки и приглашения на мероприятия.",
        "en": "Lamoda Club now includes favourite-category selection, personalised offers, gifts and event invitations."
      }
    },
    "pyaterochka": {
      "version": "3.44.0",
      "date": "2026-09-16T19:52:22Z",
      "url": "https://apps.apple.com/ru/app/%D0%BF%D1%8F%D1%82%D1%91%D1%80%D0%BE%D1%87%D0%BA%D0%B0-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%BE%D0%B2/id1622633822",
      "storeId": 1622633822,
      "developer": "Пятёрочка",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправили ошибки и доработали приложение.",
        "en": "Resolved errors and refined the app."
      }
    },
    "aliexpress": {
      "version": "8.89.1",
      "date": "2026-09-22T19:04:35Z",
      "url": "https://apps.apple.com/ru/app/aliexpress-%D0%B2%D0%B0%D1%88-%D0%BC%D0%B0%D1%80%D0%BA%D0%B5%D1%82%D0%BF%D0%BB%D0%B5%D0%B9%D1%81/id1516453498",
      "storeId": 1516453498,
      "developer": "Alibaba.com (RU), LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправили ошибки, чтобы покупки в приложении стали удобнее.",
        "en": "Resolved errors to make shopping in the app more convenient."
      }
    },
    "yandexfood": {
      "version": "26.37.0",
      "date": "2026-09-21T08:15:36Z",
      "url": "https://apps.apple.com/ru/app/%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D0%B5%D0%B4%D0%B0-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D0%B5%D0%B4%D1%8B/id1078986931",
      "storeId": 1078986931,
      "developer": "Mikromobilnost doo",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправили ошибки и доработали приложение.",
        "en": "Resolved errors and refined the app."
      }
    },
    "dns": {
      "version": "2.4.0",
      "date": "2026-09-21T00:10:03Z",
      "url": "https://apps.apple.com/ru/app/dns-shop/id6450819523",
      "storeId": 6450819523,
      "developer": "DNS Retail, LLC.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Добавили оплату цифровыми рублями. Для неё нужен заранее открытый счёт цифрового рубля.\n• Обновили кнопку «Сообщить о проблеме» для активных и выкупленных заказов.",
        "en": "• Digital-ruble payments are available with a digital-ruble account opened in advance.\n• Updated the problem-reporting button for active and completed orders."
      }
    },
    "sportmaster": {
      "version": "4.102.0",
      "date": "2026-08-31T19:02:20Z",
      "url": "https://apps.apple.com/ru/app/%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D1%80-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%BD%D0%B5%D1%82-%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD/id1081336048",
      "storeId": 1081336048,
      "developer": "ООО \"Спортмастер\"",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Улучшили скорость, стабильность и удобство приложения.",
        "en": "Improved app speed, stability and ease of use."
      }
    },
    "fixprice": {
      "version": "4.29.0",
      "date": "2026-09-10T03:33:27Z",
      "url": "https://apps.apple.com/ru/app/fix-price-%D0%B4%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BA%D0%B0-%D1%81%D0%B0%D0%BC%D0%BE%D0%B2%D1%8B%D0%B2%D0%BE%D0%B7/id1460007771",
      "storeId": 1460007771,
      "developer": "FixPrice Russia",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Появилась подписка с дополнительными преимуществами и бонусами. Доступна пользователям в России.",
        "en": "A subscription adds benefits and bonuses for users in Russia."
      }
    },
    "wink": {
      "version": "2026.17.1",
      "date": "2026-09-11T18:04:16Z",
      "url": "https://apps.apple.com/ru/app/wink-%D0%BA%D0%B8%D0%BD%D0%BE-%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B-%D0%B8-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B/id1294366633",
      "storeId": 1294366633,
      "developer": "RESTRIM MEDIA, OOO",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "В плеере можно сообщить о неверной серии или неработающем телеканале. Также указаны общие исправления.",
        "en": "The player gains reporting for an incorrect episode or a channel that will not play, alongside general corrections."
      }
    },
    "start": {
      "version": "6.25.0",
      "date": "2026-09-14T07:36:37Z",
      "url": "https://apps.apple.com/ru/app/start-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80/id1273218458",
      "storeId": 1273218458,
      "developer": "Start.Ru LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "В каталоге — «Холоп 3» с Милошем Биковичем, «Холод» с Любовью Аксёновой и второй сезон «Олдскула». Обновляйте приложение и выбирайте, что посмотреть.",
        "en": "Find Kholop 3 with Miloš Biković, Kholod with Lyubov Aksyonova and season two of Oldskul in the catalogue. Update the app and choose your next watch."
      }
    },
    "ivi": {
      "version": "26.9.4",
      "date": "2026-09-21T07:57:26Z",
      "url": "https://apps.apple.com/ru/app/%D0%B8%D0%B2%D0%B8-%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D1%8B-%D0%B8-%D1%81%D0%B5%D1%80%D0%B8%D0%B0%D0%BB%D1%8B/id455705533",
      "storeId": 455705533,
      "developer": "Ivi.ru LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Смотрите новые выпуски шоу «Форт. Возвращение легенды», продолжение «Роз и грехов» и семейную комедию «На деревню дедушке 2».",
        "en": "Watch new episodes of Fort: Return of the Legend, more of Roses and Sins, and the family comedy Na Derevnyu Dedushke 2."
      }
    },
    "yandexalice": {
      "version": "26.8.7.449",
      "date": "2026-09-24T08:44:57Z",
      "url": "https://apps.apple.com/ru/app/%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81-%D1%81-%D0%B0%D0%BB%D0%B8%D1%81%D0%BE%D0%B9-ai/id1050704155",
      "storeId": 1050704155,
      "developer": "Direct Cursus Computer Systems Trading",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправили несколько небольших ошибок для более стабильной работы.",
        "en": "Resolved several small issues to improve stability."
      }
    },
    "nicegram": {
      "version": "2.6.1",
      "date": "2026-09-04T10:28:14Z",
      "url": "https://apps.apple.com/us/app/nicegram-ai-for-telegram-x/id1608870673",
      "storeId": 1608870673,
      "developer": "Appvillis",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Повышена стабильность приложения.",
        "en": "Improved app stability."
      }
    },
    "capcut": {
      "version": "19.6.0",
      "date": "2026-09-21T05:13:42Z",
      "url": "https://apps.apple.com/us/app/capcut-photo-video-editor/id1500855883",
      "storeId": 1500855883,
      "developer": "Bytedance Pte. Ltd",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены известные проблемы и доработана обрезка видео.",
        "en": "Known issues have been addressed, with refinements to video trimming."
      }
    },
    "russianpost": {
      "version": "7.8.6",
      "date": "2026-09-23T11:52:27Z",
      "url": "https://apps.apple.com/ru/app/%D0%BF%D0%BE%D1%87%D1%82%D0%B0-%D1%80%D0%BE%D1%81%D1%81%D0%B8%D0%B8/id771700826",
      "storeId": 771700826,
      "developer": "Russian Post",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Данные недействительного удостоверения личности можно обновить через Госуслуги прямо в приложении. Исправлены ошибки, доработан интерфейс и повышена стабильность.",
        "en": "Update an expired identity document through Gosuslugi inside the app. Errors have been corrected, the interface refined and stability improved."
      }
    },
    "genshin": {
      "version": "7.1.0",
      "date": "2026-09-22T21:46:08Z",
      "url": "https://apps.apple.com/us/app/genshin-impact-6th-anniversary/id1517783697",
      "storeId": 1517783697,
      "developer": "COGNOSPHERE PTE. LTD.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Персонажи: Vesna и Vodyanitsa.\n• Новые задания Архонтов.\n• События с наградами Tabletop Troupe и Rainbow’s End, а также Silverwing in Pursuit of the Moon.\n• Оружие Beyond the Chrysalis и Hymn of the Maelstrom.\n• Противник Guardian Blade of Drifting Snow.\n• В Miliastra Wonderland — образы Manekin и новое лобби.",
        "en": "• Vesna and Vodyanitsa join the characters.\n• Continue with additional Archon quests.\n• Reward events include Tabletop Troupe and Rainbow’s End; Silverwing in Pursuit of the Moon also arrives.\n• Weapons: Beyond the Chrysalis and Hymn of the Maelstrom.\n• Face Guardian Blade of Drifting Snow.\n• Miliastra Wonderland gains Manekin cosmetics and a lobby."
      }
    },
    "mytalkingtom": {
      "version": "26.4.3",
      "date": "2026-09-11T07:15:57Z",
      "url": "https://apps.apple.com/us/app/my-talking-tom-friends/id1473424857",
      "storeId": 1473424857,
      "developer": "Outfit7 Limited",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и внесены небольшие улучшения игрового процесса.",
        "en": "Resolved errors and made small gameplay refinements."
      }
    },
    "tocakitchen": {
      "version": "1.140 MOD",
      "date": "2026-10-05T07:09:22Z",
      "url": "",
      "storeId": null,
      "developer": "Play Piknik (MOD build)",
      "checkedAt": "2026-10-19",
      "text": {
        "ru": "• Хэллоуин-ивент уже активен — платный пакет Strange Masquerade полностью открыт.\n• Все 10 хэллоуинских подарков с почты сразу в инвентаре, собирать не надо.\n• Разблокированы все 8 новых украшений в Home Designer.\n• В креаторе персонажей открыты новые волосы, детали лица и аксессуары — всё без ограничений.\n• Донат-магазин по-прежнему отключён, покупки обходить не нужно.",
        "en": "• Halloween event is already active — the paid Strange Masquerade Pack is fully unlocked.\n• All 10 Halloween gifts from the Post Office are already in your inventory, no need to collect.\n• All 8 new decoration items in Home Designer are unlocked.\n• In the Character Creator, new hair, facial details and accessories are unlocked for everyone.\n• In-app purchase store stays disabled, no workarounds needed."
      }
    },
    "freefire": {
      "version": "1.132.1",
      "date": "2026-09-16T03:30:15Z",
      "url": "https://apps.apple.com/us/app/free-fire-x-naruto-shippuden/id1300146617",
      "storeId": 1300146617,
      "developer": "GARENA INTERNATIONAL I PRIVATE LIMITED",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Nine Tails Strikes: захватывайте Sharingan и выбирайте область для удара.\n• Получайте свитки ниндзюцу в BR и через Cyber Airdrops в CS.\n• Исследуйте Hidden Leaf Village и Ninjutsu Academy.\n• Используйте кунаи и возвращайте союзников в бой с помощью Reanimation на точках возрождения.",
        "en": "• In Nine Tails Strikes, capture Sharingan and select an area to strike.\n• Obtain ninjutsu scrolls in BR or through Cyber Airdrops in CS.\n• Explore Hidden Leaf Village and Ninjutsu Academy.\n• Use kunai and bring teammates back with Reanimation at revival points."
      }
    },
    "roblox": {
      "version": "2.739.687",
      "date": "2026-09-16T17:28:39Z",
      "url": "https://apps.apple.com/us/app/roblox/id431946152",
      "storeId": 431946152,
      "developer": "Roblox Corporation",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки, повышены скорость и надёжность работы.",
        "en": "Resolved errors and improved speed and reliability."
      }
    },
    "geodash": {
      "version": "2.21.7",
      "date": "2026-01-29T21:31:27Z",
      "url": "https://apps.apple.com/us/app/geometry-dash-meltdown/id1045901853",
      "storeId": 1045901853,
      "developer": "RobTop Games AB",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлены более точные варианты обработки нажатий Click Between и On Steps. Также внесены небольшие исправления.",
        "en": "Click Between and On Steps input options offer finer timing control, accompanied by smaller corrections."
      }
    },
    "plagueinc": {
      "version": "1.25.3",
      "date": "2026-09-06T00:06:13Z",
      "url": "https://apps.apple.com/us/app/plague-inc/id525818839",
      "storeId": 525818839,
      "developer": "Ndemic Creations",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Обновлена модель мира на основе актуальных данных Всемирного банка. В симуляции учтён дальнейший рост населения.",
        "en": "The world simulation now uses updated World Bank data, including further population growth."
      }
    },
    "fnaf1": {
      "version": "2.0.5",
      "date": "2024-03-07T19:42:44Z",
      "url": "https://apps.apple.com/us/app/five-nights-at-freddys/id912536422",
      "storeId": 912536422,
      "developer": "CLICKTEAM LLC USA",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "fnaf2": {
      "version": "2.0.5",
      "date": "2023-10-16T17:21:24Z",
      "url": "https://apps.apple.com/us/app/five-nights-at-freddys-2/id941143328",
      "storeId": 941143328,
      "developer": "CLICKTEAM LLC USA",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Убрана короткая задержка надевания маски после опускания монитора. Также внесены небольшие исправления.",
        "en": "The short delay before putting on the mask after lowering the monitor has been removed, alongside minor corrections."
      }
    },
    "fnaf3": {
      "version": "2.0.3",
      "date": "2025-08-30T14:37:56Z",
      "url": "https://apps.apple.com/us/app/five-nights-at-freddys-3/id973482987",
      "storeId": 973482987,
      "developer": "CLICKTEAM LLC USA",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Возвращена исходная скорость поворота камеры в офисе; внесены небольшие исправления.",
        "en": "Office panning returns to its original speed, with additional minor corrections."
      }
    },
    "fnaf4": {
      "version": "2.0.2",
      "date": "2023-10-21T20:00:09Z",
      "url": "https://apps.apple.com/us/app/five-nights-at-freddys-4/id1023146677",
      "storeId": 1023146677,
      "developer": "CLICKTEAM LLC USA",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлено отображение Freddles и внесены небольшие доработки.",
        "en": "Freddles display issues have been corrected alongside smaller refinements."
      }
    },
    "minecraft": {
      "version": "26.51",
      "date": "2026-09-16T15:40:58Z",
      "url": "https://apps.apple.com/us/app/minecraft-play-with-friends/id479516143",
      "storeId": 479516143,
      "developer": "Mojang",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки в работе приложения.",
        "en": "Resolved issues affecting the app."
      }
    },
    "terraria": {
      "version": "1.4.5.8.1",
      "date": "2026-09-17T15:05:10Z",
      "url": "https://apps.apple.com/us/app/terraria/id640364616",
      "storeId": 640364616,
      "developer": "505 Games (US), Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены критические ошибки.",
        "en": "Critical issues have been resolved."
      }
    },
    "standoff2": {
      "version": "0.39.2",
      "date": "2026-07-10T09:00:26Z",
      "url": "https://apps.apple.com/us/app/standoff-2/id1359706682",
      "storeId": 1359706682,
      "developer": "AXLEBOLT LTD",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Событие Jumble Rumble!\n• Побеждайте в рейтинговых матчах и получайте ежедневные контейнеры со скинами.\n• Откройте 20 контейнеров события, чтобы забрать медаль.\n• Соберите все StatTrack-скины из предложений события и получите новую рамку.",
        "en": "Jumble Rumble has arrived!\n• Win ranked matches for daily skin containers.\n• Open twenty event containers to earn a medal.\n• Collect every StatTrack skin from the event offers to unlock a frame."
      }
    },
    "geodash2": {
      "version": "2.21.7",
      "date": "2026-01-29T22:32:49Z",
      "url": "https://apps.apple.com/us/app/geometry-dash-lite/id698255242",
      "storeId": 698255242,
      "developer": "RobTop Games AB",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Добавлены уровни Fingerdash и Deadlocked.\n• Настройки точности управления Click Between / On Steps.\n• Таблицы лидеров для Moons, Demons и User Coins.\n• Открываемые Gauntlets.\n• Улучшена сетевая работа и исправлены ошибки.",
        "en": "• Fingerdash and Deadlocked are available.\n• Fine-tune input with Click Between / On Steps.\n• Rankings now cover Moons, Demons and User Coins.\n• Unlock additional Gauntlets.\n• Refined networking and resolved errors."
      }
    },
    "clashofclans": {
      "version": "18.600.7",
      "date": "2026-09-24T07:35:28Z",
      "url": "https://apps.apple.com/us/app/clash-of-clans/id529479190",
      "storeId": 529479190,
      "developer": "Supercell",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Новые уровни Diggy и дополнительные усиления Monolith и Builder’s Huts для Town Hall 18.\n• Улучшено отображение юбилейных обликов Awesome Quest.\n• Исправлены ошибки Hero Journey.\n• Внесены доработки для удобства игры.",
        "en": "• Added Diggy levels and further Monolith and Builder’s Huts upgrades at Town Hall 18.\n• Refined Awesome Quest anniversary skin visuals.\n• Corrected Hero Journey issues.\n• Added usability refinements."
      }
    },
    "clashroyale": {
      "version": "16.402.12",
      "date": "2026-09-14T07:55:39Z",
      "url": "https://apps.apple.com/us/app/clash-royale/id1053012308",
      "storeId": 1053012308,
      "developer": "Supercell",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Новая карта Minion Giant.\n• Герой Ice Wizard создаёт снеговика, который замораживает ближайших врагов до своего уничтожения.\n• В Royale Shuffle колесо выбирает один из 12 режимов со случайной колодой.\n• Трёхмесячный сезон Merge Tactics с Super Troops.\n• Исправления и улучшения.",
        "en": "• Minion Giant joins the cards.\n• Ice Wizard creates a snowman that freezes nearby enemies until destroyed.\n• Royale Shuffle selects among twelve modes with a random deck.\n• Merge Tactics begins a three-month Super Troops season.\n• Corrections and refinements."
      }
    },
    "hayday": {
      "version": "1.72.86",
      "date": "2026-08-18T07:01:51Z",
      "url": "https://apps.apple.com/us/app/hay-day/id506627515",
      "storeId": 506627515,
      "developer": "Supercell",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Заказы грузовика можно выполнять без ожидания анимации штампа.\n• Указатели на чужих фермах помогают находить просьбы о помощи.\n• После завершения Farm Pass доступны дополнительные награды.\n• Добавлено подтверждение траты алмазов на открытие наград.\n• Исправлены ошибки.\n• В магазине — 10 бесплатных алмазов в течение четырёх дней после обновления.",
        "en": "• Fill truck orders without waiting for stamp animations.\n• Indicators help locate assistance requests on other farms.\n• Keep earning rewards after completing Farm Pass.\n• Diamond spending to unlock rewards now requires confirmation.\n• Errors have been corrected.\n• Claim ten complimentary shop diamonds during the four-day update offer."
      }
    },
    "boombeach": {
      "version": "63.202",
      "date": "2026-09-15T09:06:40Z",
      "url": "https://apps.apple.com/us/app/boom-beach-war-strategy-game/id672150402",
      "storeId": 672150402,
      "developer": "Supercell",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и доработана игра. Вскоре после обновления стартует Blitz: используйте своих лидеров, проходите всё более сложные уровни, получайте призы и соревнуйтесь в новой таблице результатов.",
        "en": "Errors have been corrected and the game refined. Blitz launches shortly after the update: use your leaders against increasingly difficult stages, earn prizes and compete in its leaderboard."
      }
    },
    "brawlstars": {
      "version": "69.252",
      "date": "2026-09-07T12:03:08Z",
      "url": "https://apps.apple.com/us/app/brawl-stars/id1229016807",
      "storeId": 1229016807,
      "developer": "Supercell",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Новые бойцы: робот-учёный Cosmo и бариста Vince.\n• Mega Boss Duo — режим на 20 игроков.\n• Сотрудничество с Duolingo.\n• Загадка Brawl-O-Ween с воздушным шаром Гаса.\n• Сезоны Brawl Pass: Royal Academy и Brawl-O-Ween.",
        "en": "• Meet Cosmo, a robot scientist, and Vince, a barista.\n• Mega Boss Duo supports twenty players.\n• A Duolingo collaboration arrives.\n• Investigate a Brawl-O-Ween mystery with Gus’s balloon.\n• Brawl Pass seasons: Royal Academy and Brawl-O-Ween."
      }
    },
    "pubgmobile": {
      "version": "4.6.0",
      "date": "2026-09-09T10:00:58Z",
      "url": "https://apps.apple.com/us/app/pubg-mobile/id1330123889",
      "storeId": 1330123889,
      "developer": "Tencent Mobile International Limited",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Midnight Hunters: охотники против вампиров!\n• В Bloodline Awakening побеждённые игроки могут вернуться вампирами.\n• Предметы Silvermoon Chain, Twilight Bat Wings и Blood Pact.\n• Переработаны четыре городские зоны; добавлены Hunters Guild, Clock Tower и Scream Crates.\n• PvE-противники Bloodwalker и Vampire Elder, щиты и добивания.\n• Brainrot в World of Wonder получает оформление Halloweeks.\n• В сентябре временно возвращается Ocean Odyssey.",
        "en": "Midnight Hunters brings a vampire-versus-hunter battle.\n• Bloodline Awakening lets defeated players return as vampires.\n• Equipment includes Silvermoon Chain, Twilight Bat Wings and Blood Pact.\n• Four urban zones are transformed, with Hunters Guild, Clock Tower and Scream Crates.\n• Face Bloodwalker and Vampire Elder with shields and finishers.\n• World of Wonder’s Brainrot gets Halloweeks styling.\n• Ocean Odyssey returns temporarily in September."
      }
    },
    "codmobile": {
      "version": "1.0.57",
      "date": "2026-09-07T03:15:15Z",
      "url": "https://apps.apple.com/us/app/call-of-duty-mobile/id1287282214",
      "storeId": 1287282214,
      "developer": "Activision Publishing, Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Новый тематический сезон: 50 уровней наград Battle Pass, карты, персонажи, события и режимы. Исправлены ошибки и внесены технические улучшения.",
        "en": "A themed season brings fifty Battle Pass reward tiers, maps, characters, events and modes. Errors have been corrected alongside technical refinements."
      }
    },
    "candycrush": {
      "version": "1.337.0.2",
      "date": "2026-09-23T04:54:42Z",
      "url": "https://apps.apple.com/us/app/candy-crush-saga/id553834731",
      "storeId": 553834731,
      "developer": "King",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Новые уровни и возможности, исправления ошибок для более плавной игры. Обновления выходят каждую неделю.",
        "en": "Additional levels and features arrive with error corrections for smoother play. Updates continue each week."
      }
    },
    "subwaysurfers": {
      "version": "3.69.1",
      "date": "2026-09-23T06:57:04Z",
      "url": "https://apps.apple.com/us/app/subway-surfers/id512939461",
      "storeId": 512939461,
      "developer": "Sybo Games ApS",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Новый сезон в Буэнос-Айресе!\n• Откройте bbno$ в Showdown Challenge.\n• Встречайте мегаперсонажа Santi Grafito.\n• Получите Matilda в Season Hunt и её наряд Comic Core в Season Challenge.",
        "en": "The season heads to Buenos Aires!\n• Unlock bbno$ through Showdown Challenge.\n• Meet the Mega Character Santi Grafito.\n• Earn Matilda in Season Hunt and her Comic Core outfit through Season Challenge."
      }
    },
    "templerun2": {
      "version": "1.136.0",
      "date": "2026-09-17T16:12:49Z",
      "url": "https://apps.apple.com/us/app/temple-run-2/id572395608",
      "storeId": 572395608,
      "developer": "Imangi Studios, LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Новая карта Mount Olympus.\n• Hercules доступен в испытаниях с ограниченным временем.\n• Возвращаются Sigur Chronos Time Beard и Zhao Yun.\n• Глобальные задания с особыми наградами.",
        "en": "• Explore the Mount Olympus map.\n• Unlock Hercules through timed challenges.\n• Run as returning characters including Sigur Chronos Time Beard and Zhao Yun.\n• Earn special rewards in global challenges."
      }
    },
    "homescapes": {
      "version": "9.1.601",
      "date": "2026-09-17T00:52:40Z",
      "url": "https://apps.apple.com/us/app/homescapes-match-3-games/id1195621598",
      "storeId": 1195621598,
      "developer": "Playrix",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Dreamland: помогите Хлое преодолеть страхи, восстановить счастливые воспоминания и победить Короля кошмаров.\n• Treasure Hunt: отправляйтесь за сокровищами со Скотти и Хлоей и спасите владельца старого поместья.\n• Продолжается история TV Studio: тайны мэрии ставят отношения Артура и Эллен под угрозу.",
        "en": "• Dreamland: help Chloe confront her fears, recover happy memories and defeat the Nightmare King.\n• Treasure Hunt: join Scotty and Chloe to find treasure and rescue an old estate’s owner.\n• TV Studio continues as City Hall secrets threaten Arthur and Ellen’s relationship."
      }
    },
    "gardenscapes": {
      "version": "9.9.5",
      "date": "2026-09-25T08:31:24Z",
      "url": "https://apps.apple.com/us/app/gardenscapes/id1105855019",
      "storeId": 1105855019,
      "developer": "Playrix",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлено событие Polar Station Mystery: Рэйчел расследует исчезновение учёных и ищет выход из ледяной ловушки.",
        "en": "Polar Station Mystery follows Rachel investigating the scientists and trying to escape an icy trap."
      }
    },
    "township": {
      "version": "39.0.2",
      "date": "2026-09-17T07:12:34Z",
      "url": "https://apps.apple.com/us/app/township/id638689075",
      "storeId": 638689075,
      "developer": "Playrix",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Западный и хэллоуинский сезоны с наградами для города.\n• Помогите Ричарду и шерифу найти вора и вернуть украденную лошадь.\n• Раскройте с Ричардом и Эллен тайну опасных растений-мутантов.\n• Регаты на Бермудах и Гудзоне.\n• Элемент головоломки Stained Glass.\n• Здания Coworking Space и Ancient House.",
        "en": "• Western and Halloween seasons offer town rewards.\n• Help Richard and the sheriff catch a thief and recover a horse.\n• Investigate dangerous mutant plants with Richard and Ellen.\n• Regattas visit Bermuda and the Hudson.\n• Match-three gains Stained Glass.\n• Build Coworking Space and Ancient House."
      }
    },
    "coinmaster": {
      "version": "3.5.2712",
      "date": "2026-09-22T07:26:44Z",
      "url": "https://apps.apple.com/us/app/coin-master/id406889139",
      "storeId": 406889139,
      "developer": "Moon Active",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлен календарь ежедневных наград. Исправлены ошибки и улучшена производительность.",
        "en": "Collect rewards through the daily calendar. Errors have been corrected and performance improved."
      }
    },
    "asphalt9": {
      "version": "52.1.2",
      "date": "2026-07-29T09:16:52Z",
      "url": "https://apps.apple.com/us/app/asphalt-legends-racing-game/id805603214",
      "storeId": 805603214,
      "developer": "Gameloft",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Трасса Mt. Fuji и три новых сезона.\n• Десять машин, включая Nissan Skyline GT-R R34, Tushek Aeon R и Hennessey Venom GT.\n• JDM Turbofest с японскими автомобилями и новой музыкой.\n• Тематическое событие PAC-MAN.\n• Событие IMSA с управлением командой.",
        "en": "• Race on Mt. Fuji across three additional seasons.\n• Ten cars include Nissan Skyline GT-R R34, Tushek Aeon R and Hennessey Venom GT.\n• JDM Turbofest features Japanese cars and fresh music.\n• Join a PAC-MAN event.\n• IMSA brings a team-management challenge."
      }
    },
    "easportsfc": {
      "version": "28.0.01",
      "date": "2026-09-24T01:39:57Z",
      "url": "https://apps.apple.com/us/app/ea-sports-fc-soccer-mobile-27/id1094930513",
      "storeId": 1094930513,
      "developer": "Electronic Arts",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Сезон 27!\n• Game Plans: смена схемы по ходу матча, пять вариантов настроя и четыре сохранённые тактики.\n• Gauntlet: раунды с особыми целями и правилами, ограничением выступлений игроков, звёздами и наградами.\n• PlayStyles Incisive Through Pass и Dead Ball улучшают сквозные передачи и штрафные.\n• Обновлены комментарии на мексиканском испанском, индонезийском и тайском.\n• Добавлены празднования голов и обновлено оформление.",
        "en": "Season 27!\n• Game Plans offer in-match formation changes, five mentalities and four saved tactics.\n• Gauntlet rounds feature objectives, special rules, limited player appearances, stars and rewards.\n• Incisive Through Pass and Dead Ball PlayStyles enhance through-balls and free kicks.\n• Refreshed commentary covers Mexican Spanish, Indonesian and Thai.\n• Added goal celebrations and refreshed visuals."
      }
    },
    "eightballpool": {
      "version": "56.30.0",
      "date": "2026-09-21T08:33:58Z",
      "url": "https://apps.apple.com/us/app/8-ball-pool/id543186831",
      "storeId": 543186831,
      "developer": "Miniclip.com",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Поддерживайте друзей, наблюдайте за матчами и увеличивайте ежедневную серию.\nСобытия: 9 сентября — Grandmaster’s Gambit; 30 сентября — Flashback Crimson Moon; 7 октября — Moonlight Circus.",
        "en": "Cheer for friends, watch matches and build your daily streak.\nEvents: Grandmaster’s Gambit starts September 9, Flashback Crimson Moon September 30, and Moonlight Circus October 7."
      }
    },
    "honkaistarrail": {
      "version": "4.5.0",
      "date": "2026-08-25T22:03:08Z",
      "url": "https://apps.apple.com/us/app/honkai-star-rail/id1599719154",
      "storeId": 1599719154,
      "developer": "COGNOSPHERE PTE. LTD.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Персонажи Robin • Summeretto и Aventurine • Waveflair.\n• Задания Освоения и продолжения Освоения в Astropolis.\n• События Overdrive: Whirlwind Grand Prix и Minuscule Great Adventure.\n• Новые области и обновление Divergent Universe.\n• Ускорение диалогов.",
        "en": "• Robin • Summeretto and Aventurine • Waveflair join the characters.\n• Continue Trailblaze and Trailblaze Continuance missions in Astropolis.\n• Events include Overdrive: Whirlwind Grand Prix and Minuscule Great Adventure.\n• Explore additional areas and an updated Divergent Universe.\n• Speed up dialogue."
      }
    },
    "shadowfight3": {
      "version": "1.45.5",
      "date": "2026-08-24T10:28:08Z",
      "url": "https://apps.apple.com/us/app/shadow-fight-3-rpg-fighting/id964827011",
      "storeId": 964827011,
      "developer": "Nekki Limited",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Внесены технические улучшения и исправлены ошибки.",
        "en": "Technical refinements and error corrections."
      }
    },
    "amongus": {
      "version": "2026.18.0",
      "date": "2026-08-18T16:51:24Z",
      "url": "https://apps.apple.com/us/app/among-us/id1351168404",
      "storeId": 1351168404,
      "developer": "InnerSloth LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Новая роль Judge: выполняйте задания, чтобы менять решение об изгнании на собрании. Ошибка с выбором приведёт к изгнанию самого судьи.\n• Справка Match Info Guide показывает игроков, роли и настройки матча.\n• У Interrogate детектива появилась перезарядка после экстренных собраний.",
        "en": "• The Judge earns the ability to override an ejection by completing tasks. Choosing an innocent player ejects the Judge instead.\n• Match Info Guide shows players, roles and match settings.\n• Detective interrogation now has a cooldown following emergency meetings."
      }
    },
    "stumbleguys": {
      "version": "0.103",
      "date": "2026-09-24T09:18:13Z",
      "url": "https://apps.apple.com/us/app/stumble-guys/id1541153375",
      "storeId": 1541153375,
      "developer": "Scopely, Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Сезон Cursed Fair!\n• Способность Pollo Stick с тройным прыжком.\n• Возвращение Avatar.\n• Хэллоуинские облики и события.",
        "en": "Cursed Fair season!\n• Pollo Stick adds a triple jump.\n• Avatar returns.\n• Halloween cosmetics and events arrive."
      }
    },
    "bussimulator": {
      "version": "2.2.9",
      "date": "2026-05-22T16:17:05Z",
      "url": "https://apps.apple.com/us/app/bus-simulator-ultimate/id1461749632",
      "storeId": 1461749632,
      "developer": "Zuuks Games",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлен новый маршрут. Исправлены ошибки.",
        "en": "An additional route is available. Errors have been corrected."
      }
    },
    "blockcraft3d": {
      "version": "4.5.0",
      "date": "2026-09-21T12:37:45Z",
      "url": "https://apps.apple.com/us/app/block-craft-3d-building-games/id981633844",
      "storeId": 981633844,
      "developer": "Wildlife Studios",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и оптимизирована работа игры.",
        "en": "Resolved errors and optimised the game."
      }
    },
    "riseofkingdoms": {
      "version": "1.1.12.20",
      "date": "2026-09-22T08:21:38Z",
      "url": "https://apps.apple.com/us/app/rise-of-kingdoms/id1354260888",
      "storeId": 1354260888,
      "developer": "Lilith Games",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлены хэллоуинские события, Radiant Rivalry и Camp Treaty. Обновлены сезонные механики, а в таверне Season of Conquest появились пять командиров.",
        "en": "Halloween events, Radiant Rivalry and Camp Treaty arrive. Seasonal mechanics are updated, and five commanders join the Season of Conquest tavern."
      }
    },
    "stateofsurvival": {
      "version": "1.27.0",
      "date": "2026-09-23T11:17:53Z",
      "url": "https://apps.apple.com/us/app/state-of-survival-zombie-war/id1452474937",
      "storeId": 1452474937,
      "developer": "FunPlus International AG",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Празднуем годовщину игры!",
        "en": "Celebrate the game’s anniversary!"
      }
    },
    "sonicdash": {
      "version": "10.4.0",
      "date": "2026-09-24T15:21:32Z",
      "url": "https://apps.apple.com/us/app/sonic-dash-run/id582654048",
      "storeId": 582654048,
      "developer": "SEGA",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлен легендарный персонаж Bloodmoon Werehog.",
        "en": "Bloodmoon Werehog joins as a legendary character."
      }
    },
    "talkingtomgoldrun": {
      "version": "26.4.2",
      "date": "2026-08-25T13:00:35Z",
      "url": "https://apps.apple.com/us/app/talking-tom-gold-run/id1089336971",
      "storeId": 1089336971,
      "developer": "Outfit7 Limited",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлены активности со светящимися сферами и тематические наряды Тома и Анджелы; часть нарядов доступна через покупки внутри игры.",
        "en": "Glowing-orb activities and themed Tom and Angela outfits arrive; some outfits require in-app purchases."
      }
    },
    "mortalkombat": {
      "version": "7.3.0",
      "date": "2026-07-22T14:01:02Z",
      "url": "https://apps.apple.com/us/app/mortal-kombat/id949701151",
      "storeId": 949701151,
      "developer": "Warner Bros.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Бойцы MK II Movie Scorpion и MK1 Sub-Zero с огненными и ледяными способностями.\n• Сезоны Огня и Льда с испытаниями и наградами.\n• Модификаторы боёв в Klash Towers.\n• Вторая ступень Ascension для Hanzo Hasashi Scorpion, Klassic Sub-Zero и Klassic Shang Tsung; четвёртая ячейка снаряжения и Friendship.\n• Brutality для Homelander и Goro.\n• Усилены MK II Movie Kitana, Klassic Goro и Tigrar Fury Goro.\n• Исправлены ошибки.",
        "en": "• MK II Movie Scorpion and MK1 Sub-Zero bring fire and ice abilities.\n• Fire and Ice seasons include challenges and rewards.\n• Klash Towers gains battle modifiers.\n• Second-stage Ascension for Hanzo Hasashi Scorpion, Klassic Sub-Zero and Klassic Shang Tsung unlocks a fourth gear slot and Friendship.\n• Homelander and Goro gain Brutalities.\n• Strengthened MK II Movie Kitana, Klassic Goro and Tigrar Fury Goro.\n• Corrected errors."
      }
    },
    "farmheroessaga": {
      "version": "6.98.13",
      "date": "2026-09-14T03:03:32Z",
      "url": "https://apps.apple.com/us/app/farm-heroes-saga/id608206510",
      "storeId": 608206510,
      "developer": "King",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Доработаны уровни и исправлены ошибки.",
        "en": "Levels have been refined and errors corrected."
      }
    },
    "headball2": {
      "version": "1.646",
      "date": "2026-09-15T12:54:29Z",
      "url": "https://apps.apple.com/us/app/head-ball-2-soccer-game/id1193933380",
      "storeId": 1193933380,
      "developer": "MASOMO LIMITED",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и улучшена производительность.",
        "en": "Resolved errors and improved performance."
      }
    },
    "ludoking": {
      "version": "10.6.413",
      "date": "2026-09-17T16:40:42Z",
      "url": "https://apps.apple.com/us/app/ludo-king/id993090598",
      "storeId": 993090598,
      "developer": "GAMETION GLOBAL TECHNOLOGIES PTE LIMITED",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлен новый игровой режим.",
        "en": "An additional game mode is now available."
      }
    },
    "wordscapes": {
      "version": "3.13.70",
      "date": "2026-09-23T10:25:14Z",
      "url": "https://apps.apple.com/us/app/wordscapes-word-game/id1207472156",
      "storeId": 1207472156,
      "developer": "PeopleFun, Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки, повышена стабильность и оптимизирована работа игры.",
        "en": "Resolved errors, improved stability and optimised the game."
      }
    },
    "fruitninja": {
      "version": "3.97.1",
      "date": "2026-08-07T05:43:53Z",
      "url": "https://apps.apple.com/us/app/fruit-ninja/id403858572",
      "storeId": 403858572,
      "developer": "Halfbrick Studios",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Тема PAC-MAN!\n• Четыре клинка с особыми способностями и четыре додзё.\n• Новая система коллекций и аватары за испытания.\n• Четыре события: собирайте дубликаты для развития клинков и способностей.\nТема доступна в магазине и меню игровых тем.",
        "en": "PAC-MAN joins the game themes!\n• Four blades have special powers, alongside four dojos.\n• Collect items and earn avatars through challenges.\n• Four events provide duplicates to upgrade blades and their powers.\nFind the theme in the shop or theme menu."
      }
    },
    "pvz2": {
      "version": "3.18.0",
      "date": "2026-08-25T06:02:35Z",
      "url": "https://apps.apple.com/us/app/plants-vs-zombies/id893677096",
      "storeId": 893677096,
      "developer": "Electronic Arts",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Внесены небольшие внутренние улучшения для более комфортной игры.",
        "en": "Small internal refinements make playing more comfortable."
      }
    },
    "mytalkingangela2": {
      "version": "26.5.1",
      "date": "2026-09-23T07:50:31Z",
      "url": "https://apps.apple.com/us/app/my-talking-angela-2/id1536584509",
      "storeId": 1536584509,
      "developer": "Outfit7 Limited",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлен альбом наклеек в стиле Barbie: за его заполнение открывается бесплатный наряд. Также появились дополнительные тематические образы.",
        "en": "A Barbie-inspired sticker album unlocks an outfit on completion, alongside additional themed looks."
      }
    },
    "mergedragons": {
      "version": "13.15.1",
      "date": "2026-09-22T10:58:16Z",
      "url": "https://apps.apple.com/us/app/merge-dragons/id1208952944",
      "storeId": 1208952944,
      "developer": "Gram Games",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и улучшена производительность.",
        "en": "Resolved errors and improved performance."
      }
    },
    "wordswithfriends": {
      "version": "59.01.01",
      "date": "2026-08-27T19:07:04Z",
      "url": "https://apps.apple.com/us/app/classic-words-with-friends/id321916506",
      "storeId": 321916506,
      "developer": "Zynga Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки, игровой процесс стал плавнее.",
        "en": "Resolved errors for smoother play."
      }
    },
    "freefiremax": {
      "version": "2.132.1",
      "date": "2026-09-16T03:31:01Z",
      "url": "https://apps.apple.com/us/app/free-fire-max-x-naruto/id1480516829",
      "storeId": 1480516829,
      "developer": "GARENA INTERNATIONAL I PRIVATE LIMITED",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Nine Tails Strikes: захватывайте Sharingan и выбирайте область для удара.\n• Получайте свитки ниндзюцу в BR и через Cyber Airdrops в CS.\n• Исследуйте Hidden Leaf Village и Ninjutsu Academy.\n• Используйте кунаи и возвращайте союзников в бой с помощью Reanimation на точках возрождения.",
        "en": "• In Nine Tails Strikes, capture Sharingan and select an area to strike.\n• Obtain ninjutsu scrolls in BR or through Cyber Airdrops in CS.\n• Explore Hidden Leaf Village and Ninjutsu Academy.\n• Use kunai and bring teammates back with Reanimation at revival points."
      }
    },
    "discord": {
      "version": "346.0",
      "date": "2026-09-21T16:07:45Z",
      "url": "https://apps.apple.com/us/app/discord-talk-play-hang-out/id985746746",
      "storeId": 985746746,
      "developer": "Discord Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и улучшена производительность.",
        "en": "Resolved errors and improved performance."
      }
    },
    "spotify": {
      "version": "9.1.86",
      "date": "2026-09-23T17:49:27Z",
      "url": "https://apps.apple.com/us/app/spotify-music-and-podcasts/id324684580",
      "storeId": 324684580,
      "developer": "Spotify",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Продолжаем улучшать Spotify. Включите автоматические обновления, чтобы пользоваться актуальной версией.",
        "en": "Spotify continues to improve. Enable automatic updates to keep your app current."
      }
    },
    "pinterest": {
      "version": "14.37",
      "date": "2026-09-24T23:52:39Z",
      "url": "https://apps.apple.com/us/app/pinterest/id429047995",
      "storeId": 429047995,
      "developer": "Pinterest, Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и улучшена производительность.",
        "en": "Resolved errors and improved performance."
      }
    },
    "duolingo": {
      "version": "7.141.1",
      "date": "2026-09-23T13:42:13Z",
      "url": "https://apps.apple.com/us/app/duolingo-language-lessons/id570060128",
      "storeId": 570060128,
      "developer": "Duolingo",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправили ошибки, которые мешали заниматься.",
        "en": "Resolved errors that interrupted learning."
      }
    },
    "picsart": {
      "version": "30.8.2",
      "date": "2026-09-21T15:24:23Z",
      "url": "https://apps.apple.com/us/app/picsart-ai-photo-editor-video/id587366035",
      "storeId": 587366035,
      "developer": "PicsArt, Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправили несколько ошибок. Новые материалы, стикеры и шаблоны продолжают появляться между обновлениями приложения.",
        "en": "Resolved several errors. Fresh content, stickers and templates continue to arrive between app updates."
      }
    },
    "tiktok": {
      "version": "47.0.0",
      "date": "2026-09-22T02:34:27Z",
      "url": "https://apps.apple.com/us/app/tiktok-videos-shop-live/id835599320",
      "storeId": 835599320,
      "developer": "TikTok Ltd.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и улучшена производительность при публикации видео и фотографий.",
        "en": "Resolved errors and improved performance when posting videos and photos."
      }
    },
    "snapchat": {
      "version": "14.25.0.48",
      "date": "2026-09-23T11:01:36Z",
      "url": "https://apps.apple.com/us/app/snapchat/id447188370",
      "storeId": 447188370,
      "developer": "Snap, Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Небольшие доработки для более плавной работы приложения.",
        "en": "Small refinements help the app run more smoothly."
      }
    },
    "reddit": {
      "version": "2026.38.0",
      "date": "2026-09-22T15:47:58Z",
      "url": "https://apps.apple.com/us/app/reddit/id1064216828",
      "storeId": 1064216828,
      "developer": "REDDIT, INC.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и доработана работа приложения на iOS.",
        "en": "Resolved errors and refined the iOS app."
      }
    },
    "monumentvalley": {
      "version": "3.9.744",
      "date": "2025-05-08T06:08:24Z",
      "url": "https://apps.apple.com/us/app/monument-valley/id728293409",
      "storeId": 728293409,
      "developer": "ustwo games",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "monumentvalley2": {
      "version": "3.10.604",
      "date": "2025-09-04T07:22:24Z",
      "url": "https://apps.apple.com/us/app/monument-valley-2/id1187265767",
      "storeId": 1187265767,
      "developer": "ustwo games",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "theroomoldsins": {
      "version": "1.0.4",
      "date": "2018-02-05T09:29:01Z",
      "url": "https://apps.apple.com/us/app/the-room-old-sins/id1286676015",
      "storeId": 1286676015,
      "developer": "Fireproof Studios Limited",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки в работе приложения.",
        "en": "Resolved issues affecting the app."
      }
    },
    "theroomtwo": {
      "version": "1.0.5",
      "date": "2018-05-29T08:33:26Z",
      "url": "https://apps.apple.com/us/app/the-room-two/id667362389",
      "storeId": 667362389,
      "developer": "Fireproof Studios Limited",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки в работе приложения.",
        "en": "Resolved issues affecting the app."
      }
    },
    "theroomthree": {
      "version": "1.0.2",
      "date": "2018-06-26T08:56:57Z",
      "url": "https://apps.apple.com/us/app/the-room-three/id918054748",
      "storeId": 918054748,
      "developer": "Fireproof Studios Limited",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки в работе приложения.",
        "en": "Resolved issues affecting the app."
      }
    },
    "stardewvalley": {
      "version": "1.6.15.1",
      "date": "2026-03-19T00:31:54Z",
      "url": "https://apps.apple.com/us/app/stardew-valley/id1406710800",
      "storeId": 1406710800,
      "developer": "ConcernedApe",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Добавлены Game Center и рейтинги Junimo Kart и Skull Cavern.\n• Здания больше не исчезают при переносе, питомцы не меняют породу у Shrine of Illusions.\n• Устранён вылет при продаже с геймпадом.\n• Закрыты ошибки бесконечных денег и предметов.\n• Меню шитья больше не удаляет надетую одежду.\n• Исправлена загрузка некоторых сохранений 1.5.6 в версии 1.6.",
        "en": "• Added Game Center and Junimo Kart and Skull Cavern rankings.\n• Moving buildings no longer disappear; Shrine of Illusions no longer changes pet breeds.\n• Fixed controller-related shop crashes.\n• Closed unlimited-money and item exploits.\n• Tailoring no longer deletes equipped clothes.\n• Restored loading for affected 1.5.6 saves in version 1.6."
      }
    },
    "bloonstd6": {
      "version": "56.3",
      "date": "2026-08-20T23:16:41Z",
      "url": "https://apps.apple.com/us/app/bloons-td-6/id1118115766",
      "storeId": 1118115766,
      "developer": "Ninja Kiwi",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Обезьяна Skywarden с луком Stormbow.\n• Облик Decryptor Corvus.\n• Карта Ascent и предмет Portable Lake Pro.\n• Изменения баланса, доработки удобства и исправления ошибок.",
        "en": "• Skywarden arrives with the Stormbow.\n• Added the Decryptor Corvus skin.\n• Explore Ascent and use Portable Lake Pro.\n• Balance adjustments, usability refinements and error corrections."
      }
    },
    "kingdomrush": {
      "version": "6.4.22",
      "date": "2026-02-10T20:39:47Z",
      "url": "https://apps.apple.com/us/app/kingdom-rush-frontiers-td/id598581396",
      "storeId": 598581396,
      "developer": "Ironhide S.A.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "kingdomrushorigins": {
      "version": "6.4.22",
      "date": "2026-02-10T20:40:57Z",
      "url": "https://apps.apple.com/us/app/kingdom-rush-origins-td/id904737816",
      "storeId": 904737816,
      "developer": "Ironhide S.A.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "papersplease": {
      "version": "1.4.12",
      "date": "2023-07-17T08:16:59Z",
      "url": "https://apps.apple.com/us/app/papers-please/id935216956",
      "storeId": 935216956,
      "developer": "3909",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки.",
        "en": "Minor issues have been resolved."
      }
    },
    "florence": {
      "version": "1.0.5",
      "date": "2019-02-06T20:00:00Z",
      "url": "https://apps.apple.com/us/app/florence/id1297430468",
      "storeId": 1297430468,
      "developer": "Annapurna Interactive",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлена поддержка дополнительных международных магазинов.",
        "en": "Support has been extended to additional international storefronts."
      }
    },
    "minimetro": {
      "version": "1.55",
      "date": "2025-09-15T22:01:39Z",
      "url": "https://apps.apple.com/us/app/mini-metro/id837860959",
      "storeId": 837860959,
      "developer": "Dinosaur Polo Club",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Подготовлена внутренняя поддержка Apple Games. Игровой процесс остался прежним.",
        "en": "Internal support for Apple Games has been prepared. Gameplay remains unchanged."
      }
    },
    "gtasanandreas": {
      "version": "2.2.21",
      "date": "2025-05-29T10:05:55Z",
      "url": "https://apps.apple.com/us/app/grand-theft-auto-san-andreas/id763692274",
      "storeId": 763692274,
      "developer": "Rockstar Games",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "gtavicecity": {
      "version": "1.8",
      "date": "2019-05-21T15:06:43Z",
      "url": "https://apps.apple.com/us/app/grand-theft-auto-vice-city/id578448682",
      "storeId": 578448682,
      "developer": "Rockstar Games",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлено воспроизведение пользовательских плейлистов на радиостанции MIXTAPE.",
        "en": "Custom-playlist playback on the MIXTAPE radio station has been repaired."
      }
    },
    "gta3": {
      "version": "1.5",
      "date": "2019-06-04T21:39:40Z",
      "url": "https://apps.apple.com/us/app/grand-theft-auto-iii/id479662730",
      "storeId": 479662730,
      "developer": "Rockstar Games",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлена полноэкранная поддержка iPhone X/XS и iPad Pro. Также внесены общие исправления.",
        "en": "Fullscreen support is added for iPhone X/XS and iPad Pro, together with general corrections."
      }
    },
    "badland": {
      "version": "3.4.4",
      "date": "2022-02-24T12:08:01Z",
      "url": "https://apps.apple.com/us/app/badland/id535176909",
      "storeId": 535176909,
      "developer": "HypeHype Oy",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены вылеты на новых версиях iOS и устройствах.",
        "en": "Resolved crashes on newer iOS versions and devices."
      }
    },
    "leosfortune": {
      "version": "1.0.15",
      "date": "2022-11-29T08:17:09Z",
      "url": "https://apps.apple.com/us/app/leos-fortune/id830544402",
      "storeId": 830544402,
      "developer": "1337 & Senri LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Добавлена поддержка семейства iPhone 14.\n• Улучшена производительность в режиме 120 Гц.\n• Исправлены небольшие ошибки.",
        "en": "• Added compatibility with the iPhone 14 family.\n• Improved performance at 120 Hz.\n• Resolved small issues."
      }
    },
    "oceanhorn": {
      "version": "3.4",
      "date": "2019-10-18T17:28:30Z",
      "url": "https://apps.apple.com/us/app/oceanhorn/id708196645",
      "storeId": 708196645,
      "developer": "FDG Entertainment GmbH & Co.KG",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Улучшены графика и производительность на новых устройствах, включая модели 2019 года.",
        "en": "Improved graphics and performance on newer hardware, including 2019 models."
      }
    },
    "dontstarvepocket": {
      "version": "1.47",
      "date": "2022-06-29T15:11:08Z",
      "url": "https://apps.apple.com/us/app/dont-starve-pocket-edition/id1012298403",
      "storeId": 1012298403,
      "developer": "Klei",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлена потеря отклика интерфейса после использования инвентаря.",
        "en": "The interface no longer becomes unresponsive after using the inventory."
      }
    },
    "wheresmywater": {
      "version": "1.18.9",
      "date": "2023-07-06T18:14:08Z",
      "url": "https://apps.apple.com/us/app/wheres-my-water/id449735650",
      "storeId": 449735650,
      "developer": "Disney",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки в работе приложения.",
        "en": "Resolved issues affecting the app."
      }
    },
    "thiswarofmine": {
      "version": "1.8.1",
      "date": "2025-12-18T11:29:15Z",
      "url": "https://apps.apple.com/us/app/this-war-of-mine/id982175678",
      "storeId": 982175678,
      "developer": "11 bit studios s.a.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Доработаны производительность, разрешения экрана и совместимость с устройствами, включая iPhone 17.",
        "en": "Performance, display resolutions and device compatibility are revised, including support for iPhone 17 models."
      }
    },
    "altoodyssey": {
      "version": "1.3.0",
      "date": "2023-02-16T15:17:43Z",
      "url": "https://apps.apple.com/us/app/altos-odyssey/id1182456409",
      "storeId": 1182456409,
      "developer": "Snowman",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Внесены улучшения интерфейса и исправлены небольшие ошибки его отображения и работы.",
        "en": "Interface refinements and small UI corrections are included."
      }
    },
    "altoadventure": {
      "version": "1.8.1",
      "date": "2026-01-26T10:25:27Z",
      "url": "https://apps.apple.com/us/app/altos-adventure/id950812012",
      "storeId": 950812012,
      "developer": "Snowman",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Внесены небольшие внутренние улучшения для более комфортной игры.",
        "en": "Small internal refinements make playing more comfortable."
      }
    },
    "reignsgot": {
      "version": "1.15",
      "date": "2019-04-11T18:19:50Z",
      "url": "https://apps.apple.com/us/app/reigns-game-of-thrones/id1342309192",
      "storeId": 1342309192,
      "developer": "Devolver",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлено путешествие к Стене с Белыми ходоками и 100 бесплатных карт. Также исправлены тексты.",
        "en": "An encounter with the White Walkers at the Wall adds one hundred free cards, alongside text corrections."
      }
    },
    "babaisyou": {
      "version": "1.11",
      "date": "2026-02-10T13:17:35Z",
      "url": "https://apps.apple.com/us/app/baba-is-you/id1517281887",
      "storeId": 1517281887,
      "developer": "Hempuli",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки интерфейса, связанные с облачной синхронизацией.",
        "en": "Interface issues involving cloud synchronisation have been corrected."
      }
    },
    "implosion": {
      "version": "1.5.13",
      "date": "2026-06-25T04:20:12Z",
      "url": "https://apps.apple.com/us/app/implosion-never-lose-hope/id870322730",
      "storeId": 870322730,
      "developer": "Rayark International Limited",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Обновлён движок и исправлены проблемы с облачными сохранениями.",
        "en": "The engine is upgraded and cloud-save issues are addressed."
      }
    },
    "transistor": {
      "version": "2.0",
      "date": "2018-04-05T15:58:28Z",
      "url": "https://apps.apple.com/us/app/transistor/id948857526",
      "storeId": 948857526,
      "developer": "Supergiant Games, LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Улучшена поддержка iPhone X и iPad Pro. Также внесены исправления и общие доработки.",
        "en": "Support for iPhone X and iPad Pro is refined alongside corrections and general improvements."
      }
    },
    "oldmansjourney": {
      "version": "1.22",
      "date": "2025-11-26T17:43:16Z",
      "url": "https://apps.apple.com/us/app/old-mans-journey/id1204902987",
      "storeId": 1204902987,
      "developer": "Broken Rules",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Музыку и эффекты теперь можно включать отдельно. Исправлены небольшие визуальные ошибки и внесены технические улучшения безопасности.",
        "en": "Music and effects can be toggled separately. Small visual defects and internal security details are also addressed."
      }
    },
    "gorogoa": {
      "version": "1.1.2",
      "date": "2019-01-23T20:33:12Z",
      "url": "https://apps.apple.com/us/app/gorogoa/id1269225754",
      "storeId": 1269225754,
      "developer": "Annapurna Interactive",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и улучшена производительность.",
        "en": "Resolved errors and improved performance."
      }
    },
    "framed": {
      "version": "1.31",
      "date": "2018-09-27T23:19:20Z",
      "url": "https://apps.apple.com/us/app/framed/id886565180",
      "storeId": 886565180,
      "developer": "Loveshack",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлена работа игры на iPhone XS и iPhone XS Max.",
        "en": "Resolved an issue affecting iPhone XS and iPhone XS Max."
      }
    },
    "hyperlightdrifter": {
      "version": "1.1.7",
      "date": "2021-10-30T15:56:55Z",
      "url": "https://apps.apple.com/us/app/hyper-light-drifter/id1453875289",
      "storeId": 1453875289,
      "developer": "Fictions",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Улучшена поддержка экранов с частотой 120 Гц на iPhone и iPad.",
        "en": "Improved support for 120 Hz displays on iPhone and iPad."
      }
    },
    "kingdomtwocrowns": {
      "version": "2.4.0",
      "date": "2026-04-29T14:03:35Z",
      "url": "https://apps.apple.com/us/app/kingdom-two-crowns/id1477991646",
      "storeId": 1477991646,
      "developer": "Raw Fury",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Сезонное событие The Spring Edict: получите постоянную косметическую награду для правителя. Требуется интернет.\n• Ускорены сражения с большим количеством бойцов.\n• Устранена редкая бесконечная загрузка.\n• Нанятые через пекарни крестьяне больше не удерживают первую полученную монету.\n• Исправлены небольшие ошибки.",
        "en": "• Join The Spring Edict online to earn a permanent cosmetic for your ruler.\n• Large battles run better.\n• Resolved a rare loading loop.\n• Peasants recruited through bakeries no longer keep their first coin.\n• Corrected small issues."
      }
    },
    "downwell": {
      "version": "1.0.72",
      "date": "2020-12-22T05:14:23Z",
      "url": "https://apps.apple.com/us/app/downwell/id1032708262",
      "storeId": 1032708262,
      "developer": "Devolver",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлен сбой, из-за которого игра закрывалась незадолго до завершения.",
        "en": "A crash occurring shortly before the end of the game has been repaired."
      }
    },
    "procreatepocket": {
      "version": "4.0.19",
      "date": "2026-09-20T23:03:40Z",
      "url": "https://apps.apple.com/us/app/procreate-pocket/id916366645",
      "storeId": 916366645,
      "developer": "Savage Interactive Pty Ltd",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Улучшена совместимость с поддерживаемыми устройствами и версиями системы.",
        "en": "Refined compatibility across supported devices and operating systems."
      }
    },
    "lumafusion": {
      "version": "5.5.2",
      "date": "2026-08-13T14:44:41Z",
      "url": "https://apps.apple.com/us/app/lumafusion/id1062022008",
      "storeId": 1062022008,
      "developer": "Luma Touch LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• PaintX можно снова попробовать бесплатно в течение семи дней.\n• Исправлено двойное нажатие на пресет PaintX.\n• Устранены повторные входы в Dropbox, Replay и Frame.io.\n• Исправлены проблемы с озвучкой и аудиофайлами на будущих версиях системы.\n• Устранён вылет при реверсе короткого клипа.\n• Улучшены стабильность и производительность.",
        "en": "• Previous PaintX trial users can try another seven days.\n• Corrected double-tapping a PaintX preset.\n• Resolved repeated Dropbox, Replay and Frame.io sign-ins.\n• Corrected voiceover and audio-file issues on upcoming operating systems.\n• Fixed crashes when reversing short clips.\n• Improved stability and performance."
      }
    },
    "pixelmatorclassic": {
      "version": "3.1.18",
      "date": "2026-08-25T17:06:40Z",
      "url": "https://apps.apple.com/us/app/pixelmator-classic-ios/id924695435",
      "storeId": 924695435,
      "developer": "Apple",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "goodnotes": {
      "version": "7.1.24",
      "date": "2026-09-21T09:41:41Z",
      "url": "https://apps.apple.com/us/app/goodnotes-ai-notes-docs-pdf/id1444383602",
      "storeId": 1444383602,
      "developer": "Goodnotes Limited",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• В Pro появились напоминания календаря Outlook.\n• Подсветка текста в блоках, стикерах и фигурах сохраняется при редактировании.\n• Усилена защита заблокированных документов при переносе и экспорте.\n• Исправлены ссылки, комментарии, форматирование и вставка текста.\n• Доработаны отображение интерфейса и Handwriting Restyle.\n• В Education исправлена загрузка образцов уроков и упрощено переключение представлений работ.\n• Исправлена загрузка цен в Marketplace и повышена стабильность.",
        "en": "• Pro adds Outlook calendar reminders.\n• Text highlighting in boxes, notes and shapes persists through edits.\n• Strengthened locked-document protection during moves and exports.\n• Corrected sharing, comments, formatting and text insertion.\n• Refined interface rendering and Handwriting Restyle.\n• Education sample lessons load reliably and switching submission views is easier.\n• Corrected Marketplace price loading and improved stability."
      }
    },
    "notability": {
      "version": "16.12.3",
      "date": "2026-09-23T16:56:37Z",
      "url": "https://apps.apple.com/us/app/notability-ai-notes-planner/id360593530",
      "storeId": 360593530,
      "developer": "Ginger Labs",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Для Business добавлены командные шаблоны. Исправлены прокрутка при выделении текста и сбои стабильности.",
        "en": "Business gains team templates. Scrolling during text selection and stability issues are addressed."
      }
    },
    "figma": {
      "version": "26.36.0",
      "date": "2026-09-22T14:34:25Z",
      "url": "https://apps.apple.com/us/app/figma/id1152747299",
      "storeId": 1152747299,
      "developer": "Figma Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "chatgpt": {
      "version": "1.2026.258",
      "date": "2026-09-23T09:36:36Z",
      "url": "https://apps.apple.com/us/app/chatgpt/id6448311069",
      "storeId": 6448311069,
      "developer": "OpenAI OpCo, LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "deepseek": {
      "version": "2.5.2",
      "date": "2026-09-20T05:21:53Z",
      "url": "https://apps.apple.com/us/app/deepseek-ai-assistant/id6737597349",
      "storeId": 6737597349,
      "developer": "杭州深度求索人工智能基础技术研究有限公司",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки в работе приложения.",
        "en": "Resolved issues affecting the app."
      }
    },
    "claudeai": {
      "version": "1.260923.20",
      "date": "2026-09-24T22:09:38Z",
      "url": "https://apps.apple.com/us/app/claude-by-anthropic/id6473753684",
      "storeId": 6473753684,
      "developer": "Anthropic PBC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "mscopilot": {
      "version": "2.114.1",
      "date": "2026-09-21T04:08:42Z",
      "url": "https://apps.apple.com/us/app/microsoft-copilot/id541164041",
      "storeId": 541164041,
      "developer": "Microsoft Corporation",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Улучшены качество работы и производительность приложения.",
        "en": "Improved app quality and performance."
      }
    },
    "gemini": {
      "version": "1.2026.3770306",
      "date": "2026-09-23T14:55:51Z",
      "url": "https://apps.apple.com/us/app/google-gemini/id6477489729",
      "storeId": 6477489729,
      "developer": "Google",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Доработан интерфейс и исправлены ошибки.",
        "en": "Refined the interface and resolved errors."
      }
    },
    "perplexity": {
      "version": "26.37.0",
      "date": "2026-09-18T04:34:59Z",
      "url": "https://apps.apple.com/us/app/perplexity-ai-search-chat/id1668000334",
      "storeId": 1668000334,
      "developer": "Perplexity AI, Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "worldofgoo2": {
      "version": "1.0.1",
      "date": "2025-05-07T12:04:24Z",
      "url": "https://apps.apple.com/us/app/world-of-goo-2/id6503088710",
      "storeId": 6503088710,
      "developer": "2D BOY",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Обновлены данные магазина и исправлены ошибки.",
        "en": "Updated store information and resolved errors."
      }
    },
    "machinarium": {
      "version": "3.0.9",
      "date": "2023-10-05T09:08:25Z",
      "url": "https://apps.apple.com/us/app/machinarium/id459189186",
      "storeId": 459189186,
      "developer": "Amanita Design s.r.o.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлена поддержка геймпадов. Обновлены графическая и звуковая части с использованием Apple Metal и Core Audio.",
        "en": "Controller support is added, with graphics and audio updated to Apple Metal and Core Audio."
      }
    },
    "limbo": {
      "version": "1.2.6",
      "date": "2026-03-05T13:11:48Z",
      "url": "https://apps.apple.com/us/app/playdeads-limbo/id656951157",
      "storeId": 656951157,
      "developer": "Playdead",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "threes": {
      "version": "3.3",
      "date": "2025-06-03T20:07:13Z",
      "url": "https://apps.apple.com/us/app/threes/id779157948",
      "storeId": 779157948,
      "developer": "Sirvo LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлена таблица Last Score. Исправлена отправка рекордов в Game Center.",
        "en": "A Last Score leaderboard is added, and high-score submissions to Game Center are repaired."
      }
    },
    "deadcells": {
      "version": "3.5.9",
      "date": "2025-12-05T14:33:43Z",
      "url": "https://apps.apple.com/us/app/dead-cells/id1389752090",
      "storeId": 1389752090,
      "developer": "Playdigious",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены вылеты после Hand of the King и во время Queen, а также проблемы интерфейса, обработки управления и локализации.",
        "en": "Crashes after Hand of the King and during Queen are corrected, together with interface, input and localisation issues."
      }
    },
    "slayspire": {
      "version": "2.6.0",
      "date": "2025-08-05T02:01:59Z",
      "url": "https://apps.apple.com/us/app/slay-the-spire/id1491530147",
      "storeId": 1491530147,
      "developer": "Balor Games",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены игровые ошибки и отдельные переводы.",
        "en": "Corrected gameplay issues and selected translations."
      }
    },
    "brokensword5": {
      "version": "2.3.1",
      "date": "2019-10-08T23:16:58Z",
      "url": "https://apps.apple.com/us/app/broken-sword-5/id720656825",
      "storeId": 720656825,
      "developer": "Revolution",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Обновление совместимости с iOS 13.",
        "en": "Compatibility is updated for iOS 13."
      }
    },
    "yearwalk": {
      "version": "1.4",
      "date": "2018-11-09T21:18:33Z",
      "url": "https://apps.apple.com/us/app/year-walk/id555916407",
      "storeId": 555916407,
      "developer": "Simogo AB",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлена поддержка новых устройств.",
        "en": "Support has been extended to newer devices."
      }
    },
    "device6": {
      "version": "1.5",
      "date": "2020-10-26T20:55:03Z",
      "url": "https://apps.apple.com/us/app/device-6/id680366065",
      "storeId": 680366065,
      "developer": "Simogo AB",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и доработано отображение при разных соотношениях сторон экрана.",
        "en": "Error corrections are accompanied by adjustments for screen aspect ratios."
      }
    },
    "bridgeconstructor": {
      "version": "8.1",
      "date": "2026-01-20T09:39:26Z",
      "url": "https://apps.apple.com/us/app/bridge-constructor-portal/id1311353234",
      "storeId": 1311353234,
      "developer": "Headup GmbH",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки в работе приложения.",
        "en": "Resolved issues affecting the app."
      }
    },
    "danganronpa": {
      "version": "1.0.3",
      "date": "2022-07-19T04:17:29Z",
      "url": "https://apps.apple.com/us/app/danganronpa-trigger-happy-hav/id1502232038",
      "storeId": 1502232038,
      "developer": "Spike-Chunsoft CO, LTD.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки.",
        "en": "Minor issues have been resolved."
      }
    },
    "evoland": {
      "version": "1.6.3",
      "date": "2018-03-01T09:43:48Z",
      "url": "https://apps.apple.com/us/app/evoland/id946477821",
      "storeId": 946477821,
      "developer": "Playdigious",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена производительность.",
        "en": "Resolved small errors and improved performance."
      }
    },
    "gris": {
      "version": "1.5",
      "date": "2021-01-25T20:53:22Z",
      "url": "https://apps.apple.com/us/app/gris/id1445379072",
      "storeId": 1445379072,
      "developer": "Devolver",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Доработана поддержка игровых контроллеров.",
        "en": "Game-controller support receives refinements."
      }
    },
    "humanfallflat": {
      "version": "2.7",
      "date": "2026-09-24T15:02:04Z",
      "url": "https://apps.apple.com/us/app/human-fall-flat/id1438091392",
      "storeId": 1438091392,
      "developer": "505 Games (US), Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлен юбилейный уровень к десятилетию игры с переработанными знакомыми головоломками, секретами и видеоисториями разработки.",
        "en": "A tenth-anniversary level revisits familiar puzzles with secrets and behind-the-scenes development videos."
      }
    },
    "swordsworcery": {
      "version": "1.20",
      "date": "2023-11-16T06:17:36Z",
      "url": "https://apps.apple.com/us/app/superbrothers-s-s-ep-micro/id431166885",
      "storeId": 431166885,
      "developer": "Capybara Games Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Обновлена совместимость с системами и размерами экранов. Исправлен поворот экрана, дополнены истории и титры.",
        "en": "OS and display-size support is refreshed, a rotation problem is corrected, and histories and credits are expanded."
      }
    },
    "botanicula": {
      "version": "1.1.23",
      "date": "2022-12-01T17:42:31Z",
      "url": "https://apps.apple.com/us/app/botanicula/id853706620",
      "storeId": 853706620,
      "developer": "Amanita Design s.r.o.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "samorost3": {
      "version": "1.470.8",
      "date": "2023-10-30T11:33:54Z",
      "url": "https://apps.apple.com/us/app/samorost-3/id1121782467",
      "storeId": 1121782467,
      "developer": "Amanita Design s.r.o.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Внесены небольшие улучшения.",
        "en": "Small refinements throughout the game."
      }
    },
    "instagram": {
      "version": "448.0.0",
      "date": "2026-09-21T15:59:55Z",
      "url": "https://apps.apple.com/us/app/instagram/id389801252",
      "storeId": 389801252,
      "developer": "Instagram, Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Оптимизирована производительность и повышена стабильность.",
        "en": "Optimised performance and improved stability."
      }
    },
    "facebook": {
      "version": "580.0.0",
      "date": "2026-09-23T07:37:44Z",
      "url": "https://apps.apple.com/us/app/facebook/id284882215",
      "storeId": 284882215,
      "developer": "Meta Platforms, Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Устранены вылеты и ошибки, о которых сообщали пользователи. Приложение стало быстрее.",
        "en": "Resolved crashes and reported issues, and made the app faster."
      }
    },
    "linkedin": {
      "version": "9.1.575",
      "date": "2026-09-24T17:01:15Z",
      "url": "https://apps.apple.com/us/app/linkedin-community-network/id288429040",
      "storeId": 288429040,
      "developer": "LinkedIn Corporation",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и улучшены скорость и надёжность приложения.",
        "en": "Resolved errors and improved app speed and reliability."
      }
    },
    "lastdayonearth": {
      "version": "1.52.0",
      "date": "2026-09-16T07:53:09Z",
      "url": "https://apps.apple.com/us/app/last-day-on-earth-survival/id1241932094",
      "storeId": 1241932094,
      "developer": "Kefir",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Переработана Crooked Creek Farm. Добавлены воскрешение за монеты и возможность расчистить завалы Abandoned Factory за просмотр рекламы.",
        "en": "Crooked Creek Farm is revised. Coin-based resurrection and ad-supported debris clearing at the Abandoned Factory are introduced."
      }
    },
    "grimsoul": {
      "version": "8.4.1",
      "date": "2026-09-14T09:36:33Z",
      "url": "https://apps.apple.com/us/app/grim-soul-survival-magic-rpg/id1366215798",
      "storeId": 1366215798,
      "developer": "Brickworks Games",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Добавлены Monastery of the Dusk Flame, Elemental Forge, огненное оружие, свитки и Flaming Direwolf.",
        "en": "Monastery of the Dusk Flame, the Elemental Forge, fire weapons, scrolls and Flaming Direwolf are introduced."
      }
    },
    "whiteoutsurvival": {
      "version": "1.33.9",
      "date": "2026-08-17T06:55:59Z",
      "url": "https://apps.apple.com/us/app/whiteout-survival/id6443575749",
      "storeId": 6443575749,
      "developer": "Century Games Pte. Ltd.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Fire Crystal Age: профили жителей, Wish Station, магазин пожеланий и новые приказы.\n• Endless Trials: ежедневные одиночные бои с Windhowler, рейтинги и награды.\n• События Hero Ascension Training и Exclusive Gear Forge.\n• Вкладка Daily показывает прогресс ежедневных занятий.\n• Повышены пределы снаряжения и амулетов правителя на соответствующих этапах развития.\n• Улучшение мастерства снаряжения разделено на подэтапы без изменения общей стоимости.\n• В групповых чатах — до 200 участников.",
        "en": "• Fire Crystal Age adds survivor profiles, Wish Station, a wish shop and Chief Orders.\n• Endless Trials offers daily solo Windhowler battles, rankings and rewards.\n• Events: Hero Ascension Training and Exclusive Gear Forge.\n• A Daily tab tracks routine activities.\n• Raised Chief Gear and Charm caps at eligible progression stages.\n• Gear Mastery upgrades use sub-stages without changing total costs.\n• Group chats support two hundred members."
      }
    },
    "otpbank": {
      "version": "2.18.0",
      "date": "2026-09-11T14:18:28Z",
      "url": "https://apps.apple.com/ru/app/%D0%BE%D1%82%D0%BF-%D0%B1%D0%B0%D0%BD%D0%BA-%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD/id1483041733",
      "storeId": 1483041733,
      "developer": "OTP Bank Russia",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "В истории операций появились быстрые фильтры периода. Также упрощена подача заявки на кредитную карту.",
        "en": "Transaction history gains quick date-range filters, and the credit-card application process is simplified."
      }
    },
    "wibes": {
      "version": "1.55.0",
      "date": "2026-09-11T08:08:20Z",
      "url": "https://apps.apple.com/ru/app/wibes-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D1%82%D1%80%D0%B5%D0%BD%D0%B4%D1%8B-%D0%B8-%D1%88%D0%BE%D0%BF%D0%B8%D0%BD%D0%B3/id6739610878",
      "storeId": 6739610878,
      "developer": "Wildberries OOO",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "В сообщениях появились статусы отправки и прочтения, обозначенные одной и двумя галочками.",
        "en": "Message status now distinguishes sent and read using single and double check marks."
      }
    },
    "balatro": {
      "version": "1.3",
      "date": "2025-06-05T17:03:53Z",
      "url": "https://apps.apple.com/us/app/balatro/id6502453075",
      "storeId": 6502453075,
      "developer": "Playstack Ltd",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Обновлена информация на странице приложения.",
        "en": "Updated the information on the app listing."
      }
    },
    "wreckfest": {
      "version": "1.0.121",
      "date": "2026-04-23T17:18:09Z",
      "url": "https://apps.apple.com/us/app/wreckfest/id1592505377",
      "storeId": 1592505377,
      "developer": "THQ Nordic Mobile GmbH",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Переработана проверка сетевых разрешений для мультиплеера. Исправлены зависание при смене настроек контроллера и сохранение сенсорной схемы.",
        "en": "Multiplayer network-permission checks are revised. Controller-preset freezes and saving touch-control settings are addressed."
      }
    },
    "nomadsculpt": {
      "version": "2.8",
      "date": "2025-12-23T21:16:21Z",
      "url": "https://apps.apple.com/us/app/nomad-sculpt/id1519508653",
      "storeId": 1519508653,
      "developer": "Hexanomad",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Исправлены сбои импорта и экспорта USD, а также Boolean.\n• Блокировка группы теперь действует на вложенные объекты.\n• Исправлена регистрация повторного одиночного касания.\n• Упрощён сброс вида при разблокировке референса.\n• Исправлен режим трансформации заблокированного повёрнутого референса.",
        "en": "• Corrected USD import/export and Boolean crashes.\n• Locking a group also locks its children.\n• Fixed missed repeated single taps.\n• Simplified view reset when unlocking a reference.\n• Corrected transforms for locked, rotated references."
      }
    },
    "flstudiomobile": {
      "version": "4.10.19",
      "date": "2026-08-06T12:43:32Z",
      "url": "https://apps.apple.com/us/app/fl-studio-mobile/id432850619",
      "storeId": 432850619,
      "developer": "Image Line Software",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлен выбор неверного пресета в меню патчей SoundFont.",
        "en": "The SoundFont patch menu no longer selects the wrong preset."
      }
    },
    "goatsimulator3": {
      "version": "1.16.3",
      "date": "2026-02-24T09:01:37Z",
      "url": "https://apps.apple.com/us/app/goat-simulator-3/id1618202932",
      "storeId": 1618202932,
      "developer": "Coffee Stain Publishing",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и доработан игровой процесс. Весёлые безумства козла остались на месте!",
        "en": "Resolved errors and refined the game while keeping the goat’s playful chaos intact."
      }
    },
    "gridautosport": {
      "version": "1.10.4",
      "date": "2025-04-14T09:14:42Z",
      "url": "https://apps.apple.com/us/app/grid-autosport/id1179421849",
      "storeId": 1179421849,
      "developer": "Feral Interactive Ltd",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки.",
        "en": "Minor issues have been resolved."
      }
    },
    "brotatopremium": {
      "version": "1.3.255",
      "date": "2026-09-14T21:34:40Z",
      "url": "https://apps.apple.com/us/app/brotato-premium/id1668755109",
      "storeId": 1668755109,
      "developer": "Erabit Studios",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Фестиваль вина: 26 сентября — 12 октября, начало в 00:00 UTC. Исправлены ошибки и оптимизирована игра.",
        "en": "Wine Festival runs September 26–October 12, starting at 00:00 UTC. Errors have been corrected and the game optimised."
      }
    },
    "pocketcity2": {
      "version": "1.085",
      "date": "2025-02-04T15:25:45Z",
      "url": "https://apps.apple.com/us/app/pocket-city-2/id1533709428",
      "storeId": 1533709428,
      "developer": "Codebrew Games Inc.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и улучшена производительность.",
        "en": "Resolved errors and improved performance."
      }
    },
    "things3": {
      "version": "3.24.2",
      "date": "2026-09-22T11:02:19Z",
      "url": "https://apps.apple.com/us/app/things-3/id904237743",
      "storeId": 904237743,
      "developer": "Cultured Code GmbH & Co. KG",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Обновлены интеграции Siri, Spotlight и совместимость с iOS 27 и watchOS 27.\n• Добавлены варианты отсрочки уведомлений и высокий виджет.\n• Ускорены списки, Quick Find и выбор задач в Shortcuts.\n• Исправлены порядок тегов, описание повторяющихся проектов и чёрная тема.\n• Повышена читаемость виджета Siri на часах.\n• Исправлены переводы и вылет при удалении проекта через Shortcuts.",
        "en": "• Updated Siri and Spotlight integration and iOS 27/watchOS 27 compatibility.\n• Added snooze choices and a tall widget.\n• Accelerated lists, Quick Find and Shortcuts task selection.\n• Corrected tag ordering, repeating-project descriptions and the black theme.\n• Improved Siri watch-widget readability.\n• Corrected translations and crashes when deleting projects through Shortcuts."
      }
    },
    "ankimobile": {
      "version": "25.09",
      "date": "2025-09-08T15:11:50Z",
      "url": "https://apps.apple.com/us/app/ankimobile-flashcards/id373493387",
      "storeId": 373493387,
      "developer": "Anki Software, LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "• Согласована работа с настольной Anki 25.09.\n• В автоответе «Показать вопрос» появилась поддержка напоминания.\n• Режим повторения доступен через Safari для диагностики шаблонов.\n• Исправлена ложная ошибка при закрытии предпросмотра.",
        "en": "• Aligned behaviour with desktop Anki 25.09.\n• The automatic show-question action supports a reminder.\n• Safari can access the reviewer for template debugging.\n• Removed a false error when closing preview."
      }
    },
    "forest": {
      "version": "5.27.0",
      "date": "2026-09-21T06:26:47Z",
      "url": "https://apps.apple.com/us/app/forest-focus-for-productivity/id866450515",
      "storeId": 866450515,
      "developer": "SEEKRTECH CO., LTD.",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены ошибки и улучшена производительность.",
        "en": "Resolved errors and improved performance."
      }
    },
    "skyguide": {
      "version": "13.0.2",
      "date": "2026-09-23T16:51:25Z",
      "url": "https://apps.apple.com/us/app/sky-guide/id576588894",
      "storeId": 576588894,
      "developer": "Fifth Star Labs LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Уменьшен размер приложения, исправлены ошибки и улучшена производительность.\nВ ветке 13.0:\n• Поддержка iOS 27 и iPadOS 27.\n• Арабский, хинди, тайский, турецкий и украинский языки.\n• Обновлён лунный циферблат для Apple Watch и добавлен виджет Луны для iOS и iPadOS.",
        "en": "Reduced app size, corrected errors and improved performance.\nVersion 13.0 features:\n• iOS 27 and iPadOS 27 support.\n• Arabic, Hindi, Thai, Turkish and Ukrainian.\n• Updated Moon complication on Apple Watch and a Moon widget for iOS and iPadOS."
      }
    },
    "iawriter": {
      "version": "8.0.9",
      "date": "2026-09-25T05:01:21Z",
      "url": "https://apps.apple.com/us/app/ia-writer/id775737172",
      "storeId": 775737172,
      "developer": "Information Architects AG",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки.\nВозможности iA Writer 8:\n• Liquid Glass и значок, соответствующий настройкам системы.\n• Переход к заголовкам и файлам через Quick Search.\n• Command Palette для форматирования, экспорта и авторства.\n• Компактная библиотека без дат и отрывков текста; звёздочки избранных файлов.\n• Цвета авторов в меню Authorship.",
        "en": "Small issues have been corrected.\nFeatures from iA Writer 8:\n• Liquid Glass and an icon matching system settings.\n• Quick Search navigation to headings and files.\n• Command Palette for formatting, export and authorship.\n• Compact library browsing, with stars marking favourites.\n• Author colours in Authorship menus."
      }
    },
    "forscore": {
      "version": "15.2.2",
      "date": "2026-09-22T16:43:37Z",
      "url": "https://apps.apple.com/us/app/forscore/id363738376",
      "storeId": 363738376,
      "developer": "forScore, LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "alienisolation": {
      "version": "1.3.1",
      "date": "2024-05-09T10:42:01Z",
      "url": "https://apps.apple.com/us/app/alien-isolation/id1573029040",
      "storeId": 1573029040,
      "developer": "Feral Interactive Ltd",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Первые две миссии доступны для знакомства; полная игра и DLC открываются одной покупкой внутри приложения. Также внесены небольшие исправления.",
        "en": "The first two missions are available to try, with the full game and DLC unlocked through one in-app purchase. Minor corrections are included."
      }
    },
    "hitmanbloodmoney": {
      "version": "1.3",
      "date": "2025-06-05T10:12:01Z",
      "url": "https://apps.apple.com/us/app/hitman-blood-money-reprisal/id1631331207",
      "storeId": 1631331207,
      "developer": "Feral Interactive Ltd",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Первая миссия доступна бесплатно, полная игра открывается одной покупкой внутри приложения. Также внесены исправления и доработки.",
        "en": "The opening mission is free to try, with the full game unlocked through one in-app purchase. Corrections and refinements are included."
      }
    },
    "xcom2": {
      "version": "1.6.1",
      "date": "2026-07-02T08:35:40Z",
      "url": "https://apps.apple.com/us/app/xcom-2-collection/id1288508230",
      "storeId": 1288508230,
      "developer": "Feral Interactive Ltd",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки.",
        "en": "Minor issues have been resolved."
      }
    },
    "cultistsimulator": {
      "version": "3.7.4",
      "date": "2026-09-23T22:03:24Z",
      "url": "https://apps.apple.com/us/app/cultist-simulator/id1439886655",
      "storeId": 1439886655,
      "developer": "Playdigious",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены результаты использования Reason в Physician legacy и проблемы со шрифтами русской локализации.",
        "en": "Reason outcomes in the Physician legacy are corrected, along with Russian-localisation font issues."
      }
    },
    "happvpn": {
      "version": "5.9.0",
      "date": "2026-09-22T08:51:59Z",
      "url": "https://apps.apple.com/us/app/happ-proxy-utility/id6504287215",
      "storeId": 6504287215,
      "developer": "Flyfrog LLC",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Исправлены небольшие ошибки и улучшена работа приложения.",
        "en": "Small errors have been corrected and the app has been refined."
      }
    },
    "amneziavpn": {
      "version": "5.0.3",
      "date": "2026-09-21T06:02:14Z",
      "url": "https://apps.apple.com/us/app/amneziavpn/id1600529900",
      "storeId": 1600529900,
      "developer": "Privacy Technologies",
      "checkedAt": "2026-09-25",
      "text": {
        "ru": "Повышена стабильность приложения.",
        "en": "Improved app stability."
      }
    },
    "avito": {
      "url": "https://www.rustore.ru/catalog/app/com.avito.android",
      "version": "233.5",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Обновили оформление, добавили новые возможности и исправили недочёты.",
        "en": "Refreshed the design, added features and corrected issues."
      }
    },
    "sber": {
      "url": "https://www.rustore.ru/catalog/app/ru.sberbankmobile",
      "version": "17.11.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили поиск валюты в офисах и новые способы автонакопления: процент от дохода и округление покупок.",
        "en": "Added currency availability search at branches and automatic saving through income percentages and purchase rounding."
      }
    },
    "max": {
      "url": "https://www.rustore.ru/catalog/app/ru.oneme.app/versions",
      "version": "26.16.4",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили перевод видеосообщений в текст и повысили скорость работы.",
        "en": "Added video-message transcription and improved app speed."
      }
    },
    "vkvideo": {
      "url": "https://www.rustore.ru/catalog/app/com.vk.vkvideo",
      "version": "1.161",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Повысили стабильность приложения для просмотра видео.",
        "en": "Improved app stability for watching videos."
      }
    },
    "mail": {
      "url": "https://www.rustore.ru/catalog/app/ru.mail.mailapp",
      "version": "15.103.1.146733",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Ускорили работу приложения и освежили оформление.",
        "en": "Improved app speed and refreshed the interface."
      }
    },
    "tbank": {
      "url": "https://www.rustore.ru/catalog/app/com.idamob.tinkoff.android",
      "version": "8.2.1",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "В «Защите близких» появился запрос на снятие наличных сверх лимита и возможность его отменить.",
        "en": "Family Protection now lets you request cash withdrawals above the limit and cancel those requests."
      }
    },
    "vtb": {
      "url": "https://www.rustore.ru/catalog/app/ru.vtb24.mobilebanking.android",
      "version": "20.15.1.3",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили уведомления о входе с другого устройства и сохранение черновиков платёжных реквизитов.",
        "en": "Added alerts for sign-ins on another device and drafts for payment details."
      }
    },
    "alfa": {
      "url": "https://www.rustore.ru/catalog/app/ru.alfabank.mobile.android",
      "version": "12.59.14",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили отслеживание прогрессивного кэшбэка и упростили смену офиса и менеджера Alfa Only.",
        "en": "Added progressive cashback tracking and simplified changing an Alfa Only branch or manager."
      }
    },
    "ozonbank": {
      "url": "https://www.rustore.ru/catalog/app/ru.ozon.fintech.finance",
      "version": "19.33.1",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Внесли внутренние доработки приложения.",
        "en": "Refined the app’s internal operation."
      }
    },
    "gazprom": {
      "url": "https://www.rustore.ru/catalog/app/ru.gazprombank.android.mobilebank.app",
      "version": "6.4.3",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили переводы и оплату покупок цифровыми рублями.",
        "en": "Added transfers and purchase payments using digital rubles."
      }
    },
    "halva": {
      "url": "https://www.rustore.ru/catalog/app/ru.sovcomcard.halva.v1",
      "version": "7.29.3-gms",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Обновили «Халва.Десятку», доработали оплату ЖКХ и добавили автопополнение карты из Копилки.",
        "en": "Refreshed Halva.Desyatka, refined utility payments and added automatic card top-ups from savings."
      }
    },
    "mirpay": {
      "url": "https://www.rustore.ru/catalog/app/ru.nspk.mirpay",
      "version": "1.64.5.350",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили привязку карты к Huawei Watch 5 и Ultimate 2. Доработали оплату в интернет-магазинах.",
        "en": "Added card linking for Huawei Watch 5 and Ultimate 2, and refined online-store payments."
      }
    },
    "yoomoney": {
      "url": "https://www.rustore.ru/catalog/app/ru.yoo.money",
      "version": "11.49.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили китайский язык и повысили стабильность приложения.",
        "en": "Added Chinese-language support and improved app stability."
      }
    },
    "ypay": {
      "url": "https://www.rustore.ru/catalog/app/com.yandex.bank",
      "version": "0.238.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Исправили небольшие недочёты и повысили стабильность приложения.",
        "en": "Corrected small issues and improved app stability."
      }
    },
    "wbbank": {
      "url": "https://www.rustore.ru/catalog/app/ru.wildberries.bank",
      "version": "7.7.8000-rustore",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Исправили ошибки и недочёты в работе банка.",
        "en": "Corrected errors and minor issues in the banking app."
      }
    },
    "rutube": {
      "url": "https://www.rustore.ru/catalog/app/ru.rutube.app",
      "version": "31.16.0-rustore",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Внесли небольшие внутренние доработки приложения.",
        "en": "Made small internal refinements to the app."
      }
    },
    "megafon": {
      "url": "https://www.rustore.ru/catalog/app/ru.megafon.mlk",
      "version": "4.69.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Обновили оформление и сделали важную информацию заметнее.",
        "en": "Refreshed the design and made key information easier to spot."
      }
    },
    "rshb": {
      "url": "https://www.rustore.ru/catalog/app/ru.rshb.dbo",
      "version": "26.08.15",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Ускорили приложение и повысили стабильность работы.",
        "en": "Improved app speed and stability."
      }
    },
    "uralsib": {
      "url": "https://www.rustore.ru/catalog/app/ru.bankuralsib.mb.android",
      "version": "4.90",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Обновили «Игры и сервисы»: пополнение игровых аккаунтов, ваучеры и продление подписок.",
        "en": "Updated Games and Services with account top-ups, game vouchers and subscription renewals."
      }
    },
    "mkb": {
      "url": "https://www.rustore.ru/catalog/app/ru.mkb.mobile",
      "version": "3.144.0.35",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Повысили производительность и стабильность приложения.",
        "en": "Improved app performance and stability."
      }
    },
    "mtsmoney": {
      "url": "https://www.rustore.ru/catalog/app/ru.lewis.dbo",
      "version": "3.54.1",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Ускорили приложение и сделали его удобнее.",
        "en": "Made the app faster and easier to use."
      }
    },
    "akbars": {
      "url": "https://www.rustore.ru/catalog/app/ru.akbars.mobile",
      "version": "3.217.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Исправили ошибки и повысили стабильность приложения.",
        "en": "Resolved errors and improved app stability."
      }
    },
    "russtandard": {
      "url": "https://www.rustore.ru/catalog/app/ru.simpls.brs2.mobbank",
      "version": "5.17.0.14902-GMS",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Исправили ошибки, о которых сообщили пользователи.",
        "en": "Resolved issues reported by users."
      }
    },
    "tinvest": {
      "url": "https://www.rustore.ru/catalog/app/ru.tinkoff.investing",
      "version": "7.12.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Открытая позиция теперь видна прямо в режиме активной торговли. Ускорили приложение.",
        "en": "Open positions are now visible in active trading mode. Improved app speed."
      }
    },
    "sberinvest": {
      "url": "https://www.rustore.ru/catalog/app/ru.sberbank.investor",
      "version": "4.4.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили рейтинги облигаций, шкалу риска и фильтры для сравнения выпусков.",
        "en": "Added bond ratings, a risk scale and filters for comparing issues."
      }
    },
    "alfainvest": {
      "url": "https://www.rustore.ru/catalog/app/ru.alfadirect.app",
      "version": "2.44.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили торговлю прямо из стакана и новые интервалы Pro-графика.",
        "en": "Added trading directly from the order book and additional Pro-chart intervals."
      }
    },
    "kuper": {
      "url": "https://www.rustore.ru/catalog/app/ru.instamart",
      "version": "17.5.58",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Внесли небольшие доработки приложения.",
        "en": "Made small refinements to the app."
      }
    },
    "samokat": {
      "url": "https://www.rustore.ru/catalog/app/ru.sbcs.store",
      "version": "4.15.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Обновили внутреннюю часть приложения.",
        "en": "Updated the app’s internal components."
      }
    },
    "premier": {
      "url": "https://www.rustore.ru/catalog/app/gpm.tnt_premier",
      "version": "2.131.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Исправили ошибки. В каталоге — комедия «Голливудск».",
        "en": "Resolved errors. The comedy Gollywoodsk is available in the catalogue."
      }
    },
    "okko": {
      "url": "https://www.rustore.ru/catalog/app/ru.more.play",
      "version": "8.183.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Обновили приложение. Смотрите драму «Большая фарма».",
        "en": "Updated the app. Watch the drama Bolshaya Pharma."
      }
    },
    "zvuk": {
      "url": "https://www.rustore.ru/catalog/app/com.zvooq.openplay",
      "version": "4.116.0rs",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Исправили ошибки и ускорили приложение.",
        "en": "Resolved errors and made the app faster."
      }
    },
    "zoom": {
      "url": "https://apps.apple.com/us/app/zoom-workplace/id546505307",
      "version": "6.7.0",
      "platform": "iOS",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Упростили управление встречами и добавили быстрый поиск сообщений, контактов и файлов.",
        "en": "Simplified meeting controls and added quick search for messages, contacts and files."
      }
    },
    "yandexdisk": {
      "url": "https://www.rustore.ru/catalog/app/ru.yandex.disk",
      "version": "6.82.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "На главной странице появились новые подборки фотографий в «Воспоминаниях».",
        "en": "Added more photo collections to Memories on the home screen."
      }
    },
    "zen": {
      "url": "https://www.rustore.ru/catalog/app/ru.zen.android",
      "version": "26.8.4",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили виджет погоды с температурой и осадками в верхней части экрана.",
        "en": "Added a weather widget showing temperature and precipitation at the top of the screen."
      }
    },
    "aviasales": {
      "url": "https://www.rustore.ru/catalog/app/ru.aviasales",
      "version": "7.32.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Ускорили приложение и сделали его работу плавнее и стабильнее.",
        "en": "Made the app faster, smoother and more stable."
      }
    },
    "exteragram": {
      "url": "https://t.me/s/exteragram",
      "version": "12.9.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили общую ленту каналов, обновили оформление и улучшили запись видеосообщений.",
        "en": "Added a combined channel feed, refreshed the interface and improved video-message recording."
      }
    },
    "moegramx": {
      "url": "https://github.com/moeCrafters/moeGramX/releases/tag/v0.28.10.1799-beta",
      "version": "0.28.10.1799",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили выбор канала в настройках приватности и исправили переключатель отображения ID.",
        "en": "Added channel selection in privacy settings and corrected the user-ID display toggle."
      }
    },
    "ayugram": {
      "url": "https://t.me/s/AyuGramReleases",
      "version": "20260110",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Исправили чрезмерный расход места, очистку сохранённых вложений и отдельные вылеты.",
        "en": "Fixed excessive storage use, saved-attachment cleanup and some crashes."
      }
    },
    "nekogram": {
      "url": "https://t.me/s/nekoupdates",
      "version": "12.5.2",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Вкладки папок теперь можно перенести вниз. Исправлены ошибки.",
        "en": "Folder tabs can now be moved to the bottom. Errors have been corrected."
      }
    },
    "standchillow": {
      "url": "https://t.me/s/chillow",
      "version": "2.06",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили режимы «Бунт» и «Эскалация», зажигательные гранаты и инвентарь во время матча.",
        "en": "Added Riot and Escalation modes, incendiary grenades and access to inventory during matches."
      }
    },
    "carparking": {
      "url": "https://play.google.com/store/apps/details?id=com.olzhas.carparking.multyplayer",
      "version": null,
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили события World Cup и Time Attack, новые машины и локацию. Доработали физику автомобилей.",
        "en": "Added World Cup and Time Attack events, cars and a location. Refined vehicle physics."
      }
    },
    "solitaire": {
      "url": "https://play.google.com/store/apps/details?id=com.mobilityware.solitaire",
      "version": null,
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Оптимизировали производительность, чтобы пасьянс работал стабильнее.",
        "en": "Optimised performance for more stable play."
      }
    },
    "netflix": {
      "url": "https://play.google.com/store/apps/details?id=com.netflix.mediaclient",
      "version": null,
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Доработали просмотр фильмов и сериалов на телефонах и планшетах.",
        "en": "Refined watching films and series on phones and tablets."
      }
    },
    "canva": {
      "url": "https://apps.apple.com/us/app/canva-ai-photo-video-editor/id897446215",
      "version": "4.225.1",
      "platform": "iOS",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили создание подписей к публикациям с ИИ и новые шаблоны по мотивам «Моаны».",
        "en": "Added AI-generated post captions and Moana-inspired templates."
      }
    },
    "vkmusic": {
      "url": "https://www.rustore.ru/catalog/app/com.uma.musicvk",
      "version": "8.42",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Повысили стабильность приложения для прослушивания музыки.",
        "en": "Improved app stability for listening to music."
      }
    },
    "twitterx": {
      "url": "https://apps.apple.com/us/app/x/id333903271",
      "version": "12.29",
      "platform": "iOS",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Исправили ошибки и доработали приложение.",
        "en": "Resolved errors and refined the app."
      }
    },
    "lifeafter": {
      "url": "https://play.google.com/store/apps/details?id=com.netease.mrzhna",
      "version": null,
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили киборгов и новую главу выживания Twin Deadlands.",
        "en": "Introduced Cyborgs and the Twin Deadlands survival chapter."
      }
    },
    "bspb": {
      "url": "https://www.rustore.ru/catalog/app/ru.bspb",
      "version": "6.50.5",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили новые справки и отправку документов. Улучшили переводы по номеру телефона.",
        "en": "Added document requests and document submission. Improved phone-number transfers."
      }
    },
    "avangard": {
      "url": "https://www.rustore.ru/catalog/app/ru.avangard",
      "version": "3.19.9",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили считывание универсального QR-кода и подтверждение платежей СБП внутри приложения.",
        "en": "Added universal QR scanning and in-app confirmation for Faster Payments."
      }
    },
    "vk": {
      "url": "https://www.rustore.ru/catalog/app/com.vkontakte.android",
      "version": "8.194",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Исправили ошибки и повысили производительность приложения.",
        "en": "Resolved errors and improved app performance."
      }
    },
    "ok": {
      "url": "https://www.rustore.ru/catalog/app/ru.ok.android",
      "version": "26.9.1",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Обновили рекомендации в ленте: посты и клипы точнее подбираются по интересам.",
        "en": "Improved feed recommendations to better match posts and clips to your interests."
      }
    },
    "psb": {
      "url": "https://www.rustore.ru/catalog/app/logo.com.mbanking",
      "version": "3.102.0",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Изменили поиск и сделали историю операций удобнее. Повысили производительность приложения.",
        "en": "Updated search and made transaction history easier to use. Improved app performance."
      }
    },
    "aigram": {
      "url": "https://play.google.com/store/apps/details?id=org.telegram.messenger.aigram",
      "version": null,
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Исправили переключение между аккаунтами и отдельные вылеты. Улучшили работу переводчика.",
        "en": "Fixed account switching and some crashes. Improved translation reliability."
      }
    },
    "mobilelegends": {
      "url": "https://apps.apple.com/kh/app/mobile-legends-bang-bang/id1160056295",
      "version": "1.9.73.1063.2",
      "platform": "iOS",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Переработали Кимми и Глу, расширили систему коллекций.",
        "en": "Revamped Kimmy and Gloo and expanded the Collection system."
      }
    },
    "standoffcase": {
      "url": "https://www.rustore.ru/catalog/app/com.MobileFusing.GoldSimulator",
      "version": "1.25",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Первый выпуск симулятора с открытием кейсов и коллекцией трёхмерных скинов.",
        "en": "Initial simulator release with case opening and a collection of 3D skins."
      }
    },
    "brawlbox": {
      "url": "https://www.rustore.ru/catalog/app/com.YouKo.BSsim",
      "version": "57",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Первый выпуск симулятора с выбором и открытием боксов.",
        "en": "Initial simulator release with box selection and opening."
      }
    },
    "nullsbrawl": {
      "url": "https://forum.dnull.xyz/t/nulls-brawl-40-150-update/193957",
      "version": "40.150",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили Лолу, снаряжение и новый игровой контент. Исправили ошибки.",
        "en": "Added Lola, gears and new game content. Resolved errors."
      }
    },
    "expobank": {
      "url": "https://www.rustore.ru/catalog/app/ru.ftc.faktura.expobank",
      "version": "4.45.1",
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Доработали приложение, чтобы пользоваться банком было удобнее.",
        "en": "Refined the app to make banking easier."
      }
    },
    "arizonamobile": {
      "url": "https://play.google.com/store/apps/details?id=com.arizona21.game",
      "version": null,
      "platform": "Android",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Добавили «Дворец крафтов» и новые предметы для создания. Доработали такси и личный транспорт.",
        "en": "Added the Craft Palace and new craftable items. Refined taxis and personal vehicles."
      }
    },
    "v2raytun": {
      "url": "https://apps.apple.com/bm/app/v2raytun/id6476628951",
      "version": "2.4.2",
      "platform": "iOS",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Обновили ядро Xray и исправили критические ошибки.",
        "en": "Updated the Xray core and fixed critical errors."
      }
    },
    "hakogram": {
      "url": "https://t.me/hakogram_app/10",
      "version": null,
      "platform": "Mobile",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Обновили настройки оформления и расширили медиаплеер. Добавили настраиваемые реакции.",
        "en": "Improved appearance customisation and expanded the media player. Added customisable reactions."
      }
    },
    "rustmobile": {
      "url": "https://www.rustmobile.com/en/news-kings-of-chaos.html",
      "version": "2nd Beta",
      "platform": "Android/iOS",
      "checkedAt": "2026-09-25",
      "selection": "current-or-earlier-release",
      "text": {
        "ru": "Во второй бете появился турнир Kings of Chaos с командными боями и рейдами на базы.",
        "en": "The second beta introduced Kings of Chaos, a tournament featuring team battles and base raids."
      }
    },
    "sberkids": {
      "version": "5.16.0",
      "date": "2026-10-01T00:00:00Z",
      "url": "https://www.rustore.ru/catalog/app/ru.sberbank.sberkids",
      "storeId": null,
      "developer": "ПАО Сбербанк",
      "checkedAt": "2026-10-06",
      "text": {
        "ru": "Теперь поиск операций работает как настоящий сыщик, а на экранах ошибок — мини-игра, чтобы не скучать во время сбоев.",
        "en": "Transaction search now works like a real detective, and error screens include a mini-game so you don't get bored during outages."
      }
    },
    "rave": {
      "version": "9.0.47",
      "date": "2026-10-02T00:00:00Z",
      "url": "https://www.rustore.ru/catalog/app/com.wemesh.android",
      "storeId": "com.wemesh.android",
      "developer": "Rave (Wemesh Inc.)",
      "checkedAt": "2026-10-11",
      "text": {
        "ru": "Исправили ошибки, из-за которых приложение закрывалось во время сеанса. Повысили стабильность работы при длительных совместных просмотрах. Внесли внутренние доработки для ускорения загрузки видео.",
        "en": "Fixed crashes that occurred during watch-party sessions. Improved stability during long group viewings. Made internal refinements that speed up video loading."
      }
    }
  },
  "checkedAt": "2026-09-25",
  "reviewsAreFictional": true
};
