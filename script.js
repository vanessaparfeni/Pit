const output = document.querySelector('.output')

function funcHome() {
    output.innerHTML = ``
    output.innerHTML = `
    <h1>YOUR KETO DIET</h1>
    <h5>План питания</h5>`
}

function funcBreakfast() {
    output.innerHTML = ``
    output.innerHTML = `
    <h1>
            - Рецепт №1
    </h1>
    <h3>
        Яичный блин с грибами.<br>
    </h3>
    <h4>
    КБЖУ на 100г готового блюда:<br>
    Калории,ккал <b>225<br>
    Белки,грамм <b>10<br>
    Жиры,грамм <b>20<br>
    Углеводы,грамм <b>0.8<br>
    </h4>
    <h3>
        Ингредиенты:
    </h3> 
       <pre>
        Яйца - 2шт.
        Сливочное масло.
        Сыр твердый.
        Шампиньоны - 100г.
        Сливки 10% жирности.
        Зелень и специи по вкусу.
        </pre>
    <br>
    <h3>
        Способ приготовления:
    </h3>
        
1. Взбить яйца вилкой и подсолить .
2. 100г шампиньонов предварительно обжарить на 
  сковородес добавлением сливочного масла,затем 
  снять в отдельную ёмкость.
3. Яичную массу залить на горячую сковороду,обжарить
с одной стороны,доюавить готовые грибы на одну половину
  блина,посыпать сыром и накрыть второй половиной блина.</>
        

    <h1>
        -Рецепт №2
    </h1>
    <h3>
        Сырники с яблоком.
    </h3>
    <h4>
        КБЖУ на 100г готового блюда:<br>
        Калории,ккал <b>192<br>
        Белки,грамм <b>14<br>
        Жиры,грамм <b>8.7<br>
        Углеводы,грамм <b>13<br>
    </h4>
    <h3>
        Ингредиенты:
    </h3>
       <pre>
        Творог 5% - 100г.
        Сметана 15% - 2 ст.л
        Мука.
        Яйцо - 1шт.
        Сахар - 2 ч.л.
        Яблоко - 1шт.
        </pre>

    <h3>
        Способ приготовления:
    </h3>
        <pre>
1. Соединить яйцо и творог,добавить сметану.
2. Яблоко очистить от кожуры и нарезать произвольно.
3. Смешать все ингредиенты и взбить блендером.
  Полученную массу порцоинно выкладываем ложкой 
  на сухую разогретую сковороду.
4. Обжариваем с двух сторон до гогтовности. 
  При желании можно добавить мёд\топпинг.
       </pre>
       
    <h1>
        -Рецепт №3
    </h1>
    <h3>
        Яичница с лососем и сыром.
    </h3>
    <h4>
        КБЖУ на 100г готового блюда:<br>
        Калории,ккал <b>165<br>
        Белки,грамм <b>6.4<br>
        Жиры,грамм <b>14<br>
        Углеводы,грамм <b>1.5<br>
    </h4>
    <h3>
     Ингредиенты:
    </h3>
       <pre>
        Куриное яйцо - 1шт.
        Сыр (камамбер) - 45г.
        Огурец - 1шт.
        Авокадо (~140г).
        Лосось - 50г.
       </pre>

    <h3>
        Способ приготовления:
    </h3>
    <pre>
1. На разогретой сковороде поджарить яйцо.
2. Выложить на тарелку,посолить и приправить по вкусу.
3. Добавить нарезанный слайсами авокадо,сыр,лосось и 
  один свежий огурец разрезанный вдоль на четвертинки.
    </pre>
    `
}

