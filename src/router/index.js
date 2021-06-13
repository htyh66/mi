import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import Product from '../views/Product.vue'
import Detail from '../views/Detail.vue'
import Cart from '../views/Cart.vue'
import Order from '../views/Order.vue'
import OrderList from '../views/OrderList.vue'
import OrderConfirm from '../views/OrderConfirm.vue'
import OrderPay from '../views/OrderPay.vue'
import Login from '../views/Login.vue'
import AliPay from '../views/AliPay.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'Index',
        component: Index
      }, {
        path: '/product/:id',
        name: 'Product',
        component: Product
      }, {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
      },
    ]
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }, {
    path: '/order',
    name: 'Order',
    component: Order,
    children: [
      {
        path: 'list',
        name: 'List',
        component: OrderList
      }, {
        path: '/confirm',
        name: 'OrderConfirm',
        component: OrderConfirm
      }, {
        path: '/pay',
        name: 'OrderPay',
        component: OrderPay
      }
    ]
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
