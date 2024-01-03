<template>
    <div
    style="overflow-y: scroll;
    height: 450px;
    "
    >
        <div class="w-11/12 mx-auto ">
            <div class="float-right  bg-blue rounded-xl h-10 w-10  text-center pt-1 text-3xl">
                <button @click="dataStore.showTotalCheck = !dataStore.showTotalCheck">×</button>
            </div>
            <div class="mx-auto">
                <h1 class="text-center text-3xl">Инструкция ДелиЧек</h1>
                <p class="text-center pt-2 pb-2 ">*к ней всегда можно вернуться и понять что и как))*</p>

            <div class="bg-bg mt-4 mb-4" style="height: 1px;"></div>


                <p>ДелиЧек - это приложение, созданное для больших компаний,
                     которые постоянно делят чек. Больше не нужно писать на салфетках или с пьяну пытаться запомнить кто кому сколько должен!</p>
            </div>

            <div class="bg-bg mt-4 mb-4" style="height: 1px;"></div>

            <div>
                <h3 class="text-center text-2xl pb-2">Добавляем друзей</h3>
                <p class="pt-2 pb-2">Вводи в строку всех своих друзей и нажимай добавить! Если захочешь - в списке ниже сможешь его удалить. Нужно минимум 3 друга!
                    После этого смело жми "поехали дальше!"
                </p>
                <img src="../../assets/img/instr/1.jpg" class="rounded-xl mx-auto h-52 border-double border-2 border-sky-500">
            </div>

            <div class="bg-bg mt-4 mb-4" style="height: 1px;"></div>
            
            <div>
                <h3 class="text-center text-2xl pb-2">Добавляем продукты</h3>
                <p class="pt-2 pb-2">Добавь в эту строку название заказа нажми "берем!".  </p>
                <img src="../../assets/img/instr/2.jpg" class="rounded-xl border-double h-48 mx-auto border-2 border-sky-500">
                <p>После этого заказ появится в списке, и его нужно будет заполнить. Для этого жми на "≡" </p>

                <img src="../../assets/img/instr/3.jpg" class="rounded-xl border-double   mx-auto border-2 border-sky-500">
                 
                <p class="pt-2 pb-2">После этого откроется панель с формой, которую необходимо заолнить) Нужно ввести стоимость заказа, кто платит и между кем мы делим заказ. Далее жмем "Добавить в заказ"</p>
        
                <img src="../../assets/img/instr/4.jpg" class="rounded-xl border-double h-60  mx-auto border-2 border-sky-500">
                <p class="pt-2 pb-2">После этого у вас останется в списке данные о покупке, которую, если че, можно удалить и не вносить в итоговый чек) Как только добавите все что нужно, жмите "Официант! Счет!"</p>
                <img src="../../assets/img/instr/5.jpg" class="rounded-xl border-double mx-auto border-2 border-sky-500">

            <div class="bg-bg mt-4 mb-4" style="height: 1px;"></div>


                <p class="mt-2 mb-2">Пора прощаться( Перед вами все должники и их задолжности... Почаще проводите время с друзьями, до новых встреч!</p>
                <img src="../../assets/img/instr/6.jpg" class="rounded-xl border-double mx-auto border-2 border-sky-500">
                <p class="text-center pt-4 text-xs">*Данное приложение создано, чтобы продемонстрировать талант автора. Нет никаких гарантий, что чек по итогу будет нормально посчитан, т.к. алгоритм был написан от нечего делать на лекции по Метрологии*</p>

<p></p>
            </div>

        </div>
    </div>
</template>
<script>
import { useDataStore } from '../../store/DataStore';
export default{
    name: 'instruct-div',
    props:{
        showInstr:{
            type: Boolean,
            required: true
        }
    },
    data(){
        return{
            dataStore: useDataStore()
        }
    }


}

</script>
<style>

</style>