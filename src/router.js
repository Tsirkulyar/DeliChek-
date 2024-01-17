import {createRouter, createWebHistory} from 'vue-router'
import HelloCard from './components/pages/HelloCard.vue'
import GeneralForm from './components/pages/GeneralForm.vue'
import AddProducts from './components/pages/AddProducts.vue'
import CheckPage from './components/pages/CheckPage.vue'

export default createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/DeliChek-/',
            name:'HelloCard',
            component: HelloCard},
        {
            path: '/DeliChek-/users',
            name:'GeneralForm',
            component: GeneralForm},
        {
            path: '/DeliChek-/products',
            name:'AddProducts',
            component: AddProducts
        },
        {
            path: '/DeliChek-/check',
            name:'CheckPage',
            component: CheckPage
        }
    ]
})

