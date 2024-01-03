import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useDataStore = defineStore('dataStore', () => {
  const users = ref([])
  let user = ref({
    id: '',
    name: ''
  })
  const products = ref([])
  const product = ref({
    id: '',
    name: ''
  })
  const amountProducts = ref([])
  const pr = ref('/products')
  const card = ref(true)
  const userPage = ref(true)
  const CheckPage = ref(true)
  const showBtnCheck = ref(true)
  const dialogVisible = ref(false)
  const showUs = ref(true)
  const showPr = ref(true)
  const showTotalCheck = ref(false)
  const showSelect = ref(false)
  const showCheckBox = ref(false)
  const showNotPrice = ref(false)
  const controlCredit = ref(false)
  const showCredit = ref(false)
  const textDialog = ref('')
  const PrtextDialogBtn = ref('')
  const textDialogBtn = ref('')
  const textDialogBtnPr = ref('')
  const inputSum = ref('')
  const sumTtl = ref(0)
  const CheckedNames = ref([])
  const CreditObjArr = ref([])
  const CommonDuty = ref([])
  const selected = ref('')
  const credit = ref({
    id: '',
    who: '',
    whon: '',
    sum: ''
  })

  const changeCard = () => {
    card.value = false
  }

  const changeUser = () => {
    if (users.value.length > 2) {
      userPage.value = false
    }
  }
  const changeCheck = () => {
    if (products.value.length > 1) {
      CheckPage.value = false
    }
  }
  
  const totalCheck = () => {
    showTotalCheck.value = !showTotalCheck.value
  }
  const saveData = (data) => {
    users.value.push(data)
  }
  const removeUser = (user) => {
    users.value = users.value.filter(p => p.id !== user.id)
  }
  const showDialog = () => {
    dialogVisible.value = true;
  }
  const scoreUser = () => {
    if (users.value.length < 3) {
      textDialogBtn.value = '*надо минимум 3 друга, вдвоем и без ДелиЧек разберётесь'
      return textDialogBtn.value
    } else {
      showUs.value = false
      textDialogBtn.value = 'поехали дальше!'
      return textDialogBtn.value
    }
  }
  const scoreProducts = () => {
    if (amountProducts.value.length > 1) {
      showBtnCheck.value = !showBtnCheck.value
    }
  }
  const AddFormCreateUser = () => {
    user.value.id = Math.random();
    if (user.value.name == '') {
      textDialog.value = 'Нужно его как-то назвать...'
      showDialog()
    } else if (user.value.name.length == 1) {
      textDialog.value = '...Ну не бывает имен из 1 буквы...'
      showDialog()
    } else {
      saveData(user.value)
      user.value = {
        id: '',
        name: ''
      }
      console.log(user)
    }
  }
  // const    createProducts = (product) => {
  //   products.value.push(product)
  // }
  const createProducts = () => {
    product.value.id = Math.random();
    if (product.value.name.length === 0) {
      textDialog.value = 'Так ты же еще ничего не написал('
      showDialog()
    } else if (product.value.name.length === 1) {
      textDialog.value = '...Ну не бывает вещей из 1 буквы...'
      showDialog()
    }
    else {
      products.value.push(product.value)
      product.value = {
        id: '',
        name: ''
      }
    }
  }
  const showUser = () => {
    if (users.value.length > 2) {
      showUs.value = false
      return showUs.value
    }
  }

  const TotalSum = () => {
    console.log(CommonDuty.value[0])
    for (let i = 0; i < CommonDuty.value.length; i++) {
      console.log(sumTtl.value)
      console.log(CommonDuty.value[i].sum)
      sumTtl.value += CommonDuty.value[i].sum
    }
    sumTtl.value = Math.ceil(sumTtl.value)
    // return Math.ceil(sumTtl)
  }


  const DeleteDuty = (pay) => {
    console.log(CommonDuty.value)
    CommonDuty.value = CommonDuty.value.filter((el) => el.delId !== pay.id)
    amountProducts.value = amountProducts.value.filter((el) => el !== pay.id)
  }
  const RecountDuty = () => {
    CommonDuty.value = CommonDuty.value.filter((el) => el.who !== el.whon)
    return CommonDuty.value
  }
  const reverseDuty = () => {
    CommonDuty.value.forEach((elI) => {
      CommonDuty.value.forEach((elJ) => {
        if (elI.who == elJ.whon && elI.whon == elJ.who) {
          credit.value.id = Math.random()
          if (elI.sum >= elJ.sum) {
            credit.value.who = elI.who
            credit.value.whon = elJ.who
            credit.value.sum = elI.sum - elJ.sum
          } else {
            credit.value.who = elJ.who
            credit.value.whon = elI.who
            credit.value.sum = elJ.sum - elI.sum
          }
          CommonDuty.value = CommonDuty.value.filter((i) => i.id !== elJ.id)
          CommonDuty.value = CommonDuty.value.filter((i) => i.id !== elI.id)

          CommonDuty.value.push(credit.value)
          credit.value = {
            id: '',
            who: '',
            whon: '',
            sum: ''
          }
        }
      })
    })
    console.log(CommonDuty.value)
  }

  return {
    users,
    user,
    products,
    product,
    pr,
    card,
    userPage,
    CheckPage,
    dialogVisible,
    showCredit,
    showUs,
    showPr,
    textDialog,
    PrtextDialogBtn,
    textDialogBtnPr,
    textDialogBtn,
    CheckedNames,
    DeleteDuty,
    showSelect,
    showBtnCheck,
    CreditObjArr,
    CommonDuty,
    controlCredit,
    selected,
    amountProducts,
    credit,
    inputSum,
    changeCard,
    changeUser,
    changeCheck,
    saveData,
    showNotPrice,
    showCheckBox,
    removeUser,
    totalCheck,
    showDialog,
    scoreUser,
    sumTtl,
    scoreProducts,
    AddFormCreateUser,
    createProducts,
    showUser,
    TotalSum,
    RecountDuty,
    reverseDuty,
    showTotalCheck
  }
})