function funcLunch() {
    output.innerHTML = ``
    output.innerHTML = `	
    <h1>
        -Рецепт №1
    </h1>
    <h3>
        Жульен.
    </h3>
    <h4>
        КБЖУ на 100г готового блюда:<br>
        Калории,ккал <b>140<br>
        Белки,грамм <b>17<br>
        Жиры,грамм <b>6.9<br>
        Углеводы,грамм <b>1.1<br>
    </h4>
    <h3>
        Ингредиенты:
    </h3>
        <pre>
        Свинина - 350г.
        Репчатый лук - 1шт.
        Сливки 10% жтрности - 100г.
        Шампиньоны - 300г.
        Сливочное масло - 1ст.л.
        Сыр твердый - 50г.
        </pre>
    <h3>
        Способ приготовления:
    </h3>
        <pre>
1. Мясо промыть и нарезать кубиками.<br>
2.Подготовить овощи.Мясо обжарить на <br>
  небольшом количестве сливочного масла,<br>
  убрать в отдельную ёмкость.<br>
3. Грибы и лук обжарить,смешать с мясом. <br>
  Полученную смесь выложить в порционные<br>
  формы для запекания, залить сливками<br>
  и посыпать тёртым сыром.<br>
4. Отправить в духовку при  180 градусов<br>
  на 10-15 мин.<br>
        </pre>
        
        
    <h1>     
        -Рецепт №2
    </h1>
    <h3>
        Запечённый картофель.
    </h3>
    <h4>
        КБЖУ на 100г готового блюда:<br>
        Калории,ккал <b>160<br>
        Белки,грамм <b>11<br>
        Жиры,грамм <b>9.4<br>
        Углеводы,грамм <b>8.1<br>
    </h4>
    <h3>    
        Ингредиенты:
    </h3>
       <pre>
        Картофель - 4шт.
        Соль/перец/специи по вкусу.
        Мясной фарш - 200г.
        Зелень по вкусу.
        Растительное масло - 1ст.л.
        Яцо - 2шт.
        Сыр твёрдый(голландский)- 100г.
        </pre>
    <h3>
        Способ приготовления:
    </h3>
        <pre>
1. Смазать картофель растительным маслом,<br>
  посолить и поперчить - отправить в духовку <br>
  запекать 20-25 мин. при температуре 180 град.<br>
2. Запечённы картофель достать,снять бочек<br>
  и вынуть серединку.<br>
3. Смешать картофельную массу с яйцами,фаршем <br>
  и специями.Полученную смесь выложить в <br>
  картофель и накрыть тёртым сыром.<br>
4. Снова отправить в духовку на 10 минут. <br>
        </pre>
    <h1>
            -Рецепт №3
    </h1>
    <h3>
        Яичница болтунья.
    </h3>
    <h4>
        КБЖУ на 100г готового блюда:<br>
        Калории,ккал <b>250<br>
        Белки,грамм <b>6.8<br>
        Жиры,грамм <b>20<br>
        Углеводы,грамм <b>11<br>
    </h4>
    <h3>
        Ингредиенты:
    </h3>
         <pre>
        Яйца - 2шт.
        2 ломтика чёрного бородинского хлеба.
        Помидор - 1шт.
        Растительное масло - 2 ст.л.
        Слиыочный сыр 34% жирности - 50гр.
        </pre>
    <h3>
        Способ приготовления:
    <h3>
        <pre>
1. Вбить 2 яйца,постоянно перемешивая в
  процессе жарки.
2. Готовую яичницу выложить на блюдо.
3. Два ломтика Хлеба намазать сливочным сыром,
  сверху выложить кружочки помидора.
4. Подсолить и приправить по желанию.
        </pre>    
    
    <h1>
        -Рецепт №4
    </h1>
    <h3>
        Куриные бёдра в сливочном соусе.
    </h3>
    <h4>
        КБЖУ на 100г готового блюда:<br>
        Калории,ккал <b>135</b><br>
        Белки,грамм <b>13<br>
        Жиры,грамм <b>7.7<br>
        Углеводы,грамм <b>2.1<br>
    </h4>
    <h3>
        Ингредиенты:
    </h3>
         <pre>
        Куриные бёдра - 4 шт.
        Чеснок - 3 зубчика.
        Твёрдый сыр - 100г.
        Брокколи - 500г.
        Сливки 10% - 150мл.
        Растительное масло - 1 ст.л.
         </pre>
    <h3>
        Способ применения:
    </h3>
         <pre>
1. Куриные бедра посолить и приправить.<br>
2. На разогретой сковороде с маслом обжарить<br>
  с двух сторон до полуготовности,убрать с огня.<br>
3. На том же масле приготовить брокколи,<br>
  добавить чеснок,выложить курицу,залить сливками.<br>
4. Протушить, в конце посыпать тёртым сыром.<br>
         </pre>
        `
    }

    function funcDinner() {
        output.innerHTML = ``
        output.innerHTML = `
    <h1>
        -Рецепт №1
    </h1>
    <h3>
        Фаршированный перец.
    </h3>
    <h4> 
        КБЖУ на 100г готового блюда:<br>
        Калории,ккал <b>172<br>
        Белки,грамм <b>15<br>
        Жиры,грамм <b>11<br>
        Углеводы,грамм <b>3.2<br>
    </h4>
    <h3>
        Ингредиенты:
    </h3>
        <pre>
        Болгарский перец - 4 шт.(~600г)
        Сливочный сыр - 200г.
        Фарш из индейки/курицы - 600гр.
        Соль и специи по вкусу.
        </pre>
    <h3>
        Способ приготовления:
    </h3>
        <pre>
1. С перца срезать хвостики(оставить<br>
  как крышечки).<br>
2. Подготовить фарш, к нему добавить специи и<br>
  сливочный сыр. Тщательно перемешать и<br>
  нафаршировать перец.<br>
3. Перцы накрыть крышечками и отправить в<br>
  духовку на 1 час при температуре <br>
  160-180 градусов.<br>
        </pre>
        `
    
    }


function Clear(){
        output.innerHTML = ``
        output.innerHTML = `
        <h1>YOUR KETO DIET</h1>
        <h5>План питания</h5>`
}