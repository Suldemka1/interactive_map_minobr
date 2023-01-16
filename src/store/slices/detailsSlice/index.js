import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "./service";

const initialState = {
  isOpen: false,
  data: {
    id: 1,
    code: "1701001",
    type: "dou",
    name: "МАДОУ Детский сад №1 г.Кызыла\r\n",
    area: "г. Кызыл",
    address: {
      code: "667000",
      number: "2а",
      region: "г. Кызыл",
      street: "ул. Бай-Хаакская"
    },
    contacts: {
      email: "E-mail: bazhina.zolotoiklujik@yandex.ru",
      phones: [
        {
          phone: "8(39422)6-29-25"
        },
        {
          phone: "8(39422)6-29-20"
        }
      ]
    },
    k1: "51.702601",
    k2: "94.432169",
    web_site: "detsad1-kyzyl.rtyva.ru",
    hot_meals: "Питание 5-х разовое: завтрак, завтрак-2, обед, полдник, ужин в зависимости от возраста детей и их распорядка дня. Питание детей в Учреждении осуществляется в соответствии с примерным  10-дневным меню, рассчитанное на 2 недели, с учетом рекомендуемых среднесуточных норм питания. В детском саду организован питьевой режим, обеспечивающий безопасность качества питьевой воды, которая отвечает требованиям САнПин.",
    director: "",
    programm: "",
    activity: {
      item: ""
    },
    cos: true,
    trosta: true,
    itcube: true,
    kvant: true,
    mastery: [{
      name: "Учебная пекарня"
    },
    {
      name: "Цех по выделке шкуры"
    },
    {
      name: "Мастерская общестроительных работ"
    },
    {
      name: "Сварочная мастерская со слесаркой"
    },
    {
      name: "Слесарная мастерская"
    },
    {
      name: "Швейный мастерская «Золотая нить»"
    }]
  }

}

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.isOpen = !state.isOpen
    }
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.data = action.payload
      console.log(action.payload)
    }
  }
})

export const { setData } = detailsSlice.actions
export default detailsSlice.reducer